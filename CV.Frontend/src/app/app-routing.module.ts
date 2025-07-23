import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
const routes: Routes = [
  {
    path :'',
    component:LandingComponent
  },
  {
    path :'auth',
    loadChildren:()=> import('./pages/auth/auth.module').then((mod)=>mod.AuthModule),
  },
  {
    path :'admin',
    loadChildren:()=> import('./pages/admin/admin.module').then((mod)=>mod.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
