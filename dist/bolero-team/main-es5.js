function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/service/user.service.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(userService) {
        _classCallCheck(this, AdminComponent);

        this.userService = userService;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userService.getUserBoard().subscribe(function (data) {
            _this.board = data;
          }, function (error) {
            _this.errorMessage = "".concat(error.status, ":").concat(JSON.parse(error.error).message);
          });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 3,
      vars: 2,
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content from Server");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n", ctx.board, "\n", ctx.errorMessage, "\n");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [{
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(tokenStorage) {
        _classCallCheck(this, AppComponent);

        this.tokenStorage = tokenStorage;
        this.title = 'bolero-team';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
              if (role === 'ROLE_ADMIN') {
                _this2.authority = 'admin';
                return false;
              } // else if (role === 'ROLE_PM') {
              //   this.authority = 'pm';
              //   return false;
              // }


              _this2.authority = 'user';
              return true;
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _song_song_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./song/song.module */
    "./src/app/song/song.module.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    var routes = [{
      path: 'user',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./user/user.module */
        "./src/app/user/user.module.ts")).then(function (m) {
          return m.UserModule;
        });
      }
    }, {
      path: 'song',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./song/song.module */
        "./src/app/song/song.module.ts")).then(function (m) {
          return m.SongModule;
        });
      }
    }, {
      path: 'album',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | album-album-module */
        "album-album-module").then(__webpack_require__.bind(null,
        /*! ./album/album.module */
        "./src/app/album/album.module.ts")).then(function (m) {
          return m.AlbumModule;
        });
      }
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_16__["SongModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"].forRoot({
        config: {
          tokenGetter: function tokenGetter() {
            return window.sessionStorage.getItem('AuthToken');
          },
          whitelistedDomains: ['localhost:8080']
        }
      })], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_16__["SongModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_16__["SongModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"].forRoot({
            config: {
              tokenGetter: function tokenGetter() {
                return window.sessionStorage.getItem('AuthToken');
              },
              whitelistedDomains: ['localhost:8080']
            }
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // 'Authorization': 'Bearer ' + localStorage.getItem('AuthToken')


    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.loginUrl = 'http://localhost:8080/api/auth/signin';
        this.signupUrl = 'http://localhost:8080/api/auth/signup';
      }

      _createClass(AuthService, [{
        key: "attemptAuth",
        value: function attemptAuth(credentials) {
          return this.http.post(this.loginUrl, credentials, httpOptions);
        }
      }, {
        key: "signUp",
        value: function signUp(info) {
          return this.http.post(this.signupUrl, info, httpOptions);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/token-storage.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/token-storage.service.ts ***!
    \***********************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppAuthTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TOKEN_KEY = 'AuthToken';
    var USERNAME_KEY = 'AuthUsername';
    var AUTHORITIES_KEY = 'AuthAuthorities';

    var TokenStorageService = /*#__PURE__*/function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);

        this.roles = [];
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          window.sessionStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.sessionStorage.removeItem(TOKEN_KEY);
          window.sessionStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUsername",
        value: function saveUsername(username) {
          window.sessionStorage.removeItem(USERNAME_KEY);
          window.sessionStorage.setItem(USERNAME_KEY, username);
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return sessionStorage.getItem(USERNAME_KEY);
        }
      }, {
        key: "saveAuthorities",
        value: function saveAuthorities(authorities) {
          window.sessionStorage.removeItem(AUTHORITIES_KEY);
          window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
        }
      }, {
        key: "getAuthorities",
        value: function getAuthorities() {
          var _this3 = this;

          this.roles = [];

          if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
              _this3.roles.push(authority.authority);
            });
          }

          return this.roles;
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
      return new (t || TokenStorageService)();
    };

    TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenStorageService,
      factory: TokenStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interface/login-info.ts":
  /*!*****************************************!*\
    !*** ./src/app/interface/login-info.ts ***!
    \*****************************************/

  /*! exports provided: AuthLoginInfo */

  /***/
  function srcAppInterfaceLoginInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function () {
      return AuthLoginInfo;
    });

    var AuthLoginInfo = function AuthLoginInfo(username, password) {
      _classCallCheck(this, AuthLoginInfo);

      this.username = username;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/interface/sigup-info.ts":
  /*!*****************************************!*\
    !*** ./src/app/interface/sigup-info.ts ***!
    \*****************************************/

  /*! exports provided: SignUpInfo */

  /***/
  function srcAppInterfaceSigupInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpInfo", function () {
      return SignUpInfo;
    });

    var SignUpInfo = // name: string,
    function SignUpInfo(username, email, password, firstName, lastName, phoneNumber) {
      _classCallCheck(this, SignUpInfo);

      // this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
      this.role = ['user'];
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
    };
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _interface_login_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../interface/login-info */
    "./src/app/interface/login-info.ts");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/sweetalert2/sweetalert2.min */
    "./src/assets/sweetalert2/sweetalert2.min.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_sweetalert2_sweetalert2_min__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_19_div_1_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
      }
    }

    function LoginComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_25_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_25_div_1_Template, 2, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_25_div_2_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
      }
    }

    function LoginComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User name or Password is missing. Try again!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, tokenStorage, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = []; // login error

        this.Toast = _assets_sweetalert2_sweetalert2_min__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          console.log(this.form);
          this.loginInfo = new _interface_login_info__WEBPACK_IMPORTED_MODULE_1__["AuthLoginInfo"](this.form.username, this.form.password);
          this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this4.tokenStorage.saveToken(data.accessToken);

            _this4.tokenStorage.saveUsername(data.username);

            _this4.tokenStorage.saveAuthorities(data.authorities);

            _this4.isLoginFailed = false;
            _this4.isLoggedIn = true;
            _this4.roles = _this4.tokenStorage.getAuthorities();

            _this4.router.navigate(['/song']);
          }, function (error) {
            console.log(error);
            _this4.errorMessage = error.error.message; // this.errorMessage = 'User name or Password is missing. Try again!';

            _this4.isLoginFailed = true;

            _this4.createFail();
          });
        }
      }, {
        key: "reloadPage",
        value: function reloadPage() {
          window.location.reload();
        }
      }, {
        key: "createFail",
        value: function createFail() {
          this.Toast.fire({
            icon: 'error',
            title: 'Login failed'
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 44,
      vars: 5,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://fonts.googleapis.com/css?family=Kaushan+Script", "rel", "stylesheet"], ["href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "container"], [1, "row"], [1, "col-md-5", "mx-auto"], ["id", "first", 2, "margin-top", "100px"], [1, "myform", "form"], [1, "logo", "mb-3"], [1, "col-md-12", "text-center"], ["action", "", "method", "post", "name", "login", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "email", "name", "username", "aria-describedby", "emailHelp", "placeholder", "Enter Username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], [4, "ngIf"], ["type", "password", "name", "password", "required", "", "minlength", "6", "aria-describedby", "emailHelp", "placeholder", "Enter Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-center"], ["href", "#"], ["type", "submit", 1, "btn", "btn-block", "mybtn", "btn-primary", "tx-tfm"], ["routerLink", "../register", "id", "signup"], ["routerLink", "../song"], ["style", "color: red; padding-left: 55px; font-size: 17px", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"], [2, "color", "red", "padding-left", "55px", "font-size", "17px"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return _r0.form.valid && ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.form.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "By signing up you accept our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Terms Of Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Don't have account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sign up here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Go home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, LoginComponent_div_43_Template, 3, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted && _r1.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted && _r3.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%]{\r\n  padding-top:4.2rem;\r\n  padding-bottom:4.2rem;\r\n  background:rgba(0, 0, 0, 0.76);\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration:none !important;\r\n}\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\r\n  font-family: 'Kaushan Script', cursive;\r\n}\r\n.myform[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  padding: 1rem;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  pointer-events: auto;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0,0,0,.2);\r\n  border-radius: 1.1rem;\r\n  outline: 0;\r\n  max-width: 500px;\r\n}\r\n.tx-tfm[_ngcontent-%COMP%]{\r\n  text-transform:uppercase;\r\n}\r\n.mybtn[_ngcontent-%COMP%]{\r\n  border-radius:50px;\r\n}\r\n.login-or[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: #aaa;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.span-or[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: -2px;\r\n  margin-left: -25px;\r\n  background-color: #fff;\r\n  width: 50px;\r\n  text-align: center;\r\n}\r\n.hr-or[_ngcontent-%COMP%] {\r\n  height: 1px;\r\n  margin-top: 0px !important;\r\n  margin-bottom: 0px !important;\r\n}\r\n.google[_ngcontent-%COMP%] {\r\n  color:#666;\r\n  width:100%;\r\n  height:40px;\r\n  text-align:center;\r\n  outline:none;\r\n  border: 1px solid lightgrey;\r\n}\r\nform[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\r\n  color: #ff0000;\r\n}\r\n#second[_ngcontent-%COMP%]{display:none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTTtBQUNOLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsSUFBSTtBQUNKLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QixJQUFJO0FBQ0osMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFFdEIsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLElBQUk7QUFDSiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLHNDQUFzQztBQUN0QyxJQUFJO0FBQ0osaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5QixzQ0FBc0M7QUFDdEMsSUFBSTtBQUVKLG1DQUFtQztBQUNuQyx3QkFBd0I7QUFDeEIsSUFBSTtBQUNKLHVDQUF1QztBQUN2Qyx3QkFBd0I7QUFDeEIsSUFBSTtBQUVKLGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsSUFBSTtBQUVKLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsYUFBYTtBQUNiLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0QixJQUFJO0FBRUosNkNBQTZDO0FBQzdDLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosOEJBQThCO0FBQzlCLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyxJQUFJO0FBRUoseURBQXlEO0FBQ3pELGlCQUFpQjtBQUNqQixrQ0FBa0M7QUFDbEMsSUFBSTtBQUVKO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFFbEIsYUFBYTtFQUNiLGFBQWE7RUFFYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxRQUFRLFlBQVksQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypoMnsqL1xyXG4vKiAgbWFyZ2luLXRvcDogMTMwcHg7Ki9cclxuLyogIHRleHQtYWxpZ246IGNlbnRlcjsqL1xyXG4vKn0qL1xyXG4vKmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHsqL1xyXG4vKiAgISp3aWR0aDogMjAwJTsqISovXHJcbi8qICBtYXgtd2lkdGg6IDMwMHB4OyovXHJcbi8qICBib3JkZXI6IDJweCBzb2xpZCAjYWFhOyovXHJcbi8qICBib3JkZXItcmFkaXVzOiA0cHg7Ki9cclxuLyogIG1hcmdpbjogNTBweCAwOyovXHJcbi8qICBvdXRsaW5lOiBub25lOyovXHJcbi8qICBwYWRkaW5nOiAycHg7Ki9cclxuLyogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cclxuLyogIHRyYW5zaXRpb246IDAuM3M7Ki9cclxuLyp9Ki9cclxuLyppbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0geyovXHJcbi8qICAhKndpZHRoOiAyMDAlOyohKi9cclxuLyogIG1heC13aWR0aDogMzAwcHg7Ki9cclxuXHJcbi8qICBib3JkZXI6IDJweCBzb2xpZCAjYWFhOyovXHJcbi8qICBib3JkZXItcmFkaXVzOiA0cHg7Ki9cclxuLyogIG1hcmdpbjogNTBweCAwOyovXHJcbi8qICBvdXRsaW5lOiBub25lOyovXHJcbi8qICBwYWRkaW5nOiAycHg7Ki9cclxuLyogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cclxuLyogIHRyYW5zaXRpb246IDAuM3M7Ki9cclxuLyp9Ki9cclxuLyppbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7Ki9cclxuLyogIGJvcmRlci1jb2xvcjogZG9kZ2VyQmx1ZTsqL1xyXG4vKiAgYm94LXNoYWRvdzogMCAwIDhweCAwIGRvZGdlckJsdWU7Ki9cclxuLyp9Ki9cclxuLyppbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMgeyovXHJcbi8qICBib3JkZXItY29sb3I6IGRvZGdlckJsdWU7Ki9cclxuLyogIGJveC1zaGFkb3c6IDAgMCA4cHggMCBkb2RnZXJCbHVlOyovXHJcbi8qfSovXHJcblxyXG4vKi5mb3JtLWlucHV0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHsqL1xyXG4vKiAgcGFkZGluZy1sZWZ0OiA0MHB4OyovXHJcbi8qfSovXHJcbi8qLmZvcm0taW5wdXQgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHsqL1xyXG4vKiAgcGFkZGluZy1sZWZ0OiA0MHB4OyovXHJcbi8qfSovXHJcblxyXG4vKi5mb3JtLWlucHV0IHsqL1xyXG4vKiAgcG9zaXRpb246IHJlbGF0aXZlOyovXHJcbi8qfSovXHJcblxyXG4vKi5mb3JtLWlucHV0IGkgeyovXHJcbi8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cclxuLyogIGxlZnQ6IDA7Ki9cclxuLyogIHRvcDogMDsqL1xyXG4vKiAgcGFkZGluZzogM3B4IDZweDsqL1xyXG4vKiAgY29sb3I6ICMwNjJjMzM7Ki9cclxuLyogIHRyYW5zaXRpb246IDAuM3M7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmZvcm0taW5wdXQgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMgKyBpIHsqL1xyXG4vKiAgY29sb3I6IGRvZGdlckJsdWU7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmZvcm0taW5wdXQuaW5wdXRJY29uQmcgaSB7Ki9cclxuLyogIGJhY2tncm91bmQtY29sb3I6ICNhYWE7Ki9cclxuLyogIGNvbG9yOiAjZmZmOyovXHJcbi8qICBwYWRkaW5nOiA5cHggNHB4OyovXHJcbi8qICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDsqL1xyXG4vKn0qL1xyXG5cclxuLyouZm9ybS1pbnB1dC5pbnB1dEljb25CZyBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyArIGkgeyovXHJcbi8qICBjb2xvcjogI2ZmZjsqL1xyXG4vKiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyQmx1ZTsqL1xyXG4vKn0qL1xyXG5cclxuYm9keXtcclxuICBwYWRkaW5nLXRvcDo0LjJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206NC4ycmVtO1xyXG4gIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjc2KTtcclxufVxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuaDEsaDIsaDN7XHJcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XHJcbn1cclxuLm15Zm9ybXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuLnR4LXRmbXtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbn1cclxuLm15YnRue1xyXG4gIGJvcmRlci1yYWRpdXM6NTBweDtcclxufVxyXG5cclxuLmxvZ2luLW9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zcGFuLW9yIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogLTJweDtcclxuICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhyLW9yIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uZ29vZ2xlIHtcclxuICBjb2xvcjojNjY2O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxufVxyXG5mb3JtIC5lcnJvciB7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuI3NlY29uZHtkaXNwbGF5Om5vbmU7fVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _interface_sigup_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../interface/sigup-info */
    "./src/app/interface/sigup-info.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _song_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../song/header/header.component */
    "./src/app/song/header/header.component.ts");
    /* harmony import */


    var _song_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../song/welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _song_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../song/footer/footer.component */
    "./src/app/song/footer/footer.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function RegisterComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your registration is successful. Please login! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "firstName is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_template_8_div_9_div_1_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
      }
    }

    function RegisterComponent_ng_template_8_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lastName is required(*)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_template_8_div_15_div_1_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.required);
      }
    }

    function RegisterComponent_ng_template_8_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_template_8_div_21_div_1_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);
      }
    }

    function RegisterComponent_ng_template_8_div_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_27_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_template_8_div_27_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_ng_template_8_div_27_div_2_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.email);
      }
    }

    function RegisterComponent_ng_template_8_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_template_8_div_33_div_1_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.required);
      }
    }

    function RegisterComponent_ng_template_8_div_39_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_39_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_template_8_div_39_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_ng_template_8_div_39_div_2_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors.minlength);
      }
    }

    function RegisterComponent_ng_template_8_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register Success! Please login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_ng_template_8_Template_form_ngSubmit_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r3.form.valid && ctx_r26.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name(*)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.form.firstName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_ng_template_8_div_9_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name(*)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.form.lastName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterComponent_ng_template_8_div_15_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone number(*)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.form.phoneNumber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_ng_template_8_div_21_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email(*)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterComponent_ng_template_8_div_27_Template, 3, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Username(*)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.form.username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegisterComponent_ng_template_8_div_33_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Password(*)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RegisterComponent_ng_template_8_div_39_Template, 3, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegisterComponent_ng_template_8_div_43_Template, 3, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RegisterComponent_ng_template_8_div_44_Template, 3, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.submitted && _r4.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.submitted && _r6.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.phoneNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.submitted && _r8.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.submitted && _r10.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.submitted && _r12.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.submitted && _r14.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isSignUpFailed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isSignedUp);
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService, router) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.router = router;
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          this.signupInfo = new _interface_sigup_info__WEBPACK_IMPORTED_MODULE_1__["SignUpInfo"]( // this.form.name,
          this.form.username, this.form.email, this.form.password, this.form.firstName, this.form.lastName, this.form.phoneNumber);
          this.authService.signUp(this.signupInfo).subscribe(function (data) {
            console.log(data);
            _this5.isSignedUp = true;
            _this5.isSignUpFailed = false; // this.router.navigate(['/song']);
          }, function (error) {
            console.log(error); // this.errorMessage = error.error.message;

            _this5.isSignUpFailed = true;
            _this5.isSignedUp = false;
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 11,
      vars: 2,
      consts: [[1, "container", 2, "text-align", "center", "font-size", "40px"], [1, "card", "col-xl-8", "col-md-10", "mx-auto"], [1, "card-body", 2, "color", "red"], [4, "ngIf", "ngIfElse"], ["signupForm", ""], [1, "container"], [1, "row", "col-lg-12", 2, "width", "900px"], ["name", "form", "novalidate", "", 2, "width", "600px", "margin-left", "100px", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], [4, "ngIf"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["type", "text", "name", "phoneNumber", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phoneNumber", "ngModel"], ["type", "text", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary"], ["class", "alert alert-warning", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"], [1, "alert", "alert-warning"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegisterComponent_div_7_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterComponent_ng_template_8_Template, 45, 14, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignedUp)("ngIfElse", _r1);
        }
      },
      directives: [_song_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _song_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeAreaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _song_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/album.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/album.service.ts ***!
    \******************************************/

  /*! exports provided: AlbumService */

  /***/
  function srcAppServiceAlbumServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumService", function () {
      return AlbumService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AlbumService = /*#__PURE__*/function () {
      function AlbumService(httpClient) {
        _classCallCheck(this, AlbumService);

        this.httpClient = httpClient;
        this.API_URL_CREATE_ALBUM = 'http://localhost:8080/album/create';
        this.API_URL_ALBUM = 'http://localhost:8080/album';
        this.API_URL_ALBUM_BY_ID = 'http://localhost:8080/album';
        this.API_URL_DELETE_ALBUM_BY_ID = 'http://localhost:8080/album';
        this.API_URL_ALBUMS_BY_USER_ID = 'http://localhost:8080/album/user';
      }

      _createClass(AlbumService, [{
        key: "createAlbum",
        value: function createAlbum(album) {
          return this.httpClient.post(this.API_URL_CREATE_ALBUM, album);
        }
      }, {
        key: "getAllAlbum",
        value: function getAllAlbum() {
          return this.httpClient.get(this.API_URL_ALBUM);
        }
      }, {
        key: "getAllAlbumByUserId",
        value: function getAllAlbumByUserId(id) {
          return this.httpClient.get("".concat(this.API_URL_ALBUMS_BY_USER_ID, "/").concat(id));
        }
      }, {
        key: "getSongByAlbumId",
        value: function getSongByAlbumId(id) {
          return this.httpClient.get("".concat(this.API_URL_ALBUM_BY_ID, "/").concat(id));
        }
      }, {
        key: "deleteAlbum",
        value: function deleteAlbum(id) {
          return this.httpClient["delete"](this.API_URL_DELETE_ALBUM_BY_ID + "/".concat(id));
        }
      }]);

      return AlbumService;
    }();

    AlbumService.ɵfac = function AlbumService_Factory(t) {
      return new (t || AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AlbumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlbumService,
      factory: AlbumService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/like.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/like.service.ts ***!
    \*****************************************/

  /*! exports provided: LikeService */

  /***/
  function srcAppServiceLikeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LikeService", function () {
      return LikeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LikeService = /*#__PURE__*/function () {
      function LikeService(httpClient) {
        _classCallCheck(this, LikeService);

        this.httpClient = httpClient; // like: Like[] = [];

        this.API_URL_LIKE = 'http://localhost:8080/likes';
      }

      _createClass(LikeService, [{
        key: "likes",
        value: function likes(like) {
          return this.httpClient.post(this.API_URL_LIKE, like);
        }
      }]);

      return LikeService;
    }();

    LikeService.ɵfac = function LikeService_Factory(t) {
      return new (t || LikeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LikeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LikeService,
      factory: LikeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/search.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/search.service.ts ***!
    \*******************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppServiceSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchService = /*#__PURE__*/function () {
      function SearchService() {
        _classCallCheck(this, SearchService);

        this.song = [];
        this.value = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.list = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.song);
      }

      _createClass(SearchService, [{
        key: "changeValue",
        value: function changeValue(message, song) {
          this.value.next(message);
          this.list.next(song);
        }
      }]);

      return SearchService;
    }();

    SearchService.ɵfac = function SearchService_Factory(t) {
      return new (t || SearchService)();
    };

    SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/song.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/song.service.ts ***!
    \*****************************************/

  /*! exports provided: SongService */

  /***/
  function srcAppServiceSongServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongService", function () {
      return SongService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // const API_SONG = 'http://localhost:8080/song';


    var SongService = /*#__PURE__*/function () {
      function SongService(httpClient) {
        _classCallCheck(this, SongService);

        this.httpClient = httpClient;
        this.API_URL_CREATE_SONG = 'http://localhost:8080/song/create';
        this.API_SONG = 'http://localhost:8080/song';
        this.API_SONG_FIND = 'http://localhost:8080/findByName';
        this.API_LATEST_SONG = 'http://localhost:8080/latest-song';
        this.API_ALL_SONG_BY_USER_ID = 'http://localhost:8080/song/mylist';
        this.API_MOST_VIEWS_SONG = 'http://localhost:8080/most-views-song';
        this.API_MOST_LIKES_SONG = 'http://localhost:8080/most-like-song';
        this.API_LIKE_SONG = 'http://localhost:8080/like';
      }

      _createClass(SongService, [{
        key: "addSong",
        value: function addSong(song) {
          return this.httpClient.post(this.API_URL_CREATE_SONG, song);
        }
      }, {
        key: "updateSong",
        value: function updateSong(song) {
          return this.httpClient.put("".concat(this.API_SONG, "/").concat(song.id), song);
        }
      }, {
        key: "getSongById",
        value: function getSongById(id) {
          return this.httpClient.get("".concat(this.API_SONG, "/").concat(id));
        }
      }, {
        key: "getAllSongByUserId",
        value: function getAllSongByUserId(id) {
          return this.httpClient.get("".concat(this.API_ALL_SONG_BY_USER_ID, "/").concat(id));
        }
      }, {
        key: "getSongByName",
        value: function getSongByName(name) {
          return this.httpClient.get("".concat(this.API_SONG_FIND, "/").concat(name));
        }
      }, {
        key: "deleteSong",
        value: function deleteSong(id) {
          return this.httpClient["delete"](this.API_SONG + "/".concat(id));
        }
      }, {
        key: "getAllSongsLatest",
        value: function getAllSongsLatest() {
          return this.httpClient.get(this.API_LATEST_SONG);
        } // detailSong(id: string): Observable<Song> {
        //   return this.httpClient.get<Song>(this.API_SONG + `/${id}`);
        // }

      }, {
        key: "getAllSongs",
        value: function getAllSongs() {
          return this.httpClient.get(this.API_SONG);
        }
      }, {
        key: "getMostViewSong",
        value: function getMostViewSong() {
          return this.httpClient.get(this.API_MOST_VIEWS_SONG);
        }
      }, {
        key: "likeSong",
        value: function likeSong(like, id) {
          return this.httpClient.put("".concat(this.API_LIKE_SONG, "/").concat(id), like);
        }
      }, {
        key: "getSongHaveMostLike",
        value: function getSongHaveMostLike() {
          return this.httpClient.get(this.API_MOST_LIKES_SONG);
        }
      }]);

      return SongService;
    }();

    SongService.ɵfac = function SongService_Factory(t) {
      return new (t || SongService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SongService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SongService,
      factory: SongService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/style.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/style.service.ts ***!
    \******************************************/

  /*! exports provided: StyleService */

  /***/
  function srcAppServiceStyleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleService", function () {
      return StyleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StyleService = /*#__PURE__*/function () {
      function StyleService(httpClient) {
        _classCallCheck(this, StyleService);

        this.httpClient = httpClient;
        this.API_URL_STYLE_LIST = 'http://localhost:8080/style';
      }

      _createClass(StyleService, [{
        key: "findAll",
        value: function findAll() {
          return this.httpClient.get(this.API_URL_STYLE_LIST);
        }
      }]);

      return StyleService;
    }();

    StyleService.ɵfac = function StyleService_Factory(t) {
      return new (t || StyleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    StyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StyleService,
      factory: StyleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/user.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/user.service.ts ***!
    \*****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
        this.API_URL_REGISTER = 'http://localhost:8080/register';
        this.API_URL_UPDATE_PASSWORD = 'http://localhost:8080/api/auth/updateUser'; // private readonly API_URL_GET_USER = 'http://localhost:8080/user/' ;

        this.API_URL_GET_USER_BY_NAME = 'http://localhost:8080/user'; // private readonly API_URL_USER_INFO = 'http://localhost:8080/user' ;

        this.API_URL_PROFILE = 'http://localhost:8080/user';
        this.API__PROFILE = 'http://localhost:8080/user';
        this.userUrl = 'http://localhost:8080/api/test/user';
      }

      _createClass(UserService, [{
        key: "getUserBoard",
        value: function getUserBoard() {
          return this.httpClient.get(this.userUrl, {
            responseType: 'text'
          });
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          return this.httpClient.post(this.API_URL_REGISTER, user);
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(oldPassword, newPassword) {
          return this.httpClient.put("".concat(this.API_URL_UPDATE_PASSWORD, "?oldPassword=").concat(oldPassword, "&newPassword=").concat(newPassword), null);
        } // getUserById(id: number): Observable<User>{
        //   return this.httpClient.get<any>(this.API_URL_GET_USER);
        // }
        //
        // getUserInfo(id: number): Observable<User>{
        //   return this.httpClient.get<any>(this.API_URL_USER_INFO + `/${id}`);
        // }

      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.httpClient.put("".concat(this.API__PROFILE, "/").concat(user.username), user);
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return this.httpClient.get("".concat(this.API_URL_PROFILE, "/").concat(id));
        }
      }, {
        key: "getUserByUserName",
        value: function getUserByUserName(name) {
          return this.httpClient.get("".concat(this.API_URL_GET_USER_BY_NAME, "/").concat(name));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/add-song/add-song.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/song/add-song/add-song.component.ts ***!
    \*****************************************************/

  /*! exports provided: AddSongComponent */

  /***/
  function srcAppSongAddSongAddSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSongComponent", function () {
      return AddSongComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/sweetalert2/sweetalert2.min.js */
    "./src/assets/sweetalert2/sweetalert2.min.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _service_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/style.service */
    "./src/app/service/style.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ckeditor4-angular */
    "./node_modules/ckeditor4-angular/__ivy_ngcc__/fesm2015/ckeditor4-angular.js");

    function AddSongComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required and min length is 1 and max length is 100 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddSongComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Singer is required and min length is 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddSongComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Author is required and min length is 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddSongComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Lyrics is required and min length is 10 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddSongComponent_option_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var style_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", style_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](style_r5.name);
      }
    }

    var AddSongComponent = /*#__PURE__*/function () {
      function AddSongComponent(songService, styleService, fb, router, storage, tokenService, userService) {
        _classCallCheck(this, AddSongComponent);

        this.songService = songService;
        this.styleService = styleService;
        this.fb = fb;
        this.router = router;
        this.storage = storage;
        this.tokenService = tokenService;
        this.userService = userService;
        this.Toast = _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        this.selectedMusic = null;
        this.selectedImage = null;
        this.songList = [];
        this.styleList = [];
      }

      _createClass(AddSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.getUserInfor(); // console.log(this.info.username);

          if (this.info.username !== '') {
            this.getUserDetail();
          }

          this.songForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            lyrics: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            singer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            // image: ['', [Validators.required]],
            // fileMp3: ['', [Validators.required]],
            // user: [''],
            style: this.fb.group({
              id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            })
          });
          this.styleService.findAll().subscribe(function (next) {
            return _this6.styleList = next;
          }, function (error) {
            return _this6.styleList = [];
          });
          console.log(this.styleList);
        }
      }, {
        key: "onRemove",
        value: function onRemove(event) {
          console.log(event);
          this.songList.splice(this.songList.indexOf(event), 1);
        }
      }, {
        key: "upload1",
        value: function upload1() {
          var filePath = "databasezingmp3.appspot.com/".concat(this.selectedImage.name.split('.').slice(0, -1).join('.'), "_").concat(new Date().getTime());
          return this.storage.upload(filePath, this.selectedImage).snapshotChanges().toPromise();
        }
      }, {
        key: "upload2",
        value: function upload2() {
          var filePath2 = "databasezingmp3.appspot.com/".concat(this.selectedMusic.name.split('.').slice(0, -1).join('.'), "_").concat(new Date().getTime());
          var fileRef2 = this.storage.ref(filePath2);
          return this.storage.upload(filePath2, this.selectedMusic).snapshotChanges().toPromise();
        }
      }, {
        key: "onchangeImage",
        value: function onchangeImage(event) {
          if (event.target.files[0] !== null) {
            this.selectedImage = event.target.files[0];
            console.log(this.selectedImage);
          }
        }
      }, {
        key: "onchangeMusic",
        value: function onchangeMusic(event) {
          if (event.target.files[0] !== null) {
            this.selectedMusic = event.target.files[0];
            console.log(this.selectedMusic);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            var value, upload1, upload2;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    value = this.songForm.value;
                    upload1 = this.upload1();
                    upload2 = this.upload2();
                    Promise.all([upload1, upload2]).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this8 = this;

                        var picture, music, song;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(result);
                                _context.next = 3;
                                return result[0].ref.getDownloadURL();

                              case 3:
                                picture = _context.sent;
                                _context.next = 6;
                                return result[1].ref.getDownloadURL();

                              case 6:
                                music = _context.sent;
                                console.log(picture);
                                console.log(music);
                                song = {
                                  name: value.name,
                                  singer: value.singer,
                                  author: value.author,
                                  lyrics: value.lyrics,
                                  image: picture,
                                  fileMp3: music,
                                  style: value.style,
                                  user: {
                                    id: this.userCurrent.id
                                  }
                                };
                                this.songService.addSong(song).subscribe(function () {
                                  console.log(song);

                                  _this8.createSuccess();

                                  _this8.songForm.reset();
                                }, function (e) {
                                  _this8.createFail();

                                  console.log(e);
                                });
                                _context.next = 13;
                                return this.router.navigate(['/list']);

                              case 13:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "createSuccess",
        value: function createSuccess() {
          this.Toast.fire({
            icon: 'success',
            title: ' create success '
          });
        }
      }, {
        key: "createFail",
        value: function createFail() {
          this.Toast.fire({
            icon: 'error',
            title: 'create fail'
          });
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          };
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          var _this9 = this;

          this.userService.getUserByUserName(this.info.username).subscribe(function (data) {
            _this9.userCurrent = data;
            console.log(_this9.userCurrent);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return AddSongComponent;
    }();

    AddSongComponent.ɵfac = function AddSongComponent_Factory(t) {
      return new (t || AddSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_style_service__WEBPACK_IMPORTED_MODULE_5__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]));
    };

    AddSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddSongComponent,
      selectors: [["app-add-song"]],
      decls: 62,
      vars: 8,
      consts: [[1, "container", 2, "text-align", "center", "font-size", "40px"], [1, "main-container", 2, "margin-top", "50px"], [1, "row", "section"], [1, "col-xl-8", "col-md-10", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "ng-untouched", "ng-pristine", "ng-valid", 3, "formGroup", "ngSubmit"], [1, "form-row", "form-group"], ["for", "name", 1, "col-lg-3", "text-md-right", "col-form-label"], [1, "col-lg-9"], ["id", "name", "type", "text", "formControlName", "name", 1, "form-control"], ["style", "color: red", 4, "ngIf"], ["for", "singer", 1, "col-lg-3", "text-md-right", "col-form-label"], ["id", "singer", "type", "text", "formControlName", "singer", 1, "form-control"], ["for", "author", 1, "col-lg-3", "text-md-right", "col-form-label"], ["id", "author", "type", "text", "formControlName", "author", 1, "form-control"], [1, "col-lg-3", "text-md-right", "col-form-label"], ["type", "file", 3, "change"], ["formControlName", "lyrics"], ["formGroupName", "style", 1, "form-row", "form-group"], ["formControlName", "id", 1, "col-lg-9", 2, "color", "black", "height", "30px"], ["value", "", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9", "btn-inline"], ["type", "button", "routerLink", "/song", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-outline-success", 3, "disabled"], [2, "color", "red"], [3, "value"]],
      template: function AddSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " ADD NEW SONG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddSongComponent_Template_form_ngSubmit_12_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Song Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddSongComponent_div_18_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Singer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddSongComponent_div_24_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddSongComponent_div_30_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Song Cover Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddSongComponent_Template_input_change_35_listener($event) {
            return ctx.onchangeImage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Song File");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddSongComponent_Template_input_change_40_listener($event) {
            return ctx.onchangeMusic($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Lyrics Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "ckeditor", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AddSongComponent_div_46_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Style");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Choose style");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, AddSongComponent_option_53_Template, 2, 2, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Save Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.songForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("name").invalid && ctx.songForm.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("singer").invalid && ctx.songForm.get("singer").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("author").invalid && ctx.songForm.get("author").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("lyrics").invalid && ctx.songForm.get("lyrics").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.styleList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.songForm.invalid);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeAreaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy9hZGQtc29uZy9hZGQtc29uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL3NvbmcvYWRkLXNvbmcvYWRkLXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmZvcm0tY29udHJvbHsqL1xyXG4vKiAgd2lkdGg6IDUwMHB4OyovXHJcbi8qfSovXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add-song',
          templateUrl: './add-song.component.html',
          styleUrls: ['./add-song.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]
        }, {
          type: _service_style_service__WEBPACK_IMPORTED_MODULE_5__["StyleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/all-song/all-song.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/song/all-song/all-song.component.ts ***!
    \*****************************************************/

  /*! exports provided: AllSongComponent */

  /***/
  function srcAppSongAllSongAllSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllSongComponent", function () {
      return AllSongComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/search.service */
    "./src/app/service/search.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _service_like_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/like.service */
    "./src/app/service/like.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../listen-bar/listen-bar.component */
    "./src/app/song/listen-bar/listen-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/song/details", a1];
    };

    function AllSongComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "By ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllSongComponent_div_32_Template_a_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var song_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onLike(ctx_r2.user.id, song_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Download (12)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, song_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, song_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.style.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", song_r1.dateSubmitted, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Like (", song_r1.likes.length, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Views (", song_r1.views, ")");
      }
    }

    var _c1 = function _c1() {
      return ["/song"];
    };

    var _c2 = function _c2() {
      return ["/latest-song"];
    };

    var _c3 = function _c3() {
      return ["/song/most-views-song"];
    };

    var AllSongComponent = /*#__PURE__*/function () {
      function AllSongComponent(songService, searchService, tokenService, userService, likeService) {
        _classCallCheck(this, AllSongComponent);

        this.songService = songService;
        this.searchService = searchService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.likeService = likeService;
        this.songList = [];
      }

      _createClass(AllSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.getUserInfor();

          if (this.info.username !== '') {
            this.getUserDetail();
          }

          this.getListSearch();
          this.songService.getAllSongs().subscribe(function (next) {
            _this10.songList = next;
          }, function (error) {
            return _this10.songList = [];
          });
          this.getUserInfor();
        }
      }, {
        key: "getListSearch",
        value: function getListSearch() {
          var _this11 = this;

          this.searchService.list.subscribe(function (data) {
            _this11.songList = data;
            console.log(_this11.songList);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          console.log(changes);
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          };
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          var _this12 = this;

          this.userService.getUserByUserName(this.info.username).subscribe(function (data) {
            _this12.user = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "onLike",
        value: function onLike(idUser, idSong) {
          var _this13 = this;

          var like = {
            user: idUser
          };
          like.user = this.convertToUser(idUser);
          this.songService.likeSong(like, idSong).subscribe(function (next) {
            _this13.getAllSong();
          }, function (e) {
            console.log(e);
          });
        }
      }, {
        key: "getAllSong",
        value: function getAllSong() {
          var _this14 = this;

          this.songService.getAllSongs().subscribe(function (next) {
            _this14.songList = next;
          }, function (error) {
            return _this14.songList = [];
          });
        }
      }, {
        key: "convertToUser",
        value: function convertToUser(idUser) {
          var user = {
            id: idUser
          };
          return user;
        }
      }]);

      return AllSongComponent;
    }();

    AllSongComponent.ɵfac = function AllSongComponent_Factory(t) {
      return new (t || AllSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_like_service__WEBPACK_IMPORTED_MODULE_5__["LikeService"]));
    };

    AllSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllSongComponent,
      selectors: [["app-all-song"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 38,
      vars: 8,
      consts: [[1, "poca-latest-epiosodes", "section-padding-80"], [1, "container"], [1, "row"], [1, "poca-projects-menu", "mb-30"], [1, "text-center", "portfolio-menu"], ["data-filter", ".media", 1, "btn"], [3, "routerLink"], ["data-filter", ".tech", 1, "btn"], ["data-filter", ".tutor", 1, "btn"], [1, "col-12"], [1, "section-heading", "text-center"], [1, "line"], [1, "row", "poca-portfolio"], ["class", "col-12 col-md-4 single_gallery_item ", "data-wow-delay", "0.2s", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center"], ["href", "#", 1, "btn", "poca-btn", "mt-70"], ["data-wow-delay", "0.2s", 1, "col-12", "col-md-4", "single_gallery_item"], [1, "poca-music-area", "style-2", "d-flex", "align-items-center", "flex-wrap"], [1, "poca-music-thumbnail"], ["alt", "", 2, "height", "340px", "width", "600px", 3, "src"], [1, "poca-music-content", "text-center"], [1, "title", 2, "font-size", "18px"], [1, "music-meta-data"], [2, "height", "20px", "font-size", "10px"], ["href", "#", 1, "music-author", 2, "font-size", "10px"], ["href", "#", 1, "music-catagory", 2, "font-size", "10px"], [1, "likes-share-download", "d-flex", "align-items-center", "justify-content-between"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-heart"], ["href", "#", 1, "mr-4"], ["aria-hidden", "true", 1, "fa", "fa-headphones"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-download"]],
      template: function AllSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-listen-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Latest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hot Hit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tutorials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " List Songs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AllSongComponent_div_32_Template, 29, 12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Load More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songList);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeAreaComponent"], _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_7__["ListenBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvYWxsLXNvbmcvYWxsLXNvbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-song',
          templateUrl: './all-song.component.html',
          styleUrls: ['./all-song.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]
        }, {
          type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _service_like_service__WEBPACK_IMPORTED_MODULE_5__["LikeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/feature/feature.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/song/feature/feature.component.ts ***!
    \***************************************************/

  /*! exports provided: FeatureComponent */

  /***/
  function srcAppSongFeatureFeatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureComponent", function () {
      return FeatureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FeatureComponent = /*#__PURE__*/function () {
      function FeatureComponent() {
        _classCallCheck(this, FeatureComponent);
      }

      _createClass(FeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeatureComponent;
    }();

    FeatureComponent.ɵfac = function FeatureComponent_Factory(t) {
      return new (t || FeatureComponent)();
    };

    FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeatureComponent,
      selectors: [["app-feature"]],
      decls: 33,
      vars: 0,
      consts: [[1, "featured-guests-area"], [1, "container"], [1, "row"], [1, "col-12"], [1, "section-heading", "text-center"], [1, "line"], [1, "row", "justify-content-around"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "single-featured-guest", "mb-80"], ["src", "../../../assets/img/bg-img/25.jpg", "alt", ""], [1, "guest-info"], ["src", "../../../assets/img/bg-img/26.jpg", "alt", ""], ["src", "../../../assets/img/bg-img/27.jpg", "alt", ""]],
      template: function FeatureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Featured Singer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Alfred Day");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PRODUCER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Jayden White");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "DRUMMER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Vincent Reid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ENTREPRENEUR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feature',
          templateUrl: './feature.component.html',
          styleUrls: ['./feature.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/song/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSongFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 70,
      vars: 0,
      consts: [[1, "footer-area", 2, "background-color", "white", "padding-top", "30px"], [1, "container"], [1, "row"], [1, "col-12", "col-sm-6", "col-lg-3"], [1, "single-footer-widget", "mb-80"], [1, "widget-title"], [1, "copywrite-content"], ["aria-hidden", "true", 1, "fa", "fa-heart-o"], ["href", "https://colorlib.com", "target", "_blank"], [1, "catagories-nav"], ["href", "#"], [1, "single-latest-episodes"], [1, "episodes-date"], ["href", "#", 1, "episodes-title"], [1, "footer-social-info"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Facebook", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Twitter", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Pinterest", 1, "pinterest"], [1, "fa", "fa-pinterest"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Instagram", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "YouTube", 1, "youtube"], [1, "fa", "fa-youtube-play"], [1, "app-download-button", "mt-30"], ["src", "../../../assets/img/core-img/app-store.png", "alt", ""], ["src", "../../../assets/img/core-img/google-play.png", "alt", ""]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "It is a long established fact that a reader will be distracted by the readable content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA9Copyright \xA9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " All rights reserved | This template is made with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Colorlib");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Entrepreneurship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tutorials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lastest Episodes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "December 9, 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Episode 205 - See Ya In Three!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "December 8, 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Episode 204 - See Ya In Two!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Follow Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/song/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSongHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/search.service */
    "./src/app/service/search.service.ts");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_a_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_div_43_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_43_a_8_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r3.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\xA0Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Update Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Update Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_div_43_a_8_Template, 2, 0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hi, ", ctx_r1.info.username, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSignedUp);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(searchService, songService, tokenService, userService, router) {
        _classCallCheck(this, HeaderComponent);

        this.searchService = searchService;
        this.songService = songService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.router = router;
        this.songList = [];
        this.isSignedUp = false;
        this.isSignUpFailed = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserInfor();
          console.log(this.info.username);

          if (this.info.username !== '') {
            this.getUserDetail();
          }

          if (this.tokenService.getToken()) {
            this.isSignedUp = true;
            this.isSignUpFailed = false;
          } else {
            this.isSignedUp = false;
            this.isSignUpFailed = true;
          }

          this.getUserInfor();
        }
      }, {
        key: "search",
        value: function search() {
          var _this15 = this;

          if (this.value !== '') {
            console.log(this.value);
            this.songService.getSongByName(this.value).subscribe(function (data) {
              _this15.songList = data;

              _this15.searchService.changeValue(_this15.value, _this15.songList); // console.log(this.songList);

            });
          } else {
            this.songService.getAllSongs().subscribe(function (data) {
              _this15.songList = data;

              _this15.searchService.changeValue(_this15.value, _this15.songList);
            });
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenService.signOut();
          this.router.navigate(['']);
          window.location.reload();
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          }; // console.log(this.info);
          // this.accessToken = this.token.getToken();
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(this.info.username);
                    _context3.next = 3;
                    return this.userService.getUserByUserName(this.info.username).subscribe(function (data) {
                      _this16.user = data;
                    }, function (error) {
                      return console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 44,
      vars: 3,
      consts: [[1, "header-area"], [1, "main-header-area"], [1, "classy-nav-container", "breakpoint-off"], ["id", "pocaNav", 1, "classy-navbar", "justify-content-between"], ["href", "./song", 1, "nav-brand"], ["src", "", "alt", "", 2, "width", "75px", "height", "75px"], [1, "classy-navbar-toggler"], [1, "navbarToggler"], [1, "classy-menu"], [1, "classycloseIcon"], [1, "cross-wrap"], [1, "top"], [1, "bottom"], [1, "classynav"], ["id", "nav"], ["routerLink", "/song"], ["routerLink", "/list"], ["routerLink", "/album/list-album"], ["routerLink", "/add"], ["routerLink", "/album/create"], ["href", "./contact.html"], [1, "top-search-area"], ["action", "index.html", "method", "post"], ["type", "search", "name", "top-search-bar", "placeholder", "Search and hit enter...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "submit", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "top-social-area"], ["routerLink", "/login", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["routerLink", "/login"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, "dropdown"], [1, "dropbtn", 2, "font-size", "13px"], [1, "dropdown-content", 2, "font-size", "13px"], ["routerLink", "../user/update-password"], ["routerLink", "../user/update-profile"], ["routerLink", "./song", "class", "fa fa-sign-out", 3, "click", 4, "ngIf"], ["routerLink", "./song", 1, "fa", "fa-sign-out", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " My List");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Create Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Create Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.value = $event;
          })("keyup.enter", function HeaderComponent_Template_input_keyup_enter_38_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_39_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, HeaderComponent_a_42_Template, 3, 0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, HeaderComponent_div_43_Template, 9, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSignUpFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSignedUp);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [".dropbtn[_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  margin-left: 0;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #ddd;}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {background-color: #3e8e41;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQSxrRUFBa0U7QUFDbEU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQixzQkFBc0IsQ0FBQztBQUVsRCxvQ0FBb0M7QUFDcEMsbUNBQW1DLGNBQWMsQ0FBQztBQUVsRCwwRkFBMEY7QUFDMUYsMEJBQTBCLHlCQUF5QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvc29uZy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEcm9wZG93biBCdXR0b24gKi9cclxuLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZHJvcGRvd24tY29udGVudCBhe1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbi8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
        }, {
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/latest-song/latest-song.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/song/latest-song/latest-song.component.ts ***!
    \***********************************************************/

  /*! exports provided: LatestSongComponent */

  /***/
  function srcAppSongLatestSongLatestSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatestSongComponent", function () {
      return LatestSongComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/search.service */
    "./src/app/service/search.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _service_like_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/like.service */
    "./src/app/service/like.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../listen-bar/listen-bar.component */
    "./src/app/song/listen-bar/listen-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/song/details", a1];
    };

    function LatestSongComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "By ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestSongComponent_div_26_Template_a_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var song_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onLike(ctx_r3.user.id, song_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Download (12)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, song_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, song_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.info.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.style.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", song_r1.dateSubmitted, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Like (", song_r1.likes.length, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Views (", song_r1.views, ")");
      }
    }

    var _c1 = function _c1() {
      return ["/song"];
    };

    var _c2 = function _c2() {
      return ["/latest-song"];
    };

    var _c3 = function _c3() {
      return ["/most-views-song"];
    };

    var LatestSongComponent = /*#__PURE__*/function () {
      // userId: number[] = [];
      function LatestSongComponent(songService, searchService, tokenService, userService, likeService) {
        _classCallCheck(this, LatestSongComponent);

        this.songService = songService;
        this.searchService = searchService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.likeService = likeService;
        this.songList = [];
        this.latestSong = [];
        this.likes = 0;
      }

      _createClass(LatestSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.getUserInfor();

          if (this.info.username !== '') {
            this.getUserDetail();
          }

          this.getListSearch();
          this.songService.getAllSongsLatest().subscribe(function (next) {
            _this17.latestSong = next;
          }, function (error) {
            return _this17.latestSong = [];
          });
          this.getUserInfor();
        }
      }, {
        key: "getListSearch",
        value: function getListSearch() {
          var _this18 = this;

          this.searchService.list.subscribe(function (data) {
            _this18.songList = data;
            console.log(_this18.songList);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          console.log(changes);
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          }; // console.log(this.info);
          // this.accessToken = this.token.getToken();
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          var _this19 = this;

          this.userService.getUserByUserName(this.info.username).subscribe(function (data) {
            _this19.user = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "onLike",
        value: function onLike(idUser, idSong) {
          var _this20 = this;

          // console.log(idUser);
          var like = {
            user: idUser
          }; // console.log(like);

          like.user = this.convertToUser(idUser);
          this.songService.likeSong(like, idSong).subscribe(function (next) {
            _this20.getAllLastSong(); // console.log(idSong);


            console.log(next);
          }, function (e) {
            console.log(e);
          });
        }
      }, {
        key: "getAllLastSong",
        value: function getAllLastSong() {
          var _this21 = this;

          this.songService.getAllSongsLatest().subscribe(function (next) {
            _this21.latestSong = next;
          }, function (error) {
            return _this21.latestSong = [];
          });
        }
      }, {
        key: "convertToUser",
        value: function convertToUser(idUser) {
          var user = {
            id: idUser
          };
          return user;
        }
      }]);

      return LatestSongComponent;
    }();

    LatestSongComponent.ɵfac = function LatestSongComponent_Factory(t) {
      return new (t || LatestSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_like_service__WEBPACK_IMPORTED_MODULE_5__["LikeService"]));
    };

    LatestSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LatestSongComponent,
      selectors: [["app-latest-song"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 27,
      vars: 7,
      consts: [[1, "poca-latest-epiosodes", "section-padding-80"], [1, "container"], [1, "poca-projects-menu", "mb-30"], [1, "text-center", "portfolio-menu"], ["data-filter", ".media", 1, "btn"], [3, "routerLink"], ["data-filter", ".tech", 1, "btn"], ["data-filter", ".tutor", 1, "btn"], [1, "col-12"], [1, "section-heading", "text-center"], [1, "line"], [1, "row", "poca-portfolio"], ["class", "col-12 col-md-4 single_gallery_item ", "data-wow-delay", "0.2s", 4, "ngFor", "ngForOf"], ["data-wow-delay", "0.2s", 1, "col-12", "col-md-4", "single_gallery_item"], [1, "poca-music-area", "style-2", "d-flex", "align-items-center", "flex-wrap"], [1, "poca-music-thumbnail"], ["alt", "", 2, "height", "340px", "width", "600px", 3, "src"], [1, "poca-music-content", "text-center"], [1, "title", 2, "font-size", "18px"], [1, "music-meta-data"], [2, "height", "20px", "font-size", "10px"], ["href", "#", 1, "music-author", 2, "font-size", "10px"], ["href", "#", 1, "music-catagory", 2, "font-size", "10px"], [1, "likes-share-download", "d-flex", "align-items-center", "justify-content-between"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-heart"], ["href", "", 1, "mr-4"], ["aria-hidden", "true", 1, "fa", "fa-headphones"], ["href", ""], ["aria-hidden", "true", 1, "fa", "fa-download"]],
      template: function LatestSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-listen-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Latest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hot Hit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tutorials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Latest Songs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LatestSongComponent_div_26_Template, 29, 13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.latestSong);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeAreaComponent"], _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_7__["ListenBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvbGF0ZXN0LXNvbmcvbGF0ZXN0LXNvbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-latest-song',
          templateUrl: './latest-song.component.html',
          styleUrls: ['./latest-song.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]
        }, {
          type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _service_like_service__WEBPACK_IMPORTED_MODULE_5__["LikeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/layout/layout.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/song/layout/layout.component.ts ***!
    \*************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppSongLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/song/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/song/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent(songService) {
        _classCallCheck(this, LayoutComponent);

        this.songService = songService;
        this.songList = [];
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]));
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 3,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/list/list.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/song/list/list.component.ts ***!
    \*********************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppSongListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/sweetalert2/sweetalert2.min.js */
    "./src/assets/sweetalert2/sweetalert2.min.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _service_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/search.service */
    "./src/app/service/search.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_album_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/album.service */
    "./src/app/service/album.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/song/details", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/song/update", a1];
    };

    function ListComponent_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Delete song");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Are you sure you want to delete this song ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_tr_23_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var list_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2["delete"](list_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " OK ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_tr_23_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var list_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4["delete"](list_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", list_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, list_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r1.singer);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r1.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, list_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, list_r1.id));
      }
    }

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(songService, searchServe, router, route, albumService, tokenService, userService) {
        _classCallCheck(this, ListComponent);

        this.songService = songService;
        this.searchServe = searchServe;
        this.router = router;
        this.route = route;
        this.albumService = albumService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.value = '';
        this.songList = [];
        this.albumList = [];
        this.Toast = _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.getUserInfor();

                    if (this.info.username !== '') {
                      this.getUserDetail().then(function (res) {
                        return _this22.songService.getAllSongByUserId(res.id).toPromise();
                      }).then(function (result) {
                        _this22.songList = result;
                      });
                    }

                    console.log(this.songList);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "searching",
        value: function searching() {// if (this.value !== ''){
          //   this.songList = this.songList.filter( res => {
          //     return res.name.toLocaleLowerCase().match(this.value.toLocaleLowerCase());
          //   });
          // }else if (this.value === ''){
          //   this.ngOnInit();
          // }
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this23 = this;

          this.songService.deleteSong(id).subscribe(function () {
            _this23.deleteSuccess();

            _this23.getAllSong(); // this.router.getCurrentNavigation();
            // this.router.navigate(['/'], {relativeTo: this.route}).then(r => console.log(r));

          }, function (error) {
            console.log('delete failed');
          });
        }
      }, {
        key: "getAllSong",
        value: function getAllSong() {
          var _this24 = this;

          this.getUserInfor();

          if (this.info.username !== '') {
            this.getUserDetail().then(function (res) {
              return _this24.songService.getAllSongByUserId(res.id).toPromise();
            }).then(function (result) {
              _this24.songList = result;
            });
          }
        }
      }, {
        key: "deleteSuccess",
        value: function deleteSuccess() {
          this.Toast.fire({
            icon: 'success',
            title: 'Xóa thành công'
          });
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          }; // console.log(this.info);
          // this.accessToken = this.token.getToken();
        } // async getUserDetail(){
        //   await this.userService.getUserByUserName(this.info.username).subscribe( data =>
        //   {
        //     this.user = data;
        //     console.log(this.user);
        //   }, error =>
        //     console.log(error));
        // }

      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          return this.userService.getUserByUserName(this.info.username).toPromise();
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_album_service__WEBPACK_IMPORTED_MODULE_6__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 24,
      vars: 2,
      consts: [[1, "card"], [1, "card-header", "text-center", "font-weight-bold", "text-uppercase", "py-4"], [1, "card-body"], ["id", "table", 1, "table-editable"], [1, "table-add", "float-left", "mb-3", "mr-2"], ["routerLink", "../add", 1, "text-success"], [1, "fa", "fa-plus-circle", "fa-3x"], [1, "table", "table-bordered", "table-responsive-md", "table-striped", "text-center"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "pt-3-half", 2, "width", "100px", "height", "100px"], ["alt", "", 3, "src"], [1, "pt-3-half"], [3, "routerLink"], [1, "table-remove"], ["type", "button", 1, "btn", "btn-info", "btn-rounded", "btn-sm", "my-0", 3, "routerLink"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-danger", "btn-rounded", "btn-sm", "my-0"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "text-center"], [1, "modal-header", "text-center"], [1, "modal-title", "text-center"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-dark"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", "btn-rounded", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded", "btn-sm", "my-0", 3, "click"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Editable Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Song Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Singer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ListComponent_tr_23_Template, 39, 13, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.songList);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeAreaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      styles: [".pt-3-half[_ngcontent-%COMP%] {\r\n  padding-top: 1.4rem;\r\n}\r\n.table-remove[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTs7QUFFWiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHQtMy1oYWxmIHtcclxuICBwYWRkaW5nLXRvcDogMS40cmVtO1xyXG59XHJcbi50YWJsZS1yZW1vdmUge1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]
        }, {
          type: _service_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _service_album_service__WEBPACK_IMPORTED_MODULE_6__["AlbumService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/listen-bar/listen-bar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/song/listen-bar/listen-bar.component.ts ***!
    \*********************************************************/

  /*! exports provided: ListenBarComponent */

  /***/
  function srcAppSongListenBarListenBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListenBarComponent", function () {
      return ListenBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListenBarComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "By ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "audio", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "source", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.style.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.dateSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r1.fileMp3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ListenBarComponent = /*#__PURE__*/function () {
      function ListenBarComponent(songService) {
        _classCallCheck(this, ListenBarComponent);

        this.songService = songService;
        this.songLike = [];
      }

      _createClass(ListenBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.songService.getSongHaveMostLike().subscribe(function (next) {
            console.log(_this25.songLike);
            _this25.songLike = next;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return ListenBarComponent;
    }();

    ListenBarComponent.ɵfac = function ListenBarComponent_Factory(t) {
      return new (t || ListenBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]));
    };

    ListenBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListenBarComponent,
      selectors: [["app-listen-bar"]],
      decls: 5,
      vars: 1,
      consts: [[1, "poca-featured-music-area", "mt-50"], [1, "container"], [1, "row"], [1, "col-12"], ["class", "poca-music-area box-shadow d-flex align-items-center flex-wrap border", "data-animation", "fadeInUp", "data-delay", "900ms", 4, "ngFor", "ngForOf"], ["data-animation", "fadeInUp", "data-delay", "900ms", 1, "poca-music-area", "box-shadow", "d-flex", "align-items-center", "flex-wrap", "border"], [1, "poca-music-thumbnail"], ["alt", "", 3, "src"], [1, "poca-music-content"], [1, "music-meta-data"], ["href", "#", 1, "music-author"], ["href", "#", 1, "music-catagory"], ["href", "#", 1, "music-duration"], [1, "poca-music-player"], ["preload", "auto", "controls", "", 2, "width", "787px"], [3, "src"]],
      template: function ListenBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListenBarComponent_div_4_Template, 20, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songLike);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvbGlzdGVuLWJhci9saXN0ZW4tYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListenBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listen-bar',
          templateUrl: './listen-bar.component.html',
          styleUrls: ['./listen-bar.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/most-views/most-views.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/song/most-views/most-views.component.ts ***!
    \*********************************************************/

  /*! exports provided: MostViewsComponent */

  /***/
  function srcAppSongMostViewsMostViewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MostViewsComponent", function () {
      return MostViewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/search.service */
    "./src/app/service/search.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../listen-bar/listen-bar.component */
    "./src/app/song/listen-bar/listen-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
    // import {Song} from '../../interface/Song';
    // import {SongService} from '../../service/song.service';
    // import {SearchService} from '../../service/search.service';
    // import {User} from "../../interface/User";
    // import {UserService} from "../../service/user.service";
    //
    // @Component({
    //   selector: 'app-most-views',
    //   templateUrl: './most-views.component.html',
    //   styleUrls: ['./most-views.component.css']
    // })
    // export class MostViewsComponent implements OnInit, OnChanges {
    //
    //   value: string;
    //   // songList: Song[] = [];
    //   mostViewSong: Song[] = [];
    //   info: any;
    //   user: User;
    //   constructor(private songService: SongService,
    //               public searchService: SearchService,
    //               private userService: UserService) {
    //   }
    //   ngOnInit(): void {
    //     if (this.info.username !== ''){
    //       this.getUserDetail();
    //     }
    //     // this.songService.getAllSongs().subscribe(next => {
    //     //   this.songList = next;}, error => (this.songList = []));
    //     // await this.getVale();
    //     // this.getListSearch();
    //     this.songService.getMostViewSong().subscribe(next => {
    //       this.mostViewSong = next;
    //     }, error => (this.mostViewSong = []));
    //   }
    //   // getListSearch(){
    //   //   this.searchService.list.subscribe( data => {
    //   //     this.songList = data;
    //   //     console.log(this.songList); }, error => {
    //   //     console.log(error);
    //   //   });
    //   // }
    //   ngOnChanges(changes: SimpleChanges): void {
    //     console.log(changes);
    //   }
    //
    //   onLike( idUser: number, idSong: number){
    //     console.log(idUser);
    //     const like = {
    //       user: idUser
    //     };
    //     console.log(like);
    //     like.user = this.convertToUser(idUser);
    //     this.songService.likeSong(like, idSong).subscribe(next => {
    //       this.getAllMostViewSong();
    //       console.log(idSong);
    //       console.log(next);
    //     }, (e) => {
    //       console.log(e);
    //     });
    //   }
    //   getAllMostViewSong(){
    //     this.songService.getMostViewSong().subscribe(next => {
    //       this.mostViewSong = next;
    //     }, error => (this.mostViewSong = []));
    //   }
    //   getUserDetail(){
    //     this.userService.getUserByUserName(this.info.username).subscribe( data =>
    //     {
    //       this.user = data;
    //     }, error =>
    //       console.log(error));
    //   }
    //   convertToUser( idUser: number){
    //     const user: any = {
    //       id: idUser
    //     };
    //     return user;
    //   }
    // }


    var _c0 = function _c0(a1) {
      return ["/song/details", a1];
    };

    function MostViewsComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "By ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostViewsComponent_div_30_Template_a_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var song_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onLike(ctx_r2.user.id, song_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Download (12)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, song_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, song_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", song_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.style.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", song_r1.dateSubmitted, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Like (", song_r1.likes.length, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Views (", song_r1.views, ")");
      }
    }

    var _c1 = function _c1() {
      return ["/song"];
    };

    var _c2 = function _c2() {
      return ["/latest-song"];
    };

    var _c3 = function _c3() {
      return ["/song/most-views-song"];
    };

    var MostViewsComponent = /*#__PURE__*/function () {
      function MostViewsComponent(songService, searchService, tokenService, userService) {
        _classCallCheck(this, MostViewsComponent);

        this.songService = songService;
        this.searchService = searchService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.songList = [];
        this.mostViewSong = [];
      }

      _createClass(MostViewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.getUserInfor();

          if (this.info.username !== '') {
            this.getUserDetail();
          }

          this.getListSearch();
          this.songService.getMostViewSong().subscribe(function (next) {
            _this26.mostViewSong = next;
          }, function (error) {
            return _this26.mostViewSong = [];
          });
        }
      }, {
        key: "getListSearch",
        value: function getListSearch() {
          var _this27 = this;

          this.searchService.list.subscribe(function (data) {
            _this27.songList = data;
            console.log(_this27.songList);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          console.log(changes);
        }
      }, {
        key: "onLike",
        value: function onLike(idUser, idSong) {
          var _this28 = this;

          console.log(idUser);
          var like = {
            user: idUser
          };
          console.log(like);
          like.user = this.convertToUser(idUser);
          this.songService.likeSong(like, idSong).subscribe(function (next) {
            _this28.getAllMostViewSong(); // this.getAllSong();


            console.log(idSong);
            console.log(next);
          }, function (e) {
            console.log(e);
          });
        }
      }, {
        key: "getAllMostViewSong",
        value: function getAllMostViewSong() {
          var _this29 = this;

          this.songService.getMostViewSong().subscribe(function (next) {
            _this29.mostViewSong = next;
          }, function (error) {
            return _this29.mostViewSong = [];
          });
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          var _this30 = this;

          this.userService.getUserByUserName(this.info.username).subscribe(function (data) {
            _this30.user = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          }; // console.log(this.info);
          // this.accessToken = this.token.getToken();
        }
      }, {
        key: "convertToUser",
        value: function convertToUser(idUser) {
          var user = {
            id: idUser
          };
          return user;
        }
      }]);

      return MostViewsComponent;
    }();

    MostViewsComponent.ɵfac = function MostViewsComponent_Factory(t) {
      return new (t || MostViewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    MostViewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MostViewsComponent,
      selectors: [["app-most-views"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 31,
      vars: 8,
      consts: [[1, "poca-latest-epiosodes", "section-padding-80"], [1, "container"], [1, "poca-projects-menu", "mb-30"], [1, "text-center", "portfolio-menu"], ["data-filter", ".media", 1, "btn"], [3, "routerLink"], ["data-filter", ".tech", 1, "btn"], ["data-filter", ".tutor", 1, "btn"], [1, "row"], [1, "col-12"], [1, "section-heading", "text-center"], [1, "line"], [1, "row", "poca-portfolio"], ["class", "col-12 col-md-4 single_gallery_item ", "data-wow-delay", "0.2s", 4, "ngFor", "ngForOf"], ["data-wow-delay", "0.2s", 1, "col-12", "col-md-4", "single_gallery_item"], [1, "poca-music-area", "style-2", "d-flex", "align-items-center", "flex-wrap"], [1, "poca-music-thumbnail"], ["alt", "", 2, "height", "340px", "width", "600px", 3, "src"], [1, "poca-music-content", "text-center"], [1, "title", 2, "font-size", "18px"], [1, "music-meta-data"], [2, "height", "20px", "font-size", "10px"], ["href", "#", 1, "music-author", 2, "font-size", "10px"], ["href", "#", 1, "music-catagory", 2, "font-size", "10px"], [1, "likes-share-download", "d-flex", "align-items-center", "justify-content-between"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-heart"], [1, "mr-4"], ["aria-hidden", "true", 1, "fa", "fa-headphones"], ["aria-hidden", "true", 1, "fa", "fa-download"]],
      template: function MostViewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-listen-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Latest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hot Hit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tutorials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " The Most Views Songs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MostViewsComponent_div_30_Template, 29, 12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mostViewSong);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeAreaComponent"], _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_6__["ListenBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvbW9zdC12aWV3cy9tb3N0LXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostViewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-most-views',
          templateUrl: './most-views.component.html',
          styleUrls: ['./most-views.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]
        }, {
          type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/navbar/navbar.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/song/navbar/navbar.component.ts ***!
    \*************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSongNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 33,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Dropdown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/song-details/song-details.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/song/song-details/song-details.component.ts ***!
    \*************************************************************/

  /*! exports provided: SongDetailsComponent */

  /***/
  function srcAppSongSongDetailsSongDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongDetailsComponent", function () {
      return SongDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SongDetailsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "By ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "00:02:56");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "audio", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "source", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Like (29)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Download (12)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.song.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.song.dateSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.song.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.song.style.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.song.fileMp3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Views (", ctx_r0.song.views, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.song.fileMp3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    var SongDetailsComponent = /*#__PURE__*/function () {
      function SongDetailsComponent(route, songService) {
        _classCallCheck(this, SongDetailsComponent);

        this.route = route;
        this.songService = songService;
      }

      _createClass(SongDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this31 = this;

            var id;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    id = +this.route.snapshot.paramMap.get('id');
                    _context5.next = 3;
                    return this.songService.getSongById(id).toPromise().then(function (res) {
                      console.log(res);
                      _this31.song = res;
                    })["catch"](function (error) {
                      return console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return SongDetailsComponent;
    }();

    SongDetailsComponent.ɵfac = function SongDetailsComponent_Factory(t) {
      return new (t || SongDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]));
    };

    SongDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SongDetailsComponent,
      selectors: [["app-song-details"]],
      decls: 11,
      vars: 2,
      consts: [["rel", "stylesheet", "href", "/src/assets/style.css"], [1, "row", "poca-featured-music-area"], [1, "container"], [1, "row"], [1, "col-12"], ["class", "poca-music-area box-shadow d-flex align-items-center flex-wrap border", "data-animation", "fadeInUp", "data-delay", "900ms", 4, "ngIf"], [3, "innerHTML"], ["data-animation", "fadeInUp", "data-delay", "900ms", 1, "poca-music-area", "box-shadow", "d-flex", "align-items-center", "flex-wrap", "border"], [1, "poca-music-thumbnail"], ["alt", "", 3, "src"], [1, "poca-music-content"], [1, "music-published-date"], [1, "music-meta-data"], ["href", "#", 1, "music-author"], ["href", "#", 1, "music-catagory"], ["href", "#", 1, "music-duration"], [1, "poca-music-player"], ["preload", "auto", "autoplay", "", "controls", "", 2, "width", "787px"], [3, "src"], [1, "likes-share-download", "d-flex", "align-items-center", "justify-content-between"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-heart"], [1, "mr-4"], ["aria-hidden", "true", 1, "fa", "fa-headphones"], [3, "href"], ["aria-hidden", "true", 1, "fa", "fa-download"]],
      template: function SongDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SongDetailsComponent_div_6_Template, 33, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "L\u1EDDi b\xE0i h\xE1t:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.song);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.song.lyrics, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeAreaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nvbmcvc29uZy1kZXRhaWxzL3NvbmctZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SongDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-song-details',
          templateUrl: './song-details.component.html',
          styleUrls: ['./song-details.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/song.module.ts":
  /*!*************************************!*\
    !*** ./src/app/song/song.module.ts ***!
    \*************************************/

  /*! exports provided: SongModule */

  /***/
  function srcAppSongSongModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongModule", function () {
      return SongModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/song/layout/layout.component.ts");
    /* harmony import */


    var _latest_song_latest_song_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./latest-song/latest-song.component */
    "./src/app/song/latest-song/latest-song.component.ts");
    /* harmony import */


    var _add_song_add_song_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-song/add-song.component */
    "./src/app/song/add-song/add-song.component.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _update_song_update_song_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-song/update-song.component */
    "./src/app/song/update-song/update-song.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/song/list/list.component.ts");
    /* harmony import */


    var _song_details_song_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./song-details/song-details.component */
    "./src/app/song/song-details/song-details.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/song/footer/footer.component.ts");
    /* harmony import */


    var _style_list_style_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./style-list/style-list.component */
    "./src/app/song/style-list/style-list.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/song/navbar/navbar.component.ts");
    /* harmony import */


    var _feature_feature_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./feature/feature.component */
    "./src/app/song/feature/feature.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/song/header/header.component.ts");
    /* harmony import */


    var _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./listen-bar/listen-bar.component */
    "./src/app/song/listen-bar/listen-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ckeditor4-angular */
    "./node_modules/ckeditor4-angular/__ivy_ngcc__/fesm2015/ckeditor4-angular.js");
    /* harmony import */


    var _user_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../user.guard */
    "./src/app/user.guard.ts");
    /* harmony import */


    var _most_views_most_views_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./most-views/most-views.component */
    "./src/app/song/most-views/most-views.component.ts");
    /* harmony import */


    var _all_song_all_song_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./all-song/all-song.component */
    "./src/app/song/all-song/all-song.component.ts");

    var routes = [{
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
      children: [{
        path: '',
        component: _all_song_all_song_component__WEBPACK_IMPORTED_MODULE_20__["AllSongComponent"]
      }, {
        path: 'add',
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_18__["UserGuard"]],
        component: _add_song_add_song_component__WEBPACK_IMPORTED_MODULE_4__["AddSongComponent"]
      }, {
        path: 'update/:id',
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_18__["UserGuard"]],
        component: _update_song_update_song_component__WEBPACK_IMPORTED_MODULE_6__["UpdateSongComponent"]
      }, {
        path: 'list',
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_18__["UserGuard"]],
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"]
      }, {
        path: 'details/:id',
        component: _song_details_song_details_component__WEBPACK_IMPORTED_MODULE_8__["SongDetailsComponent"]
      }, {
        path: 'latest-song',
        component: _latest_song_latest_song_component__WEBPACK_IMPORTED_MODULE_3__["LatestSongComponent"]
      }, {
        path: 'most-views-song',
        component: _most_views_most_views_component__WEBPACK_IMPORTED_MODULE_19__["MostViewsComponent"]
      }]
    }];

    var SongModule = function SongModule() {
      _classCallCheck(this, SongModule);
    };

    SongModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SongModule
    });
    SongModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SongModule_Factory(t) {
        return new (t || SongModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SongModule, {
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _style_list_style_list_component__WEBPACK_IMPORTED_MODULE_10__["StyleListComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _feature_feature_component__WEBPACK_IMPORTED_MODULE_12__["FeatureComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_14__["ListenBarComponent"], _add_song_add_song_component__WEBPACK_IMPORTED_MODULE_4__["AddSongComponent"], _latest_song_latest_song_component__WEBPACK_IMPORTED_MODULE_3__["LatestSongComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _song_details_song_details_component__WEBPACK_IMPORTED_MODULE_8__["SongDetailsComponent"], _update_song_update_song_component__WEBPACK_IMPORTED_MODULE_6__["UpdateSongComponent"], _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeAreaComponent"], _most_views_most_views_component__WEBPACK_IMPORTED_MODULE_19__["MostViewsComponent"], _all_song_all_song_component__WEBPACK_IMPORTED_MODULE_20__["AllSongComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"]],
        exports: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeAreaComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _style_list_style_list_component__WEBPACK_IMPORTED_MODULE_10__["StyleListComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _feature_feature_component__WEBPACK_IMPORTED_MODULE_12__["FeatureComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _listen_bar_listen_bar_component__WEBPACK_IMPORTED_MODULE_14__["ListenBarComponent"], _add_song_add_song_component__WEBPACK_IMPORTED_MODULE_4__["AddSongComponent"], _latest_song_latest_song_component__WEBPACK_IMPORTED_MODULE_3__["LatestSongComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _song_details_song_details_component__WEBPACK_IMPORTED_MODULE_8__["SongDetailsComponent"], _update_song_update_song_component__WEBPACK_IMPORTED_MODULE_6__["UpdateSongComponent"], _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeAreaComponent"], _most_views_most_views_component__WEBPACK_IMPORTED_MODULE_19__["MostViewsComponent"], _all_song_all_song_component__WEBPACK_IMPORTED_MODULE_20__["AllSongComponent"]],
          exports: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeAreaComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/style-list/style-list.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/song/style-list/style-list.component.ts ***!
    \*********************************************************/

  /*! exports provided: StyleListComponent */

  /***/
  function srcAppSongStyleListStyleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleListComponent", function () {
      return StyleListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_style_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/style.service */
    "./src/app/service/style.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StyleListComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var style_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", style_r1.id, " ", style_r1.name, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/add"];
    };

    var StyleListComponent = /*#__PURE__*/function () {
      function StyleListComponent(styleService) {
        _classCallCheck(this, StyleListComponent);

        this.styleService = styleService;
      }

      _createClass(StyleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.styleService.findAll().subscribe(function (result) {
            _this32.styles = result;
          });
        }
      }]);

      return StyleListComponent;
    }();

    StyleListComponent.ɵfac = function StyleListComponent_Factory(t) {
      return new (t || StyleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_style_service__WEBPACK_IMPORTED_MODULE_1__["StyleService"]));
    };

    StyleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StyleListComponent,
      selectors: [["app-style-list"]],
      decls: 7,
      vars: 3,
      consts: [[2, "margin-top", "100px"], [3, "routerLink"], [4, "ngFor", "ngForOf"]],
      template: function StyleListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List supplier");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StyleListComponent_li_6_Template, 3, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.styles);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nvbmcvc3R5bGUtbGlzdC9zdHlsZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-style-list',
          templateUrl: './style-list.component.html',
          styleUrls: ['./style-list.component.css']
        }]
      }], function () {
        return [{
          type: _service_style_service__WEBPACK_IMPORTED_MODULE_1__["StyleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/update-song/update-song.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/song/update-song/update-song.component.ts ***!
    \***********************************************************/

  /*! exports provided: UpdateSongComponent */

  /***/
  function srcAppSongUpdateSongUpdateSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateSongComponent", function () {
      return UpdateSongComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/sweetalert2/sweetalert2.min.js */
    "./src/assets/sweetalert2/sweetalert2.min.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_style_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/style.service */
    "./src/app/service/style.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/song/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ckeditor4-angular */
    "./node_modules/ckeditor4-angular/__ivy_ngcc__/fesm2015/ckeditor4-angular.js");

    function UpdateSongComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required and min length is 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateSongComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Singer is required and min length is 5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateSongComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Author is required and min length is 5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateSongComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lyrics is required and min length is 10 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateSongComponent_option_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var style_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", style_r6.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](style_r6.name);
      }
    }

    function UpdateSongComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Style is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UpdateSongComponent = /*#__PURE__*/function () {
      function UpdateSongComponent(songService, storage, route, routes, styleService, fb) {
        _classCallCheck(this, UpdateSongComponent);

        this.songService = songService;
        this.storage = storage;
        this.route = route;
        this.routes = routes;
        this.styleService = styleService;
        this.fb = fb;
        this.selectedMusic = null;
        this.selectedImage = null;
        this.styleList = [];
        this.Toast = _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }

      _createClass(UpdateSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.songForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            lyrics: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            singer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            // image: ['', [Validators.required]],
            style: this.fb.group({
              id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            })
          });
          this.styleService.findAll().subscribe(function (next) {
            return _this33.styleList = next;
          }, function (error) {
            return _this33.styleList = [];
          });
          console.log(this.styleList);
          var id = +this.route.snapshot.paramMap.get('id');
          this.songService.getSongById(id).subscribe(function (result) {
            _this33.song = result;

            _this33.songForm.patchValue(_this33.song);

            _this33.success = 'Edit song successfully !';
          }, function (error) {
            _this33.fail = 'Edit song fail';
          });
        }
      }, {
        key: "updateSong",
        value: function updateSong() {
          var _this34 = this;

          if (this.songForm.valid) {
            var value = this.songForm.value;
            var data = Object.assign(Object.assign({}, this.song), value);
            this.songService.updateSong(data).subscribe(function (result) {
              _this34.routes.navigate(['song/list']);

              _this34.updateSuccess();
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "updateSuccess",
        value: function updateSuccess() {
          this.Toast.fire({
            icon: 'success',
            title: 'Cập nhật thành công'
          });
        }
      }]);

      return UpdateSongComponent;
    }();

    UpdateSongComponent.ɵfac = function UpdateSongComponent_Factory(t) {
      return new (t || UpdateSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_style_service__WEBPACK_IMPORTED_MODULE_6__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    UpdateSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateSongComponent,
      selectors: [["app-update-song"]],
      decls: 53,
      vars: 8,
      consts: [[1, "container", 2, "text-align", "center", "font-size", "40px"], [1, "main-container", 2, "margin-top", "100px"], [1, "row", "section"], [1, "col-xl-8", "col-md-10", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0", 2, "text-align", "center", "font-size", "18px"], [1, "card-body"], [1, "ng-untouched", "ng-pristine", "ng-valid", 3, "formGroup", "ngSubmit"], [1, "form-row", "form-group"], ["for", "name", 1, "col-lg-3", "text-md-right", "col-form-label"], [1, "col-lg-9"], ["id", "name", "type", "text", "formControlName", "name", 1, "form-control"], ["style", "color: #ff0000", 4, "ngIf"], ["for", "singer", 1, "col-lg-3", "text-md-right", "col-form-label"], ["id", "singer", "type", "text", "formControlName", "singer", 1, "form-control"], ["style", "color: red", 4, "ngIf"], ["for", "author", 1, "col-lg-3", "text-md-right", "col-form-label"], ["id", "author", "type", "text", "formControlName", "author", 1, "form-control"], [1, "col-lg-3", "text-md-right", "col-form-label"], ["formControlName", "lyrics"], ["formGroupName", "style", 1, "form-row", "form-group"], ["formControlName", "id", 1, "col-lg-9", 2, "color", "black", "height", "30px"], ["value", "", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9", "btn-inline"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-outline-success"], [2, "color", "#ff0000"], [2, "color", "red"], [3, "value"]],
      template: function UpdateSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UPDATE SONG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateSongComponent_Template_form_ngSubmit_12_listener() {
            return ctx.updateSong();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Song Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UpdateSongComponent_div_18_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Singer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UpdateSongComponent_div_24_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UpdateSongComponent_div_30_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lyrics Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ckeditor", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UpdateSongComponent_div_36_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ch\u1ECDn th\u1EC3 lo\u1EA1i nh\u1EA1c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UpdateSongComponent_option_43_Template, 2, 2, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UpdateSongComponent_div_44_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Save Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.songForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songForm.get("name").invalid && ctx.songForm.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songForm.get("singer").invalid && ctx.songForm.get("singer").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songForm.get("author").invalid && ctx.songForm.get("author").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songForm.get("lyrics").invalid && ctx.songForm.get("lyrics").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.styleList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songForm.get("style").get("id").invalid && ctx.songForm.get("style").get("id").touched);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeAreaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmcvdXBkYXRlLXNvbmcvdXBkYXRlLXNvbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-song',
          templateUrl: './update-song.component.html',
          styleUrls: ['./update-song.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _service_style_service__WEBPACK_IMPORTED_MODULE_6__["StyleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/song/welcome-area/welcome-area.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/song/welcome-area/welcome-area.component.ts ***!
    \*************************************************************/

  /*! exports provided: WelcomeAreaComponent */

  /***/
  function srcAppSongWelcomeAreaWelcomeAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeAreaComponent", function () {
      return WelcomeAreaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomeAreaComponent = /*#__PURE__*/function () {
      function WelcomeAreaComponent() {
        _classCallCheck(this, WelcomeAreaComponent);
      }

      _createClass(WelcomeAreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeAreaComponent;
    }();

    WelcomeAreaComponent.ɵfac = function WelcomeAreaComponent_Factory(t) {
      return new (t || WelcomeAreaComponent)();
    };

    WelcomeAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeAreaComponent,
      selectors: [["a-welcome-area"]],
      decls: 6,
      vars: 0,
      consts: [[1, "breadcumb-area", "bg-img", "bg-overlay", 2, "background-image", "url(../../../assets/img/bg-img/2.jpg)", "margin-bottom", "50px"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-12"], [1, "title", "mt-70", 2, "font-family", "Comic Sans MS"]],
      template: function WelcomeAreaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Relax");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nvbmcvd2VsY29tZS1hcmVhL3dlbGNvbWUtYXJlYS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-welcome-area',
          templateUrl: './welcome-area.component.html',
          styleUrls: ['./welcome-area.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/user.guard.ts ***!
    \*******************************/

  /*! exports provided: UserGuard */

  /***/
  function srcAppUserGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
      return UserGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserGuard = /*#__PURE__*/function () {
      function UserGuard(storeToken, router) {
        _classCallCheck(this, UserGuard);

        this.storeToken = storeToken;
        this.router = router;
      }

      _createClass(UserGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.storeToken.getToken()) {
            // this.router.navigate(['song']);
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return UserGuard;
    }();

    UserGuard.ɵfac = function UserGuard_Factory(t) {
      return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserGuard,
      factory: UserGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppUserFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 70,
      vars: 0,
      consts: [[1, "footer-area", 2, "background-color", "white", "padding-top", "30px"], [1, "container"], [1, "row"], [1, "col-12", "col-sm-6", "col-lg-3"], [1, "single-footer-widget", "mb-80"], [1, "widget-title"], [1, "copywrite-content"], ["aria-hidden", "true", 1, "fa", "fa-heart-o"], ["href", "https://colorlib.com", "target", "_blank"], [1, "catagories-nav"], ["href", "#"], [1, "single-latest-episodes"], [1, "episodes-date"], ["href", "#", 1, "episodes-title"], [1, "footer-social-info"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Facebook", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Twitter", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Pinterest", 1, "pinterest"], [1, "fa", "fa-pinterest"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Instagram", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "YouTube", 1, "youtube"], [1, "fa", "fa-youtube-play"], [1, "app-download-button", "mt-30"], ["src", "../../../assets/img/core-img/app-store.png", "alt", ""], ["src", "../../../assets/img/core-img/google-play.png", "alt", ""]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "It is a long established fact that a reader will be distracted by the readable content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA9Copyright \xA9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " All rights reserved | This template is made with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Colorlib");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Entrepreneurship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tutorials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lastest Episodes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "December 9, 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Episode 205 - See Ya In Three!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "December 8, 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Episode 204 - See Ya In Two!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Follow Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/layout/layout.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/layout/layout.component.ts ***!
    \*************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppUserLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _song_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../song/header/header.component */
    "./src/app/song/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _song_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../song/footer/footer.component */
    "./src/app/song/footer/footer.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/user/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent(songService) {
        _classCallCheck(this, LayoutComponent);

        this.songService = songService;
        this.songList = [];
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]));
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 3,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_song_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _song_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/navbar/navbar.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/navbar/navbar.component.ts ***!
    \*************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppUserNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 33,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Dropdown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/update-password/update-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/update-password/update-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UpdatePasswordComponent */

  /***/
  function srcAppUserUpdatePasswordUpdatePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function () {
      return UpdatePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/user/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UpdatePasswordComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update failed!. Your password is not match. Please try again");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdatePasswordComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UpdatePasswordComponent = /*#__PURE__*/function () {
      function UpdatePasswordComponent(userService, route, router, fb, token) {
        _classCallCheck(this, UpdatePasswordComponent);

        this.userService = userService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.token = token;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }

      _createClass(UpdatePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this35 = this;

          this.userService.updatePassword(this.oldPassword, this.newPassword).subscribe(function () {
            _this35.isLoggedIn = true;
            _this35.isLoginFailed = false;

            _this35.createSuccess(); // this.router.navigate(['']);
            // window.location.reload();


            _this35.logout();

            console.log('success');
          }, function (error) {
            _this35.isLoginFailed = true;
            _this35.isLoggedIn = false;
            console.log(error);
          });
        }
      }, {
        key: "createSuccess",
        value: function createSuccess() {
          this.Toast.fire({
            icon: 'success',
            title: ' create success '
          });
        }
      }, {
        key: "createFail",
        value: function createFail() {
          this.Toast.fire({
            icon: 'error',
            title: 'create fail'
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token.signOut();
          this.router.navigate(['/login']); // window.location.reload();
        }
      }]);

      return UpdatePasswordComponent;
    }();

    UpdatePasswordComponent.ɵfac = function UpdatePasswordComponent_Factory(t) {
      return new (t || UpdatePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]));
    };

    UpdatePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdatePasswordComponent,
      selectors: [["app-update-password"]],
      decls: 33,
      vars: 4,
      consts: [[1, "container", 2, "text-align", "center", "font-size", "40px"], [1, "main-container", 2, "margin-top", "100px"], [1, "row", "section"], [1, "col-xl-8", "col-md-10", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0", 2, "text-align", "center"], [1, "card-body"], [1, "form-row", "form-group"], ["for", "firstName", 1, "col-lg-2", "text-md-right", "col-form-label"], [1, "col-lg-9"], ["id", "firstName", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lastName", 1, "col-lg-2", "text-md-right", "col-form-label"], ["id", "lastName", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9", "btn-inline"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-outline-success", 3, "click"], ["style", "color: red; padding-left: 55px; font-size: 17px", 4, "ngIf"], ["style", "color: green; padding-left: 55px; font-size: 17px", 4, "ngIf"], [2, "color", "red", "padding-left", "55px", "font-size", "17px"], [2, "color", "green", "padding-left", "55px", "font-size", "17px"]],
      template: function UpdatePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UPDATE PASSWORD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Old password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatePasswordComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.oldPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "New password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatePasswordComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePasswordComponent_Template_button_click_29_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Update user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UpdatePasswordComponent_div_31_Template, 3, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UpdatePasswordComponent_div_32_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oldPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeAreaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-password',
          templateUrl: './update-password.component.html',
          styleUrls: ['./update-password.component.css']
        }]
      }], function () {
        return [{
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/update-profile/update-profile.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/update-profile/update-profile.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateProfileComponent */

  /***/
  function srcAppUserUpdateProfileUpdateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function () {
      return UpdateProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/user/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UpdateProfileComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required and min length is 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateProfileComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateProfileComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required and min length is 5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateProfileComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " successfully! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateProfileComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " update failed. Please try again! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UpdateProfileComponent = /*#__PURE__*/function () {
      function UpdateProfileComponent(userService, storage, route, routes, fb, token) {
        _classCallCheck(this, UpdateProfileComponent);

        this.userService = userService;
        this.storage = storage;
        this.route = route;
        this.routes = routes;
        this.fb = fb;
        this.token = token;
        this.isUpdate = false;
        this.isUpdateFailed = false;
        this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }

      _createClass(UpdateProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.username = this.token.getUsername();
          this.profileForm = this.fb.group({
            // , [Validators.required, Validators.minLength(5)]
            // , [Validators.required, Validators.minLength(5)]
            // , [Validators.required]
            // , [Validators.required]
            firstName: [''],
            lastName: [''],
            phoneNumber: [''],
            email: ['']
          }); // const id = +this.route.snapshot.paramMap.get('id');

          this.userService.getUserByUserName(this.username).subscribe(function (result) {
            _this36.user = result;

            _this36.profileForm.patchValue(_this36.user);

            _this36.success = 'Edit user successfully !';
          }, function (error) {
            _this36.fail = 'Edit user fail';
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this37 = this;

          if (this.profileForm.valid) {
            var value = this.profileForm.value;
            var data = Object.assign(Object.assign({}, this.user), value);
            this.userService.updateUser(data).subscribe(function (result) {
              // console.log('success');
              // this.routes.navigate(['list']);
              _this37.updateSuccess();

              _this37.isUpdate = true;
              _this37.isUpdateFailed = false;
            }, function (error) {
              console.log(error);
              _this37.isUpdate = false;
              _this37.isUpdateFailed = true;
            });
          }
        }
      }, {
        key: "updateSuccess",
        value: function updateSuccess() {
          this.Toast.fire({
            icon: 'success',
            title: 'Cập nhật thành công'
          });
        }
      }]);

      return UpdateProfileComponent;
    }();

    UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) {
      return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]));
    };

    UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateProfileComponent,
      selectors: [["app-update-profile"]],
      decls: 47,
      vars: 6,
      consts: [[1, "container", 2, "text-align", "center", "font-size", "40px"], [1, "main-container", 2, "margin-top", "100px"], [1, "row", "section"], [1, "col-xl-8", "col-md-10", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0", 2, "text-align", "center"], [1, "card-body"], [1, "ng-untouched", "ng-pristine", "ng-valid", 3, "formGroup", "ngSubmit"], [1, "form-row", "form-group"], ["for", "firstName", 1, "col-lg-2", "text-md-right", "col-form-label"], [1, "col-lg-9"], ["id", "firstName", "type", "text", "formControlName", "firstName", 1, "form-control"], ["style", "color: #ff0000", 4, "ngIf"], ["for", "lastName", 1, "col-lg-2", "text-md-right", "col-form-label"], ["id", "lastName", "type", "text", "formControlName", "lastName", 1, "form-control"], ["for", "email", 1, "col-lg-2", "text-md-right", "col-form-label"], ["id", "email", "type", "text", "formControlName", "email", 1, "form-control"], ["style", "color: red", 4, "ngIf"], ["for", "phoneNumber", 1, "col-lg-2", "text-md-right", "col-form-label"], ["id", "phoneNumber", "type", "text", "formControlName", "phoneNumber", 1, "form-control"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9", "btn-inline"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-outline-success"], ["style", "color: green", 4, "ngIf"], [2, "color", "#ff0000"], [2, "color", "red"], [2, "color", "green"]],
      template: function UpdateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UPDATE PROFILE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_13_listener() {
            return ctx.updateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UpdateProfileComponent_div_19_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UpdateProfileComponent_div_30_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UpdateProfileComponent_div_36_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Update user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UpdateProfileComponent_div_45_Template, 2, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UpdateProfileComponent_div_46_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileForm.get("firstName").invalid && ctx.profileForm.get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileForm.get("email").invalid && ctx.profileForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileForm.get("phoneNumber").invalid && ctx.profileForm.get("phoneNumber").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdateFailed);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeAreaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-profile',
          templateUrl: './update-profile.component.html',
          styleUrls: ['./update-profile.component.css']
        }]
      }], function () {
        return [{
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-details/user-details.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/user-details/user-details.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppUserUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");

    var UserDetailsComponent = /*#__PURE__*/function () {
      function UserDetailsComponent(route, userService, tokenService) {
        _classCallCheck(this, UserDetailsComponent);

        this.route = route;
        this.userService = userService;
        this.tokenService = tokenService;
      }

      _createClass(UserDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.getUserInfor();

                  case 2:
                    console.log(this.info.username);

                    if (this.info.username !== '') {
                      console.log('day roi');
                      this.getUserDetail();
                    }

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          }; // console.log(this.info);
          // this.accessToken = this.token.getToken();
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          var _this38 = this;

          this.userService.getUserByUserName(this.info.username).subscribe(function (data) {
            _this38.user = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return UserDetailsComponent;
    }();

    UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) {
      return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]));
    };

    UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserDetailsComponent,
      selectors: [["app-user-details"]],
      decls: 8,
      vars: 4,
      template: function UserDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.password);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-user-details',
          templateUrl: './user-details.component.html',
          styleUrls: ['./user-details.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/user/footer/footer.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/user/layout/layout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcome-area/welcome-area.component */
    "./src/app/user/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/user/navbar/navbar.component.ts");
    /* harmony import */


    var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ckeditor4-angular */
    "./node_modules/ckeditor4-angular/__ivy_ngcc__/fesm2015/ckeditor4-angular.js");
    /* harmony import */


    var _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./update-password/update-password.component */
    "./src/app/user/update-password/update-password.component.ts");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/user/user-details/user-details.component.ts");
    /* harmony import */


    var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./update-profile/update-profile.component */
    "./src/app/user/update-profile/update-profile.component.ts");
    /* harmony import */


    var _song_song_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../song/song.module */
    "./src/app/song/song.module.ts");

    var routes = [{
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      children: [{
        path: 'detail/:id',
        component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"]
      }, {
        path: 'update-profile',
        component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__["UpdateProfileComponent"]
      }, {
        path: 'update-password',
        component: _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_9__["UpdatePasswordComponent"]
      }]
    }];

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_12__["SongModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeAreaComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_9__["UpdatePasswordComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"], _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__["UpdateProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_12__["SongModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeAreaComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_9__["UpdatePasswordComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"], _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__["UpdateProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_12__["SongModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/welcome-area/welcome-area.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/welcome-area/welcome-area.component.ts ***!
    \*************************************************************/

  /*! exports provided: WelcomeAreaComponent */

  /***/
  function srcAppUserWelcomeAreaWelcomeAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeAreaComponent", function () {
      return WelcomeAreaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomeAreaComponent = /*#__PURE__*/function () {
      function WelcomeAreaComponent() {
        _classCallCheck(this, WelcomeAreaComponent);
      }

      _createClass(WelcomeAreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeAreaComponent;
    }();

    WelcomeAreaComponent.ɵfac = function WelcomeAreaComponent_Factory(t) {
      return new (t || WelcomeAreaComponent)();
    };

    WelcomeAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeAreaComponent,
      selectors: [["welcome-area"]],
      decls: 6,
      vars: 0,
      consts: [[1, "breadcumb-area", "bg-img", "bg-overlay", 2, "background-image", "url(../../../assets/img/bg-img/2.jpg)", "margin-bottom", "50px"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-12"], [1, "title", "mt-70", 2, "font-family", "Comic Sans MS"]],
      template: function WelcomeAreaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Relax");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvd2VsY29tZS1hcmVhL3dlbGNvbWUtYXJlYS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'welcome-area',
          templateUrl: './welcome-area.component.html',
          styleUrls: ['./welcome-area.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/sweetalert2/sweetalert2.min.js":
  /*!***************************************************!*\
    !*** ./src/assets/sweetalert2/sweetalert2.min.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function srcAssetsSweetalert2Sweetalert2MinJs(module, exports, __webpack_require__) {
    !function (t, e) {
      true ? module.exports = e() : undefined;
    }(this, function () {
      "use strict";

      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
      }

      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function a(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      }

      function c() {
        return (c = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];

            for (var o in n) {
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
          }

          return t;
        }).apply(this, arguments);
      }

      function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
      }

      function u(t, e) {
        return (u = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        })(t, e);
      }

      function l(t, e, n) {
        return (l = function () {
          if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
            if ("function" == typeof Proxy) return 1;

            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), 1;
            } catch (t) {
              return;
            }
          }
        }() ? Reflect.construct : function (t, e, n) {
          var o = [null];
          o.push.apply(o, e);
          var i = new (Function.bind.apply(t, o))();
          return n && u(i, n.prototype), i;
        }).apply(null, arguments);
      }

      function d(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }(t) : e;
      }

      function p(t, e, n) {
        return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
          var o = function (t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t));) {
              ;
            }

            return t;
          }(t, e);

          if (o) {
            var i = Object.getOwnPropertyDescriptor(o, e);
            return i.get ? i.get.call(n) : i.value;
          }
        })(t, e, n || t);
      }

      function f(e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }

      function m(t) {
        return Array.prototype.slice.call(t);
      }

      function v(t) {
        console.error("".concat(H, " ").concat(t));
      }

      function h(t, e) {
        var n;
        n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === N.indexOf(n) && (N.push(n), D(n));
      }

      function g(t) {
        return t && Promise.resolve(t) === t;
      }

      function b(t) {
        return t instanceof Element || "object" === r(e = t) && e.jquery;
        var e;
      }

      function t(t) {
        var e = {};

        for (var n in t) {
          e[t[n]] = "swal2-" + t[n];
        }

        return e;
      }

      function y(t) {
        var e = W();
        return e ? e.querySelector(t) : null;
      }

      function e(t) {
        return y(".".concat(t));
      }

      function n() {
        var t = K();
        return m(t.querySelectorAll(".".concat(F.icon)));
      }

      function w() {
        var t = n().filter(function (t) {
          return pt(t);
        });
        return t.length ? t[0] : null;
      }

      function C() {
        return e(F.title);
      }

      function k() {
        return e(F.content);
      }

      function x() {
        return e(F.image);
      }

      function P() {
        return e(F["progress-steps"]);
      }

      function A() {
        return e(F["validation-message"]);
      }

      function B() {
        return y(".".concat(F.actions, " .").concat(F.confirm));
      }

      function S() {
        return y(".".concat(F.actions, " .").concat(F.cancel));
      }

      function E() {
        return e(F.actions);
      }

      function O() {
        return e(F.header);
      }

      function T() {
        return e(F.footer);
      }

      function L() {
        return e(F["timer-progress-bar"]);
      }

      function q() {
        return e(F.close);
      }

      function I() {
        var t = m(K().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
          return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0;
        }),
            e = m(K().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
          return "-1" !== t.getAttribute("tabindex");
        });
        return function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            -1 === e.indexOf(t[n]) && e.push(t[n]);
          }

          return e;
        }(t.concat(e)).filter(function (t) {
          return pt(t);
        });
      }

      function j() {
        return !Y() && !document.body.classList.contains(F["no-backdrop"]);
      }

      function M(e, t) {
        if (e.textContent = "", t) {
          var n = new DOMParser().parseFromString(t, "text/html");
          m(n.querySelector("head").childNodes).forEach(function (t) {
            e.appendChild(t);
          }), m(n.querySelector("body").childNodes).forEach(function (t) {
            e.appendChild(t);
          });
        }
      }

      function V(t, e) {
        if (e) {
          for (var n = e.split(/\s+/), o = 0; o < n.length; o++) {
            if (!t.classList.contains(n[o])) return;
          }

          return 1;
        }
      }

      function R(t, e, n) {
        var o, i;

        if (i = e, m((o = t).classList).forEach(function (t) {
          -1 === f(F).indexOf(t) && -1 === f(z).indexOf(t) && -1 === f(i.showClass).indexOf(t) && o.classList.remove(t);
        }), e.customClass && e.customClass[n]) {
          if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return D("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
          ut(t, e.customClass[n]);
        }
      }

      var H = "SweetAlert2:",
          D = function D(t) {
        console.warn("".concat(H, " ").concat(t));
      },
          N = [],
          U = function U(t) {
        return "function" == typeof t ? t() : t;
      },
          _ = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
      }),
          F = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
          z = t(["success", "warning", "info", "question", "error"]),
          W = function W() {
        return document.body.querySelector(".".concat(F.container));
      },
          K = function K() {
        return e(F.popup);
      },
          Y = function Y() {
        return document.body.classList.contains(F["toast-shown"]);
      },
          Z = {
        previousBodyPadding: null
      };

      function Q(t, e) {
        if (!e) return null;

        switch (e) {
          case "select":
          case "textarea":
          case "file":
            return dt(t, F[e]);

          case "checkbox":
            return t.querySelector(".".concat(F.checkbox, " input"));

          case "radio":
            return t.querySelector(".".concat(F.radio, " input:checked")) || t.querySelector(".".concat(F.radio, " input:first-child"));

          case "range":
            return t.querySelector(".".concat(F.range, " input"));

          default:
            return dt(t, F.input);
        }
      }

      function $(t) {
        if (t.focus(), "file" !== t.type) {
          var e = t.value;
          t.value = "", t.value = e;
        }
      }

      function J(t, e, n) {
        t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function (e) {
          t.forEach ? t.forEach(function (t) {
            n ? t.classList.add(e) : t.classList.remove(e);
          }) : n ? t.classList.add(e) : t.classList.remove(e);
        }));
      }

      function X(t, e, n) {
        n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e);
      }

      function G(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : "flex";
        t.style.opacity = "", t.style.display = n;
      }

      function tt(t) {
        t.style.opacity = "", t.style.display = "none";
      }

      function et(t, e, n) {
        e ? G(t, n) : tt(t);
      }

      function nt(t) {
        var e = window.getComputedStyle(t),
            n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < o;
      }

      function ot(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e,
            o = L();
        pt(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function () {
          o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%";
        }, 10));
      }

      function it() {
        return "undefined" == typeof window || "undefined" == typeof document;
      }

      function rt(t) {
        Ge.isVisible() && st !== t.target.value && Ge.resetValidationMessage(), st = t.target.value;
      }

      function at(t, e) {
        t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? ht(t, e) : t && M(e, t);
      }

      function ct(t, e) {
        var n = E(),
            o = B(),
            i = S();
        e.showConfirmButton || e.showCancelButton || tt(n), R(n, e, "actions"), bt(o, "confirm", e), bt(i, "cancel", e), e.buttonsStyling ? function (t, e, n) {
          ut([t, e], F.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor);
          n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor);
          var o = window.getComputedStyle(t).getPropertyValue("background-color");
          t.style.borderLeftColor = o, t.style.borderRightColor = o;
        }(o, i, e) : (lt([o, i], F.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = ""), e.reverseButtons && o.parentNode.insertBefore(i, o);
      }

      var st,
          ut = function ut(t, e) {
        J(t, e, !0);
      },
          lt = function lt(t, e) {
        J(t, e, !1);
      },
          dt = function dt(t, e) {
        for (var n = 0; n < t.childNodes.length; n++) {
          if (V(t.childNodes[n], e)) return t.childNodes[n];
        }
      },
          pt = function pt(t) {
        return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length));
      },
          ft = '\n <div aria-labelledby="'.concat(F.title, '" aria-describedby="').concat(F.content, '" class="').concat(F.popup, '" tabindex="-1">\n   <div class="').concat(F.header, '">\n     <ul class="').concat(F["progress-steps"], '"></ul>\n     <div class="').concat(F.icon, " ").concat(z.error, '"></div>\n     <div class="').concat(F.icon, " ").concat(z.question, '"></div>\n     <div class="').concat(F.icon, " ").concat(z.warning, '"></div>\n     <div class="').concat(F.icon, " ").concat(z.info, '"></div>\n     <div class="').concat(F.icon, " ").concat(z.success, '"></div>\n     <img class="').concat(F.image, '" />\n     <h2 class="').concat(F.title, '" id="').concat(F.title, '"></h2>\n     <button type="button" class="').concat(F.close, '"></button>\n   </div>\n   <div class="').concat(F.content, '">\n     <div id="').concat(F.content, '" class="').concat(F["html-container"], '"></div>\n     <input class="').concat(F.input, '" />\n     <input type="file" class="').concat(F.file, '" />\n     <div class="').concat(F.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(F.select, '"></select>\n     <div class="').concat(F.radio, '"></div>\n     <label for="').concat(F.checkbox, '" class="').concat(F.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(F.label, '"></span>\n     </label>\n     <textarea class="').concat(F.textarea, '"></textarea>\n     <div class="').concat(F["validation-message"], '" id="').concat(F["validation-message"], '"></div>\n   </div>\n   <div class="').concat(F.actions, '">\n     <button type="button" class="').concat(F.confirm, '">OK</button>\n     <button type="button" class="').concat(F.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(F.footer, '"></div>\n   <div class="').concat(F["timer-progress-bar-container"], '">\n     <div class="').concat(F["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
          mt = function mt(t) {
        var e,
            n = !!(e = W()) && (e.parentNode.removeChild(e), lt([document.documentElement, document.body], [F["no-backdrop"], F["toast-shown"], F["has-column"]]), !0);
        if (it()) v("SweetAlert2 requires document to initialize");else {
          var o = document.createElement("div");
          o.className = F.container, n && ut(o, F["no-transition"]), M(o, ft);
          var i,
              r,
              a,
              c,
              s,
              u,
              l,
              d,
              p,
              f,
              m,
              h,
              g = "string" == typeof (i = t.target) ? document.querySelector(i) : i;
          g.appendChild(o), r = t, (a = K()).setAttribute("role", r.toast ? "alert" : "dialog"), a.setAttribute("aria-live", r.toast ? "polite" : "assertive"), r.toast || a.setAttribute("aria-modal", "true"), c = g, "rtl" === window.getComputedStyle(c).direction && ut(W(), F.rtl), s = k(), u = dt(s, F.input), l = dt(s, F.file), d = s.querySelector(".".concat(F.range, " input")), p = s.querySelector(".".concat(F.range, " output")), f = dt(s, F.select), m = s.querySelector(".".concat(F.checkbox, " input")), h = dt(s, F.textarea), u.oninput = rt, l.onchange = rt, f.onchange = rt, m.onchange = rt, h.oninput = rt, d.oninput = function (t) {
            rt(t), p.value = d.value;
          }, d.onchange = function (t) {
            rt(t), d.nextSibling.value = d.value;
          };
        }
      },
          ht = function ht(t, e) {
        t.jquery ? gt(e, t) : M(e, t.toString());
      },
          gt = function gt(t, e) {
        if (t.textContent = "", 0 in e) for (var n = 0; (n in e); n++) {
          t.appendChild(e[n].cloneNode(!0));
        } else t.appendChild(e.cloneNode(!0));
      },
          vt = function () {
        if (it()) return !1;
        var t = document.createElement("div"),
            e = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend"
        };

        for (var n in e) {
          if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
        }

        return !1;
      }();

      function bt(t, e, n) {
        var o;
        et(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), M(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = F[e], R(t, n, "".concat(e, "Button")), ut(t, n["".concat(e, "ButtonClass")]);
      }

      function yt(t, e) {
        var n = W();

        if (n) {
          var o, i, r, a;
          o = n, "string" == typeof (i = e.backdrop) ? o.style.background = i : i || ut([document.documentElement, document.body], F["no-backdrop"]), !e.backdrop && e.allowOutsideClick && D('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), r = n, (a = e.position) in F ? ut(r, F[a]) : (D('The "position" parameter is not valid, defaulting to "center"'), ut(r, F.center)), function (t, e) {
            if (e && "string" == typeof e) {
              var n = "grow-".concat(e);
              n in F && ut(t, F[n]);
            }
          }(n, e.grow), R(n, e, "container");
          var c = document.body.getAttribute("data-swal2-queue-step");
          c && (n.setAttribute("data-queue-step", c), document.body.removeAttribute("data-swal2-queue-step"));
        }
      }

      function wt(t, e) {
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder);
      }

      var Ct = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
      },
          kt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
          xt = function xt(t) {
        if (!St[t.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
        var e = Bt(t.input),
            n = St[t.input](e, t);
        G(n), setTimeout(function () {
          $(n);
        });
      },
          Pt = function Pt(t, e) {
        var n = Q(k(), t);
        if (n) for (var o in !function (t) {
          for (var e = 0; e < t.attributes.length; e++) {
            var n = t.attributes[e].name;
            -1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n);
          }
        }(n), e) {
          "range" === t && "placeholder" === o || n.setAttribute(o, e[o]);
        }
      },
          At = function At(t) {
        var e = Bt(t.input);
        t.customClass && ut(e, t.customClass.input);
      },
          Bt = function Bt(t) {
        var e = F[t] ? F[t] : F.input;
        return dt(k(), e);
      },
          St = {};

      St.text = St.email = St.password = St.number = St.tel = St.url = function (t, e) {
        return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : g(e.inputValue) || D('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), wt(t, e), t.type = e.input, t;
      }, St.file = function (t, e) {
        return wt(t, e), t;
      }, St.range = function (t, e) {
        var n = t.querySelector("input"),
            o = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t;
      }, St.select = function (t, e) {
        if (t.textContent = "", e.inputPlaceholder) {
          var n = document.createElement("option");
          M(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n);
        }

        return t;
      }, St.radio = function (t) {
        return t.textContent = "", t;
      }, St.checkbox = function (t, e) {
        var n = Q(k(), "checkbox");
        n.value = 1, n.id = F.checkbox, n.checked = Boolean(e.inputValue);
        var o = t.querySelector("span");
        return M(o, e.inputPlaceholder), t;
      }, St.textarea = function (e, t) {
        if (e.value = t.inputValue, wt(e, t), "MutationObserver" in window) {
          var n = parseInt(window.getComputedStyle(K()).width),
              o = parseInt(window.getComputedStyle(K()).paddingLeft) + parseInt(window.getComputedStyle(K()).paddingRight);
          new MutationObserver(function () {
            var t = e.offsetWidth + o;
            K().style.width = n < t ? "".concat(t, "px") : null;
          }).observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
          });
        }

        return e;
      };

      function Et(t, e) {
        var n,
            o,
            i,
            r,
            a,
            c = k().querySelector("#".concat(F.content));
        e.html ? (at(e.html, c), G(c, "block")) : e.text ? (c.textContent = e.text, G(c, "block")) : tt(c), n = t, o = e, i = k(), r = Ct.innerParams.get(n), a = !r || o.input !== r.input, kt.forEach(function (t) {
          var e = F[t],
              n = dt(i, e);
          Pt(t, o.inputAttributes), n.className = e, a && tt(n);
        }), o.input && (a && xt(o), At(o)), R(k(), e, "content");
      }

      function Ot() {
        return W().getAttribute("data-queue-step");
      }

      function Tt(t, s) {
        var u = P();
        if (!s.progressSteps || 0 === s.progressSteps.length) return tt(u);
        G(u), u.textContent = "";
        var l = parseInt(void 0 === s.currentProgressStep ? Ot() : s.currentProgressStep);
        l >= s.progressSteps.length && D("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), s.progressSteps.forEach(function (t, e) {
          var n,
              o,
              i,
              r,
              a = (n = t, o = document.createElement("li"), ut(o, F["progress-step"]), M(o, n), o);

          if (u.appendChild(a), e === l && ut(a, F["active-progress-step"]), e !== s.progressSteps.length - 1) {
            var c = (i = t, r = document.createElement("li"), ut(r, F["progress-step-line"]), i.progressStepsDistance && (r.style.width = i.progressStepsDistance), r);
            u.appendChild(c);
          }
        });
      }

      function Lt(t, e) {
        var n,
            o,
            i,
            r,
            a = O();
        R(a, e, "header"), Tt(0, e), function (t, e) {
          var n = Ct.innerParams.get(t);
          if (n && e.icon === n.icon && w()) R(w(), e, "icon");else if (jt(), e.icon) if (-1 !== Object.keys(z).indexOf(e.icon)) {
            var o = y(".".concat(F.icon, ".").concat(z[e.icon]));
            G(o), Vt(o, e), Mt(), R(o, e, "icon"), ut(o, e.showClass.icon);
          } else v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon, '"'));
        }(t, e), function (t) {
          var e = x();
          if (!t.imageUrl) return tt(e);
          G(e), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), X(e, "width", t.imageWidth), X(e, "height", t.imageHeight), e.className = F.image, R(e, t, "image");
        }(e), n = e, o = C(), et(o, n.title || n.titleText), n.title && at(n.title, o), n.titleText && (o.innerText = n.titleText), R(o, n, "title"), i = e, r = q(), M(r, i.closeButtonHtml), R(r, i, "closeButton"), et(r, i.showCloseButton), r.setAttribute("aria-label", i.closeButtonAriaLabel);
      }

      function qt(t, e) {
        var n, o, i, r;
        n = e, o = K(), X(o, "width", n.width), X(o, "padding", n.padding), n.background && (o.style.background = n.background), Dt(o, n), yt(0, e), Lt(t, e), Et(t, e), ct(0, e), i = e, r = T(), et(r, i.footer), i.footer && at(i.footer, r), R(r, i, "footer"), "function" == typeof e.onRender && e.onRender(K());
      }

      function It() {
        return B() && B().click();
      }

      var jt = function jt() {
        for (var t = n(), e = 0; e < t.length; e++) {
          tt(t[e]);
        }
      },
          Mt = function Mt() {
        for (var t = K(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) {
          n[o].style.backgroundColor = e;
        }
      },
          Vt = function Vt(t, e) {
        if (t.textContent = "", e.iconHtml) M(t, Rt(e.iconHtml));else if ("success" === e.icon) M(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ');else if ("error" === e.icon) M(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ');else {
          M(t, Rt({
            question: "?",
            warning: "!",
            info: "i"
          }[e.icon]));
        }
      },
          Rt = function Rt(t) {
        return '<div class="'.concat(F["icon-content"], '">').concat(t, "</div>");
      },
          Ht = [],
          Dt = function Dt(t, e) {
        t.className = "".concat(F.popup, " ").concat(pt(t) ? e.showClass.popup : ""), e.toast ? (ut([document.documentElement, document.body], F["toast-shown"]), ut(t, F.toast)) : ut(t, F.modal), R(t, e, "popup"), "string" == typeof e.customClass && ut(t, e.customClass), e.icon && ut(t, F["icon-".concat(e.icon)]);
      };

      function Nt() {
        var t = K();
        t || Ge.fire(), t = K();
        var e = E(),
            n = B();
        G(e), G(n, "inline-block"), ut([t, e], F.loading), n.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus();
      }

      function Ut() {
        return new Promise(function (t) {
          var e = window.scrollX,
              n = window.scrollY;
          Kt.restoreFocusTimeout = setTimeout(function () {
            Kt.previousActiveElement && Kt.previousActiveElement.focus ? (Kt.previousActiveElement.focus(), Kt.previousActiveElement = null) : document.body && document.body.focus(), t();
          }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n);
        });
      }

      function _t() {
        if (Kt.timeout) return function () {
          var t = L(),
              e = parseInt(window.getComputedStyle(t).width);
          t.style.removeProperty("transition"), t.style.width = "100%";
          var n = parseInt(window.getComputedStyle(t).width),
              o = parseInt(e / n * 100);
          t.style.removeProperty("transition"), t.style.width = "".concat(o, "%");
        }(), Kt.timeout.stop();
      }

      function Ft() {
        if (Kt.timeout) {
          var t = Kt.timeout.start();
          return ot(t), t;
        }
      }

      function zt(t) {
        return Object.prototype.hasOwnProperty.call(Yt, t);
      }

      function Wt(t) {
        return Qt[t];
      }

      var Kt = {},
          Yt = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconHtml: void 0,
        toast: !1,
        animation: !0,
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show"
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide"
        },
        customClass: void 0,
        target: "body",
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showCancelButton: !1,
        preConfirm: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusCancel: !1,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        showLoaderOnConfirm: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputValue: "",
        inputOptions: {},
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        onBeforeOpen: void 0,
        onOpen: void 0,
        onRender: void 0,
        onClose: void 0,
        onAfterClose: void 0,
        onDestroy: void 0,
        scrollbarPadding: !0
      },
          Zt = ["title", "titleText", "text", "html", "icon", "hideClass", "customClass", "allowOutsideClick", "allowEscapeKey", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeight", "imageAlt", "progressSteps", "currentProgressStep"],
          Qt = {
        animation: 'showClass" and "hideClass'
      },
          $t = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
          Jt = Object.freeze({
        isValidParameter: zt,
        isUpdatableParameter: function isUpdatableParameter(t) {
          return -1 !== Zt.indexOf(t);
        },
        isDeprecatedParameter: Wt,
        argsToParams: function argsToParams(o) {
          var i = {};
          return "object" !== r(o[0]) || b(o[0]) ? ["title", "html", "icon"].forEach(function (t, e) {
            var n = o[e];
            "string" == typeof n || b(n) ? i[t] = n : void 0 !== n && v("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(n)));
          }) : c(i, o[0]), i;
        },
        isVisible: function isVisible() {
          return pt(K());
        },
        clickConfirm: It,
        clickCancel: function clickCancel() {
          return S() && S().click();
        },
        getContainer: W,
        getPopup: K,
        getTitle: C,
        getContent: k,
        getHtmlContainer: function getHtmlContainer() {
          return e(F["html-container"]);
        },
        getImage: x,
        getIcon: w,
        getIcons: n,
        getCloseButton: q,
        getActions: E,
        getConfirmButton: B,
        getCancelButton: S,
        getHeader: O,
        getFooter: T,
        getTimerProgressBar: L,
        getFocusableElements: I,
        getValidationMessage: A,
        isLoading: function isLoading() {
          return K().hasAttribute("data-loading");
        },
        fire: function fire() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
            e[n] = arguments[n];
          }

          return l(this, e);
        },
        mixin: function mixin(n) {
          return function (t) {
            function e() {
              return o(this, e), d(this, s(e).apply(this, arguments));
            }

            return function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
              t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  writable: !0,
                  configurable: !0
                }
              }), e && u(t, e);
            }(e, t), a(e, [{
              key: "_main",
              value: function value(t) {
                return p(s(e.prototype), "_main", this).call(this, c({}, n, t));
              }
            }]), e;
          }(this);
        },
        queue: function queue(t) {
          var r = this;
          Ht = t;

          function a(t, e) {
            Ht = [], t(e);
          }

          var c = [];
          return new Promise(function (i) {
            !function e(n, o) {
              n < Ht.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Ht[n]).then(function (t) {
                void 0 !== t.value ? (c.push(t.value), e(n + 1, o)) : a(i, {
                  dismiss: t.dismiss
                });
              })) : a(i, {
                value: c
              });
            }(0);
          });
        },
        getQueueStep: Ot,
        insertQueueStep: function insertQueueStep(t, e) {
          return e && e < Ht.length ? Ht.splice(e, 0, t) : Ht.push(t);
        },
        deleteQueueStep: function deleteQueueStep(t) {
          void 0 !== Ht[t] && Ht.splice(t, 1);
        },
        showLoading: Nt,
        enableLoading: Nt,
        getTimerLeft: function getTimerLeft() {
          return Kt.timeout && Kt.timeout.getTimerLeft();
        },
        stopTimer: _t,
        resumeTimer: Ft,
        toggleTimer: function toggleTimer() {
          var t = Kt.timeout;
          return t && (t.running ? _t : Ft)();
        },
        increaseTimer: function increaseTimer(t) {
          if (Kt.timeout) {
            var e = Kt.timeout.increase(t);
            return ot(e, !0), e;
          }
        },
        isTimerRunning: function isTimerRunning() {
          return Kt.timeout && Kt.timeout.isRunning();
        }
      });

      function Xt() {
        var t = Ct.innerParams.get(this);

        if (t) {
          var e = Ct.domCache.get(this);
          t.showConfirmButton || (tt(e.confirmButton), t.showCancelButton || tt(e.actions)), lt([e.popup, e.actions], F.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.cancelButton.disabled = !1;
        }
      }

      function Gt() {
        null === Z.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (Z.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Z.previousBodyPadding + function () {
          var t = document.createElement("div");
          t.className = F["scrollbar-measure"], document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }(), "px"));
      }

      function te() {
        return !!window.MSInputMethodContext && !!document.documentMode;
      }

      function ee() {
        var t = W(),
            e = K();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start");
      }

      var ne = function ne() {
        var n,
            o = W();
        o.ontouchstart = function (t) {
          var e;
          n = t.target === o || !((e = o).scrollHeight > e.clientHeight) && "INPUT" !== t.target.tagName;
        }, o.ontouchmove = function (t) {
          n && (t.preventDefault(), t.stopPropagation());
        };
      },
          oe = {
        swalPromiseResolve: new WeakMap()
      };

      function ie(t, e, n, o) {
        n ? ce(t, o) : (Ut().then(function () {
          return ce(t, o);
        }), Kt.keydownTarget.removeEventListener("keydown", Kt.keydownHandler, {
          capture: Kt.keydownListenerCapture
        }), Kt.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), j() && (null !== Z.previousBodyPadding && (document.body.style.paddingRight = "".concat(Z.previousBodyPadding, "px"), Z.previousBodyPadding = null), function () {
          if (V(document.body, F.iosfix)) {
            var t = parseInt(document.body.style.top, 10);
            lt(document.body, F.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t;
          }
        }(), "undefined" != typeof window && te() && window.removeEventListener("resize", ee), m(document.body.children).forEach(function (t) {
          t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
        })), lt([document.documentElement, document.body], [F.shown, F["height-auto"], F["no-backdrop"], F["toast-shown"], F["toast-column"]]);
      }

      function re(t) {
        var e = K();

        if (e) {
          var n = Ct.innerParams.get(this);

          if (n && !V(e, n.hideClass.popup)) {
            var o = oe.swalPromiseResolve.get(this);
            lt(e, n.showClass.popup), ut(e, n.hideClass.popup);
            var i = W();
            lt(i, n.showClass.backdrop), ut(i, n.hideClass.backdrop), function (t, e, n) {
              var o = W(),
                  i = vt && nt(e),
                  r = n.onClose,
                  a = n.onAfterClose;

              if (r !== null && typeof r === "function") {
                r(e);
              }

              if (i) {
                ae(t, e, o, a);
              } else {
                ie(t, o, Y(), a);
              }
            }(this, e, n), o(t || {});
          }
        }
      }

      var ae = function ae(t, e, n, o) {
        Kt.swalCloseEventFinishedCallback = ie.bind(null, t, n, Y(), o), e.addEventListener(vt, function (t) {
          t.target === e && (Kt.swalCloseEventFinishedCallback(), delete Kt.swalCloseEventFinishedCallback);
        });
      },
          ce = function ce(t, e) {
        setTimeout(function () {
          "function" == typeof e && e(), t._destroy();
        });
      };

      function se(t, e, n) {
        var o = Ct.domCache.get(t);
        e.forEach(function (t) {
          o[t].disabled = n;
        });
      }

      function ue(t, e) {
        if (!t) return !1;
        if ("radio" === t.type) for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) {
          n[o].disabled = e;
        } else t.disabled = e;
      }

      var le = function () {
        function n(t, e) {
          o(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start();
        }

        return a(n, [{
          key: "start",
          value: function value() {
            return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
          }
        }, {
          key: "stop",
          value: function value() {
            return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date() - this.started), this.remaining;
          }
        }, {
          key: "increase",
          value: function value(t) {
            var e = this.running;
            return e && this.stop(), this.remaining += t, e && this.start(), this.remaining;
          }
        }, {
          key: "getTimerLeft",
          value: function value() {
            return this.running && (this.stop(), this.start()), this.remaining;
          }
        }, {
          key: "isRunning",
          value: function value() {
            return this.running;
          }
        }]), n;
      }(),
          de = {
        email: function email(t, e) {
          return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address");
        },
        url: function url(t, e) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL");
        }
      };

      function pe(t) {
        var e, n;
        (e = t).inputValidator || Object.keys(de).forEach(function (t) {
          e.input === t && (e.inputValidator = de[t]);
        }), t.showLoaderOnConfirm && !t.preConfirm && D("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = U(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (D('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), mt(t);
      }

      function fe(t) {
        var e = W(),
            n = K();
        "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n), Pe(e, n, t), ke(e, n), j() && xe(e, t.scrollbarPadding), Y() || Kt.previousActiveElement || (Kt.previousActiveElement = document.activeElement), "function" == typeof t.onOpen && setTimeout(function () {
          return t.onOpen(n);
        }), lt(e, F["no-transition"]);
      }

      function me(t) {
        var e = K();

        if (t.target === e) {
          var n = W();
          e.removeEventListener(vt, me), n.style.overflowY = "auto";
        }
      }

      function he(t, e) {
        "select" === e.input || "radio" === e.input ? Ee(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && g(e.inputValue) && Oe(t, e);
      }

      function ge(t, e) {
        t.disableButtons(), e.input ? qe(t, e) : Ie(t, e, !0);
      }

      function ve(t, e) {
        t.disableButtons(), e(_.cancel);
      }

      function be(t, e) {
        t.closePopup({
          value: e
        });
      }

      function ye(e, t, n, o) {
        t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
          capture: t.keydownListenerCapture
        }), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function (t) {
          return Ve(e, t, o);
        }, t.keydownTarget = n.keydownListenerCapture ? window : K(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
          capture: t.keydownListenerCapture
        }), t.keydownHandlerAdded = !0);
      }

      function we(t, e, n) {
        var o = I(),
            i = 0;
        if (i < o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        K().focus();
      }

      function Ce(t, e, n) {
        Ct.innerParams.get(t).toast ? Ue(t, e, n) : (Fe(e), ze(e), We(t, e, n));
      }

      var ke = function ke(t, e) {
        vt && nt(e) ? (t.style.overflowY = "hidden", e.addEventListener(vt, me)) : t.style.overflowY = "auto";
      },
          xe = function xe(t, e) {
        !function () {
          if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !V(document.body, F.iosfix)) {
            var t = document.body.scrollTop;
            document.body.style.top = "".concat(-1 * t, "px"), ut(document.body, F.iosfix), ne();
          }
        }(), "undefined" != typeof window && te() && (ee(), window.addEventListener("resize", ee)), m(document.body.children).forEach(function (t) {
          t === W() || function (t, e) {
            if ("function" == typeof t.contains) return t.contains(e);
          }(t, W()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"));
        }), e && Gt(), setTimeout(function () {
          t.scrollTop = 0;
        });
      },
          Pe = function Pe(t, e, n) {
        ut(t, n.showClass.backdrop), G(e), ut(e, n.showClass.popup), ut([document.documentElement, document.body], F.shown), n.heightAuto && n.backdrop && !n.toast && ut([document.documentElement, document.body], F["height-auto"]);
      },
          Ae = function Ae(t) {
        return t.checked ? 1 : 0;
      },
          Be = function Be(t) {
        return t.checked ? t.value : null;
      },
          Se = function Se(t) {
        return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null;
      },
          Ee = function Ee(e, n) {
        function o(t) {
          return Te[n.input](i, Le(t), n);
        }

        var i = k();
        g(n.inputOptions) ? (Nt(), n.inputOptions.then(function (t) {
          e.hideLoading(), o(t);
        })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)));
      },
          Oe = function Oe(e, n) {
        var o = e.getInput();
        tt(o), n.inputValue.then(function (t) {
          o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), G(o), o.focus(), e.hideLoading();
        })["catch"](function (t) {
          v("Error in inputValue promise: ".concat(t)), o.value = "", G(o), o.focus(), e.hideLoading();
        });
      },
          Te = {
        select: function select(t, e, i) {
          var r = dt(t, F.select);
          e.forEach(function (t) {
            var e = t[0],
                n = t[1],
                o = document.createElement("option");
            o.value = e, M(o, n), i.inputValue.toString() === e.toString() && (o.selected = !0), r.appendChild(o);
          }), r.focus();
        },
        radio: function radio(t, e, a) {
          var c = dt(t, F.radio);
          e.forEach(function (t) {
            var e = t[0],
                n = t[1],
                o = document.createElement("input"),
                i = document.createElement("label");
            o.type = "radio", o.name = F.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
            var r = document.createElement("span");
            M(r, n), r.className = F.label, i.appendChild(o), i.appendChild(r), c.appendChild(i);
          });
          var n = c.querySelectorAll("input");
          n.length && n[0].focus();
        }
      },
          Le = function Le(e) {
        var n = [];
        return "undefined" != typeof Map && e instanceof Map ? e.forEach(function (t, e) {
          n.push([e, t]);
        }) : Object.keys(e).forEach(function (t) {
          n.push([t, e[t]]);
        }), n;
      },
          qe = function qe(e, n) {
        var o = function (t, e) {
          var n = t.getInput();
          if (!n) return null;

          switch (e.input) {
            case "checkbox":
              return Ae(n);

            case "radio":
              return Be(n);

            case "file":
              return Se(n);

            default:
              return e.inputAutoTrim ? n.value.trim() : n.value;
          }
        }(e, n);

        n.inputValidator ? (e.disableInput(), Promise.resolve().then(function () {
          return n.inputValidator(o, n.validationMessage);
        }).then(function (t) {
          e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : Ie(e, n, o);
        })) : e.getInput().checkValidity() ? Ie(e, n, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
      },
          Ie = function Ie(e, t, n) {
        (t.showLoaderOnConfirm && Nt(), t.preConfirm) ? (e.resetValidationMessage(), Promise.resolve().then(function () {
          return t.preConfirm(n, t.validationMessage);
        }).then(function (t) {
          pt(A()) || !1 === t ? e.hideLoading() : be(e, void 0 === t ? n : t);
        })) : be(e, n);
      },
          je = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
          Me = ["Escape", "Esc"],
          Ve = function Ve(t, e, n) {
        var o = Ct.innerParams.get(t);
        o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? Re(t, e, o) : "Tab" === e.key ? He(e, o) : -1 !== je.indexOf(e.key) ? De() : -1 !== Me.indexOf(e.key) && Ne(e, o, n);
      },
          Re = function Re(t, e, n) {
        if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
          if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
          It(), e.preventDefault();
        }
      },
          He = function He(t) {
        for (var e = t.target, n = I(), o = -1, i = 0; i < n.length; i++) {
          if (e === n[i]) {
            o = i;
            break;
          }
        }

        t.shiftKey ? we(0, o, -1) : we(0, o, 1), t.stopPropagation(), t.preventDefault();
      },
          De = function De() {
        var t = B(),
            e = S();
        document.activeElement === t && pt(e) ? e.focus() : document.activeElement === e && pt(t) && t.focus();
      },
          Ne = function Ne(t, e, n) {
        U(e.allowEscapeKey) && (t.preventDefault(), n(_.esc));
      },
          Ue = function Ue(e, t, n) {
        t.popup.onclick = function () {
          var t = Ct.innerParams.get(e);
          t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || n(_.close);
        };
      },
          _e = !1,
          Fe = function Fe(e) {
        e.popup.onmousedown = function () {
          e.container.onmouseup = function (t) {
            e.container.onmouseup = void 0, t.target === e.container && (_e = !0);
          };
        };
      },
          ze = function ze(e) {
        e.container.onmousedown = function () {
          e.popup.onmouseup = function (t) {
            e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (_e = !0);
          };
        };
      },
          We = function We(n, o, i) {
        o.container.onclick = function (t) {
          var e = Ct.innerParams.get(n);
          _e ? _e = !1 : t.target === o.container && U(e.allowOutsideClick) && i(_.backdrop);
        };
      };

      var Ke = function Ke(t, e, n) {
        var o = L();
        tt(o), e.timer && (t.timeout = new le(function () {
          n("timer"), delete t.timeout;
        }, e.timer), e.timerProgressBar && (G(o), setTimeout(function () {
          t.timeout.running && ot(e.timer);
        })));
      },
          Ye = function Ye(t, e) {
        if (!e.toast) return U(e.allowEnterKey) ? e.focusCancel && pt(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && pt(t.confirmButton) ? t.confirmButton.focus() : void we(0, -1, 1) : Ze();
      },
          Ze = function Ze() {
        document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
      };

      var Qe,
          $e = function $e(t) {
        for (var e in t) {
          t[e] = new WeakMap();
        }
      },
          Je = Object.freeze({
        hideLoading: Xt,
        disableLoading: Xt,
        getInput: function getInput(t) {
          var e = Ct.innerParams.get(t || this),
              n = Ct.domCache.get(t || this);
          return n ? Q(n.content, e.input) : null;
        },
        close: re,
        closePopup: re,
        closeModal: re,
        closeToast: re,
        enableButtons: function enableButtons() {
          se(this, ["confirmButton", "cancelButton"], !1);
        },
        disableButtons: function disableButtons() {
          se(this, ["confirmButton", "cancelButton"], !0);
        },
        enableInput: function enableInput() {
          return ue(this.getInput(), !1);
        },
        disableInput: function disableInput() {
          return ue(this.getInput(), !0);
        },
        showValidationMessage: function showValidationMessage(t) {
          var e = Ct.domCache.get(this);
          M(e.validationMessage, t);
          var n = window.getComputedStyle(e.popup);
          e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), G(e.validationMessage);
          var o = this.getInput();
          o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", F["validation-message"]), $(o), ut(o, F.inputerror));
        },
        resetValidationMessage: function resetValidationMessage() {
          var t = Ct.domCache.get(this);
          t.validationMessage && tt(t.validationMessage);
          var e = this.getInput();
          e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), lt(e, F.inputerror));
        },
        getProgressSteps: function getProgressSteps() {
          return Ct.domCache.get(this).progressSteps;
        },
        _main: function _main(t) {
          !function (t) {
            for (var e in t) {
              zt(i = e) || D('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== $t.indexOf(o) && D('The parameter "'.concat(o, '" is incompatible with toasts'))), Wt(n = e) && h(n, Wt(n));
            }

            var n, o, i;
          }(t), Kt.currentInstance && Kt.currentInstance._destroy(), Kt.currentInstance = this;

          var e = function (t) {
            var e = c({}, Yt.showClass, t.showClass),
                n = c({}, Yt.hideClass, t.hideClass),
                o = c({}, Yt, t);

            if (o.showClass = e, o.hideClass = n, t.animation === false) {
              o.showClass = {
                popup: "swal2-noanimation",
                backdrop: "swal2-noanimation"
              };
              o.hideClass = {};
            }

            return o;
          }(t);

          pe(e), Object.freeze(e), Kt.timeout && (Kt.timeout.stop(), delete Kt.timeout), clearTimeout(Kt.restoreFocusTimeout);

          var n = function (t) {
            var e = {
              popup: K(),
              container: W(),
              content: k(),
              actions: E(),
              confirmButton: B(),
              cancelButton: S(),
              closeButton: q(),
              validationMessage: A(),
              progressSteps: P()
            };
            return Ct.domCache.set(t, e), e;
          }(this);

          return qt(this, e), Ct.innerParams.set(this, e), function (n, o, i) {
            return new Promise(function (t) {
              var e = function t(e) {
                n.closePopup({
                  dismiss: e
                });
              };

              oe.swalPromiseResolve.set(n, t);

              o.confirmButton.onclick = function () {
                return ge(n, i);
              };

              o.cancelButton.onclick = function () {
                return ve(n, e);
              };

              o.closeButton.onclick = function () {
                return e(_.close);
              };

              Ce(n, o, e);
              ye(n, Kt, i, e);

              if (i.toast && (i.input || i.footer || i.showCloseButton)) {
                ut(document.body, F["toast-column"]);
              } else {
                lt(document.body, F["toast-column"]);
              }

              he(n, i);
              fe(i);
              Ke(Kt, i, e);
              Ye(o, i);
              o.container.scrollTop = 0;
            });
          }(this, n, e);
        },
        update: function update(e) {
          var t = K(),
              n = Ct.innerParams.get(this);
          if (!t || V(t, n.hideClass.popup)) return D("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          var o = {};
          Object.keys(e).forEach(function (t) {
            Ge.isUpdatableParameter(t) ? o[t] = e[t] : D('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'));
          });
          var i = c({}, n, o);
          qt(this, i), Ct.innerParams.set(this, i), Object.defineProperties(this, {
            params: {
              value: c({}, this.params, e),
              writable: !1,
              enumerable: !0
            }
          });
        },
        _destroy: function _destroy() {
          var t = Ct.domCache.get(this),
              e = Ct.innerParams.get(this);
          e && (t.popup && Kt.swalCloseEventFinishedCallback && (Kt.swalCloseEventFinishedCallback(), delete Kt.swalCloseEventFinishedCallback), Kt.deferDisposalTimer && (clearTimeout(Kt.deferDisposalTimer), delete Kt.deferDisposalTimer), "function" == typeof e.onDestroy && e.onDestroy(), delete this.params, delete Kt.keydownHandler, delete Kt.keydownTarget, $e(Ct), $e(oe));
        }
      });

      function Xe() {
        if ("undefined" != typeof window) {
          "undefined" == typeof Promise && v("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), Qe = this;

          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
            e[n] = arguments[n];
          }

          var o = Object.freeze(this.constructor.argsToParams(e));
          Object.defineProperties(this, {
            params: {
              value: o,
              writable: !1,
              enumerable: !0,
              configurable: !0
            }
          });

          var i = this._main(this.params);

          Ct.promise.set(this, i);
        }
      }

      Xe.prototype.then = function (t) {
        return Ct.promise.get(this).then(t);
      }, Xe.prototype["finally"] = function (t) {
        return Ct.promise.get(this)["finally"](t);
      }, c(Xe.prototype, Je), c(Xe, Jt), Object.keys(Je).forEach(function (t) {
        Xe[t] = function () {
          if (Qe) return Qe[t].apply(Qe, arguments);
        };
      }), Xe.DismissReason = _, Xe.version = "9.10.8";
      var Ge = Xe;
      return Ge["default"] = Ge;
    }), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8080',
      firebaseConfig: {
        apiKey: 'AIzaSyDHMrE74Ajdc2C1q8vmb8Mzg4ONHYmV03o',
        authDomain: 'databasezingmp3.firebaseapp.com',
        databaseURL: 'https://databasezingmp3.firebaseio.com',
        projectId: 'databasezingmp3',
        storageBucket: 'databasezingmp3.appspot.com',
        messagingSenderId: '1056839183831',
        appId: '1:1056839183831:web:24baf63579b1786b756f92',
        measurementId: 'G-YTKJ8H8J36'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Module 6\project-bolero-team-front-end\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map