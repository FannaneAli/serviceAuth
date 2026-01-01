package com.micro.soutenance.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "jury_members")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JuryMember {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private UUID requestId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String role; // rapporteur, examinateur, president

    private String affiliation;
    private String email;
}
