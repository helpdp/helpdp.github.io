function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  "./src/app/app-base.component.ts":
  /*!***************************************!*\
    !*** ./src/app/app-base.component.ts ***!
    \***************************************/

  /*! exports provided: AppBaseComponent */

  /***/
  function srcAppAppBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBaseComponent", function () {
      return AppBaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");

    var AppBaseComponent =
    /*#__PURE__*/
    function () {
      /**
       * Base class for all UI page components
       * @param er many times we needs to access container element
       * @param service MCUIService
       */
      function AppBaseComponent(er, service) {
        _classCallCheck(this, AppBaseComponent);

        this.er = er;
        this.service = service;
        this._subscriptions = [];
        this.util = this.service.util;
        this.el = er.element.nativeElement;
      }

      _createClass(AppBaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initCmp();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.afterInitCmp();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeAll();
          this.destroyCmp();
        }
      }, {
        key: "initCmp",
        value: function initCmp() {// empty
        }
      }, {
        key: "afterInitCmp",
        value: function afterInitCmp() {// for Input() properties that are initialized after initCmp. e.g) "config" property for entryComponents
        }
      }, {
        key: "unsubscribeAll",
        value: function unsubscribeAll() {
          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });

          this._subscriptions = [];
        }
      }, {
        key: "destroyCmp",
        value: function destroyCmp() {// to remove dom elements reference etc.
        }
      }, {
        key: "subscriptions",
        set: function set(value) {
          if (value) {
            this._subscriptions.push(value);
          }
        }
      }]);

      return AppBaseComponent;
    }();

    AppBaseComponent.ɵfac = function AppBaseComponent_Factory(t) {
      return new (t || AppBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__["MCUIService"]));
    };

    AppBaseComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AppBaseComponent,
      inputs: {
        subscriptions: "subscriptions"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__["MCUIService"]
        }];
      }, {
        subscriptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-base.service.ts":
  /*!*************************************!*\
    !*** ./src/app/app-base.service.ts ***!
    \*************************************/

  /*! exports provided: AppBaseService */

  /***/
  function srcAppAppBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBaseService", function () {
      return AppBaseService;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_config_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/config/url */
    "./src/config/url.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");

    var CONS = {};
    /**
     * Base Class for all UI Services
     * Common Utility for services e.g) RESTful HTTP Util, Handling Exceptions
     */

    var AppBaseService =
    /*#__PURE__*/
    function () {
      function AppBaseService(service) {
        _classCallCheck(this, AppBaseService);

        this.service = service;
        this.util = this.service.util;
        this.url = new src_config_url__WEBPACK_IMPORTED_MODULE_1__["Url"](service);
      }

      _createClass(AppBaseService, [{
        key: "getCons",
        value: function getCons(id) {
          return this.util.clone(CONS[id]);
        }
      }, {
        key: "http",
        value: function http(type, url, params, options) {
          var _this = this;

          var http;

          switch (type) {
            case 'get':
              http = this.util.http.get('get', url, null, options);
              break;

            case 'post':
              http = this.util.http.post('post', url, params, options);
              break;

            case 'put':
              http = this.util.http.put('put', url, params, options);
              break;

            case 'delete':
              http = this.util.http.delete('delete', url, params, options);
              break;
          }

          return http.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            _this.util.log([url, data]);

            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            // show the error page
            var msg = "".concat(error.message, " (").concat(error.url, ", ").concat(error.status, ", ").concat(error.statusText, ")"); // prevent the duplicate error message

            if (_this.lastErrorMsg !== msg) {
              _this.lastErrorMsg = msg;

              _this.service.sendMessage({
                from: 'app-base',
                to: 'app',
                action: 'error',
                data: {
                  message: msg
                }
              });

              setTimeout(function (_) {
                return _this.lastErrorMsg = '';
              }, 5000);
            }

            throw error;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyService();
        }
      }, {
        key: "destroyService",
        value: function destroyService() {// to destroy...
        }
      }]);

      return AppBaseService;
    }();

    AppBaseService.ɵfac = function AppBaseService_Factory(t) {
      return new (t || AppBaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_3__["MCUIService"]));
    };

    AppBaseService.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: AppBaseService
    });
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth */
    "./src/app/auth/index.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'signin',
      component: _auth__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
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


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(vr, service) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.vr = vr;
        this.service = service;
        this.service.message.subscribe(function (msg) {
          if (msg.to === 'app') {
            switch (msg.action) {
              case 'error':
                _this2.showMessage(msg.data.message);

                break;
            }
          }
        });
      }

      _createClass(AppComponent, [{
        key: "showMessage",
        value: function showMessage(message) {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__["MCUIService"]));
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
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9oZWxwZGV2c3JjL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21jL2hlbHBkZXZzcmMvc3JjL2Nzcy9fdmFycy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNxQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFRHJDQSxjQUFBO0FFQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9jc3MvdmFycyc7XG5cbjpob3N0IHtcbiAgQGluY2x1ZGUgY29udGFpbmVyO1xuICBvdmVyZmxvdzogYXV0bztcbn0iLCIvLyBQcmltYXJ5IGNvbG9yc1xuJGMtb3JhbmdlLWI6ICNmMzY3MDU7XG4kYy1vcmFuZ2U6ICNmODgzMDA7XG4kYy1vcmFuZ2UtbDogI2ZmYjMwMjtcblxuJGMtYmx1ZTogIzA4NjZDNjtcbiRjLWJsdWUtYjogIzA3NTNhMTtcblxuJGMtY3lhbi1iOiAjMzlhYWFkO1xuJGMtY3lhbjogIzZiYzNiZDtcbiRjLWN5YW4tbDogI2UzZjZmODtcblxuJGMtZ3JlZW46ICMyM0JGMDg7XG4kYy1ncmVlbi1iOiAjMWM5YTA2O1xuXG4kYy1yZWQ6I0RDMzU0NTtcbiRjLXJlZC1iOiNjODIzMzM7XG5cbiRjLXllbGxvdzogI2VlZjY2ZDtcblxuLy8gR3JheVxuJGMtYmxhY2s6ICMwMDA7XG4kYy1ncmF5LWJiYmI6ICMyMzI3MmI7XG4kYy1ncmF5LWJiYjogIzM0M2E0MDtcbiRjLWdyYXktYmI6ICM3MjdiODQ7XG4kYy1ncmF5LWI6ICM4NjhlOTY7XG4kYy1ncmF5OiAjZTJlNmVhO1xuJGMtZ3JheS1sOiAjZjhmOWZhO1xuJGMtd2hpdGU6ICNmZmY7XG5cbiRjLXRleHQ6ICRjLWdyYXktYmJiYjtcbiRjLWJvcmRlcjogJGMtZ3JheTtcbiRjLWJnOiAkYy1ncmF5LWw7XG5cbiRjLXN1Y2Nlc3M6ICRjLWdyZWVuO1xuJGMtd2FybmluZzogJGMtb3JhbmdlO1xuJGMtZXJyb3I6ICRjLXJlZDtcblxuQG1peGluIGNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1peGluIHJlYWRvbmx5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQG1peGluIHJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbkBtaXhpbiBjZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIxKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy13aGl0ZTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__["MCUIService"]
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth */
    "./src/app/auth/index.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_auth__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], mc_ui_angular__WEBPACK_IMPORTED_MODULE_6__["MCUIModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], mc_ui_angular__WEBPACK_IMPORTED_MODULE_6__["MCUIModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], mc_ui_angular__WEBPACK_IMPORTED_MODULE_6__["MCUIModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]],
          providers: [_auth__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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


    var _app_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app-base.service */
    "./src/app/app-base.service.ts");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");

    var AuthService =
    /*#__PURE__*/
    function (_app_base_service__WE) {
      _inherits(AuthService, _app_base_service__WE);

      function AuthService(service) {
        var _this3;

        _classCallCheck(this, AuthService);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AuthService).call(this, service));
        _this3.service = service;
        return _this3;
      }

      return AuthService;
    }(_app_base_service__WEBPACK_IMPORTED_MODULE_1__["AppBaseService"]);

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/index.ts":
  /*!*******************************!*\
    !*** ./src/app/auth/index.ts ***!
    \*******************************/

  /*! exports provided: SigninComponent, AuthService */

  /***/
  function srcAppAuthIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/auth/signin/signin.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"];
    });
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
    });
    /***/

  },

  /***/
  "./src/app/auth/signin/signin.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signin/signin.component.ts ***!
    \*************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppAuthSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../index */
    "./src/app/index.ts");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SigninComponent =
    /*#__PURE__*/
    function (_index__WEBPACK_IMPOR) {
      _inherits(SigninComponent, _index__WEBPACK_IMPOR);

      function SigninComponent(er, service, authService, router) {
        var _this4;

        _classCallCheck(this, SigninComponent);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(SigninComponent).call(this, er, service));
        _this4.er = er;
        _this4.service = service;
        _this4.authService = authService;
        _this4.router = router;
        return _this4;
      }

      _createClass(SigninComponent, [{
        key: "onCanPlay",
        value: function onCanPlay(e) {
          e.target.muted = true;
          e.target.play();
        }
      }, {
        key: "onSignup",
        value: function onSignup() {}
      }, {
        key: "onPressSignin",
        value: function onPressSignin() {}
      }, {
        key: "onClickForgotPassword",
        value: function onClickForgotPassword() {}
      }]);

      return SigninComponent;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["AppBaseComponent"]);

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["mc-signin"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 24,
      vars: 0,
      consts: [["src", "../../../assets//videos/leaves.mp4", "type", "video/mp4", "autoplay", "", "muted", "", "loop", "", 1, "signin--video", 3, "canplay"], [1, "signin"], [1, "signin--header"], [1, "signin--header--title", "mc-logo-text"], [1, "mc-logo-text--1"], [1, "mc-logo-text--2"], [1, "signin--header--description"], [1, "signin--body"], ["frm", ""], ["theme", "dark", "placeholder", "Enter your username", "name", "username"], ["type", "password", "theme", "dark", "placeholder", "Enter your password", "name", "username"], [1, "signin--body--forgot-password"], ["href", "#", 3, "click"], ["theme", "signin", 3, "press"], [1, "signin--footer"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("canplay", function SigninComponent_Template_video_canplay_0_listener($event) {
            return ctx.onCanPlay($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign In to Your MC UI Account!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mc-form", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mc-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mc-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_a_click_16_listener($event) {
            return ctx.onClickForgotPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forgot password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mc-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("press", function SigninComponent_Template_mc_button_press_18_listener($event) {
            return ctx.onPressSignin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Not yet a member? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_a_click_22_listener($event) {
            return ctx.onSignup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["FieldComponent"], mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n  display: grid;\n  place-items: center center;\n  color: #e2e6ea;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6bc3bd;\n}\n[_nghost-%COMP%]   .signin--video[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  background-size: cover;\n}\n[_nghost-%COMP%]   .signin[_ngcontent-%COMP%] {\n  width: 350px;\n  padding: 40px;\n  background-color: #727b84;\n  border-radius: 3px;\n}\n[_nghost-%COMP%]   .signin--header[_ngcontent-%COMP%]   .mc-logo-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n}\n[_nghost-%COMP%]   .signin--header[_ngcontent-%COMP%]   .mc-logo-text--2[_ngcontent-%COMP%] {\n  color: #6bc3bd;\n}\n[_nghost-%COMP%]   .signin--header--description[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .signin--body[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n[_nghost-%COMP%]   .signin--body--forgot-password[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .signin--footer[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9oZWxwZGV2c3JjL3NyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21jL2hlbHBkZXZzcmMvc3JjL2Nzcy9fdmFycy5zY3NzIiwic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUNzQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFRHRDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQ3FCSztBQ25CVDtBRkFJO0VBQ0UsY0NDRztBQ0NUO0FGQ0k7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRUNSO0FGRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQ0ZNO0VBMEJWLGtCQUFBO0FDdkJGO0FGRVE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUVBVjtBRkVVO0VBQ0ksY0MzQkw7QUMyQlQ7QUZHUTtFQUNFLGtCQUFBO0FFRFY7QUZJTTtFQUNFLGlCQUFBO0FFRlI7QUZHUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRURWO0FGSU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FFRlIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycyc7XG46aG9zdCB7XG4gICAgQGluY2x1ZGUgY29udGFpbmVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XG4gICAgY29sb3I6ICRjLWdyYXk7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkYy1jeWFuO1xuICAgIH1cblxuICAgIC5zaWduaW4tLXZpZGVvIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHotaW5kZXg6IC0xMDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuXG4gICAgLnNpZ25pbiB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGMtZ3JheS1iYjtcbiAgICAgIEBpbmNsdWRlIHJvdW5kZWQ7XG4gICAgICAmLS1oZWFkZXIge1xuICAgICAgICAubWMtbG9nby10ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgJi0tMSB7fVxuICAgICAgICAgICYtLTIge1xuICAgICAgICAgICAgICBjb2xvcjogJGMtY3lhbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi0tZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi0tYm9keSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAmLS1mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLS1mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxufVxuIiwiLy8gUHJpbWFyeSBjb2xvcnNcbiRjLW9yYW5nZS1iOiAjZjM2NzA1O1xuJGMtb3JhbmdlOiAjZjg4MzAwO1xuJGMtb3JhbmdlLWw6ICNmZmIzMDI7XG5cbiRjLWJsdWU6ICMwODY2QzY7XG4kYy1ibHVlLWI6ICMwNzUzYTE7XG5cbiRjLWN5YW4tYjogIzM5YWFhZDtcbiRjLWN5YW46ICM2YmMzYmQ7XG4kYy1jeWFuLWw6ICNlM2Y2Zjg7XG5cbiRjLWdyZWVuOiAjMjNCRjA4O1xuJGMtZ3JlZW4tYjogIzFjOWEwNjtcblxuJGMtcmVkOiNEQzM1NDU7XG4kYy1yZWQtYjojYzgyMzMzO1xuXG4kYy15ZWxsb3c6ICNlZWY2NmQ7XG5cbi8vIEdyYXlcbiRjLWJsYWNrOiAjMDAwO1xuJGMtZ3JheS1iYmJiOiAjMjMyNzJiO1xuJGMtZ3JheS1iYmI6ICMzNDNhNDA7XG4kYy1ncmF5LWJiOiAjNzI3Yjg0O1xuJGMtZ3JheS1iOiAjODY4ZTk2O1xuJGMtZ3JheTogI2UyZTZlYTtcbiRjLWdyYXktbDogI2Y4ZjlmYTtcbiRjLXdoaXRlOiAjZmZmO1xuXG4kYy10ZXh0OiAkYy1ncmF5LWJiYmI7XG4kYy1ib3JkZXI6ICRjLWdyYXk7XG4kYy1iZzogJGMtZ3JheS1sO1xuXG4kYy1zdWNjZXNzOiAkYy1ncmVlbjtcbiRjLXdhcm5pbmc6ICRjLW9yYW5nZTtcbiRjLWVycm9yOiAkYy1yZWQ7XG5cbkBtaXhpbiBjb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiByZWFkb25seSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkBtaXhpbiByb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5AbWl4aW4gY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIGNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGMtd2hpdGU7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XG4gIGNvbG9yOiAjZTJlNmVhO1xufVxuOmhvc3QgYSB7XG4gIGNvbG9yOiAjNmJjM2JkO1xufVxuOmhvc3QgLnNpZ25pbi0tdmlkZW8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogLTEwMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbjpob3N0IC5zaWduaW4ge1xuICB3aWR0aDogMzUwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjdiODQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbjpob3N0IC5zaWduaW4tLWhlYWRlciAubWMtbG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOmhvc3QgLnNpZ25pbi0taGVhZGVyIC5tYy1sb2dvLXRleHQtLTIge1xuICBjb2xvcjogIzZiYzNiZDtcbn1cbjpob3N0IC5zaWduaW4tLWhlYWRlci0tZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuc2lnbmluLS1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG46aG9zdCAuc2lnbmluLS1ib2R5LS1mb3Jnb3QtcGFzc3dvcmQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuc2lnbmluLS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-signin',
          styleUrls: ['signin.component.scss'],
          templateUrl: 'signin.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/example/example-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/example/example-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ExampleRoutingModule */

  /***/
  function srcAppHomeExampleExampleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleRoutingModule", function () {
      return ExampleRoutingModule;
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


    var _example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./example.component */
    "./src/app/home/example/example.component.ts");

    var exampleRoutes = [{
      path: '',
      component: _example_component__WEBPACK_IMPORTED_MODULE_2__["ExampleComponent"],
      children: []
    }];

    var ExampleRoutingModule = function ExampleRoutingModule() {
      _classCallCheck(this, ExampleRoutingModule);
    };

    ExampleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExampleRoutingModule
    });
    ExampleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExampleRoutingModule_Factory(t) {
        return new (t || ExampleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(exampleRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExampleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(exampleRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/example/example.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/example/example.component.ts ***!
    \***************************************************/

  /*! exports provided: ExampleComponent */

  /***/
  function srcAppHomeExampleExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleComponent", function () {
      return ExampleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../index */
    "./src/app/index.ts");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");

    function ExampleComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", data_r3.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r3.name, " - ", data_r3.date, "");
      }
    }

    var ExampleComponent =
    /*#__PURE__*/
    function (_index__WEBPACK_IMPOR2) {
      _inherits(ExampleComponent, _index__WEBPACK_IMPOR2);

      function ExampleComponent(er, service) {
        var _this5;

        _classCallCheck(this, ExampleComponent);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ExampleComponent).call(this, er, service));
        _this5.er = er;
        _this5.service = service;
        _this5.data = [{
          id: '../../../assets/mp3/JWT.mp3',
          name: 'JWT',
          date: '12/01/2019'
        }, {
          id: '../../../assets/mp3/TheStateOfJavascriptIn2019.mp3',
          name: 'The State of Javascript in 2019',
          date: '12/08/2019'
        }, {
          id: '../../../assets/mp3/BehavioralInterviewStar.mp3',
          name: 'Behavioral Interview STAR',
          date: '12/18/2019'
        }, {
          id: '../../../assets/mp3/BigO.mp3',
          name: 'Big O',
          date: '01/04/2020'
        }, {
          id: '../../../assets/mp3/EventLoopAndWebWorkers.mp3',
          name: 'Javascript Event loop and Web Workers',
          date: '01/26/2020'
        }, {
          id: '../../../assets/mp3/CSS_Specificity.mp3',
          name: 'CSS Specificity',
          date: '02/02/2020'
        }, {
          id: '../../../assets/mp3/MachineLearningAlgorithms.mp3',
          name: 'Machine Learning Algorithms Overview',
          date: '02/10/2020'
        }].reverse();
        return _this5;
      }

      return ExampleComponent;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["AppBaseComponent"]);

    ExampleComponent.ɵfac = function ExampleComponent_Factory(t) {
      return new (t || ExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]));
    };

    ExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleComponent,
      selectors: [["mc-example"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 2,
      consts: [[1, "example--item"], [1, "example--item--header"], ["href", "https://play.google.com/music/playlist/AMaBXyn_X1BLS5v9qdLCHYM6etKXSyZ1dmf0wJYwz-TO7dq79R52hOTs76o70b9OEzpmPRyKwmLE3ohVVdK8HmMH3KkT8ByumQ%3D%3D", "target", "_new"], [1, "example--item--body"], [3, "data", "itemTpl"], ["itemTpl", ""], ["target", "_new", 3, "href"]],
      template: function ExampleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uAC1C\uBC1C\uC790\uB9E4\uC77C\uC601\uC5B4 mp3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Google Music Playlist Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mc-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleComponent_ng_template_8_Template, 2, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("itemTpl", _r1);
        }
      },
      directives: [mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n  background-color: #f8f9fa;\n}\n[_nghost-%COMP%]   .example--item[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.21);\n  border-radius: 3px;\n  padding: 25px;\n  background-color: #fff;\n  height: 100%;\n  position: relative;\n  padding-top: 85px;\n}\n[_nghost-%COMP%]   .example--item--header[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 25px;\n  top: 0;\n  left: 0;\n}\n[_nghost-%COMP%]   .example--item--header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .example--item--body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9oZWxwZGV2c3JjL3NyYy9hcHAvaG9tZS9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWMvaGVscGRldnNyYy9zcmMvY3NzL192YXJzLnNjc3MiLCJzcmMvYXBwL2hvbWUvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDcUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RURyQ0EseUJDdUJTO0FDdEJYO0FGQ0k7RUN1REYsc0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQXJDUTtFRHBCSixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRUtOO0FGSk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBRU1SO0FGTFE7RUFDRSx5QkFBQTtBRU9WO0FGSk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUVNUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY3NzL3ZhcnMnO1xuXG46aG9zdCB7XG4gIEBpbmNsdWRlIGNvbnRhaW5lcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGMtYmc7XG4gIC5leGFtcGxlIHtcbiAgICAmLS1pdGVtIHtcbiAgICAgIEBpbmNsdWRlIGNhcmQ7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXRvcDogODVweDtcbiAgICAgICYtLWhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoNiB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi0tYm9keSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gUHJpbWFyeSBjb2xvcnNcbiRjLW9yYW5nZS1iOiAjZjM2NzA1O1xuJGMtb3JhbmdlOiAjZjg4MzAwO1xuJGMtb3JhbmdlLWw6ICNmZmIzMDI7XG5cbiRjLWJsdWU6ICMwODY2QzY7XG4kYy1ibHVlLWI6ICMwNzUzYTE7XG5cbiRjLWN5YW4tYjogIzM5YWFhZDtcbiRjLWN5YW46ICM2YmMzYmQ7XG4kYy1jeWFuLWw6ICNlM2Y2Zjg7XG5cbiRjLWdyZWVuOiAjMjNCRjA4O1xuJGMtZ3JlZW4tYjogIzFjOWEwNjtcblxuJGMtcmVkOiNEQzM1NDU7XG4kYy1yZWQtYjojYzgyMzMzO1xuXG4kYy15ZWxsb3c6ICNlZWY2NmQ7XG5cbi8vIEdyYXlcbiRjLWJsYWNrOiAjMDAwO1xuJGMtZ3JheS1iYmJiOiAjMjMyNzJiO1xuJGMtZ3JheS1iYmI6ICMzNDNhNDA7XG4kYy1ncmF5LWJiOiAjNzI3Yjg0O1xuJGMtZ3JheS1iOiAjODY4ZTk2O1xuJGMtZ3JheTogI2UyZTZlYTtcbiRjLWdyYXktbDogI2Y4ZjlmYTtcbiRjLXdoaXRlOiAjZmZmO1xuXG4kYy10ZXh0OiAkYy1ncmF5LWJiYmI7XG4kYy1ib3JkZXI6ICRjLWdyYXk7XG4kYy1iZzogJGMtZ3JheS1sO1xuXG4kYy1zdWNjZXNzOiAkYy1ncmVlbjtcbiRjLXdhcm5pbmc6ICRjLW9yYW5nZTtcbiRjLWVycm9yOiAkYy1yZWQ7XG5cbkBtaXhpbiBjb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiByZWFkb25seSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkBtaXhpbiByb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5AbWl4aW4gY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIGNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGMtd2hpdGU7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cbjpob3N0IC5leGFtcGxlLS1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogODVweDtcbn1cbjpob3N0IC5leGFtcGxlLS1pdGVtLS1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbjpob3N0IC5leGFtcGxlLS1pdGVtLS1oZWFkZXIgaDYge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgLmV4YW1wbGUtLWl0ZW0tLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-example',
          styleUrls: ['example.component.scss'],
          templateUrl: 'example.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/example/example.module.ts":
  /*!************************************************!*\
    !*** ./src/app/home/example/example.module.ts ***!
    \************************************************/

  /*! exports provided: ExampleModule */

  /***/
  function srcAppHomeExampleExampleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleModule", function () {
      return ExampleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");
    /* harmony import */


    var _example_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./example-routing.module */
    "./src/app/home/example/example-routing.module.ts");
    /* harmony import */


    var _example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./example.component */
    "./src/app/home/example/example.component.ts");

    var ExampleModule = function ExampleModule() {
      _classCallCheck(this, ExampleModule);
    };

    ExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExampleModule
    });
    ExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExampleModule_Factory(t) {
        return new (t || ExampleModule)();
      },
      providers: [],
      imports: [[mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__["MCUIModule"], _example_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExampleRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExampleModule, {
        declarations: [_example_component__WEBPACK_IMPORTED_MODULE_3__["ExampleComponent"]],
        imports: [mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__["MCUIModule"], _example_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExampleRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [mc_ui_angular__WEBPACK_IMPORTED_MODULE_1__["MCUIModule"], _example_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExampleRoutingModule"]],
          declarations: [_example_component__WEBPACK_IMPORTED_MODULE_3__["ExampleComponent"]],
          entryComponents: [],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-header/home-header.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/home/home-header/home-header.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomeHeaderComponent */

  /***/
  function srcAppHomeHomeHeaderHomeHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function () {
      return HomeHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../index */
    "./src/app/index.ts");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../home.service */
    "./src/app/home/home.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    var HomeHeaderComponent =
    /*#__PURE__*/
    function (_index__WEBPACK_IMPOR3) {
      _inherits(HomeHeaderComponent, _index__WEBPACK_IMPOR3);

      function HomeHeaderComponent(er, service, homeService, router) {
        var _this6;

        _classCallCheck(this, HomeHeaderComponent);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(HomeHeaderComponent).call(this, er, service));
        _this6.er = er;
        _this6.service = service;
        _this6.homeService = homeService;
        _this6.router = router;
        _this6.menuData = _this6.homeService.getMenuList();
        return _this6;
      }

      _createClass(HomeHeaderComponent, [{
        key: "onListAction",
        value: function onListAction(e) {
          switch (e.action) {
            case 'select-item':
              this.router.navigate([e.selectedItem.id]);
              break;
          }
        }
      }]);

      return HomeHeaderComponent;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["AppBaseComponent"]);

    HomeHeaderComponent.ɵfac = function HomeHeaderComponent_Factory(t) {
      return new (t || HomeHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    HomeHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeHeaderComponent,
      selectors: [["mc-home-header"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 5,
      consts: [[1, "home-header--header"], ["href", "/", 1, "home-header--header--logo"], [1, "home-header--header--logo", "home-header--header--logo--1"], [1, "home-header--header--logo--2"], [1, "home-header--body"], [3, "data", "selectedItems", "horizontal", "action"]],
      template: function HomeHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mc-list-basic", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function HomeHeaderComponent_Template_mc_list_basic_action_7_listener($event) {
            return ctx.onListAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.menuData)("selectedItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.menuData[0]))("horizontal", true);
        }
      },
      directives: [mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["ListBasicComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 55px;\n  background-color: #fff;\n  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.16);\n}\n[_nghost-%COMP%]   .home-header--header[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0 20px;\n}\n[_nghost-%COMP%]   .home-header--header--logo[_ngcontent-%COMP%] {\n  font-size: 24px;\n  letter-spacing: -1px;\n  line-height: 54px;\n  font-weight: 700;\n}\n[_nghost-%COMP%]   .home-header--header--logo--1[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   .home-header--header--logo--2[_ngcontent-%COMP%] {\n  color: #39aaad;\n}\n[_nghost-%COMP%]   .home-header--body[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 53px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9oZWxwZGV2c3JjL3NyYy9hcHAvaG9tZS9ob21lLWhlYWRlci9ob21lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWhlYWRlci9ob21lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYy9oZWxwZGV2c3JjL3NyYy9jc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDZDQUFBO0FDREY7QURHSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVRO0VBQ0UsV0VKQTtBRElWO0FER1E7RUFDRSxjRXJCQztBRG9CWDtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWhlYWRlci9ob21lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Nzcy92YXJzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLmhvbWUtaGVhZGVyIHtcbiAgICAmLS1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICYtLWxvZ28ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgICAmLS0xIHtcbiAgICAgICAgICBjb2xvcjogJGMtYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmLS0yIHtcbiAgICAgICAgICBjb2xvcjogJGMtY3lhbi1iO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi0tYm9keSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogNTNweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG46aG9zdCAuaG9tZS1oZWFkZXItLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG46aG9zdCAuaG9tZS1oZWFkZXItLWhlYWRlci0tbG9nbyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOmhvc3QgLmhvbWUtaGVhZGVyLS1oZWFkZXItLWxvZ28tLTEge1xuICBjb2xvcjogIzAwMDtcbn1cbjpob3N0IC5ob21lLWhlYWRlci0taGVhZGVyLS1sb2dvLS0yIHtcbiAgY29sb3I6ICMzOWFhYWQ7XG59XG46aG9zdCAuaG9tZS1oZWFkZXItLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1M3B4O1xufSIsIi8vIFByaW1hcnkgY29sb3JzXG4kYy1vcmFuZ2UtYjogI2YzNjcwNTtcbiRjLW9yYW5nZTogI2Y4ODMwMDtcbiRjLW9yYW5nZS1sOiAjZmZiMzAyO1xuXG4kYy1ibHVlOiAjMDg2NkM2O1xuJGMtYmx1ZS1iOiAjMDc1M2ExO1xuXG4kYy1jeWFuLWI6ICMzOWFhYWQ7XG4kYy1jeWFuOiAjNmJjM2JkO1xuJGMtY3lhbi1sOiAjZTNmNmY4O1xuXG4kYy1ncmVlbjogIzIzQkYwODtcbiRjLWdyZWVuLWI6ICMxYzlhMDY7XG5cbiRjLXJlZDojREMzNTQ1O1xuJGMtcmVkLWI6I2M4MjMzMztcblxuJGMteWVsbG93OiAjZWVmNjZkO1xuXG4vLyBHcmF5XG4kYy1ibGFjazogIzAwMDtcbiRjLWdyYXktYmJiYjogIzIzMjcyYjtcbiRjLWdyYXktYmJiOiAjMzQzYTQwO1xuJGMtZ3JheS1iYjogIzcyN2I4NDtcbiRjLWdyYXktYjogIzg2OGU5NjtcbiRjLWdyYXk6ICNlMmU2ZWE7XG4kYy1ncmF5LWw6ICNmOGY5ZmE7XG4kYy13aGl0ZTogI2ZmZjtcblxuJGMtdGV4dDogJGMtZ3JheS1iYmJiO1xuJGMtYm9yZGVyOiAkYy1ncmF5O1xuJGMtYmc6ICRjLWdyYXktbDtcblxuJGMtc3VjY2VzczogJGMtZ3JlZW47XG4kYy13YXJuaW5nOiAkYy1vcmFuZ2U7XG4kYy1lcnJvcjogJGMtcmVkO1xuXG5AbWl4aW4gY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gcmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWl4aW4gcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuQG1peGluIGNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBjYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjLXdoaXRlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-home-header',
          styleUrls: ['home-header.component.scss'],
          templateUrl: 'home-header.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]
        }, {
          type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
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


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! . */
    "./src/app/home/index.ts");

    var homeRoutes = [{
      path: 'home',
      component: ___WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      children: [{
        path: 'example',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./example/example.module */
          "./src/app/home/example/example.module.ts")).then(function (m) {
            return m.ExampleModule;
          });
        }
      }]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(homeRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(homeRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../index */
    "./src/app/index.ts");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");
    /* harmony import */


    var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-header/home-header.component */
    "./src/app/home/home-header/home-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function (_index__WEBPACK_IMPOR4) {
      _inherits(HomeComponent, _index__WEBPACK_IMPOR4);

      function HomeComponent(er, service) {
        var _this7;

        _classCallCheck(this, HomeComponent);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(HomeComponent).call(this, er, service));
        _this7.er = er;
        _this7.service = service;
        return _this7;
      }

      return HomeComponent;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["AppBaseComponent"]);

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["mc-home"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 0,
      consts: [[1, "home"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-home-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_3__["HomeHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n  padding: 20px;\n  padding-top: 75px;\n  background-color: #f8f9fa;\n}\n[_nghost-%COMP%]   .home[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9oZWxwZGV2c3JjL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21jL2hlbHBkZXZzcmMvc3JjL2Nzcy9fdmFycy5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNxQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFRHJDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNxQlM7QUNwQlg7QUZBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBRUVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY3NzL3ZhcnMnO1xuXG46aG9zdCB7XG4gIEBpbmNsdWRlIGNvbnRhaW5lcjtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDc1cHg7IC8vIGhlYWRlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1iZztcbiAgLmhvbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiIsIi8vIFByaW1hcnkgY29sb3JzXG4kYy1vcmFuZ2UtYjogI2YzNjcwNTtcbiRjLW9yYW5nZTogI2Y4ODMwMDtcbiRjLW9yYW5nZS1sOiAjZmZiMzAyO1xuXG4kYy1ibHVlOiAjMDg2NkM2O1xuJGMtYmx1ZS1iOiAjMDc1M2ExO1xuXG4kYy1jeWFuLWI6ICMzOWFhYWQ7XG4kYy1jeWFuOiAjNmJjM2JkO1xuJGMtY3lhbi1sOiAjZTNmNmY4O1xuXG4kYy1ncmVlbjogIzIzQkYwODtcbiRjLWdyZWVuLWI6ICMxYzlhMDY7XG5cbiRjLXJlZDojREMzNTQ1O1xuJGMtcmVkLWI6I2M4MjMzMztcblxuJGMteWVsbG93OiAjZWVmNjZkO1xuXG4vLyBHcmF5XG4kYy1ibGFjazogIzAwMDtcbiRjLWdyYXktYmJiYjogIzIzMjcyYjtcbiRjLWdyYXktYmJiOiAjMzQzYTQwO1xuJGMtZ3JheS1iYjogIzcyN2I4NDtcbiRjLWdyYXktYjogIzg2OGU5NjtcbiRjLWdyYXk6ICNlMmU2ZWE7XG4kYy1ncmF5LWw6ICNmOGY5ZmE7XG4kYy13aGl0ZTogI2ZmZjtcblxuJGMtdGV4dDogJGMtZ3JheS1iYmJiO1xuJGMtYm9yZGVyOiAkYy1ncmF5O1xuJGMtYmc6ICRjLWdyYXktbDtcblxuJGMtc3VjY2VzczogJGMtZ3JlZW47XG4kYy13YXJuaW5nOiAkYy1vcmFuZ2U7XG4kYy1lcnJvcjogJGMtcmVkO1xuXG5AbWl4aW4gY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gcmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWl4aW4gcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuQG1peGluIGNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBjYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjLXdoaXRlO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuOmhvc3QgLmhvbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mc-home',
          styleUrls: ['home.component.scss'],
          templateUrl: 'home.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! . */
    "./src/app/home/index.ts");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _example_example_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./example/example.module */
    "./src/app/home/example/example.module.ts");
    /* harmony import */


    var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-header/home-header.component */
    "./src/app/home/home-header/home-header.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      providers: [___WEBPACK_IMPORTED_MODULE_1__["HomeService"]],
      imports: [[mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _example_example_module__WEBPACK_IMPORTED_MODULE_4__["ExampleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [___WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_5__["HomeHeaderComponent"]],
        imports: [mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _example_example_module__WEBPACK_IMPORTED_MODULE_4__["ExampleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [mc_ui_angular__WEBPACK_IMPORTED_MODULE_2__["MCUIModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _example_example_module__WEBPACK_IMPORTED_MODULE_4__["ExampleModule"]],
          declarations: [___WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_5__["HomeHeaderComponent"]],
          entryComponents: [],
          providers: [___WEBPACK_IMPORTED_MODULE_1__["HomeService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.service.ts":
  /*!**************************************!*\
    !*** ./src/app/home/home.service.ts ***!
    \**************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppHomeHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app-base.service */
    "./src/app/app-base.service.ts");
    /* harmony import */


    var src_test_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/test/api */
    "./src/test/api/index.ts");
    /* harmony import */


    var mc_ui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! mc-ui-angular */
    "./node_modules/mc-ui-angular/__ivy_ngcc__/fesm2015/mc-ui-angular.js");

    var CONS = {
      homeLeftMenu: {
        data: {
          menu: [{
            id: '/home/example',
            name: '개발자매일영어',
            depth: 0
          }]
        }
      }
    };

    var HomeService =
    /*#__PURE__*/
    function (_app_base_service__WE2) {
      _inherits(HomeService, _app_base_service__WE2);

      function HomeService(service) {
        var _this8;

        _classCallCheck(this, HomeService);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(HomeService).call(this, service));
        _this8.service = service;
        return _this8;
      }

      _createClass(HomeService, [{
        key: "getMenuList",
        value: function getMenuList() {
          return CONS.homeLeftMenu.data.menu;
        }
      }, {
        key: "getUserListMock",
        value: function getUserListMock() {
          return src_test_api__WEBPACK_IMPORTED_MODULE_2__["user_mock"];
        }
      }]);

      return HomeService;
    }(_app_base_service__WEBPACK_IMPORTED_MODULE_1__["AppBaseService"]);

    HomeService.ɵfac = function HomeService_Factory(t) {
      return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](mc_ui_angular__WEBPACK_IMPORTED_MODULE_3__["MCUIService"]));
    };

    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeService,
      factory: HomeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: mc_ui_angular__WEBPACK_IMPORTED_MODULE_3__["MCUIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/index.ts":
  /*!*******************************!*\
    !*** ./src/app/home/index.ts ***!
    \*******************************/

  /*! exports provided: HomeService, HomeHeaderComponent, HomeComponent */

  /***/
  function srcAppHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
    });
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/home/home.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"];
    });
    /* harmony import */


    var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-header/home-header.component */
    "./src/app/home/home-header/home-header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function () {
      return _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_2__["HomeHeaderComponent"];
    });
    /***/

  },

  /***/
  "./src/app/index.ts":
  /*!**************************!*\
    !*** ./src/app/index.ts ***!
    \**************************/

  /*! exports provided: AppComponent, AppBaseService, AppBaseComponent */

  /***/
  function srcAppIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"];
    });
    /* harmony import */


    var _app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-base.component */
    "./src/app/app-base.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppBaseComponent", function () {
      return _app_base_component__WEBPACK_IMPORTED_MODULE_1__["AppBaseComponent"];
    });
    /* harmony import */


    var _app_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-base.service */
    "./src/app/app-base.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppBaseService", function () {
      return _app_base_service__WEBPACK_IMPORTED_MODULE_2__["AppBaseService"];
    });
    /***/

  },

  /***/
  "./src/config/url.ts":
  /*!***************************!*\
    !*** ./src/config/url.ts ***!
    \***************************/

  /*! exports provided: Url */

  /***/
  function srcConfigUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Url", function () {
      return Url;
    });
    /* harmony import */


    var src_test_api_user_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/test/api/user_mock */
    "./src/test/api/user_mock.ts");

    var URLS = {
      user: 'api/user/'
    };
    var MOCK_URLS = {
      user: src_test_api_user_mock__WEBPACK_IMPORTED_MODULE_0__["user_mock"]
    };

    var Url =
    /*#__PURE__*/
    function () {
      function Url(service) {
        _classCallCheck(this, Url);

        this.service = service;
        this.root = '';
        this.root = this.service.util.getRootUrl();
      }
      /**
       *
       * @param id url id
       * @param extra for dynamic url e.g) id data string
       */


      _createClass(Url, [{
        key: "getUrl",
        value: function getUrl(id) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var isMockData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var val = URLS[id];

          if (params.length > 0) {
            params.map(function (u, i) {
              val = val.replace("{".concat(i, "}"), u);
            });
          }

          return !isMockData ? this.root + val : MOCK_URLS[id] || {};
        }
      }]);

      return Url;
    }();
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
      production: false
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/test/api/index.ts":
  /*!*******************************!*\
    !*** ./src/test/api/index.ts ***!
    \*******************************/

  /*! exports provided: user_mock */

  /***/
  function srcTestApiIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user_mock */
    "./src/test/api/user_mock.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "user_mock", function () {
      return _user_mock__WEBPACK_IMPORTED_MODULE_0__["user_mock"];
    });
    /***/

  },

  /***/
  "./src/test/api/user_mock.ts":
  /*!***********************************!*\
    !*** ./src/test/api/user_mock.ts ***!
    \***********************************/

  /*! exports provided: user_mock */

  /***/
  function srcTestApiUser_mockTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "user_mock", function () {
      return user_mock;
    });

    var user_mock = {
      data: [{
        id: '5dca5313812afa710a41b47e',
        index: 0,
        guid: 'c1e6ad3c-ee37-4508-b9c8-7ff7ad98fefe',
        isActive: false,
        balance: '$1,679.69',
        picture: 'http://placehold.it/32x32',
        age: 23,
        eyeColor: 'brown',
        name: 'Angelica Lawson',
        gender: 'female',
        company: 'ZERBINA',
        email: 'angelicalawson@zerbina.com',
        phone: '+1 (851) 542-3455',
        address: '931 Anthony Street, Crucible, Arkansas, 6042',
        registered: '2014-12-22T04:55:22 +08:00',
        latitude: -43.374519,
        longitude: 87.490433,
        tags: ['voluptate', 'anim', 'ipsum', 'magna', 'fugiat', 'esse', 'ex'],
        friends: [{
          id: 0,
          name: 'Christa Weiss'
        }, {
          id: 1,
          name: 'Patty Knapp'
        }, {
          id: 2,
          name: 'Loretta Cardenas'
        }],
        greeting: 'Hello, Angelica Lawson! You have 7 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313ebbe88df3b3760bd',
        index: 1,
        guid: '94daf989-af11-4c9b-9201-b6cc5364d864',
        isActive: true,
        balance: '$3,131.62',
        picture: 'http://placehold.it/32x32',
        age: 39,
        eyeColor: 'blue',
        name: 'Pacheco Lott',
        gender: 'male',
        company: 'ARTIQ',
        email: 'pachecolott@artiq.com',
        phone: '+1 (858) 419-2996',
        address: '402 Degraw Street, Vallonia, Montana, 7587',
        registered: '2017-02-22T01:40:21 +08:00',
        latitude: 11.900099,
        longitude: -160.253146,
        tags: ['esse', 'do', 'qui', 'occaecat', 'velit', 'adipisicing', 'labore'],
        friends: [{
          id: 0,
          name: 'Penelope Frederick'
        }, {
          id: 1,
          name: 'Lenore Brennan'
        }, {
          id: 2,
          name: 'Fox Oneill'
        }],
        greeting: 'Hello, Pacheco Lott! You have 4 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313913ff9b15a0c2274',
        index: 2,
        guid: '2258435d-f528-419f-b455-f5b8a84c5ca1',
        isActive: false,
        balance: '$2,679.97',
        picture: 'http://placehold.it/32x32',
        age: 38,
        eyeColor: 'blue',
        name: 'Valerie Nolan',
        gender: 'female',
        company: 'OVERPLEX',
        email: 'valerienolan@overplex.com',
        phone: '+1 (964) 416-3256',
        address: '317 Raleigh Place, Baden, Alabama, 8545',
        registered: '2018-03-08T11:33:33 +08:00',
        latitude: -75.77628,
        longitude: -143.534931,
        tags: ['labore', 'excepteur', 'elit', 'commodo', 'laboris', 'Lorem', 'eiusmod'],
        friends: [{
          id: 0,
          name: 'Lyons Savage'
        }, {
          id: 1,
          name: 'Whitaker Case'
        }, {
          id: 2,
          name: 'Eve Martin'
        }],
        greeting: 'Hello, Valerie Nolan! You have 8 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53130a400cf7768f8471',
        index: 3,
        guid: '0f949193-346f-4c39-b865-3f039723d567',
        isActive: false,
        balance: '$2,408.59',
        picture: 'http://placehold.it/32x32',
        age: 26,
        eyeColor: 'brown',
        name: 'Mcgee Dyer',
        gender: 'male',
        company: 'SULFAX',
        email: 'mcgeedyer@sulfax.com',
        phone: '+1 (830) 456-3994',
        address: '726 Cass Place, Dunnavant, Marshall Islands, 5700',
        registered: '2014-01-12T05:44:44 +08:00',
        latitude: 42.828831,
        longitude: 38.822085,
        tags: ['minim', 'labore', 'laborum', 'veniam', 'officia', 'fugiat', 'occaecat'],
        friends: [{
          id: 0,
          name: 'Rene Nielsen'
        }, {
          id: 1,
          name: 'Julia Hunter'
        }, {
          id: 2,
          name: 'Haynes Walton'
        }],
        greeting: 'Hello, Mcgee Dyer! You have 9 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313a1159f68fae852f9',
        index: 4,
        guid: '2f3c20a2-c0ba-4a0d-9a0f-49049ceb2d4d',
        isActive: false,
        balance: '$1,536.25',
        picture: 'http://placehold.it/32x32',
        age: 26,
        eyeColor: 'brown',
        name: 'Millie Alford',
        gender: 'female',
        company: 'ISOLOGICA',
        email: 'milliealford@isologica.com',
        phone: '+1 (884) 486-2507',
        address: '100 Willow Place, Ryderwood, Palau, 4838',
        registered: '2014-04-15T12:42:47 +07:00',
        latitude: 80.717551,
        longitude: 119.750126,
        tags: ['duis', 'exercitation', 'ut', 'occaecat', 'mollit', 'dolor', 'laboris'],
        friends: [{
          id: 0,
          name: 'Coffey Gallegos'
        }, {
          id: 1,
          name: 'Curtis Mcgowan'
        }, {
          id: 2,
          name: 'Morrison Reynolds'
        }],
        greeting: 'Hello, Millie Alford! You have 3 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313ce651bb7a7470007',
        index: 5,
        guid: '3b8a640d-0469-4a6e-aa3b-fc8922240b0b',
        isActive: false,
        balance: '$2,068.08',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'blue',
        name: 'Tameka Burns',
        gender: 'female',
        company: 'ZANITY',
        email: 'tamekaburns@zanity.com',
        phone: '+1 (844) 479-2165',
        address: '626 Seigel Street, Aguila, Puerto Rico, 1159',
        registered: '2014-02-13T07:49:30 +08:00',
        latitude: 19.667705,
        longitude: 134.747712,
        tags: ['consequat', 'cupidatat', 'consectetur', 'irure', 'labore', 'magna', 'duis'],
        friends: [{
          id: 0,
          name: 'Taylor Jennings'
        }, {
          id: 1,
          name: 'Solis Vincent'
        }, {
          id: 2,
          name: 'Craig Hood'
        }],
        greeting: 'Hello, Tameka Burns! You have 3 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca53135f4a347da3f9b62e',
        index: 6,
        guid: 'd5214e50-bbed-45b2-977f-4c65dbcb7174',
        isActive: true,
        balance: '$1,360.38',
        picture: 'http://placehold.it/32x32',
        age: 28,
        eyeColor: 'brown',
        name: 'Acosta Hahn',
        gender: 'male',
        company: 'COMVERGES',
        email: 'acostahahn@comverges.com',
        phone: '+1 (867) 433-2865',
        address: '841 Fillmore Avenue, Bawcomville, Vermont, 1215',
        registered: '2017-10-16T02:27:00 +07:00',
        latitude: -51.203896,
        longitude: -62.353775,
        tags: ['ullamco', 'laboris', 'irure', 'id', 'esse', 'non', 'anim'],
        friends: [{
          id: 0,
          name: 'Lott Melendez'
        }, {
          id: 1,
          name: 'Gretchen Rhodes'
        }, {
          id: 2,
          name: 'Turner Mcintyre'
        }],
        greeting: 'Hello, Acosta Hahn! You have 1 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531359a86447a85e76a5',
        index: 7,
        guid: 'fa9ce2f1-0a0f-4c9a-932b-700fd5e97054',
        isActive: true,
        balance: '$3,046.14',
        picture: 'http://placehold.it/32x32',
        age: 23,
        eyeColor: 'blue',
        name: 'Mercado Sims',
        gender: 'male',
        company: 'ELITA',
        email: 'mercadosims@elita.com',
        phone: '+1 (954) 468-2308',
        address: '967 Meeker Avenue, Hobucken, Washington, 1709',
        registered: '2016-11-25T01:17:10 +08:00',
        latitude: 62.231746,
        longitude: -54.358507,
        tags: ['sunt', 'sunt', 'esse', 'tempor', 'magna', 'laboris', 'eu'],
        friends: [{
          id: 0,
          name: 'Hamilton Weaver'
        }, {
          id: 1,
          name: 'Good Stewart'
        }, {
          id: 2,
          name: 'Cecelia Donaldson'
        }],
        greeting: 'Hello, Mercado Sims! You have 6 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313aee48f7a1a78129a',
        index: 8,
        guid: '6111b71a-4dac-42c8-810f-364f8858041c',
        isActive: false,
        balance: '$3,788.76',
        picture: 'http://placehold.it/32x32',
        age: 39,
        eyeColor: 'brown',
        name: 'Patsy Watson',
        gender: 'female',
        company: 'FIBEROX',
        email: 'patsywatson@fiberox.com',
        phone: '+1 (826) 409-2296',
        address: '133 Newkirk Placez, Turah, Idaho, 5308',
        registered: '2018-09-24T04:21:49 +07:00',
        latitude: 51.456968,
        longitude: -177.670255,
        tags: ['eu', 'adipisicing', 'et', 'consequat', 'cillum', 'reprehenderit', 'in'],
        friends: [{
          id: 0,
          name: 'Noelle Fuller'
        }, {
          id: 1,
          name: 'Avery Norton'
        }, {
          id: 2,
          name: 'Jannie Russell'
        }],
        greeting: 'Hello, Patsy Watson! You have 7 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313664d752be8dc2f38',
        index: 9,
        guid: 'a9436e66-6180-4069-9893-07cd8db339c6',
        isActive: true,
        balance: '$2,302.86',
        picture: 'http://placehold.it/32x32',
        age: 20,
        eyeColor: 'green',
        name: 'Bell Mcconnell',
        gender: 'male',
        company: 'XOGGLE',
        email: 'bellmcconnell@xoggle.com',
        phone: '+1 (804) 542-2428',
        address: '321 Lester Court, Kanauga, North Carolina, 2125',
        registered: '2014-04-17T03:47:23 +07:00',
        latitude: 58.475996,
        longitude: -145.030357,
        tags: ['veniam', 'magna', 'sit', 'occaecat', 'est', 'cupidatat', 'sint'],
        friends: [{
          id: 0,
          name: 'Ursula Carey'
        }, {
          id: 1,
          name: 'Gordon Massey'
        }, {
          id: 2,
          name: 'Sharp Craft'
        }],
        greeting: 'Hello, Bell Mcconnell! You have 8 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313dee94152cb8fe094',
        index: 10,
        guid: 'd5a7ee2e-048f-4b68-b4de-0aa465e026bf',
        isActive: true,
        balance: '$1,584.06',
        picture: 'http://placehold.it/32x32',
        age: 32,
        eyeColor: 'brown',
        name: 'Faye Waters',
        gender: 'female',
        company: 'GEEKOSIS',
        email: 'fayewaters@geekosis.com',
        phone: '+1 (974) 478-2231',
        address: '205 Aitken Place, Swartzville, Oregon, 9633',
        registered: '2015-12-29T09:45:57 +08:00',
        latitude: 82.985774,
        longitude: -149.213361,
        tags: ['dolor', 'ipsum', 'dolor', 'laborum', 'irure', 'aliquip', 'anim'],
        friends: [{
          id: 0,
          name: 'Chandra Sanders'
        }, {
          id: 1,
          name: 'Lindsey Camacho'
        }, {
          id: 2,
          name: 'Barrett Jensen'
        }],
        greeting: 'Hello, Faye Waters! You have 4 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313d4aa2e17dbf7c85f',
        index: 11,
        guid: 'bd804e50-b8d1-401d-91a7-2a65bcd1d93c',
        isActive: true,
        balance: '$3,474.41',
        picture: 'http://placehold.it/32x32',
        age: 22,
        eyeColor: 'green',
        name: 'Evelyn William',
        gender: 'female',
        company: 'EARWAX',
        email: 'evelynwilliam@earwax.com',
        phone: '+1 (809) 432-3688',
        address: '762 Waldane Court, Skyland, Ohio, 7772',
        registered: '2017-03-29T05:27:18 +07:00',
        latitude: 38.993911,
        longitude: -135.118742,
        tags: ['reprehenderit', 'fugiat', 'in', 'dolor', 'cupidatat', 'laborum', 'ea'],
        friends: [{
          id: 0,
          name: 'Mullins Best'
        }, {
          id: 1,
          name: 'Morton Knight'
        }, {
          id: 2,
          name: 'Lilia Duran'
        }],
        greeting: 'Hello, Evelyn William! You have 1 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca531345d16bbc985b0c35',
        index: 12,
        guid: 'ae9fcb94-7f6a-4c25-bd8f-727d28b0d050',
        isActive: true,
        balance: '$1,247.42',
        picture: 'http://placehold.it/32x32',
        age: 20,
        eyeColor: 'brown',
        name: 'Bolton Washington',
        gender: 'male',
        company: 'ZILLADYNE',
        email: 'boltonwashington@zilladyne.com',
        phone: '+1 (890) 475-3847',
        address: '791 Beach Place, Greenbush, Maine, 8057',
        registered: '2017-01-07T12:51:48 +08:00',
        latitude: -0.962845,
        longitude: 80.652449,
        tags: ['consequat', 'veniam', 'deserunt', 'velit', 'et', 'ipsum', 'fugiat'],
        friends: [{
          id: 0,
          name: 'Lynne Larson'
        }, {
          id: 1,
          name: 'Watson Vargas'
        }, {
          id: 2,
          name: 'Mckenzie Hicks'
        }],
        greeting: 'Hello, Bolton Washington! You have 4 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313fc02b62b7bebddc7',
        index: 13,
        guid: '2bd2b928-c7fb-4dcc-a952-d16112dd23df',
        isActive: false,
        balance: '$2,372.81',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'blue',
        name: 'Elvira Cox',
        gender: 'female',
        company: 'QNEKT',
        email: 'elviracox@qnekt.com',
        phone: '+1 (983) 419-3086',
        address: '261 Campus Road, Germanton, District Of Columbia, 1780',
        registered: '2017-07-16T08:13:14 +07:00',
        latitude: 61.21201,
        longitude: 54.931808,
        tags: ['consectetur', 'tempor', 'dolor', 'voluptate', 'ipsum', 'amet', 'Lorem'],
        friends: [{
          id: 0,
          name: 'Joann Cobb'
        }, {
          id: 1,
          name: 'Fern Salas'
        }, {
          id: 2,
          name: 'Marina Keith'
        }],
        greeting: 'Hello, Elvira Cox! You have 9 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca53131e6d7d3dcbbe9681',
        index: 14,
        guid: '59a3e162-183e-4aad-a7f7-3226f1de3561',
        isActive: true,
        balance: '$1,370.30',
        picture: 'http://placehold.it/32x32',
        age: 34,
        eyeColor: 'green',
        name: 'Spencer Silva',
        gender: 'male',
        company: 'EXERTA',
        email: 'spencersilva@exerta.com',
        phone: '+1 (877) 415-2907',
        address: '522 Madison Place, Harold, Guam, 9753',
        registered: '2014-03-22T03:16:13 +07:00',
        latitude: -81.624729,
        longitude: -159.036969,
        tags: ['consequat', 'eiusmod', 'cupidatat', 'occaecat', 'do', 'eiusmod', 'sunt'],
        friends: [{
          id: 0,
          name: 'Tammie Arnold'
        }, {
          id: 1,
          name: 'Ruthie Castro'
        }, {
          id: 2,
          name: 'Parks Harrison'
        }],
        greeting: 'Hello, Spencer Silva! You have 8 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53130e23ce1c4f0ee31c',
        index: 15,
        guid: 'ec39d264-b305-4572-9476-e0836485045c',
        isActive: false,
        balance: '$3,862.15',
        picture: 'http://placehold.it/32x32',
        age: 26,
        eyeColor: 'brown',
        name: 'Aileen Owen',
        gender: 'female',
        company: 'VETRON',
        email: 'aileenowen@vetron.com',
        phone: '+1 (957) 581-3374',
        address: '727 Bedford Avenue, Brecon, Georgia, 8231',
        registered: '2017-10-16T03:34:43 +07:00',
        latitude: -21.613282,
        longitude: 52.576291,
        tags: ['nisi', 'occaecat', 'sunt', 'officia', 'ea', 'ex', 'non'],
        friends: [{
          id: 0,
          name: 'Jeri Avila'
        }, {
          id: 1,
          name: 'Hogan Ramirez'
        }, {
          id: 2,
          name: 'Gay Erickson'
        }],
        greeting: 'Hello, Aileen Owen! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531304404b5df43eedfd',
        index: 16,
        guid: 'ecff2751-eac1-4cef-b400-edd8f79b29ab',
        isActive: false,
        balance: '$2,817.80',
        picture: 'http://placehold.it/32x32',
        age: 32,
        eyeColor: 'brown',
        name: 'Petty Rush',
        gender: 'male',
        company: 'COGNICODE',
        email: 'pettyrush@cognicode.com',
        phone: '+1 (984) 494-3081',
        address: '512 Monaco Place, Maxville, Northern Mariana Islands, 4549',
        registered: '2018-12-11T05:34:55 +08:00',
        latitude: 55.859994,
        longitude: 82.225741,
        tags: ['consectetur', 'amet', 'pariatur', 'do', 'adipisicing', 'Lorem', 'excepteur'],
        friends: [{
          id: 0,
          name: 'Neal Head'
        }, {
          id: 1,
          name: 'Rowe Hester'
        }, {
          id: 2,
          name: 'Karyn Sexton'
        }],
        greeting: 'Hello, Petty Rush! You have 3 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53139864ebb716365001',
        index: 17,
        guid: 'f7d4cbef-42b2-44fc-a6c2-86e1892f8e2f',
        isActive: true,
        balance: '$1,771.99',
        picture: 'http://placehold.it/32x32',
        age: 39,
        eyeColor: 'blue',
        name: 'Mills Sellers',
        gender: 'male',
        company: 'VIRVA',
        email: 'millssellers@virva.com',
        phone: '+1 (985) 487-2224',
        address: '160 Vanderbilt Avenue, Dupuyer, Missouri, 8144',
        registered: '2019-06-08T01:01:19 +07:00',
        latitude: -19.407343,
        longitude: -117.676036,
        tags: ['exercitation', 'nostrud', 'eiusmod', 'magna', 'dolor', 'reprehenderit', 'magna'],
        friends: [{
          id: 0,
          name: 'Patrica Peck'
        }, {
          id: 1,
          name: 'Caroline Cline'
        }, {
          id: 2,
          name: 'Martha Morrow'
        }],
        greeting: 'Hello, Mills Sellers! You have 7 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca53139809a4506aecb49d',
        index: 18,
        guid: '561e0751-9f23-41ef-9e56-8452343dec48',
        isActive: false,
        balance: '$3,836.82',
        picture: 'http://placehold.it/32x32',
        age: 30,
        eyeColor: 'brown',
        name: 'Sabrina Williamson',
        gender: 'female',
        company: 'EXOTECHNO',
        email: 'sabrinawilliamson@exotechno.com',
        phone: '+1 (966) 494-2060',
        address: '437 Woods Place, Clinton, New York, 8372',
        registered: '2015-03-06T12:13:40 +08:00',
        latitude: 30.518974,
        longitude: -18.444719,
        tags: ['culpa', 'magna', 'occaecat', 'anim', 'minim', 'amet', 'voluptate'],
        friends: [{
          id: 0,
          name: 'Barton Grimes'
        }, {
          id: 1,
          name: 'Glenn Pace'
        }, {
          id: 2,
          name: 'Best Day'
        }],
        greeting: 'Hello, Sabrina Williamson! You have 6 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca53134f85bd9906e45fd8',
        index: 19,
        guid: 'eb882456-429f-4924-b37c-7a7cab4aac18',
        isActive: true,
        balance: '$1,880.08',
        picture: 'http://placehold.it/32x32',
        age: 22,
        eyeColor: 'brown',
        name: 'Tracie Acosta',
        gender: 'female',
        company: 'CINCYR',
        email: 'tracieacosta@cincyr.com',
        phone: '+1 (954) 537-2034',
        address: '706 Junius Street, Graniteville, California, 4391',
        registered: '2015-06-07T08:28:54 +07:00',
        latitude: -16.093765,
        longitude: -142.439792,
        tags: ['pariatur', 'elit', 'reprehenderit', 'consectetur', 'do', 'irure', 'labore'],
        friends: [{
          id: 0,
          name: 'Milagros Good'
        }, {
          id: 1,
          name: 'Sheila Harrell'
        }, {
          id: 2,
          name: 'Briggs Odom'
        }],
        greeting: 'Hello, Tracie Acosta! You have 7 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53133c5654c4abb3a620',
        index: 20,
        guid: 'dae2fe92-257b-43e5-8d33-74f5574d9e81',
        isActive: true,
        balance: '$3,319.34',
        picture: 'http://placehold.it/32x32',
        age: 38,
        eyeColor: 'blue',
        name: 'Rena Gonzales',
        gender: 'female',
        company: 'MANUFACT',
        email: 'renagonzales@manufact.com',
        phone: '+1 (976) 486-3184',
        address: '659 Hooper Street, Mayfair, North Dakota, 726',
        registered: '2018-02-24T03:36:58 +08:00',
        latitude: 86.705419,
        longitude: 63.536076,
        tags: ['ut', 'dolore', 'fugiat', 'incididunt', 'mollit', 'esse', 'in'],
        friends: [{
          id: 0,
          name: 'Morales Paul'
        }, {
          id: 1,
          name: 'Stacy Holder'
        }, {
          id: 2,
          name: 'Luna Simmons'
        }],
        greeting: 'Hello, Rena Gonzales! You have 3 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531378c321a4258b2209',
        index: 21,
        guid: 'a4e00158-e508-4cb3-8b49-37730e95720d',
        isActive: true,
        balance: '$1,013.18',
        picture: 'http://placehold.it/32x32',
        age: 32,
        eyeColor: 'brown',
        name: 'Hill Freeman',
        gender: 'male',
        company: 'ACUMENTOR',
        email: 'hillfreeman@acumentor.com',
        phone: '+1 (839) 447-2586',
        address: '741 Fleet Place, Fairview, Pennsylvania, 8046',
        registered: '2017-04-23T03:59:35 +07:00',
        latitude: -3.066621,
        longitude: 95.119164,
        tags: ['cillum', 'ipsum', 'in', 'sunt', 'ipsum', 'proident', 'nulla'],
        friends: [{
          id: 0,
          name: 'Mcmillan Navarro'
        }, {
          id: 1,
          name: 'Geneva Booker'
        }, {
          id: 2,
          name: 'Delia Finley'
        }],
        greeting: 'Hello, Hill Freeman! You have 3 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313f0f4f2b88723408b',
        index: 22,
        guid: 'f80757e1-e0ee-4051-bae5-070f4c8f79ec',
        isActive: true,
        balance: '$2,672.50',
        picture: 'http://placehold.it/32x32',
        age: 31,
        eyeColor: 'blue',
        name: 'Potts Roman',
        gender: 'male',
        company: 'COMCUBINE',
        email: 'pottsroman@comcubine.com',
        phone: '+1 (808) 441-3278',
        address: '149 Wolcott Street, Dunbar, Arizona, 7011',
        registered: '2014-09-13T04:03:57 +07:00',
        latitude: -59.767525,
        longitude: -57.836178,
        tags: ['nostrud', 'magna', 'do', 'excepteur', 'deserunt', 'in', 'ex'],
        friends: [{
          id: 0,
          name: 'Earnestine Snow'
        }, {
          id: 1,
          name: 'Maynard Kelley'
        }, {
          id: 2,
          name: 'West Oconnor'
        }],
        greeting: 'Hello, Potts Roman! You have 5 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313d67f1929827eaadc',
        index: 23,
        guid: '1a74a9c5-bdcb-4f6f-8be9-0619be8553f6',
        isActive: true,
        balance: '$1,482.83',
        picture: 'http://placehold.it/32x32',
        age: 33,
        eyeColor: 'blue',
        name: 'Ochoa Short',
        gender: 'male',
        company: 'BIFLEX',
        email: 'ochoashort@biflex.com',
        phone: '+1 (905) 447-3807',
        address: '813 Montieth Street, Wolcott, New Hampshire, 2260',
        registered: '2016-01-28T08:32:15 +08:00',
        latitude: 6.362197,
        longitude: -9.692317,
        tags: ['occaecat', 'eu', 'consequat', 'consequat', 'consectetur', 'incididunt', 'officia'],
        friends: [{
          id: 0,
          name: 'Pierce Smith'
        }, {
          id: 1,
          name: 'Laurie Ellison'
        }, {
          id: 2,
          name: 'Loraine Church'
        }],
        greeting: 'Hello, Ochoa Short! You have 10 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca531321956fc317892971',
        index: 24,
        guid: 'd20e447e-de16-4f07-857d-8f147f1f5e55',
        isActive: false,
        balance: '$3,088.76',
        picture: 'http://placehold.it/32x32',
        age: 27,
        eyeColor: 'brown',
        name: 'Mattie Steele',
        gender: 'female',
        company: 'NAMEGEN',
        email: 'mattiesteele@namegen.com',
        phone: '+1 (961) 548-2513',
        address: '536 Schenck Place, Brenton, Michigan, 7914',
        registered: '2016-12-23T09:25:01 +08:00',
        latitude: 72.971035,
        longitude: 107.386022,
        tags: ['sit', 'amet', 'ipsum', 'aliqua', 'voluptate', 'dolore', 'tempor'],
        friends: [{
          id: 0,
          name: 'Beatriz Stanton'
        }, {
          id: 1,
          name: 'Phyllis Sweeney'
        }, {
          id: 2,
          name: 'Brandy Hutchinson'
        }],
        greeting: 'Hello, Mattie Steele! You have 8 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca531320db013c3bdb0b1d',
        index: 25,
        guid: '2f54ad6d-08ee-44e1-bebf-17466d17f1a5',
        isActive: true,
        balance: '$3,738.04',
        picture: 'http://placehold.it/32x32',
        age: 40,
        eyeColor: 'brown',
        name: 'Dona Stephenson',
        gender: 'female',
        company: 'SULTRAXIN',
        email: 'donastephenson@sultraxin.com',
        phone: '+1 (911) 544-2323',
        address: '721 Royce Place, Coultervillle, Connecticut, 4294',
        registered: '2015-09-17T02:17:37 +07:00',
        latitude: 83.041703,
        longitude: -145.087054,
        tags: ['reprehenderit', 'exercitation', 'veniam', 'eiusmod', 'eiusmod', 'eiusmod', 'dolor'],
        friends: [{
          id: 0,
          name: 'Effie Guy'
        }, {
          id: 1,
          name: 'Price Alvarado'
        }, {
          id: 2,
          name: 'Jana Hines'
        }],
        greeting: 'Hello, Dona Stephenson! You have 2 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca53135bfb261f87eced8c',
        index: 26,
        guid: '4e05c40e-1fbb-45a6-8151-bb4afc418a82',
        isActive: true,
        balance: '$3,382.15',
        picture: 'http://placehold.it/32x32',
        age: 23,
        eyeColor: 'brown',
        name: 'Marcella Lang',
        gender: 'female',
        company: 'EARGO',
        email: 'marcellalang@eargo.com',
        phone: '+1 (890) 565-2699',
        address: '332 Linden Street, Wheaton, Kentucky, 3192',
        registered: '2017-04-17T04:56:51 +07:00',
        latitude: -3.501834,
        longitude: 4.685731,
        tags: ['consequat', 'veniam', 'ut', 'irure', 'laborum', 'est', 'ipsum'],
        friends: [{
          id: 0,
          name: 'Eloise Galloway'
        }, {
          id: 1,
          name: 'Hart Hill'
        }, {
          id: 2,
          name: 'Medina Tucker'
        }],
        greeting: 'Hello, Marcella Lang! You have 10 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca531315ec9de069cbcb90',
        index: 27,
        guid: '0fe93e94-166a-492e-baa0-1e6eb7a4e9f4',
        isActive: true,
        balance: '$3,485.01',
        picture: 'http://placehold.it/32x32',
        age: 22,
        eyeColor: 'blue',
        name: 'Mindy Lynch',
        gender: 'female',
        company: 'FITCORE',
        email: 'mindylynch@fitcore.com',
        phone: '+1 (959) 405-2430',
        address: '975 Evans Street, Martinsville, Federated States Of Micronesia, 9710',
        registered: '2016-01-30T10:56:02 +08:00',
        latitude: -44.430882,
        longitude: 113.379799,
        tags: ['nostrud', 'ullamco', 'labore', 'non', 'adipisicing', 'cillum', 'eu'],
        friends: [{
          id: 0,
          name: 'Samantha Henson'
        }, {
          id: 1,
          name: 'Mcbride Armstrong'
        }, {
          id: 2,
          name: 'Corrine Richmond'
        }],
        greeting: 'Hello, Mindy Lynch! You have 3 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313ce71b238f6caf770',
        index: 28,
        guid: 'bf0fbc5f-bf02-4d0e-8738-a10f93077c41',
        isActive: true,
        balance: '$3,368.80',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'blue',
        name: 'Carrillo Hanson',
        gender: 'male',
        company: 'SOPRANO',
        email: 'carrillohanson@soprano.com',
        phone: '+1 (899) 466-3535',
        address: '258 Voorhies Avenue, Mulberry, Florida, 6365',
        registered: '2017-11-09T11:00:04 +08:00',
        latitude: 41.561444,
        longitude: 117.300629,
        tags: ['incididunt', 'est', 'exercitation', 'excepteur', 'est', 'occaecat', 'consequat'],
        friends: [{
          id: 0,
          name: 'Earlene Whitley'
        }, {
          id: 1,
          name: 'Wall Bonner'
        }, {
          id: 2,
          name: 'Felecia Farmer'
        }],
        greeting: 'Hello, Carrillo Hanson! You have 9 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313cba4a08c480d2acb',
        index: 29,
        guid: '9334a907-30c5-4390-bb17-c8e548094b8e',
        isActive: true,
        balance: '$1,607.49',
        picture: 'http://placehold.it/32x32',
        age: 26,
        eyeColor: 'green',
        name: 'Shepard Osborn',
        gender: 'male',
        company: 'HONOTRON',
        email: 'shepardosborn@honotron.com',
        phone: '+1 (977) 589-3214',
        address: '974 Dennett Place, Moscow, Illinois, 8732',
        registered: '2018-02-27T11:28:25 +08:00',
        latitude: -26.604978,
        longitude: -19.364407,
        tags: ['aliquip', 'sit', 'non', 'commodo', 'cupidatat', 'deserunt', 'quis'],
        friends: [{
          id: 0,
          name: 'Leblanc Kirkland'
        }, {
          id: 1,
          name: 'Melisa Carter'
        }, {
          id: 2,
          name: 'Park Mcclain'
        }],
        greeting: 'Hello, Shepard Osborn! You have 9 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313a7cb3afe967c956e',
        index: 30,
        guid: '388fc276-2db9-40bc-9d71-c3ee9d5637b4',
        isActive: false,
        balance: '$2,185.20',
        picture: 'http://placehold.it/32x32',
        age: 40,
        eyeColor: 'brown',
        name: 'Hodge Pate',
        gender: 'male',
        company: 'NETERIA',
        email: 'hodgepate@neteria.com',
        phone: '+1 (983) 446-3598',
        address: '195 Tiffany Place, Beaverdale, Minnesota, 9449',
        registered: '2016-09-25T10:31:35 +07:00',
        latitude: -39.219373,
        longitude: -136.984959,
        tags: ['pariatur', 'sit', 'reprehenderit', 'duis', 'laboris', 'sint', 'nisi'],
        friends: [{
          id: 0,
          name: 'Jodi Cote'
        }, {
          id: 1,
          name: 'Carolina Cervantes'
        }, {
          id: 2,
          name: 'Deleon Lewis'
        }],
        greeting: 'Hello, Hodge Pate! You have 7 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313f75e0d0bf20726a0',
        index: 31,
        guid: '0ee9b8f3-815c-4feb-895e-b66e13ac077c',
        isActive: true,
        balance: '$3,107.32',
        picture: 'http://placehold.it/32x32',
        age: 29,
        eyeColor: 'blue',
        name: 'Iris Atkinson',
        gender: 'female',
        company: 'HOMETOWN',
        email: 'irisatkinson@hometown.com',
        phone: '+1 (900) 539-3249',
        address: '820 Navy Walk, Bend, Utah, 2987',
        registered: '2018-01-14T10:47:08 +08:00',
        latitude: -71.21246,
        longitude: 86.985458,
        tags: ['ad', 'eiusmod', 'esse', 'fugiat', 'quis', 'ut', 'consequat'],
        friends: [{
          id: 0,
          name: 'Powers Bright'
        }, {
          id: 1,
          name: 'Jefferson Jimenez'
        }, {
          id: 2,
          name: 'Simpson Talley'
        }],
        greeting: 'Hello, Iris Atkinson! You have 3 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313d22a9d32bd523f1c',
        index: 32,
        guid: '65013bb7-ecb8-43a4-b8aa-002d9ec18a05',
        isActive: true,
        balance: '$1,016.56',
        picture: 'http://placehold.it/32x32',
        age: 34,
        eyeColor: 'brown',
        name: 'Tanya Mccall',
        gender: 'female',
        company: 'XANIDE',
        email: 'tanyamccall@xanide.com',
        phone: '+1 (958) 418-2610',
        address: '139 Story Street, Woodruff, Delaware, 1015',
        registered: '2016-02-05T06:08:56 +08:00',
        latitude: -63.26384,
        longitude: -56.384447,
        tags: ['ipsum', 'eiusmod', 'ut', 'ad', 'occaecat', 'fugiat', 'ad'],
        friends: [{
          id: 0,
          name: 'Wilkerson Morris'
        }, {
          id: 1,
          name: 'Angelique Bryant'
        }, {
          id: 2,
          name: 'Riddle Sanchez'
        }],
        greeting: 'Hello, Tanya Mccall! You have 7 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca531331de2ca5e9bb4c2d',
        index: 33,
        guid: 'd3968eb1-ae27-4763-a39f-12ec8136162a',
        isActive: false,
        balance: '$1,446.67',
        picture: 'http://placehold.it/32x32',
        age: 25,
        eyeColor: 'blue',
        name: 'Nicholson Barnes',
        gender: 'male',
        company: 'PAWNAGRA',
        email: 'nicholsonbarnes@pawnagra.com',
        phone: '+1 (910) 414-2555',
        address: '810 Manhattan Court, Taycheedah, South Carolina, 3802',
        registered: '2018-12-06T11:01:24 +08:00',
        latitude: -9.682089,
        longitude: -27.823787,
        tags: ['reprehenderit', 'laborum', 'aliqua', 'nostrud', 'pariatur', 'qui', 'Lorem'],
        friends: [{
          id: 0,
          name: 'Carrie Stone'
        }, {
          id: 1,
          name: 'Rasmussen Dennis'
        }, {
          id: 2,
          name: 'Massey Goodman'
        }],
        greeting: 'Hello, Nicholson Barnes! You have 8 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca53137307bf9730b1656b',
        index: 34,
        guid: 'c589aa69-766d-4472-bcc7-8c7854240a63',
        isActive: false,
        balance: '$3,477.27',
        picture: 'http://placehold.it/32x32',
        age: 25,
        eyeColor: 'brown',
        name: 'Marta Jefferson',
        gender: 'female',
        company: 'MANGELICA',
        email: 'martajefferson@mangelica.com',
        phone: '+1 (839) 441-3711',
        address: '379 Banner Avenue, Dahlen, New Mexico, 2533',
        registered: '2019-10-04T04:42:48 +07:00',
        latitude: 43.451152,
        longitude: 106.112762,
        tags: ['nisi', 'nulla', 'veniam', 'nisi', 'nisi', 'irure', 'nostrud'],
        friends: [{
          id: 0,
          name: 'Dina Yang'
        }, {
          id: 1,
          name: 'Amalia Quinn'
        }, {
          id: 2,
          name: 'Winnie Mullins'
        }],
        greeting: 'Hello, Marta Jefferson! You have 4 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313289a679847e68082',
        index: 35,
        guid: '1bbac666-a6aa-4605-802e-309e4165c9fc',
        isActive: false,
        balance: '$1,769.86',
        picture: 'http://placehold.it/32x32',
        age: 34,
        eyeColor: 'green',
        name: 'Angela Santos',
        gender: 'female',
        company: 'ZIPAK',
        email: 'angelasantos@zipak.com',
        phone: '+1 (832) 424-3916',
        address: '886 Throop Avenue, Calpine, Wyoming, 4826',
        registered: '2015-05-20T07:42:36 +07:00',
        latitude: -84.810243,
        longitude: 163.002039,
        tags: ['do', 'cupidatat', 'fugiat', 'do', 'cillum', 'aliquip', 'culpa'],
        friends: [{
          id: 0,
          name: 'Fannie Adkins'
        }, {
          id: 1,
          name: 'Winifred Rodriquez'
        }, {
          id: 2,
          name: 'Mai Roach'
        }],
        greeting: 'Hello, Angela Santos! You have 8 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531330ec45db9c43943d',
        index: 36,
        guid: 'fc7b2fa9-1d65-4dc7-9295-b0c60017a775',
        isActive: false,
        balance: '$1,066.12',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'blue',
        name: 'Kelley Carroll',
        gender: 'female',
        company: 'ISONUS',
        email: 'kelleycarroll@isonus.com',
        phone: '+1 (870) 548-3272',
        address: '176 Boerum Place, Broadlands, Kansas, 9318',
        registered: '2017-07-06T06:06:43 +07:00',
        latitude: -31.406284,
        longitude: -64.33793,
        tags: ['aute', 'minim', 'ad', 'et', 'proident', 'esse', 'ea'],
        friends: [{
          id: 0,
          name: 'Janette Hays'
        }, {
          id: 1,
          name: 'Fanny Copeland'
        }, {
          id: 2,
          name: 'Fitzgerald Gregory'
        }],
        greeting: 'Hello, Kelley Carroll! You have 3 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca53131c0fee681f4abcdb',
        index: 37,
        guid: '81c52d07-53fb-4acc-bcd2-9a305858916e',
        isActive: true,
        balance: '$3,496.84',
        picture: 'http://placehold.it/32x32',
        age: 28,
        eyeColor: 'blue',
        name: 'Weiss Melton',
        gender: 'male',
        company: 'ZENTIME',
        email: 'weissmelton@zentime.com',
        phone: '+1 (926) 449-3608',
        address: '907 Driggs Avenue, Needmore, Louisiana, 5289',
        registered: '2017-07-09T05:08:59 +07:00',
        latitude: 16.886062,
        longitude: 82.513063,
        tags: ['ut', 'tempor', 'sit', 'excepteur', 'amet', 'elit', 'irure'],
        friends: [{
          id: 0,
          name: 'Velez Leach'
        }, {
          id: 1,
          name: 'Eliza Tate'
        }, {
          id: 2,
          name: 'Barnett Fulton'
        }],
        greeting: 'Hello, Weiss Melton! You have 10 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313f845e53f3078dfda',
        index: 38,
        guid: '1ce0094c-dc34-4a2b-83d9-ef487d360e87',
        isActive: false,
        balance: '$3,257.08',
        picture: 'http://placehold.it/32x32',
        age: 27,
        eyeColor: 'brown',
        name: 'Randolph Velez',
        gender: 'male',
        company: 'COMBOGENE',
        email: 'randolphvelez@combogene.com',
        phone: '+1 (862) 496-3050',
        address: '969 Harbor Lane, Limestone, Colorado, 2028',
        registered: '2019-06-24T04:58:02 +07:00',
        latitude: -65.964276,
        longitude: 2.579353,
        tags: ['esse', 'nisi', 'sint', 'cillum', 'esse', 'ipsum', 'qui'],
        friends: [{
          id: 0,
          name: 'Jean Matthews'
        }, {
          id: 1,
          name: 'Emma Ward'
        }, {
          id: 2,
          name: 'Buck Chang'
        }],
        greeting: 'Hello, Randolph Velez! You have 9 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca531397c74e12bb850388',
        index: 39,
        guid: '46ac5e1a-5792-4b3c-8e52-4edd4c983a21',
        isActive: true,
        balance: '$1,431.95',
        picture: 'http://placehold.it/32x32',
        age: 34,
        eyeColor: 'brown',
        name: 'Hinton Raymond',
        gender: 'male',
        company: 'STOCKPOST',
        email: 'hintonraymond@stockpost.com',
        phone: '+1 (936) 510-3453',
        address: '933 Creamer Street, Grandview, Virgin Islands, 1564',
        registered: '2015-11-30T06:24:18 +08:00',
        latitude: -86.545135,
        longitude: -81.799219,
        tags: ['do', 'pariatur', 'irure', 'mollit', 'Lorem', 'est', 'laborum'],
        friends: [{
          id: 0,
          name: 'Marcy Newman'
        }, {
          id: 1,
          name: 'Garner Malone'
        }, {
          id: 2,
          name: 'Pennington Ball'
        }],
        greeting: 'Hello, Hinton Raymond! You have 6 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53138e30caee11ca27d6',
        index: 40,
        guid: 'c400374b-1250-4e8e-a804-a4288690b48d',
        isActive: false,
        balance: '$2,595.96',
        picture: 'http://placehold.it/32x32',
        age: 33,
        eyeColor: 'blue',
        name: 'Key Merrill',
        gender: 'male',
        company: 'FLOTONIC',
        email: 'keymerrill@flotonic.com',
        phone: '+1 (973) 455-2254',
        address: '259 Ashland Place, Sperryville, Oklahoma, 4729',
        registered: '2014-11-29T09:15:44 +08:00',
        latitude: 50.802554,
        longitude: -91.457199,
        tags: ['adipisicing', 'culpa', 'Lorem', 'aliquip', 'officia', 'culpa', 'excepteur'],
        friends: [{
          id: 0,
          name: 'Gloria Franklin'
        }, {
          id: 1,
          name: 'Russo Crosby'
        }, {
          id: 2,
          name: 'Zimmerman Kemp'
        }],
        greeting: 'Hello, Key Merrill! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53133e68fa573dd3805a',
        index: 41,
        guid: '6df12bf5-9040-46e2-8b12-33210dd7dd2c',
        isActive: true,
        balance: '$3,604.24',
        picture: 'http://placehold.it/32x32',
        age: 29,
        eyeColor: 'blue',
        name: 'Katharine Downs',
        gender: 'female',
        company: 'EXOTERIC',
        email: 'katharinedowns@exoteric.com',
        phone: '+1 (849) 566-2500',
        address: '599 Coleman Street, Comptche, Virginia, 8244',
        registered: '2015-10-29T07:10:50 +07:00',
        latitude: 44.72204,
        longitude: 92.961854,
        tags: ['eiusmod', 'mollit', 'aute', 'commodo', 'officia', 'nulla', 'sint'],
        friends: [{
          id: 0,
          name: 'Gardner Mccray'
        }, {
          id: 1,
          name: 'Crosby Diaz'
        }, {
          id: 2,
          name: 'Janell Castillo'
        }],
        greeting: 'Hello, Katharine Downs! You have 2 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531397dec956638a8ba0',
        index: 42,
        guid: '992a9d2b-944b-4d3f-8043-46a14667e29a',
        isActive: false,
        balance: '$2,530.44',
        picture: 'http://placehold.it/32x32',
        age: 38,
        eyeColor: 'blue',
        name: 'Harper Shields',
        gender: 'male',
        company: 'EGYPTO',
        email: 'harpershields@egypto.com',
        phone: '+1 (850) 499-3399',
        address: '783 Mermaid Avenue, Inkerman, Massachusetts, 7976',
        registered: '2018-02-17T01:21:17 +08:00',
        latitude: -79.099301,
        longitude: -19.862433,
        tags: ['enim', 'aliquip', 'exercitation', 'ex', 'ipsum', 'adipisicing', 'id'],
        friends: [{
          id: 0,
          name: 'Karla Conner'
        }, {
          id: 1,
          name: 'Nellie Howard'
        }, {
          id: 2,
          name: 'Clayton Howell'
        }],
        greeting: 'Hello, Harper Shields! You have 9 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313348dfa5b12018a3c',
        index: 43,
        guid: '76578b18-7bc2-4430-9982-562036c5062c',
        isActive: true,
        balance: '$2,826.08',
        picture: 'http://placehold.it/32x32',
        age: 40,
        eyeColor: 'brown',
        name: 'Blanca Foley',
        gender: 'female',
        company: 'PULZE',
        email: 'blancafoley@pulze.com',
        phone: '+1 (839) 403-2025',
        address: '221 Dahl Court, Dowling, Iowa, 4068',
        registered: '2015-11-18T08:03:03 +08:00',
        latitude: 53.303797,
        longitude: -155.612948,
        tags: ['ad', 'magna', 'commodo', 'sit', 'ea', 'adipisicing', 'officia'],
        friends: [{
          id: 0,
          name: 'Terry Davis'
        }, {
          id: 1,
          name: 'Charlotte Lee'
        }, {
          id: 2,
          name: 'Conley Lloyd'
        }],
        greeting: 'Hello, Blanca Foley! You have 6 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca53132a7f910133213d6f',
        index: 44,
        guid: '2e89c5a4-dd14-4c0b-9f6b-1ff958525cf9',
        isActive: false,
        balance: '$2,249.42',
        picture: 'http://placehold.it/32x32',
        age: 35,
        eyeColor: 'blue',
        name: 'Horton Simpson',
        gender: 'male',
        company: 'SHADEASE',
        email: 'hortonsimpson@shadease.com',
        phone: '+1 (848) 451-3386',
        address: '718 Harkness Avenue, Waverly, Tennessee, 5209',
        registered: '2015-05-19T02:38:09 +07:00',
        latitude: 27.730954,
        longitude: -159.849034,
        tags: ['ipsum', 'nulla', 'dolore', 'et', 'dolor', 'velit', 'labore'],
        friends: [{
          id: 0,
          name: 'Stark Dillard'
        }, {
          id: 1,
          name: 'Phelps Maynard'
        }, {
          id: 2,
          name: 'Tania Mcfarland'
        }],
        greeting: 'Hello, Horton Simpson! You have 1 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53132305f0100e60c94d',
        index: 45,
        guid: '4f13c071-267b-402d-b7a8-88e6b38ba60c',
        isActive: true,
        balance: '$3,191.93',
        picture: 'http://placehold.it/32x32',
        age: 26,
        eyeColor: 'blue',
        name: 'Janelle Le',
        gender: 'female',
        company: 'ZAYA',
        email: 'janellele@zaya.com',
        phone: '+1 (984) 436-2874',
        address: '860 Chester Street, Gerber, West Virginia, 6488',
        registered: '2014-09-13T06:04:00 +07:00',
        latitude: 42.795954,
        longitude: 126.677233,
        tags: ['anim', 'qui', 'commodo', 'voluptate', 'ea', 'tempor', 'Lorem'],
        friends: [{
          id: 0,
          name: 'Rosella Burnett'
        }, {
          id: 1,
          name: 'James Vang'
        }, {
          id: 2,
          name: 'Tasha Boyd'
        }],
        greeting: 'Hello, Janelle Le! You have 9 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313c42f3f6d8e9419e1',
        index: 46,
        guid: '434d8f6c-dba0-42cd-9ed3-fd49d80c9877',
        isActive: false,
        balance: '$3,854.87',
        picture: 'http://placehold.it/32x32',
        age: 31,
        eyeColor: 'green',
        name: 'Collier Fry',
        gender: 'male',
        company: 'GOGOL',
        email: 'collierfry@gogol.com',
        phone: '+1 (850) 463-2116',
        address: '822 Canda Avenue, Otranto, Indiana, 4267',
        registered: '2017-04-19T06:26:15 +07:00',
        latitude: 77.60517,
        longitude: -48.33623,
        tags: ['in', 'quis', 'consectetur', 'sit', 'consequat', 'elit', 'et'],
        friends: [{
          id: 0,
          name: 'Colette Goff'
        }, {
          id: 1,
          name: 'Carpenter Berger'
        }, {
          id: 2,
          name: 'Brandie Page'
        }],
        greeting: 'Hello, Collier Fry! You have 9 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313f010694f69d2f221',
        index: 47,
        guid: '94237268-3a68-4377-9a93-ddd1fe3fba27',
        isActive: true,
        balance: '$2,769.88',
        picture: 'http://placehold.it/32x32',
        age: 25,
        eyeColor: 'blue',
        name: 'Lina Nichols',
        gender: 'female',
        company: 'EQUITAX',
        email: 'linanichols@equitax.com',
        phone: '+1 (830) 436-3354',
        address: '471 Engert Avenue, Taft, American Samoa, 4658',
        registered: '2017-07-11T04:08:03 +07:00',
        latitude: -40.141304,
        longitude: 38.433878,
        tags: ['cillum', 'sit', 'Lorem', 'adipisicing', 'aliquip', 'tempor', 'laboris'],
        friends: [{
          id: 0,
          name: 'Wade Mcmillan'
        }, {
          id: 1,
          name: 'Merrill Wilkinson'
        }, {
          id: 2,
          name: 'Nora Barr'
        }],
        greeting: 'Hello, Lina Nichols! You have 5 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca53138ce4e4a84281bab8',
        index: 48,
        guid: 'c07637b7-1290-4b05-b205-470729d39c27',
        isActive: true,
        balance: '$2,580.03',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'green',
        name: 'Morse Vega',
        gender: 'male',
        company: 'QUILM',
        email: 'morsevega@quilm.com',
        phone: '+1 (989) 522-2332',
        address: '922 Opal Court, Lydia, Texas, 1395',
        registered: '2017-12-07T12:38:13 +08:00',
        latitude: 87.960609,
        longitude: 141.78692,
        tags: ['duis', 'ad', 'sint', 'qui', 'voluptate', 'esse', 'anim'],
        friends: [{
          id: 0,
          name: 'Christine Barber'
        }, {
          id: 1,
          name: 'Kris Collins'
        }, {
          id: 2,
          name: 'Dalton Johns'
        }],
        greeting: 'Hello, Morse Vega! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531363e9cc8981170d6c',
        index: 49,
        guid: 'e54cd3da-a93c-4c75-ba7c-c9050b324759',
        isActive: true,
        balance: '$1,953.16',
        picture: 'http://placehold.it/32x32',
        age: 39,
        eyeColor: 'blue',
        name: 'Ayers Thompson',
        gender: 'male',
        company: 'GRAINSPOT',
        email: 'ayersthompson@grainspot.com',
        phone: '+1 (917) 557-2873',
        address: '191 Ivan Court, Chaparrito, Hawaii, 4287',
        registered: '2017-06-12T11:52:53 +07:00',
        latitude: -77.943044,
        longitude: -23.934664,
        tags: ['consectetur', 'commodo', 'minim', 'enim', 'exercitation', 'occaecat', 'aute'],
        friends: [{
          id: 0,
          name: 'Farrell Britt'
        }, {
          id: 1,
          name: 'Vera Shepherd'
        }, {
          id: 2,
          name: 'Leanne Rogers'
        }],
        greeting: 'Hello, Ayers Thompson! You have 10 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca53131ddd18200afd9c64',
        index: 50,
        guid: 'ded7d044-f55d-467c-8bd2-9d139b7a9af1',
        isActive: true,
        balance: '$3,550.00',
        picture: 'http://placehold.it/32x32',
        age: 36,
        eyeColor: 'blue',
        name: 'Finch Macias',
        gender: 'male',
        company: 'ZOLAREX',
        email: 'finchmacias@zolarex.com',
        phone: '+1 (840) 557-3434',
        address: '687 Ferry Place, Smock, Alaska, 1558',
        registered: '2014-02-05T03:20:39 +08:00',
        latitude: 88.260853,
        longitude: 66.49631,
        tags: ['nulla', 'non', 'consequat', 'ad', 'ullamco', 'esse', 'pariatur'],
        friends: [{
          id: 0,
          name: 'Kellie Wells'
        }, {
          id: 1,
          name: 'Ewing Moody'
        }, {
          id: 2,
          name: 'Patricia Blair'
        }],
        greeting: 'Hello, Finch Macias! You have 5 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca531305f8f4b0815f1bb2',
        index: 51,
        guid: '1c355811-08bd-4998-a2b1-72a12d3d1af5',
        isActive: false,
        balance: '$2,135.02',
        picture: 'http://placehold.it/32x32',
        age: 38,
        eyeColor: 'brown',
        name: 'Cherry Mckenzie',
        gender: 'female',
        company: 'KIOSK',
        email: 'cherrymckenzie@kiosk.com',
        phone: '+1 (821) 542-3599',
        address: '366 McKibbin Street, Mahtowa, Mississippi, 7459',
        registered: '2017-04-13T12:58:33 +07:00',
        latitude: 87.965637,
        longitude: -14.585594,
        tags: ['aliqua', 'excepteur', 'aliquip', 'occaecat', 'tempor', 'elit', 'veniam'],
        friends: [{
          id: 0,
          name: 'Anthony Mcguire'
        }, {
          id: 1,
          name: 'Minerva Hogan'
        }, {
          id: 2,
          name: 'Rosanne Ingram'
        }],
        greeting: 'Hello, Cherry Mckenzie! You have 4 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313e183954312732bbb',
        index: 52,
        guid: 'b6fe872f-1ce5-4b41-8812-2cadca8ab1bf',
        isActive: true,
        balance: '$1,847.80',
        picture: 'http://placehold.it/32x32',
        age: 26,
        eyeColor: 'green',
        name: 'Lindsay Guthrie',
        gender: 'female',
        company: 'ZOUNDS',
        email: 'lindsayguthrie@zounds.com',
        phone: '+1 (838) 408-3135',
        address: '860 Willow Street, Lacomb, Wisconsin, 3206',
        registered: '2015-07-17T08:50:00 +07:00',
        latitude: -71.105319,
        longitude: 81.165313,
        tags: ['pariatur', 'laboris', 'consectetur', 'elit', 'dolore', 'laboris', 'sit'],
        friends: [{
          id: 0,
          name: 'Beth Patrick'
        }, {
          id: 1,
          name: 'Webb Boone'
        }, {
          id: 2,
          name: 'Vicky Stevens'
        }],
        greeting: 'Hello, Lindsay Guthrie! You have 6 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313e0b75c413d50221a',
        index: 53,
        guid: '91ac08bd-3695-4a95-9c75-82d4754b49ed',
        isActive: false,
        balance: '$2,120.89',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'brown',
        name: 'Mejia Griffith',
        gender: 'male',
        company: 'MYOPIUM',
        email: 'mejiagriffith@myopium.com',
        phone: '+1 (946) 561-3807',
        address: '122 Bethel Loop, Steinhatchee, Maryland, 421',
        registered: '2018-05-09T11:29:37 +07:00',
        latitude: 29.464605,
        longitude: 45.760619,
        tags: ['duis', 'ut', 'labore', 'elit', 'nulla', 'adipisicing', 'officia'],
        friends: [{
          id: 0,
          name: 'Rosalind Mcknight'
        }, {
          id: 1,
          name: 'Shepherd Koch'
        }, {
          id: 2,
          name: 'Mallory Rowe'
        }],
        greeting: 'Hello, Mejia Griffith! You have 9 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca531313a9b2793d6597bb',
        index: 54,
        guid: '02653342-f887-4c37-83c0-0b6680a2062e',
        isActive: false,
        balance: '$2,902.61',
        picture: 'http://placehold.it/32x32',
        age: 32,
        eyeColor: 'brown',
        name: 'Pitts Bruce',
        gender: 'male',
        company: 'PLASMOX',
        email: 'pittsbruce@plasmox.com',
        phone: '+1 (830) 419-2156',
        address: '123 Taaffe Place, Bannock, New Jersey, 9433',
        registered: '2016-08-20T09:46:33 +07:00',
        latitude: -3.449515,
        longitude: 178.178285,
        tags: ['eu', 'sint', 'sit', 'dolor', 'laboris', 'labore', 'mollit'],
        friends: [{
          id: 0,
          name: 'Delaney Ferrell'
        }, {
          id: 1,
          name: 'Patterson Vaughn'
        }, {
          id: 2,
          name: 'Booker Nicholson'
        }],
        greeting: 'Hello, Pitts Bruce! You have 1 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313349abcb2ad6c3d54',
        index: 55,
        guid: '97e73a2d-4668-4c3f-a571-3cd215eaeb8b',
        isActive: false,
        balance: '$1,555.23',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'green',
        name: 'Moon Vinson',
        gender: 'male',
        company: 'VICON',
        email: 'moonvinson@vicon.com',
        phone: '+1 (833) 555-3776',
        address: '242 Ross Street, Kiskimere, South Dakota, 4072',
        registered: '2015-10-24T01:53:59 +07:00',
        latitude: -40.422963,
        longitude: 38.867593,
        tags: ['reprehenderit', 'cillum', 'minim', 'velit', 'quis', 'cupidatat', 'id'],
        friends: [{
          id: 0,
          name: 'York Valenzuela'
        }, {
          id: 1,
          name: 'Christian Tyler'
        }, {
          id: 2,
          name: 'Pate Cook'
        }],
        greeting: 'Hello, Moon Vinson! You have 1 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313d90caf57ccd82961',
        index: 56,
        guid: 'a3b980c0-1e79-43f4-8b6b-c9de00752a27',
        isActive: false,
        balance: '$2,879.84',
        picture: 'http://placehold.it/32x32',
        age: 23,
        eyeColor: 'brown',
        name: 'Roseann Santiago',
        gender: 'female',
        company: 'OPTYK',
        email: 'roseannsantiago@optyk.com',
        phone: '+1 (881) 450-3553',
        address: '703 Stoddard Place, Tonopah, Rhode Island, 7008',
        registered: '2019-05-27T03:39:43 +07:00',
        latitude: 2.932059,
        longitude: 80.203493,
        tags: ['duis', 'excepteur', 'laborum', 'aliqua', 'laboris', 'nostrud', 'id'],
        friends: [{
          id: 0,
          name: 'Le Nunez'
        }, {
          id: 1,
          name: 'Paul Fletcher'
        }, {
          id: 2,
          name: 'Smith Figueroa'
        }],
        greeting: 'Hello, Roseann Santiago! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313f5b1fac3feec53f2',
        index: 57,
        guid: '78a15e80-e4d6-4d1b-a0a5-3518e783a4eb',
        isActive: false,
        balance: '$3,944.79',
        picture: 'http://placehold.it/32x32',
        age: 20,
        eyeColor: 'green',
        name: 'House Parker',
        gender: 'male',
        company: 'BRAINCLIP',
        email: 'houseparker@brainclip.com',
        phone: '+1 (812) 470-2946',
        address: '932 Wyckoff Street, Newcastle, Nebraska, 2168',
        registered: '2017-01-30T10:27:31 +08:00',
        latitude: 57.617956,
        longitude: 33.007339,
        tags: ['eiusmod', 'id', 'qui', 'culpa', 'proident', 'ipsum', 'adipisicing'],
        friends: [{
          id: 0,
          name: 'Annie Fernandez'
        }, {
          id: 1,
          name: 'Lucas Jackson'
        }, {
          id: 2,
          name: 'Knight Graham'
        }],
        greeting: 'Hello, House Parker! You have 10 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531324f7a26cadfacefa',
        index: 58,
        guid: 'a0a204c0-4a38-4780-9da0-e20c74f1b24b',
        isActive: true,
        balance: '$2,332.99',
        picture: 'http://placehold.it/32x32',
        age: 38,
        eyeColor: 'blue',
        name: 'Lacey Henderson',
        gender: 'female',
        company: 'LUXURIA',
        email: 'laceyhenderson@luxuria.com',
        phone: '+1 (980) 567-2248',
        address: '292 Seba Avenue, Austinburg, Arkansas, 178',
        registered: '2019-10-01T02:10:35 +07:00',
        latitude: -54.265107,
        longitude: -54.623142,
        tags: ['eu', 'cupidatat', 'Lorem', 'sunt', 'qui', 'labore', 'Lorem'],
        friends: [{
          id: 0,
          name: 'Dillon Curry'
        }, {
          id: 1,
          name: 'Antoinette Ray'
        }, {
          id: 2,
          name: 'Audrey Avery'
        }],
        greeting: 'Hello, Lacey Henderson! You have 8 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca531319a6d30435621718',
        index: 59,
        guid: '48226902-3df6-4bf6-ba66-78ce8ed47f7f',
        isActive: false,
        balance: '$3,473.49',
        picture: 'http://placehold.it/32x32',
        age: 32,
        eyeColor: 'blue',
        name: 'Goodwin Nguyen',
        gender: 'male',
        company: 'TALKOLA',
        email: 'goodwinnguyen@talkola.com',
        phone: '+1 (966) 496-2904',
        address: '322 Williams Place, Greenfields, Montana, 7735',
        registered: '2016-06-08T09:47:08 +07:00',
        latitude: -44.900203,
        longitude: -163.890906,
        tags: ['enim', 'aliquip', 'fugiat', 'qui', 'elit', 'excepteur', 'aliqua'],
        friends: [{
          id: 0,
          name: 'Marquez Fuentes'
        }, {
          id: 1,
          name: 'Mcpherson Mcneil'
        }, {
          id: 2,
          name: 'Mcclain Maldonado'
        }],
        greeting: 'Hello, Goodwin Nguyen! You have 10 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313d1a734c1a86fa965',
        index: 60,
        guid: 'd6fdd9a2-ae15-4a4e-83c5-a035dfe98660',
        isActive: false,
        balance: '$1,949.32',
        picture: 'http://placehold.it/32x32',
        age: 35,
        eyeColor: 'brown',
        name: 'Silva Meyer',
        gender: 'male',
        company: 'UNIA',
        email: 'silvameyer@unia.com',
        phone: '+1 (942) 553-3699',
        address: '911 Kane Street, Yardville, Alabama, 8509',
        registered: '2019-06-09T12:34:39 +07:00',
        latitude: -28.776619,
        longitude: 31.091573,
        tags: ['ipsum', 'aliquip', 'esse', 'proident', 'labore', 'aliqua', 'laboris'],
        friends: [{
          id: 0,
          name: 'Houston Watts'
        }, {
          id: 1,
          name: 'Maggie Dixon'
        }, {
          id: 2,
          name: 'Lila Ortega'
        }],
        greeting: 'Hello, Silva Meyer! You have 8 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca53134c01faa26a8c857b',
        index: 61,
        guid: 'dab95b22-209d-4094-81d2-5c7165847157',
        isActive: false,
        balance: '$3,812.28',
        picture: 'http://placehold.it/32x32',
        age: 36,
        eyeColor: 'blue',
        name: 'Hickman Townsend',
        gender: 'male',
        company: 'MAGNEATO',
        email: 'hickmantownsend@magneato.com',
        phone: '+1 (883) 419-3658',
        address: '978 Powell Street, Rosedale, Marshall Islands, 9483',
        registered: '2017-04-04T10:13:48 +07:00',
        latitude: 39.012618,
        longitude: 26.914172,
        tags: ['excepteur', 'officia', 'laboris', 'elit', 'laborum', 'aliqua', 'tempor'],
        friends: [{
          id: 0,
          name: 'Corinne Brooks'
        }, {
          id: 1,
          name: 'Mendoza Holden'
        }, {
          id: 2,
          name: 'Muriel Ayers'
        }],
        greeting: 'Hello, Hickman Townsend! You have 5 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313f33f5c32265228bb',
        index: 62,
        guid: 'db3f644e-a8f3-43ee-88b4-967ec771a6e5',
        isActive: true,
        balance: '$2,360.23',
        picture: 'http://placehold.it/32x32',
        age: 33,
        eyeColor: 'blue',
        name: 'Jennie Clayton',
        gender: 'female',
        company: 'COLAIRE',
        email: 'jennieclayton@colaire.com',
        phone: '+1 (947) 516-2721',
        address: '147 Narrows Avenue, Welda, Palau, 5932',
        registered: '2015-01-28T03:52:42 +08:00',
        latitude: 0.254385,
        longitude: 106.046837,
        tags: ['exercitation', 'duis', 'occaecat', 'ex', 'adipisicing', 'et', 'proident'],
        friends: [{
          id: 0,
          name: 'Hutchinson Vazquez'
        }, {
          id: 1,
          name: 'Valenzuela Higgins'
        }, {
          id: 2,
          name: 'Henson Justice'
        }],
        greeting: 'Hello, Jennie Clayton! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531330eee43cd7ecda72',
        index: 63,
        guid: 'f1eaaed3-3ce9-4377-98a7-c0039847ba10',
        isActive: true,
        balance: '$1,816.76',
        picture: 'http://placehold.it/32x32',
        age: 34,
        eyeColor: 'blue',
        name: 'Leah Lucas',
        gender: 'female',
        company: 'SPEEDBOLT',
        email: 'leahlucas@speedbolt.com',
        phone: '+1 (801) 547-2685',
        address: '728 Havemeyer Street, Escondida, Puerto Rico, 8140',
        registered: '2018-08-03T11:12:21 +07:00',
        latitude: 28.094586,
        longitude: -43.042286,
        tags: ['aliqua', 'amet', 'veniam', 'quis', 'ad', 'laborum', 'occaecat'],
        friends: [{
          id: 0,
          name: 'Ruth Mcdaniel'
        }, {
          id: 1,
          name: 'Pittman Richardson'
        }, {
          id: 2,
          name: 'Lowe Hurley'
        }],
        greeting: 'Hello, Leah Lucas! You have 2 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313b2d66f30f69fce73',
        index: 64,
        guid: 'f4f37c14-288b-4621-9752-3fccd8b4497f',
        isActive: false,
        balance: '$3,127.81',
        picture: 'http://placehold.it/32x32',
        age: 20,
        eyeColor: 'brown',
        name: 'Farley Becker',
        gender: 'male',
        company: 'GENESYNK',
        email: 'farleybecker@genesynk.com',
        phone: '+1 (891) 459-2692',
        address: '216 Delevan Street, Bayview, Vermont, 1498',
        registered: '2017-06-28T01:30:14 +07:00',
        latitude: 21.000197,
        longitude: 167.339929,
        tags: ['duis', 'et', 'quis', 'adipisicing', 'anim', 'nulla', 'eiusmod'],
        friends: [{
          id: 0,
          name: 'Alison Greene'
        }, {
          id: 1,
          name: 'Beard Noble'
        }, {
          id: 2,
          name: 'Georgia Alston'
        }],
        greeting: 'Hello, Farley Becker! You have 6 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313a4bb691c7741a69d',
        index: 65,
        guid: 'ad12043e-e6f2-4eb5-9427-9195f647050c',
        isActive: false,
        balance: '$3,781.43',
        picture: 'http://placehold.it/32x32',
        age: 25,
        eyeColor: 'brown',
        name: 'Gross Mckay',
        gender: 'male',
        company: 'AQUACINE',
        email: 'grossmckay@aquacine.com',
        phone: '+1 (992) 507-3959',
        address: '769 Evergreen Avenue, Bedias, Washington, 7457',
        registered: '2014-03-03T12:58:42 +08:00',
        latitude: 57.020361,
        longitude: -4.664612,
        tags: ['velit', 'laborum', 'aute', 'elit', 'anim', 'officia', 'excepteur'],
        friends: [{
          id: 0,
          name: 'Buckley Jordan'
        }, {
          id: 1,
          name: 'Dunn Burch'
        }, {
          id: 2,
          name: 'Janine Sharpe'
        }],
        greeting: 'Hello, Gross Mckay! You have 2 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313da0bc1ad703a6f4d',
        index: 66,
        guid: '485e2ce5-ac02-4b01-8a50-ac7aed2f1dbd',
        isActive: false,
        balance: '$1,113.06',
        picture: 'http://placehold.it/32x32',
        age: 39,
        eyeColor: 'blue',
        name: 'Brady Caldwell',
        gender: 'male',
        company: 'NAVIR',
        email: 'bradycaldwell@navir.com',
        phone: '+1 (993) 580-3294',
        address: '976 Llama Court, Zeba, Idaho, 2123',
        registered: '2014-10-05T03:05:56 +07:00',
        latitude: 74.794686,
        longitude: 52.309875,
        tags: ['minim', 'elit', 'non', 'sint', 'occaecat', 'ipsum', 'ea'],
        friends: [{
          id: 0,
          name: 'Estrada Irwin'
        }, {
          id: 1,
          name: 'Tabatha Kirk'
        }, {
          id: 2,
          name: 'Kinney Booth'
        }],
        greeting: 'Hello, Brady Caldwell! You have 7 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313d0398e775eda75d8',
        index: 67,
        guid: 'dc238894-2be8-4d90-ac5e-9beed259077b',
        isActive: false,
        balance: '$1,577.40',
        picture: 'http://placehold.it/32x32',
        age: 28,
        eyeColor: 'green',
        name: 'Kristy Mills',
        gender: 'female',
        company: 'ZAGGLE',
        email: 'kristymills@zaggle.com',
        phone: '+1 (956) 468-3015',
        address: '828 Pleasant Place, Westmoreland, North Carolina, 8427',
        registered: '2017-03-02T10:36:09 +08:00',
        latitude: -77.195901,
        longitude: 164.74194,
        tags: ['adipisicing', 'minim', 'nisi', 'aliquip', 'ut', 'id', 'adipisicing'],
        friends: [{
          id: 0,
          name: 'Mandy Miles'
        }, {
          id: 1,
          name: 'Curry Harvey'
        }, {
          id: 2,
          name: 'Bowman Sosa'
        }],
        greeting: 'Hello, Kristy Mills! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53137c285a33949604fc',
        index: 68,
        guid: '450b12a2-bfcc-429e-8641-4c634b12d8d6',
        isActive: false,
        balance: '$3,429.87',
        picture: 'http://placehold.it/32x32',
        age: 34,
        eyeColor: 'green',
        name: 'Adriana Gentry',
        gender: 'female',
        company: 'BOINK',
        email: 'adrianagentry@boink.com',
        phone: '+1 (984) 502-2426',
        address: '107 River Street, Jessie, Oregon, 3003',
        registered: '2018-04-23T02:46:43 +07:00',
        latitude: 48.741707,
        longitude: 55.59811,
        tags: ['magna', 'dolor', 'duis', 'culpa', 'ipsum', 'voluptate', 'sit'],
        friends: [{
          id: 0,
          name: 'Martinez Davenport'
        }, {
          id: 1,
          name: 'Tina Wolfe'
        }, {
          id: 2,
          name: 'Benton Wagner'
        }],
        greeting: 'Hello, Adriana Gentry! You have 10 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca531365acf2dee60b3da5',
        index: 69,
        guid: 'f3be922e-1556-4b7b-bcb5-17689c138cea',
        isActive: false,
        balance: '$2,706.62',
        picture: 'http://placehold.it/32x32',
        age: 30,
        eyeColor: 'blue',
        name: 'Slater Mccormick',
        gender: 'male',
        company: 'PORTICA',
        email: 'slatermccormick@portica.com',
        phone: '+1 (958) 428-3287',
        address: '383 Trucklemans Lane, Richford, Ohio, 6193',
        registered: '2019-09-06T09:34:31 +07:00',
        latitude: 44.782738,
        longitude: 3.764352,
        tags: ['cillum', 'mollit', 'et', 'et', 'ipsum', 'incididunt', 'aute'],
        friends: [{
          id: 0,
          name: 'Salas Flynn'
        }, {
          id: 1,
          name: 'Summers Peters'
        }, {
          id: 2,
          name: 'Vega Hodges'
        }],
        greeting: 'Hello, Slater Mccormick! You have 8 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca5313f5a9efd7958625ac',
        index: 70,
        guid: '859e24a4-c4be-4036-b206-7d7551f3961e',
        isActive: false,
        balance: '$3,556.96',
        picture: 'http://placehold.it/32x32',
        age: 21,
        eyeColor: 'blue',
        name: 'Rosalinda Long',
        gender: 'female',
        company: 'PROGENEX',
        email: 'rosalindalong@progenex.com',
        phone: '+1 (924) 554-2053',
        address: '640 Prescott Place, Farmers, Maine, 5629',
        registered: '2015-07-11T06:39:49 +07:00',
        latitude: -40.162937,
        longitude: 137.215286,
        tags: ['excepteur', 'voluptate', 'velit', 'amet', 'dolore', 'consequat', 'tempor'],
        friends: [{
          id: 0,
          name: 'Casey Davidson'
        }, {
          id: 1,
          name: 'Carr Abbott'
        }, {
          id: 2,
          name: 'Elnora Pacheco'
        }],
        greeting: 'Hello, Rosalinda Long! You have 6 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca531308d0e599b04749c5',
        index: 71,
        guid: '545c729b-957e-4bae-ba16-6f2082a071fb',
        isActive: true,
        balance: '$2,925.44',
        picture: 'http://placehold.it/32x32',
        age: 20,
        eyeColor: 'brown',
        name: 'Nelson Bentley',
        gender: 'male',
        company: 'SLAMBDA',
        email: 'nelsonbentley@slambda.com',
        phone: '+1 (824) 579-2799',
        address: '775 Fanchon Place, Elbert, District Of Columbia, 2286',
        registered: '2019-04-21T10:35:18 +07:00',
        latitude: 6.663515,
        longitude: 84.345682,
        tags: ['nisi', 'esse', 'aute', 'amet', 'aliquip', 'labore', 'veniam'],
        friends: [{
          id: 0,
          name: 'Myra Mccullough'
        }, {
          id: 1,
          name: 'Owen Dodson'
        }, {
          id: 2,
          name: 'Pearlie Barker'
        }],
        greeting: 'Hello, Nelson Bentley! You have 10 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313e554cbffef09bd17',
        index: 72,
        guid: '59f1c7cc-ed46-4233-9566-bc8da280455c',
        isActive: true,
        balance: '$3,363.97',
        picture: 'http://placehold.it/32x32',
        age: 20,
        eyeColor: 'brown',
        name: 'Genevieve Blackburn',
        gender: 'female',
        company: 'GENMEX',
        email: 'genevieveblackburn@genmex.com',
        phone: '+1 (866) 438-2209',
        address: '805 Grand Avenue, Umapine, Guam, 449',
        registered: '2018-03-14T02:50:43 +07:00',
        latitude: 79.732811,
        longitude: -72.967157,
        tags: ['aute', 'laboris', 'duis', 'ipsum', 'dolore', 'laboris', 'ullamco'],
        friends: [{
          id: 0,
          name: 'Valdez Webb'
        }, {
          id: 1,
          name: 'Young Gamble'
        }, {
          id: 2,
          name: 'Flowers Roy'
        }],
        greeting: 'Hello, Genevieve Blackburn! You have 8 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313f75fa41f86e1f9b3',
        index: 73,
        guid: '52ce1da0-df05-4080-b895-78dd30a30e18',
        isActive: true,
        balance: '$2,670.55',
        picture: 'http://placehold.it/32x32',
        age: 34,
        eyeColor: 'blue',
        name: 'Diann Levy',
        gender: 'female',
        company: 'ESSENSIA',
        email: 'diannlevy@essensia.com',
        phone: '+1 (991) 529-2063',
        address: '362 Bills Place, Craig, Georgia, 4134',
        registered: '2018-09-09T08:13:53 +07:00',
        latitude: -23.88563,
        longitude: 163.254751,
        tags: ['dolor', 'veniam', 'dolor', 'enim', 'officia', 'ut', 'Lorem'],
        friends: [{
          id: 0,
          name: 'Savage Huff'
        }, {
          id: 1,
          name: 'Casandra Wiggins'
        }, {
          id: 2,
          name: 'Nguyen Spencer'
        }],
        greeting: 'Hello, Diann Levy! You have 9 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313d3a7af593a9aa9ad',
        index: 74,
        guid: 'cf3f0008-441d-401a-a2bd-afd3838b5267',
        isActive: true,
        balance: '$1,626.04',
        picture: 'http://placehold.it/32x32',
        age: 21,
        eyeColor: 'green',
        name: 'Betty Franco',
        gender: 'female',
        company: 'ENTOGROK',
        email: 'bettyfranco@entogrok.com',
        phone: '+1 (831) 534-2229',
        address: '145 Lloyd Court, Bynum, Northern Mariana Islands, 6911',
        registered: '2015-04-07T09:03:45 +07:00',
        latitude: 68.506996,
        longitude: 70.646012,
        tags: ['duis', 'dolore', 'ullamco', 'non', 'pariatur', 'elit', 'eiusmod'],
        friends: [{
          id: 0,
          name: 'Schroeder Guerrero'
        }, {
          id: 1,
          name: 'Deann Middleton'
        }, {
          id: 2,
          name: 'Zelma Larsen'
        }],
        greeting: 'Hello, Betty Franco! You have 4 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313e5134895c1a91d09',
        index: 75,
        guid: 'ed4d83ea-f492-41f5-a1d4-5b9c99eb719a',
        isActive: false,
        balance: '$3,813.85',
        picture: 'http://placehold.it/32x32',
        age: 26,
        eyeColor: 'green',
        name: 'Stafford Fields',
        gender: 'male',
        company: 'DOGNOSIS',
        email: 'staffordfields@dognosis.com',
        phone: '+1 (858) 523-2169',
        address: '631 Lott Street, Bison, Missouri, 610',
        registered: '2016-12-19T01:16:05 +08:00',
        latitude: 39.614107,
        longitude: -4.301823,
        tags: ['sit', 'velit', 'est', 'velit', 'voluptate', 'consequat', 'cillum'],
        friends: [{
          id: 0,
          name: 'Laura Duke'
        }, {
          id: 1,
          name: 'Noble Mcfadden'
        }, {
          id: 2,
          name: 'Rowena Walker'
        }],
        greeting: 'Hello, Stafford Fields! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313397dc0d503fecbac',
        index: 76,
        guid: '72892ce6-a453-4cd3-9aa2-dfb091c25a45',
        isActive: true,
        balance: '$3,710.43',
        picture: 'http://placehold.it/32x32',
        age: 30,
        eyeColor: 'green',
        name: 'Keisha Nelson',
        gender: 'female',
        company: 'KIGGLE',
        email: 'keishanelson@kiggle.com',
        phone: '+1 (874) 535-2412',
        address: '628 Norfolk Street, Ventress, New York, 5478',
        registered: '2016-03-14T10:31:54 +07:00',
        latitude: 24.647082,
        longitude: 134.645181,
        tags: ['in', 'velit', 'proident', 'aute', 'ad', 'laborum', 'mollit'],
        friends: [{
          id: 0,
          name: 'Dodson Hensley'
        }, {
          id: 1,
          name: 'Carmella Herman'
        }, {
          id: 2,
          name: 'Guthrie Wheeler'
        }],
        greeting: 'Hello, Keisha Nelson! You have 8 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313d94c6a6155b620d0',
        index: 77,
        guid: '8b728cb9-492b-45f3-a70c-324f7f1a6d4e',
        isActive: false,
        balance: '$1,737.18',
        picture: 'http://placehold.it/32x32',
        age: 20,
        eyeColor: 'blue',
        name: 'Allison Howe',
        gender: 'female',
        company: 'SLOGANAUT',
        email: 'allisonhowe@sloganaut.com',
        phone: '+1 (981) 495-2050',
        address: '299 Stillwell Avenue, Idledale, California, 107',
        registered: '2019-01-22T05:12:14 +08:00',
        latitude: -4.725867,
        longitude: -4.503071,
        tags: ['aliquip', 'proident', 'deserunt', 'ea', 'commodo', 'consectetur', 'nostrud'],
        friends: [{
          id: 0,
          name: 'Newton Roberson'
        }, {
          id: 1,
          name: 'Adele Mack'
        }, {
          id: 2,
          name: 'Conway Combs'
        }],
        greeting: 'Hello, Allison Howe! You have 10 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313f2f24b5d964c8204',
        index: 78,
        guid: '5c08ce8d-5b29-4178-9953-aedb9114155b',
        isActive: false,
        balance: '$2,608.09',
        picture: 'http://placehold.it/32x32',
        age: 29,
        eyeColor: 'blue',
        name: 'Lillie Park',
        gender: 'female',
        company: 'OHMNET',
        email: 'lilliepark@ohmnet.com',
        phone: '+1 (949) 532-3631',
        address: '739 Ovington Avenue, Windsor, North Dakota, 4302',
        registered: '2018-03-06T07:14:38 +08:00',
        latitude: 43.030795,
        longitude: 112.81937,
        tags: ['cupidatat', 'aliquip', 'tempor', 'anim', 'mollit', 'occaecat', 'elit'],
        friends: [{
          id: 0,
          name: 'Page Molina'
        }, {
          id: 1,
          name: 'Ware Walsh'
        }, {
          id: 2,
          name: 'Carlene Hudson'
        }],
        greeting: 'Hello, Lillie Park! You have 3 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53131ef4f186214fdece',
        index: 79,
        guid: 'e747dda8-13b1-4fca-a88b-d733afcbb325',
        isActive: true,
        balance: '$2,268.92',
        picture: 'http://placehold.it/32x32',
        age: 40,
        eyeColor: 'green',
        name: 'Kline Fitzgerald',
        gender: 'male',
        company: 'BIOHAB',
        email: 'klinefitzgerald@biohab.com',
        phone: '+1 (807) 475-3174',
        address: '208 Gunther Place, Gasquet, Pennsylvania, 4264',
        registered: '2014-10-17T02:28:53 +07:00',
        latitude: 74.524075,
        longitude: -112.453954,
        tags: ['ea', 'ut', 'magna', 'exercitation', 'consequat', 'eiusmod', 'irure'],
        friends: [{
          id: 0,
          name: 'Sawyer Potts'
        }, {
          id: 1,
          name: 'Pugh Weeks'
        }, {
          id: 2,
          name: 'Byers Terry'
        }],
        greeting: 'Hello, Kline Fitzgerald! You have 6 unread messages.',
        favoriteFruit: 'strawberry'
      }, {
        id: '5dca53133cd17ca816cf3433',
        index: 80,
        guid: '630807f1-8dfb-4a11-a0f6-dce1261fa1ad',
        isActive: true,
        balance: '$2,597.29',
        picture: 'http://placehold.it/32x32',
        age: 34,
        eyeColor: 'brown',
        name: 'Woods Madden',
        gender: 'male',
        company: 'QUINEX',
        email: 'woodsmadden@quinex.com',
        phone: '+1 (989) 557-3279',
        address: '750 Stratford Road, Herald, Arizona, 3068',
        registered: '2017-03-18T08:48:12 +07:00',
        latitude: 53.789557,
        longitude: 71.236122,
        tags: ['amet', 'cillum', 'dolore', 'aliquip', 'veniam', 'exercitation', 'dolore'],
        friends: [{
          id: 0,
          name: 'Alvarado Livingston'
        }, {
          id: 1,
          name: 'Annette Sweet'
        }, {
          id: 2,
          name: 'Minnie Woods'
        }],
        greeting: 'Hello, Woods Madden! You have 1 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313b9ccb40988e9e545',
        index: 81,
        guid: 'd03ee6b2-9ea7-4c40-a092-11dc9e872824',
        isActive: false,
        balance: '$2,493.13',
        picture: 'http://placehold.it/32x32',
        age: 28,
        eyeColor: 'brown',
        name: 'Sheena Gilmore',
        gender: 'female',
        company: 'QUILCH',
        email: 'sheenagilmore@quilch.com',
        phone: '+1 (977) 409-2836',
        address: '404 Duryea Court, Odessa, New Hampshire, 8131',
        registered: '2014-01-25T05:41:49 +08:00',
        latitude: 58.971179,
        longitude: -48.848797,
        tags: ['quis', 'ex', 'proident', 'pariatur', 'aliquip', 'mollit', 'laboris'],
        friends: [{
          id: 0,
          name: 'Albert Reid'
        }, {
          id: 1,
          name: 'Mercer Greer'
        }, {
          id: 2,
          name: 'Katy Shepard'
        }],
        greeting: 'Hello, Sheena Gilmore! You have 9 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca531307d2bc4e41dee17c',
        index: 82,
        guid: 'f05adacd-cfa4-45da-8f53-c9354b429bf9',
        isActive: false,
        balance: '$1,542.53',
        picture: 'http://placehold.it/32x32',
        age: 29,
        eyeColor: 'blue',
        name: 'Lawanda Murray',
        gender: 'female',
        company: 'ECRATIC',
        email: 'lawandamurray@ecratic.com',
        phone: '+1 (885) 595-2467',
        address: '565 Mill Lane, Springville, Michigan, 7718',
        registered: '2019-09-04T05:08:45 +07:00',
        latitude: 67.74264,
        longitude: -41.134553,
        tags: ['magna', 'dolore', 'cupidatat', 'reprehenderit', 'aute', 'aliqua', 'id'],
        friends: [{
          id: 0,
          name: 'Melendez Albert'
        }, {
          id: 1,
          name: 'Cynthia Brock'
        }, {
          id: 2,
          name: 'Delacruz Mathis'
        }],
        greeting: 'Hello, Lawanda Murray! You have 1 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca531375a8c686acca96b0',
        index: 83,
        guid: 'a716bf01-6557-446b-b0ca-0f822ec07e77',
        isActive: false,
        balance: '$3,337.55',
        picture: 'http://placehold.it/32x32',
        age: 29,
        eyeColor: 'blue',
        name: 'Grant Noel',
        gender: 'male',
        company: 'COASH',
        email: 'grantnoel@coash.com',
        phone: '+1 (862) 498-2970',
        address: '369 Hamilton Avenue, Oceola, Connecticut, 1989',
        registered: '2018-02-02T09:42:53 +08:00',
        latitude: 10.729459,
        longitude: -34.504094,
        tags: ['anim', 'anim', 'ipsum', 'amet', 'ut', 'ipsum', 'consequat'],
        friends: [{
          id: 0,
          name: 'Trevino Marks'
        }, {
          id: 1,
          name: 'Kathie Marsh'
        }, {
          id: 2,
          name: 'Mckay Wright'
        }],
        greeting: 'Hello, Grant Noel! You have 8 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca53135c866993df4d142f',
        index: 84,
        guid: 'e265f17b-90e5-4cb8-a9b4-ec48d27e9e0c',
        isActive: false,
        balance: '$3,908.92',
        picture: 'http://placehold.it/32x32',
        age: 21,
        eyeColor: 'blue',
        name: 'Griffith Heath',
        gender: 'male',
        company: 'CENTREE',
        email: 'griffithheath@centree.com',
        phone: '+1 (838) 451-3282',
        address: '284 Colby Court, Barrelville, Kentucky, 5926',
        registered: '2018-08-23T03:53:12 +07:00',
        latitude: -88.378673,
        longitude: -20.817473,
        tags: ['eiusmod', 'est', 'voluptate', 'cupidatat', 'duis', 'quis', 'pariatur'],
        friends: [{
          id: 0,
          name: 'Jones Jacobson'
        }, {
          id: 1,
          name: 'Charity Sparks'
        }, {
          id: 2,
          name: 'Mari Crane'
        }],
        greeting: 'Hello, Griffith Heath! You have 7 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca531303258fd242d559ee',
        index: 85,
        guid: '64979aa0-46c0-45d8-b2d7-e1f5ac2b6c45',
        isActive: true,
        balance: '$2,588.53',
        picture: 'http://placehold.it/32x32',
        age: 22,
        eyeColor: 'blue',
        name: 'Cruz Key',
        gender: 'male',
        company: 'FANGOLD',
        email: 'cruzkey@fangold.com',
        phone: '+1 (985) 534-3276',
        address: '907 Nevins Street, Garberville, Federated States Of Micronesia, 1561',
        registered: '2015-04-26T07:34:05 +07:00',
        latitude: -86.268381,
        longitude: -21.614001,
        tags: ['reprehenderit', 'eiusmod', 'ullamco', 'tempor', 'minim', 'mollit', 'incididunt'],
        friends: [{
          id: 0,
          name: 'Colleen Gates'
        }, {
          id: 1,
          name: 'Browning Richard'
        }, {
          id: 2,
          name: 'Barbara Lynn'
        }],
        greeting: 'Hello, Cruz Key! You have 3 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313db690e44e7a60c69',
        index: 86,
        guid: 'c061ac56-5b91-49e0-aa4e-febfbc7b8dab',
        isActive: false,
        balance: '$3,387.33',
        picture: 'http://placehold.it/32x32',
        age: 24,
        eyeColor: 'blue',
        name: 'Maldonado Buckley',
        gender: 'male',
        company: 'CEMENTION',
        email: 'maldonadobuckley@cemention.com',
        phone: '+1 (841) 496-2009',
        address: '875 Greenpoint Avenue, Baker, Florida, 7856',
        registered: '2015-06-20T05:32:50 +07:00',
        latitude: 67.785739,
        longitude: 15.070502,
        tags: ['nostrud', 'tempor', 'est', 'nulla', 'reprehenderit', 'elit', 'anim'],
        friends: [{
          id: 0,
          name: 'Lolita Holloway'
        }, {
          id: 1,
          name: 'Coleman Ruiz'
        }, {
          id: 2,
          name: 'Jewell Richards'
        }],
        greeting: 'Hello, Maldonado Buckley! You have 6 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313bc07601ca626a1e7',
        index: 87,
        guid: '887f3e9c-132c-44ed-9863-e1ca10c554c6',
        isActive: true,
        balance: '$2,207.39',
        picture: 'http://placehold.it/32x32',
        age: 31,
        eyeColor: 'brown',
        name: 'Rutledge Cunningham',
        gender: 'male',
        company: 'SINGAVERA',
        email: 'rutledgecunningham@singavera.com',
        phone: '+1 (974) 446-2009',
        address: '255 Hart Place, Keller, Illinois, 5581',
        registered: '2015-08-01T05:29:08 +07:00',
        latitude: 44.798823,
        longitude: 129.383504,
        tags: ['sunt', 'eu', 'fugiat', 'ullamco', 'et', 'irure', 'excepteur'],
        friends: [{
          id: 0,
          name: 'Angelita Walls'
        }, {
          id: 1,
          name: 'Marisol Miranda'
        }, {
          id: 2,
          name: 'Alma Woodward'
        }],
        greeting: 'Hello, Rutledge Cunningham! You have 6 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca53134bcc5cb68d15fd2a',
        index: 88,
        guid: 'edfa8488-8e09-47f8-8162-5f3ae3d9e632',
        isActive: true,
        balance: '$3,378.83',
        picture: 'http://placehold.it/32x32',
        age: 28,
        eyeColor: 'green',
        name: 'Nita Holmes',
        gender: 'female',
        company: 'LOVEPAD',
        email: 'nitaholmes@lovepad.com',
        phone: '+1 (868) 558-2509',
        address: '763 Morton Street, Shaft, Minnesota, 8445',
        registered: '2018-03-21T11:53:54 +07:00',
        latitude: 76.324264,
        longitude: -171.124236,
        tags: ['pariatur', 'in', 'aute', 'aliquip', 'commodo', 'ad', 'voluptate'],
        friends: [{
          id: 0,
          name: 'Ashley Floyd'
        }, {
          id: 1,
          name: 'Walls Haley'
        }, {
          id: 2,
          name: 'Antonia Allen'
        }],
        greeting: 'Hello, Nita Holmes! You have 3 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53138c1c51d29c75cdf3',
        index: 89,
        guid: '829b973e-59ef-46fc-a2ce-bef0fd48813b',
        isActive: true,
        balance: '$3,165.03',
        picture: 'http://placehold.it/32x32',
        age: 22,
        eyeColor: 'green',
        name: 'Arlene Kirby',
        gender: 'female',
        company: 'PATHWAYS',
        email: 'arlenekirby@pathways.com',
        phone: '+1 (902) 532-3547',
        address: '391 Ford Street, Springdale, Utah, 6737',
        registered: '2017-04-12T07:46:34 +07:00',
        latitude: -24.852138,
        longitude: -64.518736,
        tags: ['proident', 'sit', 'laborum', 'elit', 'veniam', 'sit', 'ullamco'],
        friends: [{
          id: 0,
          name: 'Sheri Valdez'
        }, {
          id: 1,
          name: 'Marcie Bartlett'
        }, {
          id: 2,
          name: 'Colon Sullivan'
        }],
        greeting: 'Hello, Arlene Kirby! You have 6 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca53133c60324879cf7505',
        index: 90,
        guid: '787925cd-df2b-4784-bdcc-62bc8c3c179a',
        isActive: true,
        balance: '$2,033.80',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'blue',
        name: 'Oneil Skinner',
        gender: 'male',
        company: 'EVENTIX',
        email: 'oneilskinner@eventix.com',
        phone: '+1 (921) 594-2035',
        address: '370 Schenck Street, Bartonsville, Delaware, 7808',
        registered: '2015-07-03T07:47:02 +07:00',
        latitude: -2.880286,
        longitude: -153.677525,
        tags: ['dolore', 'aute', 'id', 'irure', 'irure', 'ut', 'ad'],
        friends: [{
          id: 0,
          name: 'Knapp Velazquez'
        }, {
          id: 1,
          name: 'Patton Stafford'
        }, {
          id: 2,
          name: 'Delores Serrano'
        }],
        greeting: 'Hello, Oneil Skinner! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca5313d2b086066f3b3d7b',
        index: 91,
        guid: '35f044ec-79b4-437a-bfc8-6c9a2c91fbee',
        isActive: true,
        balance: '$1,714.41',
        picture: 'http://placehold.it/32x32',
        age: 39,
        eyeColor: 'green',
        name: 'Lourdes Scott',
        gender: 'female',
        company: 'EWAVES',
        email: 'lourdesscott@ewaves.com',
        phone: '+1 (829) 474-2335',
        address: '168 Christopher Avenue, Dorneyville, South Carolina, 200',
        registered: '2015-10-27T07:32:22 +07:00',
        latitude: -41.215253,
        longitude: -150.129844,
        tags: ['consequat', 'aliqua', 'minim', 'exercitation', 'esse', 'et', 'quis'],
        friends: [{
          id: 0,
          name: 'Alexander Holcomb'
        }, {
          id: 1,
          name: 'Gonzalez Stephens'
        }, {
          id: 2,
          name: 'Alford Hoffman'
        }],
        greeting: 'Hello, Lourdes Scott! You have 5 unread messages.',
        favoriteFruit: 'banana'
      }, {
        id: '5dca53139967fc43f4f3ec65',
        index: 92,
        guid: 'a95af161-f7f1-45e5-a244-858c44d66835',
        isActive: false,
        balance: '$2,604.52',
        picture: 'http://placehold.it/32x32',
        age: 38,
        eyeColor: 'green',
        name: 'Compton Frye',
        gender: 'male',
        company: 'ZILCH',
        email: 'comptonfrye@zilch.com',
        phone: '+1 (853) 585-2891',
        address: '253 Irwin Street, Foxworth, New Mexico, 9110',
        registered: '2016-04-27T06:26:47 +07:00',
        latitude: -29.81559,
        longitude: -26.490554,
        tags: ['commodo', 'sunt', 'ad', 'veniam', 'quis', 'cillum', 'esse'],
        friends: [{
          id: 0,
          name: 'Leta Gould'
        }, {
          id: 1,
          name: 'Angelina Wolf'
        }, {
          id: 2,
          name: 'Sloan Cantrell'
        }],
        greeting: 'Hello, Compton Frye! You have 2 unread messages.',
        favoriteFruit: 'apple'
      }, {
        id: '5dca5313abbf072c5cc7c51f',
        index: 93,
        guid: '7ced9278-681c-4db1-9cc2-a453834d2aac',
        isActive: false,
        balance: '$3,693.59',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'brown',
        name: 'Shannon Fleming',
        gender: 'male',
        company: 'QUONK',
        email: 'shannonfleming@quonk.com',
        phone: '+1 (975) 430-2763',
        address: '393 Chestnut Street, Chapin, Wyoming, 474',
        registered: '2017-09-08T06:31:57 +07:00',
        latitude: 69.603202,
        longitude: 151.995107,
        tags: ['esse', 'qui', 'ullamco', 'excepteur', 'dolor', 'culpa', 'officia'],
        friends: [{
          id: 0,
          name: 'Burch Sampson'
        }, {
          id: 1,
          name: 'Alston Randolph'
        }, {
          id: 2,
          name: 'Barker Wynn'
        }],
        greeting: 'Hello, Shannon Fleming! You have 8 unread messages.',
        favoriteFruit: 'strawberry'
      }]
    };
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
    /*! /Users/mc/helpdevsrc/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map