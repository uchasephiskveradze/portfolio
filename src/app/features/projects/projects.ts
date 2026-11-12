import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { PROJECTS_DATA } from './config/projects.config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly language = inject(LanguageService).language;

  protected readonly projects = computed(() => {
    const ka = this.language() === 'ka';
    return PROJECTS_DATA.map((project) => ({
      ...project,
      displayTitle: ka ? project.titleKa : project.title,
      displayDescription: ka ? project.descriptionKa : project.description,
    }));
  });
}
