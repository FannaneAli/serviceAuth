import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DoctorantComponent } from './pages/doctorant/doctorant.component';
import { EncadrantComponent } from './pages/encadrant/encadrant.component';
import { AdminPortalComponent } from './pages/admin-portal/admin-portal.component';
import { authGuard } from './core/auth.guard';
import { roleGuard } from './core/role.guard';
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { MainLayoutComponent } from './core/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'doctorant', component: DoctorantComponent, canActivate: [roleGuard(['DOCTORANT'])] },
      { path: 'encadrant', component: EncadrantComponent, canActivate: [roleGuard(['DIRECTEUR'])] },
      { path: 'admin', component: AdminPortalComponent, canActivate: [roleGuard(['ADMIN'])] },
      { path: 'superuser', component: AdminComponent, canActivate: [roleGuard(['SUPERUSER'])] },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },
  { path: 'login', component: AuthPageComponent },
  { path: 'register', component: AuthPageComponent },
  { path: '**', redirectTo: 'dashboard' }
];
