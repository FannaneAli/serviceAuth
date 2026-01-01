package com.micro.soutenance.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "thesis_subjects")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ThesisSubject {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private UUID doctorantId;

    @Column(nullable = false)
    private UUID encadrantId;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "text")
    private String summary;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ThesisStatus status;

    private Instant createdAt;
    private Instant updatedAt;
}
