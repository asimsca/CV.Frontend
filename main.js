"use strict";
(self["webpackChunkCV_Frontend"] = self["webpackChunkCV_Frontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing/landing.module */ 8510)).then(mod => mod.LandingModule)
}, {
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.module */ 8472)).then(mod => mod.AuthModule)
}, {
  path: 'admin',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin/admin.module */ 7830)).then(mod => mod.AdminModule)
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'CV.Frontend';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/http.interceptor */ 2434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/message.service */ 1029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);









class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
        useClass: _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_2__.HttpInterceptor,
        multi: true
      }, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService, _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 9233:
/*!***************************************!*\
  !*** ./src/app/enums/message.enum.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageEnum: () => (/* binding */ MessageEnum)
/* harmony export */ });
var MessageEnum;
(function (MessageEnum) {
  MessageEnum["dashboardShowSubHeader"] = "dashboardShowSubHeader";
  MessageEnum["dashboardSubHeaderTitle"] = "dashboardSubHeaderTitle";
})(MessageEnum || (MessageEnum = {}));

/***/ }),

/***/ 2434:
/*!**************************************************!*\
  !*** ./src/app/interceptors/http.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpInterceptor: () => (/* binding */ HttpInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/authentication.service */ 473);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/loader.service */ 3657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/sweet-alert.service */ 1365);









class HttpInterceptor {
  constructor(authService, cookieService, loaderService, router, sweetAlertService) {
    this.authService = authService;
    this.cookieService = cookieService;
    this.loaderService = loaderService;
    this.router = router;
    this.sweetAlertService = sweetAlertService;
    this.requestCount = 0;
    this.sessionId = "";
    this.userId = "";
    this.isRefreshingToken = false;
    this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
    this.UUID = this.cookieService.get('browserUUID');
  }
  intercept(request, next) {
    this.requestCount++;
    // set loading to true for the first request
    if (this.requestCount === 1) {
      this.loaderService.isLoading.next(true);
    }
    var token = '';
    token = this.authService.JwtToken;
    if (token != "" && token != undefined) {
      this.sessionId = this.authService.getClaims('SessionId');
    }
    this.loaderService.isLoading.next(true);
    // this.progressBarService.show();
    return next.handle(this.addTokenToRequest(request, token, false)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
      this.requestCount--;
      // set loading to false when all requests have completed
      if (this.requestCount === 0) {
        this.loaderService.isLoading.next(false);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      console.log('Error Occured = ', err);
      var message = err?.error?.message;
      if (err.status == 499) {
        //499 occurs when api responding takes time and client side timout
        console.log('Error Occured = ', err);
        this.sweetAlertService.showError('Failure', 'HttpErrorResponse 499 : Something Went Wrong. Please Try again Later');
      }
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
        switch (err.status) {
          case 401:
            if (request.url.indexOf('login/refresh') > -1 && this.authService.JwtToken != '') {
              return this.Logout();
            } else {
              return this.handle401Error(request, next);
            }
          case 500:
            if (message) {
              this.sweetAlertService.showError('Failure', message);
            } else {
              this.sweetAlertService.showError('Failure', 'Something Went Wrong. Please Try again Later');
            }
            if (request.url.indexOf('login/refresh') > -1) {
              return this.Logout();
              ;
            }
            break;
          case 400:
            if (message) {
              this.sweetAlertService.showError('Failure', message);
            } else {
              this.sweetAlertService.showError('Failure', 'HttpErrorResponse 400 : Bad Request Received.');
            }
            if (request.url.indexOf('login') > -1) {}
            break;
          case 403:
            this.sweetAlertService.showError('Failure', 'HttpErrorResponse 403 : Permission Denied.');
            this.router.navigate(['dashboard']);
            break;
          default:
        }
      } else {}
    }));
  }
  Logout() {
    let logoutRequest = {
      sessionId: "1"
    };
    this.authService.logout(logoutRequest).subscribe(resp => {});
  }
  addTokenToRequest(request, token, isReplay) {
    return request.clone({
      setHeaders: {
        Authorization: 'Bearer ${token}',
        Platform: '1',
        UUID: this.UUID
      }
    });
  }
  handle401Error(request, next) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.tokenSubject.next('');
      const refTokenObj = {
        token: this.authService.JwtToken,
        refreshToken: this.authService.refreshToken
      };
      return this.authService.refreshAccessToken(refTokenObj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(resp => {
        this.isRefreshingToken = false;
        if (resp.isSuccess) {
          this.authService.JwtToken = resp.data.updatedAccessToken;
          this.authService.refreshToken = resp.data.updatedRefreshToken;
          this.tokenSubject.next(resp.data.updatedAccessToken);
          return next.handle(this.addTokenToRequest(request, resp.data.updatedAccessToken, false));
        } else {
          this.tokenSubject.next('');
          this.sweetAlertService.showError('Failure', resp.message);
          this.Logout();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => new Error('Refresh failed'));
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
        this.isRefreshingToken = false;
        this.tokenSubject.next('');
        this.Logout();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => err);
      }));
    } else {
      // Wait until the token is refreshed
      return this.tokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(token => token != null && token !== ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(token => {
        return next.handle(this.addTokenToRequest(request, token, false));
      }));
    }
  }
  static {
    this.ɵfac = function HttpInterceptor_Factory(t) {
      return new (t || HttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_2__.SweetAlertService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
      token: HttpInterceptor,
      factory: HttpInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 473:
/*!*********************************************************!*\
  !*** ./src/app/services/auth/authentication.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService),
/* harmony export */   encryptStorage: () => (/* binding */ encryptStorage)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var encrypt_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! encrypt-storage */ 4011);
/* harmony import */ var encrypt_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(encrypt_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ 4751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);








const encryptStorage = new encrypt_storage__WEBPACK_IMPORTED_MODULE_1__.EncryptStorage('dU0OlV5B7xMu9g33uP1DMPoqKGBUhROw', {
  prefix: '@coinEnginePortal'
});
class AuthenticationService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.baseAPIUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAPIUrl;
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }
  storageEventListener(event) {
    if (event.storageArea == encryptStorage) {}
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
  set refreshToken(token) {
    encryptStorage.setItem('coinEngineRefreshToken', token);
  }
  get JwtToken() {
    return encryptStorage.getItem('coinEngineJwtToken') ?? '';
  }
  set JwtToken(token) {
    encryptStorage.setItem('coinEngineJwtToken', token);
  }
  get getRetailerInfo() {
    return JSON.parse(localStorage.getItem('retailerInfo') || '{}');
  }
  setMenuItems(menuItems) {
    let objItem = {
      menuId: 111,
      userTypeId: 1,
      menuName: 'Dashboard',
      menuParent: 0,
      menuUrl: '/dashboard',
      menuImgPath: './assets/images/disown.svg',
      sortOrder: 0,
      showInMenu: true,
      children: []
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
  getClaims(key) {
    return (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(this.JwtToken)[key];
  }
  getAllClaims() {
    return (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(this.JwtToken);
  }
  login(loginRequest) {
    const uri = `${this.baseAPIUrl}/Auth/login`;
    return this.http.post(uri, loginRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data));
  }
  authorizeOTP(authorizeOTPRequest) {
    const uri = `${this.baseAPIUrl}/login/AuthorizeOTP`;
    return this.http.post(uri, authorizeOTPRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data));
  }
  logout(logoutRequest) {
    encryptStorage.clear();
    this.router.navigate(['login']);
    const uri = `${this.baseAPIUrl}/authenticator/LogOut`;
    return this.http.post(uri, logoutRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data));
  }
  refreshAccessToken(refreshTokenRequest) {
    const uri = `${this.baseAPIUrl}/authenticator/refresh`;
    return this.http.post(uri, refreshTokenRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data));
  }
  forgotPassword(request) {
    const uri = `${this.baseAPIUrl}/User/ForgotPassword`;
    return this.http.post(uri, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data));
  }
  //method for validating otp used for forgot password method
  validateOtp(request) {
    const uri = `${this.baseAPIUrl}/User/ValidateOtp`;
    return this.http.post(uri, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data));
  }
  //reset new password if forgot old one
  resetPassword(request) {
    const uri = `${this.baseAPIUrl}/User/ResetPassword`;
    return this.http.post(uri, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data));
  }
  getApiHeaders() {
    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }
  static {
    this.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3657:
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LoaderService {
  constructor() {
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  }
  static {
    this.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1029:
/*!****************************************************!*\
  !*** ./src/app/shared/services/message.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var src_app_enums_message_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/message.enum */ 9233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class MessageService {
  constructor() {
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.allMap = new Map();
  }
  sendMessage(key, message) {
    if (key == src_app_enums_message_enum__WEBPACK_IMPORTED_MODULE_0__.MessageEnum.dashboardSubHeaderTitle) {
      this.allMap.delete(key);
      this.allMap.set(src_app_enums_message_enum__WEBPACK_IMPORTED_MODULE_0__.MessageEnum.dashboardShowSubHeader, true);
    }
    this.allMap.set(key, message);
    this.subject.next(this.allMap);
  }
  clearMessage() {
    this.allMap.clear();
    this.subject.next(this.allMap);
  }
  getMessage() {
    return this.subject.asObservable();
  }
  static {
    this.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1365:
/*!********************************************************!*\
  !*** ./src/app/shared/services/sweet-alert.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SweetAlertService: () => (/* binding */ SweetAlertService)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class SweetAlertService {
  constructor() {}
  showSuccess(title, text = '') {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'success',
      title: title,
      text: text
    });
  }
  showError(title, text = '') {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'error',
      title: title,
      text: text
    });
  }
  showInfo(title, text = '') {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'info',
      title: title,
      text: text
    });
  }
  showWarning(title, text = '') {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'warning',
      title: title,
      text: text
    });
  }
  showConfirmation(title = 'Are you sure?', text = "You won't be able to revert this", confirmButtonText = 'Yes, delete it!', cancelButtonText = 'No, cancel it!') {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
  }
  static {
    this.ɵfac = function SweetAlertService_Factory(t) {
      return new (t || SweetAlertService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SweetAlertService,
      factory: SweetAlertService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  environmentName: 'development',
  baseAPIUrl: 'https://localhost:44308/api'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 3224);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);


window.$ = jquery__WEBPACK_IMPORTED_MODULE_0__;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0__;

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map