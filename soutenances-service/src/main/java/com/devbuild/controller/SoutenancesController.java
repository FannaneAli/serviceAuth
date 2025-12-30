package com.devbuild.controller;

import com.devbuild.dto.CreateSoutenanceRequest;
import com.devbuild.dto.DirectorApprovalRequest;
import com.devbuild.dto.RapporteurReportRequest;
import com.devbuild.dto.ScheduleSoutenanceRequest;
import com.devbuild.dto.SetResultRequest;
import com.devbuild.dto.SoutenanceResponse;
import com.devbuild.dto.UpdateJuryRequest;
import com.devbuild.dto.UpdateSoutenanceStatusRequest;
import com.devbuild.dto.AuthorizeSoutenanceRequest;
import com.devbuild.enums.SoutenanceStatus;
import com.devbuild.service.iservice.SoutenanceService;
import jakarta.validation.Valid;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/soutenances")
public class SoutenancesController {

    private final SoutenanceService soutenanceService;

    public SoutenancesController(SoutenanceService soutenanceService) {
        this.soutenanceService = soutenanceService;
    }

    @PostMapping
    @PreAuthorize("hasRole('DOCTORANT')")
    public ResponseEntity<SoutenanceResponse> create(@Valid @RequestBody CreateSoutenanceRequest request) {
        SoutenanceResponse created = soutenanceService.createSoutenance(request);
        return ResponseEntity
                .created(URI.create("/api/soutenances/" + created.id()))
                .body(created);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('DOCTORANT','DIRECTEUR','ADMIN','SUPERUSER')")
    public ResponseEntity<SoutenanceResponse> getById(@PathVariable UUID id) {
        return ResponseEntity.ok(soutenanceService.getById(id));
    }

    @GetMapping("/by-doctorant/{doctorantAccountId}")
    @PreAuthorize("hasAnyRole('DOCTORANT','ADMIN','SUPERUSER')")
    public ResponseEntity<List<SoutenanceResponse>> getByDoctorant(@PathVariable UUID doctorantAccountId) {
        return ResponseEntity.ok(soutenanceService.getByDoctorant(doctorantAccountId));
    }

    @GetMapping("/status/{status}")
    @PreAuthorize("hasAnyRole('DIRECTEUR','ADMIN','SUPERUSER')")
    public ResponseEntity<List<SoutenanceResponse>> getByStatus(@PathVariable SoutenanceStatus status) {
        return ResponseEntity.ok(soutenanceService.getByStatus(status));
    }

    @PostMapping("/{id}/authorize")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER')")
    public ResponseEntity<SoutenanceResponse> authorize(
            @PathVariable UUID id,
            @Valid @RequestBody AuthorizeSoutenanceRequest request
    ) {
        return ResponseEntity.ok(soutenanceService.authorize(id, request));
    }

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasAnyRole('DIRECTEUR','ADMIN','SUPERUSER')")
    public ResponseEntity<SoutenanceResponse> updateStatus(
            @PathVariable UUID id,
            @Valid @RequestBody UpdateSoutenanceStatusRequest request
    ) {
        return ResponseEntity.ok(soutenanceService.updateStatus(id, request));
    }

    @PatchMapping("/{id}/schedule")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER')")
    public ResponseEntity<SoutenanceResponse> schedule(
            @PathVariable UUID id,
            @Valid @RequestBody ScheduleSoutenanceRequest request
    ) {
        return ResponseEntity.ok(soutenanceService.schedule(id, request.location(), request.when()));
    }

    @PutMapping("/{id}/jury")
    @PreAuthorize("hasRole('DIRECTEUR')")
    public ResponseEntity<SoutenanceResponse> replaceJury(
            @PathVariable UUID id,
            @Valid @RequestBody UpdateJuryRequest request
    ) {
        return ResponseEntity.ok(soutenanceService.replaceJury(id, request.members()));
    }

    @PostMapping("/{id}/jury/validate")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER')")
    public ResponseEntity<SoutenanceResponse> validateJury(@PathVariable UUID id) {
        return ResponseEntity.ok(soutenanceService.validateJury(id));
    }

    /**
     * Director of thesis approves or rejects the soutenance request.
     */
    @PostMapping("/{id}/director-approval")
    @PreAuthorize("hasRole('DIRECTEUR')")
    public ResponseEntity<SoutenanceResponse> approveByDirector(
            @PathVariable UUID id,
            @Valid @RequestBody DirectorApprovalRequest request
    ) {
        return ResponseEntity.ok(soutenanceService.approveByDirector(id, request));
    }

    /**
     * Submit a rapporteur's evaluation report.
     */
    @PostMapping("/{id}/rapporteur-report")
    @PreAuthorize("hasAnyRole('RAPPORTEUR','DIRECTEUR','ADMIN','SUPERUSER')")
    public ResponseEntity<SoutenanceResponse> submitRapporteurReport(
            @PathVariable UUID id,
            @Valid @RequestBody RapporteurReportRequest request
    ) {
        return ResponseEntity.ok(soutenanceService.submitRapporteurReport(id, request));
    }

    /**
     * Set the result/mention after the defense is completed.
     */
    @PostMapping("/{id}/result")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER')")
    public ResponseEntity<SoutenanceResponse> setResult(
            @PathVariable UUID id,
            @Valid @RequestBody SetResultRequest request
    ) {
        return ResponseEntity.ok(soutenanceService.setResult(id, request));
    }

    /**
     * Get soutenances approaching the 6-year limit (for alerts).
     */
    @GetMapping("/alerts/six-year-limit")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER')")
    public ResponseEntity<List<SoutenanceResponse>> getApproachingSixYearLimit() {
        return ResponseEntity.ok(soutenanceService.getApproachingSixYearLimit());
    }

    /**
     * Manually trigger duration alert check (for testing or on-demand).
     */
    @PostMapping("/alerts/send-duration-alerts")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER')")
    public ResponseEntity<Void> sendDurationAlerts() {
        soutenanceService.sendDurationAlerts();
        return ResponseEntity.ok().build();
    }

    // ========== Document PDF Generation Endpoints ==========

    /**
     * Generate or retrieve the attestation d'inscription PDF.
     */
    @GetMapping("/{id}/documents/attestation")
    @PreAuthorize("hasAnyRole('DOCTORANT','DIRECTEUR','ADMIN','SUPERUSER')")
    public ResponseEntity<Resource> getAttestation(@PathVariable UUID id) {
        String url = soutenanceService.generateAttestation(id);
        return serveDocument(url, "attestation-inscription.pdf");
    }

    /**
     * Generate or retrieve the autorisation de soutenance PDF.
     */
    @GetMapping("/{id}/documents/autorisation")
    @PreAuthorize("hasAnyRole('DOCTORANT','DIRECTEUR','ADMIN','SUPERUSER')")
    public ResponseEntity<Resource> getAutorisation(@PathVariable UUID id) {
        String url = soutenanceService.generateAuthorization(id);
        return serveDocument(url, "autorisation-soutenance.pdf");
    }

    /**
     * Generate or retrieve the procès-verbal de soutenance (pré-rempli) PDF.
     */
    @GetMapping("/{id}/documents/proces-verbal")
    @PreAuthorize("hasAnyRole('DIRECTEUR','ADMIN','SUPERUSER')")
    public ResponseEntity<Resource> getProcesVerbal(@PathVariable UUID id) {
        String url = soutenanceService.generateProcesVerbal(id);
        return serveDocument(url, "proces-verbal-soutenance.pdf");
    }

    /**
     * Generate the complete procès-verbal after the defense with all jury and result info.
     */
    @GetMapping("/{id}/documents/proces-verbal-complet")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER')")
    public ResponseEntity<Resource> getProcesVerbalComplet(@PathVariable UUID id) {
        String url = soutenanceService.generateProcesVerbalComplete(id);
        return serveDocument(url, "proces-verbal-complet.pdf");
    }

    /**
     * Helper method to serve a PDF document as a downloadable resource.
     */
    private ResponseEntity<Resource> serveDocument(String fileUrl, String filename) {
        if (fileUrl == null || fileUrl.isBlank()) {
            return ResponseEntity.notFound().build();
        }
        try {
            Path filePath = Paths.get(URI.create(fileUrl));
            Resource resource = new UrlResource(filePath.toUri());
            
            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.APPLICATION_PDF)
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
