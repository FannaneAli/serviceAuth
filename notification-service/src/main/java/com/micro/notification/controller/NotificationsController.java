package com.micro.notification.controller;

import com.micro.notification.dto.NotificationRequest;
import com.micro.notification.dto.NotificationResponse;
import com.micro.notification.service.iservice.NotificationService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/notifications")
public class NotificationsController {

    private final NotificationService notificationService;

    public NotificationsController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    /**
     * Send a notification. Only admin/superuser or internal services can call this.
     */
    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER')")
    public ResponseEntity<NotificationResponse> send(@Valid @RequestBody NotificationRequest request) {
        NotificationResponse created = notificationService.send(request);
        return ResponseEntity.created(URI.create("/notifications/" + created.id())).body(created);
    }

    /**
     * Get a notification by ID.
     */
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER') or @notificationSecurityService.isOwner(#id, authentication)")
    public ResponseEntity<NotificationResponse> getById(@PathVariable UUID id) {
        return ResponseEntity.ok(notificationService.getById(id));
    }

    /**
     * Get all notifications for an account. User can only access their own unless admin.
     */
    @GetMapping("/by-account/{accountId}")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER') or #accountId.toString() == authentication.principal")
    public ResponseEntity<List<NotificationResponse>> getByAccount(@PathVariable UUID accountId) {
        return ResponseEntity.ok(notificationService.getByAccount(accountId));
    }

    /**
     * Get current user's notifications.
     */
    @GetMapping("/me")
    public ResponseEntity<List<NotificationResponse>> getMyNotifications() {
        UUID accountId = getCurrentUserId();
        return ResponseEntity.ok(notificationService.getByAccount(accountId));
    }

    /**
     * Mark a notification as read.
     */
    @PostMapping("/{id}/read")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER') or @notificationSecurityService.isOwner(#id, authentication)")
    public ResponseEntity<NotificationResponse> markAsRead(@PathVariable UUID id) {
        return ResponseEntity.ok(notificationService.markAsRead(id));
    }

    /**
     * Mark a notification as read (PATCH version for UI compatibility).
     */
    @PatchMapping("/{id}/read")
    @PreAuthorize("hasAnyRole('ADMIN','SUPERUSER') or @notificationSecurityService.isOwner(#id, authentication)")
    public ResponseEntity<NotificationResponse> markAsReadPatch(@PathVariable UUID id) {
        return ResponseEntity.ok(notificationService.markAsRead(id));
    }

    /**
     * Mark all notifications as read for current user.
     */
    @PatchMapping("/read-all")
    public ResponseEntity<Void> markAllAsRead() {
        UUID accountId = getCurrentUserId();
        if (accountId == null) {
            return ResponseEntity.badRequest().build();
        }
        notificationService.markAllAsRead(accountId);
        return ResponseEntity.noContent().build();
    }

    /**
     * Mark all notifications as read for a specific account.
     */
    @PatchMapping("/by-account/{accountId}/read-all")
    public ResponseEntity<Void> markAllAsReadForAccount(@PathVariable UUID accountId) {
        // Verify the user can access this account's notifications
        UUID currentUserId = getCurrentUserId();
        if (currentUserId == null) {
            return ResponseEntity.status(401).build();
        }
        // Allow if user is accessing their own notifications
        if (!currentUserId.equals(accountId)) {
            return ResponseEntity.status(403).build();
        }
        notificationService.markAllAsRead(accountId);
        return ResponseEntity.noContent().build();
    }

    /**
     * Get unread count for current user.
     */
    @GetMapping("/me/unread-count")
    public ResponseEntity<Long> getUnreadCount() {
        UUID accountId = getCurrentUserId();
        if (accountId == null) {
            return ResponseEntity.ok(0L);
        }
        return ResponseEntity.ok(notificationService.getUnreadCount(accountId));
    }

    private UUID getCurrentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || auth.getPrincipal() == null) {
            return null;
        }
        String principal = auth.getPrincipal().toString();
        if ("anonymousUser".equals(principal)) {
            return null;
        }
        try {
            return UUID.fromString(principal);
        } catch (IllegalArgumentException e) {
            return null;
        }
    }
}
