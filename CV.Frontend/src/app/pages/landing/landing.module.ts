import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TemplatesComponent } from './templates/templates.component';
import { PricingComponent } from './pricing/pricing.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestCVComponent } from './test-cv/test-cv.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,  // ⬅️ Acts as a layout wrapper
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'templates', component: TemplatesComponent },
      { path: 'testCV', component: TestCVComponent }
    ]
  }
];

@NgModule({
  declarations: [
    LandingLayoutComponent,
    HomeComponent,
    AboutComponent,
    TemplatesComponent,
    PricingComponent,
    HeaderComponent,
    FooterComponent,
    TestCVComponent
  ],
  imports: [
    CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
  
  ],
  exports: [RouterModule]

})
export class LandingModule { }
