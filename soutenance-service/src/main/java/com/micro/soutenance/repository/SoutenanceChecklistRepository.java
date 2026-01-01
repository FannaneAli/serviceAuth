package com.micro.soutenance.repository;

import com.micro.soutenance.domain.SoutenanceChecklist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface SoutenanceChecklistRepository extends JpaRepository<SoutenanceChecklist, UUID> {
    Optional<SoutenanceChecklist> findByRequestId(UUID requestId);
}
