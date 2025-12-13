import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Icon} from '@shared/components/icon/icon';

@Component({
  selector: 'app-sidebar-link',
  imports: [
    RouterLink,
    RouterLinkActive,
    Icon
  ],
  templateUrl: './sidebar-link.html',
  styleUrl: './sidebar-link.scss',
})
export class SidebarLink {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() routerLink: string = '';
}
