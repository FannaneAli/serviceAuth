package com.micro.notification.dto;

import com.micro.notification.enums.NotificationChannel;
import com.micro.notification.enums.NotificationType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Map;
import java.util.UUID;

public record NotificationRequest(
        @NotNull NotificationChannel channel,
        @NotNull NotificationType type,
        UUID accountId,
        @Email @NotBlank String recipient,
        @NotBlank String subject,
        @NotBlank String content,
        Map<String, Object> metadata
) {}
