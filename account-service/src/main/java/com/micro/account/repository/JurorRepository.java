package com.micro.account.repository;

import com.micro.account.entity.Juror;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface JurorRepository extends JpaRepository<Juror, UUID> {
    boolean existsByEmailIgnoreCase(String email);
    Optional<Juror> findByEmailIgnoreCase(String email);
}
