"use strict";
(self["webpackChunkCV_Frontend"] = self["webpackChunkCV_Frontend"] || []).push([["src_app_pages_admin_admin_module_ts"],{

/***/ 4801:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/admin-layout/admin-layout.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AdminLayoutComponent {
  static {
    this.ɵfac = function AdminLayoutComponent_Factory(t) {
      return new (t || AdminLayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      decls: 3,
      vars: 0,
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-layout works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7830:
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _cv_list_cv_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cv-list/cv-list.component */ 6891);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ 6235);
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ 4801);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 5255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);








const routes = [{
  path: '',
  component: _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__.AdminLayoutComponent,
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent
  }, {
    path: 'users',
    component: _users_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent
  }, {
    path: 'cv-list',
    component: _cv_list_cv_list_component__WEBPACK_IMPORTED_MODULE_0__.CvListComponent
  }]
}];
class AdminModule {
  static {
    this.ɵfac = function AdminModule_Factory(t) {
      return new (t || AdminModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent, _cv_list_cv_list_component__WEBPACK_IMPORTED_MODULE_0__.CvListComponent, _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__.AdminLayoutComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6891:
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/cv-list/cv-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CvListComponent: () => (/* binding */ CvListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CvListComponent {
  static {
    this.ɵfac = function CvListComponent_Factory(t) {
      return new (t || CvListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvListComponent,
      selectors: [["app-cv-list"]],
      decls: 2,
      vars: 0,
      template: function CvListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cv-list works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5255:
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class DashboardComponent {
  constructor() {
    this.showLayoutsSubMenu = false;
  }
  menuClick() {
    this.toggleMenu(["sidebar-enable", "vertical-collpsed"]);
  }
  toggleMenu(className) {
    debugger;
    className.forEach(className => {
      if (!document.body.classList.contains(className)) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });
  }
  toggleMenu2() {
    this.showLayoutsSubMenu = !this.showLayoutsSubMenu;
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 1229,
      vars: 3,
      consts: [["data-sidebar", "dark"], ["id", "layout-wrapper"], ["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["href", "index.html", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["href", "index.html", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.svg", "alt", "", "height", "22"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19"], ["type", "button", "id", "vertical-menu-btn", 1, "btn", "btn-sm", "px-3", "font-size-16", "header-item", "waves-effect", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], [1, "app-search", "d-none", "d-lg-block"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "bx", "bx-search-alt"], [1, "dropdown", "dropdown-mega", "d-none", "d-lg-block", "ml-2"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "false", "aria-expanded", "false", 1, "btn", "header-item", "waves-effect"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu", "dropdown-megamenu"], [1, "row"], [1, "col-sm-8"], [1, "col-md-4"], [1, "font-size-14", "mt-0"], [1, "list-unstyled", "megamenu-list"], ["href", "javascript:void(0);"], [1, "col-sm-4"], [1, "col-sm-6"], [1, "col-sm-5"], ["src", "assets/images/megamenu-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "dropdown", "d-inline-block", "d-lg-none", "ml-2"], ["type", "button", "id", "page-header-search-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon", "waves-effect"], [1, "mdi", "mdi-magnify"], ["aria-labelledby", "page-header-search-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right", "p-0"], [1, "p-3"], [1, "form-group", "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], [1, "dropdown", "d-inline-block"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "header-item", "waves-effect"], ["src", "assets/images/flags/us.jpg", "alt", "Header Language", "height", "16", 1, ""], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item"], ["src", "assets/images/flags/spain.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], [1, "align-middle"], ["src", "assets/images/flags/germany.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], ["src", "assets/images/flags/italy.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], ["src", "assets/images/flags/russia.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], [1, "dropdown", "d-none", "d-lg-inline-block", "ml-1"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon", "waves-effect"], [1, "bx", "bx-customize"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "#", 1, "dropdown-icon-item"], ["src", "assets/images/brands/github.png", "alt", "Github"], ["src", "assets/images/brands/bitbucket.png", "alt", "bitbucket"], ["src", "assets/images/brands/dribbble.png", "alt", "dribbble"], ["src", "assets/images/brands/dropbox.png", "alt", "dropbox"], ["src", "assets/images/brands/mail_chimp.png", "alt", "mail_chimp"], ["src", "assets/images/brands/slack.png", "alt", "slack"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", "waves-effect"], [1, "bx", "bx-fullscreen"], ["type", "button", "id", "page-header-notifications-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon", "waves-effect"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "badge-danger", "badge-pill"], ["aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right", "p-0"], [1, "row", "align-items-center"], [1, "m-0"], [1, "col-auto"], ["href", "#!", 1, "small"], ["data-simplebar", "", 2, "max-height", "230px"], ["href", "", 1, "text-reset", "notification-item"], [1, "media"], [1, "avatar-xs", "mr-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-1"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "mr-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "mr-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-link", "font-size-14", "btn-block", "text-center"], [1, "mdi", "mdi-arrow-right-circle", "mr-1"], ["type", "button", "id", "page-header-user-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "header-item", "waves-effect"], ["src", "assets/images/users/avatar-1.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "d-none", "d-xl-inline-block", "ml-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], ["href", "#", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "mr-1"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "mr-1"], ["href", "#", 1, "dropdown-item", "d-block"], [1, "badge", "badge-success", "float-right"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "mr-1"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "mr-1"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", "text-danger"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "mr-1", "text-danger"], ["type", "button", 1, "btn", "header-item", "noti-icon", "right-bar-toggle", "waves-effect"], [1, "bx", "bx-cog", "bx-spin"], [1, "vertical-menu"], ["data-simplebar", "", 1, "h-100"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], [1, "menu-title"], ["href", "index.html", 1, "waves-effect"], [1, "bx", "bx-home-circle"], [1, "badge", "badge-pill", "badge-info", "float-right"], ["href", "javascript:void(0);", 1, "has-arrow", "waves-effect", 3, "click"], [1, "bx", "bx-layout"], [1, "sub-menu"], ["href", "layouts-horizontal.html"], ["href", "layouts-light-sidebar.html"], ["href", "layouts-compact-sidebar.html"], ["href", "layouts-icon-sidebar.html"], ["href", "layouts-boxed.html"], ["href", "layouts-preloader.html"], ["href", "layouts-colored-sidebar.html"], ["href", "calendar.html", 1, "waves-effect"], [1, "bx", "bx-calendar"], ["href", "javascript: void(0);", 1, "has-arrow", "waves-effect"], [1, "bx", "bx-store"], ["aria-expanded", "false", 1, "sub-menu"], ["href", "ecommerce-products.html"], ["href", "ecommerce-product-detail.html"], ["href", "ecommerce-orders.html"], ["href", "ecommerce-customers.html"], ["href", "ecommerce-cart.html"], ["href", "ecommerce-checkout.html"], ["href", "ecommerce-shops.html"], ["href", "ecommerce-add-product.html"], [1, "bx", "bx-envelope"], ["href", "email-inbox.html"], ["href", "email-read.html"], [1, "bx", "bx-receipt"], ["href", "invoices-list.html"], ["href", "invoices-detail.html"], [1, "bx", "bx-briefcase-alt-2"], ["href", "projects-grid.html"], ["href", "projects-list.html"], ["href", "projects-overview.html"], ["href", "projects-create.html"], [1, "bx", "bx-task"], ["href", "tasks-list.html"], ["href", "tasks-kanban.html"], ["href", "tasks-create.html"], [1, "bx", "bxs-user-detail"], ["href", "contacts-grid.html"], ["href", "contacts-list.html"], ["href", "contacts-profile.html"], [1, "bx", "bx-user-circle"], ["href", "auth-login.html"], ["href", "auth-register.html"], ["href", "auth-recoverpw.html"], ["href", "auth-lock-screen.html"], [1, "bx", "bx-file"], ["href", "pages-starter.html"], ["href", "pages-maintenance.html"], ["href", "pages-comingsoon.html"], ["href", "pages-timeline.html"], ["href", "pages-faqs.html"], ["href", "pages-pricing.html"], ["href", "pages-404.html"], ["href", "pages-500.html"], [1, "bx", "bx-tone"], ["href", "ui-alerts.html"], ["href", "ui-buttons.html"], ["href", "ui-cards.html"], ["href", "ui-carousel.html"], ["href", "ui-dropdowns.html"], ["href", "ui-grid.html"], ["href", "ui-images.html"], ["href", "ui-lightbox.html"], ["href", "ui-modals.html"], ["href", "ui-rangeslider.html"], ["href", "ui-session-timeout.html"], ["href", "ui-progressbars.html"], ["href", "ui-sweet-alert.html"], ["href", "ui-tabs-accordions.html"], ["href", "ui-typography.html"], ["href", "ui-video.html"], ["href", "ui-general.html"], ["href", "ui-colors.html"], ["href", "ui-rating.html"], ["href", "javascript: void(0);", 1, "waves-effect"], [1, "bx", "bxs-eraser"], [1, "badge", "badge-pill", "badge-danger", "float-right"], ["href", "form-elements.html"], ["href", "form-validation.html"], ["href", "form-advanced.html"], ["href", "form-editors.html"], ["href", "form-uploads.html"], ["href", "form-xeditable.html"], ["href", "form-repeater.html"], ["href", "form-wizard.html"], ["href", "form-mask.html"], [1, "bx", "bx-list-ul"], ["href", "tables-basic.html"], ["href", "tables-datatable.html"], ["href", "tables-responsive.html"], ["href", "tables-editable.html"], [1, "bx", "bxs-bar-chart-alt-2"], ["href", "charts-apex.html"], ["href", "charts-chartjs.html"], ["href", "charts-flot.html"], ["href", "charts-tui.html"], ["href", "charts-knob.html"], ["href", "charts-sparkline.html"], [1, "bx", "bx-aperture"], ["href", "icons-boxicons.html"], ["href", "icons-materialdesign.html"], ["href", "icons-dripicons.html"], ["href", "icons-fontawesome.html"], [1, "bx", "bx-map"], ["href", "maps-google.html"], ["href", "maps-vector.html"], [1, "bx", "bx-share-alt"], ["aria-expanded", "true", 1, "sub-menu"], ["href", "javascript: void(0);"], ["href", "javascript: void(0);", 1, "has-arrow"], [1, "main-content"], [1, "page-content"], [1, "container-fluid"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "col-xl-4"], [1, "card", "overflow-hidden"], [1, "bg-soft-primary"], [1, "col-7"], [1, "text-primary", "p-3"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], [1, "avatar-md", "profile-user-wid", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "img-thumbnail", "rounded-circle"], [1, "font-size-15", "text-truncate"], [1, "text-muted", "mb-0", "text-truncate"], [1, "pt-4"], [1, "col-6"], [1, "font-size-15"], [1, "text-muted", "mb-0"], [1, "mt-4"], ["href", "", 1, "btn", "btn-primary", "waves-effect", "waves-light", "btn-sm"], [1, "mdi", "mdi-arrow-right", "ml-1"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "text-muted"], [1, "text-success", "mr-2"], [1, "mdi", "mdi-arrow-up"], [1, "mt-4", "mt-sm-0"], ["id", "radialBar-chart", 1, "apex-charts"], [1, "col-xl-8"], [1, "card", "mini-stats-wid"], [1, "text-muted", "font-weight-medium"], [1, "mini-stat-icon", "avatar-sm", "rounded-circle", "bg-primary", "align-self-center"], [1, "avatar-title"], [1, "bx", "bx-copy-alt", "font-size-24"], [1, "avatar-sm", "rounded-circle", "bg-primary", "align-self-center", "mini-stat-icon"], [1, "avatar-title", "rounded-circle", "bg-primary"], [1, "bx", "bx-archive-in", "font-size-24"], [1, "bx", "bx-purchase-tag-alt", "font-size-24"], [1, "card-title", "mb-4", "float-sm-left"], [1, "float-sm-right"], [1, "nav", "nav-pills"], [1, "nav-item"], ["href", "#", 1, "nav-link"], ["href", "#", 1, "nav-link", "active"], [1, "clearfix"], ["id", "stacked-column-chart", "dir", "ltr", 1, "apex-charts"], [1, "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-soft-primary", "font-size-18"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "font-16", "text-muted", "mb-2"], ["href", "#", 1, "text-dark"], [1, "text-muted", "font-16"], ["href", "#", 1, "text-primary", "font-16"], [1, "mdi", "mdi-chevron-right"], [1, "row", "mt-4"], [1, "col-4"], [1, "social-source", "text-center", "mt-3"], [1, "avatar-xs", "mx-auto", "mb-3"], [1, "avatar-title", "rounded-circle", "bg-primary", "font-size-16"], [1, "mdi", "mdi-facebook", "text-white"], [1, "avatar-title", "rounded-circle", "bg-info", "font-size-16"], [1, "mdi", "mdi-twitter", "text-white"], [1, "avatar-title", "rounded-circle", "bg-pink", "font-size-16"], [1, "mdi", "mdi-instagram", "text-white"], [1, "card-title", "mb-5"], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle", "font-size-18"], [1, "mr-3"], [1, "font-size-14"], [1, "bx", "bx-right-arrow-alt", "font-size-16", "text-primary", "align-middle", "ml-2"], ["href", "#"], [1, "event-list", "active"], [1, "bx", "bxs-right-arrow-circle", "font-size-18", "bx-fade-right"], [1, "text-center", "mt-4"], [1, "mb-4"], [1, "bx", "bx-map-pin", "text-primary", "display-4"], [1, "table-responsive", "mt-4"], [1, "table", "table-centered", "table-nowrap"], [2, "width", "30%"], [2, "width", "25%"], [1, "progress", "bg-transparent", "progress-sm"], ["role", "progressbar", "aria-valuenow", "94", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", "rounded", 2, "width", "94%"], ["role", "progressbar", "aria-valuenow", "82", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "rounded", 2, "width", "82%"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", "rounded", 2, "width", "70%"], [1, "col-lg-12"], [1, "table-responsive"], [1, "table", "table-centered", "table-nowrap", "mb-0"], [1, "thead-light"], [2, "width", "20px"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["type", "checkbox", "id", "customCheck2", 1, "custom-control-input"], ["for", "customCheck2", 1, "custom-control-label"], ["href", "javascript: void(0);", 1, "text-body", "font-weight-bold"], [1, "badge", "badge-pill", "badge-soft-success", "font-size-12"], [1, "fab", "fa-cc-mastercard", "mr-1"], ["type", "button", "data-toggle", "modal", "data-target", ".exampleModal", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", "waves-effect", "waves-light"], ["type", "checkbox", "id", "customCheck3", 1, "custom-control-input"], ["for", "customCheck3", 1, "custom-control-label"], [1, "badge", "badge-pill", "badge-soft-danger", "font-size-12"], [1, "fab", "fa-cc-visa", "mr-1"], ["type", "checkbox", "id", "customCheck4", 1, "custom-control-input"], ["for", "customCheck4", 1, "custom-control-label"], [1, "fab", "fa-cc-paypal", "mr-1"], ["type", "checkbox", "id", "customCheck5", 1, "custom-control-input"], ["for", "customCheck5", 1, "custom-control-label"], ["type", "checkbox", "id", "customCheck6", 1, "custom-control-input"], ["for", "customCheck6", 1, "custom-control-label"], [1, "badge", "badge-pill", "badge-soft-warning", "font-size-12"], ["type", "checkbox", "id", "customCheck7", 1, "custom-control-input"], ["for", "customCheck7", 1, "custom-control-label"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "exampleModal"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-2"], ["scope", "col"], ["scope", "row"], ["src", "assets/images/product/img-7.png", "alt", "", 1, "avatar-sm"], [1, "text-truncate", "font-size-14"], ["src", "assets/images/product/img-4.png", "alt", "", 1, "avatar-sm"], ["colspan", "2"], [1, "m-0", "text-right"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "footer"], [1, "text-sm-right", "d-none", "d-sm-block"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6)(7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11)(12, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_16_listener() {
            return ctx.menuClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 16)(19, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 18)(21, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20)(23, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Mega Menu ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23)(27, "div", 24)(28, "div", 25)(29, "div", 24)(30, "div", 26)(31, "h5", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "UI Components");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 28)(34, "li")(35, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lightbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Range Slider");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sweet Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Tables");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Charts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26)(56, "h5", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Applications");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 28)(59, "li")(60, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Ecommerce");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li")(63, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li")(66, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li")(69, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li")(72, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li")(75, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Contacts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26)(78, "h5", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Extra Pages");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 28)(81, "li")(82, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Light Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li")(85, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Compact Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li")(88, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Horizontal layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li")(91, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Maintenance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Coming Soon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li")(97, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Timeline");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li")(100, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "FAQs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 30)(103, "div", 24)(104, "div", 31)(105, "h5", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "UI Components");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ul", 28)(108, "li")(109, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Lightbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li")(112, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Range Slider");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li")(115, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sweet Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li")(118, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li")(121, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li")(124, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Tables");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li")(127, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Charts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 32)(130, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 4)(133, "div", 34)(134, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 37)(137, "form", 38)(138, "div", 39)(139, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 42)(142, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 44)(145, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 47)(148, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Spanish");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "German");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Italian");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Russian");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 54)(165, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 57)(168, "div", 58)(169, "div", 59)(170, "div", 60)(171, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "GitHub");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 60)(176, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Bitbucket");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 60)(181, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Dribbble");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 59)(186, "div", 60)(187, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Dropbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 60)(192, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Mail Chimp");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 60)(197, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Slack");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 54)(202, "button", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 44)(205, "button", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 73)(210, "div", 38)(211, "div", 74)(212, "div", 60)(213, "h6", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 76)(216, "a", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " View All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 78)(219, "a", 79)(220, "div", 80)(221, "div", 81)(222, "span", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 84)(225, "h6", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Your order is placed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 86)(228, "p", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "If several languages coalesce the grammar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " 3 min ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 79)(234, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 84)(237, "h6", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "James Lemire");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 86)(240, "p", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "It will seem like simplified English.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " 1 hours ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "a", 79)(246, "div", 80)(247, "div", 81)(248, "span", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 84)(251, "h6", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Your item is shipped");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 86)(254, "p", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "If several languages coalesce the grammar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " 3 min ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 79)(260, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "img", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 84)(263, "h6", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Salena Layfield");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 86)(266, "p", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "As a skeptical Cambridge friend of mine occidental.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " 1 hours ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 94)(272, "a", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " View More.. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 44)(276, "button", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "img", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Henry");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 47)(282, "a", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "i", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " My Wallet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 104)(289, "span", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "11");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "i", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "i", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Lock screen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "div", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "a", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "i", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 44)(301, "button", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "i", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 113)(304, "div", 114)(305, "div", 115)(306, "ul", 116)(307, "li", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li")(310, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "i", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "li")(317, "a", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_317_listener() {
            return ctx.toggleMenu2();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Layouts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "ul", 123)(322, "li")(323, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "li")(326, "a", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Light Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li")(329, "a", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Compact Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li")(332, "a", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Icon Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li")(335, "a", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Boxed Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li")(338, "a", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Preloader");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li")(341, "a", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Colored Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Apps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "li")(346, "a", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "i", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li")(351, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "i", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Ecommerce");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "ul", 135)(356, "li")(357, "a", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "li")(360, "a", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Product Detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "li")(363, "a", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "li")(366, "a", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Customers");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "li")(369, "a", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "li")(372, "a", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Checkout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "li")(375, "a", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Shops");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "li")(378, "a", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Add Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "li")(381, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "i", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "ul", 135)(386, "li")(387, "a", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Inbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "li")(390, "a", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Read Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "li")(393, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Invoices");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "ul", 135)(398, "li")(399, "a", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Invoice List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "li")(402, "a", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Invoice Detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "li")(405, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "i", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "ul", 135)(410, "li")(411, "a", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Projects Grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "li")(414, "a", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Projects List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "li")(417, "a", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Project Overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "li")(420, "a", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Create New");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "li")(423, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "ul", 135)(428, "li")(429, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Task List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "li")(432, "a", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Kanban Board");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "li")(435, "a", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Create Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "li")(438, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "i", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Contacts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "ul", 135)(443, "li")(444, "a", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "User Grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "li")(447, "a", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "User List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "li")(450, "a", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "li", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Pages");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "li")(455, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "i", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "Authentication");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "ul", 135)(460, "li")(461, "a", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "li")(464, "a", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li")(467, "a", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Recover Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "li")(470, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Lock Screen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "li")(473, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Utility");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "ul", 135)(478, "li")(479, "a", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "Starter Page");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "li")(482, "a", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Maintenance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "li")(485, "a", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Coming Soon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "li")(488, "a", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Timeline");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "li")(491, "a", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "FAQs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "li")(494, "a", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Pricing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "li")(497, "a", 175);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "Error 404");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "li")(500, "a", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Error 500");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "li", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "Components");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "li")(505, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](506, "i", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "UI Elements");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "ul", 135)(510, "li")(511, "a", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "li")(514, "a", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "li")(517, "a", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "Cards");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "li")(520, "a", 181);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "Carousel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "li")(523, "a", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Dropdowns");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "li")(526, "a", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "Grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "li")(529, "a", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "li")(532, "a", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "Lightbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "li")(535, "a", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "Modals");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "li")(538, "a", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "Range Slider");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "li")(541, "a", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Session Timeout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "li")(544, "a", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "Progress Bars");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "li")(547, "a", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "Sweet-Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "li")(550, "a", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "Tabs & Accordions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "li")(553, "a", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "Typography");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "li")(556, "a", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "Video");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "li")(559, "a", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "General");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "li")(562, "a", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "Colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "li")(565, "a", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "li")(568, "a", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](569, "i", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "span", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "Forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "ul", 135)(575, "li")(576, "a", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "Form Elements");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "li")(579, "a", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "Form Validation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "li")(582, "a", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "Form Advanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "li")(585, "a", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "Form Editors");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "li")(588, "a", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "Form File Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "li")(591, "a", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "Form Xeditable");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "li")(594, "a", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "Form Repeater");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "li")(597, "a", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "Form Wizard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "li")(600, "a", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "Form Mask");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "li")(603, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](604, "i", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "Tables");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "ul", 135)(608, "li")(609, "a", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, "Basic Tables");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "li")(612, "a", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "Data Tables");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "li")(615, "a", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "Responsive Table");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "li")(618, "a", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "Editable Table");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "li")(621, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](622, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "Charts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "ul", 135)(626, "li")(627, "a", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, "Apex charts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "li")(630, "a", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "Chartjs Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "li")(633, "a", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "Flot Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "li")(636, "a", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "Toast UI Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "li")(639, "a", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "Jquery Knob Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "li")(642, "a", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Sparkline Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "li")(645, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](646, "i", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "Icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "ul", 135)(650, "li")(651, "a", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "Boxicons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "li")(654, "a", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "Material Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "li")(657, "a", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "Dripicons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "li")(660, "a", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "Font awesome");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "li")(663, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](664, "i", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "Maps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "ul", 135)(668, "li")(669, "a", 227);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "Google Maps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "li")(672, "a", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, "Vector Maps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "li")(675, "a", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](676, "i", 229);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "Multi Level");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "ul", 230)(680, "li")(681, "a", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, "Level 1.1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "li")(684, "a", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "Level 1.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "ul", 230)(687, "li")(688, "a", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "Level 2.1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "li")(691, "a", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "Level 2.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "div", 233)(694, "div", 234)(695, "div", 235)(696, "div", 24)(697, "div", 236)(698, "div", 237)(699, "h4", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "div", 239)(702, "ol", 240)(703, "li", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "Welcome to Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "div", 24)(706, "div", 242)(707, "div", 243)(708, "div", 244)(709, "div", 24)(710, "div", 245)(711, "div", 246)(712, "h5", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "Welcome Back !");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "Skote Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "div", 248);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](717, "img", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "div", 250)(719, "div", 24)(720, "div", 30)(721, "div", 251);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](722, "img", 252);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "h5", 253);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "Henry Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "p", 254);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "UI/UX Designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "div", 25)(728, "div", 255)(729, "div", 24)(730, "div", 256)(731, "h5", 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "125");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "p", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](734, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "div", 256)(736, "h5", 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "$1245");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "p", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "Revenue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "div", 259)(741, "a", 260);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, "View Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](743, "i", 261);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "div", 262)(745, "div", 263)(746, "h4", 264);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "Monthly Earning");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "div", 24)(749, "div", 31)(750, "p", 265);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, "This month");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "$34,252");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "p", 265)(755, "span", 266);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, " 12% ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](757, "i", 267);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, " From previous period");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "div", 259)(760, "a", 260);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "View More ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](762, "i", 261);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "div", 31)(764, "div", 268);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](765, "div", 269);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "p", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "We craft digital, graphic and dimensional thinking.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 270)(769, "div", 24)(770, "div", 26)(771, "div", 271)(772, "div", 263)(773, "div", 80)(774, "div", 84)(775, "p", 272);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](776, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "h4", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "1,235");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "div", 273)(780, "span", 274);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](781, "i", 275);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "div", 26)(783, "div", 271)(784, "div", 263)(785, "div", 80)(786, "div", 84)(787, "p", 272);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "Revenue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "h4", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "$35, 723");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "div", 276)(792, "span", 277);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](793, "i", 278);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "div", 26)(795, "div", 271)(796, "div", 263)(797, "div", 80)(798, "div", 84)(799, "p", 272);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, "Average Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "h4", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "$16.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "div", 276)(804, "span", 277);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](805, "i", 279);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "div", 262)(807, "div", 263)(808, "h4", 280);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "Email Sent");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "div", 281)(811, "ul", 282)(812, "li", 283)(813, "a", 284);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, "Week");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "li", 283)(816, "a", 284);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "Month");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "li", 283)(819, "a", 285);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "Year");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](821, "div", 286)(822, "div", 287);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "div", 24)(824, "div", 242)(825, "div", 262)(826, "div", 263)(827, "h4", 264);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "Social Source");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "div", 288)(830, "div", 289)(831, "span", 290);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](832, "i", 291);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](833, "p", 292);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "h5")(835, "a", 293);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, "Facebook - ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "span", 294);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "125 sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "p", 265);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "a", 295);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](842, "Learn more ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](843, "i", 296);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "div", 297)(845, "div", 298)(846, "div", 299)(847, "div", 300)(848, "span", 301);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](849, "i", 302);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "h5", 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "Facebook");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "p", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "125 sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "div", 298)(855, "div", 299)(856, "div", 300)(857, "span", 303);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](858, "i", 304);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "h5", 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "p", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "112 sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "div", 298)(864, "div", 299)(865, "div", 300)(866, "span", 305);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](867, "i", 306);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "h5", 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "Instagram");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "p", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "104 sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "div", 242)(873, "div", 262)(874, "div", 263)(875, "h4", 307);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "ul", 308)(878, "li", 309)(879, "div", 310);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](880, "i", 311);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "div", 80)(882, "div", 312)(883, "h5", 313);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](884, "22 Nov ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](885, "i", 314);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "div", 84)(887, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, " Responded to need \u201CVolunteer Activities ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "li", 309)(890, "div", 310);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](891, "i", 311);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "div", 80)(893, "div", 312)(894, "h5", 313);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](895, "17 Nov ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](896, "i", 314);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "div", 84)(898, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, " Everyone realizes why a new common language would be desirable... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "a", 315);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, "Read more");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "li", 316)(903, "div", 310);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](904, "i", 317);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "div", 80)(906, "div", 312)(907, "h5", 313);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, "15 Nov ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](909, "i", 314);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "div", 84)(911, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](912, " Joined the group \u201CBoardsmanship Forum\u201D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "li", 309)(914, "div", 310);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](915, "i", 311);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "div", 80)(917, "div", 312)(918, "h5", 313);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](919, "12 Nov ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](920, "i", 314);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "div", 84)(922, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, " Responded to need \u201CIn-Kind Opportunity\u201D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "div", 318)(925, "a", 260);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](926, "View More ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](927, "i", 261);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "div", 242)(929, "div", 262)(930, "div", 263)(931, "h4", 264);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, "Top Cities Selling Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "div", 288)(934, "div", 319);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](935, "i", 320);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "1,456");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "San Francisco");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "div", 321)(941, "table", 322)(942, "tbody")(943, "tr")(944, "td", 323)(945, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](946, "San Francisco");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "td", 324)(948, "h5", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "1,456");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "td")(951, "div", 325);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](952, "div", 326);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "tr")(954, "td")(955, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, "Los Angeles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "td")(958, "h5", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](959, "1,123");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](960, "td")(961, "div", 325);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](962, "div", 327);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "tr")(964, "td")(965, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "San Diego");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "td")(968, "h5", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](969, "1,026");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](970, "td")(971, "div", 325);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](972, "div", 328);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "div", 24)(974, "div", 329)(975, "div", 262)(976, "div", 263)(977, "h4", 264);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, "Latest Transaction");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "div", 330)(980, "table", 331)(981, "thead", 332)(982, "tr")(983, "th", 333)(984, "div", 334);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](985, "input", 335);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "label", 336);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](989, "Order ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "Billing Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](993, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](995, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](997, "Payment Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](999, "Payment Method");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1001, "View Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "tbody")(1003, "tr")(1004, "td")(1005, "div", 334);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1006, "input", 337);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "label", 338);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1008, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "td")(1010, "a", 339);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, "#SK2540");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, "Neal Matthews");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1015, " 07 Oct, 2019 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, " $400 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "td")(1019, "span", 340);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1022, "i", 341);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, " Mastercard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "td")(1025, "button", 342);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1026, " View Details ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "tr")(1028, "td")(1029, "div", 334);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1030, "input", 343);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "label", 344);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1032, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "td")(1034, "a", 339);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1035, "#SK2541");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1037, "Jamal Burnett");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, " 07 Oct, 2019 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, " $380 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "td")(1043, "span", 345);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1044, "Chargeback");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1046, "i", 346);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1047, " Visa ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "td")(1049, "button", 342);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1050, " View Details ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "tr")(1052, "td")(1053, "div", 334);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1054, "input", 347);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "label", 348);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1056, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "td")(1058, "a", 339);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1059, "#SK2542");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1061, "Juan Mitchell");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, " 06 Oct, 2019 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1065, " $384 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1066, "td")(1067, "span", 340);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1068, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1070, "i", 349);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, " Paypal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "td")(1073, "button", 342);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, " View Details ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "tr")(1076, "td")(1077, "div", 334);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1078, "input", 350);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "label", 351);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1080, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "td")(1082, "a", 339);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1083, "#SK2543");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, "Barry Dick");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, " 05 Oct, 2019 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1089, " $412 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "td")(1091, "span", 340);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1094, "i", 341);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1095, " Mastercard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "td")(1097, "button", 342);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1098, " View Details ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1099, "tr")(1100, "td")(1101, "div", 334);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1102, "input", 352);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "label", 353);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "td")(1106, "a", 339);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1107, "#SK2544");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1108, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1109, "Ronald Taylor");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1111, " 04 Oct, 2019 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1112, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1113, " $404 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "td")(1115, "span", 354);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1116, "Refund");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1117, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1118, "i", 346);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1119, " Visa ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1120, "td")(1121, "button", 342);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1122, " View Details ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "tr")(1124, "td")(1125, "div", 334);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1126, "input", 355);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "label", 356);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1128, " \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "td")(1130, "a", 339);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1131, "#SK2545");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1133, "Jacob Hunter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, " 04 Oct, 2019 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1136, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1137, " $392 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1138, "td")(1139, "span", 340);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1142, "i", 349);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1143, " Paypal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1144, "td")(1145, "button", 342);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1146, " View Details ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1147, "div", 357)(1148, "div", 358)(1149, "div", 359)(1150, "div", 360)(1151, "h5", 361);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1152, "Order Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1153, "button", 362)(1154, "span", 363);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1155, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1156, "div", 364)(1157, "p", 365);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1158, "Product id: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "span", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, "#SK2540");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "p", 319);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1162, "Billing Name: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1163, "span", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1164, "Neal Matthews");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1165, "div", 330)(1166, "table", 322)(1167, "thead")(1168, "tr")(1169, "th", 366);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1170, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "th", 366);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1172, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "th", 366);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1174, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1175, "tbody")(1176, "tr")(1177, "th", 367)(1178, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1179, "img", 368);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "td")(1181, "div")(1182, "h5", 369);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1183, "Wireless Headphone (Black) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "p", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, "$ 225 x 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1187, "$ 255");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1188, "tr")(1189, "th", 367)(1190, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1191, "img", 370);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1192, "td")(1193, "div")(1194, "h5", 369);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1195, "Phone patterned cases");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "p", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, "$ 145 x 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1199, "$ 145");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "tr")(1201, "td", 371)(1202, "h6", 372);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1203, "Sub Total:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1205, " $ 400 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "tr")(1207, "td", 371)(1208, "h6", 372);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1209, "Shipping:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1211, " Free ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1212, "tr")(1213, "td", 371)(1214, "h6", 372);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1215, "Total:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, " $ 400 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "div", 373)(1219, "button", 374);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1220, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1221, "footer", 375)(1222, "div", 235)(1223, "div", 24)(1224, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1225, " \u00A9 Skote. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1226, "div", 31)(1227, "div", 376);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1228, " Design & Develop by Themesbrand ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](321);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mm-show", ctx.showLayoutsSubMenu);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.showLayoutsSubMenu);
        }
      },
      styles: [".sub-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.sub-menu.mm-show[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1N5c3RlbXMlMjBMaW1pdGVkL0NWJTIwUHJvamVjdC9DVi5Gcm9udGVuZC9DVi5Gcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLW1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zdWItbWVudS5tbS1zaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufSIsIi5zdWItbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdWItbWVudS5tbS1zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6235:
/*!******************************************************!*\
  !*** ./src/app/pages/admin/users/users.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class UsersComponent {
  static {
    this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 2,
      vars: 0,
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "users works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin_module_ts.js.map