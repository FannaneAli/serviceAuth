package com.micro.account.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name = "jures",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_jure_email", columnNames = "email")
        })
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Juror {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", nullable = false, updatable = false, columnDefinition = "uuid")
    private UUID id;

    @NotBlank
    @Column(name = "name", nullable = false, length = 120)
    private String name;

    @Email
    @NotBlank
    @Column(name = "email", nullable = false, length = 180)
    private String email;

    @Column(name = "university", length = 160)
    private String university;

    @Column(name = "note", length = 255)
    private String note;
}
