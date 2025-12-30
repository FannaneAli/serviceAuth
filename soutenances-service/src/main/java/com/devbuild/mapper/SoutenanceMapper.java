package com.devbuild.mapper;

import com.devbuild.dto.CreateSoutenanceRequest;
import com.devbuild.dto.SoutenanceResponse;
import com.devbuild.entity.Soutenance;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Mapper(config = MapStructConfig.class, uses = { JuryMemberMapper.class })
public interface SoutenanceMapper {

    @Mapping(target = "requestedDateTime", source = "desiredDateTime")
    @Mapping(target = "requestedLocation", source = "desiredLocation")
    @Mapping(target = "juryMembers", ignore = true)
    Soutenance toEntity(CreateSoutenanceRequest request);

    @Mapping(target = "jury", source = "juryMembers")
    @Mapping(target = "approachingSixYearLimit", source = "initialEnrollmentDate", qualifiedByName = "checkSixYearLimit")
    SoutenanceResponse toResponse(Soutenance entity);

    /**
     * Check if the doctorant is approaching the 6-year limit (within 6 months).
     */
    @Named("checkSixYearLimit")
    default boolean checkSixYearLimit(LocalDate initialEnrollmentDate) {
        if (initialEnrollmentDate == null) {
            return false;
        }
        LocalDate sixYearLimit = initialEnrollmentDate.plusYears(6);
        LocalDate today = LocalDate.now();
        long monthsRemaining = ChronoUnit.MONTHS.between(today, sixYearLimit);
        // Alert if less than 6 months remaining or already exceeded
        return monthsRemaining <= 6;
    }
}
