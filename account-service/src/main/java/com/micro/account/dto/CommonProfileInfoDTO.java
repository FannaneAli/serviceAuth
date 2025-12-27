package com.micro.account.dto;

import java.time.LocalDate;

public record CommonProfileInfoDTO(
        String firstName,
        String lastName,
        LocalDate birthDate,
        String address
) { }

