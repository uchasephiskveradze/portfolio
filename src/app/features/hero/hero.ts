import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';

const CV_FILES = {
  en: { href: 'assets/docs/Ucha_Sephiskveradze_CV.pdf', name: 'Ucha_Sephiskveradze_CV.pdf' },
  ka: { href: 'assets/docs/Ucha_Sephiskveradze_CV_KA.pdf', name: 'Ucha_Sephiskveradze_CV_KA.pdf' },
} as const;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [NgOptimizedImage, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly language = inject(LanguageService).language;

  public readonly viewProjects = output<void>();

  /** The CV download follows the page language: English or Georgian PDF. */
  protected readonly cv = computed(() => CV_FILES[this.language()]);
}
