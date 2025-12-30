package com.devbuild.entity;

import com.devbuild.enums.SoutenanceResult;
import com.devbuild.enums.SoutenanceStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "soutenances")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Soutenance {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", nullable = false, updatable = false)
    private UUID id;

    @Column(name = "doctorant_account_id", nullable = false, updatable = false)
    private UUID doctorantAccountId;

    @Column(name = "doctorant_email", length = 200)
    private String doctorantEmail;

    @Column(name = "thesis_title", nullable = false, length = 300)
    private String thesisTitle;

    @Column(name = "thesis_summary", length = 2000)
    private String thesisSummary;

    @Column(name = "handwritten_request_url", length = 500)
    private String handwrittenRequestUrl;

    @Column(name = "manuscript_url", length = 500)
    private String manuscriptUrl;

    @Column(name = "anti_plagiarism_report_url", length = 500)
    private String antiPlagiarismReportUrl;

    @Column(name = "publications_report_url", length = 500)
    private String publicationsReportUrl;

    @Column(name = "training_certificates_url", length = 500)
    private String trainingCertificatesUrl;

    @Column(name = "publications_count")
    private Integer publicationsCount;

    @Column(name = "publications_q1q2_count")
    private Integer publicationsQ1Q2Count;

    @Column(name = "conferences_count")
    private Integer conferencesCount;

    @Column(name = "training_hours")
    private Integer trainingHours;

    @Column(name = "initial_enrollment_date")
    private LocalDate initialEnrollmentDate;

    @Column(name = "derogation_approved", nullable = false)
    @Builder.Default
    private boolean derogationApproved = false;

    @Column(name = "prerequisites_valid", nullable = false)
    @Builder.Default
    private boolean prerequisitesValid = false;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 30)
    @Builder.Default
    private SoutenanceStatus status = SoutenanceStatus.DRAFT;

    @Column(name = "requested_datetime")
    private LocalDateTime requestedDateTime;

    @Column(name = "requested_location", length = 200)
    private String requestedLocation;

    @Column(name = "scheduled_datetime")
    private LocalDateTime scheduledDateTime;

    @Column(name = "location", length = 200)
    private String location;

    @Column(name = "authorized", nullable = false)
    @Builder.Default
    private boolean authorized = false;

    @Column(name = "authorization_document_url", length = 500)
    private String authorizationDocumentUrl;

    @Column(name = "attestation_url", length = 500)
    private String attestationUrl;

    @Column(name = "proces_verbal_url", length = 500)
    private String procesVerbalUrl;

    @Column(name = "jury_validated", nullable = false)
    @Builder.Default
    private boolean juryValidated = false;

    // ===== Director Approval =====
    @Column(name = "director_approved", nullable = false)
    @Builder.Default
    private boolean directorApproved = false;

    @Column(name = "director_approval_date")
    private LocalDateTime directorApprovalDate;

    @Column(name = "director_comments", length = 1000)
    private String directorComments;

    // ===== Rapporteur Reports =====
    @Column(name = "rapporteur1_report_url", length = 500)
    private String rapporteur1ReportUrl;

    @Column(name = "rapporteur1_favorable")
    private Boolean rapporteur1Favorable;

    @Column(name = "rapporteur1_report_date")
    private LocalDateTime rapporteur1ReportDate;

    @Column(name = "rapporteur1_comments", length = 1000)
    private String rapporteur1Comments;

    @Column(name = "rapporteur2_report_url", length = 500)
    private String rapporteur2ReportUrl;

    @Column(name = "rapporteur2_favorable")
    private Boolean rapporteur2Favorable;

    @Column(name = "rapporteur2_report_date")
    private LocalDateTime rapporteur2ReportDate;

    @Column(name = "rapporteur2_comments", length = 1000)
    private String rapporteur2Comments;

    @Column(name = "all_rapporteurs_favorable", nullable = false)
    @Builder.Default
    private boolean allRapporteursFavorable = false;

    // ===== Soutenance Result =====
    @Enumerated(EnumType.STRING)
    @Column(name = "result", length = 50)
    private SoutenanceResult result;

    @Column(name = "result_date")
    private LocalDateTime resultDate;

    @Column(name = "result_comments", length = 1000)
    private String resultComments;

    // ===== Duration Alert =====
    @Column(name = "duration_alert_sent", nullable = false)
    @Builder.Default
    private boolean durationAlertSent = false;

    @OneToMany(mappedBy = "soutenance", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<JuryMember> juryMembers = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Version
    @Builder.Default
    @Column(name = "version", nullable = false)
    private long version = 0L;
}
