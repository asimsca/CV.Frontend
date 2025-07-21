import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, TimeoutError } from 'rxjs';

import {
  catchError,
  switchMap,
  finalize,
  filter,
  take,
  map,
} from 'rxjs/operators';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoaderService } from '../shared/services/loader.service';
import { RefreshTokenRequest } from '../models/dto/request/refresh-token-request';
import { RefreshTokenResponse } from '../models/dto/response/user-management/refresh-token-response';
import { SweetAlertService } from '../shared/services/sweet-alert.service';
import { LogoutRequest } from '../models/dto/request/logout-request';
import { AuthenticationService } from '../services/auth/authentication.service';
import { BaseResponse } from '../models/base-response';
@Injectable()
export class HttpInterceptor {
  constructor(
    private authService: AuthenticationService,
    private cookieService: CookieService,
    public loaderService: LoaderService,
    private router: Router,
    private sweetAlertService:SweetAlertService,
    
  ) {
    this.UUID = this.cookieService.get('browserUUID');
  }
  private requestCount = 0;
  private sessionId: string;
  private userId: string;
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  UUID: any;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
    | any
  > {

    this.requestCount++;
    // set loading to true for the first request
    if (this.requestCount === 1) {
      this.loaderService.isLoading.next(true);
    }
    var token = '';
    token = this.authService.JwtToken;
    if(token!="" && token!=undefined){
      this.sessionId = this.authService.getClaims('SessionId');
    }
    
    this.loaderService.isLoading.next(true);
    // this.progressBarService.show();
    return next.handle(this.addTokenToRequest(request, token, false)).pipe(
      finalize(() => {
        this.requestCount--;
        // set loading to false when all requests have completed
        if (this.requestCount === 0) {
          this.loaderService.isLoading.next(false);
        }
      }),
      catchError((err) => {
        console.log('Error Occured = ', err);
var message=err?.error?.message;
        if (err.status == 499) {
          //499 occurs when api responding takes time and client side timout
          console.log('Error Occured = ', err);          
          this.sweetAlertService.showError('Failure', 'HttpErrorResponse 499 : Something Went Wrong. Please Try again Later');
        }
        if (err instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>err).status) {
            case 401:
              if (
                request.url.indexOf('login/refresh') > -1 &&
                this.authService.JwtToken != ''
              ) {
                return <any>this.Logout();
              } else {
                return this.handle401Error(request, next);
              }

            case 500:
              if(message){
                this.sweetAlertService.showError('Failure',message);
              }
              else{
                this.sweetAlertService.showError('Failure', 'Something Went Wrong. Please Try again Later');
              } 
              if (request.url.indexOf('login/refresh') > -1) {
                return <any>this.Logout();;
              }
              break;
            case 400:
              if(message){
                this.sweetAlertService.showError('Failure',message);
              }
              else{
                this.sweetAlertService.showError('Failure', 'HttpErrorResponse 400 : Bad Request Received.');      
              } 
                      
              if (request.url.indexOf('login') > -1) {
              }
              break;
            case 403:
              this.sweetAlertService.showError('Failure', 'HttpErrorResponse 403 : Permission Denied.');
              this.router.navigate(['dashboard']);
              break;
            default:
          }
        } else {
        }
      })
    );
  }
private Logout(){
  let logoutRequest :LogoutRequest={
    sessionId:"1"
  }
  this.authService.logout(logoutRequest).subscribe((resp) => {
  });
}
  private addTokenToRequest(
    request: HttpRequest<any>,
    token: string,
    isReplay: boolean
  ): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: Bearer ${token},
        Platform: '1',
        UUID: this.UUID,
      },
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.tokenSubject.next('');
  
      const refTokenObj: RefreshTokenRequest = {
        token: this.authService.JwtToken,
        refreshToken: this.authService.refreshToken,
      };
  
      return this.authService.refreshAccessToken(refTokenObj).pipe(
        switchMap((resp: BaseResponse<RefreshTokenResponse>) => {
          this.isRefreshingToken = false;
          if (resp.isSuccessful) {
            this.authService.JwtToken = resp.data.updatedAccessToken;
            this.authService.refreshToken = resp.data.updatedRefreshToken;
            this.tokenSubject.next(resp.data.updatedAccessToken);
            return next.handle(this.addTokenToRequest(request, resp.data.updatedAccessToken, false));
          } else {
            this.tokenSubject.next('');
            this.sweetAlertService.showError('Failure', resp.message);
            this.Logout();
            return throwError(() => new Error('Refresh failed'));
          }
        }),
        catchError(err => {
          this.isRefreshingToken = false;
          this.tokenSubject.next('');
          this.Logout();
          return throwError(() => err);
        })
      );
    } else {
      // Wait until the token is refreshed
      return this.tokenSubject.pipe(
        filter(token => token != null && token !== ''),
        take(1),
        switchMap(token => {
          return next.handle(this.addTokenToRequest(request, token, false));
        })
      );
    }
  }
}