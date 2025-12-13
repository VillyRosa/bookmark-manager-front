import { Routes } from '@angular/router';
import authRoutes from './features/auth/auth.routes';
import {MainLayout} from './core/layouts/main-layout/main-layout';
import dashboardRoutes from '@features/dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      ...dashboardRoutes
    ]
  },
  ...authRoutes
];
