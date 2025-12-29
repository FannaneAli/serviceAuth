package com.devbuild.service.iservice;

import com.devbuild.dto.CreateSoutenanceRequest;
import com.devbuild.dto.JuryMemberRequest;
import com.devbuild.dto.SoutenanceResponse;
import com.devbuild.dto.UpdateSoutenanceStatusRequest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface SoutenanceService {

    SoutenanceResponse createSoutenance(CreateSoutenanceRequest request);

    SoutenanceResponse getById(UUID soutenanceId);

    List<SoutenanceResponse> getByDoctorant(UUID doctorantAccountId);

    SoutenanceResponse updateStatus(UUID soutenanceId, UpdateSoutenanceStatusRequest request);

    SoutenanceResponse schedule(UUID soutenanceId, String location, LocalDateTime when);

    SoutenanceResponse replaceJury(UUID soutenanceId, List<JuryMemberRequest> members);
}
