import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { AccountResponse, Department, Laboratory, Juror } from '../../core/models';
import { TranslatePipe } from '../../core/translate.pipe';

type AdminPortalSection = 'pending' | 'departments' | 'laboratories' | 'jurors';

@Component({
  standalone: true,
  selector: 'app-admin-portal',
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  template: `
    <div class="panel">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h2>{{ 'nav.admin' | t }}</h2>
        <span class="badge">ADMIN</span>
      </div>
      <p>{{ 'layout.portalTitle' | t }}</p>
      <div class="flex" style="gap:8px; flex-wrap:wrap; margin-top:8px;">
        <button (click)="setSection('pending')" [disabled]="activeSection==='pending'">{{ 'admin.sections.pending' | t }}</button>
        <button (click)="setSection('departments')" [disabled]="activeSection==='departments'">{{ 'admin.structures.departments' | t }}</button>
        <button (click)="setSection('laboratories')" [disabled]="activeSection==='laboratories'">{{ 'admin.structures.laboratories' | t }}</button>
        <button (click)="setSection('jurors')" [disabled]="activeSection==='jurors'">Jurés</button>
      </div>
    </div>

    <section class="panel" *ngIf="activeSection==='pending'">
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
          <button (click)="approve(acc.id)" [disabled]="!acc.emailVerified || actionInProgress">{{ 'admin.pending.approve' | t }}</button>
          <button (click)="reject(acc.id)" style="background:#ef4444; color:white;" [disabled]="actionInProgress">{{ 'admin.pending.reject' | t }}</button>
        </div>
      </div>
      <div *ngIf="pendingMessage" class="badge" style="margin-top:8px;">{{pendingMessage}}</div>
    </section>

    <section class="panel" *ngIf="activeSection==='departments'">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h3>{{ 'admin.structures.departments' | t }}</h3>
        <button type="button" (click)="loadStructures()">{{ 'admin.accounts.refresh' | t }}</button>
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
    </section>

    <section class="panel" *ngIf="activeSection==='laboratories'">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h3>{{ 'admin.structures.laboratories' | t }}</h3>
        <button type="button" (click)="loadStructures()">{{ 'admin.accounts.refresh' | t }}</button>
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

    <section class="panel" *ngIf="activeSection==='jurors'">
      <div class="flex" style="justify-content:space-between; align-items:center;">
        <h3>Gestion des jurés</h3>
        <button type="button" (click)="loadJurors()">Rafraichir</button>
      </div>

      <form [formGroup]="jurorForm" (ngSubmit)="submitJuror()" class="form-row" style="margin-top:8px; gap:8px; flex-wrap:wrap;">
        <input placeholder="Nom complet" formControlName="name" />
        <input placeholder="Email" formControlName="email" />
        <input placeholder="Université" formControlName="university" />
        <input placeholder="Note (optionnel)" formControlName="note" />
        <div class="flex" style="gap:8px; align-items:center;">
          <button type="submit" [disabled]="jurorForm.invalid || creatingJuror">
            {{ editingJurorId ? 'Mettre a jour' : 'Ajouter' }}
          </button>
          <button type="button" *ngIf="editingJurorId" (click)="cancelJurorEdit()">Annuler</button>
        </div>
      </form>

      <div class="table" style="margin-top:8px;">
        <div class="table-head">
          <div>Nom</div><div>Email</div><div>Université</div><div>Note</div><div></div>
        </div>
        <div *ngFor="let j of jurors" class="table-row">
          <div>{{j.name}}</div>
          <div class="ellipsis email-cell" [title]="j.email">{{j.email}}</div>
          <div>{{j.university}}</div>
          <div>{{j.note}}</div>
          <div class="flex" style="justify-content:flex-end; gap:6px;">
            <button type="button" (click)="editJuror(j)">Editer</button>
            <button type="button" (click)="deleteJuror(j.id)">Supprimer</button>
          </div>
        </div>
      </div>

      <div *ngIf="jurorMessage" class="badge" style="margin-top:8px;">{{jurorMessage}}</div>
    </section>
  `
})
export class AdminPortalComponent implements OnInit {
  activeSection: AdminPortalSection = 'pending';
  pending: AccountResponse[] = [];
  departments: Department[] = [];
  laboratories: Laboratory[] = [];
  jurors: Juror[] = [];
  editingDepartmentId: string | null = null;
  editingLaboratoryId: string | null = null;
  editingJurorId: string | null = null;
  structureMessage = '';
  pendingMessage = '';
  jurorMessage = '';
  creatingDepartment = false;
  creatingLaboratory = false;
  creatingJuror = false;
  actionInProgress = false;

  departmentForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });

  laboratoryForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });

  jurorForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    university: [''],
    note: ['']
  });

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadPending();
    this.loadStructures();
    this.loadJurors();
  }

  setSection(section: AdminPortalSection) {
    this.activeSection = section;
    if (section === 'pending') {
      this.loadPending();
    } else if (section === 'jurors') {
      this.loadJurors();
    }
  }

  loadPending() {
    this.pendingMessage = '';
    this.api.listPendingAccounts().subscribe({
      next: res => { this.pending = res; },
      error: err => { this.pendingMessage = err.error?.message || 'Erreur chargement des demandes'; }
    });
  }

  loadStructures() {
    this.api.listDepartments().subscribe({ next: res => this.departments = res });
    this.api.listLaboratories().subscribe({ next: res => this.laboratories = res });
  }

  createDepartment() {
    if (this.departmentForm.invalid) return;
    this.creatingDepartment = true;
    this.structureMessage = '';
    const payload = this.departmentForm.value as { name: string; description?: string };
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
    const payload = this.laboratoryForm.value as { name: string; description?: string };
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
        this.structureMessage = err.error?.message || 'Suppression departement impossible';
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
        this.structureMessage = err.error?.message || 'Suppression laboratoire impossible';
      }
    });
  }

  approve(id: string) {
    this.actionInProgress = true;
    this.pendingMessage = '';
    this.api.approveAccount(id).subscribe({
      next: () => {
        this.pendingMessage = 'Compte approuve';
        this.loadPending();
        this.actionInProgress = false;
      },
      error: err => {
        this.pendingMessage = err.error?.message || 'Erreur approbation';
        this.actionInProgress = false;
      }
    });
  }

  reject(id: string) {
    this.actionInProgress = true;
    this.pendingMessage = '';
    this.api.rejectAccount(id).subscribe({
      next: () => {
        this.pendingMessage = 'Compte rejete';
        this.loadPending();
        this.actionInProgress = false;
      },
      error: err => {
        this.pendingMessage = err.error?.message || 'Erreur rejet';
        this.actionInProgress = false;
      }
    });
  }

  loadJurors() {
    this.jurorMessage = '';
    this.api.listJurors().subscribe({
      next: res => { this.jurors = res; },
      error: err => { this.jurorMessage = err.error?.message || 'Erreur chargement jurés'; }
    });
  }

  submitJuror() {
    if (this.jurorForm.invalid) return;
    this.creatingJuror = true;
    this.jurorMessage = '';
    const payload = {
      name: this.jurorForm.value.name || '',
      email: this.jurorForm.value.email || '',
      university: this.jurorForm.value.university || '',
      note: this.jurorForm.value.note || ''
    };
    const request$ = this.editingJurorId
      ? this.api.updateJuror(this.editingJurorId, payload)
      : this.api.createJuror(payload);

    request$.subscribe({
      next: juror => {
        this.jurorMessage = this.editingJurorId
          ? `Juré ${juror.name} mis à jour`
          : `Juré ${juror.name} ajouté`;
        this.editingJurorId = null;
        this.creatingJuror = false;
        this.jurorForm.reset({ name: '', email: '', university: '', note: '' });
        this.loadJurors();
      },
      error: err => {
        this.jurorMessage = err.error?.message || 'Erreur juré';
        this.creatingJuror = false;
      }
    });
  }

  editJuror(j: Juror) {
    this.editingJurorId = j.id;
    this.jurorForm.patchValue({ name: j.name, email: j.email, university: j.university || '', note: j.note || '' });
  }

  deleteJuror(id: string) {
    this.api.deleteJuror(id).subscribe({
      next: () => {
        this.jurorMessage = 'Juré supprimé';
        this.loadJurors();
        if (this.editingJurorId === id) {
          this.cancelJurorEdit();
        }
      },
      error: err => { this.jurorMessage = err.error?.message || 'Suppression juré impossible'; }
    });
  }

  cancelJurorEdit() {
    this.editingJurorId = null;
    this.jurorForm.reset({ name: '', email: '', university: '', note: '' });
  }
}
