export type Role = 'SUPERUSER' | 'ADMIN' | 'DIRECTEUR' | 'DOCTORANT';

export interface TokenResponse {
  tokenType: string;
  accessToken: string;
  accessExpiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
}

export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone?: string;
  primaryRole: Role;
}

export interface CreateAdminRequest {
  username: string;
  email: string;
  password: string;
  phone?: string;
}

export interface RegisterResponse {
  accountId: string;
  username: string;
  email: string;
  status: string;
  primaryRole: string;
  profileCompleted: boolean;
  emailVerified: boolean;
}

export interface AccountResponse {
  id: string;
  username: string;
  email: string;
  phone?: string;
  status: string;
  primaryRole: string;
  profileCompleted: boolean;
  emailVerified: boolean;
}

export interface CommonProfileInfoDTO {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  address?: string;
}

export interface CreateDoctorantProfileRequest {
  accountId: string;
  info: CommonProfileInfoDTO;
  diploma?: string;
  graduationYear?: number;
  university?: string;
}

export interface UpdateDoctorantProfileRequest {
  info: CommonProfileInfoDTO;
  diploma?: string;
  graduationYear?: number;
  university?: string;
}

export interface DoctorantProfileResponse {
  id: string;
  accountId: string;
  info: CommonProfileInfoDTO;
  diploma?: string;
  graduationYear?: number;
  university?: string;
}

export interface CreateEncadrantProfileRequest {
  accountId: string;
  info: CommonProfileInfoDTO;
  grade?: string;
  departmentId?: string;
  laboratoryId?: string;
}

export interface UpdateEncadrantProfileRequest {
  info: CommonProfileInfoDTO;
  grade?: string;
  departmentId?: string;
  laboratoryId?: string;
}

export interface EncadrantProfileResponse {
  id: string;
  accountId: string;
  info: CommonProfileInfoDTO;
  grade?: string;
  departmentId?: string;
  laboratoryId?: string;
}

export interface Department {
  id: string;
  name: string;
  description?: string;
}

export interface Laboratory {
  id: string;
  name: string;
  description?: string;
}

// Soutenances
export type SoutenanceStatus =
  | 'DRAFT'
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'REJECTED'
  | 'APPROVED'
  | 'SCHEDULED'
  | 'DEFENDED'
  | 'CLOSED';

export type SoutenanceResult =
  | 'TRES_HONORABLE_AVEC_FELICITATIONS'
  | 'TRES_HONORABLE'
  | 'HONORABLE'
  | 'AJOURNE';

export type JuryRole = 'PRESIDENT' | 'RAPPORTEUR' | 'EXAMINATEUR' | 'INVITE';

export interface JuryMember {
  id?: string;
  fullName: string;
  email?: string;
  institution?: string;
  role: JuryRole;
  external?: boolean;
}

export interface CreateSoutenanceRequest {
  doctorantAccountId: string;
  doctorantEmail: string;
  thesisTitle: string;
  thesisSummary?: string;
  handwrittenRequestUrl: string;
  manuscriptUrl?: string;
  antiPlagiarismReportUrl?: string;
  publicationsReportUrl?: string;
  trainingCertificatesUrl?: string;
  publicationsCount?: number;
  publicationsQ1Q2Count?: number;
  conferencesCount?: number;
  trainingHours?: number;
  initialEnrollmentDate?: string;
  derogationApproved?: boolean;
  desiredDateTime?: string;
  desiredLocation?: string;
  jury?: JuryMember[];
}

export interface SoutenanceResponse {
  id: string;
  doctorantAccountId: string;
  doctorantEmail?: string;
  thesisTitle: string;
  thesisSummary?: string;
  handwrittenRequestUrl: string;
  manuscriptUrl?: string;
  antiPlagiarismReportUrl?: string;
  publicationsReportUrl?: string;
  trainingCertificatesUrl?: string;
  publicationsCount?: number;
  publicationsQ1Q2Count?: number;
  conferencesCount?: number;
  trainingHours?: number;
  initialEnrollmentDate?: string;
  derogationApproved?: boolean;
  prerequisitesValid: boolean;
  status: SoutenanceStatus;
  requestedDateTime?: string;
  requestedLocation?: string;
  scheduledDateTime?: string;
  location?: string;
  authorized?: boolean;
  authorizationDocumentUrl?: string;
  attestationUrl?: string;
  procesVerbalUrl?: string;
  juryValidated?: boolean;
  jury: JuryMember[];
  // Director approval
  directorApproved?: boolean;
  directorApprovalDate?: string;
  directorComments?: string;
  // Rapporteur reports
  rapporteur1ReportUrl?: string;
  rapporteur1Favorable?: boolean;
  rapporteur1ReportDate?: string;
  rapporteur1Comments?: string;
  rapporteur2ReportUrl?: string;
  rapporteur2Favorable?: boolean;
  rapporteur2ReportDate?: string;
  rapporteur2Comments?: string;
  allRapporteursFavorable?: boolean;
  // Result
  result?: SoutenanceResult;
  resultDate?: string;
  resultComments?: string;
  // Duration alert
  durationAlertSent?: boolean;
  approachingSixYearLimit?: boolean;
}

export interface UpdateSoutenanceStatusRequest {
  newStatus: SoutenanceStatus;
}

export interface ScheduleSoutenanceRequest {
  location: string;
  when: string;
}

export interface UpdateJuryRequest {
  members: JuryMember[];
}

export interface DirectorApprovalRequest {
  approved: boolean;
  comments?: string;
}

export interface RapporteurReportRequest {
  rapporteurNumber: 1 | 2;
  reportUrl: string;
  favorable: boolean;
  comments?: string;
}

export interface SetResultRequest {
  result: SoutenanceResult;
  comments?: string;
}

// Notifications
export type NotificationChannel = 'EMAIL' | 'PUSH' | 'SMS';
export type NotificationType =
  | 'GENERIC'
  | 'ACCOUNT_REGISTRATION'
  | 'EMAIL_VERIFICATION'
  | 'PASSWORD_RESET'
  | 'SOUTENANCE_EVENT'
  | 'SOUTENANCE_SUBMITTED'
  | 'SOUTENANCE_UNDER_REVIEW'
  | 'SOUTENANCE_APPROVED'
  | 'SOUTENANCE_REJECTED'
  | 'SOUTENANCE_AUTHORIZED'
  | 'SOUTENANCE_SCHEDULED'
  | 'SOUTENANCE_JURY_VALIDATED'
  | 'SOUTENANCE_DEFENDED'
  | 'SOUTENANCE_DIRECTOR_APPROVED'
  | 'SOUTENANCE_DIRECTOR_REJECTED'
  | 'SOUTENANCE_RAPPORTEUR_REPORT_SUBMITTED'
  | 'SOUTENANCE_RESULT_SET'
  | 'DURATION_LIMIT_APPROACHING';

export type NotificationStatus = 'PENDING' | 'SENT' | 'FAILED' | 'READ';

export interface NotificationResponse {
  id: string;
  accountId: string;
  channel: NotificationChannel;
  type: NotificationType;
  recipient?: string;
  subject?: string;
  content?: string;
  status: NotificationStatus;
  metadata?: Record<string, any>;
  sentAt?: string;
  createdAt?: string;
}

// PDF Documents
export interface DocumentInfo {
  type: 'attestation' | 'autorisation' | 'proces-verbal' | 'proces-verbal-complet';
  url: string;
  title: string;
  icon: string;
}
