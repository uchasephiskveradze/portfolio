# Ucha Sephiskveradze | Developer Portfolio

## Key Features & Architecture

This application was engineered with a strict focus on modern Angular best practices and web performance:

- **Modern Angular (v21):** Fully utilizes Standalone Components, the new `@for`/`@if` control flow, and strictly typed Reactive Forms.
- **Signal-Based State Management:** Uses Angular Signals natively for highly optimized, glitch-free UI state updates (e.g., Toast notifications, loading states).
- **Lighthouse Optimized:** Achieves elite Lighthouse scores through strategic use of `NgOptimizedImage` (WebP formats, explicit priority loading) and strict payload budgeting.
- **Functional Integrations:** Features a fully working Contact Form integrated with the EmailJS API, complete with custom Toast UI notifications and load-state handling.
- **Responsive & Accessible:** Fully responsive design built with Tailwind CSS, ensuring WCAG AA contrast compliance and semantic HTML structure.

## Tech Stack

- **Framework:** Angular v21
- **Styling:** Tailwind CSS
- **Icons:** Lucide Angular & Custom SVG Data Models
- **API Integration:** EmailJS (Browser SDK)
- **Deployment:** [Where you deploy it, e.g., Firebase Hosting / Vercel]

## Project Structure Highlights

The project follows a modular, feature-based architecture suitable for enterprise scaling:

```text
src/app/
├── core/             # Singleton services (Email, Toast)
├── features/         # Feature components (Hero, Skills, Projects, Contact)
└── shared/           # Reusable UI components (Toast Notifications)
```
