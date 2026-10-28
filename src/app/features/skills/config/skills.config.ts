import { Skill } from '../models/skills.model';

const ICON_PATHS = {
  fileCode: [
    'M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4',
    'M14 2v4a2 2 0 0 0 2 2h4',
    'm9 18 3-3-3-3',
    'm5 12-3 3 3 3',
  ],
  palette: [
    'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z',
  ],
  droplet: [
    'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z',
  ],
  fileType: [
    'M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4',
    'M14 2v4a2 2 0 0 0 2 2h4',
    'M2 12h6',
    'M5 12v6',
  ],
  triangle: ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'],
  workflow: ['M7 11v4a2 2 0 0 0 2 2h4', 'M3 3h8v8H3z', 'M13 13h8v8h-8z'],
  database: [
    'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5',
    'M3 12c0 1.66 4 3 9 3s9-1.34 9-3',
    'M12 8c-4.97 0-9-1.34-9-3s4.03-3 9-3 9 1.34 9 3-4.03 3-9 3z',
  ],
  wind: [
    'M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2',
    'M9.6 4.6A2 2 0 1 1 11 8H2',
    'M12.6 19.4A2 2 0 1 0 14 16H2',
  ],
  gitBranch: [
    'M6 3v12',
    'M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    'M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    'M15 6a9 9 0 0 0-9 9',
  ],
  code: ['m16 18 6-6-6-6', 'm8 6-6 6 6 6'],
  component: [
    'M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z',
    'M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z',
    'M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z',
    'M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z',
  ],
  hexagon: [
    'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  ],
  zap: [
    'M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z',
  ],
  globe: [
    'M12 22a10 10 0 1 0 0-20 10 10 0 1 0 0 20',
    'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20',
    'M2 12h20',
  ],
  radio: [
    'M16.247 7.761a6 6 0 0 1 0 8.478',
    'M19.075 4.933a10 10 0 0 1 0 14.134',
    'M4.925 19.067a10 10 0 0 1 0-14.134',
    'M7.753 16.239a6 6 0 0 1 0-8.478',
    'M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
  ],
  smartphone: [
    'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z',
    'M12 18h.01',
  ],
  kanban: ['M5 3v14', 'M12 3v8', 'M19 3v18'],
  codeReview: [
    'M21 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
    'M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
    'M13 6h3a2 2 0 0 1 2 2v7',
    'M6 9v12',
  ],
} as const;

export const SKILLS_DATA: Skill[] = [
  { name: 'HTML5', color: 'from-orange-500 to-red-500', iconPaths: ICON_PATHS.fileCode },
  { name: 'CSS3', color: 'from-blue-500 to-cyan-500', iconPaths: ICON_PATHS.palette },
  { name: 'Sass', color: 'from-pink-500 to-rose-500', iconPaths: ICON_PATHS.droplet },
  { name: 'JavaScript', color: 'from-yellow-400 to-amber-500', iconPaths: ICON_PATHS.code },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-400', iconPaths: ICON_PATHS.fileType },
  { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-500', iconPaths: ICON_PATHS.wind },
  { name: 'PrimeNG', color: 'from-cyan-500 to-blue-600', iconPaths: ICON_PATHS.component },
  { name: 'Responsive Design', color: 'from-fuchsia-500 to-pink-500', iconPaths: ICON_PATHS.smartphone },
  { name: 'Angular', color: 'from-red-600 to-pink-500', iconPaths: ICON_PATHS.triangle },
  { name: 'RxJS', color: 'from-purple-500 to-indigo-500', iconPaths: ICON_PATHS.workflow },
  { name: 'NgRx', color: 'from-violet-500 to-purple-600', iconPaths: ICON_PATHS.database },
  { name: 'Signals', color: 'from-amber-400 to-orange-500', iconPaths: ICON_PATHS.zap },
  { name: 'REST APIs', color: 'from-emerald-500 to-teal-600', iconPaths: ICON_PATHS.globe },
  { name: 'WebSocket', color: 'from-indigo-500 to-blue-500', iconPaths: ICON_PATHS.radio },
  { name: 'Nx', color: 'from-sky-500 to-blue-700', iconPaths: ICON_PATHS.hexagon },
  { name: 'Git', color: 'from-orange-500 to-red-600', iconPaths: ICON_PATHS.gitBranch },
  { name: 'Agile/Scrum', color: 'from-lime-500 to-green-600', iconPaths: ICON_PATHS.kanban },
  { name: 'Code Review', color: 'from-rose-500 to-orange-500', iconPaths: ICON_PATHS.codeReview },
];
