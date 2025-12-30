package com.devbuild.dto;

import jakarta.validation.constraints.NotBlank;

/**
 * Request for director (Directeur de Thèse) to approve the soutenance request.
 */
public record DirectorApprovalRequest(
        boolean approved,
        String comments
) {}
