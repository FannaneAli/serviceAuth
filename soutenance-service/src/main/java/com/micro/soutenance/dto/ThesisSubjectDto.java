package com.micro.soutenance.dto;

import com.micro.soutenance.domain.ThesisStatus;

import java.util.UUID;

public record ThesisSubjectDto(
        UUID id,
        UUID doctorantId,
        UUID encadrantId,
        String title,
        String summary,
        ThesisStatus status
) {}
