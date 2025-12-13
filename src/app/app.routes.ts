import { Routes } from '@angular/router';
import authRoutes from './features/auth/auth.routes';
import {Home} from '@features/home/home';
import {Archived} from '@features/archived/archived';
import {MainLayout} from './core/layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'archived', component: Archived },
    ]
  },
  ...authRoutes
];
