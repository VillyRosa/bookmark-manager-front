import { Component } from '@angular/core';
import {TagCheckbox} from './components/tag-checkbox/tag-checkbox';
import {SidebarLink} from './components/sidebar-link/sidebar-link';

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
