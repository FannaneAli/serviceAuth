import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import {
  AccountResponse,
  CreateSoutenanceRequest,
  JuryRole,
  JuryMember,
  ScheduleSoutenanceRequest,
  SoutenanceResponse,
  SoutenanceStatus
} from '../../core/models';

@Component({
  standalone: true,
  selector: 'app-soutenances',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="panel">
      <div class="flex" style="justify-content: space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h2 style="margin:0;">Mes soutenances</h2>
          <p class="muted">Soumettre un dossier, suivre les statuts et planifier une date.</p>
        </div>
        <div class="flex" style="gap:8px;">
          <button type="button" (click)="refresh()" [disabled]="loading">Rafraîchir</button>
          <span *ngIf="feedback" class="badge">{{ feedback }}</span>
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="me">
      <h3 style="margin-top:0;">Nouveau dossier</h3>
      <form [formGroup]="createForm" (ngSubmit)="submit()">
        <div class="form-row">
          <div>
            <label>Titre de thèse</label>
            <input formControlName="thesisTitle" />
          </div>
          <div>
            <label>Résumé</label>
            <input formControlName="thesisSummary" />
          </div>
        </div>
        <div class="form-row">
          <div><label>Publications</label><input type="number" formControlName="publicationsCount" /></div>
          <div><label>Conférences</label><input type="number" formControlName="conferencesCount" /></div>
          <div><label>Heures de formation</label><input type="number" formControlName="trainingHours" /></div>
        </div>
        <div class="form-row">
          <div><label>Manuscrit (URL)</label><input formControlName="manuscriptUrl" /></div>
          <div><label>Anti-plagiat (URL)</label><input formControlName="antiPlagiarismReportUrl" /></div>
        </div>
        <div class="form-row">
          <div><label>Rapport publications (URL)</label><input formControlName="publicationsReportUrl" /></div>
          <div><label>Certificats formation (URL)</label><input formControlName="trainingCertificatesUrl" /></div>
        </div>
        <div class="form-row">
          <div><label>Demande manuscrite (URL)</label><input formControlName="handwrittenRequestUrl" /></div>
          <div><label>Lieu souhaité</label><input formControlName="desiredLocation" /></div>
        </div>
        <label>Date souhaitée</label>
        <input type="datetime-local" formControlName="desiredDateTime" />
        <div class="form-row">
          <div>
            <label>Date d'inscription initiale</label>
            <input type="date" formControlName="initialEnrollmentDate" />
          </div>
          <div style="display:flex; align-items:center; gap:6px; margin-top:22px;">
            <input type="checkbox" formControlName="derogationApproved" style="width:auto;" /> <span>Dérogation approuvée</span>
          </div>
        </div>

        <div class="panel" style="margin-top:16px; background: var(--card);">
          <div class="flex" style="justify-content: space-between; align-items:center; gap:8px;">
            <h4 style="margin:0;">Jury (optionnel)</h4>
            <button type="button" (click)="addJury()" style="padding:8px 10px;">+ Ajouter</button>
          </div>
          <div *ngIf="juryControls.length === 0" class="muted" style="margin-top:6px;">Aucun membre ajouté.</div>
          <div *ngFor="let group of juryControls; let i = index" class="card" style="margin-top:8px; background:var(--panel);">
            <div class="form-row">
              <div><label>Nom complet</label><input [formControl]="group.controls.fullName" /></div>
              <div><label>Rôle</label>
                <select [formControl]="group.controls.role">
                  <option *ngFor="let role of juryRoles" [value]="role">{{ role }}</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div><label>Email</label><input [formControl]="group.controls.email" /></div>
              <div><label>Institution</label><input [formControl]="group.controls.institution" /></div>
              <div style="display:flex; align-items:center; gap:6px; margin-top:10px;">
                <input type="checkbox" [formControl]="group.controls.external" style="width:auto;" /> <span>Externe</span>
              </div>
            </div>
            <div class="flex"><button type="button" (click)="removeJury(i)" style="background:#b95858; color:#fff;">Supprimer</button></div>
          </div>
        </div>

        <div class="flex" style="margin-top:12px; gap:10px;">
          <button type="submit" [disabled]="createForm.invalid || loading">Soumettre</button>
          <span *ngIf="formMessage" class="badge">{{ formMessage }}</span>
        </div>
      </form>
    </div>

    <div class="panel" *ngIf="soutenances.length">
      <h3 style="margin-top:0;">Suivi</h3>
      <div class="stat-grid">
        <div class="stat" *ngFor="let s of soutenances">
          <strong>{{ s.thesisTitle }}</strong>
          <div class="badge" style="margin:4px 0 8px 0;">{{ s.status }}</div>
          <p class="muted" *ngIf="s.requestedDateTime"><strong>Souhaitée:</strong> {{ s.requestedDateTime }}</p>
          <p class="muted" *ngIf="s.scheduledDateTime"><strong>Planifiée:</strong> {{ s.scheduledDateTime }} &#64; {{ s.location || '—' }}</p>
          <p class="muted"><strong>Prérequis:</strong> {{ s.prerequisitesValid ? 'OK' : 'En attente' }}</p>
          <div class="flex" style="gap:8px; flex-wrap:wrap; margin-top:6px;">
            <button type="button" (click)="loadDetails(s)" style="background:#3c5d8b; color:#e7ecf7;">Détails</button>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="soutenances.length === 0 && !loading">
      <p class="muted">Aucune soutenance pour l'instant. Soumettez un dossier pour commencer.</p>
    </div>
  `
})
export class SoutenancesComponent implements OnInit {
  me: AccountResponse | null = null;
  soutenances: SoutenanceResponse[] = [];
  loading = false;
  feedback = '';
  formMessage = '';
  scheduleTarget: string | null = null;

  createForm = this.fb.group({
    thesisTitle: ['', Validators.required],
    thesisSummary: [''],
    handwrittenRequestUrl: ['', Validators.required],
    manuscriptUrl: ['', Validators.required],
    antiPlagiarismReportUrl: ['', Validators.required],
    publicationsReportUrl: ['', Validators.required],
    trainingCertificatesUrl: ['', Validators.required],
    publicationsCount: [2, Validators.required],
    publicationsQ1Q2Count: [2, Validators.required],
    conferencesCount: [2, Validators.required],
    trainingHours: [200, Validators.required],
    initialEnrollmentDate: ['', Validators.required],
    derogationApproved: [false],
    desiredDateTime: [''],
    desiredLocation: [''],
    jury: this.fb.array([])
  });

  scheduleForm = this.fb.group({
    location: ['', Validators.required],
    when: ['', Validators.required]
  });

  juryRoles: JuryRole[] = ['PRESIDENT', 'RAPPORTEUR', 'EXAMINATEUR', 'INVITE'];

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.loadMe();
  }

  get juryControls() {
    return (this.createForm.get('jury') as FormArray).controls;
  }

  addJury() {
    const group = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      institution: [''],
      role: ['PRESIDENT', Validators.required],
      external: [false]
    });
    (this.createForm.get('jury') as FormArray).push(group);
  }

  removeJury(index: number) {
    (this.createForm.get('jury') as FormArray).removeAt(index);
  }

  loadMe() {
    this.loading = true;
    this.api.me().subscribe({
      next: me => {
        this.me = me;
        this.loading = false;
        this.refresh();
      },
      error: () => {
        this.me = null;
        this.loading = false;
      }
    });
  }

  refresh() {
    if (!this.me) return;
    this.loading = true;
    this.api.listSoutenancesForDoctorant(this.me.id).subscribe({
      next: list => {
        this.soutenances = list;
        this.feedback = 'Mis à jour';
        this.loading = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de chargement';
        this.loading = false;
      }
    });
  }

  submit() {
    if (!this.me || this.createForm.invalid) return;
    this.loading = true;
    this.formMessage = '';

    const juryPayload: JuryMember[] = (this.createForm.get('jury') as FormArray).value || [];
    const payload: CreateSoutenanceRequest = {
      ...this.createForm.value,
      doctorantAccountId: this.me.id,
      doctorantEmail: this.me.email,
      jury: juryPayload
    } as CreateSoutenanceRequest;

    this.api.createSoutenance(payload).subscribe({
      next: res => {
        this.formMessage = 'Soutenance soumise';
        this.loading = false;
        this.createForm.reset({
          thesisTitle: '',
          thesisSummary: '',
          handwrittenRequestUrl: '',
          manuscriptUrl: '',
          antiPlagiarismReportUrl: '',
          publicationsReportUrl: '',
          trainingCertificatesUrl: '',
          publicationsCount: 2,
          conferencesCount: 2,
          trainingHours: 200,
          desiredDateTime: '',
          desiredLocation: '',
          jury: []
        });
        (this.createForm.get('jury') as FormArray).clear();
        this.soutenances = [res, ...this.soutenances];
      },
      error: err => {
        this.formMessage = err.error?.message || 'Erreur de soumission';
        this.loading = false;
      }
    });
  }

  canSchedule(s: SoutenanceResponse): boolean {
    return (s.status === 'APPROVED' || s.status === 'SCHEDULED') && !!(s as any).authorized && !!(s as any).juryValidated;
  }

  selectSchedule(s: SoutenanceResponse) {
    this.scheduleTarget = s.id;
    this.scheduleForm.reset({
      location: s.location || s.requestedLocation || '',
      when: s.scheduledDateTime || ''
    });
  }

  cancelSchedule() {
    this.scheduleTarget = null;
  }

  submitSchedule(s: SoutenanceResponse) {
    if (!this.scheduleTarget || this.scheduleForm.invalid) return;
    const body: ScheduleSoutenanceRequest = {
      location: this.scheduleForm.value.location || '',
      when: this.scheduleForm.value.when || ''
    };
    this.loading = true;
    this.api.scheduleSoutenance(s.id, body).subscribe({
      next: updated => {
        this.replaceSoutenance(updated);
        this.loading = false;
        this.scheduleTarget = null;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de planification';
        this.loading = false;
      }
    });
  }

  loadDetails(s: SoutenanceResponse) {
    this.api.getSoutenance(s.id).subscribe({
      next: full => this.replaceSoutenance(full),
      error: () => {}
    });
  }

  private replaceSoutenance(updated: SoutenanceResponse) {
    const idx = this.soutenances.findIndex(x => x.id === updated.id);
    if (idx >= 0) {
      const copy = [...this.soutenances];
      copy[idx] = updated;
      this.soutenances = copy;
    }
  }
}
