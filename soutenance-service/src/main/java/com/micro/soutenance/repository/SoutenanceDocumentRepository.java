package com.micro.soutenance.repository;

import com.micro.soutenance.domain.SoutenanceDocument;
import com.micro.soutenance.domain.SoutenanceDocumentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface SoutenanceDocumentRepository extends JpaRepository<SoutenanceDocument, UUID> {
    List<SoutenanceDocument> findAllByRequestId(UUID requestId);
    List<SoutenanceDocument> findAllByRequestIdAndType(UUID requestId, SoutenanceDocumentType type);
}
