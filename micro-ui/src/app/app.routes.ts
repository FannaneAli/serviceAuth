import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './core/auth.guard';
import { adminGuard } from './core/admin.guard';
import { doctorantGuard } from './core/doctorant.guard';
import { directorGuard } from './core/director.guard';
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { MainLayoutComponent } from './core/main-layout.component';
import { SoutenancesComponent } from './pages/soutenances/soutenances.component';
import { ReviewSoutenancesComponent } from './pages/soutenances/review-soutenances.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'doctorant', component: DashboardComponent },
      { path: 'encadrant', component: DashboardComponent },
      { path: 'soutenances', component: SoutenancesComponent, canActivate: [doctorantGuard] },
      { path: 'soutenances/revue', component: ReviewSoutenancesComponent, canActivate: [directorGuard] },
      { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },
      { path: 'superuser', component: AdminComponent, canActivate: [adminGuard] },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },
  { path: 'login', component: AuthPageComponent },
  { path: 'register', component: AuthPageComponent },
  { path: '**', redirectTo: 'dashboard' }
];
