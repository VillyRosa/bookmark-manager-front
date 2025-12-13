import { Component } from '@angular/core';
import {Button} from '@shared/components/button/button';
import {Tag} from '@features/dashboard/components/bookmark-list/components/card/components/tag/tag';
import {Info} from '@features/dashboard/components/bookmark-list/components/card/components/info/info';

@Component({
  selector: 'app-card',
  imports: [
    Button,
    Tag,
    Info
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

}
