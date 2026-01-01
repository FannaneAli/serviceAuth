package com.micro.soutenance.dto;

import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record CreateSoutenanceRequest(
        @NotNull UUID doctorantId,
        @NotNull UUID subjectId
) {}
