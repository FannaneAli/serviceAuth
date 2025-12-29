package com.devbuild.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record UpdateJuryRequest(
        @NotEmpty List<@Valid JuryMemberRequest> members
) {}
