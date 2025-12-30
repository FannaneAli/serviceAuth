import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const directorGuard: CanActivateFn = () => {
  const router = inject(Router);
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('access');
  if (token && (role === 'DIRECTEUR' || role === 'ADMIN' || role === 'SUPERUSER')) {
    return true;
  }
  router.navigateByUrl('/dashboard');
  return false;
};
