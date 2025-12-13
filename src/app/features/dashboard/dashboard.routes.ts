import {Routes} from '@angular/router';
import {Home} from '@features/dashboard/home/home';
import {Archived} from '@features/dashboard/archived/archived';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'archived', component: Archived }
    ]
  }
];

export default routes;
