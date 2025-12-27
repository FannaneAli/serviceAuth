import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/api.service';
import { AccountResponse } from '../../core/models';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>Comptes en attente</h2>
      <p *ngIf="!isSuperuser">Accès réservé au SUPERUSER.</p>
      <div *ngIf="isSuperuser">
        <button (click)="load()" style="margin-bottom:12px;">Rafraîchir</button>
        <div *ngIf="pending.length === 0">Aucune demande.</div>
        <div *ngFor="let acc of pending" class="card" style="padding:12px; margin-bottom:10px;">
          <div><strong>{{acc.username}}</strong> ({{acc.email}}) - rôle: {{acc.primaryRole}}</div>
          <div class="flex" style="gap:8px; margin-top:8px;">
            <button (click)="approve(acc.id)">Approuver</button>
            <button (click)="reject(acc.id)" style="background:#ef4444; color:white;">Rejeter</button>
          </div>
        </div>
        <span *ngIf="message" class="badge">{{message}}</span>
      </div>
    </div>
  `
})
export class AdminComponent implements OnInit {
  pending: AccountResponse[] = [];
  message = '';
  isSuperuser = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.isSuperuser = localStorage.getItem('role') === 'SUPERUSER';
    if (this.isSuperuser) {
      this.load();
    }
  }

  load() {
    this.api.listPendingAccounts().subscribe({
      next: res => { this.pending = res; },
      error: err => { this.message = err.error?.message || 'Erreur chargement'; }
    });
  }

  approve(id: string) {
    this.api.approveAccount(id).subscribe({
      next: () => { this.message = 'Compte approuvé'; this.load(); },
      error: err => { this.message = err.error?.message || 'Erreur approbation'; }
    });
  }

  reject(id: string) {
    this.api.rejectAccount(id).subscribe({
      next: () => { this.message = 'Compte rejeté'; this.load(); },
      error: err => { this.message = err.error?.message || 'Erreur rejet'; }
    });
  }
}
