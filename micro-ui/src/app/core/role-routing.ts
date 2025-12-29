export function routeForRole(role: string | null | undefined): string {
  switch (role) {
    case 'SUPERUSER':
      return '/superuser';
    case 'ADMIN':
      return '/admin';
    case 'DIRECTEUR':
      return '/encadrant';
    case 'DOCTORANT':
      return '/doctorant';
    default:
      return '/dashboard';
  }
}
