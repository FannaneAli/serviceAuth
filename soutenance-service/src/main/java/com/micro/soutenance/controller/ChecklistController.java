package com.micro.soutenance.controller;

import com.micro.soutenance.domain.SoutenanceChecklist;
import com.micro.soutenance.dto.ChecklistDto;
import com.micro.soutenance.dto.UpdateChecklistRequest;
import com.micro.soutenance.repository.SoutenanceChecklistRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.UUID;

@RestController
@RequestMapping("/checklist")
@RequiredArgsConstructor
public class ChecklistController {

    private final SoutenanceChecklistRepository checklistRepository;

    @GetMapping("/{requestId}")
    public ResponseEntity<ChecklistDto> get(@PathVariable UUID requestId) {
        return checklistRepository.findByRequestId(requestId)
                .map(this::toDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{requestId}")
    public ResponseEntity<ChecklistDto> update(@PathVariable UUID requestId, @Valid @RequestBody UpdateChecklistRequest req) {
        SoutenanceChecklist c = checklistRepository.findByRequestId(requestId).orElseGet(() -> {
            SoutenanceChecklist nc = new SoutenanceChecklist();
            nc.setRequestId(requestId);
            return nc;
        });
        if (req.publicationsCount() != null) c.setPublicationsCount(req.publicationsCount());
        if (req.credits() != null) c.setCredits(req.credits());
        if (req.documentsComplete() != null) c.setDocumentsComplete(req.documentsComplete());
        if (req.antiPlagValidated() != null) c.setAntiPlagValidated(req.antiPlagValidated());
        c.setValidatedAt(Instant.now());
        c = checklistRepository.save(c);
        return ResponseEntity.ok(toDto(c));
    }

    private ChecklistDto toDto(SoutenanceChecklist c) {
        return new ChecklistDto(c.getRequestId(), c.getPublicationsCount(), c.getCredits(), c.isDocumentsComplete(), c.isAntiPlagValidated());
    }
}
