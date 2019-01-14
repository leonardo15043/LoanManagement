import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreditComponent } from './components/credit/credit.component';

const APP_ROUTES: Routes = [
  { path: 'register', component: UserComponent },
  { path: 'credit', component: CreditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'register' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
