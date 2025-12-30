import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  AccountResponse,
  CreateDoctorantProfileRequest,
  CreateEncadrantProfileRequest,
  DoctorantProfileResponse,
  EncadrantProfileResponse,
  LoginRequest,
  RegisterRequest,
  RegisterResponse,
  TokenResponse,
  UpdateDoctorantProfileRequest,
  UpdateEncadrantProfileRequest,
  CreateAdminRequest,
  Department,
  Laboratory
} from './models';
import {
  CreateSoutenanceRequest,
  DirectorApprovalRequest,
  RapporteurReportRequest,
  ScheduleSoutenanceRequest,
  SetResultRequest,
  SoutenanceResponse,
  UpdateJuryRequest,
  UpdateSoutenanceStatusRequest,
  NotificationResponse
} from './models';

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
    return this.http.post<DoctorantProfileResponse>(`${this.base}/profiles/doctorant`, body);
  }

  createEncadrant(body: CreateEncadrantProfileRequest) {
    return this.http.post<EncadrantProfileResponse>(`${this.base}/profiles/encadrant`, body);
  }

  getDoctorantProfile(accountId: string) {
    return this.http.get<DoctorantProfileResponse>(`${this.base}/profiles/doctorant/${accountId}`);
  }

  getEncadrantProfile(accountId: string) {
    return this.http.get<EncadrantProfileResponse>(`${this.base}/profiles/encadrant/${accountId}`);
  }

  updateDoctorant(accountId: string, body: UpdateDoctorantProfileRequest) {
    return this.http.put<DoctorantProfileResponse>(`${this.base}/profiles/doctorant/${accountId}`, body);
  }

  updateEncadrant(accountId: string, body: UpdateEncadrantProfileRequest) {
    return this.http.put<EncadrantProfileResponse>(`${this.base}/profiles/encadrant/${accountId}`, body);
  }

  // --- Admin (SUPERUSER) ---
  listPendingAccounts() {
    return this.http.get<AccountResponse[]>(`${this.base}/admin/accounts/pending`);
  }

  listAllAccounts() {
    return this.http.get<AccountResponse[]>(`${this.base}/admin/accounts`);
  }

  listAdmins() {
    return this.http.get<AccountResponse[]>(`${this.base}/admin/accounts/admins`);
  }

  listDepartments() {
    return this.http.get<Department[]>(`${this.base}/departments`);
  }

  listLaboratories() {
    return this.http.get<Laboratory[]>(`${this.base}/laboratories`);
  }

  createDepartment(body: { name: string; description?: string }) {
    return this.http.post<Department>(`${this.base}/admin/departments`, body);
  }

  updateDepartment(id: string, body: { name: string; description?: string }) {
    return this.http.put<Department>(`${this.base}/admin/departments/${id}`, body);
  }

  deleteDepartment(id: string) {
    return this.http.delete<void>(`${this.base}/admin/departments/${id}`);
  }

  createLaboratory(body: { name: string; description?: string }) {
    return this.http.post<Laboratory>(`${this.base}/admin/laboratories`, body);
  }

  updateLaboratory(id: string, body: { name: string; description?: string }) {
    return this.http.put<Laboratory>(`${this.base}/admin/laboratories/${id}`, body);
  }

  deleteLaboratory(id: string) {
    return this.http.delete<void>(`${this.base}/admin/laboratories/${id}`);
  }

  createAdmin(body: CreateAdminRequest) {
    return this.http.post<AccountResponse>(`${this.base}/admin/accounts/admins`, body);
  }

  activateAdmin(id: string) {
    return this.http.post<AccountResponse>(`${this.base}/admin/accounts/${id}/activate`, {});
  }

  suspendAdmin(id: string) {
    return this.http.post<AccountResponse>(`${this.base}/admin/accounts/${id}/suspend`, {});
  }

  approveAccount(id: string) {
    return this.http.post<AccountResponse>(`${this.base}/admin/accounts/${id}/approve`, {});
  }

  rejectAccount(id: string) {
    return this.http.post<AccountResponse>(`${this.base}/admin/accounts/${id}/reject`, {});
  }

  // --- Soutenances ---
  createSoutenance(body: CreateSoutenanceRequest) {
    return this.http.post<SoutenanceResponse>(`${this.base}/api/soutenances`, body);
  }

  listSoutenancesForDoctorant(doctorantAccountId: string) {
    return this.http.get<SoutenanceResponse[]>(`${this.base}/api/soutenances/by-doctorant/${doctorantAccountId}`);
  }

  getSoutenance(id: string) {
    return this.http.get<SoutenanceResponse>(`${this.base}/api/soutenances/${id}`);
  }

  updateSoutenanceStatus(id: string, body: UpdateSoutenanceStatusRequest) {
    return this.http.patch<SoutenanceResponse>(`${this.base}/api/soutenances/${id}/status`, body);
  }

  authorizeSoutenance(id: string, authorizationDocumentUrl?: string) {
    return this.http.post<SoutenanceResponse>(`${this.base}/api/soutenances/${id}/authorize`, {
      authorizationDocumentUrl
    });
  }

  listSoutenancesByStatus(status: string) {
    return this.http.get<SoutenanceResponse[]>(`${this.base}/api/soutenances/status/${status}`);
    }

  scheduleSoutenance(id: string, body: ScheduleSoutenanceRequest) {
    return this.http.patch<SoutenanceResponse>(`${this.base}/api/soutenances/${id}/schedule`, body);
  }

  replaceJury(id: string, body: UpdateJuryRequest) {
    return this.http.put<SoutenanceResponse>(`${this.base}/api/soutenances/${id}/jury`, body);
  }

  validateJury(id: string) {
    return this.http.post<SoutenanceResponse>(`${this.base}/api/soutenances/${id}/jury/validate`, {});
  }

  // Director approval
  approveByDirector(id: string, body: DirectorApprovalRequest) {
    return this.http.post<SoutenanceResponse>(`${this.base}/api/soutenances/${id}/director-approval`, body);
  }

  // Rapporteur report
  submitRapporteurReport(id: string, body: RapporteurReportRequest) {
    return this.http.post<SoutenanceResponse>(`${this.base}/api/soutenances/${id}/rapporteur-report`, body);
  }

  // Set result
  setResult(id: string, body: SetResultRequest) {
    return this.http.post<SoutenanceResponse>(`${this.base}/api/soutenances/${id}/result`, body);
  }

  // Get soutenances approaching 6-year limit
  getApproachingSixYearLimit() {
    return this.http.get<SoutenanceResponse[]>(`${this.base}/api/soutenances/alerts/six-year-limit`);
  }

  // Manually trigger duration alerts
  sendDurationAlerts() {
    return this.http.post<void>(`${this.base}/api/soutenances/alerts/send-duration-alerts`, {});
  }

  // --- PDF Document Generation ---
  generateAttestation(soutenanceId: string) {
    return this.http.get(`${this.base}/api/soutenances/${soutenanceId}/documents/attestation`, {
      responseType: 'blob'
    });
  }

  generateAutorisation(soutenanceId: string) {
    return this.http.get(`${this.base}/api/soutenances/${soutenanceId}/documents/autorisation`, {
      responseType: 'blob'
    });
  }

  generateProcesVerbal(soutenanceId: string) {
    return this.http.get(`${this.base}/api/soutenances/${soutenanceId}/documents/proces-verbal`, {
      responseType: 'blob'
    });
  }

  generateProcesVerbalComplet(soutenanceId: string) {
    return this.http.get(`${this.base}/api/soutenances/${soutenanceId}/documents/proces-verbal-complet`, {
      responseType: 'blob'
    });
  }

  // --- Notifications ---
  getNotificationsForAccount(accountId: string) {
    return this.http.get<NotificationResponse[]>(`${this.base}/api/notifications/by-account/${accountId}`);
  }

  getMyNotifications() {
    return this.http.get<NotificationResponse[]>(`${this.base}/api/notifications/me`);
  }

  markNotificationAsRead(notificationId: string) {
    return this.http.patch<NotificationResponse>(`${this.base}/api/notifications/${notificationId}/read`, {});
  }

  markAllNotificationsAsRead(accountId: string) {
    return this.http.patch<void>(`${this.base}/api/notifications/by-account/${accountId}/read-all`, {});
  }
}
