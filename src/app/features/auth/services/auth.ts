import {inject, Injectable} from '@angular/core';
import {Login} from '@features/auth/models/login';
import {Router} from '@angular/router';
import {User} from '@features/auth/models/user';
import {Register} from '@features/auth/models/register';
import {ResetPassword} from '@features/auth/models/reset-password';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private router = inject(Router);

  public login(login: Login): void {
    const usersInLocalStorage: string | null = localStorage.getItem('users');
    const users: Register[] = JSON.parse(usersInLocalStorage ?? '[]');
    const foundUser: Register[] = users.filter(user => user.email === login.email && user.password === login.password);

    if (foundUser.length === 0) {
      console.error('Invalid credentials');
      return;
    }

    const { password, ...user } = foundUser[0];
    const authUser: User = user;

    localStorage.setItem('authUser', JSON.stringify(authUser));
    this.router.navigateByUrl('/');
  }

  public register(register: Register): void {
    const usersInLocalStorage: string | null = localStorage.getItem('users');
    const users: Register[] = JSON.parse(usersInLocalStorage ?? '[]');

    if (users.filter(user => user.email === register.email).length > 0) {
      console.error('User already exists');
      return;
    }

    users.push(register);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigateByUrl('/auth/login');
  }

  public resetPasswordRequest(email: string): void {
    this.router.navigateByUrl('/auth/reset-password', {state: {email}});
  }

  public resetPassword(resetPassword: ResetPassword): void {
    if (resetPassword.password !== resetPassword.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const usersInLocalStorage: string | null = localStorage.getItem('users');
    const users: Register[] = JSON.parse(usersInLocalStorage ?? '[]');
    const foundUser: Register[] = users.filter(user => user.email === resetPassword.email);

    if (foundUser.length === 0) {
      console.error('User not exists');
      return;
    }

    const usersNewList: Register[] = users.filter((user) => user.email !== resetPassword.email);
    foundUser[0].password = resetPassword.password;
    usersNewList.push(foundUser[0])
    localStorage.setItem('users', JSON.stringify(usersNewList));

    this.router.navigateByUrl('/auth/login');
  }

  public getAuthenticatedUser(): User | null {
    const authUserInLocalStorage: string | null = localStorage.getItem('authUser');

    if (!authUserInLocalStorage) {
      return null;
    }

    return JSON.parse(authUserInLocalStorage);
  }

  public logout(): void {
    localStorage.removeItem('authUser');
    this.router.navigateByUrl('/auth/login');
  }
}
