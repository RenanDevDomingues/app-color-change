import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'color-change',
    loadComponent: () => import('./pages/color-change/color-change.page').then((m) => m.ColorChangePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];