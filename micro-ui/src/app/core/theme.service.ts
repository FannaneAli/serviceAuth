import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>(this.restoreTheme());
  themeChanges = this.themeSubject.asObservable();

  constructor() {
    this.applyTheme(this.themeSubject.value);
  }

  get theme(): Theme {
    return this.themeSubject.value;
  }

  toggleTheme() {
    const next: Theme = this.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  setTheme(theme: Theme) {
    if (this.themeSubject.value === theme) return;
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  private restoreTheme(): Theme {
    const stored = localStorage.getItem('theme');
    return stored === 'light' ? 'light' : 'dark';
  }

  private applyTheme(theme: Theme) {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
  }
}
