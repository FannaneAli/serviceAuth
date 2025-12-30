package com.micro.notification.service.impl;

import com.micro.notification.dto.NotificationRequest;
import com.micro.notification.dto.NotificationResponse;
import com.micro.notification.entity.Notification;
import com.micro.notification.enums.NotificationChannel;
import com.micro.notification.enums.NotificationStatus;
import com.micro.notification.enums.NotificationType;
import com.micro.notification.repository.NotificationRepository;
import com.micro.notification.service.iservice.NotificationService;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Map;
import java.util.Objects;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository repository;
    private final JavaMailSender mailSender;
    private final String defaultFrom;
    private static final Logger log = LoggerFactory.getLogger(NotificationServiceImpl.class);

    public NotificationServiceImpl(NotificationRepository repository,
                                   JavaMailSender mailSender,
                                   @org.springframework.beans.factory.annotation.Value("${notification.mail.from:${spring.mail.username:}}") String defaultFrom) {
        this.repository = repository;
        this.mailSender = mailSender;
        this.defaultFrom = defaultFrom;
    }

    @Override
    public NotificationResponse send(NotificationRequest request) {
        String subject = safeOrDefault(request.subject(), defaultSubject(request));
        String content = safeOrDefault(request.content(), defaultContent(request));

        Notification notification = Notification.builder()
                .channel(request.channel())
                .type(request.type())
                .accountId(request.accountId())
                .recipient(request.recipient())
                .subject(subject)
                .content(content)
                .metadata(request.metadata())
                .status(NotificationStatus.PENDING)
                .build();

        if (notification.getChannel() == NotificationChannel.EMAIL) {
            if (notification.getRecipient() == null || notification.getRecipient().isBlank()) {
                notification.setStatus(NotificationStatus.FAILED);
                notification.setLastError("Missing recipient for email notification");
                Notification saved = repository.save(notification);
                return toResponse(saved);
            }
            sendEmail(notification);
        } else {
            notification.setStatus(NotificationStatus.SENT);
            notification.setSentAt(Instant.now());
        }

        Notification saved = repository.save(notification);
        return toResponse(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public NotificationResponse getById(UUID id) {
        Notification notification = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Notification not found"));
        return toResponse(notification);
    }

    @Override
    @Transactional(readOnly = true)
    public List<NotificationResponse> getByAccount(UUID accountId) {
        return repository.findAllByAccountId(accountId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private NotificationResponse toResponse(Notification entity) {
        return new NotificationResponse(
                entity.getId(),
                entity.getChannel(),
                entity.getType(),
                entity.getAccountId(),
                entity.getRecipient(),
                entity.getSubject(),
                entity.getContent(),
                entity.getMetadata(),
                entity.getStatus(),
                entity.getLastError(),
                entity.getSentAt(),
                entity.getCreatedAt()
        );
    }

    private void sendEmail(Notification notification) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            if (defaultFrom != null && !defaultFrom.isBlank()) {
                message.setFrom(defaultFrom);
            }
            message.setTo(notification.getRecipient());
            message.setSubject(notification.getSubject());
            message.setText(notification.getContent());
            mailSender.send(message);
            notification.setStatus(NotificationStatus.SENT);
            notification.setSentAt(Instant.now());
        } catch (MailException ex) {
            log.error("Failed to send email notification", ex);
            notification.setStatus(NotificationStatus.FAILED);
            notification.setLastError(ex.getMessage());
        }
    }

    private String safeOrDefault(String value, String fallback) {
        if (value == null || value.isBlank()) {
            return fallback;
        }
        return value;
    }

    private String defaultSubject(NotificationRequest request) {
        NotificationType type = request.type();
        if (type == null) return "Notification";
        return switch (type) {
            case SOUTENANCE_SUBMITTED -> "Dossier de soutenance soumis";
            case SOUTENANCE_UNDER_REVIEW -> "Soutenance en revue";
            case SOUTENANCE_APPROVED -> "Soutenance approuvée";
            case SOUTENANCE_REJECTED -> "Soutenance rejetée";
            case SOUTENANCE_AUTHORIZED -> "Autorisation de soutenance";
            case SOUTENANCE_SCHEDULED -> "Soutenance planifiée";
            case SOUTENANCE_JURY_VALIDATED -> "Jury validé";
            case SOUTENANCE_DEFENDED -> "Soutenance effectuée";
            default -> "Notification";
        };
    }

    private String defaultContent(NotificationRequest request) {
        Map<String, Object> md = request.metadata();
        String thesis = asString(md, "thesisTitle");
        String status = asString(md, "status");
        String scheduled = asString(md, "scheduledDateTime");
        String location = asString(md, "location");

        return switch (request.type()) {
            case SOUTENANCE_SUBMITTED ->
                    "Votre dossier de soutenance" + titlePart(thesis) + " a été soumis et sera examiné.";
            case SOUTENANCE_UNDER_REVIEW ->
                    "Votre dossier de soutenance" + titlePart(thesis) + " est en cours de revue.";
            case SOUTENANCE_APPROVED ->
                    "Votre dossier de soutenance" + titlePart(thesis) + " est approuvé. En attente d'autorisation.";
            case SOUTENANCE_JURY_VALIDATED ->
                    "Le jury pour votre soutenance" + titlePart(thesis) + " est validé.";
            case SOUTENANCE_AUTHORIZED ->
                    "Votre soutenance" + titlePart(thesis) + " est autorisée par l'administration.";
            case SOUTENANCE_SCHEDULED ->
                    "Votre soutenance" + titlePart(thesis) + " est planifiée le " + scheduled + " à " + location + ".";
            case SOUTENANCE_REJECTED ->
                    "Votre dossier de soutenance" + titlePart(thesis) + " a été rejeté.";
            case SOUTENANCE_DEFENDED ->
                    "Votre soutenance" + titlePart(thesis) + " est marquée comme effectuée.";
            default ->
                    "Notification de type " + request.type() + (status != null ? (" - statut " + status) : "");
        };
    }

    private String titlePart(String thesis) {
        return (thesis == null || thesis.isBlank()) ? "" : (" \"" + thesis + "\"");
    }

    private String asString(Map<String, Object> map, String key) {
        if (map == null) return null;
        Object v = map.get(key);
        return Objects.toString(v, null);
    }
}
