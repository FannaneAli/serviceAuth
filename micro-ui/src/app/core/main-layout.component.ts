import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from './translate.pipe';
import { TopControlsComponent } from './top-controls.component';
import { ApiService } from './api.service';
import { interval, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, TranslatePipe, TopControlsComponent],
  template: `
    <app-top-controls></app-top-controls>
    <div class="shell top-shell">
      <nav class="top-nav">
        <div class="brand">
          <img src="assets/logo.svg" alt="Logo" class="brand-logo" />
        </div>
        <div class="nav-items">
          <a routerLink="/dashboard" class="nav-chip icon-only" aria-label="Dashboard">
            <span class="nav-icon">🏠</span>
            <span class="label">{{ 'nav.dashboard' | t }}</span>
          </a>
          <a *ngIf="role==='DOCTORANT'" routerLink="/soutenances" class="nav-chip icon-only" aria-label="Soutenances">
            <span class="nav-icon">🎓</span>
            <span class="label">Soutenances</span>
          </a>
          <a *ngIf="role==='DIRECTEUR'" routerLink="/soutenances/directeur" class="nav-chip icon-only" aria-label="Gestion soutenances">
            <span class="nav-icon">📋</span>
            <span class="label">Soutenances</span>
          </a>
          <a *ngIf="role==='ADMIN' || role==='SUPERUSER'" routerLink="/soutenances/revue" class="nav-chip icon-only" aria-label="Revue soutenances">
            <span class="nav-icon">✅</span>
            <span class="label">Revue sout.</span>
          </a>
          <a *ngIf="role==='DOCTORANT'" routerLink="/notifications" class="nav-chip icon-only notification-link" aria-label="Notifications">
            <span class="nav-icon">🔔</span>
            <span class="label">Notifications</span>
            <span *ngIf="unreadCount > 0" class="notif-badge">{{ unreadCount > 9 ? '9+' : unreadCount }}</span>
          </a>
          <a *ngIf="role==='DOCTORANT'" routerLink="/doctorant" class="nav-chip icon-only" aria-label="{{ 'nav.doctorant' | t }}">
            <span class="nav-icon">📘</span>
            <span class="label">{{ 'nav.doctorant' | t }}</span>
          </a>
          <a *ngIf="role==='DIRECTEUR'" routerLink="/encadrant" class="nav-chip icon-only" aria-label="{{ 'nav.encadrant' | t }}">
            <span class="nav-icon">🧑‍🏫</span>
            <span class="label">{{ 'nav.encadrant' | t }}</span>
          </a>
          <ng-container *ngIf="isSuperuser()">
            <a routerLink="/superuser" [queryParams]="{ section: 'overview' }" class="nav-chip icon-only" aria-label="Vue globale">
              <span class="nav-icon">📊</span><span class="label">Vue globale</span>
            </a>
            <a routerLink="/superuser" [queryParams]="{ section: 'accounts' }" class="nav-chip icon-only" aria-label="Tous les comptes">
              <span class="nav-icon">👥</span><span class="label">Tous les comptes</span>
            </a>
            <a routerLink="/superuser" [queryParams]="{ section: 'pending' }" class="nav-chip icon-only" aria-label="En attente">
              <span class="nav-icon">⏳</span><span class="label">En attente</span>
            </a>
            <a routerLink="/superuser" [queryParams]="{ section: 'admins' }" class="nav-chip icon-only" aria-label="Admins">
              <span class="nav-icon">🛡️</span><span class="label">Admins</span>
            </a>
            <a routerLink="/superuser" [queryParams]="{ section: 'structures' }" class="nav-chip icon-only" aria-label="Départements & Labos">
              <span class="nav-icon">🏢</span><span class="label">Départements & Labos</span>
            </a>
            <a routerLink="/superuser" [queryParams]="{ section: 'create' }" class="nav-chip icon-only" aria-label="Créer un admin">
              <span class="nav-icon">➕</span><span class="label">Créer un admin</span>
            </a>
          </ng-container>
        </div>
        <button class="logout" (click)="logout()">
          <span class="nav-icon">⎋</span>
        </button>
      </nav>

      <main class="content">
        <div class="topbar">
          <div class="title">{{ 'layout.portalTitle' | t }}</div>
        </div>

        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .notification-link {
      position: relative;
    }
    .notif-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #e0a546;
      color: #2c1e07;
      font-size: 10px;
      font-weight: bold;
      padding: 2px 5px;
      border-radius: 10px;
      min-width: 16px;
      text-align: center;
    }
  `]
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  unreadCount = 0;
  private refreshSub?: Subscription;
  private accountId?: string;

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    if (this.role === 'DOCTORANT') {
      this.loadUnreadCount();
      // Refresh every 60 seconds
      this.refreshSub = interval(60000).subscribe(() => this.loadUnreadCount());
    }
  }

  ngOnDestroy(): void {
    this.refreshSub?.unsubscribe();
  }

  loadUnreadCount(): void {
    this.api.me().subscribe({
      next: me => {
        this.accountId = me.id;
        this.api.getNotificationsForAccount(me.id).subscribe({
          next: list => {
            this.unreadCount = list.filter(n => n.status !== 'READ').length;
          }
        });
      }
    });
  }

  get role(): string | null {
    return localStorage.getItem('role');
  }

  isSuperuser(): boolean {
    return this.role === 'SUPERUSER';
  }

  isLogged(): boolean {
    return !!localStorage.getItem('access');
  }

  roleLabel(): string {
    return this.role || 'Invite';
  }

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/login');
  }
}
