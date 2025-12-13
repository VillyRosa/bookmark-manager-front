import { Component } from '@angular/core';
import {Button} from '@shared/components/button/button';
import {Avatar} from './components/avatar/avatar';
import {SearchInput} from './components/search-input/search-input';
import {Icon} from '@shared/components/icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [
    Button,
    Avatar,
    SearchInput,
    Icon
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
