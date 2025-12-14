import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InputComponent } from '@shared/components/input/input';
import { Button } from '@shared/components/button/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {Auth} from '@features/auth/services/auth';

@Component({
  selector: 'app-login',
  imports: [
    InputComponent,
    RouterModule,
    Button,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: '../auth-style.scss',
})
export class Login {
  private auth = inject(Auth);

  protected loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  protected onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.auth.login(this.loginForm.value);
  }
}
