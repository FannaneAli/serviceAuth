package com.micro.notification.dto;

public record FieldViolation(
        String field,
        Object rejectedValue,
        String message
) {}
