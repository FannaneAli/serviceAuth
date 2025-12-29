package com.devbuild.mapper;

import com.devbuild.dto.CreateSoutenanceRequest;
import com.devbuild.dto.SoutenanceResponse;
import com.devbuild.entity.Soutenance;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapStructConfig.class, uses = { JuryMemberMapper.class })
public interface SoutenanceMapper {

    @Mapping(target = "requestedDateTime", source = "desiredDateTime")
    @Mapping(target = "requestedLocation", source = "desiredLocation")
    @Mapping(target = "juryMembers", ignore = true)
    Soutenance toEntity(CreateSoutenanceRequest request);

    @Mapping(target = "jury", source = "juryMembers")
    SoutenanceResponse toResponse(Soutenance entity);
}
