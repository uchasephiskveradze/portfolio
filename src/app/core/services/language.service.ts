import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

export type Language = 'en' | 'ka';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly storageKey = 'user_language';
  
  private currentLanguage = signal<Language>('en');
  public readonly language = this.currentLanguage.asReadonly();

  constructor() {
    this.translate.addLangs(['en', 'ka']);
    this.translate.setDefaultLang('en');
  }

  public initLanguage(): void {
    // Initial sync
    this.syncWithUrl();

    // Sync language with URL on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.syncWithUrl();
    });
  }

  private syncWithUrl(): void {
    const root = this.router.routerState.snapshot.root;
    let route = root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    
    const langFromUrl = route.params['lang'] as Language;
    const storedLang = localStorage.getItem(this.storageKey) as Language;
    
    if (langFromUrl && (langFromUrl === 'en' || langFromUrl === 'ka')) {
      this.applyLanguage(langFromUrl);
    } else if (this.router.url === '/' || this.router.url === '') {
      const targetLang = (storedLang === 'en' || storedLang === 'ka') ? storedLang : 'en';
      this.router.navigate([`/${targetLang}`]);
    }
  }

  public setLanguage(lang: Language): void {
    this.router.navigate([`/${lang}`]);
  }

  private applyLanguage(lang: Language): void {
    if (this.currentLanguage() === lang) return;
    
    this.currentLanguage.set(lang);
    this.translate.use(lang);
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang;
  }
}
