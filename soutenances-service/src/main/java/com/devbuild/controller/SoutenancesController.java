package com.devbuild.controller;

import com.devbuild.dto.CreateSoutenanceRequest;
import com.devbuild.dto.ScheduleSoutenanceRequest;
import com.devbuild.dto.SoutenanceResponse;
import com.devbuild.dto.UpdateJuryRequest;
import com.devbuild.dto.UpdateSoutenanceStatusRequest;
import com.devbuild.dto.AuthorizeSoutenanceRequest;
import com.devbuild.enums.SoutenanceStatus;
import com.devbuild.service.iservice.SoutenanceService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
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
    @PreAuthorize("hasAnyRole('DIRECTEUR','ADMIN','SUPERUSER')")
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
}
