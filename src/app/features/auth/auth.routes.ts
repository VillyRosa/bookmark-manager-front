import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import {ForgotPassword} from '@features/auth/forgot-password/forgot-password';
import {ResetPassword} from '@features/auth/reset-password/reset-password';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'forgot-password', component: ForgotPassword },
      { path: 'reset-password', component: ResetPassword }
    ]
  }
];

export default routes;
