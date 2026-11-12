import { Project } from '../models/projects.model';

// Descriptions must stay true to the CV (cv.md). Screenshots are real captures
// of each live demo (public/assets/projects/).
export const PROJECTS_DATA: Project[] = [
  {
    id: 'signal-form-kit',
    title: 'Signal Form Kit',
    titleKa: 'Signal Form Kit',
    description:
      'A schema-driven Angular 21 form library I built on my own: typed APIs, 24 field types, nested and dynamic forms, packaging and automated tests.',
    descriptionKa:
      'ინდივიდუალურად შექმნილი schema-driven ფორმების ბიბლიოთეკა Angular 21-ზე: ტიპიზირებული API-ები, 24 ტიპის ველი, ჩადგმული და დინამიური ფორმები, პაკეტირება და ავტომატური ტესტები.',
    cover: { gradient: 'from-emerald-500/30 via-teal-500/20 to-blue-600/30', label: '<form [schema]>' },
    tags: ['Angular 21', 'TypeScript', 'Signal Forms', 'Testing'],
    githubUrl: 'https://github.com/uchasephiskveradze/signal-form-kit',
  },
  {
    id: 'blog-management',
    title: 'Blog Management System',
    titleKa: 'ბლოგის მართვის სისტემა',
    description:
      'A blog management SPA with post CRUD, search and sorting, CDK virtual infinite scroll, admin moderation and role-based access. Feature-based architecture, lazy loading, English and Georgian, light and dark theme.',
    descriptionKa:
      'ბლოგის მართვის ერთგვერდიანი აპლიკაცია: პოსტების CRUD, ძიება და დალაგება, CDK ვირტუალური უსასრულო სქროლი, ადმინისტრატორის მოდერაცია და როლებზე დაფუძნებული წვდომა. ფუნქციებზე დაფუძნებული არქიტექტურა, Lazy Loading, ქართული და ინგლისური ენა, ღია და მუქი თემა.',
    cover: { gradient: 'from-purple-500/30 via-indigo-500/20 to-blue-500/30', label: 'CRUD · RBAC · i18n' },
    tags: ['Angular 22', 'TypeScript', 'NgRx Signals', 'RxJS', 'Angular Material'],
    githubUrl: 'https://github.com/uchasephiskveradze/portalProject',
  },
  {
    id: 'tia-banking',
    title: 'TIA Internet Banking Platform',
    titleKa: 'TIA ინტერნეტ ბანკი',
    description:
      'A team Angular/Nx internet banking project using NgRx, RxJS, Signals and SCSS. I contributed to the loans area and other frontend features.',
    descriptionKa:
      'გუნდური ინტერნეტ ბანკის პროექტი Angular/Nx-ზე NgRx-ით, RxJS-ით, Signals-ითა და SCSS-ით. ვმუშაობდი სესხების ნაწილსა და სხვა Frontend ფუნქციებზე.',
    image: 'assets/projects/tia-banking.jpg',
    tags: ['Angular 21', 'Nx', 'NgRx', 'RxJS', 'Signals'],
    team: true,
    liveUrl: 'https://uchabank.netlify.app',
    githubUrl: 'https://github.com/uchasephiskveradze/final-demo',
  },
  {
    id: 'travel-banking',
    title: 'Travel Banking Dashboard',
    titleKa: 'სამოგზაურო საბანკო დეშბორდი',
    description:
      'A fintech dashboard built with Angular 21, TailwindCSS, PrimeNG and Signals, with real-time data updates and reusable components.',
    descriptionKa:
      'ფინტექ დეშბორდი Angular 21-ზე, TailwindCSS-ით, PrimeNG-ითა და Signals-ით, რეალურ დროში განახლებადი მონაცემებითა და მრავალჯერადი კომპონენტებით.',
    image: 'assets/projects/travel-banking.jpg',
    tags: ['Angular 21', 'TailwindCSS', 'PrimeNG', 'Signals'],
    liveUrl: 'https://tailwind-digitalbanking.netlify.app',
    githubUrl: 'https://github.com/uchasephiskveradze/hackathon-tailwind',
  },
  {
    id: 'aurora-wallet',
    title: 'Aurora Wallet',
    titleKa: 'Aurora საფულე',
    description:
      'A crypto wallet on the Aurora network with real-time price tracking, transaction history and a mobile-first design.',
    descriptionKa:
      'კრიპტო საფულე Aurora ქსელზე: ფასების რეალურ დროში თვალყურის დევნება, ტრანზაქციების ისტორია და მობილურზე ორიენტირებული დიზაინი.',
    image: 'assets/projects/aurora-wallet.jpg',
    tags: ['Angular 21', 'TypeScript', 'Web3'],
    liveUrl: 'https://aurora-wallet.netlify.app/',
    githubUrl: 'https://github.com/uchasephiskveradze/crypto-wallet',
  },
  {
    id: 'quiz',
    title: 'Quiz Application',
    titleKa: 'ვიქტორინის აპლიკაცია',
    description:
      'An interactive quiz with dynamic question handling and NgRx Signal Store state management, built with Reactive Forms.',
    descriptionKa:
      'ინტერაქტიული ვიქტორინა დინამიური კითხვებით და მდგომარეობის მართვით NgRx Signal Store-ით, შექმნილი Reactive Forms-ით.',
    image: 'assets/projects/quiz.jpg',
    tags: ['NgRx Signal Store', 'Reactive Forms', 'TypeScript'],
    liveUrl: 'https://uchaquiz.netlify.app',
    githubUrl: 'https://github.com/uchasephiskveradze/angular-quiz-app',
  },
];
