package com.micro.account.mapper;

import com.micro.account.embedded.CommonProfileInfo;
import com.micro.account.dto.CommonProfileInfoDTO;
import org.mapstruct.Mapper;

@Mapper(config = MapStructConfig.class)
public interface CommonProfileInfoMapper {

    CommonProfileInfo toEmbedded(CommonProfileInfoDTO dto);

    CommonProfileInfoDTO toDto(CommonProfileInfo embedded);
}

