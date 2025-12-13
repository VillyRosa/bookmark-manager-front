import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {
  @Input() value: string = 'Info';
  @Input() icon: string = '';
}
