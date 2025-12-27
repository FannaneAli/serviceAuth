package com.micro.account.controller;

import com.micro.account.dto.AccountResponse;
import com.micro.account.service.iservice.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/admin/accounts")
@RequiredArgsConstructor
public class AdminAccountsController {

    private final AccountService accountService;

    @GetMapping("/pending")
    @PreAuthorize("hasRole('SUPERUSER')")
    public ResponseEntity<List<AccountResponse>> listPending() {
        return ResponseEntity.ok(accountService.listPending());
    }

    @PostMapping("/{id}/approve")
    @PreAuthorize("hasRole('SUPERUSER')")
    public ResponseEntity<AccountResponse> approve(@PathVariable UUID id) {
        return ResponseEntity.ok(accountService.approve(id));
    }

    @PostMapping("/{id}/reject")
    @PreAuthorize("hasRole('SUPERUSER')")
    public ResponseEntity<AccountResponse> reject(@PathVariable UUID id) {
        return ResponseEntity.ok(accountService.reject(id));
    }
}
