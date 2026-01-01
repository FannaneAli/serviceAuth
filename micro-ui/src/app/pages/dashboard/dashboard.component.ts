import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { AccountResponse } from '../../core/models';
import { TranslatePipe } from '../../core/translate.pipe';
import { routeForRole } from '../../core/role-routing';
import { I18nService } from '../../core/i18n.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, TranslatePipe],
  template: `
    <div class="panel">
      <div class="flex" style="align-items:center; gap:8px; flex-wrap:wrap;">
        <h2>{{ 'layout.dashboard' | t }}</h2>
        <span *ngIf="me" class="badge">{{ me.primaryRole }}</span>
        <span *ngIf="me" class="badge">{{ me.status }}</span>
        <div class="flex" style="gap:8px; margin-left:auto;">
          <button type="button" (click)="refreshAccess()" [disabled]="!hasRefresh">{{ 'dashboard.session.refresh' | t }}</button>
          <button type="button" (click)="logout()">{{ 'dashboard.session.logout' | t }}</button>
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="me">
      <h3>{{ 'dashboard.account.title' | t }}</h3>
      <div class="stat-grid">
        <div class="stat">
          <div class="section-title">{{ 'dashboard.account.username' | t }}</div>
          <strong class="truncate">{{me.username}}</strong>
        </div>
        <div class="stat">
          <div class="section-title">{{ 'dashboard.account.email' | t }}</div>
          <strong class="truncate">{{me.email}}</strong>
        </div>
        <div class="stat">
          <div class="section-title">{{ 'dashboard.account.role' | t }}</div>
          <strong class="truncate">{{me.primaryRole}}</strong>
        </div>
        <div class="stat">
          <div class="section-title">{{ 'dashboard.account.status' | t }}</div>
          <strong class="truncate">{{me.status}}</strong>
        </div>
      </div>
      <p style="margin-top:8px;">
        <strong>{{ 'dashboard.account.profileCompleted' | t }}</strong>
        <span class="badge" [style.background]="me.profileCompleted ? '#14532d' : '#7f1d1d'" [style.color]="'#fef3c7'">
          {{ me.profileCompleted ? 'Oui' : 'Non' }}
        </span>
      </p>
      <div class="flex" style="margin-top:12px; gap:8px; align-items:center;">
        <a *ngIf="rolePath" [routerLink]="rolePath" class="nav-chip">{{ roleLabel }}</a>
        <span *ngIf="sessionMessage" class="badge">{{ sessionMessage }}</span>
      </div>
    </div>

    <div class="panel" *ngIf="!me">
      <p>Impossible de charger le compte. Merci de vous reconnecter.</p>
      <a routerLink="/login" class="nav-chip">{{ 'nav.login' | t }}</a>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  me: AccountResponse | null = null;
  sessionMessage = '';

  constructor(private api: ApiService, private router: Router, private i18n: I18nService) {}

  ngOnInit() {
    this.loadMe();
  }

  get hasRefresh(): boolean {
    return !!localStorage.getItem('refresh');
  }

  get rolePath(): string | null {
    return this.me ? routeForRole(this.me.primaryRole) : null;
  }

  get roleLabel(): string {
    if (!this.me) return '';
    switch (this.me.primaryRole) {
      case 'SUPERUSER':
        return this.i18n.translate('nav.superuser');
      case 'ADMIN':
        return this.i18n.translate('nav.admin');
      case 'DOCTORANT':
        return this.i18n.translate('nav.doctorant');
      case 'DIRECTEUR':
        return this.i18n.translate('nav.encadrant');
      default:
        return this.me.primaryRole;
    }
  }

  loadMe() {
    this.api.me().subscribe({
      next: res => {
        this.me = res;
        localStorage.setItem('role', res.primaryRole);
      },
      error: () => {
        this.me = null;
        this.sessionMessage = 'Session expiree';
      }
    });
  }

  refreshAccess() {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) return;
    this.api.refresh(refresh).subscribe({
      next: res => {
        localStorage.setItem('access', res.accessToken);
        localStorage.setItem('refresh', res.refreshToken);
        this.sessionMessage = 'Token rafraichi';
      },
      error: err => {
        this.sessionMessage = err.error?.message || 'Refresh echoue';
      }
    });
  }

  logout() {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.api.logout(refresh).subscribe({
      next: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.sessionMessage = 'Deconnecte';
        this.router.navigateByUrl('/login');
      },
      error: err => {
        this.sessionMessage = err.error?.message || 'Logout echoue';
      }
    });
  }
}
