import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService, Lang } from './i18n.service';
import { ThemeService } from './theme.service';

@Component({
  standalone: true,
  selector: 'app-top-controls',
  imports: [CommonModule],
  template: `
    <div class="top-controls">
      <button type="button" (click)="toggleLang()" [title]="langTitle" [attr.aria-label]="langTitle">
        {{ langIcon }}
      </button>
      <button type="button" (click)="toggleTheme()" [title]="themeTitle" [attr.aria-label]="themeTitle">
        {{ themeIcon }}
      </button>
    </div>
  `
})
export class TopControlsComponent {
  constructor(private i18n: I18nService, private theme: ThemeService) {}

  get langIcon(): string {
    return this.i18n.lang === 'fr' ? '🇫🇷' : '🇬🇧';
  }

  get themeIcon(): string {
    return this.theme.theme === 'dark' ? '🌙' : '☀️';
  }

  get langTitle(): string {
    return this.i18n.translate('controls.toggleLang');
  }

  get themeTitle(): string {
    const key = this.theme.theme === 'dark' ? 'controls.themeDark' : 'controls.themeLight';
    return `${this.i18n.translate('controls.toggleTheme')}: ${this.i18n.translate(key)}`;
  }

  toggleLang() {
    const next: Lang = this.i18n.lang === 'fr' ? 'en' : 'fr';
    this.i18n.setLang(next);
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }
}
