package com.micro.notification.service.iservice;

import com.micro.notification.dto.NotificationRequest;
import com.micro.notification.dto.NotificationResponse;

import java.util.List;
import java.util.UUID;

public interface NotificationService {

    NotificationResponse send(NotificationRequest request);

    NotificationResponse getById(UUID id);

    List<NotificationResponse> getByAccount(UUID accountId);

    /**
     * Mark a notification as read.
     */
    NotificationResponse markAsRead(UUID notificationId);

    /**
     * Mark all notifications for an account as read.
     */
    void markAllAsRead(UUID accountId);

    /**
     * Get count of unread notifications for an account.
     */
    long getUnreadCount(UUID accountId);
}
