package com.micro.notification.security;

import com.micro.notification.entity.Notification;
import com.micro.notification.repository.NotificationRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service("notificationSecurityService")
public class NotificationSecurityService {

    private final NotificationRepository notificationRepository;

    public NotificationSecurityService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    /**
     * Check if the authenticated user is the owner of the notification.
     */
    public boolean isOwner(UUID notificationId, Authentication authentication) {
        if (authentication == null || authentication.getPrincipal() == null) {
            return false;
        }
        
        String principalId = authentication.getPrincipal().toString();
        
        return notificationRepository.findById(notificationId)
                .map(notification -> notification.getAccountId().toString().equals(principalId))
                .orElse(false);
    }
}
