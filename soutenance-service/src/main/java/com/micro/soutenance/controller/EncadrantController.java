package com.micro.soutenance.controller;

import com.micro.soutenance.domain.JuryMember;
import com.micro.soutenance.dto.JuryMemberDto;
import com.micro.soutenance.dto.UpsertJuryMemberRequest;
import com.micro.soutenance.repository.JuryMemberRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/encadrant")
@RequiredArgsConstructor
public class EncadrantController {

    private final JuryMemberRepository juryMemberRepository;

    @GetMapping("/requests/{requestId}/jury")
    public List<JuryMemberDto> listJury(@PathVariable UUID requestId) {
        return juryMemberRepository.findAllByRequestId(requestId).stream()
                .map(this::toDto)
                .toList();
    }

    @PostMapping("/requests/{requestId}/jury")
    public ResponseEntity<JuryMemberDto> addJury(@PathVariable UUID requestId, @Valid @RequestBody UpsertJuryMemberRequest req) {
        JuryMember jm = JuryMember.builder()
                .requestId(requestId)
                .name(req.name())
                .role(req.role())
                .affiliation(req.affiliation())
                .email(req.email())
                .build();
        jm = juryMemberRepository.save(jm);
        return ResponseEntity.ok(toDto(jm));
    }

    @PutMapping("/requests/{requestId}/jury/{id}")
    public ResponseEntity<JuryMemberDto> updateJury(@PathVariable UUID requestId, @PathVariable UUID id, @Valid @RequestBody UpsertJuryMemberRequest req) {
        JuryMember jm = juryMemberRepository.findById(id).orElseThrow();
        jm.setName(req.name());
        jm.setRole(req.role());
        jm.setAffiliation(req.affiliation());
        jm.setEmail(req.email());
        jm = juryMemberRepository.save(jm);
        return ResponseEntity.ok(toDto(jm));
    }

    @DeleteMapping("/requests/{requestId}/jury/{id}")
    public ResponseEntity<Void> deleteJury(@PathVariable UUID requestId, @PathVariable UUID id) {
        juryMemberRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    private JuryMemberDto toDto(JuryMember jm) {
        return new JuryMemberDto(jm.getId(), jm.getName(), jm.getRole(), jm.getAffiliation(), jm.getEmail());
    }
}
