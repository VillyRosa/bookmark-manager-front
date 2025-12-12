import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InputComponent } from '@shared/components/input/input';
import { Button } from '@shared/components/button/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  private router = inject(Router);

  protected loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  protected onSubmit(): void {
    this.router.navigateByUrl('/');
  }
}
