import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { CvListComponent } from './pages/admin/cv-list/cv-list.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptor } from './interceptors/http.interceptor';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from './shared/services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    UsersComponent,
    CvListComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpInterceptor, multi:true},
    DatePipe,
    CookieService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
