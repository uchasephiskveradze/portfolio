import { Provider, EnvironmentProviders } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { StaticTranslateLoader } from '../app/core/i18n/static-translate-loader';

/** Providers every component spec needs: router + bundled translations. */
export const TEST_PROVIDERS: (Provider | EnvironmentProviders)[] = [
  provideRouter([]),
  provideTranslateService({ fallbackLang: 'en', lang: 'en', loader: provideTranslateLoader(StaticTranslateLoader) }),
];
