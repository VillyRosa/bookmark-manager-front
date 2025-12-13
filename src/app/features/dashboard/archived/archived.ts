import { Component } from '@angular/core';
import {BookmarkList} from '@features/dashboard/components/bookmark-list/bookmark-list';

@Component({
  selector: 'app-archived',
  imports: [
    BookmarkList
  ],
  templateUrl: './archived.html',
  styleUrl: './archived.scss',
})
export class Archived {

}
