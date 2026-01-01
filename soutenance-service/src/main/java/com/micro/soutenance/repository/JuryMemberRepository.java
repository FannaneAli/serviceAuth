package com.micro.soutenance.repository;

import com.micro.soutenance.domain.JuryMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface JuryMemberRepository extends JpaRepository<JuryMember, UUID> {
    List<JuryMember> findAllByRequestId(UUID requestId);
}
