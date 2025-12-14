import {Component, inject} from '@angular/core';
import {Button} from "@shared/components/button/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "@shared/components/input/input";
import {Router, RouterLink} from "@angular/router";
import {Auth} from '@features/auth/services/auth';

@Component({
  selector: 'app-forgot-password',
  imports: [
    Button,
    FormsModule,
    InputComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './forgot-password.html',
  styleUrl: '../auth-style.scss',
})
export class ForgotPassword {
  private auth = inject(Auth);

  protected forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  protected onSubmit(): void {
    if (this.forgotPasswordForm.invalid) return;

    this.auth.resetPasswordRequest(this.forgotPasswordForm.value.email);
  }
}
