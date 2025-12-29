import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { routeForRole } from '../../core/role-routing';
import { TranslatePipe } from '../../core/translate.pipe';
import { I18nService } from '../../core/i18n.service';
import { TopControlsComponent } from '../../core/top-controls.component';

type AuthMode = 'login' | 'register';

@Component({
  standalone: true,
  selector: 'app-auth-page',
  imports: [CommonModule, LoginComponent, RegisterComponent, TranslatePipe, TopControlsComponent],
  template: `
    <app-top-controls></app-top-controls>
    <div class="auth-shell single">
      <div class="auth-card">
        <div class="auth-hero hero-center">
          <img src="assets/logo.svg" alt="Logo" class="hero-logo" />
          <div class="hero-text">
            <h2 class="hero-signature">{{ 'common.heroTitle' | t }}</h2>
          </div>
          <div class="chip" *ngIf="role">Session: {{ role }}</div>
        </div>

        <div class="auth-form">
          <app-login *ngIf="mode==='login'"></app-login>
          <app-register *ngIf="mode==='register'"></app-register>
        </div>

        <div class="auth-toggle stacked">
          <span>{{ mode === 'login' ? ('common.noAccount' | t) : ('common.hasAccount' | t) }}</span>
          <button type="button" (click)="toggleMode()">{{ toggleLabel }}</button>
        </div>
      </div>
    </div>
  `
})
export class AuthPageComponent implements OnInit {
  role = localStorage.getItem('role');
  mode: AuthMode = 'login';

  constructor(private router: Router, private i18n: I18nService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access');
    const storedRole = localStorage.getItem('role');
    if (token && storedRole) {
      this.router.navigateByUrl(routeForRole(storedRole));
    }
  }

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }

  get toggleLabel(): string {
    return this.mode === 'login' ? this.i18n.translate('auth.registerCTA') : this.i18n.translate('auth.loginCTA');
  }
}
