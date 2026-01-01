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

export interface Juror {
  id: string;
  name: string;
  email: string;
  university?: string;
  note?: string;
}

// ============== Soutenance Models ==============

export type SoutenanceStatus = 
  | 'DRAFT'
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'REJECTED'
  | 'DIRECTOR_APPROVED'
  | 'DIRECTOR_REJECTED'
  | 'SCHEDULED'
  | 'RAPPORTEUR_REPORT_SUBMITTED'
  | 'AUTHORIZED'
  | 'DEFENDED'
  | 'COMPLETED'
  | 'CLOSED'
  | 'CANCELLED';

export type SoutenanceResult = 
  | 'TRES_HONORABLE_AVEC_FELICITATIONS'
  | 'TRES_HONORABLE'
  | 'HONORABLE'
  | 'AJOURNE';

export type JuryRole = 
  | 'PRESIDENT'
  | 'RAPPORTEUR'
  | 'EXAMINATEUR'
  | 'DIRECTEUR'
  | 'CO_DIRECTEUR'
  | 'INVITE';

export interface JuryMember {
  id?: string;
  name?: string;
  fullName?: string;
  email?: string;
  university?: string;
  institution?: string;
  role: JuryRole;
  external?: boolean;
}

export interface JuryMemberResponse {
  id: string;
  name: string;
  email: string;
  university: string;
  role: JuryRole;
}

export interface SoutenanceResponse {
  id: string;
  doctorantAccountId?: string;
  doctorantId?: string;
  doctorantEmail?: string;
  doctorantName?: string;
  thesisTitle: string;
  thesisSummary?: string;
  thesisAbstract?: string;
  status: SoutenanceStatus;
  result?: SoutenanceResult;
  requestedDateTime?: string;
  scheduledDateTime?: string;
  scheduledDate?: string;
  location?: string;
  desiredLocation?: string;
  requestedLocation?: string;
  publicationsQ1Q2Count?: number;
  juryMembers?: JuryMemberResponse[];
  jury?: JuryMember[];
  directorComments?: string;
  rapporteurReport?: string;
  createdAt?: string;
  updatedAt?: string;
  // Prerequisites
  prerequisitesValid?: boolean;
  publicationsCount?: number;
  conferencesCount?: number;
  trainingHours?: number;
  // Director approval
  directorApproved?: boolean;
  directorApprovalDate?: string;
  // Rapporteur
  allRapporteursFavorable?: boolean;
  rapporteur1Favorable?: boolean;
  rapporteur2Favorable?: boolean;
  // Jury validation
  juryValidated?: boolean;
  // Authorization
  authorized?: boolean;
  // 6-year limit
  approachingSixYearLimit?: boolean;
  initialEnrollmentDate?: string;
  derogationApproved?: boolean;
  // Document URLs
  manuscriptUrl?: string;
  antiPlagiarismReportUrl?: string;
  publicationsReportUrl?: string;
  trainingCertificatesUrl?: string;
  handwrittenRequestUrl?: string;
  attestationUrl?: string;
  authorizationDocumentUrl?: string;
  procesVerbalUrl?: string;
}

export interface CreateSoutenanceRequest {
  thesisTitle: string;
  thesisSummary?: string;
  thesisAbstract?: string;
  publicationsCount?: number;
  conferencesCount?: number;
  trainingHours?: number;
  manuscriptUrl?: string;
  antiPlagiarismReportUrl?: string;
  publicationsReportUrl?: string;
  trainingCertificatesUrl?: string;
  handwrittenRequestUrl?: string;
  desiredDateTime?: string;
  desiredLocation?: string;
  initialEnrollmentDate?: string;
  derogationApproved?: boolean;
}

export interface UpdateSoutenanceStatusRequest {
  status?: SoutenanceStatus;
  newStatus?: SoutenanceStatus;
  comments?: string;
}

export interface DirectorApprovalRequest {
  approved: boolean;
  comments?: string;
}

export interface ScheduleSoutenanceRequest {
  scheduledDate?: string;
  when?: string;
  location: string;
}

export interface JuryMemberRequest {
  name: string;
  email: string;
  university: string;
  role: JuryRole;
}

export interface UpdateJuryRequest {
  juryMembers?: JuryMemberRequest[];
  members?: JuryMember[];
}

export interface RapporteurReportRequest {
  report?: string;
  reportUrl?: string;
  recommendation?: 'FAVORABLE' | 'DEFAVORABLE' | 'RESERVE';
  rapporteurNumber?: 1 | 2;
  favorable?: boolean;
  comments?: string;
}

export interface SetResultRequest {
  result: SoutenanceResult;
  comments?: string;
}

// ============== Notification Models ==============

export type NotificationStatus = 'UNREAD' | 'READ' | 'ARCHIVED';
export type NotificationType = 
  | 'SOUTENANCE_SUBMITTED'
  | 'SOUTENANCE_APPROVED'
  | 'SOUTENANCE_REJECTED'
  | 'SOUTENANCE_SCHEDULED'
  | 'RAPPORTEUR_ASSIGNED'
  | 'REPORT_SUBMITTED'
  | 'SOUTENANCE_AUTHORIZED'
  | 'SOUTENANCE_COMPLETED'
  | 'GENERAL';

export interface NotificationResponse {
  id: string;
  recipientId: string;
  recipientAccountId?: string;
  type: NotificationType;
  title?: string;
  subject?: string;
  message?: string;
  content?: string;
  status: NotificationStatus;
  metadata?: Record<string, any>;
  createdAt: string;
  readAt?: string;
}
