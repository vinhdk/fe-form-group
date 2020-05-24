import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '', redirectTo: 'category'
      },
      {
        path: 'category', loadChildren: () => import('./modules/category/category.module').then((module) => module.CategoryModule)
      },
      {
        path: 'product', loadChildren: () => import('./modules/product/product.module').then((module) => module.ProductModule)
      }
    ]
  },
];

export const CoreRoutes = RouterModule.forChild(routes);
