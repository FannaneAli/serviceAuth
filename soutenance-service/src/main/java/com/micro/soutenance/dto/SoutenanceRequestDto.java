package com.micro.soutenance.dto;

import com.micro.soutenance.domain.SoutenanceStatus;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

public record SoutenanceRequestDto(
        UUID id,
        UUID doctorantId,
        UUID subjectId,
        SoutenanceStatus status,
        LocalDate defenseDate,
        LocalTime defenseTime,
        String defenseLocation,
        String adminComment
) {}
