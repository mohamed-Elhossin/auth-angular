import { CreateComponent } from './student/create/create.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './student/list/list.component';

import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student', component: ListComponent, canActivate: [authGuard] },
  { path: 'create_student', component:  CreateComponent , canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
