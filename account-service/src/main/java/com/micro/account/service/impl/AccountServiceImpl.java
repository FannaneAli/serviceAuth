package com.micro.account.service.impl;

import com.micro.account.dto.AccountResponse;
import com.micro.account.dto.RegisterRequest;
import com.micro.account.dto.RegisterResponse;
import com.micro.account.entity.Account;
import com.micro.account.enums.AccountStatus;
import com.micro.account.enums.Role;
import com.micro.account.mapper.AccountMapper;
import com.micro.account.repository.AccountRepository;
import com.micro.account.service.iservice.AccountService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public RegisterResponse register(RegisterRequest request) {
        if (request.primaryRole() == null) {
            throw new IllegalArgumentException("primaryRole obligatoire.");
        }

        // Un seul SUPERUSER possible
        if (request.primaryRole() == Role.SUPERUSER
                && accountRepository.countByPrimaryRole(Role.SUPERUSER) > 0) {
            throw new IllegalStateException("Un SUPERUSER existe deja.");
        }

        // Seul le SUPERUSER peut creer un ADMIN
        if (request.primaryRole() == Role.ADMIN && !currentUserIsSuperuser()) {
            throw new AccessDeniedException("Seul le SUPERUSER peut creer un compte ADMIN.");
        }

        if (accountRepository.existsByEmailIgnoreCase(request.email())) {
            throw new IllegalStateException("Email deja utilise.");
        }
        if (accountRepository.existsByUsernameIgnoreCase(request.username())) {
            throw new IllegalStateException("Username deja utilise.");
        }

        Account entity = accountMapper.toEntity(request);
        entity.setPasswordHash(passwordEncoder.encode(request.password()));
        if (request.primaryRole() == Role.SUPERUSER) {
            entity.setStatus(AccountStatus.ACTIVE);
        } else {
            entity.setStatus(AccountStatus.PENDING);
        }

        Account saved = accountRepository.save(entity);

        return new RegisterResponse(
                saved.getId(),
                saved.getUsername(),
                saved.getEmail(),
                saved.getStatus().name(),
                saved.getPrimaryRole().name(),
                saved.isProfileCompleted()
        );
    }

    @Override
    public List<AccountResponse> listPending() {
        return accountRepository.findAllByStatus(AccountStatus.PENDING)
                .stream()
                .map(accountMapper::toDto)
                .toList();
    }

    @Override
    @Transactional
    public AccountResponse approve(UUID id) {
        Account acc = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Compte introuvable."));
        acc.setStatus(AccountStatus.ACTIVE);
        accountRepository.save(acc);
        return accountMapper.toDto(acc);
    }

    @Override
    @Transactional
    public AccountResponse reject(UUID id) {
        Account acc = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Compte introuvable."));
        acc.setStatus(AccountStatus.REJECTED);
        accountRepository.save(acc);
        return accountMapper.toDto(acc);
    }

    private boolean currentUserIsSuperuser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) return false;
        for (GrantedAuthority ga : auth.getAuthorities()) {
            if ("ROLE_SUPERUSER".equalsIgnoreCase(ga.getAuthority())) {
                return true;
            }
        }
        return false;
    }

    @Override
    public AccountResponse getById(UUID id) {
        Account acc = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Compte introuvable."));
        return accountMapper.toDto(acc);
    }
}

