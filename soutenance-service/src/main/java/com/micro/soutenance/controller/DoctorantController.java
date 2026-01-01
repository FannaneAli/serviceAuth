package com.micro.soutenance.controller;

import com.micro.soutenance.domain.SoutenanceRequest;
import com.micro.soutenance.domain.SoutenanceStatus;
import com.micro.soutenance.domain.ThesisSubject;
import com.micro.soutenance.domain.ThesisStatus;
import com.micro.soutenance.dto.*;
import com.micro.soutenance.repository.SoutenanceRequestRepository;
import com.micro.soutenance.repository.ThesisSubjectRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/doctorant")
@RequiredArgsConstructor
public class DoctorantController {

    private final ThesisSubjectRepository subjectRepository;
    private final SoutenanceRequestRepository requestRepository;

    @PostMapping("/subjects")
    public ResponseEntity<ThesisSubjectDto> createSubject(@Valid @RequestBody CreateThesisSubjectRequest req) {
        ThesisSubject subject = ThesisSubject.builder()
                .doctorantId(req.doctorantId())
                .encadrantId(req.encadrantId())
                .title(req.title())
                .summary(req.summary())
                .status(ThesisStatus.SUBMITTED)
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();
        subject = subjectRepository.save(subject);
        return ResponseEntity.ok(toDto(subject));
    }

    @GetMapping("/subjects")
    public List<ThesisSubjectDto> mySubjects(@RequestParam UUID doctorantId) {
        return subjectRepository.findAllByDoctorantId(doctorantId).stream().map(this::toDto).toList();
    }

    @PostMapping("/requests")
    public ResponseEntity<SoutenanceRequestDto> createRequest(@Valid @RequestBody CreateSoutenanceRequest req) {
        SoutenanceRequest sr = SoutenanceRequest.builder()
                .doctorantId(req.doctorantId())
                .subjectId(req.subjectId())
                .status(SoutenanceStatus.DRAFT)
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();
        sr = requestRepository.save(sr);
        return ResponseEntity.ok(toDto(sr));
    }

    @PutMapping("/requests/{id}")
    public ResponseEntity<SoutenanceRequestDto> updateRequest(@PathVariable UUID id, @RequestBody UpdateSoutenanceRequest req) {
        SoutenanceRequest sr = requestRepository.findById(id).orElseThrow();
        if (req.status() != null) sr.setStatus(req.status());
        sr.setDefenseDate(req.defenseDate());
        sr.setDefenseTime(req.defenseTime());
        sr.setDefenseLocation(req.defenseLocation());
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        return ResponseEntity.ok(toDto(sr));
    }

    @GetMapping("/requests")
    public List<SoutenanceRequestDto> myRequests(@RequestParam UUID doctorantId) {
        return requestRepository.findAllByDoctorantId(doctorantId).stream().map(this::toDto).toList();
    }

    private ThesisSubjectDto toDto(ThesisSubject s) {
        return new ThesisSubjectDto(s.getId(), s.getDoctorantId(), s.getEncadrantId(), s.getTitle(), s.getSummary(), s.getStatus());
    }

    private SoutenanceRequestDto toDto(SoutenanceRequest sr) {
        return new SoutenanceRequestDto(sr.getId(), sr.getDoctorantId(), sr.getSubjectId(), sr.getStatus(), sr.getDefenseDate(), sr.getDefenseTime(), sr.getDefenseLocation(), sr.getAdminComment());
    }
}
