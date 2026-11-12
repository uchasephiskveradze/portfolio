import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { EXPERIENCE_DATA } from './config/experience.config';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  private readonly language = inject(LanguageService).language;

  protected readonly items = computed(() => {
    const ka = this.language() === 'ka';
    return EXPERIENCE_DATA.map((item) => ({
      id: item.id,
      company: item.company,
      current: item.current,
      tags: item.tags,
      role: ka ? item.roleKa : item.role,
      location: ka ? item.locationKa : item.location,
      dates: ka ? item.datesKa : item.dates,
      bullets: ka ? item.bulletsKa : item.bullets,
    }));
  });
}
