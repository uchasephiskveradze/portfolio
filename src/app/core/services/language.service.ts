import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { EN } from '../i18n/en';
import { KA } from '../i18n/ka';

export type Language = 'en' | 'ka';

const LANGUAGES: readonly Language[] = ['en', 'ka'];
const STORAGE_KEY = 'user_language';
const SITE_URL = 'https://uchaportfolio.netlify.app';
const META = { en: EN.META, ka: KA.META } as const;
const OG_LOCALE: Record<Language, string> = { en: 'en_US', ka: 'ka_GE' };

/** Georgian font weights the UI actually renders (normal, medium, semibold, bold). */
const KA_FONT_WEIGHTS = [400, 500, 600, 700];
/** Longest the switch waits for the Georgian font before showing text anyway. */
const FONT_WAIT_MS = 300;

function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private readonly currentLanguage = signal<Language>('en');
  public readonly language = this.currentLanguage.asReadonly();

  constructor() {
    this.translate.addLangs([...LANGUAGES]);
    this.translate.setFallbackLang('en');
  }

  /**
   * Runs as an app initializer, before the first render: the language comes
   * from the URL (or the stored choice) synchronously, so a visitor opening
   * /ka never sees English first and then a re-layout into Georgian.
   */
  public initLanguage(): void {
    const fromUrl = this.document.location.pathname.split('/')[1];
    const stored = this.readStored();
    this.applyLanguage(isLanguage(fromUrl) ? fromUrl : (stored ?? 'en'));

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.syncWithUrl());

    this.warmUpGeorgianFonts();
  }

  public setLanguage(lang: Language): void {
    if (lang === this.currentLanguage()) {
      return;
    }
    // Georgian text is longer than English, so sections above the reader grow
    // or shrink on a switch. Pin what the reader is looking at and put it back
    // in the same place after the re-render, so the page does not jump.
    // If the Georgian font is not downloaded yet, wait for it briefly (at most
    // FONT_WAIT_MS) so the text appears in its final font instead of a
    // fallback that re-flows a moment later.
    void this.whenFontReady(lang).then(() => {
      if (lang !== this.pending) {
        return;
      }
      const restore = this.captureScrollAnchor();
      // Apply first so the text swaps in the same frame, then update the URL.
      // Router navigation does not scroll the page; replaceUrl keeps Back for
      // leaving the site rather than flipping languages.
      this.applyLanguage(lang);
      void this.router.navigate([`/${lang}`], { replaceUrl: true }).then(restore);
      requestAnimationFrame(restore);
    });
    this.pending = lang;
  }

  /** Starts the Georgian font download early (hover/focus on the KA button). */
  public prefetchFonts(lang: Language): void {
    if (lang === 'ka') {
      void this.loadGeorgianFonts();
    }
  }

  private pending: Language | null = null;

  private whenFontReady(lang: Language): Promise<void> {
    const fonts = this.document.fonts;
    if (lang !== 'ka' || !fonts?.check || fonts.check(`400 16px Mersad`, 'ა')) {
      return Promise.resolve();
    }
    const timeout = new Promise<void>((resolve) => setTimeout(resolve, FONT_WAIT_MS));
    return Promise.race([this.loadGeorgianFonts(), timeout]);
  }

  private loadGeorgianFonts(): Promise<void> {
    const fonts = this.document.fonts;
    if (!fonts?.load) {
      return Promise.resolve();
    }
    return Promise.all(
      KA_FONT_WEIGHTS.map((weight) => fonts.load(`${weight} 16px Mersad`, 'ა').catch(() => undefined)),
    ).then(() => undefined);
  }

  /** Remembers the element at the top of the viewport; the returned function restores its position. */
  private captureScrollAnchor(): () => void {
    const win = this.document.defaultView;
    if (!win || win.scrollY < 1) {
      return () => undefined;
    }
    const candidates = Array.from(
      this.document.querySelectorAll<HTMLElement>('main h2, main h3, main article, main li, main p'),
    );
    // Pin the element nearest the reader's eye line (a third down the screen),
    // not the very top, so what they are looking at stays put.
    const eyeLine = win.innerHeight / 3;
    let anchor: HTMLElement | undefined;
    let best = Infinity;
    for (const el of candidates) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= win.innerHeight) {
        continue;
      }
      const distance = Math.abs(rect.top - eyeLine);
      if (distance < best) {
        best = distance;
        anchor = el;
      }
    }
    if (!anchor) {
      return () => undefined;
    }
    const offset = anchor.getBoundingClientRect().top;
    return () => {
      const drift = anchor.getBoundingClientRect().top - offset;
      if (Math.abs(drift) >= 1) {
        win.scrollTo({ top: win.scrollY + drift, behavior: 'instant' });
      }
    };
  }

  private syncWithUrl(): void {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const fromUrl = route.params['lang'];

    if (isLanguage(fromUrl)) {
      this.applyLanguage(fromUrl);
    } else if (this.router.url === '/' || this.router.url === '') {
      void this.router.navigate([`/${this.currentLanguage()}`], { replaceUrl: true });
    }
  }

  private applyLanguage(lang: Language): void {
    if (this.currentLanguage() === lang && this.translate.getCurrentLang() === lang) {
      return;
    }
    this.currentLanguage.set(lang);
    this.translate.use(lang);
    this.document.documentElement.lang = lang;
    this.updateHeadTags(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Private mode or blocked storage: the URL still carries the language.
    }
  }

  /** Per-language title, description, canonical and link-preview tags, so /ka is indexed as its own page. */
  private updateHeadTags(lang: Language): void {
    const { TITLE, DESCRIPTION } = META[lang];
    const url = `${SITE_URL}/${lang}`;
    const other: Language = lang === 'en' ? 'ka' : 'en';
    this.title.setTitle(TITLE);
    this.meta.updateTag({ name: 'description', content: DESCRIPTION });
    this.meta.updateTag({ property: 'og:title', content: TITLE });
    this.meta.updateTag({ property: 'og:description', content: DESCRIPTION });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:locale', content: OG_LOCALE[lang] });
    this.meta.updateTag({ property: 'og:locale:alternate', content: OG_LOCALE[other] });
    const canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute('href', url);
  }

  private readStored(): Language | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return isLanguage(stored) ? stored : null;
    } catch {
      return null;
    }
  }

  /**
   * Download the Georgian font in the background once the page is idle, so
   * the first switch to KA renders with the final font immediately instead
   * of showing a fallback font and then re-flowing.
   */
  private warmUpGeorgianFonts(): void {
    const fonts = this.document.fonts;
    if (!fonts?.load) {
      return;
    }
    const load = () => void this.loadGeorgianFonts();
    const win = this.document.defaultView;
    if (win && 'requestIdleCallback' in win) {
      win.requestIdleCallback(load, { timeout: 3000 });
    } else {
      setTimeout(load, 1500);
    }
  }
}
