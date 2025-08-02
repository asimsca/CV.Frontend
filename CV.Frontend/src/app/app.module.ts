import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptor } from './interceptors/http.interceptor';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from './shared/services/message.service';

@NgModule({
  declarations: [
    AppComponent
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
