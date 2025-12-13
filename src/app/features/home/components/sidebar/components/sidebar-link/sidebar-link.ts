import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar-link',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar-link.html',
  styleUrl: './sidebar-link.scss',
})
export class SidebarLink {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() routerLink: string = '';
}
