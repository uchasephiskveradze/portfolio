import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SKILL_GROUPS } from './config/skills.config';
import { SkillGroup } from './models/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly groups: SkillGroup[] = SKILL_GROUPS;
}
