import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path :'',
    loadChildren:()=> import('./pages/landing/landing.module').then((mod)=>mod.LandingModule),
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
