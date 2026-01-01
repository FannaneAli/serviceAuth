package com.micro.soutenance.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "soutenance_checklists")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SoutenanceChecklist {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private UUID requestId;

    private int publicationsCount;
    private int credits;
    private boolean documentsComplete;
    private boolean antiPlagValidated;
    private UUID validatedBy;
    private Instant validatedAt;
}
