import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { AccountResponse, CommonProfileInfoDTO, DoctorantProfileResponse, UpdateDoctorantProfileRequest } from '../../core/models';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  standalone: true,
  selector: 'app-doctorant',
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  template: `
    <div class="panel">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <div>
          <div class="section-title">{{ 'nav.doctorant' | t }}</div>
          <h2>{{ me?.username || 'Doctorant' }}</h2>
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
      <h3>{{ 'dashboard.profile.doctorant.title' | t }}</h3>

      <div *ngIf="doctorantProfile && !editing" class="profile-block">
        <div class="stat-grid">
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.doctorant.firstName' | t }}</div><strong class="truncate">{{doctorantProfile.info?.firstName || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.doctorant.lastName' | t }}</div><strong class="truncate">{{doctorantProfile.info?.lastName || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.doctorant.birthDate' | t }}</div><strong class="truncate">{{doctorantProfile.info?.birthDate || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.doctorant.address' | t }}</div><strong class="truncate">{{doctorantProfile.info?.address || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.doctorant.diploma' | t }}</div><strong class="truncate">{{doctorantProfile.diploma || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.doctorant.graduationYear' | t }}</div><strong class="truncate">{{doctorantProfile.graduationYear || 'N/A'}}</strong></div>
          <div class="stat"><div class="section-title">{{ 'dashboard.profile.doctorant.university' | t }}</div><strong class="truncate">{{doctorantProfile.university || 'N/A'}}</strong></div>
        </div>
        <div class="flex" style="gap:8px; margin-top:12px;">
          <button type="button" (click)="startEdit()">{{ 'dashboard.profile.doctorant.edit' | t }}</button>
          <span *ngIf="profileMessage" class="badge">{{profileMessage}}</span>
        </div>
      </div>

      <form *ngIf="!doctorantProfile || editing" [formGroup]="docForm" (ngSubmit)="saveDoctorant()">
        <div class="form-row">
          <div><label>{{ 'dashboard.profile.doctorant.firstName' | t }}</label><input formControlName="firstName" /></div>
          <div><label>{{ 'dashboard.profile.doctorant.lastName' | t }}</label><input formControlName="lastName" /></div>
        </div>
        <div class="form-row">
          <div><label>{{ 'dashboard.profile.doctorant.birthDate' | t }}</label><input type="date" formControlName="birthDate" /></div>
          <div><label>{{ 'dashboard.profile.doctorant.address' | t }}</label><input formControlName="address" /></div>
        </div>
        <div class="form-row">
          <div><label>{{ 'dashboard.profile.doctorant.graduationYear' | t }}</label><input type="number" formControlName="graduationYear" /></div>
          <div><label>{{ 'dashboard.profile.doctorant.diploma' | t }}</label><input formControlName="diploma" /></div>
        </div>
        <label>{{ 'dashboard.profile.doctorant.university' | t }}</label><input formControlName="university" />
        <div class="flex" style="margin-top:12px; gap:8px;">
          <button type="submit" [disabled]="docForm.invalid">{{ doctorantProfile ? ('dashboard.profile.doctorant.update' | t) : ('dashboard.profile.doctorant.save' | t) }}</button>
          <button type="button" *ngIf="doctorantProfile" (click)="cancelEdit()">{{ 'dashboard.profile.doctorant.cancel' | t }}</button>
          <span *ngIf="profileMessage && (!doctorantProfile || editing)" class="badge">{{profileMessage}}</span>
        </div>
      </form>
    </div>
  `
})
export class DoctorantComponent implements OnInit {
  me: AccountResponse | null = null;
  doctorantProfile: DoctorantProfileResponse | null = null;
  editing = false;
  sessionMessage = '';
  profileMessage = '';

  docForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: [''],
    address: [''],
    diploma: [''],
    graduationYear: [null as number | null],
    university: ['']
  });

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}

  ngOnInit() {
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
        this.doctorantProfile = null;
        this.editing = false;
      }
    });
  }

  loadProfile() {
    if (!this.me) return;
    this.api.getDoctorantProfile(this.me.id).subscribe({
      next: profile => {
        this.doctorantProfile = profile;
        this.editing = false;
        this.patchDoctorantForm(profile);
      },
      error: () => {
        this.doctorantProfile = null;
        this.editing = false;
        this.resetDoctorantForm();
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
    if (this.doctorantProfile) {
      this.patchDoctorantForm(this.doctorantProfile);
    }
  }

  cancelEdit() {
    this.editing = false;
    this.profileMessage = '';
    if (this.doctorantProfile) {
      this.patchDoctorantForm(this.doctorantProfile);
    } else {
      this.resetDoctorantForm();
    }
  }

  saveDoctorant() {
    if (!this.me) return;
    const info = this.buildInfoFromForm(this.docForm.value);
    const payload: UpdateDoctorantProfileRequest = {
      info,
      diploma: this.docForm.value.diploma || undefined,
      graduationYear: this.docForm.value.graduationYear || undefined,
      university: this.docForm.value.university || undefined
    };

    const request$ = this.doctorantProfile
      ? this.api.updateDoctorant(this.me.id, payload)
      : this.api.createDoctorant({ ...payload, accountId: this.me.id });

    request$.subscribe({
      next: res => {
        this.profileMessage = this.doctorantProfile ? 'Profil doctorant mis a jour' : 'Profil doctorant cree';
        this.doctorantProfile = res;
        this.editing = false;
        if (this.me) this.me.profileCompleted = true;
        this.patchDoctorantForm(res);
      },
      error: err => {
        this.profileMessage = err.error?.message || 'Erreur profil doctorant';
      }
    });
  }

  private patchDoctorantForm(profile: DoctorantProfileResponse) {
    this.docForm.patchValue({
      firstName: profile.info?.firstName || '',
      lastName: profile.info?.lastName || '',
      birthDate: profile.info?.birthDate || '',
      address: profile.info?.address || '',
      diploma: profile.diploma || '',
      graduationYear: profile.graduationYear ?? null,
      university: profile.university || ''
    });
  }

  private resetDoctorantForm() {
    this.docForm.reset({
      firstName: '',
      lastName: '',
      birthDate: '',
      address: '',
      diploma: '',
      graduationYear: null,
      university: ''
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
}
