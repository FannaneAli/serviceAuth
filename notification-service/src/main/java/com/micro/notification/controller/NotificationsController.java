package com.micro.notification.controller;

import com.micro.notification.dto.NotificationRequest;
import com.micro.notification.dto.NotificationResponse;
import com.micro.notification.service.iservice.NotificationService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
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

    @PostMapping
    public ResponseEntity<NotificationResponse> send(@Valid @RequestBody NotificationRequest request) {
        NotificationResponse created = notificationService.send(request);
        return ResponseEntity.created(URI.create("/notifications/" + created.id())).body(created);
    }

    @GetMapping("/{id}")
    public ResponseEntity<NotificationResponse> getById(@PathVariable UUID id) {
        return ResponseEntity.ok(notificationService.getById(id));
    }

    @GetMapping("/by-account/{accountId}")
    public ResponseEntity<List<NotificationResponse>> getByAccount(@PathVariable UUID accountId) {
        return ResponseEntity.ok(notificationService.getByAccount(accountId));
    }
}
