import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from './models';

export function roleGuard(allowedRoles: Role[]): CanActivateFn {
  return () => {
    const router = inject(Router);
    const role = localStorage.getItem('role') as Role | null;
    const token = localStorage.getItem('access');
    if (token && role && allowedRoles.includes(role)) {
      return true;
    }
    router.navigateByUrl('/dashboard');
    return false;
  };
}
