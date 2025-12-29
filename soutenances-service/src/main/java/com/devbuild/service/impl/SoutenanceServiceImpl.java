package com.devbuild.service.impl;

import com.devbuild.config.SoutenancePrerequisitesProperties;
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
import jakarta.persistence.EntityNotFoundException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.EnumSet;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@Transactional
public class SoutenanceServiceImpl implements SoutenanceService {

    private final SoutenanceRepository soutenanceRepository;
    private final SoutenanceMapper soutenanceMapper;
    private final JuryMemberMapper juryMemberMapper;
    private final SoutenancePrerequisitesProperties prerequisitesProperties;

    public SoutenanceServiceImpl(SoutenanceRepository soutenanceRepository,
                                 SoutenanceMapper soutenanceMapper,
                                 JuryMemberMapper juryMemberMapper,
                                 SoutenancePrerequisitesProperties prerequisitesProperties) {
        this.soutenanceRepository = soutenanceRepository;
        this.soutenanceMapper = soutenanceMapper;
        this.juryMemberMapper = juryMemberMapper;
        this.prerequisitesProperties = prerequisitesProperties;
    }

    @Override
    public SoutenanceResponse createSoutenance(CreateSoutenanceRequest request) {
        ensurePrerequisites(request);
        Soutenance entity = soutenanceMapper.toEntity(request);

        entity.setPrerequisitesValid(true);
        entity.setStatus(SoutenanceStatus.SUBMITTED);
        if (request.jury() != null && !request.jury().isEmpty()) {
            attachJury(entity, request.jury());
        }

        Soutenance saved = soutenanceRepository.save(entity);
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
        return soutenanceRepository.findAllByDoctorantAccountId(doctorantAccountId)
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
        }

        entity.setStatus(request.newStatus());
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
        ensurePrerequisites(entity);
        entity.setPrerequisitesValid(true);

        entity.setStatus(SoutenanceStatus.SCHEDULED);
        entity.setLocation(location);
        entity.setScheduledDateTime(when);

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

        return soutenanceMapper.toResponse(entity);
    }

    private void ensurePrerequisites(CreateSoutenanceRequest request) {
        boolean countsOk = (request.publicationsCount() != null && request.publicationsCount() >= prerequisitesProperties.getMinPublications())
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
    }

    private void ensurePrerequisites(Soutenance entity) {
        SoutenancePrerequisitesProperties.RequiredDocuments docs = prerequisitesProperties.getRequiredDocuments();
        boolean docsOk = (!docs.isManuscript() || StringUtils.isNotBlank(entity.getManuscriptUrl()))
                && (!docs.isAntiPlagiarismReport() || StringUtils.isNotBlank(entity.getAntiPlagiarismReportUrl()))
                && (!docs.isPublicationsReport() || StringUtils.isNotBlank(entity.getPublicationsReportUrl()))
                && (!docs.isTrainingCertificates() || StringUtils.isNotBlank(entity.getTrainingCertificatesUrl()))
                && (!docs.isHandwrittenRequest() || StringUtils.isNotBlank(entity.getHandwrittenRequestUrl()));

        boolean countsOk = Objects.requireNonNullElse(entity.getPublicationsCount(), 0) >= prerequisitesProperties.getMinPublications()
                && Objects.requireNonNullElse(entity.getConferencesCount(), 0) >= prerequisitesProperties.getMinConferences()
                && Objects.requireNonNullElse(entity.getTrainingHours(), 0) >= prerequisitesProperties.getMinTrainingHours();

        if (!countsOk) {
            throw new IllegalArgumentException("Prerequisites not met (publications, conferences, training hours)");
        }
        if (!docsOk) {
            throw new IllegalArgumentException("Required documents are missing");
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
