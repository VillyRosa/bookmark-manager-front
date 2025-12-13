import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tag-checkbox',
  imports: [],
  templateUrl: './tag-checkbox.html',
  styleUrl: './tag-checkbox.scss',
})
export class TagCheckbox {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() amount: number = 0;
  @Input() checkboxActive: boolean = false;

  protected toggleCheckboxActive(): void {
    this.checkboxActive = !this.checkboxActive;
  }
}
