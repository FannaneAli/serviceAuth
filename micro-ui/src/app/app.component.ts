import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="container">
      <h1>Micro Auth UI</h1>
      <nav class="flex" style="margin-bottom:16px; flex-wrap:wrap; gap:10px;">
        <a routerLink="/login">Login</a>
        <a routerLink="/register">Register</a>
        <a routerLink="/dashboard">Dashboard</a>
        <a *ngIf="isSuperuser()" routerLink="/admin">Admin</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  isSuperuser(): boolean {
    return localStorage.getItem('role') === 'SUPERUSER';
  }
}
