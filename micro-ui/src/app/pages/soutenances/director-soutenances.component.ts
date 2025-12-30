import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import {
  DirectorApprovalRequest,
  JuryMember,
  JuryRole,
  SoutenanceResponse,
  SoutenanceStatus,
  UpdateJuryRequest
} from '../../core/models';

@Component({
  standalone: true,
  selector: 'app-director-soutenances',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="panel">
      <div class="flex" style="justify-content: space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h2 style="margin:0;">Gestion des soutenances (Directeur)</h2>
          <p class="muted">Approuver les demandes, proposer le jury et suivre les soutenances.</p>
        </div>
        <div class="flex" style="gap:8px;">
          <select [(ngModel)]="selectedStatus" (change)="load()" style="padding:6px;">
            <option *ngFor="let st of statusOptions" [value]="st">{{ st }}</option>
          </select>
          <button type="button" (click)="load()" [disabled]="loading">Rafraîchir</button>
          <span *ngIf="feedback" class="badge" [class.error]="isError">{{ feedback }}</span>
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="items.length">
      <div class="stat-grid">
        <div class="stat" *ngFor="let s of items">
          <strong>{{ s.thesisTitle }}</strong>
          <div class="badge" style="margin:4px 0 8px 0;">{{ s.status }}</div>
          <p class="muted"><strong>Doctorant:</strong> {{ s.doctorantEmail || s.doctorantAccountId }}</p>
          <p class="muted" *ngIf="s.requestedDateTime"><strong>Souhaitée:</strong> {{ s.requestedDateTime | date:'medium' }}</p>
          <p class="muted"><strong>Prérequis:</strong> {{ s.prerequisitesValid ? 'OK' : 'En attente' }}</p>
          
          <!-- Director approval status -->
          <p class="muted">
            <strong>Approbation directeur:</strong> 
            <span *ngIf="s.directorApproved" style="color:#5d9c6d;">✓ Approuvé</span>
            <span *ngIf="!s.directorApproved && s.directorApprovalDate" style="color:#b95858;">✗ Rejeté</span>
            <span *ngIf="!s.directorApprovalDate">En attente</span>
          </p>

          <!-- Rapporteur reports status -->
          <div *ngIf="s.directorApproved" style="margin-top:8px; padding:8px; background:var(--panel); border-radius:6px;">
            <strong>Rapports des rapporteurs:</strong>
            <p class="muted" style="margin:4px 0;">
              Rapporteur 1: 
              <span *ngIf="s.rapporteur1Favorable === true" style="color:#5d9c6d;">✓ Favorable</span>
              <span *ngIf="s.rapporteur1Favorable === false" style="color:#b95858;">✗ Défavorable</span>
              <span *ngIf="s.rapporteur1Favorable === null || s.rapporteur1Favorable === undefined">En attente</span>
            </p>
            <p class="muted" style="margin:4px 0;">
              Rapporteur 2: 
              <span *ngIf="s.rapporteur2Favorable === true" style="color:#5d9c6d;">✓ Favorable</span>
              <span *ngIf="s.rapporteur2Favorable === false" style="color:#b95858;">✗ Défavorable</span>
              <span *ngIf="s.rapporteur2Favorable === null || s.rapporteur2Favorable === undefined">En attente</span>
            </p>
          </div>

          <!-- Alert for 6-year limit -->
          <p *ngIf="s.approachingSixYearLimit" class="badge" style="background:#e0a546; color:#2c1e07; margin-top:8px;">
            ⚠️ Approche limite 6 ans
          </p>

          <div class="flex" style="gap:6px; flex-wrap:wrap; margin-top:10px;">
            <!-- Director approval buttons -->
            <ng-container *ngIf="canApprove(s)">
              <button type="button" (click)="openApprovalDialog(s)" style="background:#5d9c6d; color:#0e1a11;">
                Approuver / Rejeter
              </button>
            </ng-container>

            <!-- Propose jury button -->
            <button type="button" (click)="openJuryDialog(s)" *ngIf="canProposeJury(s)" style="background:#3c5d8b; color:#e7ecf7;">
              Proposer Jury
            </button>

            <!-- View details -->
            <button type="button" (click)="toggleDetails(s)" style="background:#555; color:#eee;">
              {{ expandedId === s.id ? 'Masquer' : 'Détails' }}
            </button>
          </div>

          <!-- Details panel -->
          <div *ngIf="expandedId === s.id" class="card" style="margin-top:10px; background:var(--panel);">
            <h4 style="margin-top:0;">Détails</h4>
            <p class="muted"><strong>Publications:</strong> {{ s.publicationsCount }} (Q1/Q2: {{ s.publicationsQ1Q2Count }})</p>
            <p class="muted"><strong>Conférences:</strong> {{ s.conferencesCount }}</p>
            <p class="muted"><strong>Heures formation:</strong> {{ s.trainingHours }}</p>
            <p class="muted" *ngIf="s.manuscriptUrl"><strong>Manuscrit:</strong> <a [href]="s.manuscriptUrl" target="_blank">Voir</a></p>
            <p class="muted" *ngIf="s.antiPlagiarismReportUrl"><strong>Anti-plagiat:</strong> <a [href]="s.antiPlagiarismReportUrl" target="_blank">Voir</a></p>
            <p class="muted" *ngIf="s.directorComments"><strong>Commentaires directeur:</strong> {{ s.directorComments }}</p>

            <!-- Jury list -->
            <div *ngIf="s.jury?.length" style="margin-top:10px;">
              <strong>Jury proposé:</strong>
              <ul>
                <li *ngFor="let j of s.jury">{{ j.fullName }} - {{ j.role }} {{ j.external ? '(externe)' : '' }}</li>
              </ul>
            </div>
          </div>

          <!-- Approval dialog -->
          <div *ngIf="approvalTarget === s.id" class="card" style="margin-top:10px; background:var(--card);">
            <h4 style="margin-top:0;">Approbation du directeur</h4>
            <form [formGroup]="approvalForm" (ngSubmit)="submitApproval(s)">
              <label>Commentaires (optionnel)</label>
              <textarea formControlName="comments" rows="3" style="width:100%;"></textarea>
              <div class="flex" style="margin-top:10px; gap:8px;">
                <button type="button" (click)="approve(s, true)" [disabled]="loading" style="background:#5d9c6d; color:#0e1a11;">
                  ✓ Approuver
                </button>
                <button type="button" (click)="approve(s, false)" [disabled]="loading" style="background:#b95858; color:#fff;">
                  ✗ Rejeter
                </button>
                <button type="button" (click)="closeApprovalDialog()" style="background:#555; color:#eee;">Annuler</button>
              </div>
            </form>
          </div>

          <!-- Jury dialog -->
          <div *ngIf="juryTarget === s.id" class="card" style="margin-top:10px; background:var(--card);">
            <h4 style="margin-top:0;">Proposer les membres du jury</h4>
            <form [formGroup]="juryForm" (ngSubmit)="submitJury(s)">
              <div class="flex" style="justify-content: space-between; align-items:center; margin-bottom:8px;">
                <span>Membres du jury</span>
                <button type="button" (click)="addJuryMember()" style="padding:6px 10px;">+ Ajouter</button>
              </div>
              <div *ngIf="juryControls.length === 0" class="muted">Aucun membre. Cliquez sur + Ajouter.</div>
              <div *ngFor="let group of juryControls; let i = index" style="margin-bottom:10px; padding:10px; background:var(--panel); border-radius:6px;">
                <div class="form-row">
                  <div><label>Nom complet</label><input [formControl]="group.controls.fullName" /></div>
                  <div>
                    <label>Rôle</label>
                    <select [formControl]="group.controls.role">
                      <option *ngFor="let role of juryRoles" [value]="role">{{ role }}</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div><label>Email</label><input [formControl]="group.controls.email" /></div>
                  <div><label>Institution</label><input [formControl]="group.controls.institution" /></div>
                  <div style="display:flex; align-items:center; gap:6px; margin-top:22px;">
                    <input type="checkbox" [formControl]="group.controls.external" style="width:auto;" />
                    <span>Externe</span>
                  </div>
                </div>
                <button type="button" (click)="removeJuryMember(i)" style="background:#b95858; color:#fff; margin-top:6px;">
                  Supprimer
                </button>
              </div>
              <div class="flex" style="margin-top:10px; gap:8px;">
                <button type="submit" [disabled]="juryForm.invalid || loading">Enregistrer</button>
                <button type="button" (click)="closeJuryDialog()" style="background:#555; color:#eee;">Annuler</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="!items.length && !loading">
      <p class="muted">Aucune soutenance pour ce statut.</p>
    </div>
  `,
  styles: [`
    .error { background: #b95858 !important; color: #fff !important; }
  `]
})
export class DirectorSoutenancesComponent implements OnInit {
  items: SoutenanceResponse[] = [];
  loading = false;
  feedback = '';
  isError = false;
  expandedId: string | null = null;
  approvalTarget: string | null = null;
  juryTarget: string | null = null;
  selectedStatus: SoutenanceStatus | string = 'SUBMITTED';
  statusOptions: SoutenanceStatus[] = ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'SCHEDULED', 'DEFENDED'];

  juryRoles: JuryRole[] = ['PRESIDENT', 'RAPPORTEUR', 'EXAMINATEUR', 'INVITE'];

  approvalForm = this.fb.group({
    comments: ['']
  });

  juryForm = this.fb.group({
    members: this.fb.array([])
  });

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.load();
  }

  get juryControls() {
    return (this.juryForm.get('members') as FormArray).controls as any[];
  }

  load() {
    this.loading = true;
    this.feedback = '';
    this.isError = false;
    this.api.listSoutenancesByStatus(this.selectedStatus).subscribe({
      next: list => {
        this.items = list;
        this.loading = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de chargement';
        this.isError = true;
        this.loading = false;
      }
    });
  }

  canApprove(s: SoutenanceResponse): boolean {
    return (s.status === 'SUBMITTED' || s.status === 'UNDER_REVIEW') && !s.directorApprovalDate;
  }

  canProposeJury(s: SoutenanceResponse): boolean {
    return s.directorApproved === true && (s.status === 'UNDER_REVIEW' || s.status === 'APPROVED');
  }

  toggleDetails(s: SoutenanceResponse) {
    this.expandedId = this.expandedId === s.id ? null : s.id;
  }

  openApprovalDialog(s: SoutenanceResponse) {
    this.approvalTarget = s.id;
    this.approvalForm.reset({ comments: '' });
  }

  closeApprovalDialog() {
    this.approvalTarget = null;
  }

  approve(s: SoutenanceResponse, approved: boolean) {
    const body: DirectorApprovalRequest = {
      approved,
      comments: this.approvalForm.value.comments || undefined
    };
    this.loading = true;
    this.api.approveByDirector(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.approvalTarget = null;
        this.feedback = approved ? 'Soutenance approuvée' : 'Soutenance rejetée';
        this.isError = !approved;
      },
      error: err => {
        this.feedback = err.error?.message || "Erreur lors de l'approbation";
        this.isError = true;
        this.loading = false;
      }
    });
  }

  submitApproval(s: SoutenanceResponse) {
    // Not used directly, approval is done via approve() buttons
  }

  openJuryDialog(s: SoutenanceResponse) {
    this.juryTarget = s.id;
    const members = this.juryForm.get('members') as FormArray;
    members.clear();
    // Pre-populate with existing jury if any
    if (s.jury?.length) {
      s.jury.forEach(j => this.addJuryMemberWithData(j));
    }
  }

  closeJuryDialog() {
    this.juryTarget = null;
    (this.juryForm.get('members') as FormArray).clear();
  }

  addJuryMember() {
    const group = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      institution: [''],
      role: ['PRESIDENT', Validators.required],
      external: [false]
    });
    (this.juryForm.get('members') as FormArray).push(group);
  }

  addJuryMemberWithData(j: JuryMember) {
    const group = this.fb.group({
      fullName: [j.fullName, Validators.required],
      email: [j.email || ''],
      institution: [j.institution || ''],
      role: [j.role, Validators.required],
      external: [j.external || false]
    });
    (this.juryForm.get('members') as FormArray).push(group);
  }

  removeJuryMember(index: number) {
    (this.juryForm.get('members') as FormArray).removeAt(index);
  }

  submitJury(s: SoutenanceResponse) {
    const members: JuryMember[] = this.juryControls.map(g => ({
      fullName: g.value.fullName,
      email: g.value.email || undefined,
      institution: g.value.institution || undefined,
      role: g.value.role,
      external: g.value.external
    }));

    const body: UpdateJuryRequest = { members };
    this.loading = true;
    this.api.replaceJury(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.juryTarget = null;
        this.feedback = 'Jury proposé avec succès';
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur lors de la proposition du jury';
        this.isError = true;
        this.loading = false;
      }
    });
  }

  private replace(updated: SoutenanceResponse) {
    const idx = this.items.findIndex(i => i.id === updated.id);
    if (idx >= 0) {
      this.items[idx] = updated;
    }
  }
}
