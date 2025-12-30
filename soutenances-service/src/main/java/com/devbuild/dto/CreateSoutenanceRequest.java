package com.devbuild.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record CreateSoutenanceRequest(
        @NotNull UUID doctorantAccountId,
        @NotBlank String doctorantEmail,
        @NotBlank String thesisTitle,
        String thesisSummary,
        @NotBlank String handwrittenRequestUrl,
        String manuscriptUrl,
        String antiPlagiarismReportUrl,
        String publicationsReportUrl,
        String trainingCertificatesUrl,
        Integer publicationsCount,
        Integer publicationsQ1Q2Count,
        Integer conferencesCount,
        Integer trainingHours,
        java.time.LocalDate initialEnrollmentDate,
        Boolean derogationApproved,
        LocalDateTime desiredDateTime,
        String desiredLocation,
        List<JuryMemberRequest> jury // optionnel : proposition de jury directement
) {}
