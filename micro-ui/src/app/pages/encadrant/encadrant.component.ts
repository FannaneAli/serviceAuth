import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import {
  AccountResponse,
  CommonProfileInfoDTO,
  Department,
  EncadrantProfileResponse,
  Laboratory,
  UpdateEncadrantProfileRequest
} from '../../core/models';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  standalone: true,
  selector: 'app-encadrant',
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  template: `
    <div class="panel">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <div>
          <div class="section-title">{{ 'nav.encadrant' | t }}</div>
          <h2>{{ me?.username || 'Encadrant' }}</h2>
        </div>
        <div class="flex" style="gap:8px; align-items:center;">
          <button type="button" (click)="refreshAccess()" [disabled]="!hasRefresh">{{ 'dashboard.session.refresh' | t }}</button>
          <button type="button" (click)="logout()">{{ 'dashboard.session.logout' | t }}</button>
          <span *ngIf="sessionMessage" class="badge">{{sessionMessage}}</span>
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="me">
      <h3>{{ 'dashboard.account.title' | t }}</h3>
      <div class="stat-grid">
        <div class="stat">
          <div class="section-title">{{ 'dashboard.account.username' | t }}</div>
          <strong class="truncate">{{me.username}}</strong>
        </div>
        <div class="stat">
          <div class="section-title">{{ 'dashboard.account.email' | t }}</div>
          <strong class="truncate">{{me.email}}</strong>
        </div>
        <div class="stat">
          <div class="section-title">{{ 'dashboard.account.role' | t }}</div>
          <strong class="truncate">{{me.primaryRole}}</strong>
        </div>
        <div class="stat">
          <div class="section-title">{{ 'dashboard.account.status' | t }}</div>
          <strong class="truncate">{{me.status}}</strong>
        </div>
      </div>
      <p style="margin-top:8px;">
        <strong>{{ 'dashboard.account.profileCompleted' | t }}</strong>
        <span class="badge" [style.background]="me.profileCompleted ? '#14532d' : '#7f1d1d'" [style.color]="'#fef3c7'">
          {{ me.profileCompleted ? 'Oui' : 'Non' }}
        </span>
      </p>
    </div>

    <div class="panel" *ngIf="me">
      <h3>{{ 'dashboard.profile.encadrant.title' | t }}</h3>

      <div *ngIf="encadrantProfile && !editing" class="profile-block">
        <div class="stat-grid">
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.encadrant.firstName' | t }}</div><strong class="truncate">{{encadrantProfile.info?.firstName || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.encadrant.lastName' | t }}</div><strong class="truncate">{{encadrantProfile.info?.lastName || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.encadrant.birthDate' | t }}</div><strong class="truncate">{{encadrantProfile.info?.birthDate || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.encadrant.address' | t }}</div><strong class="truncate">{{encadrantProfile.info?.address || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.encadrant.grade' | t }}</div><strong class="truncate">{{encadrantProfile.grade || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.encadrant.department' | t }}</div><strong class="truncate">{{ departmentName(encadrantProfile.departmentId) }}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.encadrant.laboratory' | t }}</div><strong class="truncate">{{ laboratoryName(encadrantProfile.laboratoryId) }}</strong></div>
        </div>
        <div class="flex" style="gap:8px; margin-top:12px;">
          <button type="button" (click)="startEdit()">{{ 'dashboard.profile.encadrant.edit' | t }}</button>
          <span *ngIf="profileMessage" class="badge">{{profileMessage}}</span>
        </div>
      </div>

      <form *ngIf="!encadrantProfile || editing" [formGroup]="encForm" (ngSubmit)="saveEncadrant()">
        <div class="form-row">
          <div><label>{{ 'dashboard.profile.encadrant.firstName' | t }}</label><input formControlName="firstName" /></div>
          <div><label>{{ 'dashboard.profile.encadrant.lastName' | t }}</label><input formControlName="lastName" /></div>
        </div>
        <div class="form-row">
          <div><label>{{ 'dashboard.profile.encadrant.birthDate' | t }}</label><input type="date" formControlName="birthDate" /></div>
          <div><label>{{ 'dashboard.profile.encadrant.address' | t }}</label><input formControlName="address" /></div>
        </div>
        <label>{{ 'dashboard.profile.encadrant.grade' | t }}</label><input formControlName="grade" />
        <label>{{ 'dashboard.profile.encadrant.department' | t }}</label>
        <select formControlName="departmentId">
          <option value="">-- Choisir --</option>
          <option *ngFor="let dep of departments" [value]="dep.id">{{dep.name}}</option>
        </select>
        <label>{{ 'dashboard.profile.encadrant.laboratory' | t }}</label>
        <select formControlName="laboratoryId">
          <option value="">-- Choisir --</option>
          <option *ngFor="let lab of laboratories" [value]="lab.id">{{lab.name}}</option>
        </select>
        <div class="flex" style="margin-top:12px; gap:8px;">
          <button type="submit" [disabled]="encForm.invalid">{{ encadrantProfile ? ('dashboard.profile.encadrant.update' | t) : ('dashboard.profile.encadrant.save' | t) }}</button>
          <button type="button" *ngIf="encadrantProfile" (click)="cancelEdit()">{{ 'dashboard.profile.encadrant.cancel' | t }}</button>
          <span *ngIf="profileMessage && (!encadrantProfile || editing)" class="badge">{{profileMessage}}</span>
        </div>
      </form>
    </div>
  `
})
export class EncadrantComponent implements OnInit {
  me: AccountResponse | null = null;
  encadrantProfile: EncadrantProfileResponse | null = null;
  departments: Department[] = [];
  laboratories: Laboratory[] = [];
  editing = false;
  sessionMessage = '';
  profileMessage = '';

  encForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: [''],
    address: [''],
    grade: [''],
    departmentId: [''],
    laboratoryId: ['']
  });

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.loadStructures();
    this.loadMe();
  }

  get hasRefresh(): boolean {
    return !!localStorage.getItem('refresh');
  }

  loadMe() {
    this.api.me().subscribe({
      next: res => {
        this.me = res;
        localStorage.setItem('role', res.primaryRole);
        this.loadProfile();
      },
      error: () => {
        this.me = null;
        this.encadrantProfile = null;
        this.editing = false;
      }
    });
  }

  loadProfile() {
    if (!this.me) return;
    this.api.getEncadrantProfile(this.me.id).subscribe({
      next: profile => {
        this.encadrantProfile = profile;
        this.editing = false;
        this.patchEncadrantForm(profile);
      },
      error: () => {
        this.encadrantProfile = null;
        this.editing = false;
        this.resetEncadrantForm();
      }
    });
  }

  refreshAccess() {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) return;
    this.api.refresh(refresh).subscribe({
      next: res => {
        localStorage.setItem('access', res.accessToken);
        localStorage.setItem('refresh', res.refreshToken);
        this.sessionMessage = 'Token rafraichi';
      },
      error: err => {
        this.sessionMessage = err.error?.message || 'Refresh echoue';
      }
    });
  }

  logout() {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.api.logout(refresh).subscribe({
      next: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.sessionMessage = 'Deconnecte';
        this.router.navigateByUrl('/login');
      },
      error: err => {
        this.sessionMessage = err.error?.message || 'Logout echoue';
      }
    });
  }

  startEdit() {
    this.profileMessage = '';
    this.editing = true;
    if (this.encadrantProfile) {
      this.patchEncadrantForm(this.encadrantProfile);
    }
  }

  cancelEdit() {
    this.editing = false;
    this.profileMessage = '';
    if (this.encadrantProfile) {
      this.patchEncadrantForm(this.encadrantProfile);
    } else {
      this.resetEncadrantForm();
    }
  }

  saveEncadrant() {
    if (!this.me) return;
    const info = this.buildInfoFromForm(this.encForm.value);
    const payload: UpdateEncadrantProfileRequest = {
      info,
      grade: this.encForm.value.grade || undefined,
      departmentId: this.normalizeUuid(this.encForm.value.departmentId),
      laboratoryId: this.normalizeUuid(this.encForm.value.laboratoryId)
    };

    const request$ = this.encadrantProfile
      ? this.api.updateEncadrant(this.me.id, payload)
      : this.api.createEncadrant({ ...payload, accountId: this.me.id });

    request$.subscribe({
      next: res => {
        this.profileMessage = this.encadrantProfile ? 'Profil encadrant mis a jour' : 'Profil encadrant cree';
        this.encadrantProfile = res;
        this.editing = false;
        if (this.me) this.me.profileCompleted = true;
        this.patchEncadrantForm(res);
      },
      error: err => {
        this.profileMessage = err.error?.message || 'Erreur profil encadrant';
      }
    });
  }

  private patchEncadrantForm(profile: EncadrantProfileResponse) {
    this.encForm.patchValue({
      firstName: profile.info?.firstName || '',
      lastName: profile.info?.lastName || '',
      birthDate: profile.info?.birthDate || '',
      address: profile.info?.address || '',
      grade: profile.grade || '',
      departmentId: profile.departmentId || '',
      laboratoryId: profile.laboratoryId || ''
    });
  }

  private resetEncadrantForm() {
    this.encForm.reset({
      firstName: '',
      lastName: '',
      birthDate: '',
      address: '',
      grade: '',
      departmentId: '',
      laboratoryId: ''
    });
  }

  private buildInfoFromForm(value: any): CommonProfileInfoDTO {
    const normalizedBirthDate = this.normalizeDate(value.birthDate);
    return {
      firstName: value.firstName || undefined,
      lastName: value.lastName || undefined,
      birthDate: normalizedBirthDate,
      address: value.address || undefined
    };
  }

  private normalizeDate(raw: string | null | undefined): string | undefined {
    if (!raw) return undefined;

    const slashMatch = /^(\d{2})[\\/](\d{2})[\\/](\d{4})$/.exec(raw);
    if (slashMatch) {
      const [, dd, mm, yyyy] = slashMatch;
      return `${yyyy}-${mm}-${dd}`;
    }

    const date = new Date(raw);
    if (isNaN(date.getTime())) return undefined;
    return date.toISOString().slice(0, 10);
  }

  private normalizeUuid(value: string | null | undefined): string | undefined {
    if (!value) return undefined;
    const trimmed = value.trim();
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(trimmed) ? trimmed : undefined;
  }

  departmentName(id?: string | null): string {
    if (!id) return 'N/A';
    return this.departments.find(d => d.id === id)?.name || id;
  }

  laboratoryName(id?: string | null): string {
    if (!id) return 'N/A';
    return this.laboratories.find(l => l.id === id)?.name || id;
  }

  private loadStructures() {
    this.api.listDepartments().subscribe({ next: d => this.departments = d });
    this.api.listLaboratories().subscribe({ next: l => this.laboratories = l });
  }
}
