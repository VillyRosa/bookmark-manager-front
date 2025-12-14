import {Component, inject} from '@angular/core';
import {Button} from "@shared/components/button/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "@shared/components/input/input";
import {Router, RouterLink} from "@angular/router";
import {Auth} from '@features/auth/services/auth';

@Component({
  selector: 'app-reset-password',
  imports: [
    Button,
    FormsModule,
    InputComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './reset-password.html',
  styleUrl: '../auth-style.scss',
})
export class ResetPassword {
  private auth = inject(Auth);
  protected email: string | null = null;

  constructor() {
    const navigation = history.state;
    this.email = navigation?.email ?? null;
  }

  protected resetPasswordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  protected onSubmit(): void {
    if (this.resetPasswordForm.invalid) return;

    this.auth.resetPassword({ email: this.email, ...this.resetPasswordForm.value });
  }
}
