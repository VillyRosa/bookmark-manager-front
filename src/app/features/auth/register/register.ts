import {Component, inject} from '@angular/core';
import {Button} from '@shared/components/button/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputComponent} from '@shared/components/input/input';
import {Router, RouterLink} from '@angular/router';

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
  styleUrl: './register.scss',
})
export class Register {
  private router = inject(Router);

  protected registerForm: FormGroup = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  protected onSubmit(): void {
    this.router.navigateByUrl('/');
  }
}
