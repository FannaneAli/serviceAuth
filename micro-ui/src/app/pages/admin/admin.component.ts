import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { AccountResponse, CreateAdminRequest } from '../../core/models';
import { TranslatePipe } from '../../core/translate.pipe';
import { FormsModule } from '@angular/forms';

type AdminSection = 'overview' | 'accounts' | 'admins' | 'create';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TranslatePipe],
  template: `
    <div class="panel" style="padding:16px;">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h2>{{ 'admin.consoleTitle' | t }}</h2>
        <div class="badge">{{ 'admin.badgeSuperuser' | t }}</div>
      </div>
      <div class="flex" style="gap:8px; flex-wrap:wrap;">
        <button (click)="setSection('overview')" [disabled]="activeSection==='overview'">{{ 'admin.sections.overview' | t }}</button>
        <button (click)="setSection('accounts')" [disabled]="activeSection==='accounts'">{{ 'admin.sections.accounts' | t }}</button>
        <button (click)="setSection('admins')" [disabled]="activeSection==='admins'">{{ 'admin.sections.admins' | t }}</button>
        <button (click)="setSection('create')" [disabled]="activeSection==='create'">{{ 'admin.sections.create' | t }}</button>
      </div>
    </div>

    <section *ngIf="activeSection==='overview'" class="panel">
      <h3>{{ 'admin.sections.overview' | t }}</h3>
      <div class="stat-grid">
        <div class="stat">
          <div class="section-title">{{ 'admin.overview.total' | t }}</div>
          <strong>{{ allAccounts.length }}</strong>
        </div>
        <div class="stat">
          <div class="section-title">{{ 'admin.overview.admins' | t }}</div>
          <strong>{{ admins.length }}</strong>
        </div>
      </div>
      <div style="margin-top:12px;">
        <button (click)="reloadAll()">{{ 'admin.overview.refresh' | t }}</button>
      </div>
    </section>

    <section *ngIf="activeSection==='create'" class="panel">
      <h3>{{ 'admin.create.title' | t }}</h3>
      <form [formGroup]="createForm" (ngSubmit)="createAdmin()" class="form-row">
        <div>
          <label>{{ 'admin.create.username' | t }}</label>
          <input formControlName="username" />
        </div>
        <div>
          <label>{{ 'admin.create.email' | t }}</label>
          <input formControlName="email" />
        </div>
        <div>
          <label>{{ 'admin.create.password' | t }}</label>
          <input type="password" formControlName="password" />
        </div>
        <div>
          <label>{{ 'admin.create.phone' | t }}</label>
          <input formControlName="phone" />
        </div>
      </form>
      <div class="flex" style="margin-top:12px;">
        <button (click)="createAdmin()" [disabled]="createForm.invalid || creatingAdmin">{{ 'admin.create.submit' | t }}</button>
        <span *ngIf="createMessage" class="badge">{{createMessage}}</span>
      </div>
    </section>

    <section *ngIf="activeSection==='accounts'" class="panel">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h3>{{ 'admin.accounts.title' | t }}</h3>
        <button (click)="loadAllAccounts()">{{ 'admin.accounts.refresh' | t }}</button>
      </div>
      <div class="flex" style="gap:8px; align-items:center; margin-top:8px;">
        <label>Filtrer par role</label>
        <select [(ngModel)]="roleFilter" (change)="applyFilter()">
          <option value="">Tous</option>
          <option value="ADMIN">ADMIN</option>
          <option value="DOCTORANT">DOCTORANT</option>
          <option value="DIRECTEUR">DIRECTEUR</option>
        </select>
      </div>
      <div class="table">
        <div class="table-head">
          <div>{{ 'admin.accounts.username' | t }}</div>
          <div>{{ 'admin.accounts.email' | t }}</div>
          <div>{{ 'admin.accounts.role' | t }}</div>
          <div>{{ 'admin.accounts.status' | t }}</div>
          <div>{{ 'admin.accounts.emailVerified' | t }}</div>
          <div>Actions</div>
        </div>
        <div *ngFor="let acc of filteredAccounts" class="table-row">
          <div>{{acc.username}}</div>
          <div class="ellipsis email-cell" [title]="acc.email">{{acc.email}}</div>
          <div>{{acc.primaryRole}}</div>
          <div><span class="badge">{{acc.status}}</span></div>
          <div><span class="badge" [style.color]="acc.emailVerified ? '#d3b869' : '#f97316'">{{ acc.emailVerified ? ('admin.accounts.yes' | t) : ('admin.accounts.no' | t) }}</span></div>
          <div class="flex" style="gap:6px; justify-content:flex-end; flex-wrap:wrap;">
            <button type="button" (click)="toggleStatus(acc)" [disabled]="actionInProgress">{{ acc.status === 'ACTIVE' ? 'Suspendre' : 'Re-activer' }}</button>
            <button type="button" (click)="deleteAccount(acc)" style="background:#ef4444; color:white;" [disabled]="actionInProgress">Supprimer</button>
          </div>
        </div>
      </div>
      <div *ngIf="accountMessage" class="badge" style="margin-top:8px;">{{accountMessage}}</div>
    </section>

    <section *ngIf="activeSection==='admins'" class="panel">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h3>{{ 'admin.admins.title' | t }}</h3>
        <button (click)="loadAdmins()">{{ 'admin.admins.refresh' | t }}</button>
      </div>
      <div *ngIf="admins.length===0">{{ 'admin.admins.none' | t }}</div>
      <div *ngFor="let admin of admins" class="card" style="padding:12px;">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <div><strong>{{admin.username}}</strong> ({{admin.email}})</div>
          <div class="badge">{{admin.status}}</div>
        </div>
        <div class="flex" style="gap:8px; margin-top:8px;">
          <button *ngIf="admin.status!=='ACTIVE'" (click)="activate(admin.id)">{{ 'admin.admins.activate' | t }}</button>
          <button *ngIf="admin.status==='ACTIVE'" (click)="suspend(admin.id)" style="background:#ef4444; color:white;">{{ 'admin.admins.suspend' | t }}</button>
        </div>
      </div>
    </section>

  `
})
export class AdminComponent implements OnInit {
  activeSection: AdminSection = 'overview';
  admins: AccountResponse[] = [];
  allAccounts: AccountResponse[] = [];
  filteredAccounts: AccountResponse[] = [];
  roleFilter = '';
  adminMessage = '';
  accountMessage = '';
  createMessage = '';
  creatingAdmin = false;
  actionInProgress = false;

  createForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['']
  });

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.isSuperuser()) {
      return;
    }
    this.route.queryParamMap.subscribe(params => {
      const desired = params.get('section') as AdminSection | null;
      if (desired && this.sections.includes(desired)) {
        this.activeSection = desired;
      }
    });
    this.reloadAll();
  }

  private isSuperuser(): boolean {
    return localStorage.getItem('role') === 'SUPERUSER';
  }

  setSection(sec: AdminSection) {
    this.activeSection = sec;
    this.syncQuery(sec);
  }

  reloadAll() {
    this.loadAdmins();
    this.loadAllAccounts();
  }

  loadAdmins() {
    this.adminMessage = '';
    this.api.listAdmins().subscribe({
      next: res => { this.admins = res; },
      error: err => { this.adminMessage = err.error?.message || 'Erreur chargement admins'; }
    });
  }

  loadAllAccounts() {
    this.accountMessage = '';
    this.api.listAllAccounts().subscribe({
      next: res => {
        this.allAccounts = res.filter(acc => acc.primaryRole !== 'SUPERUSER');
        this.applyFilter();
      },
      error: err => { this.accountMessage = err.error?.message || 'Erreur chargement comptes'; }
    });
  }

  private syncQuery(section: AdminSection) {
    this.router.navigate([], { relativeTo: this.route, queryParams: { section }, queryParamsHandling: 'merge' });
  }

  private sections: AdminSection[] = ['overview', 'accounts', 'admins', 'create'];

  createAdmin() {
    if (this.createForm.invalid) return;
    this.creatingAdmin = true;
    this.createMessage = '';
    const payload: CreateAdminRequest = {
      username: this.createForm.value.username || '',
      email: this.createForm.value.email || '',
      password: this.createForm.value.password || '',
      phone: this.createForm.value.phone || undefined
    };
    this.api.createAdmin(payload).subscribe({
      next: admin => {
        this.createMessage = `Admin ${admin.username} cree (${admin.status})`;
        this.createForm.reset({ username: '', email: '', password: '', phone: '' });
        this.creatingAdmin = false;
        this.loadAdmins();
        this.loadAllAccounts();
      },
      error: err => {
        this.createMessage = err.error?.message || 'Erreur creation admin';
        this.creatingAdmin = false;
      }
    });
  }

  activate(id: string) {
    this.api.activateAccount(id).subscribe({
      next: admin => { this.adminMessage = `Admin ${admin.username} active`; this.loadAdmins(); this.loadAllAccounts(); },
      error: err => { this.adminMessage = err.error?.message || 'Erreur activation'; }
    });
  }

  suspend(id: string) {
    this.api.suspendAccount(id).subscribe({
      next: admin => { this.adminMessage = `Admin ${admin.username} suspendu`; this.loadAdmins(); this.loadAllAccounts(); },
      error: err => { this.adminMessage = err.error?.message || 'Erreur suspension'; }
    });
  }

  toggleStatus(acc: AccountResponse) {
    if (acc.primaryRole === 'SUPERUSER') return;
    this.actionInProgress = true;
    this.accountMessage = '';
    const request$ = acc.status === 'ACTIVE'
      ? this.api.suspendAccount(acc.id)
      : this.api.activateAccount(acc.id);

    request$.subscribe({
      next: updated => {
        this.accountMessage = acc.status === 'ACTIVE'
          ? `Compte ${updated.username} suspendu`
          : `Compte ${updated.username} reactive`;
        this.loadAllAccounts();
        this.actionInProgress = false;
      },
      error: err => {
        this.accountMessage = err.error?.message || 'Action impossible';
        this.actionInProgress = false;
      }
    });
  }

  deleteAccount(acc: AccountResponse) {
    if (acc.primaryRole === 'SUPERUSER') return;
    this.actionInProgress = true;
    this.accountMessage = '';
    this.api.deleteAccount(acc.id).subscribe({
      next: deleted => {
        this.accountMessage = `Compte ${deleted.username} supprime`;
        this.loadAllAccounts();
        this.actionInProgress = false;
      },
      error: err => {
        this.accountMessage = err.error?.message || 'Suppression impossible';
        this.actionInProgress = false;
      }
    });
  }

  applyFilter() {
    this.filteredAccounts = this.roleFilter
      ? this.allAccounts.filter(a => a.primaryRole === this.roleFilter)
      : [...this.allAccounts];
  }

}
