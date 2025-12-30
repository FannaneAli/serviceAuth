package com.micro.notification.messaging;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.micro.notification.dto.NotificationRequest;
import com.micro.notification.enums.NotificationChannel;
import com.micro.notification.enums.NotificationType;
import com.micro.notification.service.iservice.NotificationService;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.UUID;

@Component
public class NotificationEventListener {

    private static final Logger log = LoggerFactory.getLogger(NotificationEventListener.class);

    private final NotificationService notificationService;
    private final ObjectMapper objectMapper;

    public NotificationEventListener(NotificationService notificationService) {
        this.notificationService = notificationService;
        this.objectMapper = new ObjectMapper();
        this.objectMapper.registerModule(new JavaTimeModule());
        this.objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        this.objectMapper.configure(DeserializationFeature.READ_UNKNOWN_ENUM_VALUES_AS_NULL, true);
    }

    @KafkaListener(
            topics = "${app.kafka.topics.notifications:notifications}",
            groupId = "${spring.application.name}-group"
    )
    @SuppressWarnings("unchecked")
    public void handleNotificationEvent(ConsumerRecord<String, String> record) {
        log.info("Received notification event: offset={}, value={}", record.offset(), record.value());
        try {
            // Parse as generic map first for flexibility
            Map<String, Object> payload = objectMapper.readValue(record.value(), Map.class);
            
            // Extract and convert fields
            String channelStr = String.valueOf(payload.getOrDefault("channel", "PUSH"));
            String typeStr = String.valueOf(payload.getOrDefault("type", "GENERIC"));
            String accountIdStr = payload.get("accountId") != null ? String.valueOf(payload.get("accountId")) : null;
            String recipient = String.valueOf(payload.getOrDefault("recipient", ""));
            String subject = String.valueOf(payload.getOrDefault("subject", "Notification"));
            String content = String.valueOf(payload.getOrDefault("content", ""));
            
            // Parse channel
            NotificationChannel channel;
            try {
                channel = NotificationChannel.valueOf(channelStr);
            } catch (Exception e) {
                channel = NotificationChannel.PUSH;
            }
            
            // Parse type - handle dynamic types
            NotificationType type;
            try {
                type = NotificationType.valueOf(typeStr);
            } catch (Exception e) {
                // Try common mappings
                if (typeStr.contains("SUBMITTED")) {
                    type = NotificationType.SOUTENANCE_SUBMITTED;
                } else if (typeStr.contains("APPROVED")) {
                    type = NotificationType.SOUTENANCE_APPROVED;
                } else if (typeStr.contains("REJECTED")) {
                    type = NotificationType.SOUTENANCE_REJECTED;
                } else if (typeStr.contains("SCHEDULED")) {
                    type = NotificationType.SOUTENANCE_SCHEDULED;
                } else if (typeStr.contains("AUTHORIZED")) {
                    type = NotificationType.SOUTENANCE_AUTHORIZED;
                } else if (typeStr.contains("DIRECTOR")) {
                    type = typeStr.contains("REJECTED") ? 
                           NotificationType.SOUTENANCE_DIRECTOR_REJECTED : 
                           NotificationType.SOUTENANCE_DIRECTOR_APPROVED;
                } else {
                    type = NotificationType.SOUTENANCE_EVENT;
                }
            }
            
            // Parse accountId
            UUID accountId = null;
            if (accountIdStr != null && !accountIdStr.equals("null")) {
                try {
                    accountId = UUID.fromString(accountIdStr);
                } catch (Exception ignored) {}
            }
            
            // Get metadata
            @SuppressWarnings("unchecked")
            Map<String, Object> metadata = payload.containsKey("metadata") ? 
                (Map<String, Object>) payload.get("metadata") : payload;
            
            NotificationRequest request = new NotificationRequest(
                channel, type, accountId, recipient, subject, content, metadata
            );
            
            log.info("Processing notification: type={}, recipient={}, accountId={}", type, recipient, accountId);
            notificationService.send(request);
            log.info("Notification sent successfully");
            
        } catch (Exception e) {
            log.error("Failed to process notification event. offset={}, value={}", record.offset(), record.value(), e);
        }
    }
}
