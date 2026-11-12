import { Routes } from '@angular/router';
import { App } from './app';

// No route titles: LanguageService sets the title per language.
export const routes: Routes = [
  {
    path: ':lang',
    component: App,
  },
  {
    path: '',
    component: App,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'en',
  },
];
