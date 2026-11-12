import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, signal, viewChild } from '@angular/core';
import { Contact } from './features/contact/contact';
import { Education } from './features/education/education';
import { Experience } from './features/experience/experience';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Footer } from './features/footer/footer';
import { Toast } from './shared/components/toast/toast';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [Hero, Experience, Skills, Projects, Education, Contact, Footer, Toast, LanguageSwitcher],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(window:scroll)': 'onScroll()' },
})
export class App {
  protected readonly currentLang = inject(LanguageService).language;
  protected readonly projectsRef = viewChild<ElementRef<HTMLElement>>('projectsRef');

  protected readonly switcherHidden = signal(false);
  private lastScrollY = 0;
  // A language switch corrects the scroll position; that is not the reader scrolling.
  private ignoreScrollUntil = 0;

  constructor() {
    effect(() => {
      this.currentLang();
      this.ignoreScrollUntil = performance.now() + 800;
    });
  }

  protected onScroll(): void {
    const y = window.scrollY;
    if (performance.now() < this.ignoreScrollUntil) {
      this.lastScrollY = y;
      return;
    }
    if (Math.abs(y - this.lastScrollY) < 8) {
      return;
    }
    // Show near the top or when scrolling up; hide when scrolling down.
    this.switcherHidden.set(y > 120 && y > this.lastScrollY);
    this.lastScrollY = y;
  }

  public scrollToProjects(): void {
    this.projectsRef()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
