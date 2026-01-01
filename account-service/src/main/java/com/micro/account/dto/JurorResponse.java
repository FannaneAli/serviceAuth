package com.micro.account.dto;

import java.util.UUID;

public record JurorResponse(
        UUID id,
        String name,
        String email,
        String university,
        String note
) {
}
