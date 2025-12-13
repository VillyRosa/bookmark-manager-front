import { Component } from '@angular/core';
import {TagCheckbox} from '@features/home/components/sidebar/components/tag-checkbox/tag-checkbox';
import {SidebarLink} from '@features/home/components/sidebar/components/sidebar-link/sidebar-link';

@Component({
  selector: 'app-sidebar',
  imports: [
    TagCheckbox,
    SidebarLink
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

}
