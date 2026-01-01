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
          <a routerLink="/dashboard" class="nav-chip" [attr.aria-label]="'nav.dashboard' | t">
            <span class="nav-icon">D</span><span class="label">{{ 'nav.dashboard' | t }}</span>
          </a>
          <a *ngIf="role==='DOCTORANT'" routerLink="/doctorant" class="nav-chip" [attr.aria-label]="'nav.doctorant' | t">
            <span class="nav-icon">👤</span><span class="label">{{ 'nav.doctorant' | t }}</span>
          </a>
          <a *ngIf="role==='DOCTORANT'" routerLink="/soutenances" class="nav-chip" [attr.aria-label]="'Soutenances'">
            <span class="nav-icon">📚</span><span class="label">Soutenances</span>
          </a>
          <a *ngIf="role==='DIRECTEUR'" routerLink="/encadrant" class="nav-chip" [attr.aria-label]="'nav.encadrant' | t">
            <span class="nav-icon">👨‍🏫</span><span class="label">{{ 'nav.encadrant' | t }}</span>
          </a>
          <a *ngIf="role==='DIRECTEUR'" routerLink="/director-soutenances" class="nav-chip" [attr.aria-label]="'Soutenances'">
            <span class="nav-icon">📋</span><span class="label">Soutenances</span>
          </a>
          <a *ngIf="role==='ADMIN'" routerLink="/admin" class="nav-chip" [attr.aria-label]="'nav.admin' | t">
            <span class="nav-icon">⚙️</span><span class="label">{{ 'nav.admin' | t }}</span>
          </a>
          <a *ngIf="role==='ADMIN' || isSuperuser()" routerLink="/review-soutenances" class="nav-chip" [attr.aria-label]="'Review Soutenances'">
            <span class="nav-icon">✅</span><span class="label">Révision</span>
          </a>
          <a *ngIf="isSuperuser()" routerLink="/superuser" [queryParams]="{ section: 'overview' }" class="nav-chip" [attr.aria-label]="'nav.superuser' | t">
            <span class="nav-icon">🔑</span><span class="label">{{ 'nav.superuser' | t }}</span>
          </a>
          <a routerLink="/notifications" class="nav-chip" [attr.aria-label]="'Notifications'">
            <span class="nav-icon">🔔</span><span class="label">Notifs</span>
          </a>
        </div>
        <button class="logout" (click)="logout()">
          <span class="label">{{ 'nav.logout' | t }}</span>
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

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/login');
  }
}
