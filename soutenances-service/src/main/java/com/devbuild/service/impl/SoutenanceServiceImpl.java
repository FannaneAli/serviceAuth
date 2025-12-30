package com.devbuild.service.impl;

import com.devbuild.config.SoutenancePrerequisitesProperties;
import com.devbuild.dto.AuthorizeSoutenanceRequest;
import com.devbuild.dto.CreateSoutenanceRequest;
import com.devbuild.dto.JuryMemberRequest;
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
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

    private final SoutenanceRepository soutenanceRepository;
    private final SoutenanceMapper soutenanceMapper;
    private final JuryMemberMapper juryMemberMapper;
    private final SoutenancePrerequisitesProperties prerequisitesProperties;
    private final KafkaTemplate<String, String> kafkaTemplate;
    private final String soutenanceTopic;
    private final String notificationsTopic;
    private final PdfService pdfService;
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

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

    private void publishEvent(String type, Soutenance entity) {
        try {
            Map<String, Object> payload = Map.ofEntries(
                    Map.entry("type", type),
                    Map.entry("soutenanceId", entity.getId().toString()),
                    Map.entry("doctorantAccountId", entity.getDoctorantAccountId().toString()),
                    Map.entry("doctorantEmail", entity.getDoctorantEmail()),
                    Map.entry("status", entity.getStatus().name()),
                    Map.entry("requestedDateTime", entity.getRequestedDateTime()),
                    Map.entry("scheduledDateTime", entity.getScheduledDateTime()),
                    Map.entry("location", entity.getLocation()),
                    Map.entry("authorized", entity.isAuthorized()),
                    Map.entry("authorizationDocumentUrl", entity.getAuthorizationDocumentUrl()),
                    Map.entry("attestationUrl", entity.getAttestationUrl()),
                    Map.entry("procesVerbalUrl", entity.getProcesVerbalUrl()),
                    Map.entry("juryValidated", entity.isJuryValidated())
            );
            kafkaTemplate.send(soutenanceTopic, OBJECT_MAPPER.writeValueAsString(payload));

            Map<String, Object> notif = Map.of(
                    "channel", StringUtils.isBlank(entity.getDoctorantEmail()) ? "PUSH" : "EMAIL",
                    "type", "SOUTENANCE_" + type,
                    "accountId", entity.getDoctorantAccountId().toString(),
                    "recipient", StringUtils.defaultString(entity.getDoctorantEmail(), ""),
                    "subject", "Soutenance " + type,
                    "content", "Soutenance " + entity.getThesisTitle() + " etat " + entity.getStatus(),
                    "metadata", payload
            );
            kafkaTemplate.send(notificationsTopic, OBJECT_MAPPER.writeValueAsString(notif));
        } catch (Exception ignored) {
            // log + continue
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
}
