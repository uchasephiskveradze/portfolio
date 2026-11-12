import { Award, BookOpen, Brain, GraduationCap } from 'lucide-angular';
import { EducationItem } from '../models/education.model';

// Newest first. Must match the Education section of the CV (cv.md).
export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    institution: 'SEU',
    institutionKa: 'SEU',
    program: 'M.Sc. in Artificial Intelligence',
    programKa: 'ხელოვნური ინტელექტის მაგისტრატურა',
    dates: '2026 – Present',
    datesKa: '2026 – დღემდე',
    description: "Master's degree, in progress.",
    descriptionKa: 'სწავლა მიმდინარეობს.',
    icon: Brain,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 2,
    institution: 'Business and Technology University (BTU)',
    institutionKa: 'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი (BTU)',
    program: 'B.Sc. in Information Technologies',
    programKa: 'საინფორმაციო ტექნოლოგიების ბაკალავრი',
    dates: '2022 – July 2026',
    datesKa: '2022 – 2026 წლის ივლისი',
    description: "Bachelor's degree in Information Technologies.",
    descriptionKa: 'ბაკალავრის ხარისხი საინფორმაციო ტექნოლოგიებში.',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    institution: 'TBC IT Academy',
    institutionKa: 'TBC IT Academy',
    program: 'Front-End Development, Collaborative Capstone',
    programKa: 'Front-End დეველოპმენტი, გუნდური დასკვნითი პროექტი',
    dates: '2025 – 2026',
    datesKa: '2025 – 2026',
    description:
      'Built an Angular app with NgRx, RxJS, Signals and REST APIs together with Backend, DevOps, Mobile and QA participants in Agile/Scrum. Pitched a digital-banking concept at TechXplore Hackathon 2025.',
    descriptionKa:
      'Backend, DevOps, Mobile და QA მონაწილეებთან ერთად, Agile/Scrum პროცესში შევქმენი Angular აპლიკაცია NgRx-ით, RxJS-ით, Signals-ითა და REST API-ებით. TechXplore Hackathon 2025-ზე წარვადგინე ციფრული საბანკო კონცეფცია.',
    icon: Award,
    color: 'from-emerald-500 to-green-500',
  },
  {
    id: 4,
    institution: 'Commschool',
    institutionKa: 'Commschool',
    program: 'Front-End with Angular Programme',
    programKa: 'Front-End Angular-ით',
    dates: '2023 – 2024',
    datesKa: '2023 – 2024',
    description:
      'Angular apps with Routing, Reactive Forms, HttpClient and Dependency Injection; real-time features with WebSocket and NgRx Signal Store; responsive TailwindCSS interfaces.',
    descriptionKa:
      'Angular აპლიკაციები Routing-ით, Reactive Forms-ით, HttpClient-ითა და Dependency Injection-ით; რეალური დროის ფუნქციები WebSocket-ითა და NgRx Signal Store-ით; ადაპტიური TailwindCSS ინტერფეისები.',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
  },
];
