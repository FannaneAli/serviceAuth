package com.devbuild.dto;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record ScheduleSoutenanceRequest(
        @NotBlank String location,
        @NotNull @Future(message = "The scheduled date must be in the future") LocalDateTime when
) {}
