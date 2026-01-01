import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DoctorantComponent } from './pages/doctorant/doctorant.component';
import { EncadrantComponent } from './pages/encadrant/encadrant.component';
import { AdminPortalComponent } from './pages/admin-portal/admin-portal.component';
import { SoutenancesComponent } from './pages/soutenances/soutenances.component';
import { DirectorSoutenancesComponent } from './pages/soutenances/director-soutenances.component';
import { ReviewSoutenancesComponent } from './pages/soutenances/review-soutenances.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
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
      { path: 'soutenances', component: SoutenancesComponent, canActivate: [roleGuard(['DOCTORANT'])] },
      { path: 'encadrant', component: EncadrantComponent, canActivate: [roleGuard(['DIRECTEUR'])] },
      { path: 'director-soutenances', component: DirectorSoutenancesComponent, canActivate: [roleGuard(['DIRECTEUR'])] },
      { path: 'review-soutenances', component: ReviewSoutenancesComponent, canActivate: [roleGuard(['ADMIN', 'SUPERUSER'])] },
      { path: 'admin', component: AdminPortalComponent, canActivate: [roleGuard(['ADMIN'])] },
      { path: 'superuser', component: AdminComponent, canActivate: [roleGuard(['SUPERUSER'])] },
      { path: 'notifications', component: NotificationsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },
  { path: 'login', component: AuthPageComponent },
  { path: 'register', component: AuthPageComponent },
  { path: '**', redirectTo: 'dashboard' }
];
