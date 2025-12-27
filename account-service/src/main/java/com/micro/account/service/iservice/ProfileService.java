package com.micro.account.service.iservice;

import com.micro.account.dto.CreateDoctorantProfileRequest;
import com.micro.account.dto.CreateEncadrantProfileRequest;
import com.micro.account.dto.DoctorantProfileResponse;
import com.micro.account.dto.EncadrantProfileResponse;

import java.util.UUID;

public interface ProfileService {
    DoctorantProfileResponse createDoctorantProfile(CreateDoctorantProfileRequest request);
    EncadrantProfileResponse createEncadrantProfile(CreateEncadrantProfileRequest request);
    DoctorantProfileResponse getDoctorantProfile(UUID accountId);
    EncadrantProfileResponse getEncadrantProfile(UUID accountId);
}

