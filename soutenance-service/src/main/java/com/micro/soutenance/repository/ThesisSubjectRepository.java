package com.micro.soutenance.repository;

import com.micro.soutenance.domain.ThesisSubject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ThesisSubjectRepository extends JpaRepository<ThesisSubject, UUID> {
    List<ThesisSubject> findAllByDoctorantId(UUID doctorantId);
    List<ThesisSubject> findAllByEncadrantId(UUID encadrantId);
}
