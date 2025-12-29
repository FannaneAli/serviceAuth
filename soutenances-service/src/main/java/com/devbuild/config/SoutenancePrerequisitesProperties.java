package com.devbuild.config;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

@Getter
@Setter
@Validated
@ConfigurationProperties(prefix = "soutenances.prerequisites")
public class SoutenancePrerequisitesProperties {

    @Min(0)
    private int minPublications = 2;

    @Min(0)
    private int minConferences = 2;

    @Min(0)
    private int minTrainingHours = 200;

    @NotNull
    private RequiredDocuments requiredDocuments = new RequiredDocuments();

    @Getter
    @Setter
    public static class RequiredDocuments {
        private boolean manuscript = true;
        private boolean antiPlagiarismReport = true;
        private boolean publicationsReport = true;
        private boolean trainingCertificates = true;
        private boolean handwrittenRequest = true;
    }
}
