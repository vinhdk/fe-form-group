import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutes } from './category.routing';
import { CategoryHomeComponent } from './pages';
import {
  CategoryCreateComponent,
  CategoryListComponent,
  CategoryUpdateComponent
} from './components';

const PAGES = [
  CategoryHomeComponent
];
const COMPONENTS = [
  CategoryCreateComponent,
  CategoryListComponent,
  CategoryUpdateComponent
];
@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes,
  ],
  declarations: [...PAGES, ...COMPONENTS]
})
export class CategoryModule { }
