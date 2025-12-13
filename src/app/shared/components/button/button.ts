import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() hierarchy: 'primary' | 'secondary' | 'error' = 'primary';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() onlyIcon: boolean = false;
}
