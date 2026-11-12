import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { EDUCATION_DATA } from './config/education.config';

@Component({
  selector: 'app-education',
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './education.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  private readonly language = inject(LanguageService).language;

  protected readonly education = computed(() => {
    const ka = this.language() === 'ka';
    return EDUCATION_DATA.map((item) => ({
      id: item.id,
      icon: item.icon,
      color: item.color,
      institution: ka ? item.institutionKa : item.institution,
      program: ka ? item.programKa : item.program,
      dates: ka ? item.datesKa : item.dates,
      description: ka ? item.descriptionKa : item.description,
    }));
  });
}
