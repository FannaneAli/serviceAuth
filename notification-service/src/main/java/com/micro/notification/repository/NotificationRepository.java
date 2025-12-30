package com.micro.notification.repository;

import com.micro.notification.entity.Notification;
import com.micro.notification.enums.NotificationStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface NotificationRepository extends JpaRepository<Notification, UUID> {

    List<Notification> findAllByAccountId(UUID accountId);

    List<Notification> findAllByStatus(NotificationStatus status);
}
