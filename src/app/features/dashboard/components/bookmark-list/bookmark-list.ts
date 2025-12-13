import {Component, Input} from '@angular/core';
import {Card} from '@features/dashboard/components/bookmark-list/components/card/card';
import {Button} from '@shared/components/button/button';
import {Icon} from '@shared/components/icon/icon';

@Component({
  selector: 'app-bookmark-list',
  imports: [
    Card,
    Button,
    Icon
  ],
  templateUrl: './bookmark-list.html',
  styleUrl: './bookmark-list.scss',
})
export class BookmarkList {
  @Input() bookmarkTitle: string = 'Title';
  @Input() bookmarks: [] = [];
}
