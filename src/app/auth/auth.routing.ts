import { Routes, RouterModule } from '@angular/router';
import {
  LoginComponent,
  NavigateComponent,
  RegisterComponent,
} from './components';

const routes: Routes = [
  { path: '', redirectTo: 'navigate' },
  { path: 'navigate', component: NavigateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

export const AuthRoutes = RouterModule.forChild(routes);
