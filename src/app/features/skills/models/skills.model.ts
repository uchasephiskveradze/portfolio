export interface SkillGroup {
  /** Translation key under SKILLS.GROUPS */
  key: 'FRONTEND' | 'STATE' | 'UI' | 'API' | 'WORKFLOW';
  color: string;
  iconPaths: readonly string[];
  items: string[];
}
