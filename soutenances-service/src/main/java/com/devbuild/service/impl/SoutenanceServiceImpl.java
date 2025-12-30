package com.devbuild.service.impl;

import com.devbuild.config.SoutenancePrerequisitesProperties;
import com.devbuild.dto.AuthorizeSoutenanceRequest;
import com.devbuild.dto.CreateSoutenanceRequest;
import com.devbuild.dto.DirectorApprovalRequest;
import com.devbuild.dto.JuryMemberRequest;
import com.devbuild.dto.RapporteurReportRequest;
import com.devbuild.dto.SetResultRequest;
import com.devbuild.dto.SoutenanceResponse;
import com.devbuild.dto.UpdateSoutenanceStatusRequest;
import com.devbuild.entity.Soutenance;
import com.devbuild.enums.SoutenanceStatus;
import com.devbuild.mapper.JuryMemberMapper;
import com.devbuild.mapper.SoutenanceMapper;
import com.devbuild.repository.SoutenanceRepository;
import com.devbuild.service.iservice.SoutenanceService;
import com.devbuild.service.pdf.PdfService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityNotFoundException;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.EnumSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@Service
@Transactional
public class SoutenanceServiceImpl implements SoutenanceService {

    private static final Logger log = LoggerFactory.getLogger(SoutenanceServiceImpl.class);
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper()
            .registerModule(new com.fasterxml.jackson.datatype.jsr310.JavaTimeModule())
            .disable(com.fasterxml.jackson.databind.SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

    private final SoutenanceRepository soutenanceRepository;
    private final SoutenanceMapper soutenanceMapper;
    private final JuryMemberMapper juryMemberMapper;
    private final SoutenancePrerequisitesProperties prerequisitesProperties;
    private final KafkaTemplate<String, String> kafkaTemplate;
    private final String soutenanceTopic;
    private final String notificationsTopic;
    private final PdfService pdfService;

    public SoutenanceServiceImpl(SoutenanceRepository soutenanceRepository,
                                 SoutenanceMapper soutenanceMapper,
                                 JuryMemberMapper juryMemberMapper,
                                 SoutenancePrerequisitesProperties prerequisitesProperties,
                                 KafkaTemplate<String, String> kafkaTemplate,
                                 @Value("${app.kafka.topics.soutenances:soutenances}") String soutenanceTopic,
                                 @Value("${app.kafka.topics.notifications:notifications}") String notificationsTopic,
                                 PdfService pdfService) {
        this.soutenanceRepository = soutenanceRepository;
        this.soutenanceMapper = soutenanceMapper;
        this.juryMemberMapper = juryMemberMapper;
        this.prerequisitesProperties = prerequisitesProperties;
        this.kafkaTemplate = kafkaTemplate;
        this.soutenanceTopic = soutenanceTopic;
        this.notificationsTopic = notificationsTopic;
        this.pdfService = pdfService;
    }

    @Override
    public SoutenanceResponse createSoutenance(CreateSoutenanceRequest request) {
        ensureDoctorantOwner(request.doctorantAccountId());
        
        // Check if doctorant already has an active soutenance (not REJECTED)
        ensureNoActiveSoutenance(request.doctorantAccountId());
        
        ensurePrerequisites(request);
        ensureDurationRules(request);
        Soutenance entity = soutenanceMapper.toEntity(request);

        entity.setPrerequisitesValid(true);
        entity.setStatus(SoutenanceStatus.SUBMITTED);
        if (request.jury() != null && !request.jury().isEmpty()) {
            attachJury(entity, request.jury());
        }
        entity.setJuryValidated(false);

        if (StringUtils.isNotBlank(entity.getDoctorantEmail())) {
            entity.setAttestationUrl(pdfService.generateAttestation(entity.getThesisTitle(), entity.getDoctorantEmail()));
        }

        Soutenance saved = soutenanceRepository.save(entity);
        publishEvent("SUBMITTED", saved);
        return soutenanceMapper.toResponse(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public SoutenanceResponse getById(UUID soutenanceId) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));
        return soutenanceMapper.toResponse(entity);
    }

    @Override
    @Transactional(readOnly = true)
    public List<SoutenanceResponse> getByDoctorant(UUID doctorantAccountId) {
        UUID current = currentUserId();
        if (current == null || (!current.equals(doctorantAccountId) && !hasAnyRole("ADMIN", "SUPERUSER"))) {
            throw new AccessDeniedException("Accès refusé.");
        }
        return soutenanceRepository.findAllByDoctorantAccountId(doctorantAccountId)
                .stream()
                .map(soutenanceMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<SoutenanceResponse> getByStatus(SoutenanceStatus status) {
        if (!hasAnyRole("ADMIN", "SUPERUSER", "DIRECTEUR")) {
            throw new AccessDeniedException("Accès refusé.");
        }
        return soutenanceRepository.findAllByStatus(status)
                .stream()
                .map(soutenanceMapper::toResponse)
                .toList();
    }

    @Override
    public SoutenanceResponse updateStatus(UUID soutenanceId, UpdateSoutenanceStatusRequest request) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));

        if (request.newStatus() == SoutenanceStatus.SCHEDULED) {
            throw new IllegalArgumentException("Use the scheduling endpoint to plan a soutenance");
        }
        assertAllowedTransition(entity.getStatus(), request.newStatus());

        if (request.newStatus() == SoutenanceStatus.APPROVED) {
            ensurePrerequisites(entity);
            entity.setPrerequisitesValid(true);
            entity.setAuthorized(false); // reset; requires admin authorization
            entity.setJuryValidated(false);
            ensureDurationRules(entity);
        }

        entity.setStatus(request.newStatus());
        publishEvent(request.newStatus().name(), entity);
        return soutenanceMapper.toResponse(entity);
    }

    @Override
    public SoutenanceResponse authorize(UUID soutenanceId, AuthorizeSoutenanceRequest request) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));
        if (!EnumSet.of(SoutenanceStatus.APPROVED, SoutenanceStatus.SCHEDULED).contains(entity.getStatus())) {
            throw new IllegalArgumentException("Authorization allowed only after approval");
        }
        // Require director approval before authorization
        if (!entity.isDirectorApproved()) {
            throw new IllegalArgumentException("Le directeur de thèse doit d'abord approuver la demande de soutenance");
        }
        // Require all rapporteurs to have submitted favorable reports
        if (!entity.isAllRapporteursFavorable()) {
            throw new IllegalArgumentException("Tous les rapporteurs doivent avoir soumis un avis favorable avant l'autorisation");
        }
        entity.setAuthorized(true);
        entity.setAuthorizationDocumentUrl(request.authorizationDocumentUrl());
        if (StringUtils.isBlank(entity.getAuthorizationDocumentUrl()) && StringUtils.isNotBlank(entity.getDoctorantEmail())) {
            entity.setAuthorizationDocumentUrl(
                    pdfService.generateAuthorization(entity.getThesisTitle(), entity.getDoctorantEmail(), request.authorizationDocumentUrl())
            );
        }
        publishEvent("AUTHORIZED", entity);
        return soutenanceMapper.toResponse(entity);
    }

    @Override
    public SoutenanceResponse schedule(UUID soutenanceId, String location, LocalDateTime when) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));

        if (!EnumSet.of(SoutenanceStatus.APPROVED, SoutenanceStatus.SCHEDULED).contains(entity.getStatus())) {
            throw new IllegalArgumentException("Soutenance must be approved before scheduling");
        }
        if (when.isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Scheduled date must be in the future");
        }
        if (!entity.isAuthorized()) {
            throw new IllegalArgumentException("Soutenance must be authorized by administration before scheduling");
        }
        if (!entity.isJuryValidated()) {
            throw new IllegalArgumentException("Jury must be validated before scheduling");
        }
        if (!entity.isPrerequisitesValid()) {
            throw new IllegalArgumentException("Prerequisites must be validated before scheduling");
        }
        ensureDurationRules(entity);

        entity.setStatus(SoutenanceStatus.SCHEDULED);
        entity.setLocation(location);
        entity.setScheduledDateTime(when);
        if (StringUtils.isNotBlank(entity.getDoctorantEmail())) {
            entity.setProcesVerbalUrl(
                    pdfService.generateProcesVerbal(entity.getThesisTitle(), entity.getDoctorantEmail(), when, location)
            );
        }

        publishEvent("SCHEDULED", entity);
        return soutenanceMapper.toResponse(entity);
    }

    @Override
    public SoutenanceResponse replaceJury(UUID soutenanceId, List<JuryMemberRequest> members) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));

        entity.getJuryMembers().clear();
        if (members != null) {
            attachJury(entity, members);
        }
        entity.setJuryValidated(false);

        return soutenanceMapper.toResponse(entity);
    }

    @Override
    public SoutenanceResponse validateJury(UUID soutenanceId) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));
        entity.setJuryValidated(true);
        publishEvent("JURY_VALIDATED", entity);
        return soutenanceMapper.toResponse(entity);
    }

    private void ensureDoctorantOwner(UUID doctorantAccountId) {
        UUID current = currentUserId();
        if (current == null || !current.equals(doctorantAccountId)) {
            throw new AccessDeniedException("Vous ne pouvez soumettre qu'en votre nom.");
        }
    }

    /**
     * Ensures that the doctorant does not have an active soutenance.
     * A doctorant can only have one active soutenance at a time.
     * If the previous soutenance was REJECTED, they can submit again.
     */
    private void ensureNoActiveSoutenance(UUID doctorantAccountId) {
        // Active statuses = all statuses except REJECTED, DRAFT, and CLOSED
        List<SoutenanceStatus> activeStatuses = List.of(
                SoutenanceStatus.SUBMITTED,
                SoutenanceStatus.UNDER_REVIEW,
                SoutenanceStatus.APPROVED,
                SoutenanceStatus.SCHEDULED,
                SoutenanceStatus.DEFENDED
        );
        
        boolean hasActiveSoutenance = soutenanceRepository.existsByDoctorantAccountIdAndStatusIn(
                doctorantAccountId, activeStatuses);
        
        if (hasActiveSoutenance) {
            throw new IllegalStateException(
                    "Vous avez déjà une demande de soutenance en cours. " +
                    "Vous ne pouvez soumettre une nouvelle demande que si la précédente a été rejetée.");
        }
    }

    private UUID currentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) return null;
        try {
            return UUID.fromString(String.valueOf(auth.getPrincipal()));
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    private boolean hasAnyRole(String... roles) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) return false;
        return auth.getAuthorities().stream()
                .anyMatch(a -> {
                    String name = a.getAuthority();
                    for (String role : roles) {
                        if (("ROLE_" + role).equalsIgnoreCase(name)) return true;
                    }
                    return false;
                });
    }

    private Soutenance getEntityById(UUID soutenanceId) {
        return soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found: " + soutenanceId));
    }

    private void publishEvent(String type, Soutenance entity) {
        try {
            Map<String, Object> payload = new java.util.HashMap<>();
            payload.put("type", type);
            payload.put("soutenanceId", entity.getId().toString());
            payload.put("doctorantAccountId", entity.getDoctorantAccountId().toString());
            payload.put("doctorantEmail", StringUtils.defaultString(entity.getDoctorantEmail(), ""));
            payload.put("status", entity.getStatus().name());
            payload.put("requestedDateTime", entity.getRequestedDateTime() != null ? entity.getRequestedDateTime().toString() : "");
            payload.put("scheduledDateTime", entity.getScheduledDateTime() != null ? entity.getScheduledDateTime().toString() : "");
            payload.put("location", StringUtils.defaultString(entity.getLocation(), ""));
            payload.put("authorized", entity.isAuthorized());
            payload.put("authorizationDocumentUrl", StringUtils.defaultString(entity.getAuthorizationDocumentUrl(), ""));
            payload.put("attestationUrl", StringUtils.defaultString(entity.getAttestationUrl(), ""));
            payload.put("procesVerbalUrl", StringUtils.defaultString(entity.getProcesVerbalUrl(), ""));
            payload.put("juryValidated", entity.isJuryValidated());
            payload.put("thesisTitle", StringUtils.defaultString(entity.getThesisTitle(), ""));
            
            kafkaTemplate.send(soutenanceTopic, OBJECT_MAPPER.writeValueAsString(payload));

            Map<String, Object> notif = new java.util.HashMap<>();
            notif.put("channel", StringUtils.isBlank(entity.getDoctorantEmail()) ? "PUSH" : "EMAIL");
            notif.put("type", "SOUTENANCE_" + type);
            notif.put("accountId", entity.getDoctorantAccountId().toString());
            notif.put("recipient", StringUtils.defaultString(entity.getDoctorantEmail(), ""));
            notif.put("subject", "Soutenance " + type);
            notif.put("content", "Soutenance " + StringUtils.defaultString(entity.getThesisTitle(), "") + " - " + entity.getStatus());
            notif.put("metadata", payload);
            
            kafkaTemplate.send(notificationsTopic, OBJECT_MAPPER.writeValueAsString(notif));
            log.info("Published notification event: type={}, recipient={}", type, entity.getDoctorantEmail());
        } catch (Exception e) {
            log.error("Failed to publish event: type={}, error={}", type, e.getMessage(), e);
        }
    }

    private void ensurePrerequisites(CreateSoutenanceRequest request) {
        boolean countsOk = (request.publicationsCount() != null && request.publicationsCount() >= prerequisitesProperties.getMinPublications())
                && (request.publicationsQ1Q2Count() != null && request.publicationsQ1Q2Count() >= prerequisitesProperties.getMinPublications())
                && (request.conferencesCount() != null && request.conferencesCount() >= prerequisitesProperties.getMinConferences())
                && (request.trainingHours() != null && request.trainingHours() >= prerequisitesProperties.getMinTrainingHours());

        SoutenancePrerequisitesProperties.RequiredDocuments docs = prerequisitesProperties.getRequiredDocuments();
        boolean docsOk = (!docs.isManuscript() || StringUtils.isNotBlank(request.manuscriptUrl()))
                && (!docs.isAntiPlagiarismReport() || StringUtils.isNotBlank(request.antiPlagiarismReportUrl()))
                && (!docs.isPublicationsReport() || StringUtils.isNotBlank(request.publicationsReportUrl()))
                && (!docs.isTrainingCertificates() || StringUtils.isNotBlank(request.trainingCertificatesUrl()))
                && (!docs.isHandwrittenRequest() || StringUtils.isNotBlank(request.handwrittenRequestUrl()));

        if (!countsOk) {
            throw new IllegalArgumentException("Prerequisites not met (publications, conferences, training hours)");
        }
        if (!docsOk) {
            throw new IllegalArgumentException("Required documents are missing");
        }
        if (request.desiredDateTime() != null && request.desiredDateTime().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Desired date must be in the future");
        }
        ensureDurationRules(request);
    }

    private void ensurePrerequisites(Soutenance entity) {
        SoutenancePrerequisitesProperties.RequiredDocuments docs = prerequisitesProperties.getRequiredDocuments();
        boolean docsOk = (!docs.isManuscript() || StringUtils.isNotBlank(entity.getManuscriptUrl()))
                && (!docs.isAntiPlagiarismReport() || StringUtils.isNotBlank(entity.getAntiPlagiarismReportUrl()))
                && (!docs.isPublicationsReport() || StringUtils.isNotBlank(entity.getPublicationsReportUrl()))
                && (!docs.isTrainingCertificates() || StringUtils.isNotBlank(entity.getTrainingCertificatesUrl()))
                && (!docs.isHandwrittenRequest() || StringUtils.isNotBlank(entity.getHandwrittenRequestUrl()));

        int pubsTotal = Objects.requireNonNullElse(entity.getPublicationsCount(), 0);
        int pubsQ1Q2 = Objects.requireNonNullElse(entity.getPublicationsQ1Q2Count(), 0);
        boolean countsOk = pubsTotal >= prerequisitesProperties.getMinPublications()
                && pubsQ1Q2 >= prerequisitesProperties.getMinPublications()
                && Objects.requireNonNullElse(entity.getConferencesCount(), 0) >= prerequisitesProperties.getMinConferences()
                && Objects.requireNonNullElse(entity.getTrainingHours(), 0) >= prerequisitesProperties.getMinTrainingHours();

        if (!countsOk) {
            throw new IllegalArgumentException("Prerequisites not met (publications, conferences, training hours)");
        }
        if (!docsOk) {
            throw new IllegalArgumentException("Required documents are missing");
        }
        ensureDurationRules(entity);
    }

    private void ensureDurationRules(CreateSoutenanceRequest request) {
        if (request.initialEnrollmentDate() == null) return;
        LocalDate today = LocalDate.now();
        LocalDate start = request.initialEnrollmentDate();
        if (start.isBefore(today.minusYears(6))) {
            throw new IllegalArgumentException("Durée maximale de 6 ans dépassée.");
        }
        boolean derogation = request.derogationApproved() != null && request.derogationApproved();
        if (start.isBefore(today.minusYears(3)) && !derogation) {
            throw new IllegalArgumentException("Durée de 3 ans dépassée sans dérogation.");
        }
    }

    private void ensureDurationRules(Soutenance entity) {
        if (entity.getInitialEnrollmentDate() == null) return;
        LocalDate today = LocalDate.now();
        LocalDate start = entity.getInitialEnrollmentDate();
        if (start.isBefore(today.minusYears(6))) {
            throw new IllegalArgumentException("Durée maximale de 6 ans dépassée.");
        }
        if (start.isBefore(today.minusYears(3)) && !entity.isDerogationApproved()) {
            throw new IllegalArgumentException("Durée de 3 ans dépassée sans dérogation.");
        }
    }

    private void assertAllowedTransition(SoutenanceStatus current, SoutenanceStatus target) {
        boolean allowed = switch (current) {
            case DRAFT -> target == SoutenanceStatus.SUBMITTED;
            case SUBMITTED -> EnumSet.of(SoutenanceStatus.UNDER_REVIEW, SoutenanceStatus.REJECTED).contains(target);
            case UNDER_REVIEW -> EnumSet.of(SoutenanceStatus.APPROVED, SoutenanceStatus.REJECTED).contains(target);
            case APPROVED -> EnumSet.of(SoutenanceStatus.SCHEDULED, SoutenanceStatus.REJECTED).contains(target);
            case SCHEDULED -> EnumSet.of(SoutenanceStatus.DEFENDED, SoutenanceStatus.REJECTED).contains(target);
            case DEFENDED, REJECTED -> target == SoutenanceStatus.CLOSED;
            case CLOSED -> false;
        };

        if (!allowed) {
            throw new IllegalArgumentException("Illegal status transition from " + current + " to " + target);
        }
    }

    private void attachJury(Soutenance entity, List<JuryMemberRequest> members) {
        members.forEach(request -> {
            var member = juryMemberMapper.toEntity(request);
            member.setSoutenance(entity);
            entity.getJuryMembers().add(member);
        });
    }

    @Override
    public SoutenanceResponse approveByDirector(UUID soutenanceId, DirectorApprovalRequest request) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));

        // Only SUBMITTED or UNDER_REVIEW can be approved by director
        if (!EnumSet.of(SoutenanceStatus.SUBMITTED, SoutenanceStatus.UNDER_REVIEW).contains(entity.getStatus())) {
            throw new IllegalArgumentException("La soutenance doit être soumise ou en cours d'examen pour approbation du directeur");
        }

        entity.setDirectorApproved(request.approved());
        entity.setDirectorApprovalDate(LocalDateTime.now());
        entity.setDirectorComments(request.comments());

        if (request.approved()) {
            // Move to UNDER_REVIEW if currently SUBMITTED
            if (entity.getStatus() == SoutenanceStatus.SUBMITTED) {
                entity.setStatus(SoutenanceStatus.UNDER_REVIEW);
            }
            publishEvent("DIRECTOR_APPROVED", entity);
        } else {
            entity.setStatus(SoutenanceStatus.REJECTED);
            publishEvent("DIRECTOR_REJECTED", entity);
        }

        return soutenanceMapper.toResponse(entity);
    }

    @Override
    public SoutenanceResponse submitRapporteurReport(UUID soutenanceId, RapporteurReportRequest request) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));

        // Rapporteur reports should come after director approval
        if (!entity.isDirectorApproved()) {
            throw new IllegalArgumentException("Le directeur de thèse doit d'abord approuver la demande");
        }

        if (!EnumSet.of(SoutenanceStatus.UNDER_REVIEW, SoutenanceStatus.APPROVED).contains(entity.getStatus())) {
            throw new IllegalArgumentException("La soutenance doit être en cours d'examen ou approuvée");
        }

        if (request.rapporteurNumber() == 1) {
            entity.setRapporteur1ReportUrl(request.reportUrl());
            entity.setRapporteur1Favorable(request.favorable());
            entity.setRapporteur1Comments(request.comments());
            entity.setRapporteur1ReportDate(LocalDateTime.now());
        } else if (request.rapporteurNumber() == 2) {
            entity.setRapporteur2ReportUrl(request.reportUrl());
            entity.setRapporteur2Favorable(request.favorable());
            entity.setRapporteur2Comments(request.comments());
            entity.setRapporteur2ReportDate(LocalDateTime.now());
        } else {
            throw new IllegalArgumentException("Numéro de rapporteur invalide: " + request.rapporteurNumber());
        }

        // Update allRapporteursFavorable based on both reports
        updateAllRapporteursFavorable(entity);

        publishEvent("RAPPORTEUR_REPORT_SUBMITTED", entity);
        return soutenanceMapper.toResponse(entity);
    }

    private void updateAllRapporteursFavorable(Soutenance entity) {
        Boolean r1 = entity.getRapporteur1Favorable();
        Boolean r2 = entity.getRapporteur2Favorable();

        // All rapporteurs favorable only if both have submitted and both are favorable
        if (r1 != null && r2 != null) {
            entity.setAllRapporteursFavorable(r1 && r2);
        } else {
            entity.setAllRapporteursFavorable(false);
        }
    }

    @Override
    public SoutenanceResponse setResult(UUID soutenanceId, SetResultRequest request) {
        Soutenance entity = soutenanceRepository.findById(soutenanceId)
                .orElseThrow(() -> new EntityNotFoundException("Soutenance not found"));

        if (entity.getStatus() != SoutenanceStatus.DEFENDED) {
            throw new IllegalArgumentException("Le résultat ne peut être défini qu'après la soutenance (status DEFENDED)");
        }

        entity.setResult(request.result());
        entity.setResultDate(LocalDateTime.now());
        entity.setResultComments(request.comments());

        // Close the soutenance after setting result
        entity.setStatus(SoutenanceStatus.CLOSED);

        publishEvent("RESULT_SET", entity);
        return soutenanceMapper.toResponse(entity);
    }

    @Override
    @Transactional(readOnly = true)
    public List<SoutenanceResponse> getApproachingSixYearLimit() {
        LocalDate sixMonthsBeforeSixYearLimit = LocalDate.now().minusYears(6).plusMonths(6);
        LocalDate sixYearLimit = LocalDate.now().minusYears(6);

        // Find all soutenances where initial enrollment is between 5.5 and 6 years ago
        // and status is not CLOSED or DEFENDED
        return soutenanceRepository.findAll().stream()
                .filter(s -> s.getInitialEnrollmentDate() != null)
                .filter(s -> !EnumSet.of(SoutenanceStatus.DEFENDED, SoutenanceStatus.CLOSED).contains(s.getStatus()))
                .filter(s -> {
                    LocalDate enrollment = s.getInitialEnrollmentDate();
                    return enrollment.isBefore(sixMonthsBeforeSixYearLimit) && enrollment.isAfter(sixYearLimit);
                })
                .map(soutenanceMapper::toResponse)
                .toList();
    }

    @Override
    @Scheduled(cron = "0 0 9 * * *") // Run daily at 9 AM
    public void sendDurationAlerts() {
        log.info("Running scheduled duration alert check...");

        List<Soutenance> approachingLimit = soutenanceRepository.findAll().stream()
                .filter(s -> s.getInitialEnrollmentDate() != null)
                .filter(s -> !s.isDurationAlertSent())
                .filter(s -> !EnumSet.of(SoutenanceStatus.DEFENDED, SoutenanceStatus.CLOSED).contains(s.getStatus()))
                .filter(this::isApproachingSixYearLimit)
                .toList();

        for (Soutenance entity : approachingLimit) {
            try {
                sendDurationAlertNotification(entity);
                entity.setDurationAlertSent(true);
                soutenanceRepository.save(entity);
                log.info("Duration alert sent for soutenance {} (doctorant: {})", 
                        entity.getId(), entity.getDoctorantAccountId());
            } catch (Exception e) {
                log.error("Failed to send duration alert for soutenance {}", entity.getId(), e);
            }
        }

        log.info("Duration alert check complete. {} alerts sent.", approachingLimit.size());
    }

    private boolean isApproachingSixYearLimit(Soutenance entity) {
        if (entity.getInitialEnrollmentDate() == null) return false;
        LocalDate enrollment = entity.getInitialEnrollmentDate();
        LocalDate today = LocalDate.now();
        LocalDate sixYearLimit = enrollment.plusYears(6);
        LocalDate alertThreshold = sixYearLimit.minusMonths(6);
        return today.isAfter(alertThreshold) && today.isBefore(sixYearLimit);
    }

    private void sendDurationAlertNotification(Soutenance entity) {
        try {
            LocalDate sixYearLimit = entity.getInitialEnrollmentDate().plusYears(6);
            Map<String, Object> notif = Map.of(
                    "channel", StringUtils.isBlank(entity.getDoctorantEmail()) ? "PUSH" : "EMAIL",
                    "type", "DURATION_LIMIT_APPROACHING",
                    "accountId", entity.getDoctorantAccountId().toString(),
                    "recipient", StringUtils.defaultString(entity.getDoctorantEmail(), ""),
                    "subject", "Alerte: Limite de 6 ans approchante",
                    "content", String.format(
                            "Votre inscription doctorale approche de la limite de 6 ans (échéance: %s). " +
                            "Veuillez prendre les mesures nécessaires pour finaliser votre soutenance.",
                            sixYearLimit
                    ),
                    "metadata", Map.of(
                            "soutenanceId", entity.getId().toString(),
                            "doctorantAccountId", entity.getDoctorantAccountId().toString(),
                            "sixYearLimitDate", sixYearLimit.toString(),
                            "thesisTitle", entity.getThesisTitle()
                    )
            );
            kafkaTemplate.send(notificationsTopic, OBJECT_MAPPER.writeValueAsString(notif));
        } catch (Exception e) {
            log.error("Failed to send duration alert notification", e);
        }
    }

    // ========================
    // PDF Document Generation
    // ========================

    @Override
    public String generateAttestation(UUID soutenanceId) {
        Soutenance soutenance = getEntityById(soutenanceId);
        String url = pdfService.generateAttestation(soutenance.getThesisTitle(), soutenance.getDoctorantEmail());
        soutenance.setAttestationUrl(url);
        soutenanceRepository.save(soutenance);
        log.info("Generated attestation for soutenance {}: {}", soutenanceId, url);
        return url;
    }

    @Override
    public String generateAuthorization(UUID soutenanceId) {
        Soutenance soutenance = getEntityById(soutenanceId);
        
        // Vérifier que la soutenance est autorisée (booléen authorized=true et statut approprié)
        if (!soutenance.isAuthorized() || 
            !EnumSet.of(SoutenanceStatus.APPROVED, SoutenanceStatus.SCHEDULED, SoutenanceStatus.DEFENDED, SoutenanceStatus.CLOSED).contains(soutenance.getStatus())) {
            throw new IllegalStateException("L'autorisation de soutenance ne peut être générée que pour une soutenance autorisée");
        }
        
        String url = pdfService.generateAuthorization(
                soutenance.getThesisTitle(), 
                soutenance.getDoctorantEmail(),
                soutenance.getAuthorizationDocumentUrl()
        );
        soutenance.setAuthorizationDocumentUrl(url);
        soutenanceRepository.save(soutenance);
        log.info("Generated authorization for soutenance {}: {}", soutenanceId, url);
        return url;
    }

    @Override
    public String generateProcesVerbal(UUID soutenanceId) {
        Soutenance soutenance = getEntityById(soutenanceId);
        
        // Vérifier que la soutenance est programmée
        if (soutenance.getScheduledDateTime() == null) {
            throw new IllegalStateException("La soutenance doit être programmée pour générer le procès-verbal");
        }
        
        String url = pdfService.generateProcesVerbal(
                soutenance.getThesisTitle(),
                soutenance.getDoctorantEmail(),
                soutenance.getScheduledDateTime(),
                soutenance.getLocation()
        );
        soutenance.setProcesVerbalUrl(url);
        soutenanceRepository.save(soutenance);
        log.info("Generated pre-filled procès-verbal for soutenance {}: {}", soutenanceId, url);
        return url;
    }

    @Override
    public String generateProcesVerbalComplete(UUID soutenanceId) {
        Soutenance soutenance = getEntityById(soutenanceId);
        
        // Vérifier que la soutenance est terminée avec un résultat (DEFENDED ou CLOSED)
        if (!EnumSet.of(SoutenanceStatus.DEFENDED, SoutenanceStatus.CLOSED).contains(soutenance.getStatus())) {
            throw new IllegalStateException("Le procès-verbal complet ne peut être généré que pour une soutenance terminée");
        }
        if (soutenance.getResult() == null) {
            throw new IllegalStateException("Le résultat de la soutenance doit être défini");
        }
        
        String url = pdfService.generateProcesVerbalComplete(soutenance);
        soutenance.setProcesVerbalUrl(url);
        soutenanceRepository.save(soutenance);
        log.info("Generated complete procès-verbal for soutenance {}: {}", soutenanceId, url);
        return url;
    }
}
