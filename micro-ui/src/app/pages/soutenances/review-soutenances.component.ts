import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { 
  RapporteurReportRequest, 
  ScheduleSoutenanceRequest, 
  SetResultRequest, 
  SoutenanceResponse, 
  SoutenanceResult, 
  SoutenanceStatus 
} from '../../core/models';

@Component({
  standalone: true,
  selector: 'app-review-soutenances',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="panel">
      <div class="flex" style="justify-content: space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h2 style="margin:0;">Revue des soutenances</h2>
          <p class="muted">Valider / rejeter les dossiers, gérer les rapports et planifier.</p>
        </div>
        <div class="flex" style="gap:8px;">
          <select [(ngModel)]="selectedStatus" (change)="load()" style="padding:6px;">
            <option *ngFor="let st of statusOptions" [value]="st">{{ st }}</option>
          </select>
          <button type="button" (click)="load()" [disabled]="loading">Rafraichir</button>
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
          <p class="muted" *ngIf="s.requestedDateTime"><strong>Souhaitée:</strong> {{ s.requestedDateTime }}</p>
          <p class="muted"><strong>Docs OK:</strong> {{ s.prerequisitesValid ? 'Oui' : 'Non' }}</p>
          <p class="muted"><strong>Jury validé:</strong> {{ s.juryValidated ? 'Oui' : 'Non' }}</p>
          
          <!-- Director approval status -->
          <p class="muted">
            <strong>Directeur:</strong> 
            <span *ngIf="s.directorApproved" style="color:#5d9c6d;">✓ Approuvé</span>
            <span *ngIf="!s.directorApproved && s.directorApprovalDate" style="color:#b95858;">✗ Rejeté</span>
            <span *ngIf="!s.directorApprovalDate">En attente</span>
          </p>

          <!-- Rapporteurs status -->
          <p class="muted">
            <strong>Rapporteurs:</strong>
            <span *ngIf="s.allRapporteursFavorable" style="color:#5d9c6d;">✓ Tous favorables</span>
            <span *ngIf="!s.allRapporteursFavorable">
              R1: {{ s.rapporteur1Favorable === true ? '✓' : s.rapporteur1Favorable === false ? '✗' : '?' }} |
              R2: {{ s.rapporteur2Favorable === true ? '✓' : s.rapporteur2Favorable === false ? '✗' : '?' }}
            </span>
          </p>

          <!-- Result -->
          <p class="muted" *ngIf="s.result">
            <strong>Résultat:</strong> 
            <span class="badge" style="background:#5d9c6d; color:#0e1a11;">{{ formatResult(s.result) }}</span>
          </p>

          <!-- 6-year limit alert -->
          <p *ngIf="s.approachingSixYearLimit" class="badge" style="background:#e0a546; color:#2c1e07; margin-top:8px;">
            ⚠️ Approche limite 6 ans
          </p>

          <p class="muted" *ngIf="s.authorizationDocumentUrl"><strong>Autorisation:</strong> <a [href]="s.authorizationDocumentUrl" target="_blank">document</a></p>
          
          <div class="flex" style="gap:6px; flex-wrap:wrap; margin-top:6px;">
            <button type="button" (click)="setStatus(s, 'UNDER_REVIEW')" *ngIf="canMove(s,'UNDER_REVIEW')">Prendre en revue</button>
            <button type="button" (click)="setStatus(s, 'APPROVED')" *ngIf="canMove(s,'APPROVED')" style="background:#5d9c6d; color:#0e1a11;">Approuver</button>
            <button type="button" (click)="setStatus(s, 'REJECTED')" *ngIf="canMove(s,'REJECTED')" style="background:#b95858; color:#fff;">Rejeter</button>
            <button type="button" (click)="validateJury(s)" *ngIf="canValidateJury(s)" style="background:#4a85c2; color:#e7ecf7;">Valider jury</button>
            
            <!-- Rapporteur report button -->
            <button type="button" (click)="openRapporteurDialog(s)" *ngIf="canSubmitRapporteurReport(s)" style="background:#8b5d9c; color:#fff;">
              Soumettre rapport
            </button>
            
            <ng-container *ngIf="canAuthorize(s)">
              <input [(ngModel)]="authDocs[s.id]" placeholder="Lien autorisation" style="padding:6px; min-width:180px;" />
              <button type="button" (click)="authorize(s)" style="background:#e0a546; color:#2c1e07;">Autoriser</button>
            </ng-container>
            <button type="button" (click)="selectSchedule(s)" *ngIf="canSchedule(s)" style="background:#3c5d8b; color:#e7ecf7;">Planifier</button>
            
            <!-- Set result button -->
            <button type="button" (click)="openResultDialog(s)" *ngIf="canSetResult(s)" style="background:#5d9c6d; color:#0e1a11;">
              Définir résultat
            </button>
          </div>

          <!-- Schedule dialog -->
          <div class="card" *ngIf="scheduleTarget === s.id" style="margin-top:10px; background:var(--panel);">
            <h4 style="margin-top:0;">Planifier</h4>
            <form [formGroup]="scheduleForm" (ngSubmit)="submitSchedule(s)">
              <label>Lieu</label>
              <input formControlName="location" />
              <label>Date/heure</label>
              <input type="datetime-local" formControlName="when" />
              <div class="flex" style="margin-top:10px;">
                <button type="submit" [disabled]="scheduleForm.invalid || loading">Valider</button>
                <button type="button" (click)="cancelSchedule()" style="background:#555; color:#eee;">Annuler</button>
              </div>
            </form>
          </div>

          <!-- Rapporteur report dialog -->
          <div class="card" *ngIf="rapporteurTarget === s.id" style="margin-top:10px; background:var(--panel);">
            <h4 style="margin-top:0;">Rapport du rapporteur</h4>
            <form [formGroup]="rapporteurForm" (ngSubmit)="submitRapporteurReport(s)">
              <label>Numéro du rapporteur</label>
              <select formControlName="rapporteurNumber">
                <option [value]="1">Rapporteur 1</option>
                <option [value]="2">Rapporteur 2</option>
              </select>
              <label>URL du rapport</label>
              <input formControlName="reportUrl" placeholder="https://..." />
              <div style="display:flex; align-items:center; gap:8px; margin:10px 0;">
                <input type="checkbox" formControlName="favorable" style="width:auto;" />
                <span>Avis favorable</span>
              </div>
              <label>Commentaires (optionnel)</label>
              <textarea formControlName="comments" rows="2" style="width:100%;"></textarea>
              <div class="flex" style="margin-top:10px; gap:8px;">
                <button type="submit" [disabled]="rapporteurForm.invalid || loading">Soumettre</button>
                <button type="button" (click)="cancelRapporteur()" style="background:#555; color:#eee;">Annuler</button>
              </div>
            </form>
          </div>

          <!-- Result dialog -->
          <div class="card" *ngIf="resultTarget === s.id" style="margin-top:10px; background:var(--panel);">
            <h4 style="margin-top:0;">Définir le résultat de la soutenance</h4>
            <form [formGroup]="resultForm" (ngSubmit)="submitResult(s)">
              <label>Mention</label>
              <select formControlName="result">
                <option *ngFor="let r of resultOptions" [value]="r.value">{{ r.label }}</option>
              </select>
              <label>Commentaires (optionnel)</label>
              <textarea formControlName="comments" rows="2" style="width:100%;"></textarea>
              <div class="flex" style="margin-top:10px; gap:8px;">
                <button type="submit" [disabled]="resultForm.invalid || loading">Enregistrer</button>
                <button type="button" (click)="cancelResult()" style="background:#555; color:#eee;">Annuler</button>
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
export class ReviewSoutenancesComponent implements OnInit {
  items: SoutenanceResponse[] = [];
  loading = false;
  feedback = '';
  isError = false;
  scheduleTarget: string | null = null;
  rapporteurTarget: string | null = null;
  resultTarget: string | null = null;
  selectedStatus: SoutenanceStatus | string = 'SUBMITTED';
  statusOptions: SoutenanceStatus[] = ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'SCHEDULED', 'DEFENDED'];
  authDocs: Record<string, string> = {};

  resultOptions: { value: SoutenanceResult; label: string }[] = [
    { value: 'TRES_HONORABLE_AVEC_FELICITATIONS', label: 'Très Honorable avec Félicitations' },
    { value: 'TRES_HONORABLE', label: 'Très Honorable' },
    { value: 'HONORABLE', label: 'Honorable' },
    { value: 'AJOURNE', label: 'Ajourné' }
  ];

  scheduleForm = this.fb.group({
    location: ['', Validators.required],
    when: ['', Validators.required]
  });

  rapporteurForm = this.fb.group({
    rapporteurNumber: [1, Validators.required],
    reportUrl: ['', Validators.required],
    favorable: [true],
    comments: ['']
  });

  resultForm = this.fb.group({
    result: ['TRES_HONORABLE' as SoutenanceResult, Validators.required],
    comments: ['']
  });

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.feedback = '';
    this.isError = false;
    this.api.listSoutenancesByStatus(this.selectedStatus).subscribe({
      next: list => {
        this.items = list;
        this.loading = false;
        this.feedback = '';
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de chargement';
        this.isError = true;
        this.loading = false;
      }
    });
  }

  canMove(s: SoutenanceResponse, target: SoutenanceStatus) {
    if (target === 'UNDER_REVIEW') return s.status === 'SUBMITTED';
    if (target === 'APPROVED') return s.status === 'UNDER_REVIEW';
    if (target === 'REJECTED') return s.status === 'SUBMITTED' || s.status === 'UNDER_REVIEW';
    return false;
  }

  setStatus(s: SoutenanceResponse, status: SoutenanceStatus) {
    this.loading = true;
    this.api.updateSoutenanceStatus(s.id, { newStatus: status }).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de mise à jour';
        this.isError = true;
        this.loading = false;
      }
    });
  }

  canSchedule(s: SoutenanceResponse) {
    return (s.status === 'APPROVED' || s.status === 'SCHEDULED') && s.authorized && s.juryValidated;
  }

  canAuthorize(s: SoutenanceResponse) {
    // Authorization requires director approval and all rapporteurs favorable
    return (s.status === 'APPROVED' || s.status === 'SCHEDULED') 
      && !s.authorized 
      && s.directorApproved 
      && s.allRapporteursFavorable;
  }

  canValidateJury(s: SoutenanceResponse) {
    return !s.juryValidated && (s.status === 'UNDER_REVIEW' || s.status === 'APPROVED' || s.status === 'SCHEDULED');
  }

  canSubmitRapporteurReport(s: SoutenanceResponse) {
    return s.directorApproved && (s.status === 'UNDER_REVIEW' || s.status === 'APPROVED');
  }

  canSetResult(s: SoutenanceResponse) {
    return s.status === 'DEFENDED' && !s.result;
  }

  formatResult(result: SoutenanceResult): string {
    const map: Record<SoutenanceResult, string> = {
      'TRES_HONORABLE_AVEC_FELICITATIONS': 'Très Honorable avec Félicitations',
      'TRES_HONORABLE': 'Très Honorable',
      'HONORABLE': 'Honorable',
      'AJOURNE': 'Ajourné'
    };
    return map[result] || result;
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
        this.replace(updated);
        this.loading = false;
        this.scheduleTarget = null;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de planification';
        this.loading = false;
      }
    });
  }

  authorize(s: SoutenanceResponse) {
    this.loading = true;
    this.api.authorizeSoutenance(s.id, this.authDocs[s.id]).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
      },
      error: err => {
        this.feedback = err.error?.message || "Erreur lors de l'autorisation";
        this.loading = false;
      }
    });
  }

  validateJury(s: SoutenanceResponse) {
    this.loading = true;
    this.api.validateJury(s.id).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur validation jury';
        this.isError = true;
        this.loading = false;
      }
    });
  }

  // Rapporteur report dialog
  openRapporteurDialog(s: SoutenanceResponse) {
    this.rapporteurTarget = s.id;
    this.rapporteurForm.reset({
      rapporteurNumber: 1,
      reportUrl: '',
      favorable: true,
      comments: ''
    });
  }

  cancelRapporteur() {
    this.rapporteurTarget = null;
  }

  submitRapporteurReport(s: SoutenanceResponse) {
    if (this.rapporteurForm.invalid) return;
    const body: RapporteurReportRequest = {
      rapporteurNumber: Number(this.rapporteurForm.value.rapporteurNumber) as 1 | 2,
      reportUrl: this.rapporteurForm.value.reportUrl || '',
      favorable: this.rapporteurForm.value.favorable || false,
      comments: this.rapporteurForm.value.comments || undefined
    };
    this.loading = true;
    this.api.submitRapporteurReport(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.rapporteurTarget = null;
        this.feedback = 'Rapport soumis avec succès';
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur soumission rapport';
        this.isError = true;
        this.loading = false;
      }
    });
  }

  // Result dialog
  openResultDialog(s: SoutenanceResponse) {
    this.resultTarget = s.id;
    this.resultForm.reset({
      result: 'TRES_HONORABLE',
      comments: ''
    });
  }

  cancelResult() {
    this.resultTarget = null;
  }

  submitResult(s: SoutenanceResponse) {
    if (this.resultForm.invalid) return;
    const body: SetResultRequest = {
      result: this.resultForm.value.result as SoutenanceResult,
      comments: this.resultForm.value.comments || undefined
    };
    this.loading = true;
    this.api.setResult(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.resultTarget = null;
        this.feedback = 'Résultat enregistré';
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur enregistrement résultat';
        this.isError = true;
        this.loading = false;
      }
    });
  }

  private replace(updated: SoutenanceResponse) {
    const idx = this.items.findIndex(x => x.id === updated.id);
    if (idx >= 0) {
      const copy = [...this.items];
      copy[idx] = updated;
      this.items = copy;
    }
  }
}
