import { Routes } from '@angular/router';
import authRoutes from './features/auth/auth.routes';
import {Home} from '@features/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  ...authRoutes
];
