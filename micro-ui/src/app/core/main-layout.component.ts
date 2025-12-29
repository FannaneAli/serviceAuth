import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from './translate.pipe';
import { TopControlsComponent } from './top-controls.component';

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
          <a *ngIf="role==='DOCTORANT'" routerLink="/doctorant" class="nav-chip icon-only" aria-label="{{ 'nav.doctorant' | t }}">
            <span class="nav-icon">🎓</span>
            <span class="label">{{ 'nav.doctorant' | t }}</span>
          </a>
          <a *ngIf="role==='DIRECTEUR'" routerLink="/encadrant" class="nav-chip icon-only" aria-label="{{ 'nav.encadrant' | t }}">
            <span class="nav-icon">🧭</span>
            <span class="label">{{ 'nav.encadrant' | t }}</span>
          </a>
          <ng-container *ngIf="isSuperuser()">
            <a routerLink="/superuser" [queryParams]="{ section: 'overview' }" class="nav-chip icon-only" aria-label="Vue globale">
              <span class="nav-icon">📊</span><span class="label">Vue globale</span>
            </a>
            <a routerLink="/superuser" [queryParams]="{ section: 'accounts' }" class="nav-chip icon-only" aria-label="Tous les comptes">
              <span class="nav-icon">📋</span><span class="label">Tous les comptes</span>
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
          <span class="nav-icon">↩</span>
        </button>
      </nav>

      <main class="content">
        <div class="topbar">
          <div class="title">{{ 'layout.portalTitle' | t }}</div>
        </div>

        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class MainLayoutComponent {
  constructor(private router: Router) {}

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
