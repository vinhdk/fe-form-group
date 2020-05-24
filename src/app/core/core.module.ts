import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutes } from './core.routing';
import { LayoutComponent } from './pages';
const PAGES = [
  LayoutComponent
];
@NgModule({
  imports: [
    CommonModule,
    CoreRoutes,
  ],
  declarations: [...PAGES]
})
export class CoreModule { }
