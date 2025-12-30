"use strict";
(self["webpackChunkmicro_ui"] = self["webpackChunkmicro_ui"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/theme.service */ 2260);



class AppComponent {
  constructor(theme) {
    this.theme = theme;
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _core_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/jwt.interceptor */ 7500);






const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptors)([_core_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.jwtInterceptor]))]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 5199);
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin/admin.component */ 2583);
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth.guard */ 5227);
/* harmony import */ var _core_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/admin.guard */ 8576);
/* harmony import */ var _core_doctorant_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/doctorant.guard */ 359);
/* harmony import */ var _core_director_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/director.guard */ 33);
/* harmony import */ var _pages_auth_auth_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth/auth-page.component */ 8707);
/* harmony import */ var _core_main_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/main-layout.component */ 3759);
/* harmony import */ var _pages_soutenances_soutenances_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/soutenances/soutenances.component */ 9659);
/* harmony import */ var _pages_soutenances_review_soutenances_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/soutenances/review-soutenances.component */ 7076);
/* harmony import */ var _pages_soutenances_director_soutenances_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/soutenances/director-soutenances.component */ 4900);
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/notifications/notifications.component */ 5603);












const routes = [{
  path: '',
  component: _core_main_layout_component__WEBPACK_IMPORTED_MODULE_7__.MainLayoutComponent,
  canActivateChild: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  children: [{
    path: 'dashboard',
    component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
  }, {
    path: 'doctorant',
    component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
  }, {
    path: 'encadrant',
    component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
  }, {
    path: 'soutenances',
    component: _pages_soutenances_soutenances_component__WEBPACK_IMPORTED_MODULE_8__.SoutenancesComponent,
    canActivate: [_core_doctorant_guard__WEBPACK_IMPORTED_MODULE_4__.doctorantGuard]
  }, {
    path: 'soutenances/directeur',
    component: _pages_soutenances_director_soutenances_component__WEBPACK_IMPORTED_MODULE_10__.DirectorSoutenancesComponent,
    canActivate: [_core_director_guard__WEBPACK_IMPORTED_MODULE_5__.directorGuard]
  }, {
    path: 'soutenances/revue',
    component: _pages_soutenances_review_soutenances_component__WEBPACK_IMPORTED_MODULE_9__.ReviewSoutenancesComponent,
    canActivate: [_core_admin_guard__WEBPACK_IMPORTED_MODULE_3__.adminGuard]
  }, {
    path: 'notifications',
    component: _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__.NotificationsComponent,
    canActivate: [_core_doctorant_guard__WEBPACK_IMPORTED_MODULE_4__.doctorantGuard]
  }, {
    path: 'admin',
    component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent,
    canActivate: [_core_admin_guard__WEBPACK_IMPORTED_MODULE_3__.adminGuard]
  }, {
    path: 'superuser',
    component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent,
    canActivate: [_core_admin_guard__WEBPACK_IMPORTED_MODULE_3__.adminGuard]
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }]
}, {
  path: 'login',
  component: _pages_auth_auth_page_component__WEBPACK_IMPORTED_MODULE_6__.AuthPageComponent
}, {
  path: 'register',
  component: _pages_auth_auth_page_component__WEBPACK_IMPORTED_MODULE_6__.AuthPageComponent
}, {
  path: '**',
  redirectTo: 'dashboard'
}];

/***/ }),

/***/ 8576:
/*!*************************************!*\
  !*** ./src/app/core/admin.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminGuard: () => (/* binding */ adminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const adminGuard = () => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('access');
  if (token && (role === 'ADMIN' || role === 'SUPERUSER')) {
    return true;
  }
  router.navigateByUrl('/dashboard');
  return false;
};

/***/ }),

/***/ 7981:
/*!*************************************!*\
  !*** ./src/app/core/api.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);




class ApiService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.base = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  login(body) {
    return this.http.post(`${this.base}/auth/login`, body);
  }
  register(body) {
    return this.http.post(`${this.base}/accounts`, body);
  }
  me() {
    return this.http.get(`${this.base}/accounts/me`);
  }
  refresh(refreshToken) {
    return this.http.post(`${this.base}/auth/refresh`, {
      refreshToken
    });
  }
  logout(refreshToken) {
    return this.http.post(`${this.base}/auth/logout`, {
      refreshToken
    });
  }
  createDoctorant(body) {
    return this.http.post(`${this.base}/profiles/doctorant`, body);
  }
  createEncadrant(body) {
    return this.http.post(`${this.base}/profiles/encadrant`, body);
  }
  getDoctorantProfile(accountId) {
    return this.http.get(`${this.base}/profiles/doctorant/${accountId}`);
  }
  getEncadrantProfile(accountId) {
    return this.http.get(`${this.base}/profiles/encadrant/${accountId}`);
  }
  updateDoctorant(accountId, body) {
    return this.http.put(`${this.base}/profiles/doctorant/${accountId}`, body);
  }
  updateEncadrant(accountId, body) {
    return this.http.put(`${this.base}/profiles/encadrant/${accountId}`, body);
  }
  // --- Admin (SUPERUSER) ---
  listPendingAccounts() {
    return this.http.get(`${this.base}/admin/accounts/pending`);
  }
  listAllAccounts() {
    return this.http.get(`${this.base}/admin/accounts`);
  }
  listAdmins() {
    return this.http.get(`${this.base}/admin/accounts/admins`);
  }
  listDepartments() {
    return this.http.get(`${this.base}/departments`);
  }
  listLaboratories() {
    return this.http.get(`${this.base}/laboratories`);
  }
  createDepartment(body) {
    return this.http.post(`${this.base}/admin/departments`, body);
  }
  updateDepartment(id, body) {
    return this.http.put(`${this.base}/admin/departments/${id}`, body);
  }
  deleteDepartment(id) {
    return this.http.delete(`${this.base}/admin/departments/${id}`);
  }
  createLaboratory(body) {
    return this.http.post(`${this.base}/admin/laboratories`, body);
  }
  updateLaboratory(id, body) {
    return this.http.put(`${this.base}/admin/laboratories/${id}`, body);
  }
  deleteLaboratory(id) {
    return this.http.delete(`${this.base}/admin/laboratories/${id}`);
  }
  createAdmin(body) {
    return this.http.post(`${this.base}/admin/accounts/admins`, body);
  }
  activateAdmin(id) {
    return this.http.post(`${this.base}/admin/accounts/${id}/activate`, {});
  }
  suspendAdmin(id) {
    return this.http.post(`${this.base}/admin/accounts/${id}/suspend`, {});
  }
  approveAccount(id) {
    return this.http.post(`${this.base}/admin/accounts/${id}/approve`, {});
  }
  rejectAccount(id) {
    return this.http.post(`${this.base}/admin/accounts/${id}/reject`, {});
  }
  // --- Soutenances ---
  createSoutenance(body) {
    return this.http.post(`${this.base}/api/soutenances`, body);
  }
  listSoutenancesForDoctorant(doctorantAccountId) {
    return this.http.get(`${this.base}/api/soutenances/by-doctorant/${doctorantAccountId}`);
  }
  getSoutenance(id) {
    return this.http.get(`${this.base}/api/soutenances/${id}`);
  }
  updateSoutenanceStatus(id, body) {
    return this.http.patch(`${this.base}/api/soutenances/${id}/status`, body);
  }
  authorizeSoutenance(id, authorizationDocumentUrl) {
    return this.http.post(`${this.base}/api/soutenances/${id}/authorize`, {
      authorizationDocumentUrl
    });
  }
  listSoutenancesByStatus(status) {
    return this.http.get(`${this.base}/api/soutenances/status/${status}`);
  }
  scheduleSoutenance(id, body) {
    return this.http.patch(`${this.base}/api/soutenances/${id}/schedule`, body);
  }
  replaceJury(id, body) {
    return this.http.put(`${this.base}/api/soutenances/${id}/jury`, body);
  }
  validateJury(id) {
    return this.http.post(`${this.base}/api/soutenances/${id}/jury/validate`, {});
  }
  // Director approval
  approveByDirector(id, body) {
    return this.http.post(`${this.base}/api/soutenances/${id}/director-approval`, body);
  }
  // Rapporteur report
  submitRapporteurReport(id, body) {
    return this.http.post(`${this.base}/api/soutenances/${id}/rapporteur-report`, body);
  }
  // Set result
  setResult(id, body) {
    return this.http.post(`${this.base}/api/soutenances/${id}/result`, body);
  }
  // Get soutenances approaching 6-year limit
  getApproachingSixYearLimit() {
    return this.http.get(`${this.base}/api/soutenances/alerts/six-year-limit`);
  }
  // Manually trigger duration alerts
  sendDurationAlerts() {
    return this.http.post(`${this.base}/api/soutenances/alerts/send-duration-alerts`, {});
  }
  // --- PDF Document Generation ---
  generateAttestation(soutenanceId) {
    return this.http.get(`${this.base}/api/soutenances/${soutenanceId}/documents/attestation`, {
      responseType: 'blob'
    });
  }
  generateAutorisation(soutenanceId) {
    return this.http.get(`${this.base}/api/soutenances/${soutenanceId}/documents/autorisation`, {
      responseType: 'blob'
    });
  }
  generateProcesVerbal(soutenanceId) {
    return this.http.get(`${this.base}/api/soutenances/${soutenanceId}/documents/proces-verbal`, {
      responseType: 'blob'
    });
  }
  generateProcesVerbalComplet(soutenanceId) {
    return this.http.get(`${this.base}/api/soutenances/${soutenanceId}/documents/proces-verbal-complet`, {
      responseType: 'blob'
    });
  }
  // --- Notifications ---
  getNotificationsForAccount(accountId) {
    return this.http.get(`${this.base}/api/notifications/by-account/${accountId}`);
  }
  getMyNotifications() {
    return this.http.get(`${this.base}/api/notifications/me`);
  }
  markNotificationAsRead(notificationId) {
    return this.http.patch(`${this.base}/api/notifications/${notificationId}/read`, {});
  }
  markAllNotificationsAsRead() {
    return this.http.patch(`${this.base}/api/notifications/read-all`, {});
  }
  static {
    this.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5227:
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const authGuard = () => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const token = localStorage.getItem('access');
  if (!token) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};

/***/ }),

/***/ 33:
/*!****************************************!*\
  !*** ./src/app/core/director.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   directorGuard: () => (/* binding */ directorGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const directorGuard = () => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('access');
  if (token && (role === 'DIRECTEUR' || role === 'ADMIN' || role === 'SUPERUSER')) {
    return true;
  }
  router.navigateByUrl('/dashboard');
  return false;
};

/***/ }),

/***/ 359:
/*!*****************************************!*\
  !*** ./src/app/core/doctorant.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doctorantGuard: () => (/* binding */ doctorantGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const doctorantGuard = () => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('access');
  if (token && role === 'DOCTORANT') {
    return true;
  }
  router.navigateByUrl('/dashboard');
  return false;
};

/***/ }),

/***/ 7907:
/*!**************************************!*\
  !*** ./src/app/core/i18n.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nService: () => (/* binding */ I18nService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _assets_i18n_fr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/i18n/fr.js */ 3477);
/* harmony import */ var _assets_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/i18n/en.js */ 250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class I18nService {
  constructor() {
    this.bundles = {
      fr: _assets_i18n_fr_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      en: _assets_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    this.langSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.restoreLang());
    this.langChanges = this.langSubject.asObservable();
  }
  get lang() {
    return this.langSubject.value;
  }
  setLang(lang) {
    if (this.langSubject.value === lang) return;
    this.langSubject.next(lang);
    localStorage.setItem('lang', lang);
  }
  translate(key) {
    const bundle = this.bundles[this.lang] || {};
    const value = key.split('.').reduce((acc, part) => acc ? acc[part] : undefined, bundle);
    return (typeof value === 'string' ? value : null) || key;
  }
  restoreLang() {
    const stored = localStorage.getItem('lang');
    return stored === 'en' ? 'en' : 'fr';
  }
  static {
    this.ɵfac = function I18nService_Factory(t) {
      return new (t || I18nService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: I18nService,
      factory: I18nService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7500:
/*!*****************************************!*\
  !*** ./src/app/core/jwt.interceptor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jwtInterceptor: () => (/* binding */ jwtInterceptor)
/* harmony export */ });
const jwtInterceptor = (req, next) => {
  const token = localStorage.getItem('access');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};

/***/ }),

/***/ 3759:
/*!***********************************************!*\
  !*** ./src/app/core/main-layout.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutComponent: () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate.pipe */ 5058);
/* harmony import */ var _top_controls_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-controls.component */ 479);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 7981);









const _c0 = () => ({
  section: "overview"
});
const _c1 = () => ({
  section: "accounts"
});
const _c2 = () => ({
  section: "pending"
});
const _c3 = () => ({
  section: "admins"
});
const _c4 = () => ({
  section: "structures"
});
const _c5 = () => ({
  section: "create"
});
function MainLayoutComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83C\uDF93");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Soutenances");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MainLayoutComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Soutenances");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MainLayoutComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Revue sout.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MainLayoutComponent_a_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.unreadCount > 9 ? "9+" : ctx_r0.unreadCount);
  }
}
function MainLayoutComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDD14");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MainLayoutComponent_a_15_span_5_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
  }
}
function MainLayoutComponent_a_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\uD83D\uDCD8");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, "nav.doctorant"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "nav.doctorant"));
  }
}
function MainLayoutComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\uD83E\uDDD1\u200D\uD83C\uDFEB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, "nav.encadrant"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "nav.encadrant"));
  }
}
function MainLayoutComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 27)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Vue globale");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 28)(7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\uD83D\uDC65");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Tous les comptes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 29)(12, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 30)(17, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\uD83D\uDEE1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Admins");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 31)(22, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\uD83C\uDFE2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "D\u00E9partements & Labos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 32)(27, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Cr\u00E9er un admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c5));
  }
}
class MainLayoutComponent {
  constructor(router, api) {
    this.router = router;
    this.api = api;
    this.unreadCount = 0;
  }
  ngOnInit() {
    if (this.role === 'DOCTORANT') {
      this.loadUnreadCount();
      // Refresh every 60 seconds
      this.refreshSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(60000).subscribe(() => this.loadUnreadCount());
    }
  }
  ngOnDestroy() {
    this.refreshSub?.unsubscribe();
  }
  loadUnreadCount() {
    this.api.me().subscribe({
      next: me => {
        this.accountId = me.id;
        this.api.getNotificationsForAccount(me.id).subscribe({
          next: list => {
            this.unreadCount = list.filter(n => n.status !== 'READ').length;
          }
        });
      }
    });
  }
  get role() {
    return localStorage.getItem('role');
  }
  isSuperuser() {
    return this.role === 'SUPERUSER';
  }
  isLogged() {
    return !!localStorage.getItem('access');
  }
  roleLabel() {
    return this.role || 'Invite';
  }
  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/login');
  }
  static {
    this.ɵfac = function MainLayoutComponent_Factory(t) {
      return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MainLayoutComponent,
      selectors: [["app-main-layout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 28,
      vars: 13,
      consts: [[1, "shell", "top-shell"], [1, "top-nav"], [1, "brand"], ["src", "assets/logo.svg", "alt", "Logo", 1, "brand-logo"], [1, "nav-items"], ["routerLink", "/dashboard", "aria-label", "Dashboard", 1, "nav-chip", "icon-only"], [1, "nav-icon"], [1, "label"], ["routerLink", "/soutenances", "class", "nav-chip icon-only", "aria-label", "Soutenances", 4, "ngIf"], ["routerLink", "/soutenances/directeur", "class", "nav-chip icon-only", "aria-label", "Gestion soutenances", 4, "ngIf"], ["routerLink", "/soutenances/revue", "class", "nav-chip icon-only", "aria-label", "Revue soutenances", 4, "ngIf"], ["routerLink", "/notifications", "class", "nav-chip icon-only notification-link", "aria-label", "Notifications", 4, "ngIf"], ["routerLink", "/doctorant", "class", "nav-chip icon-only", 3, "aria-label", 4, "ngIf"], ["routerLink", "/encadrant", "class", "nav-chip icon-only", 3, "aria-label", 4, "ngIf"], [4, "ngIf"], [1, "logout", 3, "click"], [1, "content"], [1, "topbar"], [1, "title"], ["routerLink", "/soutenances", "aria-label", "Soutenances", 1, "nav-chip", "icon-only"], ["routerLink", "/soutenances/directeur", "aria-label", "Gestion soutenances", 1, "nav-chip", "icon-only"], ["routerLink", "/soutenances/revue", "aria-label", "Revue soutenances", 1, "nav-chip", "icon-only"], ["routerLink", "/notifications", "aria-label", "Notifications", 1, "nav-chip", "icon-only", "notification-link"], ["class", "notif-badge", 4, "ngIf"], [1, "notif-badge"], ["routerLink", "/doctorant", 1, "nav-chip", "icon-only", 3, "aria-label"], ["routerLink", "/encadrant", 1, "nav-chip", "icon-only", 3, "aria-label"], ["routerLink", "/superuser", "aria-label", "Vue globale", 1, "nav-chip", "icon-only", 3, "queryParams"], ["routerLink", "/superuser", "aria-label", "Tous les comptes", 1, "nav-chip", "icon-only", 3, "queryParams"], ["routerLink", "/superuser", "aria-label", "En attente", 1, "nav-chip", "icon-only", 3, "queryParams"], ["routerLink", "/superuser", "aria-label", "Admins", 1, "nav-chip", "icon-only", 3, "queryParams"], ["routerLink", "/superuser", "aria-label", "D\u00E9partements & Labos", 1, "nav-chip", "icon-only", 3, "queryParams"], ["routerLink", "/superuser", "aria-label", "Cr\u00E9er un admin", 1, "nav-chip", "icon-only", 3, "queryParams"]],
      template: function MainLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-top-controls");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "nav", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "a", 5)(7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\uD83C\uDFE0");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, MainLayoutComponent_a_12_Template, 5, 0, "a", 8)(13, MainLayoutComponent_a_13_Template, 5, 0, "a", 9)(14, MainLayoutComponent_a_14_Template, 5, 0, "a", 10)(15, MainLayoutComponent_a_15_Template, 6, 1, "a", 11)(16, MainLayoutComponent_a_16_Template, 7, 6, "a", 12)(17, MainLayoutComponent_a_17_Template, 7, 6, "a", 13)(18, MainLayoutComponent_ng_container_18_Template, 31, 12, "ng-container", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainLayoutComponent_Template_button_click_19_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u238B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "main", 16)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 9, "nav.dashboard"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.role === "DOCTORANT");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.role === "DIRECTEUR");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.role === "ADMIN" || ctx.role === "SUPERUSER");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.role === "DOCTORANT");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.role === "DOCTORANT");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.role === "DIRECTEUR");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSuperuser());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 11, "layout.portalTitle"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _translate_pipe__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe, _top_controls_component__WEBPACK_IMPORTED_MODULE_1__.TopControlsComponent],
      styles: [".notification-link[_ngcontent-%COMP%] {\n      position: relative;\n    }\n    .notif-badge[_ngcontent-%COMP%] {\n      position: absolute;\n      top: -4px;\n      right: -4px;\n      background: #e0a546;\n      color: #2c1e07;\n      font-size: 10px;\n      font-weight: bold;\n      padding: 2px 5px;\n      border-radius: 10px;\n      min-width: 16px;\n      text-align: center;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9tYWluLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0Usa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsY0FBYztNQUNkLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm5vdGlmaWNhdGlvbi1saW5rIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLm5vdGlmLWJhZGdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTRweDtcbiAgICAgIHJpZ2h0OiAtNHB4O1xuICAgICAgYmFja2dyb3VuZDogI2UwYTU0NjtcbiAgICAgIGNvbG9yOiAjMmMxZTA3O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1pbi13aWR0aDogMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2609:
/*!**************************************!*\
  !*** ./src/app/core/role-routing.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routeForRole: () => (/* binding */ routeForRole)
/* harmony export */ });
function routeForRole(role) {
  switch (role) {
    case 'SUPERUSER':
      return '/superuser';
    case 'ADMIN':
      return '/admin';
    case 'DIRECTEUR':
      return '/encadrant';
    case 'DOCTORANT':
      return '/doctorant';
    default:
      return '/dashboard';
  }
}

/***/ }),

/***/ 2260:
/*!***************************************!*\
  !*** ./src/app/core/theme.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ThemeService {
  constructor() {
    this.themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.restoreTheme());
    this.themeChanges = this.themeSubject.asObservable();
    this.applyTheme(this.themeSubject.value);
  }
  get theme() {
    return this.themeSubject.value;
  }
  toggleTheme() {
    const next = this.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }
  setTheme(theme) {
    if (this.themeSubject.value === theme) return;
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }
  restoreTheme() {
    const stored = localStorage.getItem('theme');
    return stored === 'light' ? 'light' : 'dark';
  }
  applyTheme(theme) {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
  }
  static {
    this.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 479:
/*!************************************************!*\
  !*** ./src/app/core/top-controls.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopControlsComponent: () => (/* binding */ TopControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.service */ 7907);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.service */ 2260);




class TopControlsComponent {
  constructor(i18n, theme) {
    this.i18n = i18n;
    this.theme = theme;
  }
  get langIcon() {
    return this.i18n.lang === 'fr' ? '🇫🇷' : '🇬🇧';
  }
  get themeIcon() {
    return this.theme.theme === 'dark' ? '🌙' : '☀️';
  }
  get langTitle() {
    return this.i18n.translate('controls.toggleLang');
  }
  get themeTitle() {
    const key = this.theme.theme === 'dark' ? 'controls.themeDark' : 'controls.themeLight';
    return `${this.i18n.translate('controls.toggleTheme')}: ${this.i18n.translate(key)}`;
  }
  toggleLang() {
    const next = this.i18n.lang === 'fr' ? 'en' : 'fr';
    this.i18n.setLang(next);
  }
  toggleTheme() {
    this.theme.toggleTheme();
  }
  static {
    this.ɵfac = function TopControlsComponent_Factory(t) {
      return new (t || TopControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_i18n_service__WEBPACK_IMPORTED_MODULE_0__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TopControlsComponent,
      selectors: [["app-top-controls"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "top-controls"], ["type", "button", 3, "click", "title"]],
      template: function TopControlsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopControlsComponent_Template_button_click_1_listener() {
            return ctx.toggleLang();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopControlsComponent_Template_button_click_3_listener() {
            return ctx.toggleTheme();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.langTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.langTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.langIcon, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.themeTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.themeTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.themeIcon, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5058:
/*!****************************************!*\
  !*** ./src/app/core/translate.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslatePipe: () => (/* binding */ TranslatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.service */ 7907);


class TranslatePipe {
  constructor(i18n, cdr) {
    this.i18n = i18n;
    this.cdr = cdr;
    this.sub = this.i18n.langChanges.subscribe(() => this.cdr.markForCheck());
  }
  transform(key) {
    return this.i18n.translate(key);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  static {
    this.ɵfac = function TranslatePipe_Factory(t) {
      return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_i18n_service__WEBPACK_IMPORTED_MODULE_0__.I18nService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "t",
      type: TranslatePipe,
      pure: false,
      standalone: true
    });
  }
}

/***/ }),

/***/ 2583:
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/translate.pipe */ 5058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/api.service */ 7981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n.service */ 7907);









function AdminComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 6)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7)(5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8)(18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10)(24, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_27_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.reloadAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, "admin.sections.overview"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 10, "admin.overview.total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.allAccounts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 12, "admin.overview.pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.pending.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 14, "admin.overview.admins"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.admins.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 16, "admin.overview.refresh"));
  }
}
function AdminComponent_section_28_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.createMessage);
  }
}
function AdminComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 6)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminComponent_section_28_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.createAdmin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div")(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div")(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17)(26, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_28_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.createAdmin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AdminComponent_section_28_span_29_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 9, "admin.create.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.createForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 11, "admin.create.username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 13, "admin.create.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 15, "admin.create.password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 17, "admin.create.phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.createForm.invalid || ctx_r1.creatingAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 19, "admin.create.submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.createMessage);
  }
}
function AdminComponent_section_29_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const acc_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](acc_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", acc_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](acc_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](acc_r5.primaryRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](acc_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", acc_r5.emailVerified ? "#d3b869" : "#f97316");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](acc_r5.emailVerified ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 8, "admin.accounts.yes") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 10, "admin.accounts.no"));
  }
}
function AdminComponent_section_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 6)(1, "div", 1)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_29_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.loadAllAccounts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19)(9, "div", 20)(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AdminComponent_section_29_div_25_Template, 15, 12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, "admin.accounts.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, "admin.accounts.refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 12, "admin.accounts.username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 14, "admin.accounts.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 16, "admin.accounts.role"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 18, "admin.accounts.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 20, "admin.accounts.emailVerified"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.allAccounts);
  }
}
function AdminComponent_section_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "admin.pending.none"));
  }
}
function AdminComponent_section_30_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "div", 1)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 27)(9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_30_div_9_Template_button_click_9_listener() {
      const acc_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.approve(acc_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_30_div_9_Template_button_click_12_listener() {
      const acc_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.reject(acc_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const acc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](acc_r8.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" (", acc_r8.email, ") - role: ", acc_r8.primaryRole, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", acc_r8.emailVerified ? "#1a1a1a" : "#211");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](acc_r8.emailVerified ? "Email verifie" : "Email non verifie");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !acc_r8.emailVerified);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 9, "admin.pending.approve"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 11, "admin.pending.reject"));
  }
}
function AdminComponent_section_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 6)(1, "div", 1)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_30_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.loadPending());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminComponent_section_30_div_8_Template, 3, 3, "div", 24)(9, AdminComponent_section_30_div_9_Template, 15, 13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, "admin.pending.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, "admin.pending.refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.pending.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.pending);
  }
}
function AdminComponent_section_31_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "admin.admins.none"));
  }
}
function AdminComponent_section_31_div_9_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_31_div_9_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const admin_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activate(admin_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "admin.admins.activate"));
  }
}
function AdminComponent_section_31_div_9_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_31_div_9_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const admin_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.suspend(admin_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "admin.admins.suspend"));
  }
}
function AdminComponent_section_31_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "div", 1)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AdminComponent_section_31_div_9_button_9_Template, 3, 3, "button", 29)(10, AdminComponent_section_31_div_9_button_10_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const admin_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](admin_r11.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", admin_r11.email, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](admin_r11.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", admin_r11.status !== "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", admin_r11.status === "ACTIVE");
  }
}
function AdminComponent_section_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 6)(1, "div", 1)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_31_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.loadAdmins());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminComponent_section_31_div_8_Template, 3, 3, "div", 24)(9, AdminComponent_section_31_div_9_Template, 11, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, "admin.admins.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, "admin.admins.refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.admins.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.admins);
  }
}
function AdminComponent_section_32_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_32_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelDepartmentEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "admin.structures.cancel"));
  }
}
function AdminComponent_section_32_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 41)(6, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_32_div_28_Template_button_click_6_listener() {
      const dep_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.editDepartment(dep_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_32_div_28_Template_button_click_9_listener() {
      const dep_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.deleteDepartment(dep_r16.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const dep_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dep_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dep_r16.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, "admin.structures.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 6, "admin.structures.delete"));
  }
}
function AdminComponent_section_32_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_32_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelLaboratoryEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "admin.structures.cancel"));
  }
}
function AdminComponent_section_32_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 41)(6, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_32_div_53_Template_button_click_6_listener() {
      const lab_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.editLaboratory(lab_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_32_div_53_Template_button_click_9_listener() {
      const lab_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.deleteLaboratory(lab_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lab_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lab_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lab_r19.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, "admin.structures.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 6, "admin.structures.delete"));
  }
}
function AdminComponent_section_32_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.structureMessage);
  }
}
function AdminComponent_section_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 6)(1, "div", 1)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_section_32_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.loadStructures());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminComponent_section_32_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.createDepartment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 34)(14, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AdminComponent_section_32_button_18_Template, 3, 3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 37)(20, "div", 20)(21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AdminComponent_section_32_div_28_Template, 12, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 38)(30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminComponent_section_32_Template_form_ngSubmit_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.createLaboratory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 34)(39, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, AdminComponent_section_32_button_43_Template, 3, 3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 37)(45, "div", 20)(46, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, AdminComponent_section_32_div_53_Template, 12, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AdminComponent_section_32_div_54_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 22, "admin.structures.departments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 24, "admin.accounts.refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.departmentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 26, "admin.structures.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 28, "admin.structures.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.departmentForm.invalid || ctx_r1.creatingDepartment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.editingDepartmentId ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 30, "admin.structures.update") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 32, "admin.structures.add"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.editingDepartmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 34, "admin.structures.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 36, "admin.structures.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.departments);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 38, "admin.structures.laboratories"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.laboratoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 40, "admin.structures.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 42, "admin.structures.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.laboratoryForm.invalid || ctx_r1.creatingLaboratory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.editingLaboratoryId ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 44, "admin.structures.update") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 46, "admin.structures.add"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.editingLaboratoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 48, "admin.structures.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 50, "admin.structures.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.laboratories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.structureMessage);
  }
}
class AdminComponent {
  constructor(api, fb, route, router, i18n) {
    this.api = api;
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.i18n = i18n;
    this.activeSection = 'overview';
    this.pending = [];
    this.admins = [];
    this.allAccounts = [];
    this.departments = [];
    this.laboratories = [];
    this.editingDepartmentId = null;
    this.editingLaboratoryId = null;
    this.pendingMessage = '';
    this.adminMessage = '';
    this.createMessage = '';
    this.structureMessage = '';
    this.creatingAdmin = false;
    this.creatingDepartment = false;
    this.creatingLaboratory = false;
    this.createForm = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
      phone: ['']
    });
    this.departmentForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      description: ['']
    });
    this.laboratoryForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      description: ['']
    });
    this.sections = ['overview', 'accounts', 'pending', 'admins', 'structures', 'create'];
  }
  ngOnInit() {
    if (!this.isSuperuser()) {
      return;
    }
    this.route.queryParamMap.subscribe(params => {
      const desired = params.get('section');
      if (desired && this.sections.includes(desired)) {
        this.activeSection = desired;
      }
    });
    this.reloadAll();
  }
  isSuperuser() {
    return localStorage.getItem('role') === 'SUPERUSER';
  }
  setSection(sec) {
    this.activeSection = sec;
    this.syncQuery(sec);
  }
  reloadAll() {
    this.loadPending();
    this.loadAdmins();
    this.loadAllAccounts();
    this.loadStructures();
  }
  loadPending() {
    this.pendingMessage = '';
    this.api.listPendingAccounts().subscribe({
      next: res => {
        this.pending = res;
      },
      error: err => {
        this.pendingMessage = err.error?.message || 'Erreur chargement des demandes';
      }
    });
  }
  loadAdmins() {
    this.adminMessage = '';
    this.api.listAdmins().subscribe({
      next: res => {
        this.admins = res;
      },
      error: err => {
        this.adminMessage = err.error?.message || 'Erreur chargement admins';
      }
    });
  }
  loadAllAccounts() {
    this.api.listAllAccounts().subscribe({
      next: res => {
        this.allAccounts = res;
      },
      error: () => {}
    });
  }
  loadStructures() {
    this.api.listDepartments().subscribe({
      next: res => this.departments = res
    });
    this.api.listLaboratories().subscribe({
      next: res => this.laboratories = res
    });
  }
  syncQuery(section) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        section
      },
      queryParamsHandling: 'merge'
    });
  }
  createAdmin() {
    if (this.createForm.invalid) return;
    this.creatingAdmin = true;
    this.createMessage = '';
    const payload = {
      username: this.createForm.value.username || '',
      email: this.createForm.value.email || '',
      password: this.createForm.value.password || '',
      phone: this.createForm.value.phone || undefined
    };
    this.api.createAdmin(payload).subscribe({
      next: admin => {
        this.createMessage = `Admin ${admin.username} cree (${admin.status})`;
        this.createForm.reset({
          username: '',
          email: '',
          password: '',
          phone: ''
        });
        this.creatingAdmin = false;
        this.loadAdmins();
        this.loadAllAccounts();
      },
      error: err => {
        this.createMessage = err.error?.message || 'Erreur creation admin';
        this.creatingAdmin = false;
      }
    });
  }
  approve(id) {
    this.api.approveAccount(id).subscribe({
      next: () => {
        this.pendingMessage = 'Compte approuve';
        this.loadPending();
        this.loadAllAccounts();
      },
      error: err => {
        this.pendingMessage = err.error?.message || 'Erreur approbation';
      }
    });
  }
  reject(id) {
    this.api.rejectAccount(id).subscribe({
      next: () => {
        this.pendingMessage = 'Compte rejete';
        this.loadPending();
        this.loadAllAccounts();
      },
      error: err => {
        this.pendingMessage = err.error?.message || 'Erreur rejet';
      }
    });
  }
  activate(id) {
    this.api.activateAdmin(id).subscribe({
      next: admin => {
        this.adminMessage = `Admin ${admin.username} active`;
        this.loadAdmins();
        this.loadAllAccounts();
      },
      error: err => {
        this.adminMessage = err.error?.message || 'Erreur activation';
      }
    });
  }
  suspend(id) {
    this.api.suspendAdmin(id).subscribe({
      next: admin => {
        this.adminMessage = `Admin ${admin.username} suspendu`;
        this.loadAdmins();
        this.loadAllAccounts();
      },
      error: err => {
        this.adminMessage = err.error?.message || 'Erreur suspension';
      }
    });
  }
  createDepartment() {
    if (this.departmentForm.invalid) return;
    this.creatingDepartment = true;
    this.structureMessage = '';
    const payload = this.departmentForm.value;
    const request$ = this.editingDepartmentId ? this.api.updateDepartment(this.editingDepartmentId, payload) : this.api.createDepartment(payload);
    request$.subscribe({
      next: dep => {
        this.structureMessage = this.editingDepartmentId ? `Departement ${dep.name} mis a jour` : `Departement ${dep.name} cree`;
        this.departmentForm.reset({
          name: '',
          description: ''
        });
        this.editingDepartmentId = null;
        this.creatingDepartment = false;
        this.loadStructures();
      },
      error: err => {
        this.structureMessage = err.error?.message || 'Erreur creation departement';
        this.creatingDepartment = false;
      }
    });
  }
  createLaboratory() {
    if (this.laboratoryForm.invalid) return;
    this.creatingLaboratory = true;
    this.structureMessage = '';
    const payload = this.laboratoryForm.value;
    const request$ = this.editingLaboratoryId ? this.api.updateLaboratory(this.editingLaboratoryId, payload) : this.api.createLaboratory(payload);
    request$.subscribe({
      next: lab => {
        this.structureMessage = this.editingLaboratoryId ? `Laboratoire ${lab.name} mis a jour` : `Laboratoire ${lab.name} cree`;
        this.laboratoryForm.reset({
          name: '',
          description: ''
        });
        this.editingLaboratoryId = null;
        this.creatingLaboratory = false;
        this.loadStructures();
      },
      error: err => {
        this.structureMessage = err.error?.message || 'Erreur creation laboratoire';
        this.creatingLaboratory = false;
      }
    });
  }
  editDepartment(dep) {
    this.editingDepartmentId = dep.id;
    this.departmentForm.patchValue({
      name: dep.name,
      description: dep.description || ''
    });
  }
  editLaboratory(lab) {
    this.editingLaboratoryId = lab.id;
    this.laboratoryForm.patchValue({
      name: lab.name,
      description: lab.description || ''
    });
  }
  cancelDepartmentEdit() {
    this.editingDepartmentId = null;
    this.departmentForm.reset({
      name: '',
      description: ''
    });
  }
  cancelLaboratoryEdit() {
    this.editingLaboratoryId = null;
    this.laboratoryForm.reset({
      name: '',
      description: ''
    });
  }
  deleteDepartment(id) {
    this.structureMessage = '';
    this.api.deleteDepartment(id).subscribe({
      next: () => {
        this.structureMessage = 'Departement supprime';
        if (this.editingDepartmentId === id) {
          this.cancelDepartmentEdit();
        }
        this.loadStructures();
      },
      error: err => {
        this.structureMessage = err.error?.message || this.i18nFallback('admin.structures.deleteBlocked');
      }
    });
  }
  deleteLaboratory(id) {
    this.structureMessage = '';
    this.api.deleteLaboratory(id).subscribe({
      next: () => {
        this.structureMessage = 'Laboratoire supprime';
        if (this.editingLaboratoryId === id) {
          this.cancelLaboratoryEdit();
        }
        this.loadStructures();
      },
      error: err => {
        this.structureMessage = err.error?.message || this.i18nFallback('admin.structures.deleteBlocked');
      }
    });
  }
  i18nFallback(key) {
    return this.i18n.translate(key);
  }
  static {
    this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 33,
      vars: 36,
      consts: [[1, "panel", 2, "padding", "16px"], [1, "flex", 2, "justify-content", "space-between", "align-items", "center"], [1, "badge"], [1, "flex", 2, "gap", "8px", "flex-wrap", "wrap"], [3, "click", "disabled"], ["class", "panel", 4, "ngIf"], [1, "panel"], [1, "stat-grid"], [1, "stat"], [1, "section-title"], [2, "margin-top", "12px"], [3, "click"], [1, "form-row", 3, "ngSubmit", "formGroup"], ["formControlName", "username"], ["formControlName", "email"], ["type", "password", "formControlName", "password"], ["formControlName", "phone"], [1, "flex", 2, "margin-top", "12px"], ["class", "badge", 4, "ngIf"], [1, "table"], [1, "table-head"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "ellipsis", "email-cell", 3, "title"], [4, "ngIf"], ["class", "card", "style", "padding:12px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "padding", "12px"], [1, "flex", 2, "gap", "8px", "margin-top", "8px"], [2, "background", "#ef4444", "color", "white", 3, "click"], [3, "click", 4, "ngIf"], ["style", "background:#ef4444; color:white;", 3, "click", 4, "ngIf"], [1, "form-row", 2, "margin-top", "8px", "gap", "8px", "flex-wrap", "wrap", 3, "ngSubmit", "formGroup"], ["formControlName", "name", 3, "placeholder"], ["formControlName", "description", 3, "placeholder"], [1, "flex", 2, "gap", "8px", "align-items", "center"], ["type", "submit", 3, "disabled"], ["type", "button", 3, "click", 4, "ngIf"], [1, "table", 2, "margin-top", "8px"], [1, "flex", 2, "justify-content", "space-between", "align-items", "center", "margin-top", "16px"], ["class", "badge", "style", "margin-top:8px;", 4, "ngIf"], ["type", "button", 3, "click"], [1, "flex", 2, "justify-content", "flex-end", "gap", "6px"], [1, "badge", 2, "margin-top", "8px"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_9_listener() {
            return ctx.setSection("overview");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_12_listener() {
            return ctx.setSection("accounts");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_15_listener() {
            return ctx.setSection("pending");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_18_listener() {
            return ctx.setSection("admins");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_21_listener() {
            return ctx.setSection("structures");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_24_listener() {
            return ctx.setSection("create");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AdminComponent_section_27_Template, 27, 18, "section", 5)(28, AdminComponent_section_28_Template, 30, 21, "section", 5)(29, AdminComponent_section_29_Template, 26, 22, "section", 5)(30, AdminComponent_section_30_Template, 10, 8, "section", 5)(31, AdminComponent_section_31_Template, 10, 8, "section", 5)(32, AdminComponent_section_32_Template, 55, 52, "section", 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 20, "admin.consoleTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 22, "admin.badgeSuperuser"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeSection === "overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 24, "admin.sections.overview"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeSection === "accounts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 26, "admin.sections.accounts"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeSection === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 28, "admin.sections.pending"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeSection === "admins");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 30, "admin.sections.admins"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeSection === "structures");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 32, "admin.sections.structures"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeSection === "create");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 34, "admin.sections.create"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeSection === "overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeSection === "create");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeSection === "accounts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeSection === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeSection === "admins");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeSection === "structures");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _core_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 8707:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-page.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthPageComponent: () => (/* binding */ AuthPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ 7195);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register/register.component */ 2739);
/* harmony import */ var _core_role_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/role-routing */ 2609);
/* harmony import */ var _core_translate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/translate.pipe */ 5058);
/* harmony import */ var _core_top_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/top-controls.component */ 479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/i18n.service */ 7907);










function AuthPageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Session: ", ctx_r0.role, "");
  }
}
function AuthPageComponent_app_login_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-login");
  }
}
function AuthPageComponent_app_register_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-register");
  }
}
class AuthPageComponent {
  constructor(router, i18n) {
    this.router = router;
    this.i18n = i18n;
    this.role = localStorage.getItem('role');
    this.mode = 'login';
  }
  ngOnInit() {
    const token = localStorage.getItem('access');
    const storedRole = localStorage.getItem('role');
    if (token && storedRole) {
      this.router.navigateByUrl((0,_core_role_routing__WEBPACK_IMPORTED_MODULE_2__.routeForRole)(storedRole));
    }
  }
  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }
  get toggleLabel() {
    return this.mode === 'login' ? this.i18n.translate('auth.registerCTA') : this.i18n.translate('auth.loginCTA');
  }
  static {
    this.ɵfac = function AuthPageComponent_Factory(t) {
      return new (t || AuthPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AuthPageComponent,
      selectors: [["app-auth-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 12,
      consts: [[1, "auth-shell", "single"], [1, "auth-card"], [1, "auth-hero", "hero-center"], ["src", "assets/logo.svg", "alt", "Logo", 1, "hero-logo"], [1, "hero-text"], [1, "hero-signature"], ["class", "chip", 4, "ngIf"], [1, "auth-form"], [4, "ngIf"], [1, "auth-toggle", "stacked"], ["type", "button", 3, "click"], [1, "chip"]],
      template: function AuthPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-top-controls");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AuthPageComponent_div_9_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AuthPageComponent_app_login_11_Template, 1, 0, "app-login", 8)(12, AuthPageComponent_app_register_12_Template, 1, 0, "app-register", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9)(14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AuthPageComponent_Template_button_click_18_listener() {
            return ctx.toggleMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 6, "common.heroTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "login");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "register");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.mode === "login" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 8, "common.noAccount") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 10, "common.hasAccount"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.toggleLabel);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _core_translate_pipe__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _core_top_controls_component__WEBPACK_IMPORTED_MODULE_4__.TopControlsComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5199:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api.service */ 7981);








function DashboardComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Superuser");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.sessionMessage);
  }
}
function DashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_9_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.refreshAccess());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Refresh token");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_9_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_9_span_8_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sessionMessage);
  }
}
function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mon compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Username:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p")(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p")(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Profil complet ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.me.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.me.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.me.primaryRole, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.me.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.me.profileCompleted, "");
  }
}
function DashboardComponent_div_11_div_3_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.profileMessage);
  }
}
function DashboardComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "p")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Prenom:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nom:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13)(11, "p")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Date de naissance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p")(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Adresse:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "p")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Diplome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p")(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Annee graduation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p")(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Universite:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14)(33, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_11_div_3_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startDoctorantEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Modifier le profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, DashboardComponent_div_11_div_3_span_35_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r1.doctorantProfile.info == null ? null : ctx_r1.doctorantProfile.info.firstName) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r1.doctorantProfile.info == null ? null : ctx_r1.doctorantProfile.info.lastName) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r1.doctorantProfile.info == null ? null : ctx_r1.doctorantProfile.info.birthDate) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r1.doctorantProfile.info == null ? null : ctx_r1.doctorantProfile.info.address) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.doctorantProfile.diploma || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.doctorantProfile.graduationYear || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.doctorantProfile.university || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.profileMessage);
  }
}
function DashboardComponent_div_11_form_4_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_11_form_4_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancelDoctorantEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_11_form_4_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.profileMessage);
  }
}
function DashboardComponent_div_11_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DashboardComponent_div_11_form_4_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.saveDoctorant());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17)(2, "div")(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Prenom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17)(11, "div")(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Date de naissance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17)(20, "div")(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Annee graduation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div")(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Diplome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Universite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25)(32, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DashboardComponent_div_11_form_4_button_34_Template, 2, 0, "button", 27)(35, DashboardComponent_div_11_form_4_span_35_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.docForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.docForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.doctorantProfile ? "Mettre a jour" : "Enregistrer profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.doctorantProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.profileMessage && (!ctx_r1.doctorantProfile || ctx_r1.editingDoctorant));
  }
}
function DashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Profil doctorant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_11_div_3_Template, 36, 8, "div", 10)(4, DashboardComponent_div_11_form_4_Template, 36, 5, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.doctorantProfile && !ctx_r1.editingDoctorant);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.doctorantProfile || ctx_r1.editingDoctorant);
  }
}
function DashboardComponent_div_12_div_3_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.profileMessage);
  }
}
function DashboardComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "p")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Prenom:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nom:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13)(11, "p")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Date de naissance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p")(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Adresse:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "p")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Grade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p")(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Departement:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p")(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Laboratoire:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14)(33, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_12_div_3_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startEncadrantEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Modifier le profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, DashboardComponent_div_12_div_3_span_35_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r1.encadrantProfile.info == null ? null : ctx_r1.encadrantProfile.info.firstName) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r1.encadrantProfile.info == null ? null : ctx_r1.encadrantProfile.info.lastName) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r1.encadrantProfile.info == null ? null : ctx_r1.encadrantProfile.info.birthDate) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r1.encadrantProfile.info == null ? null : ctx_r1.encadrantProfile.info.address) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.encadrantProfile.grade || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.encadrantProfile.departmentId || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.encadrantProfile.laboratoryId || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.profileMessage);
  }
}
function DashboardComponent_div_12_form_4_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dep_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", dep_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dep_r8.name);
  }
}
function DashboardComponent_div_12_form_4_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lab_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", lab_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lab_r9.name);
  }
}
function DashboardComponent_div_12_form_4_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_12_form_4_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancelEncadrantEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_12_form_4_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.profileMessage);
  }
}
function DashboardComponent_div_12_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DashboardComponent_div_12_form_4_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.saveEncadrant());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17)(2, "div")(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Prenom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17)(11, "div")(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Date de naissance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Departement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 29)(25, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "-- Choisir --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DashboardComponent_div_12_form_4_option_27_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Laboratoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 32)(31, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "-- Choisir --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DashboardComponent_div_12_form_4_option_33_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 25)(35, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DashboardComponent_div_12_form_4_button_37_Template, 2, 0, "button", 27)(38, DashboardComponent_div_12_form_4_span_38_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.encForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.departments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.laboratories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.encForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.encadrantProfile ? "Mettre a jour" : "Enregistrer profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.encadrantProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.profileMessage && (!ctx_r1.encadrantProfile || ctx_r1.editingEncadrant));
  }
}
function DashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Profil encadrant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_12_div_3_Template, 36, 8, "div", 10)(4, DashboardComponent_div_12_form_4_Template, 39, 7, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.encadrantProfile && !ctx_r1.editingEncadrant);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.encadrantProfile || ctx_r1.editingEncadrant);
  }
}
class DashboardComponent {
  constructor(fb, api, router) {
    this.fb = fb;
    this.api = api;
    this.router = router;
    this.activeTab = 'session';
    this.me = null;
    this.doctorantProfile = null;
    this.encadrantProfile = null;
    this.departments = [];
    this.laboratories = [];
    this.editingDoctorant = false;
    this.editingEncadrant = false;
    this.sessionMessage = '';
    this.profileMessage = '';
    this.docForm = this.fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      birthDate: [''],
      address: [''],
      diploma: [''],
      graduationYear: [null],
      university: ['']
    });
    this.encForm = this.fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      birthDate: [''],
      address: [''],
      grade: [''],
      departmentId: [''],
      laboratoryId: ['']
    });
  }
  ngOnInit() {
    this.setInitialTab();
    this.loadMe();
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  isSuperuser() {
    return localStorage.getItem('role') === 'SUPERUSER';
  }
  loadMe() {
    this.api.me().subscribe({
      next: res => {
        this.me = res;
        localStorage.setItem('role', res.primaryRole);
        this.loadProfileForRole();
      },
      error: () => {
        this.me = null;
        this.doctorantProfile = null;
        this.encadrantProfile = null;
        this.editingDoctorant = false;
        this.editingEncadrant = false;
      }
    });
  }
  loadProfileForRole() {
    this.profileMessage = '';
    if (!this.me) return;
    if (this.me.primaryRole === 'DOCTORANT') {
      this.api.getDoctorantProfile(this.me.id).subscribe({
        next: profile => {
          this.doctorantProfile = profile;
          this.editingDoctorant = false;
          this.patchDoctorantForm(profile);
        },
        error: () => {
          this.doctorantProfile = null;
          this.editingDoctorant = false;
          this.resetDoctorantForm();
        }
      });
    } else if (this.me.primaryRole === 'DIRECTEUR') {
      this.loadStructures();
      this.api.getEncadrantProfile(this.me.id).subscribe({
        next: profile => {
          this.encadrantProfile = profile;
          this.editingEncadrant = false;
          this.patchEncadrantForm(profile);
        },
        error: () => {
          this.encadrantProfile = null;
          this.editingEncadrant = false;
          this.resetEncadrantForm();
        }
      });
    }
  }
  refreshAccess() {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) return;
    this.api.refresh(refresh).subscribe({
      next: res => {
        localStorage.setItem('access', res.accessToken);
        localStorage.setItem('refresh', res.refreshToken);
        this.sessionMessage = 'Token rafraichi';
      },
      error: err => {
        this.sessionMessage = err.error?.message || 'Refresh echoue';
      }
    });
  }
  logout() {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) return;
    this.api.logout(refresh).subscribe({
      next: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.sessionMessage = 'Deconnecte';
        this.me = null;
        this.doctorantProfile = null;
        this.encadrantProfile = null;
        this.editingDoctorant = false;
        this.editingEncadrant = false;
      },
      error: err => {
        this.sessionMessage = err.error?.message || 'Logout echoue';
      }
    });
  }
  startDoctorantEdit() {
    this.profileMessage = '';
    this.editingDoctorant = true;
    if (this.doctorantProfile) {
      this.patchDoctorantForm(this.doctorantProfile);
    }
  }
  cancelDoctorantEdit() {
    this.editingDoctorant = false;
    this.profileMessage = '';
    if (this.doctorantProfile) {
      this.patchDoctorantForm(this.doctorantProfile);
    } else {
      this.resetDoctorantForm();
    }
  }
  saveDoctorant() {
    if (!this.me) return;
    const info = this.buildInfoFromForm(this.docForm.value);
    const payload = {
      info,
      diploma: this.docForm.value.diploma || undefined,
      graduationYear: this.docForm.value.graduationYear || undefined,
      university: this.docForm.value.university || undefined
    };
    const request$ = this.doctorantProfile ? this.api.updateDoctorant(this.me.id, payload) : this.api.createDoctorant({
      ...payload,
      accountId: this.me.id
    });
    request$.subscribe({
      next: res => {
        this.profileMessage = this.doctorantProfile ? 'Profil doctorant mis a jour' : 'Profil doctorant cree';
        this.doctorantProfile = res;
        this.editingDoctorant = false;
        if (this.me) this.me.profileCompleted = true;
        this.patchDoctorantForm(res);
      },
      error: err => {
        this.profileMessage = err.error?.message || 'Erreur profil doctorant';
      }
    });
  }
  startEncadrantEdit() {
    this.profileMessage = '';
    this.editingEncadrant = true;
    if (this.encadrantProfile) {
      this.patchEncadrantForm(this.encadrantProfile);
    }
  }
  cancelEncadrantEdit() {
    this.editingEncadrant = false;
    this.profileMessage = '';
    if (this.encadrantProfile) {
      this.patchEncadrantForm(this.encadrantProfile);
    } else {
      this.resetEncadrantForm();
    }
  }
  saveEncadrant() {
    if (!this.me) return;
    const info = this.buildInfoFromForm(this.encForm.value);
    const payload = {
      info,
      grade: this.encForm.value.grade || undefined,
      departmentId: this.normalizeUuid(this.encForm.value.departmentId),
      laboratoryId: this.normalizeUuid(this.encForm.value.laboratoryId)
    };
    const request$ = this.encadrantProfile ? this.api.updateEncadrant(this.me.id, payload) : this.api.createEncadrant({
      ...payload,
      accountId: this.me.id
    });
    request$.subscribe({
      next: res => {
        this.profileMessage = this.encadrantProfile ? 'Profil encadrant mis a jour' : 'Profil encadrant cree';
        this.encadrantProfile = res;
        this.editingEncadrant = false;
        if (this.me) this.me.profileCompleted = true;
        this.patchEncadrantForm(res);
      },
      error: err => {
        this.profileMessage = err.error?.message || 'Erreur profil encadrant';
      }
    });
  }
  patchDoctorantForm(profile) {
    this.docForm.patchValue({
      firstName: profile.info?.firstName || '',
      lastName: profile.info?.lastName || '',
      birthDate: profile.info?.birthDate || '',
      address: profile.info?.address || '',
      diploma: profile.diploma || '',
      graduationYear: profile.graduationYear ?? null,
      university: profile.university || ''
    });
  }
  patchEncadrantForm(profile) {
    this.encForm.patchValue({
      firstName: profile.info?.firstName || '',
      lastName: profile.info?.lastName || '',
      birthDate: profile.info?.birthDate || '',
      address: profile.info?.address || '',
      grade: profile.grade || '',
      departmentId: profile.departmentId || '',
      laboratoryId: profile.laboratoryId || ''
    });
  }
  resetDoctorantForm() {
    this.docForm.reset({
      firstName: '',
      lastName: '',
      birthDate: '',
      address: '',
      diploma: '',
      graduationYear: null,
      university: ''
    });
  }
  resetEncadrantForm() {
    this.encForm.reset({
      firstName: '',
      lastName: '',
      birthDate: '',
      address: '',
      grade: '',
      departmentId: '',
      laboratoryId: ''
    });
  }
  buildInfoFromForm(value) {
    const normalizedBirthDate = this.normalizeDate(value.birthDate);
    return {
      firstName: value.firstName || undefined,
      lastName: value.lastName || undefined,
      birthDate: normalizedBirthDate,
      address: value.address || undefined
    };
  }
  normalizeDate(raw) {
    if (!raw) return undefined;
    // Accept dd/MM/yyyy or dd-MM-yyyy and convert to yyyy-MM-dd
    const slashMatch = /^(\d{2})[\\/](\d{2})[\\/](\d{4})$/.exec(raw);
    if (slashMatch) {
      const [, dd, mm, yyyy] = slashMatch;
      return `${yyyy}-${mm}-${dd}`;
    }
    const date = new Date(raw);
    if (isNaN(date.getTime())) return undefined;
    return date.toISOString().slice(0, 10);
  }
  normalizeUuid(value) {
    if (!value) return undefined;
    const trimmed = value.trim();
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(trimmed) ? trimmed : undefined;
  }
  loadStructures() {
    this.api.listDepartments().subscribe({
      next: d => this.departments = d
    });
    this.api.listLaboratories().subscribe({
      next: l => this.laboratories = l
    });
  }
  setInitialTab() {
    const url = this.router.url;
    if (url.includes('doctorant') || url.includes('encadrant')) {
      this.activeTab = 'profile';
    } else {
      this.activeTab = 'session';
    }
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 8,
      consts: [[1, "panel"], [1, "flex", 2, "gap", "8px", "flex-wrap", "wrap"], [3, "click", "disabled"], ["routerLink", "/superuser", "class", "badge", "style", "background:#d3b869; color:#111;", 4, "ngIf"], ["class", "panel", 4, "ngIf"], ["routerLink", "/superuser", 1, "badge", 2, "background", "#d3b869", "color", "#111"], [1, "flex", 2, "flex-wrap", "wrap", "gap", "8px"], [3, "click"], ["class", "badge", 4, "ngIf"], [1, "badge"], ["class", "profile-block", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "profile-block"], [1, "form-row", 2, "flex-wrap", "wrap"], [1, "flex", 2, "gap", "8px"], ["type", "button", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["formControlName", "firstName"], ["formControlName", "lastName"], ["type", "date", "formControlName", "birthDate"], ["formControlName", "address"], ["type", "number", "formControlName", "graduationYear"], ["formControlName", "diploma"], ["formControlName", "university"], [1, "flex", 2, "margin-top", "12px", "gap", "8px"], ["type", "submit", 3, "disabled"], ["type", "button", 3, "click", 4, "ngIf"], ["formControlName", "grade"], ["formControlName", "departmentId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "laboratoryId"], [3, "value"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_2_listener() {
            return ctx.setTab("session");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Session");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_4_listener() {
            return ctx.setTab("account");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Mon compte");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_6_listener() {
            return ctx.setTab("profile");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_a_8_Template, 2, 0, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DashboardComponent_div_9_Template, 9, 1, "div", 4)(10, DashboardComponent_div_10_Template, 23, 5, "div", 4)(11, DashboardComponent_div_11_Template, 5, 2, "div", 4)(12, DashboardComponent_div_12_Template, 5, 2, "div", 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.activeTab === "session");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.activeTab === "account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.activeTab === "profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSuperuser());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "session");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "account" && ctx.me);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "profile" && (ctx.me == null ? null : ctx.me.primaryRole) === "DOCTORANT");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "profile" && (ctx.me == null ? null : ctx.me.primaryRole) === "DIRECTEUR");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 7195:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core_role_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/role-routing */ 2609);
/* harmony import */ var _core_translate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/translate.pipe */ 5058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/api.service */ 7981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);









function LoginComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
class LoginComponent {
  constructor(fb, api, router) {
    this.fb = fb;
    this.api = api;
    this.router = router;
    this.loading = false;
    this.error = '';
    this.form = this.fb.group({
      usernameOrEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = '';
    this.api.login(this.form.value).subscribe({
      next: res => {
        localStorage.setItem('access', res.accessToken);
        localStorage.setItem('refresh', res.refreshToken);
        // Récupérer le rôle pour l'UI (nav/admin)
        this.api.me().subscribe({
          next: me => {
            localStorage.setItem('role', me.primaryRole);
            this.loading = false;
            this.router.navigateByUrl((0,_core_role_routing__WEBPACK_IMPORTED_MODULE_0__.routeForRole)(me.primaryRole));
          },
          error: () => {
            this.loading = false;
            this.router.navigateByUrl('/dashboard');
          }
        });
      },
      error: err => {
        this.error = err.error?.message || 'Erreur login';
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 15,
      consts: [[1, "card"], [1, "center-text"], [3, "ngSubmit", "formGroup"], ["formControlName", "usernameOrEmail"], ["type", "password", "formControlName", "password"], [1, "flex", "center-row", 2, "margin-top", "12px"], ["type", "submit", 3, "disabled"], ["class", "badge", 4, "ngIf"], [1, "badge"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5)(14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LoginComponent_span_17_Template, 2, 1, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, "login.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 9, "login.usernameOrEmail"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 11, "login.password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 13, "login.submit"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _core_translate_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5603:
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsComponent: () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api.service */ 7981);





function NotificationsComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadCount, " non lue(s) ");
  }
}
function NotificationsComponent_div_13_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 22);
  }
}
function NotificationsComponent_div_13_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notif_r3.subject);
  }
}
function NotificationsComponent_div_13_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notif_r3.content, " ");
  }
}
function NotificationsComponent_div_13_div_2_div_11_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_2_div_11_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.downloadDocument($event, notif_r3, "attestation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCDC Attestation d'inscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_div_13_div_2_div_11_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_2_div_11_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.downloadDocument($event, notif_r3, "autorisation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u2705 Autorisation de soutenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_div_13_div_2_div_11_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_2_div_11_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.downloadDocument($event, notif_r3, "proces-verbal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCCB Proc\u00E8s-verbal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_div_13_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCC4 Documents disponibles:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NotificationsComponent_div_13_div_2_div_11_button_4_Template, 2, 0, "button", 28)(5, NotificationsComponent_div_13_div_2_div_11_button_5_Template, 2, 0, "button", 29)(6, NotificationsComponent_div_13_div_2_div_11_button_6_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getMetadata(notif_r3, "attestationUrl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getMetadata(notif_r3, "authorizationDocumentUrl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getMetadata(notif_r3, "procesVerbalUrl"));
  }
}
function NotificationsComponent_div_13_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Th\u00E8se:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notif_r3.metadata.thesisTitle, " ");
  }
}
function NotificationsComponent_div_13_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Statut:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r0.getStatusColor(notif_r3.metadata.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notif_r3.metadata.status, " ");
  }
}
function NotificationsComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsComponent_div_13_div_2_Template_div_click_0_listener() {
      const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.markAsRead(notif_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NotificationsComponent_div_13_div_2_span_8_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NotificationsComponent_div_13_div_2_div_9_Template, 3, 1, "div", 18)(10, NotificationsComponent_div_13_div_2_div_10_Template, 2, 1, "div", 19)(11, NotificationsComponent_div_13_div_2_div_11_Template, 7, 3, "div", 20)(12, NotificationsComponent_div_13_div_2_div_12_Template, 4, 1, "div", 21)(13, NotificationsComponent_div_13_div_2_div_13_Template, 5, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notif_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("unread", notif_r3.status !== "READ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getIcon(notif_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatType(notif_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatDate(notif_r3.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", notif_r3.status !== "READ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", notif_r3.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", notif_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasDocuments(notif_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", notif_r3.metadata == null ? null : notif_r3.metadata.thesisTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", notif_r3.metadata == null ? null : notif_r3.metadata.status);
  }
}
function NotificationsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NotificationsComponent_div_13_div_2_Template, 14, 11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.notifications);
  }
}
function NotificationsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 37)(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\uD83D\uDCED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Aucune notification pour l'instant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Vous recevrez des notifications lors des mises \u00E0 jour de vos soutenances.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function NotificationsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class NotificationsComponent {
  constructor(api) {
    this.api = api;
    this.me = null;
    this.notifications = [];
    this.loading = false;
  }
  ngOnInit() {
    this.loadMe();
    // Auto-refresh every 30 seconds
    this.refreshSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(30000).subscribe(() => this.refresh());
  }
  ngOnDestroy() {
    this.refreshSub?.unsubscribe();
  }
  get unreadCount() {
    return this.notifications.filter(n => n.status !== 'READ').length;
  }
  loadMe() {
    this.loading = true;
    this.api.me().subscribe({
      next: me => {
        this.me = me;
        this.refresh();
      },
      error: () => {
        this.me = null;
        this.loading = false;
      }
    });
  }
  refresh() {
    if (!this.me) return;
    this.loading = true;
    this.api.getNotificationsForAccount(this.me.id).subscribe({
      next: list => {
        this.notifications = list.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  markAsRead(notif) {
    if (notif.status === 'READ') return;
    this.api.markNotificationAsRead(notif.id).subscribe({
      next: updated => {
        const idx = this.notifications.findIndex(n => n.id === notif.id);
        if (idx >= 0) {
          this.notifications[idx] = {
            ...this.notifications[idx],
            status: 'READ'
          };
        }
      }
    });
  }
  markAllRead() {
    this.api.markAllNotificationsAsRead().subscribe({
      next: () => {
        this.notifications = this.notifications.map(n => ({
          ...n,
          status: 'READ'
        }));
      }
    });
  }
  hasDocuments(notif) {
    if (!notif.metadata) return false;
    return !!(notif.metadata['attestationUrl'] || notif.metadata['authorizationDocumentUrl'] || notif.metadata['procesVerbalUrl']);
  }
  getMetadata(notif, key) {
    return notif.metadata?.[key] || null;
  }
  downloadDocument(event, notif, type) {
    event.stopPropagation();
    const soutenanceId = notif.metadata?.['soutenanceId'];
    if (!soutenanceId) return;
    let download$;
    let filename = '';
    switch (type) {
      case 'attestation':
        download$ = this.api.generateAttestation(soutenanceId);
        filename = `attestation-${soutenanceId}.pdf`;
        break;
      case 'autorisation':
        download$ = this.api.generateAutorisation(soutenanceId);
        filename = `autorisation-${soutenanceId}.pdf`;
        break;
      case 'proces-verbal':
        download$ = this.api.generateProcesVerbal(soutenanceId);
        filename = `proces-verbal-${soutenanceId}.pdf`;
        break;
      default:
        return;
    }
    download$.subscribe({
      next: blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: err => {
        console.error('Download failed:', err);
        alert('Erreur lors du téléchargement du document');
      }
    });
  }
  getIcon(type) {
    const icons = {
      'SOUTENANCE_SUBMITTED': '📝',
      'SOUTENANCE_UNDER_REVIEW': '🔍',
      'SOUTENANCE_APPROVED': '✅',
      'SOUTENANCE_REJECTED': '❌',
      'SOUTENANCE_AUTHORIZED': '🎫',
      'SOUTENANCE_SCHEDULED': '📅',
      'SOUTENANCE_JURY_VALIDATED': '👥',
      'SOUTENANCE_DEFENDED': '🎓',
      'SOUTENANCE_DIRECTOR_APPROVED': '👨‍🏫',
      'SOUTENANCE_DIRECTOR_REJECTED': '🚫',
      'SOUTENANCE_RAPPORTEUR_REPORT_SUBMITTED': '📊',
      'SOUTENANCE_RESULT_SET': '🏆',
      'DURATION_LIMIT_APPROACHING': '⚠️',
      'GENERIC': '📢'
    };
    return icons[type] || '📌';
  }
  formatType(type) {
    const labels = {
      'SOUTENANCE_SUBMITTED': 'Soutenance soumise',
      'SOUTENANCE_UNDER_REVIEW': 'En cours d\'examen',
      'SOUTENANCE_APPROVED': 'Soutenance approuvée',
      'SOUTENANCE_REJECTED': 'Soutenance rejetée',
      'SOUTENANCE_AUTHORIZED': 'Soutenance autorisée',
      'SOUTENANCE_SCHEDULED': 'Soutenance planifiée',
      'SOUTENANCE_JURY_VALIDATED': 'Jury validé',
      'SOUTENANCE_DEFENDED': 'Soutenance soutenue',
      'SOUTENANCE_DIRECTOR_APPROVED': 'Approuvée par directeur',
      'SOUTENANCE_DIRECTOR_REJECTED': 'Rejetée par directeur',
      'SOUTENANCE_RAPPORTEUR_REPORT_SUBMITTED': 'Rapport rapporteur',
      'SOUTENANCE_RESULT_SET': 'Résultat défini',
      'DURATION_LIMIT_APPROACHING': 'Alerte durée',
      'GENERIC': 'Notification'
    };
    return labels[type] || type;
  }
  formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      if (hours === 0) {
        const minutes = Math.floor(diff / (1000 * 60));
        return minutes <= 1 ? 'À l\'instant' : `Il y a ${minutes} min`;
      }
      return `Il y a ${hours}h`;
    } else if (days === 1) {
      return 'Hier';
    } else if (days < 7) {
      return `Il y a ${days} jours`;
    }
    return date.toLocaleDateString('fr-FR');
  }
  getStatusColor(status) {
    const colors = {
      'SUBMITTED': '#3c5d8b',
      'UNDER_REVIEW': '#8b6b3c',
      'APPROVED': '#5d9c6d',
      'REJECTED': '#b95858',
      'SCHEDULED': '#6b8b3c',
      'DEFENDED': '#5d9c6d',
      'CLOSED': '#666'
    };
    return colors[status] || '#666';
  }
  static {
    this.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 6,
      consts: [[1, "panel"], [1, "flex", 2, "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "12px"], [2, "margin", "0"], [1, "muted"], [1, "flex", 2, "gap", "8px"], ["type", "button", 3, "click", "disabled"], ["type", "button", 2, "background", "#5d9c6d", 3, "click", "disabled"], ["class", "badge", "style", "background: #e0a546; color: #2c1e07;", 4, "ngIf"], ["class", "panel", 4, "ngIf"], [1, "badge", 2, "background", "#e0a546", "color", "#2c1e07"], [1, "notification-list"], ["class", "notification-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notification-item", 3, "click"], [1, "notification-header"], [1, "notification-icon"], [1, "notification-type"], [1, "notification-date"], ["class", "unread-dot", 4, "ngIf"], ["class", "notification-subject", 4, "ngIf"], ["class", "notification-content", 4, "ngIf"], ["class", "notification-documents", 4, "ngIf"], ["class", "notification-meta", 4, "ngIf"], [1, "unread-dot"], [1, "notification-subject"], [1, "notification-content"], [1, "notification-documents"], [1, "documents-header"], [1, "document-buttons"], ["class", "doc-btn attestation", 3, "click", 4, "ngIf"], ["class", "doc-btn autorisation", 3, "click", 4, "ngIf"], ["class", "doc-btn pv", 3, "click", 4, "ngIf"], [1, "doc-btn", "attestation", 3, "click"], [1, "doc-btn", "autorisation", 3, "click"], [1, "doc-btn", "pv", 3, "click"], [1, "notification-meta"], [1, "meta-label"], [1, "badge"], [2, "text-align", "center", "padding", "40px"], [2, "font-size", "48px"], [2, "text-align", "center"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDCEC Mes Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Suivez l'avancement de vos demandes et t\u00E9l\u00E9chargez vos documents.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_8_listener() {
            return ctx.refresh();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \uD83D\uDD04 Rafra\u00EEchir ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_10_listener() {
            return ctx.markAllRead();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u2713 Tout marquer lu ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NotificationsComponent_span_12_Template, 2, 1, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NotificationsComponent_div_13_Template, 3, 1, "div", 8)(14, NotificationsComponent_div_14_Template, 8, 0, "div", 8)(15, NotificationsComponent_div_15_Template, 3, 0, "div", 8);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.unreadCount === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notifications.length === 0 && !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      styles: [".notification-list[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 12px;\n    }\n\n    .notification-item[_ngcontent-%COMP%] {\n      background: var(--surface);\n      border: 1px solid var(--border);\n      border-radius: 8px;\n      padding: 16px;\n      cursor: pointer;\n      transition: all 0.2s ease;\n    }\n\n    .notification-item[_ngcontent-%COMP%]:hover {\n      border-color: var(--primary);\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n\n    .notification-item.unread[_ngcontent-%COMP%] {\n      border-left: 4px solid #5d9c6d;\n      background: linear-gradient(90deg, rgba(93,156,109,0.05) 0%, transparent 100%);\n    }\n\n    .notification-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      margin-bottom: 8px;\n    }\n\n    .notification-icon[_ngcontent-%COMP%] {\n      font-size: 20px;\n    }\n\n    .notification-type[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: var(--muted);\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n\n    .notification-date[_ngcontent-%COMP%] {\n      margin-left: auto;\n      font-size: 12px;\n      color: var(--muted);\n    }\n\n    .unread-dot[_ngcontent-%COMP%] {\n      width: 8px;\n      height: 8px;\n      background: #5d9c6d;\n      border-radius: 50%;\n    }\n\n    .notification-subject[_ngcontent-%COMP%] {\n      font-size: 16px;\n      margin-bottom: 6px;\n    }\n\n    .notification-content[_ngcontent-%COMP%] {\n      color: var(--text);\n      font-size: 14px;\n      line-height: 1.5;\n    }\n\n    .notification-documents[_ngcontent-%COMP%] {\n      margin-top: 12px;\n      padding-top: 12px;\n      border-top: 1px dashed var(--border);\n    }\n\n    .documents-header[_ngcontent-%COMP%] {\n      font-size: 13px;\n      color: var(--muted);\n      margin-bottom: 8px;\n    }\n\n    .document-buttons[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 8px;\n    }\n\n    .doc-btn[_ngcontent-%COMP%] {\n      padding: 8px 12px;\n      font-size: 13px;\n      border-radius: 6px;\n      cursor: pointer;\n      transition: all 0.2s;\n    }\n\n    .doc-btn.attestation[_ngcontent-%COMP%] {\n      background: #3c5d8b;\n      color: #e7ecf7;\n    }\n\n    .doc-btn.autorisation[_ngcontent-%COMP%] {\n      background: #5d9c6d;\n      color: #0e1a11;\n    }\n\n    .doc-btn.pv[_ngcontent-%COMP%] {\n      background: #8b6b3c;\n      color: #f7f0e7;\n    }\n\n    .doc-btn[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 2px 6px rgba(0,0,0,0.15);\n    }\n\n    .notification-meta[_ngcontent-%COMP%] {\n      margin-top: 8px;\n      font-size: 13px;\n    }\n\n    .meta-label[_ngcontent-%COMP%] {\n      color: var(--muted);\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFNBQVM7SUFDWDs7SUFFQTtNQUNFLDBCQUEwQjtNQUMxQiwrQkFBK0I7TUFDL0Isa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UsNEJBQTRCO01BQzVCLHFDQUFxQztJQUN2Qzs7SUFFQTtNQUNFLDhCQUE4QjtNQUM5Qiw4RUFBOEU7SUFDaEY7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFFBQVE7TUFDUixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxVQUFVO01BQ1YsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLG9DQUFvQztJQUN0Qzs7SUFFQTtNQUNFLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsYUFBYTtNQUNiLGVBQWU7TUFDZixRQUFRO0lBQ1Y7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixlQUFlO01BQ2Ysb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsMkJBQTJCO01BQzNCLHNDQUFzQztJQUN4Qzs7SUFFQTtNQUNFLGVBQWU7TUFDZixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm5vdGlmaWNhdGlvbi1saXN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWl0ZW06aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1pdGVtLnVucmVhZCB7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1ZDljNmQ7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoOTMsMTU2LDEwOSwwLjA1KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tdHlwZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWRhdGUge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgIH1cblxuICAgIC51bnJlYWQtZG90IHtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6ICM1ZDljNmQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1zdWJqZWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWRvY3VtZW50cyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHZhcigtLWJvcmRlcik7XG4gICAgfVxuXG4gICAgLmRvY3VtZW50cy1oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuZG9jdW1lbnQtYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgLmRvYy1idG4ge1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB9XG5cbiAgICAuZG9jLWJ0bi5hdHRlc3RhdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjM2M1ZDhiO1xuICAgICAgY29sb3I6ICNlN2VjZjc7XG4gICAgfVxuXG4gICAgLmRvYy1idG4uYXV0b3Jpc2F0aW9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICM1ZDljNmQ7XG4gICAgICBjb2xvcjogIzBlMWExMTtcbiAgICB9XG5cbiAgICAuZG9jLWJ0bi5wdiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjOGI2YjNjO1xuICAgICAgY29sb3I6ICNmN2YwZTc7XG4gICAgfVxuXG4gICAgLmRvYy1idG46aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1tZXRhIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG5cbiAgICAubWV0YS1sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2739:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/translate.pipe */ 5058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/api.service */ 7981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);








function RegisterComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
class RegisterComponent {
  constructor(fb, api, router) {
    this.fb = fb;
    this.api = api;
    this.router = router;
    this.loading = false;
    this.message = '';
    this.form = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
      phone: [''],
      primaryRole: ['DOCTORANT', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.message = '';
    this.api.register(this.form.value).subscribe({
      next: res => {
        if (res.primaryRole === 'SUPERUSER' || res.status === 'ACTIVE') {
          this.message = `Compte ${res.username} cree (status ${res.status})`;
          setTimeout(() => this.router.navigateByUrl('/login'), 500);
        } else {
          this.message = `Demande envoyee. Verifiez votre email avant validation par l'admin.`;
        }
        this.loading = false;
      },
      error: err => {
        this.message = err.error?.message || 'Erreur inscription';
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 42,
      vars: 30,
      consts: [[1, "card"], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["formControlName", "username"], ["formControlName", "email"], ["type", "password", "formControlName", "password"], ["formControlName", "primaryRole"], ["value", "DOCTORANT"], ["value", "DIRECTEUR"], ["formControlName", "phone"], [1, "flex", 2, "margin-top", "12px"], ["type", "submit", 3, "disabled"], ["class", "badge", 4, "ngIf"], [1, "badge"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2)(6, "div")(7, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div")(12, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2)(17, "div")(18, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "select", 6)(27, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10)(38, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "t");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, RegisterComponent_span_41_Template, 2, 1, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 12, "register.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 14, "register.username"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 16, "register.email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 18, "register.password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 20, "register.role"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 22, "register.roles.doctorant"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 24, "register.roles.encadrant"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 26, "register.phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 28, "register.submit"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _core_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4900:
/*!*********************************************************************!*\
  !*** ./src/app/pages/soutenances/director-soutenances.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectorSoutenancesComponent: () => (/* binding */ DirectorSoutenancesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api.service */ 7981);






function DirectorSoutenancesComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const st_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", st_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](st_r1);
  }
}
function DirectorSoutenancesComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", ctx_r1.isError);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.feedback);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Souhait\u00E9e:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 1, s_r4.requestedDateTime, "medium"), "");
  }
}
function DirectorSoutenancesComponent_div_13_div_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713 Approuv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2717 Rejet\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713 Favorable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2717 D\u00E9favorable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_20_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713 Favorable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_20_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2717 D\u00E9favorable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_20_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Rapports des rapporteurs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Rapporteur 1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DirectorSoutenancesComponent_div_13_div_2_div_20_span_5_Template, 2, 0, "span", 17)(6, DirectorSoutenancesComponent_div_13_div_2_div_20_span_6_Template, 2, 0, "span", 18)(7, DirectorSoutenancesComponent_div_13_div_2_div_20_span_7_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Rapporteur 2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DirectorSoutenancesComponent_div_13_div_2_div_20_span_10_Template, 2, 0, "span", 17)(11, DirectorSoutenancesComponent_div_13_div_2_div_20_span_11_Template, 2, 0, "span", 18)(12, DirectorSoutenancesComponent_div_13_div_2_div_20_span_12_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.rapporteur1Favorable === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.rapporteur1Favorable === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.rapporteur1Favorable === null || s_r4.rapporteur1Favorable === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.rapporteur2Favorable === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.rapporteur2Favorable === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.rapporteur2Favorable === null || s_r4.rapporteur2Favorable === undefined);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u26A0\uFE0F Approche limite 6 ans ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_ng_container_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openApprovalDialog(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Approuver / Rejeter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openJuryDialog(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Proposer Jury ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_27_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Manuscrit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Voir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", s_r4.manuscriptUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_27_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Anti-plagiat:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Voir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", s_r4.antiPlagiarismReportUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_27_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Commentaires directeur:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r4.directorComments, "");
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_27_div_18_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const j_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", j_r7.fullName, " - ", j_r7.role, " ", j_r7.external ? "(externe)" : "", "");
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_27_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Jury propos\u00E9:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DirectorSoutenancesComponent_div_13_div_2_div_27_div_18_li_4_Template, 2, 3, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", s_r4.jury);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "D\u00E9tails");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Publications:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Conf\u00E9rences:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 3)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Heures formation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DirectorSoutenancesComponent_div_13_div_2_div_27_p_15_Template, 5, 1, "p", 16)(16, DirectorSoutenancesComponent_div_13_div_2_div_27_p_16_Template, 5, 1, "p", 16)(17, DirectorSoutenancesComponent_div_13_div_2_div_27_p_17_Template, 4, 1, "p", 16)(18, DirectorSoutenancesComponent_div_13_div_2_div_27_div_18_Template, 5, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", s_r4.publicationsCount, " (Q1/Q2: ", s_r4.publicationsQ1Q2Count, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r4.conferencesCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r4.trainingHours, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.manuscriptUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.antiPlagiarismReportUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.directorComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.jury == null ? null : s_r4.jury.length);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Approbation du directeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DirectorSoutenancesComponent_div_13_div_2_div_28_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submitApproval(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Commentaires (optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "textarea", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 43)(8, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_div_28_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.approve(s_r4, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u2713 Approuver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_div_28_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.approve(s_r4, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u2717 Rejeter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_div_28_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeApprovalDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.approvalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.loading);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_29_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Aucun membre. Cliquez sur + Ajouter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_29_div_10_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](role_r11);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_29_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50)(1, "div", 51)(2, "div")(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nom complet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "R\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DirectorSoutenancesComponent_div_13_div_2_div_29_div_10_option_10_Template, 2, 2, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 51)(12, "div")(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Externe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_div_29_div_10_Template_button_click_24_listener() {
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.removeJuryMember(i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", group_r13.controls.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", group_r13.controls.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.juryRoles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", group_r13.controls.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", group_r13.controls.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", group_r13.controls.external);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Proposer les membres du jury");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DirectorSoutenancesComponent_div_13_div_2_div_29_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submitJury(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 46)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Membres du jury");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_div_29_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.addJuryMember());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "+ Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DirectorSoutenancesComponent_div_13_div_2_div_29_div_9_Template, 2, 0, "div", 16)(10, DirectorSoutenancesComponent_div_13_div_2_div_29_div_10_Template, 26, 6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 43)(12, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_div_29_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeJuryDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.juryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.juryControls.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.juryControls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.juryForm.invalid || ctx_r1.loading);
  }
}
function DirectorSoutenancesComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Doctorant:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DirectorSoutenancesComponent_div_13_div_2_p_9_Template, 5, 4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 3)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Pr\u00E9requis:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 3)(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Approbation directeur:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DirectorSoutenancesComponent_div_13_div_2_span_17_Template, 2, 0, "span", 17)(18, DirectorSoutenancesComponent_div_13_div_2_span_18_Template, 2, 0, "span", 18)(19, DirectorSoutenancesComponent_div_13_div_2_span_19_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DirectorSoutenancesComponent_div_13_div_2_div_20_Template, 13, 6, "div", 20)(21, DirectorSoutenancesComponent_div_13_div_2_p_21_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DirectorSoutenancesComponent_div_13_div_2_ng_container_23_Template, 3, 0, "ng-container", 19)(24, DirectorSoutenancesComponent_div_13_div_2_button_24_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_div_13_div_2_Template_button_click_25_listener() {
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleDetails(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DirectorSoutenancesComponent_div_13_div_2_div_27_Template, 19, 8, "div", 25)(28, DirectorSoutenancesComponent_div_13_div_2_div_28_Template, 14, 3, "div", 26)(29, DirectorSoutenancesComponent_div_13_div_2_div_29_Template, 16, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r4.thesisTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r4.doctorantEmail || s_r4.doctorantAccountId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.requestedDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r4.prerequisitesValid ? "OK" : "En attente", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.directorApproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r4.directorApproved && s_r4.directorApprovalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r4.directorApprovalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.directorApproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.approachingSixYearLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canApprove(s_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canProposeJury(s_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.expandedId === s_r4.id ? "Masquer" : "D\u00E9tails", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.expandedId === s_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.approvalTarget === s_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.juryTarget === s_r4.id);
  }
}
function DirectorSoutenancesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DirectorSoutenancesComponent_div_13_div_2_Template, 30, 16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.items);
  }
}
function DirectorSoutenancesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Aucune soutenance pour ce statut.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class DirectorSoutenancesComponent {
  constructor(api, fb) {
    this.api = api;
    this.fb = fb;
    this.items = [];
    this.loading = false;
    this.feedback = '';
    this.isError = false;
    this.expandedId = null;
    this.approvalTarget = null;
    this.juryTarget = null;
    this.selectedStatus = 'SUBMITTED';
    this.statusOptions = ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'SCHEDULED', 'DEFENDED'];
    this.juryRoles = ['PRESIDENT', 'RAPPORTEUR', 'EXAMINATEUR', 'INVITE'];
    this.approvalForm = this.fb.group({
      comments: ['']
    });
    this.juryForm = this.fb.group({
      members: this.fb.array([])
    });
  }
  ngOnInit() {
    this.load();
  }
  get juryControls() {
    return this.juryForm.get('members').controls;
  }
  load() {
    this.loading = true;
    this.feedback = '';
    this.isError = false;
    this.api.listSoutenancesByStatus(this.selectedStatus).subscribe({
      next: list => {
        this.items = list;
        this.loading = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de chargement';
        this.isError = true;
        this.loading = false;
      }
    });
  }
  canApprove(s) {
    return (s.status === 'SUBMITTED' || s.status === 'UNDER_REVIEW') && !s.directorApprovalDate;
  }
  canProposeJury(s) {
    return s.directorApproved === true && (s.status === 'UNDER_REVIEW' || s.status === 'APPROVED');
  }
  toggleDetails(s) {
    this.expandedId = this.expandedId === s.id ? null : s.id;
  }
  openApprovalDialog(s) {
    this.approvalTarget = s.id;
    this.approvalForm.reset({
      comments: ''
    });
  }
  closeApprovalDialog() {
    this.approvalTarget = null;
  }
  approve(s, approved) {
    const body = {
      approved,
      comments: this.approvalForm.value.comments || undefined
    };
    this.loading = true;
    this.api.approveByDirector(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.approvalTarget = null;
        this.feedback = approved ? 'Soutenance approuvée' : 'Soutenance rejetée';
        this.isError = !approved;
      },
      error: err => {
        this.feedback = err.error?.message || "Erreur lors de l'approbation";
        this.isError = true;
        this.loading = false;
      }
    });
  }
  submitApproval(s) {
    // Not used directly, approval is done via approve() buttons
  }
  openJuryDialog(s) {
    this.juryTarget = s.id;
    const members = this.juryForm.get('members');
    members.clear();
    // Pre-populate with existing jury if any
    if (s.jury?.length) {
      s.jury.forEach(j => this.addJuryMemberWithData(j));
    }
  }
  closeJuryDialog() {
    this.juryTarget = null;
    this.juryForm.get('members').clear();
  }
  addJuryMember() {
    const group = this.fb.group({
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: [''],
      institution: [''],
      role: ['PRESIDENT', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      external: [false]
    });
    this.juryForm.get('members').push(group);
  }
  addJuryMemberWithData(j) {
    const group = this.fb.group({
      fullName: [j.fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: [j.email || ''],
      institution: [j.institution || ''],
      role: [j.role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      external: [j.external || false]
    });
    this.juryForm.get('members').push(group);
  }
  removeJuryMember(index) {
    this.juryForm.get('members').removeAt(index);
  }
  submitJury(s) {
    const members = this.juryControls.map(g => ({
      fullName: g.value.fullName,
      email: g.value.email || undefined,
      institution: g.value.institution || undefined,
      role: g.value.role,
      external: g.value.external
    }));
    const body = {
      members
    };
    this.loading = true;
    this.api.replaceJury(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.juryTarget = null;
        this.feedback = 'Jury proposé avec succès';
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur lors de la proposition du jury';
        this.isError = true;
        this.loading = false;
      }
    });
  }
  replace(updated) {
    const idx = this.items.findIndex(i => i.id === updated.id);
    if (idx >= 0) {
      this.items[idx] = updated;
    }
  }
  static {
    this.ɵfac = function DirectorSoutenancesComponent_Factory(t) {
      return new (t || DirectorSoutenancesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DirectorSoutenancesComponent,
      selectors: [["app-director-soutenances"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 6,
      consts: [[1, "panel"], [1, "flex", 2, "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "12px"], [2, "margin", "0"], [1, "muted"], [1, "flex", 2, "gap", "8px"], [2, "padding", "6px", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click", "disabled"], ["class", "badge", 3, "error", 4, "ngIf"], ["class", "panel", 4, "ngIf"], [3, "value"], [1, "badge"], [1, "stat-grid"], ["class", "stat", 4, "ngFor", "ngForOf"], [1, "stat"], [1, "badge", 2, "margin", "4px 0 8px 0"], ["class", "muted", 4, "ngIf"], ["style", "color:#5d9c6d;", 4, "ngIf"], ["style", "color:#b95858;", 4, "ngIf"], [4, "ngIf"], ["style", "margin-top:8px; padding:8px; background:var(--panel); border-radius:6px;", 4, "ngIf"], ["class", "badge", "style", "background:#e0a546; color:#2c1e07; margin-top:8px;", 4, "ngIf"], [1, "flex", 2, "gap", "6px", "flex-wrap", "wrap", "margin-top", "10px"], ["type", "button", "style", "background:#3c5d8b; color:#e7ecf7;", 3, "click", 4, "ngIf"], ["type", "button", 2, "background", "#555", "color", "#eee", 3, "click"], ["class", "card", "style", "margin-top:10px; background:var(--panel);", 4, "ngIf"], ["class", "card", "style", "margin-top:10px; background:var(--card);", 4, "ngIf"], [2, "color", "#5d9c6d"], [2, "color", "#b95858"], [2, "margin-top", "8px", "padding", "8px", "background", "var(--panel)", "border-radius", "6px"], [1, "muted", 2, "margin", "4px 0"], [1, "badge", 2, "background", "#e0a546", "color", "#2c1e07", "margin-top", "8px"], ["type", "button", 2, "background", "#5d9c6d", "color", "#0e1a11", 3, "click"], ["type", "button", 2, "background", "#3c5d8b", "color", "#e7ecf7", 3, "click"], [1, "card", 2, "margin-top", "10px", "background", "var(--panel)"], [2, "margin-top", "0"], ["style", "margin-top:10px;", 4, "ngIf"], ["target", "_blank", 3, "href"], [2, "margin-top", "10px"], [4, "ngFor", "ngForOf"], [1, "card", 2, "margin-top", "10px", "background", "var(--card)"], [3, "ngSubmit", "formGroup"], ["formControlName", "comments", "rows", "3", 2, "width", "100%"], [1, "flex", 2, "margin-top", "10px", "gap", "8px"], ["type", "button", 2, "background", "#5d9c6d", "color", "#0e1a11", 3, "click", "disabled"], ["type", "button", 2, "background", "#b95858", "color", "#fff", 3, "click", "disabled"], [1, "flex", 2, "justify-content", "space-between", "align-items", "center", "margin-bottom", "8px"], ["type", "button", 2, "padding", "6px 10px", 3, "click"], ["style", "margin-bottom:10px; padding:10px; background:var(--panel); border-radius:6px;", 4, "ngFor", "ngForOf"], ["type", "submit", 3, "disabled"], [2, "margin-bottom", "10px", "padding", "10px", "background", "var(--panel)", "border-radius", "6px"], [1, "form-row"], [3, "formControl"], [2, "display", "flex", "align-items", "center", "gap", "6px", "margin-top", "22px"], ["type", "checkbox", 2, "width", "auto", 3, "formControl"], ["type", "button", 2, "background", "#b95858", "color", "#fff", "margin-top", "6px", 3, "click"]],
      template: function DirectorSoutenancesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Gestion des soutenances (Directeur)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Approuver les demandes, proposer le jury et suivre les soutenances.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function DirectorSoutenancesComponent_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DirectorSoutenancesComponent_Template_select_change_8_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DirectorSoutenancesComponent_option_9_Template, 2, 2, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DirectorSoutenancesComponent_Template_button_click_10_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Rafra\u00EEchir");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DirectorSoutenancesComponent_span_12_Template, 2, 3, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DirectorSoutenancesComponent_div_13_Template, 3, 1, "div", 9)(14, DirectorSoutenancesComponent_div_14_Template, 3, 0, "div", 9);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedback);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.items.length && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".error[_ngcontent-%COMP%] { background: #b95858 !important; color: #fff !important; }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc291dGVuYW5jZXMvZGlyZWN0b3Itc291dGVuYW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSSxTQUFTLDhCQUE4QixFQUFFLHNCQUFzQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmVycm9yIHsgYmFja2dyb3VuZDogI2I5NTg1OCAhaW1wb3J0YW50OyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7076:
/*!*******************************************************************!*\
  !*** ./src/app/pages/soutenances/review-soutenances.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewSoutenancesComponent: () => (/* binding */ ReviewSoutenancesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api.service */ 7981);







function ReviewSoutenancesComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const st_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", st_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](st_r1);
  }
}
function ReviewSoutenancesComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", ctx_r1.isError);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.feedback);
  }
}
function ReviewSoutenancesComponent_div_13_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Souhait\u00E9e:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r3.requestedDateTime, "");
  }
}
function ReviewSoutenancesComponent_div_13_div_2_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713 Approuv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2717 Rejet\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713 Tous favorables");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" R1: ", s_r3.rapporteur1Favorable === true ? "\u2713" : s_r3.rapporteur1Favorable === false ? "\u2717" : "?", " | R2: ", s_r3.rapporteur2Favorable === true ? "\u2713" : s_r3.rapporteur2Favorable === false ? "\u2717" : "?", " ");
  }
}
function ReviewSoutenancesComponent_div_13_div_2_p_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "R\u00E9sultat:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatResult(s_r3.result));
  }
}
function ReviewSoutenancesComponent_div_13_div_2_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u26A0\uFE0F Approche limite 6 ans ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Autorisation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", s_r3.authorizationDocumentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ReviewSoutenancesComponent_div_13_div_2_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setStatus(s_r3, "UNDER_REVIEW"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Prendre en revue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setStatus(s_r3, "APPROVED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Approuver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setStatus(s_r3, "REJECTED"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rejeter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.validateJury(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Valider jury");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openRapporteurDialog(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Soumettre rapport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ReviewSoutenancesComponent_div_13_div_2_ng_container_38_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.authDocs[s_r3.id], $event) || (ctx_r1.authDocs[s_r3.id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_ng_container_38_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.authorize(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Autoriser");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.authDocs[s_r3.id]);
  }
}
function ReviewSoutenancesComponent_div_13_div_2_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectSchedule(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Planifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openResultDialog(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " D\u00E9finir r\u00E9sultat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReviewSoutenancesComponent_div_13_div_2_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Planifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReviewSoutenancesComponent_div_13_div_2_div_41_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submitSchedule(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Lieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Date/heure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 47)(11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_div_41_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancelSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.scheduleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.scheduleForm.invalid || ctx_r1.loading);
  }
}
function ReviewSoutenancesComponent_div_13_div_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Rapport du rapporteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReviewSoutenancesComponent_div_13_div_2_div_42_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submitRapporteurReport(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Num\u00E9ro du rapporteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 50)(7, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Rapporteur 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Rapporteur 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "URL du rapport");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Avis favorable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Commentaires (optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 55)(22, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Soumettre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_div_42_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancelRapporteur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.rapporteurForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.rapporteurForm.invalid || ctx_r1.loading);
  }
}
function ReviewSoutenancesComponent_div_13_div_2_div_43_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", r_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r15.label);
  }
}
function ReviewSoutenancesComponent_div_13_div_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "D\u00E9finir le r\u00E9sultat de la soutenance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReviewSoutenancesComponent_div_13_div_2_div_43_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submitResult(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Mention");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ReviewSoutenancesComponent_div_13_div_2_div_43_option_7_Template, 2, 2, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Commentaires (optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 55)(12, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_div_13_div_2_div_43_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancelResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.resultForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.resultOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.resultForm.invalid || ctx_r1.loading);
  }
}
function ReviewSoutenancesComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Doctorant:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ReviewSoutenancesComponent_div_13_div_2_p_9_Template, 4, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 3)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Docs OK:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 3)(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Jury valid\u00E9:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 3)(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Directeur:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ReviewSoutenancesComponent_div_13_div_2_span_21_Template, 2, 0, "span", 17)(22, ReviewSoutenancesComponent_div_13_div_2_span_22_Template, 2, 0, "span", 18)(23, ReviewSoutenancesComponent_div_13_div_2_span_23_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 3)(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Rapporteurs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ReviewSoutenancesComponent_div_13_div_2_span_27_Template, 2, 0, "span", 17)(28, ReviewSoutenancesComponent_div_13_div_2_span_28_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ReviewSoutenancesComponent_div_13_div_2_p_29_Template, 5, 1, "p", 16)(30, ReviewSoutenancesComponent_div_13_div_2_p_30_Template, 2, 0, "p", 20)(31, ReviewSoutenancesComponent_div_13_div_2_p_31_Template, 5, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ReviewSoutenancesComponent_div_13_div_2_button_33_Template, 2, 0, "button", 22)(34, ReviewSoutenancesComponent_div_13_div_2_button_34_Template, 2, 0, "button", 23)(35, ReviewSoutenancesComponent_div_13_div_2_button_35_Template, 2, 0, "button", 24)(36, ReviewSoutenancesComponent_div_13_div_2_button_36_Template, 2, 0, "button", 25)(37, ReviewSoutenancesComponent_div_13_div_2_button_37_Template, 2, 0, "button", 26)(38, ReviewSoutenancesComponent_div_13_div_2_ng_container_38_Template, 4, 1, "ng-container", 19)(39, ReviewSoutenancesComponent_div_13_div_2_button_39_Template, 2, 0, "button", 27)(40, ReviewSoutenancesComponent_div_13_div_2_button_40_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ReviewSoutenancesComponent_div_13_div_2_div_41_Template, 15, 2, "div", 28)(42, ReviewSoutenancesComponent_div_13_div_2_div_42_Template, 26, 4, "div", 28)(43, ReviewSoutenancesComponent_div_13_div_2_div_43_Template, 16, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r3.thesisTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r3.doctorantEmail || s_r3.doctorantAccountId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r3.requestedDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r3.prerequisitesValid ? "Oui" : "Non", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r3.juryValidated ? "Oui" : "Non", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r3.directorApproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r3.directorApproved && s_r3.directorApprovalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r3.directorApprovalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r3.allRapporteursFavorable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r3.allRapporteursFavorable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r3.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r3.approachingSixYearLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r3.authorizationDocumentUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canMove(s_r3, "UNDER_REVIEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canMove(s_r3, "APPROVED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canMove(s_r3, "REJECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canValidateJury(s_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canSubmitRapporteurReport(s_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canAuthorize(s_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canSchedule(s_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.canSetResult(s_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.scheduleTarget === s_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.rapporteurTarget === s_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.resultTarget === s_r3.id);
  }
}
function ReviewSoutenancesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReviewSoutenancesComponent_div_13_div_2_Template, 44, 25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.items);
  }
}
function ReviewSoutenancesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Aucune soutenance pour ce statut.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ReviewSoutenancesComponent {
  constructor(api, fb) {
    this.api = api;
    this.fb = fb;
    this.items = [];
    this.loading = false;
    this.feedback = '';
    this.isError = false;
    this.scheduleTarget = null;
    this.rapporteurTarget = null;
    this.resultTarget = null;
    this.selectedStatus = 'SUBMITTED';
    this.statusOptions = ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'SCHEDULED', 'DEFENDED'];
    this.authDocs = {};
    this.resultOptions = [{
      value: 'TRES_HONORABLE_AVEC_FELICITATIONS',
      label: 'Très Honorable avec Félicitations'
    }, {
      value: 'TRES_HONORABLE',
      label: 'Très Honorable'
    }, {
      value: 'HONORABLE',
      label: 'Honorable'
    }, {
      value: 'AJOURNE',
      label: 'Ajourné'
    }];
    this.scheduleForm = this.fb.group({
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      when: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.rapporteurForm = this.fb.group({
      rapporteurNumber: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      reportUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      favorable: [true],
      comments: ['']
    });
    this.resultForm = this.fb.group({
      result: ['TRES_HONORABLE', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      comments: ['']
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.feedback = '';
    this.isError = false;
    this.api.listSoutenancesByStatus(this.selectedStatus).subscribe({
      next: list => {
        this.items = list;
        this.loading = false;
        this.feedback = '';
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de chargement';
        this.isError = true;
        this.loading = false;
      }
    });
  }
  canMove(s, target) {
    if (target === 'UNDER_REVIEW') return s.status === 'SUBMITTED';
    if (target === 'APPROVED') return s.status === 'UNDER_REVIEW';
    if (target === 'REJECTED') return s.status === 'SUBMITTED' || s.status === 'UNDER_REVIEW';
    return false;
  }
  setStatus(s, status) {
    this.loading = true;
    this.api.updateSoutenanceStatus(s.id, {
      newStatus: status
    }).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de mise à jour';
        this.isError = true;
        this.loading = false;
      }
    });
  }
  canSchedule(s) {
    return (s.status === 'APPROVED' || s.status === 'SCHEDULED') && s.authorized && s.juryValidated;
  }
  canAuthorize(s) {
    // Authorization requires director approval and all rapporteurs favorable
    return (s.status === 'APPROVED' || s.status === 'SCHEDULED') && !s.authorized && s.directorApproved && s.allRapporteursFavorable;
  }
  canValidateJury(s) {
    return !s.juryValidated && (s.status === 'UNDER_REVIEW' || s.status === 'APPROVED' || s.status === 'SCHEDULED');
  }
  canSubmitRapporteurReport(s) {
    return s.directorApproved && (s.status === 'UNDER_REVIEW' || s.status === 'APPROVED');
  }
  canSetResult(s) {
    return s.status === 'DEFENDED' && !s.result;
  }
  formatResult(result) {
    const map = {
      'TRES_HONORABLE_AVEC_FELICITATIONS': 'Très Honorable avec Félicitations',
      'TRES_HONORABLE': 'Très Honorable',
      'HONORABLE': 'Honorable',
      'AJOURNE': 'Ajourné'
    };
    return map[result] || result;
  }
  selectSchedule(s) {
    this.scheduleTarget = s.id;
    this.scheduleForm.reset({
      location: s.location || s.requestedLocation || '',
      when: s.scheduledDateTime || ''
    });
  }
  cancelSchedule() {
    this.scheduleTarget = null;
  }
  submitSchedule(s) {
    if (!this.scheduleTarget || this.scheduleForm.invalid) return;
    const body = {
      location: this.scheduleForm.value.location || '',
      when: this.scheduleForm.value.when || ''
    };
    this.loading = true;
    this.api.scheduleSoutenance(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.scheduleTarget = null;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de planification';
        this.loading = false;
      }
    });
  }
  authorize(s) {
    this.loading = true;
    this.api.authorizeSoutenance(s.id, this.authDocs[s.id]).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
      },
      error: err => {
        this.feedback = err.error?.message || "Erreur lors de l'autorisation";
        this.loading = false;
      }
    });
  }
  validateJury(s) {
    this.loading = true;
    this.api.validateJury(s.id).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur validation jury';
        this.isError = true;
        this.loading = false;
      }
    });
  }
  // Rapporteur report dialog
  openRapporteurDialog(s) {
    this.rapporteurTarget = s.id;
    this.rapporteurForm.reset({
      rapporteurNumber: 1,
      reportUrl: '',
      favorable: true,
      comments: ''
    });
  }
  cancelRapporteur() {
    this.rapporteurTarget = null;
  }
  submitRapporteurReport(s) {
    if (this.rapporteurForm.invalid) return;
    const body = {
      rapporteurNumber: Number(this.rapporteurForm.value.rapporteurNumber),
      reportUrl: this.rapporteurForm.value.reportUrl || '',
      favorable: this.rapporteurForm.value.favorable || false,
      comments: this.rapporteurForm.value.comments || undefined
    };
    this.loading = true;
    this.api.submitRapporteurReport(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.rapporteurTarget = null;
        this.feedback = 'Rapport soumis avec succès';
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur soumission rapport';
        this.isError = true;
        this.loading = false;
      }
    });
  }
  // Result dialog
  openResultDialog(s) {
    this.resultTarget = s.id;
    this.resultForm.reset({
      result: 'TRES_HONORABLE',
      comments: ''
    });
  }
  cancelResult() {
    this.resultTarget = null;
  }
  submitResult(s) {
    if (this.resultForm.invalid) return;
    const body = {
      result: this.resultForm.value.result,
      comments: this.resultForm.value.comments || undefined
    };
    this.loading = true;
    this.api.setResult(s.id, body).subscribe({
      next: updated => {
        this.replace(updated);
        this.loading = false;
        this.resultTarget = null;
        this.feedback = 'Résultat enregistré';
        this.isError = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur enregistrement résultat';
        this.isError = true;
        this.loading = false;
      }
    });
  }
  replace(updated) {
    const idx = this.items.findIndex(x => x.id === updated.id);
    if (idx >= 0) {
      const copy = [...this.items];
      copy[idx] = updated;
      this.items = copy;
    }
  }
  static {
    this.ɵfac = function ReviewSoutenancesComponent_Factory(t) {
      return new (t || ReviewSoutenancesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ReviewSoutenancesComponent,
      selectors: [["app-review-soutenances"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 6,
      consts: [[1, "panel"], [1, "flex", 2, "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "12px"], [2, "margin", "0"], [1, "muted"], [1, "flex", 2, "gap", "8px"], [2, "padding", "6px", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click", "disabled"], ["class", "badge", 3, "error", 4, "ngIf"], ["class", "panel", 4, "ngIf"], [3, "value"], [1, "badge"], [1, "stat-grid"], ["class", "stat", 4, "ngFor", "ngForOf"], [1, "stat"], [1, "badge", 2, "margin", "4px 0 8px 0"], ["class", "muted", 4, "ngIf"], ["style", "color:#5d9c6d;", 4, "ngIf"], ["style", "color:#b95858;", 4, "ngIf"], [4, "ngIf"], ["class", "badge", "style", "background:#e0a546; color:#2c1e07; margin-top:8px;", 4, "ngIf"], [1, "flex", 2, "gap", "6px", "flex-wrap", "wrap", "margin-top", "6px"], ["type", "button", 3, "click", 4, "ngIf"], ["type", "button", "style", "background:#5d9c6d; color:#0e1a11;", 3, "click", 4, "ngIf"], ["type", "button", "style", "background:#b95858; color:#fff;", 3, "click", 4, "ngIf"], ["type", "button", "style", "background:#4a85c2; color:#e7ecf7;", 3, "click", 4, "ngIf"], ["type", "button", "style", "background:#8b5d9c; color:#fff;", 3, "click", 4, "ngIf"], ["type", "button", "style", "background:#3c5d8b; color:#e7ecf7;", 3, "click", 4, "ngIf"], ["class", "card", "style", "margin-top:10px; background:var(--panel);", 4, "ngIf"], [2, "color", "#5d9c6d"], [2, "color", "#b95858"], [1, "badge", 2, "background", "#5d9c6d", "color", "#0e1a11"], [1, "badge", 2, "background", "#e0a546", "color", "#2c1e07", "margin-top", "8px"], ["target", "_blank", 3, "href"], ["type", "button", 3, "click"], ["type", "button", 2, "background", "#5d9c6d", "color", "#0e1a11", 3, "click"], ["type", "button", 2, "background", "#b95858", "color", "#fff", 3, "click"], ["type", "button", 2, "background", "#4a85c2", "color", "#e7ecf7", 3, "click"], ["type", "button", 2, "background", "#8b5d9c", "color", "#fff", 3, "click"], ["placeholder", "Lien autorisation", 2, "padding", "6px", "min-width", "180px", 3, "ngModelChange", "ngModel"], ["type", "button", 2, "background", "#e0a546", "color", "#2c1e07", 3, "click"], ["type", "button", 2, "background", "#3c5d8b", "color", "#e7ecf7", 3, "click"], [1, "card", 2, "margin-top", "10px", "background", "var(--panel)"], [2, "margin-top", "0"], [3, "ngSubmit", "formGroup"], ["formControlName", "location"], ["type", "datetime-local", "formControlName", "when"], [1, "flex", 2, "margin-top", "10px"], ["type", "submit", 3, "disabled"], ["type", "button", 2, "background", "#555", "color", "#eee", 3, "click"], ["formControlName", "rapporteurNumber"], ["formControlName", "reportUrl", "placeholder", "https://..."], [2, "display", "flex", "align-items", "center", "gap", "8px", "margin", "10px 0"], ["type", "checkbox", "formControlName", "favorable", 2, "width", "auto"], ["formControlName", "comments", "rows", "2", 2, "width", "100%"], [1, "flex", 2, "margin-top", "10px", "gap", "8px"], ["formControlName", "result"]],
      template: function ReviewSoutenancesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Revue des soutenances");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Valider / rejeter les dossiers, g\u00E9rer les rapports et planifier.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ReviewSoutenancesComponent_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ReviewSoutenancesComponent_Template_select_change_8_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ReviewSoutenancesComponent_option_9_Template, 2, 2, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewSoutenancesComponent_Template_button_click_10_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Rafraichir");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ReviewSoutenancesComponent_span_12_Template, 2, 3, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ReviewSoutenancesComponent_div_13_Template, 3, 1, "div", 9)(14, ReviewSoutenancesComponent_div_14_Template, 3, 0, "div", 9);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedback);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.items.length && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".error[_ngcontent-%COMP%] { background: #b95858 !important; color: #fff !important; }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc291dGVuYW5jZXMvcmV2aWV3LXNvdXRlbmFuY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0ksU0FBUyw4QkFBOEIsRUFBRSxzQkFBc0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5lcnJvciB7IGJhY2tncm91bmQ6ICNiOTU4NTggIWltcG9ydGFudDsgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9659:
/*!************************************************************!*\
  !*** ./src/app/pages/soutenances/soutenances.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoutenancesComponent: () => (/* binding */ SoutenancesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api.service */ 7981);






function SoutenancesComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.feedback);
  }
}
function SoutenancesComponent_div_11_span_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formMessage);
  }
}
function SoutenancesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nouveau dossier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SoutenancesComponent_div_11_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11)(5, "div")(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Titre de th\u00E8se");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "R\u00E9sum\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div")(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Publications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Conf\u00E9rences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Heures de formation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11)(27, "div")(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Manuscrit (URL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div")(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Anti-plagiat (URL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11)(36, "div")(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Rapport publications (URL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div")(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Certificats formation (URL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11)(45, "div")(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Demande manuscrite (URL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div")(50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Lieu souhait\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Date souhait\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 11)(57, "div")(58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Date d'inscription initiale");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "D\u00E9rogation approuv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27)(66, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Soumettre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, SoutenancesComponent_div_11_span_68_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.createForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.createForm.invalid || ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formMessage);
  }
}
function SoutenancesComponent_div_12_div_4_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Souhait\u00E9e:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r4.requestedDateTime, "");
  }
}
function SoutenancesComponent_div_12_div_4_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Planifi\u00E9e:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", s_r4.scheduledDateTime, " @ ", s_r4.location || "\u2014", "");
  }
}
function SoutenancesComponent_div_12_div_4_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713 Approuv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2717 Rejet\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_p_17_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713 Favorables");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_p_17_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Rapporteurs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SoutenancesComponent_div_12_div_4_p_17_span_3_Template, 2, 0, "span", 34)(4, SoutenancesComponent_div_12_div_4_p_17_span_4_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.allRapporteursFavorable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r4.allRapporteursFavorable);
  }
}
function SoutenancesComponent_div_12_div_4_p_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713 Autoris\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_p_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Autorisation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SoutenancesComponent_div_12_div_4_p_18_span_3_Template, 2, 0, "span", 34)(4, SoutenancesComponent_div_12_div_4_p_18_span_4_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.authorized);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r4.authorized);
  }
}
function SoutenancesComponent_div_12_div_4_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 3)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "R\u00E9sultat:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r4.result);
  }
}
function SoutenancesComponent_div_12_div_4_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u26A0\uFE0F Approche limite 6 ans ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_div_21_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SoutenancesComponent_div_12_div_4_div_21_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.downloadAttestation(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCDC Attestation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_div_21_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SoutenancesComponent_div_12_div_4_div_21_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.downloadAutorisation(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u2705 Autorisation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_div_21_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SoutenancesComponent_div_12_div_4_div_21_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.downloadProcesVerbal(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCCB Proc\u00E8s-verbal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SoutenancesComponent_div_12_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "p", 46)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\uD83D\uDCC4 Documents disponibles:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SoutenancesComponent_div_12_div_4_div_21_button_5_Template, 2, 0, "button", 48)(6, SoutenancesComponent_div_12_div_4_div_21_button_6_Template, 2, 0, "button", 49)(7, SoutenancesComponent_div_12_div_4_div_21_button_7_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.attestationUrl || ctx_r0.canGenerateAttestation(s_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.authorizationDocumentUrl || ctx_r0.canGenerateAutorisation(s_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.procesVerbalUrl || ctx_r0.canGeneratePV(s_r4));
  }
}
function SoutenancesComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SoutenancesComponent_div_12_div_4_p_5_Template, 4, 1, "p", 33)(6, SoutenancesComponent_div_12_div_4_p_6_Template, 4, 2, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Pr\u00E9requis:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 3)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Directeur:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SoutenancesComponent_div_12_div_4_span_14_Template, 2, 0, "span", 34)(15, SoutenancesComponent_div_12_div_4_span_15_Template, 2, 0, "span", 35)(16, SoutenancesComponent_div_12_div_4_span_16_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SoutenancesComponent_div_12_div_4_p_17_Template, 5, 2, "p", 33)(18, SoutenancesComponent_div_12_div_4_p_18_Template, 5, 2, "p", 33)(19, SoutenancesComponent_div_12_div_4_p_19_Template, 5, 1, "p", 33)(20, SoutenancesComponent_div_12_div_4_p_20_Template, 2, 0, "p", 37)(21, SoutenancesComponent_div_12_div_4_div_21_Template, 8, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 39)(23, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SoutenancesComponent_div_12_div_4_Template_button_click_23_listener() {
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.loadDetails(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "D\u00E9tails");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r4.thesisTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.requestedDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.scheduledDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r4.prerequisitesValid ? "OK" : "En attente", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.directorApproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r4.directorApproved && s_r4.directorApprovalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r4.directorApprovalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.directorApproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.directorApproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r4.approachingSixYearLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasDocuments(s_r4));
  }
}
function SoutenancesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Suivi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SoutenancesComponent_div_12_div_4_Template, 25, 13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.soutenances);
  }
}
function SoutenancesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Aucune soutenance pour l'instant. Soumettez un dossier pour commencer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class SoutenancesComponent {
  constructor(fb, api) {
    this.fb = fb;
    this.api = api;
    this.me = null;
    this.soutenances = [];
    this.loading = false;
    this.feedback = '';
    this.formMessage = '';
    this.scheduleTarget = null;
    this.createForm = this.fb.group({
      thesisTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      thesisSummary: [''],
      handwrittenRequestUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      manuscriptUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      antiPlagiarismReportUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      publicationsReportUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      trainingCertificatesUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      publicationsCount: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      publicationsQ1Q2Count: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      conferencesCount: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      trainingHours: [200, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      initialEnrollmentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      derogationApproved: [false],
      desiredDateTime: [''],
      desiredLocation: [''],
      jury: this.fb.array([])
    });
    this.scheduleForm = this.fb.group({
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      when: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.juryRoles = ['PRESIDENT', 'RAPPORTEUR', 'EXAMINATEUR', 'INVITE'];
  }
  ngOnInit() {
    this.loadMe();
  }
  get juryControls() {
    return this.createForm.get('jury').controls;
  }
  addJury() {
    const group = this.fb.group({
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: [''],
      institution: [''],
      role: ['PRESIDENT', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      external: [false]
    });
    this.createForm.get('jury').push(group);
  }
  removeJury(index) {
    this.createForm.get('jury').removeAt(index);
  }
  loadMe() {
    this.loading = true;
    this.api.me().subscribe({
      next: me => {
        this.me = me;
        this.loading = false;
        this.refresh();
      },
      error: () => {
        this.me = null;
        this.loading = false;
      }
    });
  }
  refresh() {
    if (!this.me) return;
    this.loading = true;
    this.api.listSoutenancesForDoctorant(this.me.id).subscribe({
      next: list => {
        this.soutenances = list;
        this.feedback = 'Mis à jour';
        this.loading = false;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de chargement';
        this.loading = false;
      }
    });
  }
  submit() {
    if (!this.me || this.createForm.invalid) return;
    this.loading = true;
    this.formMessage = '';
    const juryPayload = this.createForm.get('jury').value || [];
    const payload = {
      ...this.createForm.value,
      doctorantAccountId: this.me.id,
      doctorantEmail: this.me.email,
      jury: juryPayload
    };
    this.api.createSoutenance(payload).subscribe({
      next: res => {
        this.formMessage = 'Soutenance soumise';
        this.loading = false;
        this.createForm.reset({
          thesisTitle: '',
          thesisSummary: '',
          handwrittenRequestUrl: '',
          manuscriptUrl: '',
          antiPlagiarismReportUrl: '',
          publicationsReportUrl: '',
          trainingCertificatesUrl: '',
          publicationsCount: 2,
          conferencesCount: 2,
          trainingHours: 200,
          desiredDateTime: '',
          desiredLocation: '',
          jury: []
        });
        this.createForm.get('jury').clear();
        this.soutenances = [res, ...this.soutenances];
      },
      error: err => {
        this.formMessage = err.error?.message || 'Erreur de soumission';
        this.loading = false;
      }
    });
  }
  canSchedule(s) {
    return (s.status === 'APPROVED' || s.status === 'SCHEDULED') && !!s.authorized && !!s.juryValidated;
  }
  selectSchedule(s) {
    this.scheduleTarget = s.id;
    this.scheduleForm.reset({
      location: s.location || s.requestedLocation || '',
      when: s.scheduledDateTime || ''
    });
  }
  cancelSchedule() {
    this.scheduleTarget = null;
  }
  submitSchedule(s) {
    if (!this.scheduleTarget || this.scheduleForm.invalid) return;
    const body = {
      location: this.scheduleForm.value.location || '',
      when: this.scheduleForm.value.when || ''
    };
    this.loading = true;
    this.api.scheduleSoutenance(s.id, body).subscribe({
      next: updated => {
        this.replaceSoutenance(updated);
        this.loading = false;
        this.scheduleTarget = null;
      },
      error: err => {
        this.feedback = err.error?.message || 'Erreur de planification';
        this.loading = false;
      }
    });
  }
  loadDetails(s) {
    this.api.getSoutenance(s.id).subscribe({
      next: full => this.replaceSoutenance(full),
      error: () => {}
    });
  }
  // --- Document handling ---
  hasDocuments(s) {
    return !!(s.attestationUrl || s.authorizationDocumentUrl || s.procesVerbalUrl || this.canGenerateAttestation(s) || this.canGenerateAutorisation(s) || this.canGeneratePV(s));
  }
  canGenerateAttestation(s) {
    // Can generate attestation if soutenance has been submitted
    return ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'SCHEDULED', 'DEFENDED', 'CLOSED'].includes(s.status);
  }
  canGenerateAutorisation(s) {
    // Can generate autorisation if soutenance is authorized
    return s.authorized === true;
  }
  canGeneratePV(s) {
    // Can generate PV if soutenance is defended with a result
    return (s.status === 'DEFENDED' || s.status === 'CLOSED') && !!s.result;
  }
  downloadAttestation(s) {
    this.api.generateAttestation(s.id).subscribe({
      next: blob => this.downloadBlob(blob, `attestation-${s.id}.pdf`),
      error: () => alert('Erreur lors du téléchargement de l\'attestation')
    });
  }
  downloadAutorisation(s) {
    this.api.generateAutorisation(s.id).subscribe({
      next: blob => this.downloadBlob(blob, `autorisation-${s.id}.pdf`),
      error: () => alert('Erreur lors du téléchargement de l\'autorisation')
    });
  }
  downloadProcesVerbal(s) {
    this.api.generateProcesVerbal(s.id).subscribe({
      next: blob => this.downloadBlob(blob, `proces-verbal-${s.id}.pdf`),
      error: () => alert('Erreur lors du téléchargement du procès-verbal')
    });
  }
  downloadBlob(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  replaceSoutenance(updated) {
    const idx = this.soutenances.findIndex(x => x.id === updated.id);
    if (idx >= 0) {
      const copy = [...this.soutenances];
      copy[idx] = updated;
      this.soutenances = copy;
    }
  }
  static {
    this.ɵfac = function SoutenancesComponent_Factory(t) {
      return new (t || SoutenancesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SoutenancesComponent,
      selectors: [["app-soutenances"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 5,
      consts: [[1, "panel"], [1, "flex", 2, "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "12px"], [2, "margin", "0"], [1, "muted"], [1, "flex", 2, "gap", "8px"], ["type", "button", 3, "click", "disabled"], ["class", "badge", 4, "ngIf"], ["class", "panel", 4, "ngIf"], [1, "badge"], [2, "margin-top", "0"], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["formControlName", "thesisTitle"], ["formControlName", "thesisSummary"], ["type", "number", "formControlName", "publicationsCount"], ["type", "number", "formControlName", "conferencesCount"], ["type", "number", "formControlName", "trainingHours"], ["formControlName", "manuscriptUrl"], ["formControlName", "antiPlagiarismReportUrl"], ["formControlName", "publicationsReportUrl"], ["formControlName", "trainingCertificatesUrl"], ["formControlName", "handwrittenRequestUrl"], ["formControlName", "desiredLocation"], ["type", "datetime-local", "formControlName", "desiredDateTime"], ["type", "date", "formControlName", "initialEnrollmentDate"], [2, "display", "flex", "align-items", "center", "gap", "6px", "margin-top", "22px"], ["type", "checkbox", "formControlName", "derogationApproved", 2, "width", "auto"], [1, "flex", 2, "margin-top", "12px", "gap", "10px"], ["type", "submit", 3, "disabled"], [1, "stat-grid"], ["class", "stat", 4, "ngFor", "ngForOf"], [1, "stat"], [1, "badge", 2, "margin", "4px 0 8px 0"], ["class", "muted", 4, "ngIf"], ["style", "color:#5d9c6d;", 4, "ngIf"], ["style", "color:#b95858;", 4, "ngIf"], [4, "ngIf"], ["class", "badge", "style", "background:#e0a546; color:#2c1e07; margin-top:8px;", 4, "ngIf"], ["class", "documents-section", "style", "margin-top:12px; padding-top:12px; border-top:1px dashed #3a3a3a;", 4, "ngIf"], [1, "flex", 2, "gap", "8px", "flex-wrap", "wrap", "margin-top", "6px"], ["type", "button", 2, "background", "#3c5d8b", "color", "#e7ecf7", 3, "click"], [2, "color", "#5d9c6d"], [2, "color", "#b95858"], [1, "badge", 2, "background", "#5d9c6d", "color", "#0e1a11"], [1, "badge", 2, "background", "#e0a546", "color", "#2c1e07", "margin-top", "8px"], [1, "documents-section", 2, "margin-top", "12px", "padding-top", "12px", "border-top", "1px dashed #3a3a3a"], [1, "muted", 2, "margin-bottom", "8px"], [1, "flex", 2, "gap", "6px", "flex-wrap", "wrap"], ["type", "button", "style", "background:#3c5d8b; color:#e7ecf7; font-size:12px; padding:6px 10px;", 3, "click", 4, "ngIf"], ["type", "button", "style", "background:#5d9c6d; color:#0e1a11; font-size:12px; padding:6px 10px;", 3, "click", 4, "ngIf"], ["type", "button", "style", "background:#8b6b3c; color:#f7f0e7; font-size:12px; padding:6px 10px;", 3, "click", 4, "ngIf"], ["type", "button", 2, "background", "#3c5d8b", "color", "#e7ecf7", "font-size", "12px", "padding", "6px 10px", 3, "click"], ["type", "button", 2, "background", "#5d9c6d", "color", "#0e1a11", "font-size", "12px", "padding", "6px 10px", 3, "click"], ["type", "button", 2, "background", "#8b6b3c", "color", "#f7f0e7", "font-size", "12px", "padding", "6px 10px", 3, "click"]],
      template: function SoutenancesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Mes soutenances");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Soumettre un dossier, suivre les statuts et planifier une date.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SoutenancesComponent_Template_button_click_8_listener() {
            return ctx.refresh();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Rafra\u00EEchir");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SoutenancesComponent_span_10_Template, 2, 1, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SoutenancesComponent_div_11_Template, 69, 3, "div", 7)(12, SoutenancesComponent_div_12_Template, 5, 1, "div", 7)(13, SoutenancesComponent_div_13_Template, 3, 0, "div", 7);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedback);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.me);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.soutenances.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.soutenances.length === 0 && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      encapsulation: 2
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
  apiUrl: 'http://localhost:8085'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 250:
/*!*******************************!*\
  !*** ./src/assets/i18n/en.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  common: {
    brand: 'Service Auth',
    heroTitle: 'Access your space',
    noAccount: "Don't have an account?",
    hasAccount: 'Already have an account?',
    session: 'Session',
    role: 'Role',
    state: 'Status',
    stateActive: 'Active',
    stateGuest: 'Guest'
  },
  controls: {
    toggleTheme: 'Theme',
    toggleLang: 'Lang',
    themeDark: 'Dark',
    themeLight: 'Light',
    langFr: 'FR',
    langEn: 'EN'
  },
  auth: {
    loginCTA: 'Sign in',
    registerCTA: 'Sign up'
  },
  nav: {
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    doctorant: 'Doctoral space',
    encadrant: 'Supervisor space',
    admin: 'Admin',
    superuser: 'Superuser',
    logout: 'Logout'
  },
  login: {
    title: 'Login',
    usernameOrEmail: 'Username or Email',
    password: 'Password',
    submit: 'Sign in'
  },
  register: {
    title: 'Register',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    role: 'Role',
    phone: 'Phone',
    submit: 'Create account',
    roles: {
      doctorant: 'Doctoral student',
      encadrant: 'Supervisor'
    }
  },
  layout: {
    portalTitle: 'Accounts & Profiles portal',
    account: 'Account',
    role: 'Role',
    dashboard: 'Dashboard',
    admin: 'Admin'
  },
  admin: {
    consoleTitle: 'Admin Console',
    badgeSuperuser: 'SUPERUSER',
    sections: {
      overview: 'Overview',
      accounts: 'All accounts',
      pending: 'Pending accounts',
      admins: 'Admins',
      structures: 'Departments & Labs',
      create: 'Create admin'
    },
    overview: {
      total: 'Total accounts',
      pending: 'Pending',
      admins: 'Admins',
      refresh: 'Refresh all'
    },
    accounts: {
      title: 'All accounts',
      refresh: 'Refresh',
      username: 'Username',
      email: 'Email',
      role: 'Role',
      status: 'Status',
      emailVerified: 'Email verified',
      yes: 'Yes',
      no: 'No'
    },
    pending: {
      title: 'Pending accounts',
      refresh: 'Refresh',
      approve: 'Approve',
      reject: 'Reject',
      none: 'No requests.'
    },
    admins: {
      title: 'Existing admins',
      refresh: 'Refresh',
      activate: 'Activate',
      suspend: 'Suspend',
      none: 'No admin.'
    },
    create: {
      title: 'Create admin account',
      username: 'Username',
      email: 'Email',
      password: 'Password',
      phone: 'Phone',
      submit: 'Create'
    },
    structures: {
      departments: 'Departments',
      laboratories: 'Laboratories',
      name: 'Name',
      description: 'Description',
      add: 'Add',
      update: 'Update',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      deleteBlocked: 'Delete blocked: linked to supervisor'
    }
  },
  dashboard: {
    tabs: {
      session: 'Session',
      account: 'My account',
      profile: 'Profile'
    },
    session: {
      title: 'Session',
      refresh: 'Refresh token',
      logout: 'Logout'
    },
    account: {
      title: 'My account',
      username: 'Username',
      email: 'Email',
      role: 'Role',
      status: 'Status',
      profileCompleted: 'Profile completed?'
    },
    profile: {
      doctorant: {
        title: 'Doctoral profile',
        firstName: 'First name',
        lastName: 'Last name',
        birthDate: 'Birth date',
        address: 'Address',
        graduationYear: 'Graduation year',
        diploma: 'Diploma',
        university: 'University',
        edit: 'Edit profile',
        save: 'Save profile',
        update: 'Update',
        cancel: 'Cancel'
      },
      encadrant: {
        title: 'Supervisor profile',
        firstName: 'First name',
        lastName: 'Last name',
        birthDate: 'Birth date',
        address: 'Address',
        grade: 'Grade',
        department: 'Department',
        laboratory: 'Laboratory',
        edit: 'Edit profile',
        save: 'Save profile',
        update: 'Update',
        cancel: 'Cancel'
      }
    }
  }
});

/***/ }),

/***/ 3477:
/*!*******************************!*\
  !*** ./src/assets/i18n/fr.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  common: {
    brand: 'Service Auth',
    heroTitle: 'Accedez a votre espace',
    noAccount: "Vous n'avez pas de compte ?",
    hasAccount: 'Vous avez deja un compte ?',
    session: 'Session',
    role: 'Role',
    state: 'Etat',
    stateActive: 'Actif',
    stateGuest: 'Invite'
  },
  controls: {
    toggleTheme: 'Theme',
    toggleLang: 'Langue',
    themeDark: 'Sombre',
    themeLight: 'Clair',
    langFr: 'FR',
    langEn: 'EN'
  },
  auth: {
    loginCTA: 'Se connecter',
    registerCTA: "S'inscrire"
  },
  nav: {
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    doctorant: 'Espace doctorant',
    encadrant: 'Espace encadrant',
    admin: 'Admin',
    superuser: 'Superuser',
    logout: 'Logout'
  },
  login: {
    title: 'Login',
    usernameOrEmail: 'Username ou Email',
    password: 'Mot de passe',
    submit: 'Se connecter'
  },
  register: {
    title: 'Inscription',
    username: 'Username',
    email: 'Email',
    password: 'Mot de passe',
    role: 'Role',
    phone: 'Telephone',
    submit: 'Creer le compte',
    roles: {
      doctorant: 'Doctorant',
      encadrant: 'Encadrant'
    }
  },
  layout: {
    portalTitle: 'Portail comptes & profils',
    account: 'Compte',
    role: 'Role',
    dashboard: 'Dashboard',
    admin: 'Admin'
  },
  admin: {
    consoleTitle: 'Console Admin',
    badgeSuperuser: 'SUPERUSER',
    sections: {
      overview: 'Vue globale',
      accounts: 'Tous les comptes',
      pending: 'Comptes en attente',
      admins: 'Admins',
      structures: 'Departements & Labos',
      create: 'Creer un admin'
    },
    overview: {
      total: 'Comptes total',
      pending: 'En attente',
      admins: 'Admins',
      refresh: 'Rafraichir tout'
    },
    accounts: {
      title: 'Tous les comptes',
      refresh: 'Rafraichir',
      username: 'Username',
      email: 'Email',
      role: 'Role',
      status: 'Status',
      emailVerified: 'Email verifie',
      yes: 'Oui',
      no: 'Non'
    },
    pending: {
      title: 'Comptes en attente',
      refresh: 'Rafraichir',
      approve: 'Approuver',
      reject: 'Rejeter',
      none: 'Aucune demande.'
    },
    admins: {
      title: 'Admins existants',
      refresh: 'Rafraichir',
      activate: 'Activer',
      suspend: 'Suspendre',
      none: 'Aucun admin.'
    },
    create: {
      title: 'Creer un compte admin',
      username: 'Username',
      email: 'Email',
      password: 'Mot de passe',
      phone: 'Telephone',
      submit: 'Creer'
    },
    structures: {
      departments: 'Departements',
      laboratories: 'Laboratoires',
      name: 'Nom',
      description: 'Description',
      add: 'Ajouter',
      update: 'Mettre à jour',
      cancel: 'Annuler',
      edit: 'Modifier',
      delete: 'Supprimer',
      deleteBlocked: 'Suppression impossible : rattache a un encadrant'
    }
  },
  dashboard: {
    tabs: {
      session: 'Session',
      account: 'Mon compte',
      profile: 'Profil'
    },
    session: {
      title: 'Session',
      refresh: 'Refresh token',
      logout: 'Logout'
    },
    account: {
      title: 'Mon compte',
      username: 'Username',
      email: 'Email',
      role: 'Role',
      status: 'Status',
      profileCompleted: 'Profil complet ?'
    },
    profile: {
      doctorant: {
        title: 'Profil doctorant',
        firstName: 'Prenom',
        lastName: 'Nom',
        birthDate: 'Date de naissance',
        address: 'Adresse',
        graduationYear: 'Annee graduation',
        diploma: 'Diplome',
        university: 'Universite',
        edit: 'Modifier le profil',
        save: 'Enregistrer profil',
        update: 'Mettre a jour',
        cancel: 'Annuler'
      },
      encadrant: {
        title: 'Profil encadrant',
        firstName: 'Prenom',
        lastName: 'Nom',
        birthDate: 'Date de naissance',
        address: 'Adresse',
        grade: 'Grade',
        department: 'Departement',
        laboratory: 'Laboratoire',
        edit: 'Modifier le profil',
        save: 'Enregistrer profil',
        update: 'Mettre a jour',
        cancel: 'Annuler'
      }
    }
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map