package com.micro.account.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateJurorRequest(
        @NotBlank @Size(max = 120) String name,
        @NotBlank @Email @Size(max = 180) String email,
        @Size(max = 160) String university,
        @Size(max = 255) String note
) {
}
