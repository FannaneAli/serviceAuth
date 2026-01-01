package com.micro.soutenance.dto;

import java.util.UUID;

public record ChecklistDto(
        UUID requestId,
        int publicationsCount,
        int credits,
        boolean documentsComplete,
        boolean antiPlagValidated
) {}
