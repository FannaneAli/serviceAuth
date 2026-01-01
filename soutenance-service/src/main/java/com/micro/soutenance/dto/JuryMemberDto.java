package com.micro.soutenance.dto;

import java.util.UUID;

public record JuryMemberDto(
        UUID id,
        String name,
        String role,
        String affiliation,
        String email
) {}
