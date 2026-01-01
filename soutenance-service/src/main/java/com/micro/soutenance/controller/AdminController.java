package com.micro.soutenance.controller;

import com.micro.soutenance.domain.SoutenanceRequest;
import com.micro.soutenance.domain.SoutenanceStatus;
import com.micro.soutenance.dto.SoutenanceRequestDto;
import com.micro.soutenance.dto.UpdateSoutenanceRequest;
import com.micro.soutenance.repository.SoutenanceRequestRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final SoutenanceRequestRepository requestRepository;

    @GetMapping("/requests")
    public List<SoutenanceRequestDto> list(@RequestParam(required = false) SoutenanceStatus status) {
        var list = status != null ? requestRepository.findAllByStatus(status) : requestRepository.findAll();
        return list.stream().map(this::toDto).toList();
    }

    @PutMapping("/requests/{id}/review")
    public ResponseEntity<SoutenanceRequestDto> review(@PathVariable UUID id, @Valid @RequestBody UpdateSoutenanceRequest req) {
        SoutenanceRequest sr = requestRepository.findById(id).orElseThrow();
        if (req.status() != null) sr.setStatus(req.status());
        sr.setDefenseDate(req.defenseDate());
        sr.setDefenseTime(req.defenseTime());
        sr.setDefenseLocation(req.defenseLocation());
        sr.setAdminComment(req.adminComment());
        sr.setUpdatedAt(Instant.now());
        sr = requestRepository.save(sr);
        return ResponseEntity.ok(toDto(sr));
    }

    private SoutenanceRequestDto toDto(SoutenanceRequest sr) {
        return new SoutenanceRequestDto(sr.getId(), sr.getDoctorantId(), sr.getSubjectId(), sr.getStatus(),
                sr.getDefenseDate(), sr.getDefenseTime(), sr.getDefenseLocation(), sr.getAdminComment());
    }
}
