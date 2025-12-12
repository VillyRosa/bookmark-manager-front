import { Component, Input } from '@angular/core';
import {ControlContainer, FormGroupDirective, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() type: 'text' | 'email' | 'number' | 'password' = 'text';
  @Input() placeholder: string = '';
}
