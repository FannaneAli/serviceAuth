package com.micro.soutenance.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "soutenance_documents")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SoutenanceDocument {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private UUID requestId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SoutenanceDocumentType type;

    @Column(nullable = false)
    private String fileRef;

    private Instant uploadedAt;
}
