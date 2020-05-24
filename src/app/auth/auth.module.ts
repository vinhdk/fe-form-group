import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import {
  LoginComponent,
  NavigateComponent,
  RegisterComponent,
} from './components';

const COMPONENTS = [
  LoginComponent,
  NavigateComponent,
  RegisterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
  ],
  declarations: [...COMPONENTS]
})
export class AuthModule { }
