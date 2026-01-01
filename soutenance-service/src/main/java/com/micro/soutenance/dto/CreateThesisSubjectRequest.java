package com.micro.soutenance.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record CreateThesisSubjectRequest(
        @NotNull UUID doctorantId,
        @NotNull UUID encadrantId,
        @NotBlank String title,
        String summary
) {}
