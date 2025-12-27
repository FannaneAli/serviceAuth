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

export interface RegisterResponse {
  accountId: string;
  username: string;
  email: string;
  status: string;
  primaryRole: string;
  profileCompleted: boolean;
}

export interface AccountResponse {
  id: string;
  username: string;
  email: string;
  phone?: string;
  status: string;
  primaryRole: string;
  profileCompleted: boolean;
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

export interface CreateEncadrantProfileRequest {
  accountId: string;
  info: CommonProfileInfoDTO;
  grade?: string;
  departmentId?: string;
  laboratoryId?: string;
}
