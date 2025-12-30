package com.devbuild.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

/**
 * Request for submitting a rapporteur's evaluation report.
 */
public record RapporteurReportRequest(
        @NotNull Integer rapporteurNumber, // 1 or 2
        @NotBlank String reportUrl,
        @NotNull Boolean favorable,
        String comments
) {}
