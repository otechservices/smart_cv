"use strict";
(self["webpackChunkcv_master_app"] = self["webpackChunkcv_master_app"] || []).push([["src_app_modules_admin_admin_module_ts"],{

/***/ 60428:
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-layout.component */ 10066);
/* harmony import */ var _components_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/admin-dashboard.component */ 86225);
/* harmony import */ var _components_users_admin_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/admin-users.component */ 30681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutComponent,
  children: [{
    path: '',
    component: _components_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.AdminDashboardComponent
  }, {
    path: 'users',
    component: _components_users_admin_users_component__WEBPACK_IMPORTED_MODULE_2__.AdminUsersComponent
  }]
}];
class AdminRoutingModule {
  static {
    this.ɵfac = function AdminRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 26541:
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 60428);
/* harmony import */ var _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-layout.component */ 10066);
/* harmony import */ var _components_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/admin-dashboard.component */ 86225);
/* harmony import */ var _components_users_admin_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/admin-users.component */ 30681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
















class AdminModule {
  static {
    this.ɵfac = function AdminModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule, primeng_tag__WEBPACK_IMPORTED_MODULE_11__.TagModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__.ConfirmDialogModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__.AdminLayoutComponent, _components_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent, _components_users_admin_users_component__WEBPACK_IMPORTED_MODULE_3__.AdminUsersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule, primeng_tag__WEBPACK_IMPORTED_MODULE_11__.TagModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__.ConfirmDialogModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule]
  });
})();

/***/ }),

/***/ 86225:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/components/dashboard/admin-dashboard.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin.service */ 46583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);



function AdminDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", card_r1.bg)("color", card_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("pi " + card_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", card_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getValue(card_r1.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r1.label);
  }
}
class AdminDashboardComponent {
  constructor(admin) {
    this.admin = admin;
    this.stats = null;
    this.statCards = [{
      key: 'users',
      label: 'Utilisateurs total',
      icon: 'pi-users',
      color: '#6366f1',
      bg: '#eef2ff'
    }, {
      key: 'admins',
      label: 'Administrateurs',
      icon: 'pi-shield',
      color: '#8b5cf6',
      bg: '#f5f3ff'
    }, {
      key: 'customers',
      label: 'Clients',
      icon: 'pi-user',
      color: '#0ea5e9',
      bg: '#f0f9ff'
    }, {
      key: 'active',
      label: 'Comptes actifs',
      icon: 'pi-check-circle',
      color: '#10b981',
      bg: '#ecfdf5'
    }, {
      key: 'cvs',
      label: 'CVs créés',
      icon: 'pi-file-edit',
      color: '#f59e0b',
      bg: '#fffbeb'
    }, {
      key: 'applications',
      label: 'Candidatures',
      icon: 'pi-briefcase',
      color: '#ef4444',
      bg: '#fef2f2'
    }];
  }
  ngOnInit() {
    this.admin.stats().subscribe({
      next: r => this.stats = r.data
    });
  }
  getValue(key) {
    return this.stats ? this.stats[key] : 0;
  }
  static {
    this.ɵfac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      decls: 9,
      vars: 1,
      consts: [[1, "page-wrapper"], [1, "page-header"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-body"], [1, "stat-value"], [1, "stat-label"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Dashboard Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Vue d'ensemble de la plateforme SmartCV.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminDashboardComponent_div_8_Template, 8, 10, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statCards);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 30681:
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/components/users/admin-users.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUsersComponent: () => (/* binding */ AdminUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin.service */ 46583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 80405);
















const _c0 = () => ({
  width: "420px"
});
const _c1 = () => ({
  width: "460px"
});
const _c2 = () => ({
  width: "360px"
});
function AdminUsersComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "R\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminUsersComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 27)(3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p-tag", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-tag", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "div", 33)(19, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_18_Template_button_click_19_listener() {
      const u_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.openEdit(u_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_18_Template_button_click_20_listener() {
      const u_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggle(u_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_18_Template_button_click_21_listener() {
      const u_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.confirmDelete(u_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.initials(u_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, u_r2.role))("severity", ctx_r2.roleSeverity(u_r2.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", u_r2.is_active ? "Actif" : "Inactif")("severity", ctx_r2.statusSeverity(u_r2.is_active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 12, u_r2.created_at, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", u_r2.is_active ? "pi pi-eye-slash" : "pi pi-eye")("pTooltip", u_r2.is_active ? "D\u00E9sactiver" : "Activer");
  }
}
function AdminUsersComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 37)(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Aucun utilisateur trouv\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function AdminUsersComponent_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nom requis (min 2 caract\u00E8res). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.showCreateDialog = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_47_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.saveCreate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx_r2.isSaving);
  }
}
function AdminUsersComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_56_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.showEditDialog = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_56_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.saveEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx_r2.isSaving);
  }
}
class AdminUsersComponent {
  constructor(admin, msg, confirm, fb) {
    this.admin = admin;
    this.msg = msg;
    this.confirm = confirm;
    this.fb = fb;
    this.users = [];
    this.isLoading = true;
    this.search = '';
    this.showCreateDialog = false;
    this.showEditDialog = false;
    this.isSaving = false;
    this.selectedUser = null;
    this.roleOptions = [{
      label: 'Customer',
      value: 'customer'
    }, {
      label: 'Admin',
      value: 'admin'
    }];
  }
  ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]],
      role: ['customer', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.editForm = this.fb.group({
      role: ['customer', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.loadUsers();
  }
  loadUsers() {
    this.isLoading = true;
    this.admin.users(this.search).subscribe({
      next: r => {
        this.users = r.data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  openCreate() {
    this.createForm.reset({
      role: 'customer'
    });
    this.showCreateDialog = true;
  }
  openEdit(user) {
    this.selectedUser = user;
    this.editForm.patchValue({
      role: user.role
    });
    this.showEditDialog = true;
  }
  saveCreate() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    this.admin.createUser(this.createForm.value).subscribe({
      next: r => {
        this.users.unshift(r.data);
        this.showCreateDialog = false;
        this.isSaving = false;
        this.msg.add({
          severity: 'success',
          summary: 'Créé',
          detail: 'Utilisateur ajouté.'
        });
      },
      error: err => {
        this.isSaving = false;
        this.msg.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err.error?.message || 'Erreur serveur.'
        });
      }
    });
  }
  saveEdit() {
    if (!this.selectedUser || this.editForm.invalid) return;
    this.isSaving = true;
    this.admin.updateRole(this.selectedUser.id, this.editForm.value.role).subscribe({
      next: r => {
        const idx = this.users.findIndex(u => u.id === r.data.id);
        if (idx > -1) this.users[idx] = r.data;
        this.showEditDialog = false;
        this.isSaving = false;
        this.msg.add({
          severity: 'success',
          summary: 'Mis à jour',
          detail: 'Rôle modifié.'
        });
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
  toggle(user) {
    this.admin.toggleStatus(user.id).subscribe({
      next: r => {
        const idx = this.users.findIndex(u => u.id === user.id);
        if (idx > -1) this.users[idx] = r.data;
        this.msg.add({
          severity: 'info',
          summary: 'Statut',
          detail: `Compte ${r.data.is_active ? 'activé' : 'désactivé'}.`
        });
      }
    });
  }
  confirmDelete(user) {
    this.confirm.confirm({
      message: `Supprimer <strong>${user.name}</strong> ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.doDelete(user)
    });
  }
  doDelete(user) {
    this.admin.deleteUser(user.id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== user.id);
        this.msg.add({
          severity: 'success',
          summary: 'Supprimé',
          detail: 'Utilisateur supprimé.'
        });
      }
    });
  }
  roleSeverity(role) {
    return role === 'admin' ? 'warning' : 'info';
  }
  statusSeverity(active) {
    return active ? 'success' : 'danger';
  }
  initials(name) {
    return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  }
  static {
    this.ɵfac = function AdminUsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminUsersComponent,
      selectors: [["app-admin-users"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService])],
      decls: 57,
      vars: 28,
      consts: [[1, "page-wrapper"], [1, "page-header", "flex", "items-start", "justify-between"], ["pButton", "", "pRipple", "", "label", "Nouvel utilisateur", "icon", "pi pi-plus", 1, "btn-primary", 3, "click"], [1, "bg-white", "rounded-2xl", "border", "border-slate-100", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-5", "py-4", "border-b", "border-slate-100"], [1, "p-input-icon-left", 2, "width", "260px"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Nom ou email...", 1, "w-full", 3, "ngModelChange", "input", "ngModel"], [1, "text-xs", "text-slate-400"], ["currentPageReportTemplate", "{first}-{last} sur {totalRecords}", "responsiveLayout", "scroll", 3, "value", "paginator", "rows", "loading", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Nouvel utilisateur", "styleClass", "rounded-dialog", 3, "visibleChange", "visible", "modal", "draggable"], [1, "flex", "flex-col", "gap-4", "pt-2", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field-label"], [1, "field-required"], ["pInputText", "", "formControlName", "name", "placeholder", "Pr\u00E9nom Nom", 1, "w-full"], ["class", "field-error", 4, "ngIf"], ["pInputText", "", "formControlName", "email", "type", "email", "placeholder", "user@example.com", 1, "w-full"], ["pInputText", "", "formControlName", "password", "type", "password", "placeholder", "Min. 8 caract\u00E8res", 1, "w-full"], ["formControlName", "role", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", 3, "options"], ["pTemplate", "footer"], ["header", "Modifier le r\u00F4le", "styleClass", "rounded-dialog", 3, "visibleChange", "visible", "modal", "draggable"], [1, "pt-2", 3, "formGroup"], [1, "text-center"], [1, "flex", "items-center", "gap-3"], [1, "admin-user-avatar"], [1, "font-semibold", "text-slate-800", "text-sm"], [1, "text-slate-500", "text-sm"], [3, "value", "severity"], [1, "text-slate-400", "text-sm"], [1, "flex", "items-center", "justify-center", "gap-0.5"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pTooltip", "Modifier le r\u00F4le", "tooltipPosition", "top", 1, "btn-ghost", "p-button-rounded", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "tooltipPosition", "top", 1, "btn-ghost", "p-button-rounded", "p-button-sm", 3, "click", "icon", "pTooltip"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "pTooltip", "Supprimer", "tooltipPosition", "top", 1, "btn-danger-ghost", "p-button-rounded", "p-button-sm", 3, "click"], ["colspan", "6"], [1, "text-center", "py-12"], [1, "pi", "pi-users", "text-4xl", "text-slate-200", "block", "mb-3"], [1, "text-slate-400", "text-sm", "m-0"], [1, "field-error"], ["pButton", "", "label", "Annuler", "icon", "pi pi-times", 1, "btn-secondary", "p-button-sm", 3, "click"], ["pButton", "", "label", "Cr\u00E9er", "icon", "pi pi-check", 1, "btn-primary", "p-button-sm", 3, "click", "loading"], ["pButton", "", "label", "Enregistrer", "icon", "pi pi-check", 1, "btn-primary", "p-button-sm", 3, "click", "loading"]],
      template: function AdminUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-confirmDialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div")(4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "G\u00E9rez les comptes, r\u00F4les et statuts.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_8_listener() {
            return ctx.openCreate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.search, $event) || (ctx.search = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AdminUsersComponent_Template_input_input_13_listener() {
            return ctx.loadUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-table", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AdminUsersComponent_ng_template_17_Template, 13, 0, "ng-template", 10)(18, AdminUsersComponent_ng_template_18_Template, 22, 15, "ng-template", 11)(19, AdminUsersComponent_ng_template_19_Template, 6, 0, "ng-template", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p-dialog", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function AdminUsersComponent_Template_p_dialog_visibleChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.showCreateDialog, $event) || (ctx.showCreateDialog = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdminUsersComponent_Template_form_ngSubmit_21_listener() {
            return ctx.saveCreate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Nom complet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AdminUsersComponent_small_28_Template, 2, 0, "small", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15)(30, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15)(36, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Mot de passe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15)(42, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "R\u00F4le ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "p-dropdown", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AdminUsersComponent_ng_template_47_Template, 2, 1, "ng-template", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p-dialog", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function AdminUsersComponent_Template_p_dialog_visibleChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.showEditDialog, $event) || (ctx.showEditDialog = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "form", 25)(50, "div", 15)(51, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "R\u00F4le de ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "p-dropdown", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AdminUsersComponent_ng_template_56_Template, 2, 1, "ng-template", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_13_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.users.length, " utilisateur(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.users)("paginator", true)("rows", 10)("loading", ctx.isLoading)("showCurrentPageReport", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.showCreateDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("draggable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.createForm.get("name")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.createForm.get("name")) == null ? null : tmp_13_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.roleOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.showEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("draggable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedUser == null ? null : ctx.selectedUser.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.roleOptions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_tag__WEBPACK_IMPORTED_MODULE_9__.Tag, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 10066:
/*!****************************************************************!*\
  !*** ./src/app/modules/admin/layout/admin-layout.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



const _c0 = () => ({
  exact: true
});
class AdminLayoutComponent {
  constructor(auth) {
    this.auth = auth;
  }
  get user() {
    return this.auth.getUser();
  }
  get initials() {
    return this.user?.name?.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase() || 'A';
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.ɵfac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      decls: 40,
      vars: 5,
      consts: [[1, "admin-shell"], [1, "admin-sidebar"], [1, "admin-sidebar-logo"], [1, "admin-logo-icon"], [1, "pi", "pi-file-edit"], [1, "admin-logo-name"], [1, "admin-logo-badge"], [1, "admin-nav"], [1, "admin-nav-section"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "admin-nav-item", 3, "routerLinkActiveOptions"], [1, "pi", "pi-th-large"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "admin-nav-item"], [1, "pi", "pi-users"], [1, "admin-sidebar-footer"], ["routerLink", "/app/dashboard", 1, "admin-nav-item"], [1, "pi", "pi-arrow-left"], [1, "admin-nav-item", "admin-logout", 3, "click"], [1, "pi", "pi-sign-out"], [1, "admin-user-info"], [1, "admin-avatar"], [1, "admin-user-meta"], [1, "admin-user-name"], [1, "admin-user-email"], [1, "admin-content"]],
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "SmartCV");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nav", 7)(11, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Gestion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Vue utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_26_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "D\u00E9connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18)(31, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20)(34, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "main", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.initials);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.email);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: [".admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: #f8fafc;\n}\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  flex-shrink: 0;\n  background: #0f172a;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.admin-sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n.admin-logo-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n\n.admin-logo-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n}\n\n.admin-logo-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.6rem;\n  font-weight: 700;\n  background: #6366f1;\n  color: #fff;\n  padding: 1px 6px;\n  border-radius: 4px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n\n.admin-nav[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.admin-nav-section[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: rgba(255, 255, 255, 0.3);\n  padding: 0 8px;\n  margin: 0 0 8px;\n}\n\n.admin-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  width: 100%;\n  text-align: left;\n  transition: background 0.15s, color 0.15s;\n}\n.admin-nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.admin-nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.admin-nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.25);\n  color: #a5b4fc;\n}\n\n.admin-logout[_ngcontent-%COMP%] {\n  color: rgba(248, 113, 113, 0.7);\n}\n.admin-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.1);\n  color: #f87171;\n}\n\n.admin-sidebar-footer[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.admin-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 10px 4px;\n  margin-top: 4px;\n}\n\n.admin-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.admin-user-meta[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.admin-user-meta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-user-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.admin-user-email[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background: #f8fafc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0RBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBREY7QUFHRTtFQUFJLGlCQUFBO0FBQU47QUFFRTtFQUFVLHFDQUFBO0VBQW1DLCtCQUFBO0FBRS9DO0FBREU7RUFBVyxvQ0FBQTtFQUFrQyxjQUFBO0FBSy9DOztBQUZBO0VBQ0UsK0JBQUE7QUFLRjtBQUpFO0VBQVUsb0NBQUE7RUFBa0MsY0FBQTtBQVE5Qzs7QUFKQTtFQUNFLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFPRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFPRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBSkE7RUFDRSxZQUFBO0FBT0Y7QUFORTtFQUFJLFNBQUE7RUFBVyxnQkFBQTtFQUFrQix1QkFBQTtFQUF5QixtQkFBQTtBQVk1RDs7QUFUQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQVlGOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQVlGOztBQVJBO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFXRiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tc2hlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xufVxuXG4vLyDilIDilIAgU2lkZWJhciDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi5hZG1pbi1zaWRlYmFyIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYWRtaW4tc2lkZWJhci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMThweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjA4KTtcbn1cblxuLmFkbWluLWxvZ28taWNvbiB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM4YjVjZjYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hZG1pbi1sb2dvLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmFkbWluLWxvZ28tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kOiAjNjM2NmYxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMXB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi8vIOKUgOKUgCBOYXYg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4uYWRtaW4tbmF2IHtcbiAgcGFkZGluZzogMjBweCAxMnB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmFkbWluLW5hdi1zZWN0aW9uIHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcbiAgcGFkZGluZzogMCA4cHg7XG4gIG1hcmdpbjogMCAwIDhweDtcbn1cblxuLmFkbWluLW5hdi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA5cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cywgY29sb3IgMC4xNXM7XG5cbiAgaSB7IGZvbnQtc2l6ZTogMC45cmVtOyB9XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KTsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpOyB9XG4gICYuYWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLC4yNSk7IGNvbG9yOiAjYTViNGZjOyB9XG59XG5cbi5hZG1pbi1sb2dvdXQge1xuICBjb2xvcjogcmdiYSgyNDgsMTEzLDExMywuNyk7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwxMTMsMTEzLC4xKTsgY29sb3I6ICNmODcxNzE7IH1cbn1cblxuLy8g4pSA4pSAIEZvb3RlciDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi5hZG1pbi1zaWRlYmFyLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4wOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYWRtaW4tdXNlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDEwcHggNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5hZG1pbi1hdmF0YXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM4YjVjZjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hZG1pbi11c2VyLW1ldGEge1xuICBtaW4td2lkdGg6IDA7XG4gIHAgeyBtYXJnaW46IDA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG59XG5cbi5hZG1pbi11c2VyLW5hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjg1KTtcbn1cblxuLmFkbWluLXVzZXItZW1haWwge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xufVxuXG4vLyDilIDilIAgQ29udGVudCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi5hZG1pbi1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrREFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFERjtBQUdFO0VBQUksaUJBQUE7QUFBTjtBQUVFO0VBQVUscUNBQUE7RUFBbUMsK0JBQUE7QUFFL0M7QUFERTtFQUFXLG9DQUFBO0VBQWtDLGNBQUE7QUFLL0M7O0FBRkE7RUFDRSwrQkFBQTtBQUtGO0FBSkU7RUFBVSxvQ0FBQTtFQUFrQyxjQUFBO0FBUTlDOztBQUpBO0VBQ0UsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQU9GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFPRjs7QUFKQTtFQUNFLFlBQUE7QUFPRjtBQU5FO0VBQUksU0FBQTtFQUFXLGdCQUFBO0VBQWtCLHVCQUFBO0VBQXlCLG1CQUFBO0FBWTVEOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBWUY7O0FBVEE7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FBWUY7O0FBUkE7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVdGO0FBQ0EsNGlPQUE0aU8iLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tc2hlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xufVxuXG4vLyDDosKUwoDDosKUwoAgU2lkZWJhciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5hZG1pbi1zaWRlYmFyIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYWRtaW4tc2lkZWJhci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMThweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjA4KTtcbn1cblxuLmFkbWluLWxvZ28taWNvbiB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM4YjVjZjYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hZG1pbi1sb2dvLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmFkbWluLWxvZ28tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kOiAjNjM2NmYxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMXB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBOYXYgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYWRtaW4tbmF2IHtcbiAgcGFkZGluZzogMjBweCAxMnB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmFkbWluLW5hdi1zZWN0aW9uIHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcbiAgcGFkZGluZzogMCA4cHg7XG4gIG1hcmdpbjogMCAwIDhweDtcbn1cblxuLmFkbWluLW5hdi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA5cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cywgY29sb3IgMC4xNXM7XG5cbiAgaSB7IGZvbnQtc2l6ZTogMC45cmVtOyB9XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KTsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpOyB9XG4gICYuYWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLC4yNSk7IGNvbG9yOiAjYTViNGZjOyB9XG59XG5cbi5hZG1pbi1sb2dvdXQge1xuICBjb2xvcjogcmdiYSgyNDgsMTEzLDExMywuNyk7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwxMTMsMTEzLC4xKTsgY29sb3I6ICNmODcxNzE7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEZvb3RlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5hZG1pbi1zaWRlYmFyLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4wOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYWRtaW4tdXNlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDEwcHggNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5hZG1pbi1hdmF0YXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM4YjVjZjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hZG1pbi11c2VyLW1ldGEge1xuICBtaW4td2lkdGg6IDA7XG4gIHAgeyBtYXJnaW46IDA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG59XG5cbi5hZG1pbi11c2VyLW5hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjg1KTtcbn1cblxuLmFkbWluLXVzZXItZW1haWwge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xufVxuXG4vLyDDosKUwoDDosKUwoAgQ29udGVudCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5hZG1pbi1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 46583:
/*!*********************************************************!*\
  !*** ./src/app/modules/admin/services/admin.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminService: () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _core_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/config/api.config */ 66119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class AdminService {
  constructor(http) {
    this.http = http;
    this.base = `${_core_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/admin`;
  }
  stats() {
    return this.http.get(`${this.base}/stats`);
  }
  users(search = '', role = '') {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (search) params = params.set('search', search);
    if (role) params = params.set('role', role);
    return this.http.get(`${this.base}/users`, {
      params
    });
  }
  createUser(body) {
    return this.http.post(`${this.base}/users`, body);
  }
  updateRole(id, role) {
    return this.http.put(`${this.base}/users/${id}/role`, {
      role
    });
  }
  toggleStatus(id) {
    return this.http.put(`${this.base}/users/${id}/toggle`, {});
  }
  deleteUser(id) {
    return this.http.delete(`${this.base}/users/${id}`);
  }
  static {
    this.ɵfac = function AdminService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AdminService,
      factory: AdminService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_admin_module_ts.js.map