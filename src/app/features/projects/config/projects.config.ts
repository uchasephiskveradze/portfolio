import { Project } from '../models/projects.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 5,
    title: 'Blog Management System',
    titleKa: 'ბლოგის მართვის სისტემა',
    description:
      'A blog management SPA with post CRUD, search and sorting, CDK virtual infinite scroll, admin moderation, and role-based access. Built with a feature-based architecture, lazy loading, English and Georgian languages, and a light/dark theme.',
    descriptionKa:
      'ბლოგის მართვის ერთგვერდიანი აპლიკაცია პოსტების დამატებით, რედაქტირებითა და წაშლით, ძიებით, სორტირებით, CDK-ის ვირტუალური უსასრულო სქროლით, ადმინისტრატორის მოდერაციითა და როლებზე დაფუძნებული წვდომით. ფიჩერზე დაფუძნებული არქიტექტურა, lazy loading, ქართული და ინგლისური ენა, ღია და მუქი თემა.',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1080&q=80',
    tags: ['Angular 22', 'TypeScript', 'NgRx Signals', 'RxJS', 'Angular Material'],
    githubUrl: 'https://github.com/uchasephiskveradze/portalProject',
  },
  {
    id: 1,
    title: 'Final Demo Project',
    titleKa: 'საბოლოო სადემონსტრაციო პროექტი',
    description:
      'A comprehensive demonstration of Angular best practices featuring state management with NgRx, reactive programming with RxJS, and modern Angular Signals for optimal performance.',
    descriptionKa:
      'Angular-ის საუკეთესო პრაქტიკების ყოვლისმომცველი დემონსტრაცია, რომელიც მოიცავს მდგომარეობის მართვას NgRx-ით, რეაქტიულ პროგრამირებას RxJS-ით და თანამედროვე Angular Signals-ს ოპტიმალური მუშაობისთვის.',
    image:
      'https://images.unsplash.com/photo-1770579908684-b135e110fd11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmd1bGFyJTIwd2ViJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzY4MTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Angular 21', 'NgRx', 'Signals', 'RxJS'],
    liveUrl: 'https://uchabank.netlify.app/bank/dashboard',
    githubUrl: 'https://github.com/uchasephiskveradze/final-demo',
  },
  {
    id: 2,
    title: 'Travel Banking Dashboard',
    titleKa: 'სამოგზაურო საბანკო დეშბორდი',
    description:
      'A modern fintech dashboard for travel banking services, built with Angular and styled using TailwindCSS and PrimeNG components. Features real-time data updates and responsive design.',
    descriptionKa:
      'თანამედროვე ფინტექ დეშბორდი სამოგზაურო საბანკო მომსახურებისთვის, აგებული Angular-ით და გაფორმებული TailwindCSS-ითა და PrimeNG კომპონენტებით.',
    image:
      'https://images.unsplash.com/photo-1701686794404-3670ea43687e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBiYW5raW5nJTIwZmludGVjaCUyMGFwcHxlbnwxfHx8fDE3NzM2ODE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Angular 21', 'TailwindCSS', 'PrimeNG', 'Signals'],
    liveUrl: 'https://tailwind-digitalbanking.netlify.app',
    githubUrl: 'https://github.com/uchasephiskveradze/hackathon-tailwind',
  },
  {
    id: 3,
    title: 'Quiz Application',
    titleKa: 'ქვიზ აპლიკაცია',
    description:
      'An interactive quiz platform leveraging NgRx Signal Store for state management and Reactive Forms for dynamic question handling. Built with TypeScript for type-safety and maintainability.',
    descriptionKa:
      'ინტერაქტიული ქვიზ პლატფორმა, რომელიც იყენებს NgRx Signal Store-ს მდგომარეობის მართვისთვის და Reactive Forms-ს კითხვების დინამიური დამუშავებისთვის.',
    image:
      'https://images.unsplash.com/photo-1750056393356-d1de9d222a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWl6JTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2UlMjBtb2JpbGV8ZW58MXx8fHwxNzczNjgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['NgRx Signal Store', 'Reactive Forms', 'TypeScript'],
    liveUrl: 'https://uchaquiz.netlify.app',
    githubUrl: 'https://github.com/uchasephiskveradze/angular-quiz-app',
  },
  {
    id: 4,
    title: 'Aurora Wallet',
    titleKa: 'Aurora საფულე',
    description:
      'A modern cryptocurrency wallet application providing a secure and intuitive interface for managing digital assets on the Aurora network. Features real-time price tracking and seamless transaction history.',
    descriptionKa:
      'თანამედროვე კრიპტოვალუტის საფულე, რომელიც უზრუნველყოფს უსაფრთხო და ინტუიციურ ინტერფეისს ციფრული აქტივების მართვისთვის Aurora ქსელში.',
    image:
      'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjB3YWxsZXR8ZW58MXx8fHwxNzczNjgxODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Angular 21', 'TypeScript', 'Web3', 'TailwindCSS'],
    liveUrl: 'https://aurora-wallet.netlify.app/',
    githubUrl: 'https://github.com/uchasephiskveradze/crypto-wallet',
  },
];
