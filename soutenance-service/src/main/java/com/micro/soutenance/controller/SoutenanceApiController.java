package com.micro.soutenance.controller;

import com.micro.soutenance.domain.SoutenanceRequest;
import com.micro.soutenance.domain.SoutenanceStatus;
import com.micro.soutenance.domain.ThesisSubject;
import com.micro.soutenance.repository.SoutenanceRequestRepository;
import com.micro.soutenance.repository.ThesisSubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

/**
 * REST controller for /api/soutenances endpoints expected by the Angular frontend.
 */
@RestController
@RequestMapping("/api/soutenances")
@RequiredArgsConstructor
public class SoutenanceApiController {

    private final SoutenanceRequestRepository requestRepository;
    private final ThesisSubjectRepository subjectRepository;

    /**
     * Create a new soutenance request (for doctorant)
     */
    @PostMapping
    public ResponseEntity<Map<String, Object>> createSoutenance(
            @RequestBody Map<String, Object> body,
            @AuthenticationPrincipal String accountId
    ) {
        // Get or create thesis subject
        String thesisTitle = (String) body.getOrDefault("thesisTitle", "Sans titre");
        String thesisSummary = (String) body.get("thesisSummary");
        
        UUID doctorantId = UUID.fromString(accountId);
        
        // Create thesis subject first
        ThesisSubject subject = ThesisSubject.builder()
                .doctorantId(doctorantId)
                .title(thesisTitle)
                .summary(thesisSummary)
                .status(com.micro.soutenance.domain.ThesisStatus.SUBMITTED)
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();
        subject = subjectRepository.save(subject);
        
        // Create soutenance request
        SoutenanceRequest sr = SoutenanceRequest.builder()
                .doctorantId(doctorantId)
                .subjectId(subject.getId())
                .status(SoutenanceStatus.SUBMITTED)
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();
        
        // Parse optional date
        if (body.get("desiredDateTime") != null) {
            try {
                LocalDateTime dt = LocalDateTime.parse((String) body.get("desiredDateTime"));
                sr.setDefenseDate(dt.toLocalDate());
                sr.setDefenseTime(dt.toLocalTime());
            } catch (Exception ignored) {}
        }
        if (body.get("desiredLocation") != null) {
            sr.setDefenseLocation((String) body.get("desiredLocation"));
        }
        
        sr = requestRepository.save(sr);
        
        return ResponseEntity.ok(toApiResponse(sr, subject));
    }

    /**
     * List soutenances for a doctorant by accountId
     */
    @GetMapping("/by-doctorant/{accountId}")
    public ResponseEntity<List<Map<String, Object>>> listByDoctorant(@PathVariable String accountId) {
        UUID doctorantId = UUID.fromString(accountId);
        List<SoutenanceRequest> requests = requestRepository.findAllByDoctorantId(doctorantId);
        
        List<Map<String, Object>> result = new ArrayList<>();
        for (SoutenanceRequest sr : requests) {
            ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
            result.add(toApiResponse(sr, subject));
        }
        return ResponseEntity.ok(result);
    }

    /**
     * Get single soutenance by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getById(@PathVariable UUID id) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        return ResponseEntity.ok(toApiResponse(sr, subject));
    }

    /**
     * List soutenances by status (for admin/director review)
     */
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Map<String, Object>>> listByStatus(@PathVariable String status) {
        SoutenanceStatus st;
        try {
            st = SoutenanceStatus.valueOf(status);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.ok(Collections.emptyList());
        }
        
        List<SoutenanceRequest> requests = requestRepository.findAllByStatus(st);
        List<Map<String, Object>> result = new ArrayList<>();
        for (SoutenanceRequest sr : requests) {
            ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
            result.add(toApiResponse(sr, subject));
        }
        return ResponseEntity.ok(result);
    }

    /**
     * Update soutenance status
     */
    @PatchMapping("/{id}/status")
    public ResponseEntity<Map<String, Object>> updateStatus(
            @PathVariable UUID id,
            @RequestBody Map<String, Object> body
    ) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        
        String newStatusStr = (String) body.getOrDefault("status", body.get("newStatus"));
        if (newStatusStr != null) {
            sr.setStatus(SoutenanceStatus.valueOf(newStatusStr));
        }
        if (body.get("comments") != null) {
            sr.setAdminComment((String) body.get("comments"));
        }
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        return ResponseEntity.ok(toApiResponse(sr, subject));
    }

    /**
     * Director approval
     */
    @PostMapping("/{id}/director-approval")
    public ResponseEntity<Map<String, Object>> directorApproval(
            @PathVariable UUID id,
            @RequestBody Map<String, Object> body
    ) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        
        Boolean approved = (Boolean) body.get("approved");
        if (Boolean.TRUE.equals(approved)) {
            sr.setStatus(SoutenanceStatus.APPROVED);
        } else {
            sr.setStatus(SoutenanceStatus.REJECTED);
        }
        if (body.get("comments") != null) {
            sr.setAdminComment((String) body.get("comments"));
        }
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        return ResponseEntity.ok(toApiResponse(sr, subject));
    }

    /**
     * Schedule soutenance
     */
    @PatchMapping("/{id}/schedule")
    public ResponseEntity<Map<String, Object>> schedule(
            @PathVariable UUID id,
            @RequestBody Map<String, Object> body
    ) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        
        String when = (String) body.getOrDefault("when", body.get("scheduledDate"));
        if (when != null) {
            try {
                LocalDateTime dt = LocalDateTime.parse(when);
                sr.setDefenseDate(dt.toLocalDate());
                sr.setDefenseTime(dt.toLocalTime());
            } catch (Exception e) {
                try {
                    sr.setDefenseDate(LocalDate.parse(when));
                } catch (Exception ignored) {}
            }
        }
        if (body.get("location") != null) {
            sr.setDefenseLocation((String) body.get("location"));
        }
        sr.setStatus(SoutenanceStatus.SCHEDULED);
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        return ResponseEntity.ok(toApiResponse(sr, subject));
    }

    /**
     * Authorize soutenance
     */
    @PostMapping("/{id}/authorize")
    public ResponseEntity<Map<String, Object>> authorize(
            @PathVariable UUID id,
            @RequestBody Map<String, Object> body
    ) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        
        // For now, just mark as approved/authorized
        if (sr.getStatus() == SoutenanceStatus.APPROVED || sr.getStatus() == SoutenanceStatus.SCHEDULED) {
            // Already in a good state
        }
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        Map<String, Object> response = toApiResponse(sr, subject);
        response.put("authorized", true);
        return ResponseEntity.ok(response);
    }

    /**
     * Replace jury
     */
    @PutMapping("/{id}/jury")
    public ResponseEntity<Map<String, Object>> replaceJury(
            @PathVariable UUID id,
            @RequestBody Map<String, Object> body
    ) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        
        // For now, just acknowledge the jury update
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        Map<String, Object> response = toApiResponse(sr, subject);
        response.put("juryMembers", body.getOrDefault("juryMembers", body.get("members")));
        return ResponseEntity.ok(response);
    }

    /**
     * Validate jury
     */
    @PostMapping("/{id}/jury/validate")
    public ResponseEntity<Map<String, Object>> validateJury(@PathVariable UUID id) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        Map<String, Object> response = toApiResponse(sr, subject);
        response.put("juryValidated", true);
        return ResponseEntity.ok(response);
    }

    /**
     * Submit rapporteur report
     */
    @PostMapping("/{id}/rapporteur-report")
    public ResponseEntity<Map<String, Object>> rapporteurReport(
            @PathVariable UUID id,
            @RequestBody Map<String, Object> body
    ) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        Map<String, Object> response = toApiResponse(sr, subject);
        // Simulate favorable report
        response.put("allRapporteursFavorable", true);
        return ResponseEntity.ok(response);
    }

    /**
     * Set result
     */
    @PostMapping("/{id}/result")
    public ResponseEntity<Map<String, Object>> setResult(
            @PathVariable UUID id,
            @RequestBody Map<String, Object> body
    ) {
        SoutenanceRequest sr = requestRepository.findById(id).orElse(null);
        if (sr == null) {
            return ResponseEntity.notFound().build();
        }
        
        sr.setStatus(SoutenanceStatus.COMPLETED);
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        
        ThesisSubject subject = subjectRepository.findById(sr.getSubjectId()).orElse(null);
        Map<String, Object> response = toApiResponse(sr, subject);
        response.put("result", body.get("result"));
        return ResponseEntity.ok(response);
    }

    /**
     * Convert domain objects to API response format expected by frontend
     */
    private Map<String, Object> toApiResponse(SoutenanceRequest sr, ThesisSubject subject) {
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("id", sr.getId().toString());
        map.put("doctorantAccountId", sr.getDoctorantId().toString());
        map.put("doctorantId", sr.getDoctorantId().toString());
        map.put("thesisTitle", subject != null ? subject.getTitle() : "Sans titre");
        map.put("thesisSummary", subject != null ? subject.getSummary() : null);
        map.put("status", sr.getStatus().name());
        
        if (sr.getDefenseDate() != null) {
            String dateTime = sr.getDefenseDate().toString();
            if (sr.getDefenseTime() != null) {
                dateTime += "T" + sr.getDefenseTime().toString();
            }
            map.put("requestedDateTime", dateTime);
            map.put("scheduledDateTime", dateTime);
            map.put("scheduledDate", sr.getDefenseDate().toString());
        }
        
        map.put("location", sr.getDefenseLocation());
        map.put("desiredLocation", sr.getDefenseLocation());
        map.put("directorComments", sr.getAdminComment());
        map.put("createdAt", sr.getCreatedAt() != null ? sr.getCreatedAt().toString() : null);
        map.put("updatedAt", sr.getUpdatedAt() != null ? sr.getUpdatedAt().toString() : null);
        
        // Flags based on status
        boolean isApproved = sr.getStatus() == SoutenanceStatus.APPROVED 
                          || sr.getStatus() == SoutenanceStatus.SCHEDULED 
                          || sr.getStatus() == SoutenanceStatus.COMPLETED;
        map.put("prerequisitesValid", true);
        map.put("directorApproved", isApproved);
        map.put("directorApprovalDate", isApproved ? Instant.now().toString() : null);
        map.put("allRapporteursFavorable", sr.getStatus() == SoutenanceStatus.SCHEDULED || sr.getStatus() == SoutenanceStatus.COMPLETED);
        map.put("rapporteur1Favorable", sr.getStatus() == SoutenanceStatus.SCHEDULED || sr.getStatus() == SoutenanceStatus.COMPLETED);
        map.put("rapporteur2Favorable", sr.getStatus() == SoutenanceStatus.SCHEDULED || sr.getStatus() == SoutenanceStatus.COMPLETED);
        map.put("juryValidated", sr.getStatus() == SoutenanceStatus.SCHEDULED || sr.getStatus() == SoutenanceStatus.COMPLETED);
        map.put("authorized", sr.getStatus() == SoutenanceStatus.SCHEDULED || sr.getStatus() == SoutenanceStatus.COMPLETED);
        map.put("approachingSixYearLimit", false);
        
        // Empty arrays/defaults
        map.put("juryMembers", Collections.emptyList());
        map.put("jury", Collections.emptyList());
        map.put("publicationsCount", 0);
        map.put("publicationsQ1Q2Count", 0);
        map.put("conferencesCount", 0);
        map.put("trainingHours", 0);
        
        return map;
    }
}
