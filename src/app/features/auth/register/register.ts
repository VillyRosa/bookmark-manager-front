import {Component, inject} from '@angular/core';
import {Button} from '@shared/components/button/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputComponent} from '@shared/components/input/input';
import {RouterLink} from '@angular/router';
import {Auth} from '@features/auth/services/auth';

@Component({
  selector: 'app-register',
  imports: [
    Button,
    FormsModule,
    InputComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: '../auth-style.scss',
})
export class Register {
  private auth = inject(Auth)

  protected registerForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  protected onSubmit(): void {
    if (this.registerForm.invalid) return;

    this.auth.register(this.registerForm.value);
  }
}
