import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // 👈 import nécessaire

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // ✅ login route
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' } // ✅ redirection vers login
];
