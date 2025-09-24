"use strict";
(self["webpackChunkCV_Frontend"] = self["webpackChunkCV_Frontend"] || []).push([["src_app_pages_auth_auth_module_ts"],{

/***/ 8472:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ 726);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 6290);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 3142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full' // 👈 required for redirect to work properly
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent
}, {
  path: 'forgot-password',
  component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent
}];
class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 3142:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ForgotPasswordComponent {
  static {
    this.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 2,
      vars: 0,
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forgot-password works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6290:
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_validators_regex_patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/validators/regex-patterns */ 2823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/authentication.service */ 473);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 6037);
/* harmony import */ var src_app_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/sweet-alert.service */ 1365);








class LoginComponent {
  constructor(formBuilder, route, router, authenticationService, commonService, sweetAlertService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.commonService = commonService;
    this.sweetAlertService = sweetAlertService;
    this.errorMessage = '';
    this.isLoginSuccessful = false;
    this.isOTPEnabled = false;
    this.isPasswordHide = true;
    this.minPasswordLength = 8;
    this.passwordRegex = '';
    this.msg = '';
    this.hasError = (controlName, errorName) => {
      return this.loginForm.controls[controlName].hasError(errorName);
    };
    this.loginForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(src_app_validators_regex_patterns__WEBPACK_IMPORTED_MODULE_0__.RegexPatterns.emailPattern)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  ngOnInit() {
    ;
    const tokenValue = this.authenticationService.JwtToken;
    if (tokenValue) {
      this.router.navigate(['landing']);
    }
  }
  removeError() {
    this.errorMessage = '';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.errorMessage = '';
    let loginObj = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
      ip: ''
    };
    this.authenticationService.login(loginObj).subscribe(resp => {
      if (resp.isSuccess) {
        this.loginResponse = resp.data;
        //in case of OTP disbaled
        this.isLoginSuccessful = resp.isSuccess;
        this.authenticationService.JwtToken = resp.data.token;
        this.authenticationService.refreshToken = resp.data.refreshToken;
        this.authenticationService.setMenuItems(resp.data.menuItems);
        this.router.navigate(['dashboard']);
      } else {
        this.sweetAlertService.showError('Unsuccess', resp.message);
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_3__.SweetAlertService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 99,
      vars: 0,
      consts: [[1, "auth-body-bg"], [1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], ["id", "auth-review-carousel", 1, "owl-carousel", "owl-theme", "auth-review-carousel"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["href", "index.html", 1, "d-block", "card-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "card-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "card-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], ["action", "index.html"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "placeholder", "Enter username", 1, "form-control"], [1, "float-end"], ["href", "auth-recoverpw-2.html", 1, "text-muted"], [1, "form-label"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "placeholder", "Enter password", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light"], [1, "mdi", "mdi-eye-outline"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mt-5", "text-center"], ["href", "auth-register-2.html", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body", 0)(1, "div")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h4", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "5k");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "+ Satisfied clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \"");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div")(25, "h4", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Abs1981");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17)(30, "div", 18)(31, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div")(34, "h4", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "nezerious");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "- Skote User");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 22)(39, "div", 23)(40, "div", 5)(41, "div", 24)(42, "div", 25)(43, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "img", 27)(45, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 29)(47, "div")(48, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Welcome Back !");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Sign in to continue to Skote.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 31)(53, "form", 32)(54, "div", 12)(55, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 12)(59, "div", 35)(60, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " Remember me ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 45)(73, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Log In");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 47)(76, "h5", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Sign in with");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "ul", 49)(79, "li", 50)(80, "a", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "li", 50)(83, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "li", 50)(86, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 57)(89, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Don't have an account ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "a", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " Signup now ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 59)(94, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "\u00A9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, " Skote. Crafted with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, " by Themesbrand");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 726:
/*!***********************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class RegisterComponent {
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 2,
      vars: 0,
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6037:
/*!***************************************************!*\
  !*** ./src/app/services/common/common.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CommonService {
  constructor() {}
  static {
    this.ɵfac = function CommonService_Factory(t) {
      return new (t || CommonService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommonService,
      factory: CommonService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2823:
/*!**********************************************!*\
  !*** ./src/app/validators/regex-patterns.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegexPatterns: () => (/* binding */ RegexPatterns)
/* harmony export */ });
class RegexPatterns {
  static {
    this.nonFiveOrThirteenPattern = /^(?!5$|13$).+$/;
  }
  static {
    this.codePattern = /^(?=.{2,20})([a-zA-Z][a-zA-Z0-9 -]*)$/;
  }
  static {
    this.addressPattern = /^(?=.{5,150})([a-zA-Z0-9 ]*)$/;
  }
  static {
    this.bizNamePattern = /^(?=.{3,50})([a-zA-Z ]*)$/;
  }
  static {
    this.decimalNumberPattern = /^\b\d{2,2}\.\d{5,5}\b$/;
  }
  static {
    this.letterAndSpacePattern = /^(?=.{5,50})([a-zA-Z ]*)$/;
  }
  static {
    this.zeroPrefixedPhoneNumberPattern = /^[0][0-9]{10}$/;
  }
  static {
    this.specialPhoneNumberPattern = /^(?=.{11,11})([0][3][4][1-8]\d{7})*$/;
  }
  static {
    this.phoneNumberPattern = /^(0\d{10}|92\d{10})$/;
  }
  static {
    this.alphabeticStringPattern = /^(?=.{0,50})([a-zA-Z ]*)$/;
  }
  static {
    this.alphanumericStringPattern = /^(?=.{0,50})(\w)*$/;
  }
  static {
    this.cnicPattern = /^\d{5}-\d{7}-\d$/;
  }
  static {
    this.nicPattern = /^\d{3,3}-\d{2,2}-\d{6,6}$/;
  }
  static {
    this.otherSpecialPattern = /^(?=.*[A-Z\d])[A-Z\d]{11,}$/;
  }
  static {
    this.alphabeticCharactersOnlyPattern = /^[a-zA-Z ]*$/;
  }
  static {
    this.numericDigitsOnlyPattern = /^[0-9]*$/;
  }
  static {
    this.numbersOnlyPattern = /^[0-9]*$/;
  }
  static {
    this.digitsOnlyPattern = /^\d+$/;
  }
  static {
    this.quantityPattern = /^(?!0$)\d{2,}$/;
  }
  static {
    this.iccidPattern = /^\d{19}$/;
  }
  static {
    this.scratchCardPattern = /^\d{12}$/;
  }
  static {
    this.alphanumericCharactersPattern = /^[a-zA-Z0-9 ]*$/;
  }
  static {
    this.squareBracketsContentPattern = /\[(.*?)\]/;
  }
  static {
    this.specialCharactersExcludedPattern = /^[^`,!~@#_<{}+\[\]|\>=.?/:';$%^&()]$/;
  }
  static {
    this.specialFormatPattern = /^[A-Z\d]{3}-\d{4}-\d{4}$/;
  }
  static {
    this.emailPattern = /^\S+@\S+\.\S+$/;
  }
  static {
    this.fourOrSixDigits = /^\d{4}(\d{2})?$/;
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_auth_module_ts.js.map