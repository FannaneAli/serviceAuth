import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { AccountResponse } from '../../core/models';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="card">
      <h2>Session</h2>
      <div class="flex" style="flex-wrap:wrap; gap:8px;">
        <button (click)="refreshAccess()">Refresh token</button>
        <button (click)="logout()">Logout</button>
        <a *ngIf="isSuperuser()" routerLink="/admin" class="badge" style="background:#38bdf8; color:#0b1324;">Admin</a>
        <span *ngIf="sessionMessage" class="badge">{{sessionMessage}}</span>
      </div>
    </div>

    <div class="card" *ngIf="me">
      <h2>Mon compte</h2>
      <p><strong>Username:</strong> {{me.username}}</p>
      <p><strong>Email:</strong> {{me.email}}</p>
      <p><strong>Role:</strong> {{me.primaryRole}}</p>
      <p><strong>Status:</strong> {{me.status}}</p>
      <p><strong>Profile compl?t?:</strong> {{me.profileCompleted}}</p>
    </div>

    <div class="card" *ngIf="me?.primaryRole === 'DOCTORANT'">
      <h3>Cr?er profil Doctorant</h3>
      <form [formGroup]="docForm" (ngSubmit)="createDoctorant()">
        <div class="form-row">
          <div><label>Pr?nom</label><input formControlName="firstName" /></div>
          <div><label>Nom</label><input formControlName="lastName" /></div>
        </div>
        <div class="form-row">
          <div><label>Ann?e graduation</label><input type="number" formControlName="graduationYear" /></div>
          <div><label>Dipl?me</label><input formControlName="diploma" /></div>
        </div>
        <label>Universit?</label><input formControlName="university" />
        <label>Adresse</label><input formControlName="address" />
        <div class="flex" style="margin-top:12px;">
          <button type="submit" [disabled]="docForm.invalid">Enregistrer profil</button>
          <span *ngIf="profileMessage" class="badge">{{profileMessage}}</span>
        </div>
      </form>
    </div>

    <div class="card" *ngIf="me?.primaryRole === 'DIRECTEUR'">
      <h3>Cr?er profil Encadrant</h3>
      <form [formGroup]="encForm" (ngSubmit)="createEncadrant()">
        <div class="form-row">
          <div><label>Pr?nom</label><input formControlName="firstName" /></div>
          <div><label>Nom</label><input formControlName="lastName" /></div>
        </div>
        <label>Grade</label><input formControlName="grade" />
        <label>D?partement (UUID)</label><input formControlName="departmentId" />
        <label>Laboratoire (UUID)</label><input formControlName="laboratoryId" />
        <label>Adresse</label><input formControlName="address" />
        <div class="flex" style="margin-top:12px;">
          <button type="submit" [disabled]="encForm.invalid">Enregistrer profil</button>
          <span *ngIf="profileMessage" class="badge">{{profileMessage}}</span>
        </div>
      </form>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  me: AccountResponse | null = null;
  sessionMessage = '';
  profileMessage = '';

  docForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: [''],
    diploma: [''],
    graduationYear: [null as number | null],
    university: ['']
  });

  encForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: [''],
    grade: [''],
    departmentId: [''],
    laboratoryId: ['']
  });

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.loadMe();
  }

  isSuperuser(): boolean {
    return localStorage.getItem('role') === 'SUPERUSER';
  }

  loadMe() {
    this.api.me().subscribe({
      next: res => {
        this.me = res;
        localStorage.setItem('role', res.primaryRole);
      },
      error: () => { this.me = null; }
    });
  }

  refreshAccess() {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) return;
    this.api.refresh(refresh).subscribe({
      next: res => {
        localStorage.setItem('access', res.accessToken);
        localStorage.setItem('refresh', res.refreshToken);
        this.sessionMessage = 'Token rafra?chi';
      },
      error: err => {
        this.sessionMessage = err.error?.message || 'Refresh ?chou?';
      }
    });
  }

  logout() {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) return;
    this.api.logout(refresh).subscribe({
      next: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.sessionMessage = 'D?connect?';
        this.me = null;
      },
      error: err => {
        this.sessionMessage = err.error?.message || 'Logout ?chou?';
      }
    });
  }

  createDoctorant() {
    if (!this.me) return;
    const body = {
      accountId: this.me.id,
      info: {
        firstName: this.docForm.value.firstName || undefined,
        lastName: this.docForm.value.lastName || undefined,
        address: this.docForm.value.address || undefined
      },
      diploma: this.docForm.value.diploma || undefined,
      graduationYear: this.docForm.value.graduationYear || undefined,
      university: this.docForm.value.university || undefined
    } as any;
    this.api.createDoctorant(body).subscribe({
      next: () => this.profileMessage = 'Profil doctorant cr??',
      error: err => this.profileMessage = err.error?.message || 'Erreur profil'
    });
  }

  createEncadrant() {
    if (!this.me) return;
    const body = {
      accountId: this.me.id,
      info: {
        firstName: this.encForm.value.firstName || undefined,
        lastName: this.encForm.value.lastName || undefined,
        address: this.encForm.value.address || undefined
      },
      grade: this.encForm.value.grade || undefined,
      departmentId: this.encForm.value.departmentId || undefined,
      laboratoryId: this.encForm.value.laboratoryId || undefined
    } as any;
    this.api.createEncadrant(body).subscribe({
      next: () => this.profileMessage = 'Profil encadrant cr??',
      error: err => this.profileMessage = err.error?.message || 'Erreur profil'
    });
  }
}
