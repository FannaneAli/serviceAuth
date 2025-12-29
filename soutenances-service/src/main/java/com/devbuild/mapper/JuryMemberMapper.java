package com.devbuild.mapper;

import com.devbuild.dto.JuryMemberRequest;
import com.devbuild.dto.JuryMemberResponse;
import com.devbuild.entity.JuryMember;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapStructConfig.class)
public interface JuryMemberMapper {

    @Mapping(target = "soutenance", ignore = true)
    JuryMember toEntity(JuryMemberRequest request);

    JuryMemberResponse toResponse(JuryMember entity);
}
