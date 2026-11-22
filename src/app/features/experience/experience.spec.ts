import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { StaticTranslateLoader } from '../../core/i18n/static-translate-loader';
import { Experience } from './experience';

describe('Experience', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
      providers: [
        provideRouter([]),
        provideTranslateService({ fallbackLang: 'en', loader: provideTranslateLoader(StaticTranslateLoader) }),
      ],
    }).compileComponents();
  });

  it('renders the Asterbit role from the CV', () => {
    const fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Asterbit');
    expect(text).toContain('Frontend Developer');
  });
});
