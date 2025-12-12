import {Component, inject} from '@angular/core';
import {Button} from "@shared/components/button/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "@shared/components/input/input";
import {Router, RouterLink} from "@angular/router";

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
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  private router = inject(Router);

  protected resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  protected onSubmit(): void {
    this.router.navigateByUrl('/auth/reset-password');
  }
}
