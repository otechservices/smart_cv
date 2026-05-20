"use strict";
(self["webpackChunkcv_master_app"] = self["webpackChunkcv_master_app"] || []).push([["src_app_modules_user_user_module_ts"],{

/***/ 97461:
/*!*******************************************************!*\
  !*** ./src/app/core/services/subscription.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionService: () => (/* binding */ SubscriptionService)
/* harmony export */ });
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api.config */ 66119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class SubscriptionService {
  constructor(http) {
    this.http = http;
    this.url = `${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/subscriptions`;
  }
  getPlans() {
    return this.http.get(this.url);
  }
  static {
    this.ɵfac = function SubscriptionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SubscriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SubscriptionService,
      factory: SubscriptionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 82325:
/*!********************************************************************************!*\
  !*** ./src/app/modules/user/components/subscription/subscription.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionComponent: () => (/* binding */ SubscriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_subscription_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/subscription.service */ 97461);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/skeleton */ 76301);






const _c0 = () => [1, 2, 3];
const _c1 = (a0, a1) => ({
  "border-2 shadow-card scale-105": a0,
  "border border-slate-200 hover:shadow-medium": a1
});
const _c2 = (a0, a1, a2) => ({
  "bg-slate-100": a0,
  "bg-gradient-primary": a1,
  "bg-slate-800": a2
});
function SubscriptionComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-skeleton", 11)(2, "p-skeleton", 12)(3, "p-skeleton", 13)(4, "p-skeleton", 13)(5, "p-skeleton", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SubscriptionComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubscriptionComponent_div_6_div_1_Template, 6, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
function SubscriptionComponent_div_7_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u2B50 LE PLUS POPULAIRE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SubscriptionComponent_div_7_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Votre plan actuel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SubscriptionComponent_div_7_div_1_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    const plan_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", plan_r2.name === "Premium" ? "bg-indigo-100" : "bg-slate-100");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", plan_r2.name === "Premium" ? "text-indigo-600" : "text-slate-500");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", feature_r1, " ");
  }
}
function SubscriptionComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubscriptionComponent_div_7_div_1_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21)(8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SubscriptionComponent_div_7_div_1_p_10_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 25)(13, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SubscriptionComponent_div_7_div_1_li_14_Template, 4, 3, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const plan_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border-color", plan_r2.name === "Premium" ? "#6366f1" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c1, plan_r2.name === "Premium", plan_r2.name !== "Premium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", plan_r2.name === "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("pt-12", plan_r2.name === "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", plan_r2.name === "Premium" ? "bg-gradient-soft" : "bg-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](21, _c2, plan_r2.name === "Free", plan_r2.name === "Premium", plan_r2.name === "Pro"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("pi text-xl " + (plan_r2.name === "Free" ? "pi-user text-slate-500" : plan_r2.name === "Premium" ? "pi-star text-white" : "pi-crown text-yellow-400"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](plan_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](plan_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", plan_r2.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", plan_r2.name === "Premium" ? "border-t border-indigo-200" : "border-t border-slate-100");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", plan_r2.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", plan_r2.isCurrent ? "Plan actuel" : plan_r2.name === "Free" ? "Commencer gratuitement" : "Choisir " + plan_r2.name)("disabled", !!plan_r2.isCurrent)("ngClass", ctx_r2.ctaClass(plan_r2));
  }
}
function SubscriptionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubscriptionComponent_div_7_div_1_Template, 17, 25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.plans);
  }
}
class SubscriptionComponent {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
    this.plans = [];
    this.isLoading = true;
    this.fallback = [{
      name: 'Free',
      price: 'Gratuit',
      features: ['1 modèle de CV', '5 lettres / mois', 'Candidatures manuelles'],
      isCurrent: true
    }, {
      name: 'Premium',
      price: '9,99 € / mois',
      features: ['5 modèles de CV', '50 lettres / mois', '20 candidatures auto', 'Optimisation IA'],
      isCurrent: false
    }, {
      name: 'Pro',
      price: '19,99 € / mois',
      features: ['Tous les modèles', 'Lettres illimitées', 'Candidatures illimitées', 'IA prioritaire'],
      isCurrent: false
    }];
  }
  ngOnInit() {
    this.subscriptionService.getPlans().subscribe({
      next: res => {
        this.plans = res.data;
        this.isLoading = false;
      },
      error: () => {
        this.plans = this.fallback;
        this.isLoading = false;
      }
    });
  }
  ctaClass(plan) {
    if (plan.isCurrent) return 'btn-secondary';
    if (plan.name === 'Premium') return 'btn-primary';
    if (plan.name === 'Pro') return 'btn-dark';
    return 'btn-secondary';
  }
  static {
    this.ɵfac = function SubscriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_subscription_service__WEBPACK_IMPORTED_MODULE_0__.SubscriptionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SubscriptionComponent,
      selectors: [["app-subscription"]],
      decls: 18,
      vars: 2,
      consts: [[1, "page-wrapper"], [1, "page-header", "text-center"], ["class", "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto", 4, "ngIf"], [1, "flex", "flex-wrap", "justify-center", "gap-8", "mt-12", "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-shield", "text-indigo-400"], [1, "pi", "pi-undo", "text-indigo-400"], [1, "pi", "pi-clock", "text-indigo-400"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "max-w-5xl", "mx-auto"], ["class", "rounded-2xl border border-slate-200 p-7 flex flex-col gap-4", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-slate-200", "p-7", "flex", "flex-col", "gap-4"], ["height", "3rem", "borderRadius", "12px"], ["height", "1rem", "width", "60%"], ["height", "1rem"], ["height", "2.5rem", "borderRadius", "10px"], ["class", "relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300", 3, "ngClass", "borderColor", 4, "ngFor", "ngForOf"], [1, "relative", "flex", "flex-col", "rounded-2xl", "overflow-hidden", "transition-all", "duration-300", 3, "ngClass"], ["class", "absolute top-0 left-0 right-0 text-center py-2 text-xs font-bold text-white", "style", "background: linear-gradient(135deg,#6366f1,#8b5cf6)", 4, "ngIf"], [1, "px-7", "pt-8", "pb-6", "text-center", 3, "ngClass"], [1, "w-14", "h-14", "rounded-2xl", "mx-auto", "mb-4", "flex", "items-center", "justify-center", 3, "ngClass"], [1, "text-xl", "font-bold", "text-slate-900", "mb-1"], [1, "flex", "items-end", "justify-center", "gap-1", "mt-3"], [1, "text-4xl", "font-extrabold", "text-slate-900"], ["class", "mt-2 text-xs font-semibold text-emerald-600 bg-emerald-50 inline-block px-2 py-0.5 rounded-full", 4, "ngIf"], [3, "ngClass"], [1, "px-7", "py-6", "flex-1", "bg-white"], [1, "flex", "flex-col", "gap-3"], ["class", "flex items-start gap-3 text-sm text-slate-700", 4, "ngFor", "ngForOf"], [1, "px-7", "pb-7", "bg-white"], ["pButton", "", "pRipple", "", 1, "w-full", "p-button-lg", 2, "border-radius", "10px", "padding", ".9rem", 3, "label", "disabled", "ngClass"], [1, "absolute", "top-0", "left-0", "right-0", "text-center", "py-2", "text-xs", "font-bold", "text-white", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)"], [1, "mt-2", "text-xs", "font-semibold", "text-emerald-600", "bg-emerald-50", "inline-block", "px-2", "py-0.5", "rounded-full"], [1, "flex", "items-start", "gap-3", "text-sm", "text-slate-700"], [1, "w-5", "h-5", "rounded-full", "flex", "items-center", "justify-center", "shrink-0", "mt-0.5", 3, "ngClass"], [1, "pi", "pi-check", "text-xs", 3, "ngClass"]],
      template: function SubscriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Choisissez votre plan");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "D\u00E9verrouillez tout le potentiel de CV Master avec un abonnement adapt\u00E9 \u00E0 vos besoins.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SubscriptionComponent_div_6_Template, 2, 2, "div", 2)(7, SubscriptionComponent_div_7_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Paiement s\u00E9curis\u00E9 SSL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " R\u00E9siliation \u00E0 tout moment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Support 7j/7 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQSIsImZpbGUiOiJzdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgZm9yIFN1YnNjcmlwdGlvbkNvbXBvbmVudCAqL1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLGdUQUFnVCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlcyBmb3IgU3Vic2NyaXB0aW9uQ29tcG9uZW50ICovXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 90992:
/*!*****************************************************!*\
  !*** ./src/app/modules/user/user-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRoutingModule: () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/subscription/subscription.component */ 82325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  redirectTo: 'subscriptions',
  pathMatch: 'full'
}, {
  path: 'subscriptions',
  component: _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_0__.SubscriptionComponent
}];
class UserRoutingModule {
  static {
    this.ɵfac = function UserRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9697:
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 90992);
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/subscription/subscription.component */ 82325);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



// PrimeNG






class UserModule {
  static {
    this.ɵfac = function UserModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UserModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, primeng_badge__WEBPACK_IMPORTED_MODULE_7__.BadgeModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__.SkeletonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_1__.SubscriptionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, primeng_badge__WEBPACK_IMPORTED_MODULE_7__.BadgeModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__.SkeletonModule]
  });
})();

/***/ }),

/***/ 76301:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-skeleton.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skeleton: () => (/* binding */ Skeleton),
/* harmony export */   SkeletonModule: () => (/* binding */ SkeletonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





/**
 * Skeleton is a placeholder to display instead of the actual content.
 * @group Components
 */
class Skeleton {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Shape of the element.
   * @group Props
   */
  shape = 'rectangle';
  /**
   * Type of the animation.
   * @gruop Props
   */
  animation = 'wave';
  /**
   * Border radius of the element, defaults to value from theme.
   * @group Props
   */
  borderRadius;
  /**
   * Size of the skeleton.
   * @group Props
   */
  size;
  /**
   * Width of the element.
   * @group Props
   */
  width = '100%';
  /**
   * Height of the element.
   * @group Props
   */
  height = '1rem';
  containerClass() {
    return {
      'p-skeleton p-component': true,
      'p-skeleton-circle': this.shape === 'circle',
      'p-skeleton-none': this.animation === 'none'
    };
  }
  get containerStyle() {
    if (this.size) return {
      ...this.style,
      width: this.size,
      height: this.size,
      borderRadius: this.borderRadius
    };else return {
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius,
      ...this.style
    };
  }
  static ɵfac = function Skeleton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Skeleton)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Skeleton,
    selectors: [["p-skeleton"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      shape: "shape",
      animation: "animation",
      borderRadius: "borderRadius",
      size: "size",
      width: "width",
      height: "height"
    },
    decls: 1,
    vars: 7,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function Skeleton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "skeleton")("aria-hidden", true)("data-pc-section", "root");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Skeleton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-skeleton',
      template: ` <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle" [attr.data-pc-name]="'skeleton'" [attr.aria-hidden]="true" [attr.data-pc-section]="'root'"></div> `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"]
    }]
  }], null, {
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    borderRadius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class SkeletonModule {
  static ɵfac = function SkeletonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SkeletonModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: SkeletonModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkeletonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [Skeleton],
      declarations: [Skeleton]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 93616:
/*!*******************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tag.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tag: () => (/* binding */ Tag),
/* harmony export */   TagModule: () => (/* binding */ TagModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 17780);






/**
 * Tag component is used to categorize content.
 * @group Components
 */
const _c0 = ["*"];
function Tag_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tag_ng_container_2_span_1_Template, 1, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.icon);
  }
}
function Tag_span_3_1_ng_template_0_Template(rf, ctx) {}
function Tag_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tag_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tag_span_3_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconTemplate);
  }
}
class Tag {
  cd;
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  templates;
  iconTemplate;
  _style;
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'icon':
          this.iconTemplate = item.template;
          break;
      }
    });
  }
  constructor(cd) {
    this.cd = cd;
  }
  containerClass() {
    return {
      'p-tag p-component': true,
      [`p-tag-${this.severity}`]: this.severity,
      'p-tag-rounded': this.rounded
    };
  }
  static ɵfac = function Tag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Tag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    ngContentSelectors: _c0,
    decls: 6,
    vars: 7,
    consts: [[3, "ngClass", "ngStyle"], [4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-value"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Tag_ng_container_2_Template, 2, 1, "ng-container", 1)(3, Tag_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.iconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
    styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tag',
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
            <ng-container *ngIf="!iconTemplate">
                <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
            </ng-container>
            <span class="p-tag-icon" *ngIf="iconTemplate">
                <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>
            </span>
            <span class="p-tag-value">{{ value }}</span>
        </span>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    severity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rounded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }]
  });
})();
class TagModule {
  static ɵfac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TagModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TagModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
      exports: [Tag, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
      declarations: [Tag]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_modules_user_user_module_ts.js.map