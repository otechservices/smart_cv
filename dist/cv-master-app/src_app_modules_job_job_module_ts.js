"use strict";
(self["webpackChunkcv_master_app"] = self["webpackChunkcv_master_app"] || []).push([["src_app_modules_job_job_module_ts"],{

/***/ 33674:
/*!*********************************************!*\
  !*** ./src/app/core/services/ai.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIService: () => (/* binding */ AIService)
/* harmony export */ });
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api.config */ 66119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class AIService {
  constructor(http) {
    this.http = http;
    this.url = `${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/ai`;
  }
  generateCoverLetter(jobDescription, cvId) {
    return this.http.post(`${this.url}/generate-letter`, {
      jobDescription,
      cvId
    });
  }
  optimizeCv(content) {
    return this.http.post(`${this.url}/optimize-cv`, {
      content
    });
  }
  static {
    this.ɵfac = function AIService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AIService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AIService,
      factory: AIService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 75091:
/*!**********************************************!*\
  !*** ./src/app/core/services/job.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobService: () => (/* binding */ JobService)
/* harmony export */ });
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api.config */ 66119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class JobService {
  constructor(http) {
    this.http = http;
    this.url = `${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}/apply`;
  }
  addApplication(app) {
    return this.http.post(this.url, app);
  }
  static {
    this.ɵfac = function JobService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JobService,
      factory: JobService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 78391:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/job/components/job-tracking/job-tracking.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobTrackingComponent: () => (/* binding */ JobTrackingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/job.service */ 75091);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 26895);














const _c0 = () => ({
  width: "480px"
});
const _c1 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function JobTrackingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", s_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", s_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r1.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r1.label);
  }
}
function JobTrackingComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Entreprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Poste ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-sortIcon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p-sortIcon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Statut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p-sortIcon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function JobTrackingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 41)(3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-tag", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td")(15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "button", 48)(17, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobTrackingComponent_ng_template_20_Template_button_click_18_listener() {
      const rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).rowIndex;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.removeApplication(rowIndex_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const app_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", app_r5.company.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r5.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 8, app_r5.date, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r3.getStatusStyle(app_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.getStatusLabel(app_r5.status))("severity", ctx_r3.getStatusSeverity(app_r5.status));
  }
}
function JobTrackingComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 51)(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Aucune candidature pour le moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cliquez sur \"Nouvelle candidature\" pour commencer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function JobTrackingComponent_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " L'entreprise est requise. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function JobTrackingComponent_small_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le poste est requis. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function JobTrackingComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobTrackingComponent_ng_template_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.showDialog = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobTrackingComponent_ng_template_51_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.saveApplication());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx_r3.isSaving);
  }
}
const STATUS_CONFIG = {
  Sent: {
    label: 'Envoyée',
    severity: 'warning',
    bg: '#fff7ed',
    color: '#f97316'
  },
  Viewed: {
    label: 'Vue',
    severity: 'info',
    bg: '#eff6ff',
    color: '#3b82f6'
  },
  Interviewing: {
    label: 'Entretien',
    severity: 'info',
    bg: '#eef2ff',
    color: '#6366f1'
  },
  Offer: {
    label: 'Offre',
    severity: 'success',
    bg: '#f0fdf4',
    color: '#22c55e'
  },
  Rejected: {
    label: 'Refusée',
    severity: 'danger',
    bg: '#fef2f2',
    color: '#ef4444'
  }
};
class JobTrackingComponent {
  constructor(fb, jobService, messageService) {
    this.fb = fb;
    this.jobService = jobService;
    this.messageService = messageService;
    this.applications = [{
      company: 'Innovatech',
      title: 'Frontend Developer',
      date: '2023-10-26',
      status: 'Interviewing'
    }, {
      company: 'Data Systems',
      title: 'Software Engineer',
      date: '2023-10-25',
      status: 'Viewed'
    }, {
      company: 'Creative Minds',
      title: 'UI/UX Designer',
      date: '2023-10-24',
      status: 'Rejected'
    }, {
      company: 'Future Solutions',
      title: 'Full-Stack Developer',
      date: '2023-10-22',
      status: 'Sent'
    }, {
      company: 'Cloud Corp',
      title: 'DevOps Engineer',
      date: '2023-10-20',
      status: 'Offer'
    }];
    this.statusStats = [{
      label: 'Envoyées',
      status: 'Sent',
      color: '#f97316',
      count: 0
    }, {
      label: 'Vues',
      status: 'Viewed',
      color: '#3b82f6',
      count: 0
    }, {
      label: 'Entretiens',
      status: 'Interviewing',
      color: '#6366f1',
      count: 0
    }, {
      label: 'Offres',
      status: 'Offer',
      color: '#22c55e',
      count: 0
    }, {
      label: 'Refusées',
      status: 'Rejected',
      color: '#ef4444',
      count: 0
    }];
    this.statusOptions = [{
      label: 'Envoyée',
      value: 'Sent'
    }, {
      label: 'Vue',
      value: 'Viewed'
    }, {
      label: 'Entretien',
      value: 'Interviewing'
    }, {
      label: 'Offre',
      value: 'Offer'
    }, {
      label: 'Refusée',
      value: 'Rejected'
    }];
    this.showDialog = false;
    this.isSaving = false;
  }
  ngOnInit() {
    this.appForm = this.fb.group({
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      date: [new Date().toISOString().split('T')[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      status: ['Sent', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.refreshStats();
  }
  openDialog() {
    this.appForm.reset({
      date: new Date().toISOString().split('T')[0],
      status: 'Sent'
    });
    this.showDialog = true;
  }
  saveApplication() {
    this.appForm.markAllAsTouched();
    if (this.appForm.invalid) return;
    this.isSaving = true;
    const payload = this.appForm.value;
    this.jobService.addApplication(payload).subscribe({
      next: res => {
        this.applications = [res.data.application, ...this.applications];
        this.refreshStats();
        this.showDialog = false;
        this.isSaving = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Candidature ajoutée',
          detail: res.message
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible d\'enregistrer la candidature.'
        });
        this.isSaving = false;
      }
    });
  }
  removeApplication(index) {
    this.applications = this.applications.filter((_, i) => i !== index);
    this.refreshStats();
  }
  refreshStats() {
    this.statusStats.forEach(s => {
      s.count = this.applications.filter(a => a.status === s.status).length;
    });
  }
  getStatusLabel(status) {
    return STATUS_CONFIG[status]?.label ?? status;
  }
  getStatusSeverity(status) {
    return STATUS_CONFIG[status]?.severity ?? 'info';
  }
  getStatusStyle(status) {
    const cfg = STATUS_CONFIG[status];
    return cfg ? {
      background: cfg.bg,
      color: cfg.color,
      border: 'none'
    } : {};
  }
  static {
    this.ɵfac = function JobTrackingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JobTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: JobTrackingComponent,
      selectors: [["app-job-tracking"]],
      decls: 52,
      vars: 26,
      consts: [[1, "page-wrapper"], [1, "page-header", "flex", "items-start", "justify-between"], ["pButton", "", "pRipple", "", "label", "Nouvelle candidature", "icon", "pi pi-plus", 1, "btn-primary", 3, "click"], [1, "grid", "grid-cols-2", "md:grid-cols-5", "gap-3", "mb-6"], ["class", "bg-white rounded-xl border border-slate-100 px-4 py-3 flex items-center gap-3 cursor-pointer hover:shadow-medium transition-shadow", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "border", "border-slate-100", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-5", "py-4", "border-b", "border-slate-100"], [1, "p-input-icon-left", 2, "width", "240px"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Rechercher...", 1, "w-full"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "text-slate-400"], ["currentPageReportTemplate", "{first}-{last} sur {totalRecords}", "responsiveLayout", "scroll", 3, "value", "paginator", "rows", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Nouvelle candidature", "styleClass", "rounded-dialog", 3, "visibleChange", "visible", "modal", "closable", "draggable"], [1, "flex", "flex-col", "gap-4", "pt-2", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "field-label"], [1, "field-required"], ["pInputText", "", "formControlName", "company", "placeholder", "ex. Acme Corp", 1, "w-full", 3, "ngClass"], ["class", "field-error", 4, "ngIf"], ["pInputText", "", "formControlName", "title", "placeholder", "ex. D\u00E9veloppeur Frontend", 1, "w-full", 3, "ngClass"], [1, "grid", "grid-cols-2", "gap-4"], ["pInputText", "", "type", "date", "formControlName", "date", 1, "w-full", 3, "ngClass"], ["formControlName", "status", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", 3, "options"], ["pTemplate", "footer"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "px-4", "py-3", "flex", "items-center", "gap-3", "cursor-pointer", "hover:shadow-medium", "transition-shadow"], [1, "w-2.5", "h-2.5", "rounded-full", "shrink-0"], [1, "text-lg", "font-bold", "m-0"], [1, "text-xs", "text-slate-400", "m-0"], ["pSortableColumn", "company"], ["field", "company"], ["pSortableColumn", "title"], ["field", "title"], ["pSortableColumn", "date"], ["field", "date"], ["pSortableColumn", "status"], ["field", "status"], [1, "text-center"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "font-bold", "text-xs", "text-white", "shrink-0", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)"], [1, "font-semibold", "text-slate-800", "text-sm"], [1, "text-slate-600", "text-sm"], [1, "text-slate-400", "text-sm"], [3, "value", "severity"], [1, "flex", "items-center", "justify-center", "gap-0.5"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pTooltip", "Modifier", "tooltipPosition", "top", 1, "btn-ghost", "p-button-rounded", "p-button-sm"], ["pButton", "", "pRipple", "", "icon", "pi pi-external-link", "pTooltip", "Voir l'offre", "tooltipPosition", "top", 1, "btn-ghost", "p-button-rounded", "p-button-sm"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "pTooltip", "Supprimer", "tooltipPosition", "top", 1, "btn-danger-ghost", "p-button-rounded", "p-button-sm", 3, "click"], ["colspan", "5"], [1, "text-center", "py-12"], [1, "pi", "pi-briefcase", "text-4xl", "text-slate-200", "block", "mb-3"], [1, "text-slate-400", "text-sm", "m-0"], [1, "text-slate-300", "text-xs", "mt-1", "m-0"], [1, "field-error"], ["pButton", "", "label", "Annuler", "icon", "pi pi-times", 1, "btn-secondary", "p-button-sm", 3, "click"], ["pButton", "", "label", "Enregistrer", "icon", "pi pi-check", 1, "btn-primary", "p-button-sm", 3, "click", "loading"]],
      template: function JobTrackingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Mes candidatures");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Suivez l'avancement de toutes vos d\u00E9marches en un seul endroit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobTrackingComponent_Template_button_click_7_listener() {
            return ctx.openDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, JobTrackingComponent_div_9_Template, 7, 6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8)(14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p-table", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, JobTrackingComponent_ng_template_19_Template, 15, 0, "ng-template", 13)(20, JobTrackingComponent_ng_template_20_Template, 19, 11, "ng-template", 14)(21, JobTrackingComponent_ng_template_21_Template, 8, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p-dialog", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function JobTrackingComponent_Template_p_dialog_visibleChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.showDialog, $event) || (ctx.showDialog = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function JobTrackingComponent_Template_form_ngSubmit_23_listener() {
            return ctx.saveApplication();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18)(25, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Entreprise ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, JobTrackingComponent_small_30_Template, 2, 0, "small", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18)(32, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Poste ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, JobTrackingComponent_small_37_Template, 2, 0, "small", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24)(39, "div", 18)(40, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18)(46, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Statut ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "p-dropdown", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, JobTrackingComponent_ng_template_51_Template, 2, 1, "ng-template", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_12_0;
          let tmp_13_0;
          let tmp_14_0;
          let tmp_15_0;
          let tmp_16_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statusStats);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.applications.length, " candidatures");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.applications)("paginator", true)("rows", 8)("showCurrentPageReport", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.showDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", true)("draggable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.appForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, ((tmp_12_0 = ctx.appForm.get("company")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.appForm.get("company")) == null ? null : tmp_12_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.appForm.get("company")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.appForm.get("company")) == null ? null : tmp_13_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, ((tmp_14_0 = ctx.appForm.get("title")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.appForm.get("title")) == null ? null : tmp_14_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.appForm.get("title")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.appForm.get("title")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, ((tmp_16_0 = ctx.appForm.get("date")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.appForm.get("date")) == null ? null : tmp_16_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.statusOptions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortIcon, primeng_tag__WEBPACK_IMPORTED_MODULE_8__.Tag, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["\n\n[_nghost-%COMP%]     .p-tag {\n  min-width: 100px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi10cmFja2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6ImpvYi10cmFja2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlcyBmb3IgSm9iVHJhY2tpbmdDb21wb25lbnQgKi9cbjpob3N0IDo6bmctZGVlcCAucC10YWcge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9qb2IvY29tcG9uZW50cy9qb2ItdHJhY2tpbmcvam9iLXRyYWNraW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFBO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDQSx3Y0FBd2MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgZm9yIEpvYlRyYWNraW5nQ29tcG9uZW50ICovXG46aG9zdCA6Om5nLWRlZXAgLnAtdGFnIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2285:
/*!*******************************************************************!*\
  !*** ./src/app/modules/job/components/letter/letter.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LetterComponent: () => (/* binding */ LetterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_ai_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/ai.service */ 33674);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ 12041);










const _c0 = () => ({
  "min-height": "220px",
  "font-family": "Inter, sans-serif",
  "font-size": "0.875rem"
});
const _c1 = a0 => ({
  "quill-invalid": a0
});
function LetterComponent_small_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La description du poste est requise. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LetterComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-skeleton", 39)(2, "p-skeleton", 40)(3, "p-skeleton", 41)(4, "p-skeleton", 42)(5, "p-skeleton", 43)(6, "p-skeleton", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LetterComponent_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 47);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.generatedLetterHtml, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function LetterComponent_div_46_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "La lettre g\u00E9n\u00E9r\u00E9e appara\u00EEtra ici");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function LetterComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LetterComponent_div_46_div_1_Template, 1, 1, "div", 46)(2, LetterComponent_div_46_ng_template_2_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const emptyState_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.generatedLetterHtml)("ngIfElse", emptyState_r2);
  }
}
class LetterComponent {
  constructor(fb, aiService, messageService) {
    this.fb = fb;
    this.aiService = aiService;
    this.messageService = messageService;
    this.generatedLetterHtml = '';
    this.isLoading = false;
    this.quillModules = {
      toolbar: [['bold', 'italic', 'underline'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        header: [1, 2, 3, false]
      }], ['clean']]
    };
  }
  ngOnInit() {
    this.letterForm = this.fb.group({
      jobDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      cvId: [null]
    });
  }
  generateLetter() {
    this.letterForm.markAllAsTouched();
    if (this.letterForm.invalid) return;
    const {
      jobDescription,
      cvId
    } = this.letterForm.value;
    this.isLoading = true;
    this.aiService.generateCoverLetter(jobDescription, cvId).subscribe({
      next: res => {
        this.generatedLetterHtml = this.toHtml(res.data.letter);
        this.isLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'La génération a échoué. Veuillez réessayer.'
        });
        this.isLoading = false;
      }
    });
  }
  copyLetter() {
    if (!this.generatedLetterHtml) return;
    const text = this.generatedLetterHtml.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');
    navigator.clipboard.writeText(text).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Copié',
        detail: 'Lettre copiée dans le presse-papiers.'
      });
    }).catch(() => {});
  }
  toHtml(text) {
    return text.split(/\n\n+/).map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`).join('');
  }
  static {
    this.ɵfac = function LetterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LetterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_ai_service__WEBPACK_IMPORTED_MODULE_0__.AIService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LetterComponent,
      selectors: [["app-letter"]],
      decls: 53,
      vars: 12,
      consts: [["emptyState", ""], [1, "page-wrapper"], [1, "page-header"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "flex", "flex-col", "gap-5"], [1, "rounded-2xl", "p-5", "flex", "items-start", "gap-4", 2, "background", "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)", "border", "1px solid #c7d2fe"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "shrink-0", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)"], [1, "pi", "pi-sparkles", "text-white", "text-base"], [1, "font-semibold", "text-slate-800", "text-sm", "m-0"], [1, "text-xs", "text-slate-500", "mt-0.5", "m-0", "leading-relaxed"], [1, "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], [1, "bg-white", "rounded-2xl", "border", "border-slate-100", "overflow-hidden"], [1, "flex", "items-center", "gap-3", "px-5", "py-4", "border-b", "border-slate-100"], [1, "w-8", "h-8", "rounded-lg", "bg-indigo-100", "flex", "items-center", "justify-center", "text-indigo-600"], [1, "pi", "pi-file", "text-sm"], [1, "font-semibold", "text-slate-800", "text-sm"], [1, "p-5"], ["pInputText", "", "placeholder", "S\u00E9lectionner un CV (bient\u00F4t disponible)", "disabled", "", 1, "w-full"], [1, "text-xs", "text-slate-400", "mt-2", "m-0"], [1, "pi", "pi-info-circle", "mr-1"], [1, "w-8", "h-8", "rounded-lg", "bg-violet-100", "flex", "items-center", "justify-center", "text-violet-600"], [1, "pi", "pi-align-left", "text-sm"], [1, "p-5", "field"], ["formControlName", "jobDescription", "placeholder", "Collez ici la description compl\u00E8te du poste (titre, missions, comp\u00E9tences requises, entreprise...)", 1, "quill-field", 3, "modules", "styles", "ngClass"], ["class", "field-error", 4, "ngIf"], ["pButton", "", "type", "submit", "icon", "pi pi-sparkles", "label", "G\u00E9n\u00E9rer la lettre", 1, "btn-primary", "p-button-lg", "w-full", 2, "padding", ".875rem", "border-radius", "10px", "font-size", ".95rem", 3, "loading"], [1, "flex", "flex-col", "gap-4"], [1, "bg-white", "rounded-2xl", "border", "border-slate-100", "overflow-hidden", "flex", "flex-col", 2, "min-height", "520px"], [1, "flex", "items-center", "justify-between", "px-5", "py-4", "border-b", "border-slate-100"], [1, "flex", "items-center", "gap-2", "font-semibold", "text-slate-800", "text-sm"], [1, "pi", "pi-file-edit", "text-indigo-500"], ["pButton", "", "icon", "pi pi-copy", "label", "Copier", 1, "p-button-outlined", "p-button-sm", "p-button-secondary", 3, "click", "disabled"], ["class", "p-5 flex flex-col gap-3", 4, "ngIf"], ["class", "flex-1 overflow-auto", 4, "ngIf"], [1, "bg-amber-50", "border", "border-amber-100", "rounded-xl", "p-4", "flex", "gap-3"], [1, "pi", "pi-lightbulb", "text-amber-500", "text-sm", "mt-0.5", "shrink-0"], [1, "text-xs", "text-amber-700", "m-0", "leading-relaxed"], [1, "field-error"], [1, "p-5", "flex", "flex-col", "gap-3"], ["height", "1rem", "width", "60%"], ["height", "1rem", "width", "90%"], ["height", "1rem", "width", "80%"], ["height", "1rem", "width", "70%"], ["height", "1rem", "width", "85%"], ["height", "1rem", "width", "55%"], [1, "flex-1", "overflow-auto"], ["class", "letter-output ql-editor", 3, "innerHTML", 4, "ngIf", "ngIfElse"], [1, "letter-output", "ql-editor", 3, "innerHTML"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "py-16", "text-slate-300"], [1, "pi", "pi-file-edit", "text-5xl", "block", "mb-3"], [1, "text-sm", "m-0"]],
      template: function LetterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "G\u00E9n\u00E9rateur de lettre de motivation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "D\u00E9crivez le poste et laissez l'IA r\u00E9diger une lettre personnalis\u00E9e en quelques secondes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "R\u00E9daction assist\u00E9e par IA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Collez la description du poste ci-dessous. L'IA analysera les exigences et adaptera la lettre \u00E0 votre profil. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LetterComponent_Template_form_ngSubmit_16_listener() {
            return ctx.generateLetter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "CV de r\u00E9f\u00E9rence");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "La s\u00E9lection du CV sera disponible prochainement. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11)(29, "div", 12)(30, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Description du poste *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "quill-editor", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, LetterComponent_small_36_Template, 2, 0, "small", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 26)(39, "div", 27)(40, "div", 28)(41, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Lettre g\u00E9n\u00E9r\u00E9e ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LetterComponent_Template_button_click_44_listener() {
            return ctx.copyLetter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, LetterComponent_div_45_Template, 7, 0, "div", 32)(46, LetterComponent_div_46_Template, 4, 2, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 36)(50, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Conseil :");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Relisez la lettre g\u00E9n\u00E9r\u00E9e et personnalisez-la avec des anecdotes ou r\u00E9alisations sp\u00E9cifiques. Une lettre authentique a toujours plus d'impact. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.letterForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modules", ctx.quillModules)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ((tmp_3_0 = ctx.letterForm.get("jobDescription")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.letterForm.get("jobDescription")) == null ? null : tmp_3_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.letterForm.get("jobDescription")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.letterForm.get("jobDescription")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading || !ctx.generatedLetterHtml);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, ngx_quill__WEBPACK_IMPORTED_MODULE_8__.QuillEditorComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.letter-body[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGNBQUE7QUFFUjs7QUFEQTtFQUFlLGdDQUFBO0FBS2YiLCJmaWxlIjoibGV0dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuLmxldHRlci1ib2R5IHsgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IH1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9qb2IvY29tcG9uZW50cy9sZXR0ZXIvbGV0dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQURBO0VBQWUsZ0NBQUE7QUFLZjtBQUNBLGdZQUFnWSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbi5sZXR0ZXItYm9keSB7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOyB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 79212:
/*!***************************************************!*\
  !*** ./src/app/modules/job/job-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobRoutingModule: () => (/* binding */ JobRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _components_letter_letter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/letter/letter.component */ 2285);
/* harmony import */ var _components_job_tracking_job_tracking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/job-tracking/job-tracking.component */ 78391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  redirectTo: 'tracking',
  pathMatch: 'full'
}, {
  path: 'letter',
  component: _components_letter_letter_component__WEBPACK_IMPORTED_MODULE_0__.LetterComponent
}, {
  path: 'tracking',
  component: _components_job_tracking_job_tracking_component__WEBPACK_IMPORTED_MODULE_1__.JobTrackingComponent
}];
class JobRoutingModule {
  static {
    this.ɵfac = function JobRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JobRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: JobRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JobRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 99053:
/*!*******************************************!*\
  !*** ./src/app/modules/job/job.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobModule: () => (/* binding */ JobModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _job_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-routing.module */ 79212);
/* harmony import */ var _components_letter_letter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/letter/letter.component */ 2285);
/* harmony import */ var _components_job_tracking_job_tracking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/job-tracking/job-tracking.component */ 78391);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-quill */ 12041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





// PrimeNG














class JobModule {
  static {
    this.ɵfac = function JobModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JobModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: JobModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _job_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextareaModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, primeng_tag__WEBPACK_IMPORTED_MODULE_12__.TagModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.TooltipModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__.SkeletonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_16__.DialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__.DropdownModule, ngx_quill__WEBPACK_IMPORTED_MODULE_18__.QuillModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](JobModule, {
    declarations: [_components_letter_letter_component__WEBPACK_IMPORTED_MODULE_1__.LetterComponent, _components_job_tracking_job_tracking_component__WEBPACK_IMPORTED_MODULE_2__.JobTrackingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _job_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextareaModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, primeng_tag__WEBPACK_IMPORTED_MODULE_12__.TagModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.TooltipModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__.SkeletonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_16__.DialogModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__.DropdownModule, ngx_quill__WEBPACK_IMPORTED_MODULE_18__.QuillModule]
  });
})();

/***/ }),

/***/ 51486:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-card.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   CardModule: () => (/* binding */ CardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);







/**
 * Card is a flexible container component.
 * @group Components
 */
const _c0 = ["*", [["p-header"]], [["p-footer"]]];
const _c1 = ["*", "p-header", "p-footer"];
function Card_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.titleTemplate);
  }
}
function Card_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.subheader, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.subtitleTemplate);
  }
}
function Card_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Card_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
class Card {
  el;
  /**
   * Header of the card.
   * @group Props
   */
  header;
  /**
   * Subheader of the card.
   * @group Props
   */
  subheader;
  /**
   * Inline style of the element.
   * @group Props
   */
  set style(value) {
    if (!primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.equals(this._style(), value)) {
      this._style.set(value);
    }
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  headerFacet;
  footerFacet;
  templates;
  headerTemplate;
  titleTemplate;
  subtitleTemplate;
  contentTemplate;
  footerTemplate;
  _style = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  constructor(el) {
    this.el = el;
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'title':
          this.titleTemplate = item.template;
          break;
        case 'subtitle':
          this.subtitleTemplate = item.template;
          break;
        case 'content':
          this.contentTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  static ɵfac = function Card_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Card)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Card,
    selectors: [["p-card"]],
    contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Header, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      header: "header",
      subheader: "subheader",
      style: "style",
      styleClass: "styleClass"
    },
    ngContentSelectors: _c1,
    decls: 9,
    vars: 10,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [1, "p-card-subtitle"], [1, "p-card-footer"]],
    template: function Card_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Card_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Card_div_3_Template, 3, 2, "div", 3)(4, Card_div_4_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Card_div_8_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-card p-component")("ngStyle", ctx._style());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header || ctx.titleTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subheader || ctx.subtitleTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
    styles: ["@layer primeng{.p-card-header img{width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Card, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-card',
      template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate">
                    {{ header }}
                    <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">
                    {{ subheader }}
                    <ng-container *ngTemplateOutlet="subtitleTemplate"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-card-header img{width:100%}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    subheader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.Header]
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate]
    }]
  });
})();
class CardModule {
  static ɵfac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CardModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: CardModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [Card, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
      declarations: [Card]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 55222:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-panel.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Panel: () => (/* binding */ Panel),
/* harmony export */   PanelModule: () => (/* binding */ PanelModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/minus */ 77965);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/plus */ 41155);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);












/**
 * Panel is a container with the optional content toggle feature.
 * @group Components
 */
const _c0 = ["*", [["p-header"]], [["p-footer"]]];
const _c1 = ["*", "p-header", "p-footer"];
const _c2 = (a0, a1) => ({
  "p-panel p-component": true,
  "p-panel-toggleable": a0,
  "p-panel-expanded": a1
});
const _c3 = a0 => ({
  transitionParams: a0,
  height: "0",
  opacity: "0"
});
const _c4 = a0 => ({
  value: "hidden",
  params: a0
});
const _c5 = a0 => ({
  transitionParams: a0,
  height: "*",
  opacity: "1"
});
const _c6 = a0 => ({
  value: "visible",
  params: a0
});
const _c7 = (a0, a1, a2) => ({
  "p-panel-icons-start": a0,
  "p-panel-icons-end": a1,
  "p-panel-icons-center": a2
});
const _c8 = a0 => ({
  $implicit: a0
});
function Panel_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.header);
  }
}
function Panel_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_1_5_ng_template_0_Template(rf, ctx) {}
function Panel_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "MinusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template, 1, 1, "MinusIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.expandIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template, 1, 1, "PlusIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.collapseIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.collapsed);
  }
}
function Panel_div_1_button_6_2_ng_template_0_Template(rf, ctx) {}
function Panel_div_1_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Panel_div_1_button_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Panel_div_1_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onIconClick($event));
    })("keydown", function Panel_div_1_button_6_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_2_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_header")("aria-label", ctx_r1.buttonAriaLabel)("aria-controls", ctx_r1.id + "_content")("aria-expanded", !ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.headerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c8, ctx_r1.collapsed));
  }
}
function Panel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Panel_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onHeaderClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_span_1_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Panel_div_1_5_Template, 1, 0, null, 4)(6, Panel_div_1_button_6_Template, 3, 9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "-titlebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c7, ctx_r1.iconPos === "start", ctx_r1.iconPos === "end", ctx_r1.iconPos === "center"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.iconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.toggleable);
  }
}
function Panel_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Panel_div_6_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
class Panel {
  el;
  cd;
  /**
   * Defines if content of panel can be expanded and collapsed.
   * @group Props
   */
  toggleable;
  /**
   * Header text of the panel.
   * @group Props
   */
  header;
  /**
   * Defines the initial state of panel content, supports one or two-way binding as well.
   * @group Props
   */
  collapsed;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the icons.
   * @group Props
   */
  iconPos = 'end';
  /**
   * Expand icon of the toggle button.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  expandIcon;
  /**
   * Collapse icon of the toggle button.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  collapseIcon;
  /**
   * Specifies if header of panel cannot be displayed.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  showHeader = true;
  /**
   * Specifies the toggler element to toggle the panel content.
   * @group Props
   */
  toggler = 'icon';
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
  /**
   * Emitted when the collapsed changes.
   * @param {boolean} value - New Value.
   * @group Emits
   */
  collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  footerFacet;
  templates;
  iconTemplate;
  animating;
  headerTemplate;
  contentTemplate;
  footerTemplate;
  headerIconTemplate;
  id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
  get buttonAriaLabel() {
    return this.header;
  }
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'content':
          this.contentTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'icons':
          this.iconTemplate = item.template;
          break;
        case 'headericons':
          this.headerIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  onHeaderClick(event) {
    if (this.toggler === 'header') {
      this.toggle(event);
    }
  }
  onIconClick(event) {
    if (this.toggler === 'icon') {
      this.toggle(event);
    }
  }
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.toggleable) {
      if (this.collapsed) this.expand();else this.collapse();
    }
    this.cd.markForCheck();
    event.preventDefault();
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onKeyDown(event) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.toggle(event);
      event.preventDefault();
    }
  }
  onToggleDone(event) {
    this.animating = false;
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
  }
  static ɵfac = function Panel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Panel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Panel,
    selectors: [["p-panel"]],
    contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      toggleable: [2, "toggleable", "toggleable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      header: "header",
      collapsed: [2, "collapsed", "collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      iconPos: "iconPos",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      showHeader: [2, "showHeader", "showHeader", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      toggler: "toggler",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    ngContentSelectors: _c1,
    decls: 7,
    vars: 25,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-toggleable-content", 3, "id"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons", 3, "ngClass"], ["pRipple", "", "type", "button", "role", "button", "class", "p-panel-header-icon p-panel-toggler p-link", 3, "click", "keydown", 4, "ngIf"], [1, "p-panel-title"], ["pRipple", "", "type", "button", "role", "button", 1, "p-panel-header-icon", "p-panel-toggler", "p-link", 3, "click", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "ngClass"], [3, "styleClass"], [1, "p-panel-footer"]],
    template: function Panel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_Template, 7, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) {
          return ctx.onToggleDone($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Panel_ng_container_5_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Panel_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c2, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("data-pc-name", "panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, ctx.animating ? ctx.transitionOptions : "0ms")) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c5, ctx.animating ? ctx.transitionOptions : "0ms")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__.MinusIcon],
    styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('panelContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '{{height}}'
      }), {
        params: {
          height: '0'
        }
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}'))])]
    },
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Panel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-panel',
      template: `
        <div [attr.id]="id" [attr.data-pc-name]="'panel'" [ngClass]="{ 'p-panel p-component': true, 'p-panel-toggleable': toggleable, 'p-panel-expanded': !collapsed && toggleable }" [ngStyle]="style" [class]="styleClass">
            <div class="p-panel-header" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
                <span class="p-panel-title" *ngIf="header" [attr.id]="id + '_header'">{{ header }}</span>
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <div class="p-panel-icons" [ngClass]="{ 'p-panel-icons-start': iconPos === 'start', 'p-panel-icons-end': iconPos === 'end', 'p-panel-icons-center': iconPos === 'center' }">
                    <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>
                    <button
                        *ngIf="toggleable"
                        [attr.id]="id + '_header'"
                        pRipple
                        type="button"
                        role="button"
                        class="p-panel-header-icon p-panel-toggler p-link"
                        [attr.aria-label]="buttonAriaLabel"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        (click)="onIconClick($event)"
                        (keydown)="onKeyDown($event)"
                    >
                        <ng-container *ngIf="!headerIconTemplate">
                            <ng-container *ngIf="!collapsed">
                                <span *ngIf="expandIcon" [class]="expandIcon" [ngClass]="iconClass"></span>
                                <MinusIcon *ngIf="!expandIcon" [styleClass]="iconClass" />
                            </ng-container>

                            <ng-container *ngIf="collapsed">
                                <span *ngIf="collapseIcon" [class]="collapseIcon" [ngClass]="iconClass"></span>
                                <PlusIcon *ngIf="!collapseIcon" [styleClass]="iconClass" />
                            </ng-container>
                        </ng-container>

                        <ng-template *ngTemplateOutlet="headerIconTemplate; context: { $implicit: collapsed }"></ng-template>
                    </button>
                </div>
            </div>
            <div
                class="p-toggleable-content"
                [id]="id + '_content'"
                role="region"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                [attr.tabindex]="collapsed ? '-1' : undefined"
                [@panelContent]="
                    collapsed
                        ? { value: 'hidden', params: { transitionParams: animating ? transitionOptions : '0ms', height: '0', opacity: '0' } }
                        : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*', opacity: '1' } }
                "
                (@panelContent.done)="onToggleDone($event)"
            >
                <div class="p-panel-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>

                <div class="p-panel-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('panelContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '{{height}}'
      }), {
        params: {
          height: '0'
        }
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}'))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    toggleable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    iconPos: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expandIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapseIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    toggler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapsedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onAfterToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate]
    }]
  });
})();
class PanelModule {
  static ɵfac = function PanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PanelModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: PanelModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__.MinusIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__.MinusIcon],
      exports: [Panel, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
      declarations: [Panel]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_modules_job_job_module_ts.js.map