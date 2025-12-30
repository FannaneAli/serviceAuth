import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { ScheduleSoutenanceRequest, SoutenanceResponse, SoutenanceStatus } from '../../core/models';

@Component({
  standalone: true,
  selector: 'app-review-soutenances',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="panel">
      <div class="flex" style="justify-content: space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h2 style="margin:0;">Revue des soutenances</h2>
          <p class="muted">Valider / rejeter les dossiers, valider le jury et planifier.</p>
        </div>
        <div class="flex" style="gap:8px;">
          <select [(ngModel)]="selectedStatus" (change)="load()" style="padding:6px;">
            <option *ngFor="let st of statusOptions" [value]="st">{{ st }}</option>
          </select>
          <button type="button" (click)="load()" [disabled]="loading">Rafraichir</button>
          <span *ngIf="feedback" class="badge">{{ feedback }}</span>
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="items.length">
      <div class="stat-grid">
        <div class="stat" *ngFor="let s of items">
          <strong>{{ s.thesisTitle }}</strong>
          <div class="badge" style="margin:4px 0 8px 0;">{{ s.status }}</div>
          <p class="muted"><strong>Doctorant:</strong> {{ s.doctorantAccountId }}</p>
          <p class="muted" *ngIf="s.requestedDateTime"><strong>Souhaitée:</strong> {{ s.requestedDateTime }}</p>
          <p class="muted"><strong>Docs OK:</strong> {{ s.prerequisitesValid ? 'Oui' : 'Non' }}</p>
          <p class="muted"><strong>Jury validé:</strong> {{ s.juryValidated ? 'Oui' : 'Non' }}</p>
          <p class="muted" *ngIf="s.authorizationDocumentUrl"><strong>Autorisation:</strong> <a [href]="s.authorizationDocumentUrl" target="_blank">document</a></p>
          <div class="flex" style="gap:6px; flex-wrap:wrap; margin-top:6px;">
            <button type="button" (click)="setStatus(s, 'UNDER_REVIEW')" *ngIf="canMove(s,'UNDER_REVIEW')">Prendre en revue</button>
            <button type="button" (click)="setStatus(s, 'APPROVED')" *ngIf="canMove(s,'APPROVED')" style="background:#5d9c6d; color:#0e1a11;">Approuver</button>
            <button type="button" (click)="setStatus(s, 'REJECTED')" *ngIf="canMove(s,'REJECTED')" style="background:#b95858; color:#fff;">Rejeter</button>
            <button type="button" (click)="validateJury(s)" *ngIf="canValidateJury(s)" style="background:#4a85c2; color:#e7ecf7;">Valider jury</button>
            <ng-container *ngIf="canAuthorize(s)">
              <input [(ngModel)]="authDocs[s.id]" placeholder="Lien autorisation" style="padding:6px; min-width:180px;" />
              <button type="button" (click)="authorize(s)" style="background:#e0a546; color:#2c1e07;">Autoriser</button>
            </ng-container>
            <button type="button" (click)="selectSchedule(s)" *ngIf="canSchedule(s)" style="background:#3c5d8b; color:#e7ecf7;">Planifier</button>
          </div>

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
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="!items.length && !loading">
      <p class="muted">Aucune soutenance pour ce statut.</p>
    </div>
  `
})
export class ReviewSoutenancesComponent implements OnInit {
  items: SoutenanceResponse[] = [];
  loading = false;
  feedback = '';
  scheduleTarget: string | null = null;
  selectedStatus: SoutenanceStatus | string = 'SUBMITTED';
  statusOptions: SoutenanceStatus[] = ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'SCHEDULED'];
  authDocs: Record<string, string> = {};

  scheduleForm = this.fb.group({
    location: ['', Validators.required],
    when: ['', Validators.required]
  });

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.api.listSoutenancesByStatus(this.selectedStatus).subscribe({
      next: list => {
        this.items = list;
        this.loading = false;
        this.feedback = '';
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de chargement';
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
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de mise à jour';
        this.loading = false;
      }
    });
  }

  canSchedule(s: SoutenanceResponse) {
    return (s.status === 'APPROVED' || s.status === 'SCHEDULED') && !!(s as any).authorized && !!(s as any).juryValidated;
  }

  canAuthorize(s: SoutenanceResponse) {
    return (s.status === 'APPROVED' || s.status === 'SCHEDULED') && !(s as any).authorized;
  }

  canValidateJury(s: SoutenanceResponse) {
    return !s.juryValidated && (s.status === 'UNDER_REVIEW' || s.status === 'APPROVED' || s.status === 'SCHEDULED');
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
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur validation jury';
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
