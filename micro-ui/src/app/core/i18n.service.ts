import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import fr from '../../assets/i18n/fr.js';
import en from '../../assets/i18n/en.js';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private bundles: Record<Lang, Record<string, any>> = { fr, en };
  private langSubject = new BehaviorSubject<Lang>(this.restoreLang());

  langChanges = this.langSubject.asObservable();

  get lang(): Lang {
    return this.langSubject.value;
  }

  setLang(lang: Lang) {
    if (this.langSubject.value === lang) return;
    this.langSubject.next(lang);
    localStorage.setItem('lang', lang);
  }

  translate(key: string): string {
    const bundle = this.bundles[this.lang] || {};
    const value = key.split('.').reduce((acc: any, part) => (acc ? acc[part] : undefined), bundle);
    return (typeof value === 'string' ? value : null) || key;
  }

  private restoreLang(): Lang {
    const stored = localStorage.getItem('lang');
    return stored === 'en' ? 'en' : 'fr';
  }
}
