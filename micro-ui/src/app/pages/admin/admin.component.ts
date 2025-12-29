import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { AccountResponse, CreateAdminRequest, Department, Laboratory } from '../../core/models';
import { TranslatePipe } from '../../core/translate.pipe';
import { I18nService } from '../../core/i18n.service';

type AdminSection = 'overview' | 'accounts' | 'pending' | 'admins' | 'structures' | 'create';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  template: `
    <div class="panel" style="padding:16px;">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h2>{{ 'admin.consoleTitle' | t }}</h2>
        <div class="badge">{{ 'admin.badgeSuperuser' | t }}</div>
      </div>
      <div class="flex" style="gap:8px; flex-wrap:wrap;">
        <button (click)="setSection('overview')" [disabled]="activeSection==='overview'">{{ 'admin.sections.overview' | t }}</button>
        <button (click)="setSection('accounts')" [disabled]="activeSection==='accounts'">{{ 'admin.sections.accounts' | t }}</button>
        <button (click)="setSection('pending')" [disabled]="activeSection==='pending'">{{ 'admin.sections.pending' | t }}</button>
        <button (click)="setSection('admins')" [disabled]="activeSection==='admins'">{{ 'admin.sections.admins' | t }}</button>
        <button (click)="setSection('structures')" [disabled]="activeSection==='structures'">{{ 'admin.sections.structures' | t }}</button>
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
          <div class="section-title">{{ 'admin.overview.pending' | t }}</div>
          <strong>{{ pending.length }}</strong>
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
      <div class="table">
        <div class="table-head">
          <div>{{ 'admin.accounts.username' | t }}</div>
          <div>{{ 'admin.accounts.email' | t }}</div>
          <div>{{ 'admin.accounts.role' | t }}</div>
          <div>{{ 'admin.accounts.status' | t }}</div>
          <div>{{ 'admin.accounts.emailVerified' | t }}</div>
        </div>
        <div *ngFor="let acc of allAccounts" class="table-row">
          <div>{{acc.username}}</div>
          <div class="ellipsis email-cell" [title]="acc.email">{{acc.email}}</div>
          <div>{{acc.primaryRole}}</div>
          <div><span class="badge">{{acc.status}}</span></div>
          <div><span class="badge" [style.color]="acc.emailVerified ? '#d3b869' : '#f97316'">{{ acc.emailVerified ? ('admin.accounts.yes' | t) : ('admin.accounts.no' | t) }}</span></div>
        </div>
      </div>
    </section>

    <section *ngIf="activeSection==='pending'" class="panel">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h3>{{ 'admin.pending.title' | t }}</h3>
        <button (click)="loadPending()">{{ 'admin.pending.refresh' | t }}</button>
      </div>
      <div *ngIf="pending.length===0">{{ 'admin.pending.none' | t }}</div>
      <div *ngFor="let acc of pending" class="card" style="padding:12px;">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <div><strong>{{acc.username}}</strong> ({{acc.email}}) - role: {{acc.primaryRole}}</div>
          <div class="badge" [style.background]="acc.emailVerified ? '#1a1a1a' : '#211'">{{ acc.emailVerified ? 'Email verifie' : 'Email non verifie' }}</div>
        </div>
        <div class="flex" style="gap:8px; margin-top:8px;">
          <button (click)="approve(acc.id)" [disabled]="!acc.emailVerified">{{ 'admin.pending.approve' | t }}</button>
          <button (click)="reject(acc.id)" style="background:#ef4444; color:white;">{{ 'admin.pending.reject' | t }}</button>
        </div>
      </div>
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

    <section *ngIf="activeSection==='structures'" class="panel">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h3>{{ 'admin.structures.departments' | t }}</h3>
        <button (click)="loadStructures()">{{ 'admin.accounts.refresh' | t }}</button>
      </div>
      <form [formGroup]="departmentForm" (ngSubmit)="createDepartment()" class="form-row" style="margin-top:8px; gap:8px; flex-wrap:wrap;">
        <input [placeholder]="'admin.structures.name' | t" formControlName="name" />
        <input [placeholder]="'admin.structures.description' | t" formControlName="description" />
        <div class="flex" style="gap:8px; align-items:center;">
          <button type="submit" [disabled]="departmentForm.invalid || creatingDepartment">
            {{ editingDepartmentId ? ('admin.structures.update' | t) : ('admin.structures.add' | t) }}
          </button>
          <button type="button" *ngIf="editingDepartmentId" (click)="cancelDepartmentEdit()">{{ 'admin.structures.cancel' | t }}</button>
        </div>
      </form>
      <div class="table" style="margin-top:8px;">
        <div class="table-head">
          <div>{{ 'admin.structures.name' | t }}</div><div>{{ 'admin.structures.description' | t }}</div><div></div>
        </div>
        <div *ngFor="let dep of departments" class="table-row">
          <div>{{dep.name}}</div>
          <div>{{dep.description}}</div>
          <div class="flex" style="justify-content:flex-end; gap:6px;">
            <button type="button" (click)="editDepartment(dep)">{{ 'admin.structures.edit' | t }}</button>
            <button type="button" (click)="deleteDepartment(dep.id)">{{ 'admin.structures.delete' | t }}</button>
          </div>
        </div>
      </div>

      <div class="flex" style="justify-content:space-between; align-items:center; margin-top:16px;">
        <h3>{{ 'admin.structures.laboratories' | t }}</h3>
      </div>
      <form [formGroup]="laboratoryForm" (ngSubmit)="createLaboratory()" class="form-row" style="margin-top:8px; gap:8px; flex-wrap:wrap;">
        <input [placeholder]="'admin.structures.name' | t" formControlName="name" />
        <input [placeholder]="'admin.structures.description' | t" formControlName="description" />
        <div class="flex" style="gap:8px; align-items:center;">
          <button type="submit" [disabled]="laboratoryForm.invalid || creatingLaboratory">
            {{ editingLaboratoryId ? ('admin.structures.update' | t) : ('admin.structures.add' | t) }}
          </button>
          <button type="button" *ngIf="editingLaboratoryId" (click)="cancelLaboratoryEdit()">{{ 'admin.structures.cancel' | t }}</button>
        </div>
      </form>
      <div class="table" style="margin-top:8px;">
        <div class="table-head">
          <div>{{ 'admin.structures.name' | t }}</div><div>{{ 'admin.structures.description' | t }}</div><div></div>
        </div>
        <div *ngFor="let lab of laboratories" class="table-row">
          <div>{{lab.name}}</div>
          <div>{{lab.description}}</div>
          <div class="flex" style="justify-content:flex-end; gap:6px;">
            <button type="button" (click)="editLaboratory(lab)">{{ 'admin.structures.edit' | t }}</button>
            <button type="button" (click)="deleteLaboratory(lab.id)">{{ 'admin.structures.delete' | t }}</button>
          </div>
        </div>
      </div>
      <div *ngIf="structureMessage" class="badge" style="margin-top:8px;">{{structureMessage}}</div>
    </section>
  `
})
export class AdminComponent implements OnInit {
  activeSection: AdminSection = 'overview';
  pending: AccountResponse[] = [];
  admins: AccountResponse[] = [];
  allAccounts: AccountResponse[] = [];
  departments: Department[] = [];
  laboratories: Laboratory[] = [];
  editingDepartmentId: string | null = null;
  editingLaboratoryId: string | null = null;
  pendingMessage = '';
  adminMessage = '';
  createMessage = '';
  structureMessage = '';
  creatingAdmin = false;
  creatingDepartment = false;
  creatingLaboratory = false;

  createForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['']
  });

  departmentForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });

  laboratoryForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private i18n: I18nService
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
    this.loadPending();
    this.loadAdmins();
    this.loadAllAccounts();
    this.loadStructures();
  }

  loadPending() {
    this.pendingMessage = '';
    this.api.listPendingAccounts().subscribe({
      next: res => { this.pending = res; },
      error: err => { this.pendingMessage = err.error?.message || 'Erreur chargement des demandes'; }
    });
  }

  loadAdmins() {
    this.adminMessage = '';
    this.api.listAdmins().subscribe({
      next: res => { this.admins = res; },
      error: err => { this.adminMessage = err.error?.message || 'Erreur chargement admins'; }
    });
  }

  loadAllAccounts() {
    this.api.listAllAccounts().subscribe({
      next: res => { this.allAccounts = res; },
      error: () => {}
    });
  }

  loadStructures() {
    this.api.listDepartments().subscribe({ next: res => this.departments = res });
    this.api.listLaboratories().subscribe({ next: res => this.laboratories = res });
  }

  private syncQuery(section: AdminSection) {
    this.router.navigate([], { relativeTo: this.route, queryParams: { section }, queryParamsHandling: 'merge' });
  }

  private sections: AdminSection[] = ['overview', 'accounts', 'pending', 'admins', 'structures', 'create'];

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

  approve(id: string) {
    this.api.approveAccount(id).subscribe({
      next: () => { this.pendingMessage = 'Compte approuve'; this.loadPending(); this.loadAllAccounts(); },
      error: err => { this.pendingMessage = err.error?.message || 'Erreur approbation'; }
    });
  }

  reject(id: string) {
    this.api.rejectAccount(id).subscribe({
      next: () => { this.pendingMessage = 'Compte rejete'; this.loadPending(); this.loadAllAccounts(); },
      error: err => { this.pendingMessage = err.error?.message || 'Erreur rejet'; }
    });
  }

  activate(id: string) {
    this.api.activateAdmin(id).subscribe({
      next: admin => { this.adminMessage = `Admin ${admin.username} active`; this.loadAdmins(); this.loadAllAccounts(); },
      error: err => { this.adminMessage = err.error?.message || 'Erreur activation'; }
    });
  }

  suspend(id: string) {
    this.api.suspendAdmin(id).subscribe({
      next: admin => { this.adminMessage = `Admin ${admin.username} suspendu`; this.loadAdmins(); this.loadAllAccounts(); },
      error: err => { this.adminMessage = err.error?.message || 'Erreur suspension'; }
    });
  }

  createDepartment() {
    if (this.departmentForm.invalid) return;
    this.creatingDepartment = true;
    this.structureMessage = '';
    const payload = this.departmentForm.value as any;
    const request$ = this.editingDepartmentId
      ? this.api.updateDepartment(this.editingDepartmentId, payload)
      : this.api.createDepartment(payload);
    request$.subscribe({
      next: dep => {
        this.structureMessage = this.editingDepartmentId
          ? `Departement ${dep.name} mis a jour`
          : `Departement ${dep.name} cree`;
        this.departmentForm.reset({ name: '', description: '' });
        this.editingDepartmentId = null;
        this.creatingDepartment = false;
        this.loadStructures();
      },
      error: err => {
        this.structureMessage = err.error?.message || 'Erreur creation departement';
        this.creatingDepartment = false;
      }
    });
  }

  createLaboratory() {
    if (this.laboratoryForm.invalid) return;
    this.creatingLaboratory = true;
    this.structureMessage = '';
    const payload = this.laboratoryForm.value as any;
    const request$ = this.editingLaboratoryId
      ? this.api.updateLaboratory(this.editingLaboratoryId, payload)
      : this.api.createLaboratory(payload);
    request$.subscribe({
      next: lab => {
        this.structureMessage = this.editingLaboratoryId
          ? `Laboratoire ${lab.name} mis a jour`
          : `Laboratoire ${lab.name} cree`;
        this.laboratoryForm.reset({ name: '', description: '' });
        this.editingLaboratoryId = null;
        this.creatingLaboratory = false;
        this.loadStructures();
      },
      error: err => {
        this.structureMessage = err.error?.message || 'Erreur creation laboratoire';
        this.creatingLaboratory = false;
      }
    });
  }

  editDepartment(dep: Department) {
    this.editingDepartmentId = dep.id;
    this.departmentForm.patchValue({ name: dep.name, description: dep.description || '' });
  }

  editLaboratory(lab: Laboratory) {
    this.editingLaboratoryId = lab.id;
    this.laboratoryForm.patchValue({ name: lab.name, description: lab.description || '' });
  }

  cancelDepartmentEdit() {
    this.editingDepartmentId = null;
    this.departmentForm.reset({ name: '', description: '' });
  }

  cancelLaboratoryEdit() {
    this.editingLaboratoryId = null;
    this.laboratoryForm.reset({ name: '', description: '' });
  }

  deleteDepartment(id: string) {
    this.structureMessage = '';
    this.api.deleteDepartment(id).subscribe({
      next: () => {
        this.structureMessage = 'Departement supprime';
        if (this.editingDepartmentId === id) {
          this.cancelDepartmentEdit();
        }
        this.loadStructures();
      },
      error: err => {
        this.structureMessage = err.error?.message || this.i18nFallback('admin.structures.deleteBlocked');
      }
    });
  }

  deleteLaboratory(id: string) {
    this.structureMessage = '';
    this.api.deleteLaboratory(id).subscribe({
      next: () => {
        this.structureMessage = 'Laboratoire supprime';
        if (this.editingLaboratoryId === id) {
          this.cancelLaboratoryEdit();
        }
        this.loadStructures();
      },
      error: err => {
        this.structureMessage = err.error?.message || this.i18nFallback('admin.structures.deleteBlocked');
      }
    });
  }

  private i18nFallback(key: string): string {
    return this.i18n.translate(key);
  }
}
