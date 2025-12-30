package com.devbuild.repository;

import com.devbuild.entity.Soutenance;
import com.devbuild.enums.SoutenanceStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface SoutenanceRepository extends JpaRepository<Soutenance, UUID> {

    List<Soutenance> findAllByDoctorantAccountId(UUID doctorantAccountId);

    List<Soutenance> findAllByStatus(SoutenanceStatus status);

    /**
     * Find all soutenances for a doctorant with specific statuses.
     * Used to check if a doctorant has an active (non-rejected) soutenance.
     */
    List<Soutenance> findAllByDoctorantAccountIdAndStatusIn(UUID doctorantAccountId, List<SoutenanceStatus> statuses);

    /**
     * Check if a doctorant has any soutenance with a specific status.
     */
    boolean existsByDoctorantAccountIdAndStatusIn(UUID doctorantAccountId, List<SoutenanceStatus> statuses);
}