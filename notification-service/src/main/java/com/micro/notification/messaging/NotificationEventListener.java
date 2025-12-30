package com.micro.notification.messaging;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.micro.notification.dto.NotificationRequest;
import com.micro.notification.service.iservice.NotificationService;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class NotificationEventListener {

    private static final Logger log = LoggerFactory.getLogger(NotificationEventListener.class);

    private final NotificationService notificationService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public NotificationEventListener(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @KafkaListener(
            topics = "${app.kafka.topics.notifications:notifications}",
            groupId = "${spring.application.name}-group"
    )
    public void handleNotificationEvent(ConsumerRecord<String, String> record) {
        try {
            NotificationRequest request = objectMapper.readValue(record.value(), NotificationRequest.class);
            notificationService.send(request);
        } catch (Exception e) {
            log.error("Failed to process notification event. offset={}, value={}", record.offset(), record.value(), e);
        }
    }
}
