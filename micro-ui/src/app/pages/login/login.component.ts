import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { routeForRole } from '../../core/role-routing';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslatePipe],
  template: `
    <div class="card">
      <h2 class="center-text">{{ 'login.title' | t }}</h2>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <label>{{ 'login.usernameOrEmail' | t }}</label>
        <input formControlName="usernameOrEmail" />
        <label>{{ 'login.password' | t }}</label>
        <input type="password" formControlName="password" />
        <div class="flex center-row" style="margin-top:12px;">
          <button type="submit" [disabled]="form.invalid || loading">{{ 'login.submit' | t }}</button>
          <span *ngIf="error" class="badge">{{error}}</span>
        </div>
      </form>
    </div>
  `
})
export class LoginComponent {
  loading = false;
  error = '';
  form = this.fb.group({
    usernameOrEmail: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = '';
    this.api.login(this.form.value as any).subscribe({
      next: res => {
        localStorage.setItem('access', res.accessToken);
        localStorage.setItem('refresh', res.refreshToken);
        // Récupérer le rôle pour l'UI (nav/admin)
        this.api.me().subscribe({
          next: me => {
            localStorage.setItem('role', me.primaryRole);
            this.loading = false;
            this.router.navigateByUrl(routeForRole(me.primaryRole));
          },
          error: () => {
            this.loading = false;
            this.router.navigateByUrl('/dashboard');
          }
        });
      },
      error: err => {
        this.error = err.error?.message || 'Erreur login';
        this.loading = false;
      }
    });
  }
}
