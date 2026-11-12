import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { LoaderCircle, LucideAngularModule } from 'lucide-angular';

import { routes } from './app.routes';
import { StaticTranslateLoader } from './core/i18n/static-translate-loader';
import { LanguageService } from './core/services/language.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideTranslateService({
      fallbackLang: 'en',
      loader: provideTranslateLoader(StaticTranslateLoader),
    }),
    // Pick the language before the first render so the page never paints in
    // one language and then re-lays out in the other.
    provideAppInitializer(() => inject(LanguageService).initLanguage()),
    importProvidersFrom(LucideAngularModule.pick({ LoaderCircle })),
  ],
};
