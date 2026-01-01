package com.micro.soutenance.dto;

import jakarta.validation.constraints.NotBlank;

public record UpsertJuryMemberRequest(
        @NotBlank String name,
        @NotBlank String role,
        String affiliation,
        String email
) {}
