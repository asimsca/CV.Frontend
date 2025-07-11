import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', // 👈 redirect to login
    pathMatch: 'full'     // 👈 required for redirect to work properly
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent
  },
  { 
    path: 'cv-list',
    component: CvListComponent
  },  
  {
    path: 'users',
    component: UsersComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
