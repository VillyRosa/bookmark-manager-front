import {Component, inject} from '@angular/core';
import {Button} from "@shared/components/button/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "@shared/components/input/input";
import {Router, RouterLink} from "@angular/router";

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
  private router = inject(Router);

  protected resetPasswordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  protected onSubmit(): void {
    this.router.navigateByUrl('/auth/login');
  }
}
