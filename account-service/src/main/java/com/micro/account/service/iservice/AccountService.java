package com.micro.account.service.iservice;

import com.micro.account.dto.AccountResponse;
import com.micro.account.dto.RegisterRequest;
import com.micro.account.dto.RegisterResponse;

import java.util.UUID;
import java.util.List;

public interface AccountService {
    RegisterResponse register(RegisterRequest request);
    AccountResponse getById(UUID id);
    List<AccountResponse> listPending();
    AccountResponse approve(UUID id);
    AccountResponse reject(UUID id);
}

