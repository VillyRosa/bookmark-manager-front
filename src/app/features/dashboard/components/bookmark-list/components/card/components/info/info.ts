import {Component, Input} from '@angular/core';
import {Icon} from '@shared/components/icon/icon';

@Component({
  selector: 'app-info',
  imports: [
    Icon
  ],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {
  @Input() value: string = 'Info';
  @Input() icon: string = '';
}
