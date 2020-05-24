import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'core', loadChildren: () => import('./core/core.module').then((module) => module.CoreModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
