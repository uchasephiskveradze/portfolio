import { Github, Linkedin, Mail } from 'lucide-angular';
import { SocialLink } from '../models/contact.model';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/uchasephiskveradze',
    color: 'group-hover:text-gray-400',
    handle: '@uchasephiskveradze',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ucha-sephiskveradze/',
    color: 'group-hover:text-blue-400',
    handle: '@ucha-sephiskveradze',
  },
  {
    name: 'Email',
    nameKey: 'CONTACT.LABELS.EMAIL',
    icon: Mail,
    url: 'mailto:ucha.sephiskveradze@gmail.com',
    color: 'group-hover:text-emerald-400',
    handle: 'ucha.sephiskveradze@gmail.com',
  },
];
