import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Language, LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslateModule],
  templateUrl: './language-switcher.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcher {
  private readonly languageService = inject(LanguageService);
  protected readonly currentLang = this.languageService.language;

  protected readonly languages: { code: Language; short: string; label: string }[] = [
    { code: 'en', short: 'EN', label: 'English' },
    { code: 'ka', short: 'KA', label: 'ქართული' },
  ];

  protected setLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
  }

  protected prefetch(lang: Language): void {
    this.languageService.prefetchFonts(lang);
  }
}
