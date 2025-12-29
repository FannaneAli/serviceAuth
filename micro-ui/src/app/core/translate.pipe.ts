import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { I18nService } from './i18n.service';

@Pipe({
  name: 't',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private sub: Subscription;

  constructor(private i18n: I18nService, private cdr: ChangeDetectorRef) {
    this.sub = this.i18n.langChanges.subscribe(() => this.cdr.markForCheck());
  }

  transform(key: string): string {
    return this.i18n.translate(key);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
