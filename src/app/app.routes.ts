import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreditComponent } from './components/credit/credit.component';

const APP_ROUTES: Routes = [
  { path: 'register/:id', component: UserComponent },
  { path: 'credit/:id', component: CreditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'register/nuevo' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
