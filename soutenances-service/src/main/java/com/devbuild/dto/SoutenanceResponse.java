package com.devbuild.dto;

import com.devbuild.enums.SoutenanceResult;
import com.devbuild.enums.SoutenanceStatus;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record SoutenanceResponse(
        UUID id,
        UUID doctorantAccountId,
        String doctorantEmail,
        String thesisTitle,
        String thesisSummary,
        String handwrittenRequestUrl,
        String manuscriptUrl,
        String antiPlagiarismReportUrl,
        String publicationsReportUrl,
        String trainingCertificatesUrl,
        Integer publicationsCount,
        Integer publicationsQ1Q2Count,
        Integer conferencesCount,
        Integer trainingHours,
        java.time.LocalDate initialEnrollmentDate,
        boolean derogationApproved,
        boolean prerequisitesValid,
        SoutenanceStatus status,
        LocalDateTime requestedDateTime,
        String requestedLocation,
        LocalDateTime scheduledDateTime,
        String location,
        boolean authorized,
        String authorizationDocumentUrl,
        String attestationUrl,
        String procesVerbalUrl,
        boolean juryValidated,
        List<JuryMemberResponse> jury,
        // Director approval
        boolean directorApproved,
        LocalDateTime directorApprovalDate,
        String directorComments,
        // Rapporteur reports
        String rapporteur1ReportUrl,
        Boolean rapporteur1Favorable,
        LocalDateTime rapporteur1ReportDate,
        String rapporteur1Comments,
        String rapporteur2ReportUrl,
        Boolean rapporteur2Favorable,
        LocalDateTime rapporteur2ReportDate,
        String rapporteur2Comments,
        boolean allRapporteursFavorable,
        // Result
        SoutenanceResult result,
        LocalDateTime resultDate,
        String resultComments,
        // Duration alert
        boolean durationAlertSent,
        boolean approachingSixYearLimit
) {}
