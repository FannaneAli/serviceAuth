package com.micro.soutenance.dto;

import com.micro.soutenance.domain.SoutenanceStatus;

import java.time.LocalDate;
import java.time.LocalTime;

public record UpdateSoutenanceRequest(
        SoutenanceStatus status,
        LocalDate defenseDate,
        LocalTime defenseTime,
        String defenseLocation,
        String adminComment
) {}
