import { Component } from '@angular/core';
import {BookmarkList} from '@features/dashboard/components/bookmark-list/bookmark-list';

@Component({
  selector: 'app-home',
  imports: [
    BookmarkList
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
