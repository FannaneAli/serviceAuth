package com.micro.soutenance.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Entity
@Table(name = "soutenance_requests")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SoutenanceRequest {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private UUID doctorantId;

    @Column(nullable = false)
    private UUID subjectId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SoutenanceStatus status;

    private LocalDate defenseDate;
    private LocalTime defenseTime;
    private String defenseLocation;
    private String adminComment;

    private Instant createdAt;
    private Instant updatedAt;
}
