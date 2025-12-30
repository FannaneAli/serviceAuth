package com.micro.notification.dto;

import com.micro.notification.enums.NotificationChannel;
import com.micro.notification.enums.NotificationStatus;
import com.micro.notification.enums.NotificationType;

import java.time.Instant;
import java.util.Map;
import java.util.UUID;

public record NotificationResponse(
        UUID id,
        NotificationChannel channel,
        NotificationType type,
        UUID accountId,
        String recipient,
        String subject,
        String content,
        Map<String, Object> metadata,
        NotificationStatus status,
        String lastError,
        Instant sentAt,
        Instant createdAt
) {}
