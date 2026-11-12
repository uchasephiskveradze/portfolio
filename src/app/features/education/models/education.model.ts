import { LucideIconData } from 'lucide-angular';

export interface EducationItem {
  id: number;
  institution: string;
  institutionKa: string;
  program: string;
  programKa: string;
  dates: string;
  datesKa: string;
  description: string;
  descriptionKa: string;
  color: string;
  icon: LucideIconData;
}
