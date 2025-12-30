package com.devbuild.service.iservice;

import com.devbuild.dto.CreateSoutenanceRequest;
import com.devbuild.dto.DirectorApprovalRequest;
import com.devbuild.dto.JuryMemberRequest;
import com.devbuild.dto.RapporteurReportRequest;
import com.devbuild.dto.SetResultRequest;
import com.devbuild.dto.SoutenanceResponse;
import com.devbuild.dto.UpdateSoutenanceStatusRequest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface SoutenanceService {

    SoutenanceResponse createSoutenance(CreateSoutenanceRequest request);

    SoutenanceResponse getById(UUID soutenanceId);

    List<SoutenanceResponse> getByDoctorant(UUID doctorantAccountId);

    List<SoutenanceResponse> getByStatus(com.devbuild.enums.SoutenanceStatus status);

    SoutenanceResponse authorize(UUID soutenanceId, com.devbuild.dto.AuthorizeSoutenanceRequest request);

    SoutenanceResponse updateStatus(UUID soutenanceId, UpdateSoutenanceStatusRequest request);

    SoutenanceResponse schedule(UUID soutenanceId, String location, LocalDateTime when);

    SoutenanceResponse replaceJury(UUID soutenanceId, List<JuryMemberRequest> members);

    SoutenanceResponse validateJury(UUID soutenanceId);

    /**
     * Director of thesis approves/rejects the soutenance request.
     */
    SoutenanceResponse approveByDirector(UUID soutenanceId, DirectorApprovalRequest request);

    /**
     * Submit a rapporteur's evaluation report.
     */
    SoutenanceResponse submitRapporteurReport(UUID soutenanceId, RapporteurReportRequest request);

    /**
     * Set the result/mention after the defense is completed.
     */
    SoutenanceResponse setResult(UUID soutenanceId, SetResultRequest request);

    /**
     * Get soutenances approaching the 6-year limit (for alerts).
     */
    List<SoutenanceResponse> getApproachingSixYearLimit();

    /**
     * Send duration alerts for doctorants approaching 6-year limit.
     */
    void sendDurationAlerts();

    // ========== PDF Document Generation ==========

    /**
     * Generate the attestation d'inscription PDF.
     */
    String generateAttestation(UUID soutenanceId);

    /**
     * Generate the autorisation de soutenance PDF.
     */
    String generateAuthorization(UUID soutenanceId);

    /**
     * Generate the procès-verbal de soutenance (pré-rempli) PDF.
     */
    String generateProcesVerbal(UUID soutenanceId);

    /**
     * Generate the complete procès-verbal with jury and result information.
     */
    String generateProcesVerbalComplete(UUID soutenanceId);
}
