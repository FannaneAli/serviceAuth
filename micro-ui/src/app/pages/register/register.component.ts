import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslatePipe],
  template: `
    <div class="card">
      <h2>{{ 'register.title' | t }}</h2>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="form-row">
          <div>
            <label>{{ 'register.username' | t }}</label>
            <input formControlName="username" />
          </div>
          <div>
            <label>{{ 'register.email' | t }}</label>
            <input formControlName="email" />
          </div>
        </div>
        <div class="form-row">
          <div>
            <label>{{ 'register.password' | t }}</label>
            <input type="password" formControlName="password" />
          </div>
          <div>
            <label>{{ 'register.role' | t }}</label>
            <select formControlName="primaryRole">
              <option value="DOCTORANT">{{ 'register.roles.doctorant' | t }}</option>
              <option value="DIRECTEUR">{{ 'register.roles.encadrant' | t }}</option>
            </select>
          </div>
        </div>
        <label>{{ 'register.phone' | t }}</label>
        <input formControlName="phone" />
        <div class="flex" style="margin-top:12px;">
          <button type="submit" [disabled]="form.invalid || loading">{{ 'register.submit' | t }}</button>
          <span *ngIf="message" class="badge">{{message}}</span>
        </div>
      </form>
    </div>
  `
})
export class RegisterComponent {
  loading = false;
  message = '';
  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: [''],
    primaryRole: ['DOCTORANT', Validators.required]
  });

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.message = '';
    this.api.register(this.form.value as any).subscribe({
      next: res => {
        if (res.primaryRole === 'SUPERUSER' || res.status === 'ACTIVE') {
          this.message = `Compte ${res.username} cree (status ${res.status})`;
          setTimeout(() => this.router.navigateByUrl('/login'), 500);
        } else {
          this.message = `Demande envoyee. Verifiez votre email avant validation par l'admin.`;
        }
        this.loading = false;
      },
      error: err => {
        this.message = err.error?.message || 'Erreur inscription';
        this.loading = false;
      }
    });
  }
}
