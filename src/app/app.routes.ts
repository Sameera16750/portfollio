import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page.component').then(mod => mod.HomePageComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page.component').then(mod => mod.AboutPageComponent)
  },
  {
    path: 'credentials',
    loadComponent: () => import('./pages/credintials/credintials.component').then(mod => mod.CredintialsComponent)
  },
];
