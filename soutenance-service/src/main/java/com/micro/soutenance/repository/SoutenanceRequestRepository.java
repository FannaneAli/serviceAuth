package com.micro.soutenance.repository;

import com.micro.soutenance.domain.SoutenanceRequest;
import com.micro.soutenance.domain.SoutenanceStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface SoutenanceRequestRepository extends JpaRepository<SoutenanceRequest, UUID> {
    List<SoutenanceRequest> findAllByDoctorantId(UUID doctorantId);
    List<SoutenanceRequest> findAllByStatus(SoutenanceStatus status);
}
