import {Component, Input} from '@angular/core';
import {Card} from '@features/dashboard/components/bookmark-list/components/card/card';
import {Button} from '@shared/components/button/button';

@Component({
  selector: 'app-bookmark-list',
  imports: [
    Card,
    Button
  ],
  templateUrl: './bookmark-list.html',
  styleUrl: './bookmark-list.scss',
})
export class BookmarkList {
  @Input() title: string = 'Title';
  @Input() bookmarks: [] = [];
}
