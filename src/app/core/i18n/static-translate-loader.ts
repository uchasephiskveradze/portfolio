import { Injectable } from '@angular/core';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { EN } from './en';
import { KA } from './ka';

/**
 * Translations are bundled with the app instead of fetched over HTTP.
 * `of()` emits synchronously, so switching language never renders
 * missing keys or empty strings while a JSON file downloads.
 */
@Injectable()
export class StaticTranslateLoader implements TranslateLoader {
  private readonly translations: Record<string, TranslationObject> = { en: EN, ka: KA };

  public getTranslation(lang: string): Observable<TranslationObject> {
    return of(this.translations[lang] ?? EN);
  }
}
