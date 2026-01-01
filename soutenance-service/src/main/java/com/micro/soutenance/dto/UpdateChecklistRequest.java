package com.micro.soutenance.dto;

public record UpdateChecklistRequest(
        Integer publicationsCount,
        Integer credits,
        Boolean documentsComplete,
        Boolean antiPlagValidated
) {}
