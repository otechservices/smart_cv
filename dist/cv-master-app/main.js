"use strict";
(self["webpackChunkcv_master_app"] = self["webpackChunkcv_master_app"] || []).push([["main"],{

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/layout/layout.component */ 5404);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 54441);
/* harmony import */ var _modules_landing_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/landing/components/landing/landing.component */ 28615);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ 34978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);







const routes = [/* ── Landing (public) ─────────────────────────────────── */
{
  path: '',
  component: _modules_landing_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__.LandingComponent
}, /* ── Auth (login / register) ─────────────────────────── */
{
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 47751)).then(m => m.AuthModule)
}, /* ── App shell (customer) ─────────────────────────────── */
{
  path: 'app',
  component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard],
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
  }, {
    path: 'cv',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-confirmdialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-minus_mjs-node_modules_primeng_fesm2022_p-8759f6"), __webpack_require__.e("src_app_modules_cv_cv_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cv/cv.module */ 84949)).then(m => m.CvModule)
  }, {
    path: 'jobs',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs-node_modules_primeng_fesm2022_primen-961d4f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-minus_mjs-node_modules_primeng_fesm2022_p-8759f6"), __webpack_require__.e("src_app_modules_job_job_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/job/job.module */ 99053)).then(m => m.JobModule)
  }, {
    path: 'user',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/user/user.module */ 9697)).then(m => m.UserModule)
  }]
}, /* ── Admin shell ──────────────────────────────────────── */
{
  path: 'admin',
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.adminGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs-node_modules_primeng_fesm2022_primen-961d4f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-confirmdialog_mjs"), __webpack_require__.e("src_app_modules_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/admin.module */ 26541)).then(m => m.AdminModule)
}, /* ── Fallback ─────────────────────────────────────────── */
{
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class AppComponent {
  constructor() {
    this.title = 'cv-master-app';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
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
      styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgZm9yIEFwcENvbXBvbmVudCAqL1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUFBO0FBQ0EsNFFBQTRRIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGVzIGZvciBBcHBDb21wb25lbnQgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 48423);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 54441);
/* harmony import */ var _modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/landing/landing.module */ 81069);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-quill */ 12041);
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ 63622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);

















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
        useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_4__.LandingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.ToastModule, ngx_quill__WEBPACK_IMPORTED_MODULE_15__.QuillModule.forRoot()]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_4__.LandingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.ToastModule, ngx_quill__WEBPACK_IMPORTED_MODULE_15__.QuillModule]
  });
})();

/***/ }),

/***/ 54441:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 30078);




class DashboardComponent {
  constructor() {
    // Placeholder data for demonstration
    this.stats = {
      cvsCreated: 5,
      lettersGenerated: 12,
      applicationsSent: 8,
      applicationsSuccessful: 2
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 133,
      vars: 5,
      consts: [[1, "page-wrapper"], [1, "page-header", "flex", "items-start", "justify-between"], ["pButton", "", "pRipple", "", "routerLink", "/cv", "icon", "pi pi-plus", "label", "Cr\u00E9er un CV", 1, "btn-primary", "p-button-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-4", "gap-5", "mb-8"], [1, "stat-card", "bg-white", "border", "border-slate-100"], [1, "stat-icon", "bg-indigo-50", "text-indigo-500"], [1, "pi", "pi-file"], [1, "stat-value", "text-indigo-600"], [1, "stat-label", "text-slate-500"], [1, "stat-icon", "bg-violet-50", "text-violet-500"], [1, "pi", "pi-envelope"], [1, "stat-value", "text-violet-600"], [1, "stat-icon", "bg-blue-50", "text-blue-500"], [1, "pi", "pi-send"], [1, "stat-value", "text-blue-600"], [1, "stat-icon", "bg-emerald-50", "text-emerald-500"], [1, "pi", "pi-check-circle"], [1, "stat-value", "text-emerald-600"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-1"], [1, "bg-white", "rounded-2xl", "border", "border-slate-100", "p-6"], [1, "text-sm", "font-semibold", "text-slate-400", "uppercase", "tracking-widest", "mb-4"], [1, "flex", "flex-col", "gap-2"], ["routerLink", "/cv", 1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", "hover:bg-indigo-50", "transition-colors", "cursor-pointer", "group"], [1, "w-9", "h-9", "rounded-lg", "bg-indigo-100", "flex", "items-center", "justify-center", "text-indigo-600", "group-hover:bg-indigo-200", "transition-colors"], [1, "pi", "pi-file-edit", "text-sm"], [1, "text-sm", "font-semibold", "text-slate-800", "m-0"], [1, "text-xs", "text-slate-400", "m-0"], [1, "pi", "pi-chevron-right", "text-xs", "text-slate-300", "ml-auto"], ["routerLink", "/jobs/letter", 1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", "hover:bg-violet-50", "transition-colors", "cursor-pointer", "group"], [1, "w-9", "h-9", "rounded-lg", "bg-violet-100", "flex", "items-center", "justify-center", "text-violet-600", "group-hover:bg-violet-200", "transition-colors"], [1, "pi", "pi-sparkles", "text-sm"], ["routerLink", "/jobs/tracking", 1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", "hover:bg-blue-50", "transition-colors", "cursor-pointer", "group"], [1, "w-9", "h-9", "rounded-lg", "bg-blue-100", "flex", "items-center", "justify-center", "text-blue-600", "group-hover:bg-blue-200", "transition-colors"], [1, "pi", "pi-briefcase", "text-sm"], ["routerLink", "/user/subscriptions", 1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", "hover:bg-amber-50", "transition-colors", "cursor-pointer", "group"], [1, "w-9", "h-9", "rounded-lg", "bg-amber-100", "flex", "items-center", "justify-center", "text-amber-600", "group-hover:bg-amber-200", "transition-colors"], [1, "pi", "pi-crown", "text-sm"], [1, "lg:col-span-2"], [1, "bg-white", "rounded-2xl", "border", "border-slate-100", "p-6", "h-full"], [1, "text-sm", "font-semibold", "text-slate-400", "uppercase", "tracking-widest", "mb-5"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "items-start", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-indigo-100", "flex", "items-center", "justify-center", "text-indigo-500", "shrink-0", "mt-0.5"], [1, "pi", "pi-file", "text-xs"], [1, "flex-1"], [1, "text-sm", "font-medium", "text-slate-800", "m-0"], [1, "font-semibold"], [1, "text-xs", "text-slate-400", "m-0", "mt-0.5"], [1, "w-8", "h-8", "rounded-full", "bg-violet-100", "flex", "items-center", "justify-center", "text-violet-500", "shrink-0", "mt-0.5"], [1, "pi", "pi-sparkles", "text-xs"], [1, "w-8", "h-8", "rounded-full", "bg-emerald-100", "flex", "items-center", "justify-center", "text-emerald-500", "shrink-0", "mt-0.5"], [1, "pi", "pi-check", "text-xs"], [1, "w-8", "h-8", "rounded-full", "bg-blue-100", "flex", "items-center", "justify-center", "text-blue-500", "shrink-0", "mt-0.5"], [1, "pi", "pi-send", "text-xs"], [1, "mt-6", "pt-5", "border-t", "border-slate-100"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-xs", "font-semibold", "text-slate-500"], [1, "text-xs", "font-bold", "text-indigo-600"], [1, "w-full", "bg-slate-100", "rounded-full", "h-2"], [1, "h-2", "rounded-full", 2, "background", "linear-gradient(90deg, #6366f1, #8b5cf6)", "width", "40%"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bonjour \uD83D\uDC4B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Voici un r\u00E9sum\u00E9 de votre activit\u00E9 sur CV Master.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "div", 4)(10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CVs cr\u00E9\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4)(17, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lettres g\u00E9n\u00E9r\u00E9es");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4)(24, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Candidatures envoy\u00E9es");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4)(31, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Offres re\u00E7ues");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18)(38, "div", 19)(39, "div", 20)(40, "h2", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Actions rapides");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22)(43, "a", 23)(44, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div")(47, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Nouveau CV");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cr\u00E9er ou modifier votre CV");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 29)(53, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div")(56, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "G\u00E9n\u00E9rer une lettre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Assist\u00E9 par intelligence artificielle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 32)(62, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div")(65, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Mes candidatures");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Suivre vos d\u00E9marches");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 35)(71, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div")(74, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Passer \u00E0 Premium");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "D\u00E9bloquer toutes les fonctions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38)(80, "div", 39)(81, "h2", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Activit\u00E9 r\u00E9cente");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41)(84, "div", 42)(85, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 45)(88, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "CV ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\"D\u00E9veloppeur Full-Stack\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " cr\u00E9\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Il y a 2 heures");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 42)(96, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 45)(99, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Lettre g\u00E9n\u00E9r\u00E9e pour ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Innovatech");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Hier \u00E0 14h30");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42)(106, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 45)(109, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Entretien obtenu chez ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Cloud Corp");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Il y a 3 jours");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 42)(116, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 45)(119, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Candidature envoy\u00E9e chez ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Future Solutions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Il y a 5 jours");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 55)(126, "div", 56)(127, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Objectif mensuel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stats.cvsCreated);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stats.lettersGenerated);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stats.applicationsSent);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stats.applicationsSuccessful);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](96);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.stats.applicationsSent, "/20 candidatures");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFBUSxjQUFBO0FBR1I7O0FBREEsb0VBQUEiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuXG4vKiBTdGF0IGNhcmQgaG92ZXIg4oCUIGV4dHJhIHNoYWRvdyBhbHJlYWR5IGhhbmRsZWQgaW4gZ2xvYmFsIHN0eWxlcyAqL1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUFRLGNBQUE7QUFHUjs7QUFEQSxvRUFBQTtBQUlBLHdhQUF3YSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cblxuLyogU3RhdCBjYXJkIGhvdmVyIMOiwoDClCBleHRyYSBzaGFkb3cgYWxyZWFkeSBoYW5kbGVkIGluIGdsb2JhbCBzdHlsZXMgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 66119:
/*!*******************************************!*\
  !*** ./src/app/core/config/api.config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_URL: () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = 'http://localhost:8000/api';

/***/ }),

/***/ 48423:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/avatar */ 46095);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 5404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);











class CoreModule {
  static {
    this.ɵfac = function CoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CoreModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.AvatarModule, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
    declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.AvatarModule, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule],
    exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule]
  });
})();

/***/ }),

/***/ 34978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminGuard: () => (/* binding */ adminGuard),
/* harmony export */   authGuard: () => (/* binding */ authGuard),
/* harmony export */   guestGuard: () => (/* binding */ guestGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 68010);



const authGuard = () => {
  const auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return auth.isAuthenticated() ? true : router.createUrlTree(['/auth/login']);
};
const guestGuard = () => {
  const auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (!auth.isAuthenticated()) return true;
  const role = auth.getUser()?.role;
  return router.createUrlTree([role === 'admin' ? '/admin' : '/app/dashboard']);
};
const adminGuard = () => {
  const auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (!auth.isAuthenticated()) return router.createUrlTree(['/auth/login']);
  return auth.getUser()?.role === 'admin' ? true : router.createUrlTree(['/app/dashboard']);
};

/***/ }),

/***/ 63622:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 68010);




class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const token = this.authService.getToken();
    const authReq = token ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }) : req;
    return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err.status === 401) {
        this.authService.logout();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
    }));
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 5404:
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/theme.service */ 64081);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 68010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 61225);






class LayoutComponent {
  constructor(themeService, authService) {
    this.themeService = themeService;
    this.authService = authService;
  }
  get user() {
    return this.authService.getUser();
  }
  get userInitials() {
    const name = this.user?.name ?? '';
    return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase() || 'U';
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 56,
      vars: 7,
      consts: [["position", "top-right", 3, "baseZIndex"], [1, "app-shell", "flex", "h-screen", "overflow-hidden"], [1, "sidebar", "flex", "flex-col", "w-64", "shrink-0", "bg-white", "border-r", "border-slate-200", "h-full", "overflow-y-auto"], [1, "sidebar-logo", "flex", "items-center", "gap-3", "px-5", "py-5", "border-b", "border-slate-100"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", 2, "background", "linear-gradient(135deg, #6366f1, #8b5cf6)"], [1, "pi", "pi-file-edit", "text-white", "text-base"], [1, "font-bold", "text-slate-900", "text-base", "tracking-tight"], [1, "flex", "flex-col", "gap-1", "px-3", "pt-5", "flex-1"], [1, "text-xs", "font-semibold", "text-slate-400", "uppercase", "tracking-widest", "px-3", "mb-2"], ["routerLink", "/app/dashboard", "routerLinkActive", "active", 1, "nav-item"], [1, "pi", "pi-th-large"], ["routerLink", "/app/cv", "routerLinkActive", "active", 1, "nav-item"], [1, "pi", "pi-file-edit"], [1, "text-xs", "font-semibold", "text-slate-400", "uppercase", "tracking-widest", "px-3", "mt-5", "mb-2"], ["routerLink", "/app/jobs/tracking", "routerLinkActive", "active", 1, "nav-item"], [1, "pi", "pi-briefcase"], ["routerLink", "/app/jobs/letter", "routerLinkActive", "active", 1, "nav-item"], [1, "pi", "pi-sparkles"], [1, "ml-auto", "text-xs", "font-bold", "px-1.5", "py-0.5", "rounded-md", "text-violet-600", 2, "background", "#ede9fe"], ["routerLink", "/app/user/subscriptions", "routerLinkActive", "active", 1, "nav-item"], [1, "pi", "pi-crown"], [1, "sidebar-bottom", "flex", "flex-col", "gap-1", "px-3", "pb-5", "pt-4", "border-t", "border-slate-100"], ["pRipple", "", 1, "nav-item", "w-full", "border-0", "bg-transparent", 3, "click"], ["pRipple", "", 1, "nav-item", "w-full", "border-0", "bg-transparent", "text-red-400", "hover:bg-red-50", "hover:text-red-600", 3, "click"], [1, "pi", "pi-sign-out"], [1, "flex", "items-center", "gap-3", "px-3", "pt-3", "mt-1", "border-t", "border-slate-100"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", "shrink-0", 2, "background", "linear-gradient(135deg, #6366f1, #8b5cf6)"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-slate-800", "truncate", "m-0"], [1, "text-xs", "text-slate-400", "truncate", "m-0"], [1, "flex-1", "overflow-y-auto", "bg-slate-50"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "CV Master");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nav", 7)(9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "CV Editor");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Candidatures");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Mes candidatures");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Lettre de motivation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "IA");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Compte");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Abonnement");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 21)(38, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_38_listener() {
            return ctx.toggleTheme();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_42_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "D\u00E9connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 25)(47, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 27)(50, "p", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "main", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("baseZIndex", 9999);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.themeService.isDarkMode() ? "pi pi-sun" : "pi pi-moon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.themeService.isDarkMode() ? "Mode clair" : "Mode sombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.userInitials, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.user == null ? null : ctx.user.name) || "Utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.user == null ? null : ctx.user.email) || "");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  transition: width 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7RUFBZ0IsYUFBQTtBQUd4Qjs7QUFEQTtFQUNFLDJCQUFBO0FBSUYiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAxMDB2aDsgfVxuXG4uc2lkZWJhciB7XG4gIHRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtFQUFnQixhQUFBO0FBR3hCOztBQURBO0VBQ0UsMkJBQUE7QUFJRjtBQUNBLDRaQUE0WiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMTAwdmg7IH1cblxuLnNpZGViYXIge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAuMnMgZWFzZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 68010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api.config */ 66119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);





const TOKEN_KEY = 'cv_token';
const USER_KEY = 'cv_user';
class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.url = `${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/auth`;
    this._user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.storedUser());
    this.user$ = this._user$.asObservable();
  }
  login(credentials) {
    return this.http.post(`${this.url}/login`, credentials).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => this.persist(res.data)));
  }
  register(credentials) {
    return this.http.post(`${this.url}/register`, credentials).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => this.persist(res.data)));
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this._user$.next(null);
    this.router.navigate(['/auth/login']);
  }
  isAuthenticated() {
    return !!localStorage.getItem(TOKEN_KEY);
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  getUser() {
    return this._user$.value;
  }
  persist(data) {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    this._user$.next(data.user);
  }
  storedUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 64081:
/*!************************************************!*\
  !*** ./src/app/core/services/theme.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class ThemeService {
  constructor(document, rendererFactory) {
    this.document = document;
    this.rendererFactory = rendererFactory;
    this.isDark = false;
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.renderer.addClass(this.document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');
    }
  }
  isDarkMode() {
    return this.isDark;
  }
  static {
    this.ɵfac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 28615:
/*!*************************************************************************!*\
  !*** ./src/app/modules/landing/components/landing/landing.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/auth.service */ 68010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);




function LandingComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", f_r1.bg)("color", f_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("pi " + f_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r1.desc);
  }
}
function LandingComponent_div_65_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LandingComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LandingComponent_div_65_div_7_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r2.num);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r2.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !last_r3);
  }
}
function LandingComponent_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Populaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LandingComponent_div_75_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", feat_r4, " ");
  }
}
function LandingComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LandingComponent_div_75_div_1_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54)(5, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LandingComponent_div_75_li_10_Template, 3, 1, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("plan-highlighted", p_r5.highlighted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r5.highlighted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r5.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r5.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", p_r5.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("plan-cta-primary", p_r5.highlighted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r5.cta, " ");
  }
}
class LandingComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.features = [{
      icon: 'pi-file-edit',
      title: 'CV Professionnel',
      desc: 'Créez un CV percutant en quelques minutes grâce à notre éditeur guidé et nos templates modernes.',
      color: '#6366f1',
      bg: '#eef2ff'
    }, {
      icon: 'pi-sparkles',
      title: 'Lettre IA',
      desc: 'Notre IA rédige une lettre de motivation personnalisée à partir de votre profil et de l\'offre d\'emploi.',
      color: '#8b5cf6',
      bg: '#f5f3ff'
    }, {
      icon: 'pi-briefcase',
      title: 'Suivi des candidatures',
      desc: 'Centralisez toutes vos candidatures et suivez leur avancement en temps réel.',
      color: '#0ea5e9',
      bg: '#f0f9ff'
    }];
    this.steps = [{
      num: '01',
      title: 'Créez votre profil',
      desc: 'Renseignez vos expériences, compétences et formations.'
    }, {
      num: '02',
      title: 'Générez votre CV',
      desc: 'Notre IA optimise la mise en page et le contenu pour chaque offre.'
    }, {
      num: '03',
      title: 'Postulez & suivez',
      desc: 'Envoyez vos candidatures et suivez chaque étape depuis un seul endroit.'
    }];
    this.plans = [{
      name: 'Free',
      price: '0€',
      period: '',
      features: ['1 template CV', '5 lettres / mois', 'Candidatures manuelles'],
      cta: 'Commencer gratuitement',
      highlighted: false
    }, {
      name: 'Premium',
      price: '9.99€',
      period: '/ mois',
      features: ['5 templates CV', '50 lettres / mois', '20 candidatures auto', 'Optimisation IA'],
      cta: 'Essayer Premium',
      highlighted: true
    }, {
      name: 'Pro',
      price: '19.99€',
      period: '/ mois',
      features: ['Tous les templates', 'Lettres illimitées', 'Candidatures illimitées', 'IA prioritaire'],
      cta: 'Passer Pro',
      highlighted: false
    }];
  }
  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      const role = this.auth.getUser()?.role;
      this.router.navigate([role === 'admin' ? '/admin' : '/app/dashboard']);
    }
  }
  static {
    this.ɵfac = function LandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 94,
      vars: 3,
      consts: [[1, "landing"], [1, "landing-nav"], [1, "nav-inner"], ["routerLink", "/", 1, "nav-logo"], [1, "logo-icon"], [1, "pi", "pi-file-edit"], [1, "nav-actions"], ["routerLink", "/auth/login", 1, "nav-link"], ["routerLink", "/auth/register", 1, "btn-cta-sm"], [1, "hero"], [1, "hero-badge"], [1, "pi", "pi-sparkles"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "hero-cta"], ["routerLink", "/auth/register", 1, "btn-primary-lg"], [1, "pi", "pi-user-plus"], ["routerLink", "/auth/login", 1, "btn-ghost-lg"], [1, "pi", "pi-arrow-right"], [1, "hero-stats"], [1, "stat-pill"], [1, "pi", "pi-users"], [1, "pi", "pi-star-fill"], [1, "pi", "pi-check-circle"], [1, "section", "features-section"], [1, "section-inner"], [1, "section-label"], [1, "section-title"], [1, "section-subtitle"], [1, "features-grid"], ["class", "feature-card", 4, "ngFor", "ngForOf"], [1, "section", "steps-section"], [1, "steps-grid"], ["class", "step-card", 4, "ngFor", "ngForOf"], [1, "section", "pricing-section"], [1, "pricing-grid"], ["class", "plan-card", 3, "plan-highlighted", 4, "ngFor", "ngForOf"], [1, "cta-banner"], [1, "section-inner", "text-center"], [1, "pi", "pi-rocket"], [1, "landing-footer"], [1, "footer-inner"], [1, "footer-logo"], [1, "footer-copy"], [1, "feature-card"], [1, "feature-icon"], [1, "step-card"], [1, "step-num"], ["class", "step-arrow", 4, "ngIf"], [1, "step-arrow"], [1, "plan-card"], ["class", "plan-badge", 4, "ngIf"], [1, "plan-name"], [1, "plan-price"], [1, "plan-amount"], [1, "plan-period"], [1, "plan-features"], [4, "ngFor", "ngForOf"], ["routerLink", "/auth/register", 1, "plan-cta"], [1, "plan-badge"], [1, "pi", "pi-check"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "SmartCV");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Se connecter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Commencer gratuitement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 9)(14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Propuls\u00E9 par l'Intelligence Artificielle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Cr\u00E9ez un CV qui");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "fait la diff\u00E9rence");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " SmartCV combine l'IA et le design pour vous aider \u00E0 d\u00E9crocher votre prochain emploi. R\u00E9digez, optimisez et suivez vos candidatures depuis un seul endroit. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15)(26, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Cr\u00E9er mon compte gratuitement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " J'ai d\u00E9j\u00E0 un compte ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20)(33, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "10 000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "4.9 / 5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " satisfaction");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Gratuit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " pour commencer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "section", 25)(49, "div", 26)(50, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Fonctionnalit\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Tout ce dont vous avez besoin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Une suite compl\u00E8te d'outils pour g\u00E9rer votre recherche d'emploi de A \u00E0 Z.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, LandingComponent_div_57_Template, 7, 8, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "section", 32)(59, "div", 26)(60, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Comment \u00E7a marche");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h2", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "En 3 \u00E9tapes simples");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, LandingComponent_div_65_Template, 8, 4, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "section", 35)(67, "div", 26)(68, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Tarifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h2", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Simple et transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Commencez gratuitement, \u00E9voluez selon vos besoins.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, LandingComponent_div_75_Template, 13, 10, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "section", 38)(77, "div", 39)(78, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Pr\u00EAt \u00E0 booster votre carri\u00E8re ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Rejoignez des milliers de candidats qui ont d\u00E9croch\u00E9 leur emploi gr\u00E2ce \u00E0 SmartCV.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Commencer maintenant \u2014 c'est gratuit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "footer", 41)(86, "div", 42)(87, "div", 43)(88, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "SmartCV");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u00A9 2026 SmartCV. Tous droits r\u00E9serv\u00E9s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.steps);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.plans);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".landing[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  color: #1e293b;\n  background: #fff;\n  min-height: 100vh;\n}\n\n.landing-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  border-bottom: 1px solid #f1f5f9;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-inner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #0f172a;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.15s;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #6366f1;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.landing-nav[_ngcontent-%COMP%]   .btn-cta-sm[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 8px 18px;\n  background: #6366f1;\n  color: #fff;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.landing-nav[_ngcontent-%COMP%]   .btn-cta-sm[_ngcontent-%COMP%]:hover {\n  background: #474aee;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n\n.hero[_ngcontent-%COMP%] {\n  padding: 100px 24px 80px;\n  text-align: center;\n  background: radial-gradient(ellipse 80% 60% at 50% 0%, #eef2ff 0%, #fff 70%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  background: #eef2ff;\n  color: #6366f1;\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: 1px solid #c7d2fe;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 5vw, 3.5rem);\n  font-weight: 800;\n  line-height: 1.15;\n  color: #0f172a;\n  margin: 0;\n}\n\n.gradient-text[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  max-width: 580px;\n  font-size: 1.05rem;\n  color: #475569;\n  line-height: 1.65;\n  margin: 0;\n}\n\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.btn-primary-lg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 28px;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: #fff;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.925rem;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n}\n.btn-primary-lg[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);\n}\n\n.btn-ghost-lg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-ghost-lg[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n}\n\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 8px;\n}\n\n.stat-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  font-size: 0.82rem;\n  color: #475569;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.stat-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.stat-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding: 88px 24px;\n}\n.section.features-section[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.section.steps-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.section.pricing-section[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.section-inner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.section-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #6366f1;\n  margin-bottom: 10px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 3vw, 2.25rem);\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 12px;\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #475569;\n  margin: 0 0 48px;\n  max-width: 520px;\n}\n\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  padding: 32px;\n  border: 1px solid #f1f5f9;\n  border-radius: 16px;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transform: translateY(-3px);\n}\n.feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin-bottom: 20px;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: #0f172a;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.steps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n  position: relative;\n}\n\n.step-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 32px;\n  background: #fff;\n  border: 1px solid #f1f5f9;\n  border-radius: 16px;\n}\n.step-card[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1;\n  margin-bottom: 16px;\n}\n.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n  color: #0f172a;\n}\n.step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n}\n.step-card[_ngcontent-%COMP%]   .step-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: -20px;\n  transform: translateY(-50%);\n  color: #e2e8f0;\n  font-size: 1.2rem;\n  z-index: 1;\n}\n\n.pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 24px;\n  align-items: start;\n}\n\n.plan-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 36px 28px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  background: #fff;\n  transition: box-shadow 0.2s;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n}\n.plan-card.plan-highlighted[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);\n}\n.plan-card[_ngcontent-%COMP%]   .plan-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 14px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 16px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 24px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%]   .plan-amount[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #94a3b8;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-size: 0.8rem;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-cta[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 11px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #334155;\n  text-decoration: none;\n  transition: border-color 0.15s, color 0.15s;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-cta[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-cta.plan-cta-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: #fff;\n  border-color: transparent;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-cta.plan-cta-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n\n.cta-banner[_ngcontent-%COMP%] {\n  padding: 80px 24px;\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n  text-align: center;\n  color: #fff;\n}\n.cta-banner[_ngcontent-%COMP%]   .section-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.cta-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 3vw, 2rem);\n  font-weight: 800;\n  margin: 0;\n}\n.cta-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.85;\n  max-width: 500px;\n  margin: 0;\n}\n.cta-banner[_ngcontent-%COMP%]   .btn-primary-lg[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #6366f1;\n  box-shadow: none;\n  margin-top: 8px;\n}\n.cta-banner[_ngcontent-%COMP%]   .btn-primary-lg[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #3e41ee;\n}\n\n.landing-footer[_ngcontent-%COMP%] {\n  background: #0f172a;\n  padding: 32px 24px;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-inner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-weight: 700;\n  font-size: 1rem;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-copy[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxnQ0FBQTtFQUNBLGNBTlU7RUFPVixnQkFBQTtFQUNBLGlCQUFBO0FBWEY7O0FBZUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFaRjtBQWNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVpKO0FBZUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FwQ1E7QUF1Qlo7QUFnQkU7RUFDRSxtQkFBQTtFQUNBLGNBM0NRO0VBNENSLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWRKO0FBZUk7RUFBVSxjQXJETDtBQXlDVDtBQWVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWJKO0FBZ0JFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBbEVLO0VBbUVMLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFkSjtBQWVJO0VBQVUsbUJBQUE7QUFaZDs7QUFpQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFkRjs7QUFrQkE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFmRjs7QUFrQkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFD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QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7QUF2Qko7QUF5Qkk7RUFBVSxxQkE3YUw7RUE2YTRCLGNBN2E1QjtBQXdaVDtBQXVCSTtFQUNFLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBckJOO0FBdUJNO0VBQVUsWUFBQTtFQUFjLFdBQUE7QUFuQjlCOztBQXlCQTtFQUNFLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUF0QkY7QUF3QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF0Qko7QUF5QkU7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQXZCSjtBQTBCRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBeEJKO0FBMkJFO0VBQ0UsZ0JBQUE7RUFDQSxjQXRkSztFQXVkTCxnQkFBQTtFQUNBLGVBQUE7QUF6Qko7QUEyQkk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUF6Qk47O0FBK0JBO0VBQ0UsbUJBM2RVO0VBNGRWLGtCQUFBO0FBNUJGO0FBOEJFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTVCSjtBQStCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBN0JKO0FBK0JJO0VBQWEsWUFBQTtBQTVCakI7QUErQkU7RUFDRSxpQkFBQTtFQUNBLGNBeGZRO0VBeWZSLFNBQUE7QUE3QkoiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOKUgOKUgCBWYXJpYWJsZXMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4kaW5kaWdvOiAjNjM2NmYxO1xuJHZpb2xldDogIzhiNWNmNjtcbiRzbGF0ZS01MDogI2Y4ZmFmYztcbiRzbGF0ZS0xMDA6ICNmMWY1Zjk7XG4kc2xhdGUtMjAwOiAjZTJlOGYwO1xuJHNsYXRlLTQwMDogIzk0YTNiODtcbiRzbGF0ZS02MDA6ICM0NzU1Njk7XG4kc2xhdGUtODAwOiAjMWUyOTNiO1xuJHNsYXRlLTkwMDogIzBmMTcyYTtcblxuLy8g4pSA4pSAIEJhc2Ug4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4ubGFuZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogJHNsYXRlLTgwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8vIOKUgOKUgCBOYXZiYXIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4ubGFuZGluZy1uYXYge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkc2xhdGUtMTAwO1xuXG4gIC5uYXYtaW5uZXIge1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5uYXYtbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogJHNsYXRlLTkwMDtcbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogJHNsYXRlLTYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cztcbiAgICAmOmhvdmVyIHsgY29sb3I6ICRpbmRpZ287IH1cbiAgfVxuXG4gIC5uYXYtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5idG4tY3RhLXNtIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDhweCAxOHB4O1xuICAgIGJhY2tncm91bmQ6ICRpbmRpZ287XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiBkYXJrZW4oJGluZGlnbywgNiUpOyB9XG4gIH1cbn1cblxuLy8g4pSA4pSAIFNoYXJlZCBsb2dvIGljb24g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4ubG9nby1pY29uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkaW5kaWdvLCAkdmlvbGV0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vLyDilIDilIAgSGVybyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi5oZXJvIHtcbiAgcGFkZGluZzogMTAwcHggMjRweCA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIDgwJSA2MCUgYXQgNTAlIDAlLCAjZWVmMmZmIDAlLCAjZmZmIDcwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbn1cblxuLmhlcm8tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVmMmZmO1xuICBjb2xvcjogJGluZGlnbztcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZDJmZTtcbn1cblxuLmhlcm8tdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDIuMnJlbSwgNXZ3LCAzLjVyZW0pO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgY29sb3I6ICRzbGF0ZS05MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmdyYWRpZW50LXRleHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkaW5kaWdvLCAkdmlvbGV0KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xufVxuXG4uaGVyby1zdWJ0aXRsZSB7XG4gIG1heC13aWR0aDogNTgwcHg7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgY29sb3I6ICRzbGF0ZS02MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xuICBtYXJnaW46IDA7XG59XG5cbi5oZXJvLWN0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmltYXJ5LWxnIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxM3B4IDI4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRpbmRpZ28sICR2aW9sZXQpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjkyNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMsIGJveC1zaGFkb3cgMC4xNXM7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMzUpO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjQpO1xuICB9XG59XG5cbi5idG4tZ2hvc3QtbGcge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgY29sb3I6ICRzbGF0ZS02MDA7XG4gIGJvcmRlcjogMS41cHggc29saWQgJHNsYXRlLTIwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzLCBjb2xvciAwLjE1cztcblxuICAmOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAkaW5kaWdvOyBjb2xvcjogJGluZGlnbzsgfVxufVxuXG4uaGVyby1zdGF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uc3RhdC1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkc2xhdGUtMjAwO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBjb2xvcjogJHNsYXRlLTYwMDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsLjA1KTtcblxuICBpIHsgY29sb3I6ICRpbmRpZ287IH1cbiAgc3Ryb25nIHsgY29sb3I6ICRzbGF0ZS05MDA7IH1cbn1cblxuLy8g4pSA4pSAIFNlY3Rpb24gYmFzZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogODhweCAyNHB4O1xuXG4gICYuZmVhdHVyZXMtc2VjdGlvbiB7IGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgJi5zdGVwcy1zZWN0aW9uICAgIHsgYmFja2dyb3VuZDogJHNsYXRlLTUwOyB9XG4gICYucHJpY2luZy1zZWN0aW9uICB7IGJhY2tncm91bmQ6ICNmZmY7IH1cbn1cblxuLnNlY3Rpb24taW5uZXIge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZWN0aW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogJGluZGlnbztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDEuNnJlbSwgM3Z3LCAyLjI1cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICRzbGF0ZS05MDA7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5cbi5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogJHNsYXRlLTYwMDtcbiAgbWFyZ2luOiAwIDAgNDhweDtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbn1cblxuLy8g4pSA4pSAIEZlYXR1cmVzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLmZlYXR1cmVzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uZmVhdHVyZS1jYXJkIHtcbiAgcGFkZGluZzogMzJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHNsYXRlLTEwMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwwLDAsLjA4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIH1cblxuICAuZmVhdHVyZS1pY29uIHtcbiAgICB3aWR0aDogNTJweDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIGNvbG9yOiAkc2xhdGUtOTAwO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogJHNsYXRlLTYwMDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vLyDilIDilIAgU3RlcHMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4uc3RlcHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xuICBnYXA6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0ZXAtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJHNsYXRlLTEwMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcblxuICAuc3RlcC1udW0ge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGluZGlnbywgJHZpb2xldCk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICBjb2xvcjogJHNsYXRlLTkwMDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgY29sb3I6ICRzbGF0ZS02MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuc3RlcC1hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6ICRzbGF0ZS0yMDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4vLyDilIDilIAgUHJpY2luZyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi5wcmljaW5nLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5wbGFuLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDM2cHggMjhweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAkc2xhdGUtMjAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLDAsMCwuMDgpOyB9XG5cbiAgJi5wbGFuLWhpZ2hsaWdodGVkIHtcbiAgICBib3JkZXItY29sb3I6ICRpbmRpZ287XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xNSk7XG4gIH1cblxuICAucGxhbi1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEycHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkaW5kaWdvLCAkdmlvbGV0KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiA0cHggMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLnBsYW4tbmFtZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICRzbGF0ZS05MDA7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5wbGFuLXByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBnYXA6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gICAgLnBsYW4tYW1vdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiAkc2xhdGUtOTAwO1xuICAgIH1cblxuICAgIC5wbGFuLXBlcmlvZCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6ICRzbGF0ZS00MDA7XG4gICAgfVxuICB9XG5cbiAgLnBsYW4tZmVhdHVyZXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAyOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiAkc2xhdGUtNjAwO1xuXG4gICAgICBpIHsgY29sb3I6ICRpbmRpZ287IGZvbnQtc2l6ZTogMC44cmVtOyB9XG4gICAgfVxuICB9XG5cbiAgLnBsYW4tY3RhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICRzbGF0ZS0yMDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzNDE1NTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzLCBjb2xvciAwLjE1cztcblxuICAgICY6aG92ZXIgeyBib3JkZXItY29sb3I6ICRpbmRpZ287IGNvbG9yOiAkaW5kaWdvOyB9XG5cbiAgICAmLnBsYW4tY3RhLXByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGluZGlnbywgJHZpb2xldCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICY6aG92ZXIgeyBvcGFjaXR5OiAwLjk7IGNvbG9yOiAjZmZmOyB9XG4gICAgfVxuICB9XG59XG5cbi8vIOKUgOKUgCBDVEEgQmFubmVyIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLmN0YS1iYW5uZXIge1xuICBwYWRkaW5nOiA4MHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZjQ2ZTUsICM3YzNhZWQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuXG4gIC5zZWN0aW9uLWlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDN2dywgMnJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgb3BhY2l0eTogMC44NTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeS1sZyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogJGluZGlnbztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGNvbG9yOiBkYXJrZW4oJGluZGlnbywgOCUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyDilIDilIAgRm9vdGVyIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLmxhbmRpbmctZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogJHNsYXRlLTkwMDtcbiAgcGFkZGluZzogMzJweCAyNHB4O1xuXG4gIC5mb290ZXItaW5uZXIge1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5mb290ZXItbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcblxuICAgIC5sb2dvLWljb24geyBvcGFjaXR5OiAwLjk7IH1cbiAgfVxuXG4gIC5mb290ZXItY29weSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICRzbGF0ZS00MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0UsZ0NBQUE7RUFDQSxjQU5VO0VBT1YsZ0JBQUE7RUFDQSxpQkFBQTtBQVhGOztBQWVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGdDQUFBO0FBWkY7QUFjRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFaSjtBQWVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBcENRO0FBdUJaO0FBZ0JFO0VBQ0UsbUJBQUE7RUFDQSxjQTNDUTtFQTRDUixxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFkSjtBQWVJO0VBQVUsY0FyREw7QUF5Q1Q7QUFlRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFiSjtBQWdCRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQWxFSztFQW1FTCxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBZEo7QUFlSTtFQUFVLG1CQUFBO0FBWmQ7O0FBaUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBZEY7O0FBa0JBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRFQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBZkY7O0FBa0JBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0ExR087RUEyR1Asb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQTdHVTtFQThHVixTQUFBO0FBZkY7O0FBa0JBO0VBQ0UscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0E3SFU7RUE4SFYsaUJBQUE7RUFDQSxTQUFBO0FBZkY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWZGOztBQWtCQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0NBQUE7QUFmRjtBQWlCRTtFQUNFLDJCQUFBO0VBQ0EsOENBQUE7QUFmSjs7QUFtQkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FuS1U7RUFvS1YsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBaEJGO0FBa0JFO0VBQVUscUJBakxIO0VBaUwwQixjQWpMMUI7QUFtS1Q7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBZEY7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQS9MVTtFQWdNVix5Q0FBQTtBQWRGO0FBZ0JFO0VBQUksY0F4TUc7QUEyTFQ7QUFjRTtFQUFTLGNBak1DO0FBc0xaOztBQWVBO0VBQ0Usa0JBQUE7QUFaRjtBQWNFO0VBQXFCLGdCQUFBO0FBWHZCO0FBWUU7RUFBcUIsbUJBL01aO0FBc01YO0FBVUU7RUFBcUIsZ0JBQUE7QUFQdkI7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0EvTk87RUFnT1AsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQTlOVTtFQStOVixnQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGNBdE9VO0VBdU9WLGdCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFSRjtBQVVFO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtBQVJKO0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBMVFRO0FBZ1FaO0FBYUU7RUFDRSxtQkFBQTtFQUNBLGNBalJRO0VBa1JSLGdCQUFBO0VBQ0EsU0FBQTtBQVhKOztBQWdCQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWJGOztBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWJGO0FBZUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFiSjtBQWdCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQW5UUTtBQXFTWjtBQWlCRTtFQUNFLG1CQUFBO0VBQ0EsY0ExVFE7RUEyVFIsZ0JBQUE7RUFDQSxTQUFBO0FBZko7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQXRVUTtFQXVVUixpQkFBQTtFQUNBLFVBQUE7QUFoQko7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQWxCRjtBQW9CRTtFQUFVLDBDQUFBO0FBakJaO0FBbUJFO0VBQ0UscUJBbldLO0VBb1dMLCtDQUFBO0FBakJKO0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQWxCSjtBQXFCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBaFhRO0VBaVhSLGdCQUFBO0FBbkJKO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBcEJKO0FBc0JJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBN1hNO0FBeVdaO0FBdUJJO0VBQ0UsbUJBQUE7RUFDQSxjQXJZTTtBQWdYWjtBQXlCRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXZCSjtBQXlCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBclpNO0FBOFhaO0FBeUJNO0VBQUksY0E3WkQ7RUE2WmlCLGlCQUFBO0FBckIxQjtBQXlCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBdkJKO0FBeUJJO0VBQVUscUJBN2FMO0VBNmE0QixjQTdhNUI7QUF3WlQ7QUF1Qkk7RUFDRSxxREFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQXJCTjtBQXVCTTtFQUFVLFlBQUE7RUFBYyxXQUFBO0FBbkI5Qjs7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBdEJGO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBdEJKO0FBeUJFO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUF2Qko7QUEwQkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQXhCSjtBQTJCRTtFQUNFLGdCQUFBO0VBQ0EsY0F0ZEs7RUF1ZEwsZ0JBQUE7RUFDQSxlQUFBO0FBekJKO0FBMkJJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBekJOOztBQStCQTtFQUNFLG1CQTNkVTtFQTRkVixrQkFBQTtBQTVCRjtBQThCRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUE1Qko7QUErQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTdCSjtBQStCSTtFQUFhLFlBQUE7QUE1QmpCO0FBK0JFO0VBQ0UsaUJBQUE7RUFDQSxjQXhmUTtFQXlmUixTQUFBO0FBN0JKO0FBRUEsNDRxQkFBNDRxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpTCgMOiwpTCgCBWYXJpYWJsZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4kaW5kaWdvOiAjNjM2NmYxO1xuJHZpb2xldDogIzhiNWNmNjtcbiRzbGF0ZS01MDogI2Y4ZmFmYztcbiRzbGF0ZS0xMDA6ICNmMWY1Zjk7XG4kc2xhdGUtMjAwOiAjZTJlOGYwO1xuJHNsYXRlLTQwMDogIzk0YTNiODtcbiRzbGF0ZS02MDA6ICM0NzU1Njk7XG4kc2xhdGUtODAwOiAjMWUyOTNiO1xuJHNsYXRlLTkwMDogIzBmMTcyYTtcblxuLy8gw6LClMKAw6LClMKAIEJhc2Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubGFuZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogJHNsYXRlLTgwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBOYXZiYXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubGFuZGluZy1uYXYge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkc2xhdGUtMTAwO1xuXG4gIC5uYXYtaW5uZXIge1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5uYXYtbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogJHNsYXRlLTkwMDtcbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogJHNsYXRlLTYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cztcbiAgICAmOmhvdmVyIHsgY29sb3I6ICRpbmRpZ287IH1cbiAgfVxuXG4gIC5uYXYtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5idG4tY3RhLXNtIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDhweCAxOHB4O1xuICAgIGJhY2tncm91bmQ6ICRpbmRpZ287XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiBkYXJrZW4oJGluZGlnbywgNiUpOyB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFNoYXJlZCBsb2dvIGljb24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubG9nby1pY29uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkaW5kaWdvLCAkdmlvbGV0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vLyDDosKUwoDDosKUwoAgSGVybyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvIHtcbiAgcGFkZGluZzogMTAwcHggMjRweCA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIDgwJSA2MCUgYXQgNTAlIDAlLCAjZWVmMmZmIDAlLCAjZmZmIDcwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbn1cblxuLmhlcm8tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVmMmZmO1xuICBjb2xvcjogJGluZGlnbztcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZDJmZTtcbn1cblxuLmhlcm8tdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDIuMnJlbSwgNXZ3LCAzLjVyZW0pO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgY29sb3I6ICRzbGF0ZS05MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmdyYWRpZW50LXRleHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkaW5kaWdvLCAkdmlvbGV0KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xufVxuXG4uaGVyby1zdWJ0aXRsZSB7XG4gIG1heC13aWR0aDogNTgwcHg7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgY29sb3I6ICRzbGF0ZS02MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xuICBtYXJnaW46IDA7XG59XG5cbi5oZXJvLWN0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmltYXJ5LWxnIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxM3B4IDI4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRpbmRpZ28sICR2aW9sZXQpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjkyNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMsIGJveC1zaGFkb3cgMC4xNXM7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMzUpO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjQpO1xuICB9XG59XG5cbi5idG4tZ2hvc3QtbGcge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgY29sb3I6ICRzbGF0ZS02MDA7XG4gIGJvcmRlcjogMS41cHggc29saWQgJHNsYXRlLTIwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzLCBjb2xvciAwLjE1cztcblxuICAmOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAkaW5kaWdvOyBjb2xvcjogJGluZGlnbzsgfVxufVxuXG4uaGVyby1zdGF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uc3RhdC1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkc2xhdGUtMjAwO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBjb2xvcjogJHNsYXRlLTYwMDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsLjA1KTtcblxuICBpIHsgY29sb3I6ICRpbmRpZ287IH1cbiAgc3Ryb25nIHsgY29sb3I6ICRzbGF0ZS05MDA7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFNlY3Rpb24gYmFzZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogODhweCAyNHB4O1xuXG4gICYuZmVhdHVyZXMtc2VjdGlvbiB7IGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgJi5zdGVwcy1zZWN0aW9uICAgIHsgYmFja2dyb3VuZDogJHNsYXRlLTUwOyB9XG4gICYucHJpY2luZy1zZWN0aW9uICB7IGJhY2tncm91bmQ6ICNmZmY7IH1cbn1cblxuLnNlY3Rpb24taW5uZXIge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZWN0aW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogJGluZGlnbztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDEuNnJlbSwgM3Z3LCAyLjI1cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICRzbGF0ZS05MDA7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5cbi5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogJHNsYXRlLTYwMDtcbiAgbWFyZ2luOiAwIDAgNDhweDtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbn1cblxuLy8gw6LClMKAw6LClMKAIEZlYXR1cmVzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZlYXR1cmVzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uZmVhdHVyZS1jYXJkIHtcbiAgcGFkZGluZzogMzJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHNsYXRlLTEwMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwwLDAsLjA4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIH1cblxuICAuZmVhdHVyZS1pY29uIHtcbiAgICB3aWR0aDogNTJweDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIGNvbG9yOiAkc2xhdGUtOTAwO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogJHNsYXRlLTYwMDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgU3RlcHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RlcHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xuICBnYXA6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0ZXAtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJHNsYXRlLTEwMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcblxuICAuc3RlcC1udW0ge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGluZGlnbywgJHZpb2xldCk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICBjb2xvcjogJHNsYXRlLTkwMDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgY29sb3I6ICRzbGF0ZS02MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuc3RlcC1hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6ICRzbGF0ZS0yMDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgUHJpY2luZyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5wcmljaW5nLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5wbGFuLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDM2cHggMjhweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAkc2xhdGUtMjAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLDAsMCwuMDgpOyB9XG5cbiAgJi5wbGFuLWhpZ2hsaWdodGVkIHtcbiAgICBib3JkZXItY29sb3I6ICRpbmRpZ287XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xNSk7XG4gIH1cblxuICAucGxhbi1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEycHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkaW5kaWdvLCAkdmlvbGV0KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiA0cHggMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLnBsYW4tbmFtZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICRzbGF0ZS05MDA7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5wbGFuLXByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBnYXA6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gICAgLnBsYW4tYW1vdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiAkc2xhdGUtOTAwO1xuICAgIH1cblxuICAgIC5wbGFuLXBlcmlvZCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6ICRzbGF0ZS00MDA7XG4gICAgfVxuICB9XG5cbiAgLnBsYW4tZmVhdHVyZXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAyOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiAkc2xhdGUtNjAwO1xuXG4gICAgICBpIHsgY29sb3I6ICRpbmRpZ287IGZvbnQtc2l6ZTogMC44cmVtOyB9XG4gICAgfVxuICB9XG5cbiAgLnBsYW4tY3RhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICRzbGF0ZS0yMDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzNDE1NTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzLCBjb2xvciAwLjE1cztcblxuICAgICY6aG92ZXIgeyBib3JkZXItY29sb3I6ICRpbmRpZ287IGNvbG9yOiAkaW5kaWdvOyB9XG5cbiAgICAmLnBsYW4tY3RhLXByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGluZGlnbywgJHZpb2xldCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICY6aG92ZXIgeyBvcGFjaXR5OiAwLjk7IGNvbG9yOiAjZmZmOyB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDVEEgQmFubmVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmN0YS1iYW5uZXIge1xuICBwYWRkaW5nOiA4MHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZjQ2ZTUsICM3YzNhZWQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuXG4gIC5zZWN0aW9uLWlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDN2dywgMnJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgb3BhY2l0eTogMC44NTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeS1sZyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogJGluZGlnbztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGNvbG9yOiBkYXJrZW4oJGluZGlnbywgOCUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgRm9vdGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmxhbmRpbmctZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogJHNsYXRlLTkwMDtcbiAgcGFkZGluZzogMzJweCAyNHB4O1xuXG4gIC5mb290ZXItaW5uZXIge1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5mb290ZXItbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcblxuICAgIC5sb2dvLWljb24geyBvcGFjaXR5OiAwLjk7IH1cbiAgfVxuXG4gIC5mb290ZXItY29weSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICRzbGF0ZS00MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 81069:
/*!***************************************************!*\
  !*** ./src/app/modules/landing/landing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingModule: () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/landing/landing.component */ 28615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






class LandingModule {
  static {
    this.ɵfac = function LandingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LandingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LandingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule]
  });
})();

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map