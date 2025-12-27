import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountResponse, CreateDoctorantProfileRequest, CreateEncadrantProfileRequest, LoginRequest, RegisterRequest, RegisterResponse, TokenResponse } from './models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  login(body: LoginRequest) {
    return this.http.post<TokenResponse>(`${this.base}/auth/login`, body);
  }

  register(body: RegisterRequest) {
    return this.http.post<RegisterResponse>(`${this.base}/accounts`, body);
  }

  me() {
    return this.http.get<AccountResponse>(`${this.base}/accounts/me`);
  }

  refresh(refreshToken: string) {
    return this.http.post<TokenResponse>(`${this.base}/auth/refresh`, { refreshToken });
  }

  logout(refreshToken: string) {
    return this.http.post<void>(`${this.base}/auth/logout`, { refreshToken });
  }

  createDoctorant(body: CreateDoctorantProfileRequest) {
    return this.http.post(`${this.base}/profiles/doctorant`, body);
  }

  createEncadrant(body: CreateEncadrantProfileRequest) {
    return this.http.post(`${this.base}/profiles/encadrant`, body);
  }

  // --- Admin (SUPERUSER) ---
  listPendingAccounts() {
    return this.http.get<AccountResponse[]>(`${this.base}/admin/accounts/pending`);
  }

  approveAccount(id: string) {
    return this.http.post<AccountResponse>(`${this.base}/admin/accounts/${id}/approve`, {});
  }

  rejectAccount(id: string) {
    return this.http.post<AccountResponse>(`${this.base}/admin/accounts/${id}/reject`, {});
  }
}
