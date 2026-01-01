package com.micro.account.controller;

import com.micro.account.dto.CreateJurorRequest;
import com.micro.account.dto.JurorResponse;
import com.micro.account.entity.Juror;
import com.micro.account.repository.JurorRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/admin/jures")
@RequiredArgsConstructor
public class JurorController {

    private final JurorRepository jurorRepository;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<JurorResponse>> list() {
        List<JurorResponse> res = jurorRepository.findAll().stream()
                .map(this::toResponse)
                .toList();
        return ResponseEntity.ok(res);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<JurorResponse> create(@Valid @RequestBody CreateJurorRequest req) {
        if (jurorRepository.existsByEmailIgnoreCase(req.email())) {
            throw new IllegalStateException("Email de jure deja utilise.");
        }
        Juror saved = jurorRepository.save(Juror.builder()
                .name(req.name())
                .email(req.email())
                .university(req.university())
                .note(req.note())
                .build());
        return ResponseEntity.ok(toResponse(saved));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<JurorResponse> update(@PathVariable UUID id, @Valid @RequestBody CreateJurorRequest req) {
        Juror juror = jurorRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Jure introuvable."));
        jurorRepository.findByEmailIgnoreCase(req.email())
                .filter(j -> !j.getId().equals(id))
                .ifPresent(j -> { throw new IllegalStateException("Email de jure deja utilise."); });

        juror.setName(req.name());
        juror.setEmail(req.email());
        juror.setUniversity(req.university());
        juror.setNote(req.note());
        Juror saved = jurorRepository.save(juror);
        return ResponseEntity.ok(toResponse(saved));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        jurorRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    private JurorResponse toResponse(Juror j) {
        return new JurorResponse(j.getId(), j.getName(), j.getEmail(), j.getUniversity(), j.getNote());
    }
}
