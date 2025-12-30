package com.devbuild.dto;

import com.devbuild.enums.SoutenanceResult;
import jakarta.validation.constraints.NotNull;

/**
 * Request for setting the result/mention of the soutenance after defense.
 */
public record SetResultRequest(
        @NotNull SoutenanceResult result,
        String comments
) {}
