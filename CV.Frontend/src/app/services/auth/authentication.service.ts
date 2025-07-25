import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EncryptStorage } from 'encrypt-storage';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { LoginResponse } from 'src/app/models/dto/response/user-management/login-response';
import { LoginRequest } from 'src/app/models/dto/request/user-management/login-request';
import { RefreshTokenRequest } from 'src/app/models/dto/request/user-management/refresh-token-request';
import { AuthorizeOTPRequest } from 'src/app/models/dto/request/user-management/authorize-otp-request';
import { RefreshTokenResponse } from 'src/app/models/dto/response/user-management/refresh-token-response';
import { MenuItems } from 'src/app/models/dto/response/user-management/menu-items';
import { ForGotPasswordRequestDto } from 'src/app/models/dto/request/user-management/forgot-password-request';
import { BaseResponse } from 'src/app/models/base-response';
import { ValidateOtpRequestDto } from 'src/app/models/dto/request/user-management/validate-otp-request';
import { ResetPasswordRequestDto } from 'src/app/models/dto/request/user-management/reset-password-request';
import { LogoutRequest } from 'src/app/models/dto/request/user-management/logout-request';
export const encryptStorage = new EncryptStorage(
  'dU0OlV5B7xMu9g33uP1DMPoqKGBUhROw',
  {
    prefix: '@coinEnginePortal',
  }
);

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public baseAPIUrl: string = environment.baseAPIUrl;

  constructor(private http: HttpClient, private router: Router) {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea == encryptStorage) {
    }
    if (event.storageArea == localStorage) {
      let token = this.JwtToken;
      if (token == '') {
        // you can update this as per your key
        this.router.navigate(['/login']);
      }
    }
  }

  get refreshToken() {
    return encryptStorage.getItem('coinEngineRefreshToken') ?? '';
  }

  set refreshToken(token: string) {
    encryptStorage.setItem('coinEngineRefreshToken', token);
  }

  get JwtToken() {
    return encryptStorage.getItem('coinEngineJwtToken') ?? '';
  }

  set JwtToken(token: string) {
    encryptStorage.setItem('coinEngineJwtToken', token);
  }

  get getRetailerInfo() {
    return JSON.parse(localStorage.getItem('retailerInfo') || '{}');
  }

  setMenuItems(menuItems: MenuItems[]) {

    let objItem: MenuItems = {
      menuId: 111,
      userTypeId:1 , //hard coded , take it from jwt claims later
      menuName: 'Dashboard',
      menuParent: 0,
      menuUrl: '/dashboard',
      menuImgPath: './assets/images/disown.svg',
      sortOrder: 0,
      showInMenu:true,
      children: [],
    };
    menuItems.unshift(objItem);
    localStorage.setItem('coinEngineMenuItems', JSON.stringify(menuItems));
  }

  /**
   * Get Object having specific key
   * Example :this.authenticationService.getClaims("gid")
   * or
   * Import userSession from 'src/app/models/userSession.ts'
   * this.authenticationService.getClaims(userSession.UserIdClaim)
   *
   * @param key Key of the object to be return
   *
   * @return  Object of type any
   */
  getClaims(key: string): any {
    return jwtDecode<any>(this.JwtToken)[key];
  }

  getAllClaims(): any {
    return jwtDecode<any>(this.JwtToken);
  }

  login(
    loginRequest: LoginRequest
  ): Observable<BaseResponse<LoginResponse>> {
    const uri = `${this.baseAPIUrl}/Auth/login`;
    return this.http
      .post<BaseResponse<LoginResponse>>(uri, loginRequest)
      .pipe(map((data) => <BaseResponse<LoginResponse>>data));
  }

  authorizeOTP(
    authorizeOTPRequest: AuthorizeOTPRequest
  ): Observable<LoginResponse> {
    const uri = `${this.baseAPIUrl}/login/AuthorizeOTP`;
    return this.http
      .post<LoginResponse>(uri, authorizeOTPRequest)
      .pipe(map((data) => <LoginResponse>data));
  }
  logout(logoutRequest: LogoutRequest) : Observable<BaseResponse<boolean>> {
    encryptStorage.clear();
          this.router.navigate(['login']);
    const uri = `${this.baseAPIUrl}/authenticator/LogOut`;
    return this.http
    .post<BaseResponse<boolean>>(uri, logoutRequest)
    .pipe(map((data) => <BaseResponse<boolean>>data));
  }
  refreshAccessToken(
    refreshTokenRequest: RefreshTokenRequest
  ): Observable<BaseResponse<RefreshTokenResponse>> {
    const uri = `${this.baseAPIUrl}/authenticator/refresh`;
    return this.http
      .post<BaseResponse<RefreshTokenResponse>>(uri, refreshTokenRequest)
      .pipe(map((data) => <BaseResponse<RefreshTokenResponse>>data));
  }

  forgotPassword(
    request: ForGotPasswordRequestDto
  ): Observable<BaseResponse<string>> {
    const uri = `${this.baseAPIUrl}/User/ForgotPassword`;
    return this.http
      .post<BaseResponse<string>>(uri, request)
      .pipe(map((data) => <BaseResponse<string>>data));
  }

//method for validating otp used for forgot password method
  validateOtp(
    request: ValidateOtpRequestDto
  ): Observable<BaseResponse<string>> {
    const uri = `${this.baseAPIUrl}/User/ValidateOtp`;
    return this.http
      .post<BaseResponse<string>>(uri, request)
      .pipe(map((data) => <BaseResponse<string>>data));
  }

  //reset new password if forgot old one
  resetPassword(
    request: ResetPasswordRequestDto
  ): Observable<BaseResponse<string>> {
    const uri = `${this.baseAPIUrl}/User/ResetPassword`;
    return this.http
      .post<BaseResponse<string>>(uri, request)
      .pipe(map((data) => <BaseResponse<string>>data));
  }

  private getApiHeaders(): HttpHeaders {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return headers;
  }
  
}