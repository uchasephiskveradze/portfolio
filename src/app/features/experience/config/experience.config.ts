import { ExperienceItem } from '../models/experience.model';

// Every line here must match cv.md (the CV source of truth). Do not add claims
// that are not on the CV.
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    company: 'Asterbit',
    role: 'Angular Developer',
    roleKa: 'Angular დეველოპერი',
    location: 'Tbilisi, Georgia',
    locationKa: 'თბილისი, საქართველო',
    dates: 'Mar 2025 – Present',
    datesKa: '2025 წლის მარტი – დღემდე',
    current: true,
    bullets: [
      'Build and refine reusable Angular components for product features.',
      'Contributed to creating the AI workflow for the frontend project and integrated it into the frontend team.',
      'Helped set up the development environment for a new project together with DevOps.',
      'Groom customer feedback with the Product Owner and propose implementation approaches.',
      'Fix bugs and help keep interfaces reliable and user-friendly.',
      'Take part in code reviews and team discussions, following project standards.',
      'Work with the development team to implement and improve features.',
    ],
    bulletsKa: [
      'ვქმნი და ვაუმჯობესებ მრავალჯერად Angular კომპონენტებს პროდუქტის ფუნქციებისთვის.',
      'მონაწილეობა მივიღე Frontend პროექტის AI workflow-ის შექმნაში და Frontend გუნდში დავნერგე.',
      'DevOps-თან ერთად დავეხმარე ახალი პროექტის დეველოპმენტის გარემოს გამართვას.',
      'Product Owner-თან ერთად ვამუშავებ მომხმარებელთა უკუკავშირს და ვთავაზობ რეალიზაციის გზებს.',
      'ვასწორებ შეცდომებს და ვზრუნავ ინტერფეისების საიმედოობასა და მოხერხებულობაზე.',
      'ვმონაწილეობ კოდის მიმოხილვასა და გუნდურ განხილვებში, ვიცავ პროექტის სტანდარტებს.',
      'დეველოპერების გუნდთან ერთად ვნერგავ და ვაუმჯობესებ ფუნქციებს.',
    ],
    tags: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'Code Review'],
  },
];
