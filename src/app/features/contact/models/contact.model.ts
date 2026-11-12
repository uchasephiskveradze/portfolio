import { LucideIconData } from 'lucide-angular';

export interface SocialLink {
  name: string;
  /** Translation key for the visible label, when the name is not a brand. */
  nameKey?: string;
  icon: LucideIconData;
  url: string;
  color: string;
  handle: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  time?: string;
}
