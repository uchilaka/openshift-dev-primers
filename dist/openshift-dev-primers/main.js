(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container main\">\n  <!-- This is where dynamic content is swapped out -->\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  padding-top: 5em; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import "bootstrap/dist/js/bootstrap.min.js";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "OpenShift (Dev) Primers";
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        // public sidebarIsOpen: boolean;
        // toggleSidebar($event?: Event) {
        //   if ($event) {
        //     $event.preventDefault();
        //   }
        //   this.sidebarIsOpen = !this.sidebarIsOpen;
        // }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _learn_openshift_learn_openshift_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./learn-openshift/learn-openshift.component */ "./src/app/learn-openshift/learn-openshift.component.ts");
/* harmony import */ var _simple_sidebar_simple_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./simple-sidebar/simple-sidebar.component */ "./src/app/simple-sidebar/simple-sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _source_control_source_control_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./source-control/source-control.component */ "./src/app/source-control/source-control.component.ts");
/* harmony import */ var _openshift_openshift_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./openshift/openshift.component */ "./src/app/openshift/openshift.component.ts");
/* harmony import */ var _other_tools_other_tools_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./other-tools/other-tools.component */ "./src/app/other-tools/other-tools.component.ts");
/* harmony import */ var _o365_o365_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./o365/o365.component */ "./src/app/o365/o365.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/examples/examples.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _learn_openshift_learn_openshift_component__WEBPACK_IMPORTED_MODULE_9__["LearnOpenshiftComponent"],
                _simple_sidebar_simple_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SimpleSidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _source_control_source_control_component__WEBPACK_IMPORTED_MODULE_12__["SourceControlComponent"],
                _openshift_openshift_component__WEBPACK_IMPORTED_MODULE_13__["OpenshiftComponent"],
                _other_tools_other_tools_component__WEBPACK_IMPORTED_MODULE_14__["OtherToolsComponent"],
                _o365_o365_component__WEBPACK_IMPORTED_MODULE_15__["O365Component"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_16__["ExamplesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], { enableTracing: false })
            ],
            providers: [
                // Configure the app to use the hash location strategy
                [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _learn_openshift_learn_openshift_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learn-openshift/learn-openshift.component */ "./src/app/learn-openshift/learn-openshift.component.ts");
/* harmony import */ var _source_control_source_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source-control/source-control.component */ "./src/app/source-control/source-control.component.ts");
/* harmony import */ var _openshift_openshift_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openshift/openshift.component */ "./src/app/openshift/openshift.component.ts");
/* harmony import */ var _o365_o365_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./o365/o365.component */ "./src/app/o365/o365.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/examples/examples.component.ts");





var ROUTES = [
    {
        path: "examples",
        children: [
            {
                path: "source-code",
                component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
            },
            {
                path: "videos",
                component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"]
            },
            {
                path: "**",
                redirectTo: "/examples/videos"
            }
        ]
    },
    {
        path: "docs",
        children: [
            {
                path: "o365",
                component: _o365_o365_component__WEBPACK_IMPORTED_MODULE_3__["O365Component"]
            },
            {
                path: "gogs",
                component: _source_control_source_control_component__WEBPACK_IMPORTED_MODULE_1__["SourceControlComponent"]
            },
            {
                path: "openshift",
                component: _openshift_openshift_component__WEBPACK_IMPORTED_MODULE_2__["OpenshiftComponent"]
            },
            {
                path: "get-started",
                component: _source_control_source_control_component__WEBPACK_IMPORTED_MODULE_1__["SourceControlComponent"]
            },
            {
                path: "learn-openshift",
                component: _learn_openshift_learn_openshift_component__WEBPACK_IMPORTED_MODULE_0__["LearnOpenshiftComponent"]
            }
        ]
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/docs/gogs"
    }
];


/***/ }),

/***/ "./src/app/examples/examples.component.html":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--\n    <h2>Source Code</h2>\n    <hr />\n    <h2>Videos</h2>\n    A few videos to help with using the Azure Managed OpenShift environment\n  -->\n\n  <p></p>\n  <h3>The Dashboard</h3>\n  <div>\n    Get a preview of the OpenShift dashboard, and creating a new project.\n  </div>\n\n  <!-- With Privacy Enhanced Mode -->\n  <!--\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube-nocookie.com/embed/bkCdpF3MtLI\"\n      frameborder=\"0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen\n    ></iframe>\n  -->\n\n  <iframe\n    width=\"560\"\n    height=\"315\"\n    src=\"https://www.youtube.com/embed/bkCdpF3MtLI\"\n    frameborder=\"0\"\n    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n    allowfullscreen\n  ></iframe>\n\n  <hr />\n  <h3>Setting up a NodeJS app</h3>\n\n  <div>\n    A guide showing the setup of a customized NodeJS application. Take a moment\n    to check out the source code:\n    <a\n      href=\"http://gogs-demo.40.76.6.47.nip.io/uchilaka/trivial-nodejs-mongodb.git\"\n      target=\"_blank\"\n      >http://gogs-demo.40.76.6.47.nip.io/uchilaka/trivial-nodejs-mongodb.git</a\n    >\n  </div>\n\n  <!--\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/zqqUESqaX0E\"\n      frameborder=\"0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen\n    ></iframe>\n  -->\n\n  <iframe\n    src=\"https://player.vimeo.com/video/299651093\"\n    width=\"640\"\n    height=\"400\"\n    frameborder=\"0\"\n    webkitallowfullscreen\n    mozallowfullscreen\n    allowfullscreen\n  ></iframe>\n</div>\n"

/***/ }),

/***/ "./src/app/examples/examples.component.scss":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/examples.component.ts":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/examples/examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/learn-openshift/learn-openshift.component.css":
/*!***************************************************************!*\
  !*** ./src/app/learn-openshift/learn-openshift.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/learn-openshift/learn-openshift.component.html":
/*!****************************************************************!*\
  !*** ./src/app/learn-openshift/learn-openshift.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"getting-started-fast-with-openshift\">Learn OpenShift</h1>\n<p>This guide will be completed with the <strong>OpenShift Trial</strong> available at <a href=\"https://manage.openshift.com/accounts/auth/keycloak\"\n    target=\"_blank\">https://www.openshift.com/trial/</a>. Our link here directs you right to the signup screen for a\n  developer trial - if you visit the link directly, be sure to select the <em>developer</em> track.</p>\n<p>Complete the following steps to get going with an OpenShift trial account:</p>\n<ol>\n  <li><strong>Create a Red Hat account.</strong> You can also login with your Google account (which is what I did).\n    You will be directed to:\n    <ul>\n      <li>Provide a username - this defaults to your email address if you login with your Google account</li>\n      <li>Provide a password (keep track of this password - you'll need it for the steps in <a href=\"https://learn.openshift.com/introduction/getting-started/\">the\n          getting started guide</a>)</li>\n      <li>Agree to the disclosures\n        You will end up at an account dashboard letting you know that your environment is <em>queued for provisioning</em>.\n        No worries - you've got a Red Hat account, so your job is done here for now. Head back to <a href=\"https://learn.openshift.com/introduction/getting-started/\"\n          target=\"_blank\">the getting started guide</a>.</li>\n    </ul>\n  </li>\n  <li>Enter the username and password from above in the <a href=\"https://www.katacoda.com/\">Katakoda</a> Command Line\n    Interface to the right. You will be logged in successfully with an active Red Hat account</li>\n</ol>\n\n<img src=\"/assets/openshift-online-login-screen.png\" alt=\"OpenShift Online Login Screen\" />\n"

/***/ }),

/***/ "./src/app/learn-openshift/learn-openshift.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/learn-openshift/learn-openshift.component.ts ***!
  \**************************************************************/
/*! exports provided: LearnOpenshiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnOpenshiftComponent", function() { return LearnOpenshiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnOpenshiftComponent = /** @class */ (function () {
    function LearnOpenshiftComponent() {
    }
    LearnOpenshiftComponent.prototype.ngOnInit = function () {
    };
    LearnOpenshiftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learn-openshift',
            template: __webpack_require__(/*! ./learn-openshift.component.html */ "./src/app/learn-openshift/learn-openshift.component.html"),
            styles: [__webpack_require__(/*! ./learn-openshift.component.css */ "./src/app/learn-openshift/learn-openshift.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnOpenshiftComponent);
    return LearnOpenshiftComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#/\">OpenShift Primer</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\">\n        <a\n          class=\"nav-link dropdown-toggle\"\n          href=\"#\"\n          id=\"navbarDropdown\"\n          role=\"button\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n        >\n          Guides\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#/docs/get-started\"\n            >Get Started (GOGS)</a\n          >\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#/docs/o365\">Office 365 Setup</a>\n          <a class=\"dropdown-item\" href=\"#/docs/openshift\">OpenShift Setup</a>\n          <a class=\"dropdown-item\" href=\"#/examples\">OpenShift Examples</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          href=\"https://s3.amazonaws.com/com-comenity-dev/public/hackathon/openshift_cheat_sheet_r3v1.pdf\"\n          target=\"_blank\"\n          >OpenShift Cheat Sheet</a\n        >\n      </li>\n      <!--\n        <li class=\"nav-item dropdown\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            href=\"#\"\n            id=\"navbarDropdown\"\n            role=\"button\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n      -->\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/o365/o365.component.html":
/*!******************************************!*\
  !*** ./src/app/o365/o365.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Getting started with Office 365 Teams</h1>\n\n  We've prepared a short video showing the steps to get started with Office 365\n  Teams.\n\n  <p></p>\n  Before setting up Teams on your mobile device, be sure you've completed the\n  following steps:\n\n  <p></p>\n  <ul>\n    <li>\n      Check your inbox for your Office 365 tenant setup email sent on 11/02 at\n      about 4pm. The email has the details for access to the test tenant\n    </li>\n    <li>\n      Visit <a href=\"https://www.office.com\">office.com</a> to confirm access to\n      your account\n    </li>\n    <li>\n      Enter <em>firstname.lastname@adshackathon.onmicrosoft.com</em> for your\n      username\n    </li>\n    <li>Enter the temporary password from your setup email (above)</li>\n  </ul>\n\n  When you complete your login, you should arrive at your O365 dashboard,\n  showing the Office Apps.\n\n  <p></p>\n\n  <!-- actual height: 1138 -->\n\n  <iframe\n    src=\"https://player.vimeo.com/video/299518770\"\n    height=\"640\"\n    frameborder=\"0\"\n    webkitallowfullscreen\n    mozallowfullscreen\n    allowfullscreen\n  ></iframe>\n</div>\n"

/***/ }),

/***/ "./src/app/o365/o365.component.scss":
/*!******************************************!*\
  !*** ./src/app/o365/o365.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/o365/o365.component.ts":
/*!****************************************!*\
  !*** ./src/app/o365/o365.component.ts ***!
  \****************************************/
/*! exports provided: O365Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O365Component", function() { return O365Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var O365Component = /** @class */ (function () {
    function O365Component() {
    }
    O365Component.prototype.ngOnInit = function () { };
    O365Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-o365",
            template: __webpack_require__(/*! ./o365.component.html */ "./src/app/o365/o365.component.html"),
            styles: [__webpack_require__(/*! ./o365.component.scss */ "./src/app/o365/o365.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], O365Component);
    return O365Component;
}());



/***/ }),

/***/ "./src/app/openshift/openshift.component.html":
/*!****************************************************!*\
  !*** ./src/app/openshift/openshift.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Getting Started with OpenShift</h1>\n  All of the information your need to access the OpenShift environment is\n  available in the setup email from Scott on the Red Hat team.\n  <b>\n    Check your Alliance Data mailbox for your access credentials sent on 11/06.\n  </b>\n  <p>\n    Once you've obtained your credentials, visit the link provided to the\n    <a\n      href=\"https://masterdnsqlw7eyw6yqcsi.eastus.cloudapp.azure.com\"\n      target=\"_blank\"\n    >\n      Azure managed OpenShift environment\n    </a>\n    provided with your credentials.\n    <b> You will need to accept a self-signed certificate to continue: </b>\n  </p>\n\n  <p><b>Verify the information below before proceeding:</b></p>\n\n  <p>\n    <img\n      src=\"https://s3.amazonaws.com/com-comenity-dev/public/hackathon/self-signed-openshift-details.PNG\"\n    />\n\n    <!--\n      <h1 id=\"getting-started-fast-with-openshift\">Getting Started (FAST!) with OpenShift</h1>\n      <p>This guide will be completed with the <strong>OpenShift Trial</strong> available at <a href=\"https://manage.openshift.com/accounts/auth/keycloak\"\n          target=\"_blank\">https://www.openshift.com/trial/</a>. Our link here directs you right to the signup screen for a\n        developer trial - if you visit the link directly, be sure to select the <em>developer</em> track.</p>\n      <p>Complete the following steps to get going with an OpenShift trial account:</p>\n      <ol>\n        <li><strong>Create a Red Hat account.</strong> You can also login with your Google account (which is what I did).\n          You will be directed to:\n          <ul>\n            <li>Provide a username - this defaults to your email address if you login with your Google account</li>\n            <li>Provide a password (keep track of this password - you'll need it for the steps in <a href=\"https://learn.openshift.com/introduction/getting-started/\">the\n                getting started guide</a>)</li>\n            <li>Agree to the disclosures\n              You will end up at an account dashboard letting you know that your environment is <em>queued for provisioning</em>.\n              No worries - you've got a Red Hat account, so your job is done here for now. Head back to <a href=\"https://learn.openshift.com/introduction/getting-started/\"\n                target=\"_blank\">the getting started guide</a>.</li>\n          </ul>\n        </li>\n        <li>Enter the username and password from above in the <a href=\"https://www.katacoda.com/\">Katakoda</a> Command Line\n          Interface to the right. You will be logged in successfully with an active Red Hat account</li>\n      </ol>\n\n      <img src=\"/assets/openshift-online-login-screen.png\" alt=\"OpenShift Online Login Screen\" />\n    -->\n  </p>\n\n  <app-other-tools></app-other-tools>\n</div>\n"

/***/ }),

/***/ "./src/app/openshift/openshift.component.scss":
/*!****************************************************!*\
  !*** ./src/app/openshift/openshift.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 600px;\n  display: block;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/openshift/openshift.component.ts":
/*!**************************************************!*\
  !*** ./src/app/openshift/openshift.component.ts ***!
  \**************************************************/
/*! exports provided: OpenshiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenshiftComponent", function() { return OpenshiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpenshiftComponent = /** @class */ (function () {
    function OpenshiftComponent() {
    }
    OpenshiftComponent.prototype.ngOnInit = function () { };
    OpenshiftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-openshift",
            template: __webpack_require__(/*! ./openshift.component.html */ "./src/app/openshift/openshift.component.html"),
            styles: [__webpack_require__(/*! ./openshift.component.scss */ "./src/app/openshift/openshift.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OpenshiftComponent);
    return OpenshiftComponent;
}());



/***/ }),

/***/ "./src/app/other-tools/other-tools.component.css":
/*!*******************************************************!*\
  !*** ./src/app/other-tools/other-tools.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/other-tools/other-tools.component.html":
/*!********************************************************!*\
  !*** ./src/app/other-tools/other-tools.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Additional Tools</h2>\n\nSome additional Tools for you to use:\n\n<ul>\n  <li>\n    Eclipse Ché:\n    <a href=\"http://che-eclipse-che.40.76.6.47.nip.io\" target=\"_blank\"\n      >http://che-eclipse-che.40.76.6.47.nip.io</a\n    >\n  </li>\n  <li>\n    Nexus:\n    <a href=\"http://nexus-nexus.40.76.6.47.nip.io\" target=\"_blank\"\n      >http://nexus-nexus.40.76.6.47.nip.io</a\n    >\n  </li>\n  <li>\n    Gogs:\n    <a href=\"http://gogs-demo.40.76.6.47.nip.io\" target=\"_blank\"\n      >http://gogs-demo.40.76.6.47.nip.io</a\n    >\n  </li>\n  <li>\n    Jenkins:\n    <a href=\"http://jenkins-jenkins.40.76.6.47.nip.io\"\n      >http://jenkins-jenkins.40.76.6.47.nip.io</a\n    >\n  </li>\n  <li>\n    CLI:\n    <a href=\"http://cli-inabox.40.76.6.47.nip.io\" target=\"_blank\"\n      >http://cli-inabox.40.76.6.47.nip.io</a\n    >\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/other-tools/other-tools.component.ts":
/*!******************************************************!*\
  !*** ./src/app/other-tools/other-tools.component.ts ***!
  \******************************************************/
/*! exports provided: OtherToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherToolsComponent", function() { return OtherToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherToolsComponent = /** @class */ (function () {
    function OtherToolsComponent() {
    }
    OtherToolsComponent.prototype.ngOnInit = function () {
    };
    OtherToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-tools',
            template: __webpack_require__(/*! ./other-tools.component.html */ "./src/app/other-tools/other-tools.component.html"),
            styles: [__webpack_require__(/*! ./other-tools.component.css */ "./src/app/other-tools/other-tools.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherToolsComponent);
    return OtherToolsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Custom sidebar -->\n<div id=\"sidebar-wrapper\">\n  <ul class=\"sidebar-nav\">\n    <li class=\"sidebar-brand\">\n      <a href=\"#\">\n        Start Bootstrap\n      </a>\n    </li>\n    <li>\n      <a href=\"#/docs/getting-started\">Setup</a>\n    </li>\n    <li>\n      <a href=\"#/docs/learn-openshift\">Learn OpenShift</a>\n    </li>\n    <li>\n      <a href=\"#\">Overview</a>\n    </li>\n    <li>\n      <a href=\"#\">Events</a>\n    </li>\n    <li>\n      <a href=\"#\">About</a>\n    </li>\n    <li>\n      <a href=\"#\">Services</a>\n    </li>\n    <li>\n      <a href=\"#\">Contact</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\n */\nbody {\n  overflow-x: hidden; }\n#wrapper {\n  padding-left: 0;\n  transition: all 0.5s ease; }\n#wrapper #sidebar-wrapper {\n    z-index: 1000;\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 250px;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // $("#menu-toggle").click(function(e) {
        //   e.preventDefault();
        //   $("#wrapper").toggleClass("toggled");
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidebarComponent.prototype, "isOpen", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/simple-sidebar/simple-sidebar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/simple-sidebar/simple-sidebar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\n */\n\nbody {\n  overflow-x: hidden;\n}\n\n#wrapper {\n  padding-left: 0;\n  transition: all 0.5s ease;\n}\n\n#wrapper.toggled {\n  padding-left: 250px;\n}\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  transition: all 0.5s ease;\n}\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px;\n}\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n}\n\n/* Sidebar Styles */\n\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n}\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none;\n}\n\n.sidebar-nav>.sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n\n.sidebar-nav>.sidebar-brand a {\n  color: #999999;\n}\n\n.sidebar-nav>.sidebar-brand a:hover {\n  color: #fff;\n  background: none;\n}\n\n@media(min-width:768px) {\n  #wrapper {\n    padding-left: 0;\n  }\n\n  #wrapper.toggled {\n    padding-left: 250px;\n  }\n\n  #sidebar-wrapper {\n    width: 0;\n  }\n\n  #wrapper.toggled #sidebar-wrapper {\n    width: 250px !important;\n  }\n\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative;\n  }\n\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/simple-sidebar/simple-sidebar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/simple-sidebar/simple-sidebar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-wrapper\">\n  <ul class=\"sidebar-nav\">\n    <li class=\"sidebar-brand\">\n      <a href=\"#\">\n        Start Bootstrap\n      </a>\n    </li>\n    <li>\n      <a href=\"#/docs/getting-started\">Setup</a>\n    </li>\n    <li>\n      <a href=\"#/docs/learn-openshift\">Learn OpenShift</a>\n    </li>\n    <li>\n      <a href=\"#\">Overview</a>\n    </li>\n    <li>\n      <a href=\"#\">Events</a>\n    </li>\n    <li>\n      <a href=\"#\">About</a>\n    </li>\n    <li>\n      <a href=\"#\">Services</a>\n    </li>\n    <li>\n      <a href=\"#\">Contact</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/simple-sidebar/simple-sidebar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/simple-sidebar/simple-sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: SimpleSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSidebarComponent", function() { return SimpleSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleSidebarComponent = /** @class */ (function () {
    function SimpleSidebarComponent() {
    }
    SimpleSidebarComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#wrapper").toggleClass("toggled");
        });
    };
    SimpleSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-simple-sidebar",
            template: __webpack_require__(/*! ./simple-sidebar.component.html */ "./src/app/simple-sidebar/simple-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./simple-sidebar.component.css */ "./src/app/simple-sidebar/simple-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleSidebarComponent);
    return SimpleSidebarComponent;
}());



/***/ }),

/***/ "./src/app/source-control/source-control.component.html":
/*!**************************************************************!*\
  !*** ./src/app/source-control/source-control.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>First things first - Source Control</h1>\n\n  <img\n    id=\"gogs-screenshot\"\n    src=\"https://s3.amazonaws.com/com-comenity-dev/public/hackathon/gogs-screenshot.PNG\"\n    alt=\"GOGS Screenshot\"\n    class=\"small\"\n  />\n\n  We've setup a source control app for all of your git needs during our event.\n  To start using our very own <b>gogs</b> app, follow these 2 steps:\n  <p></p>\n\n  <ul>\n    <li>\n      Visit\n      <a href=\"http://gogs-demo.40.76.6.47.nip.io/user/sign_up\" target=\"_blank\"\n        >http://gogs-demo.40.76.6.47.nip.io/</a\n      >\n      to sign up for a new account\n    </li>\n    <li>\n      Complete the signup form\n      <b>be sure to use your Alliance Data email address</b>.\n    </li>\n  </ul>\n\n  That's it! You'll be all set to start using source control (git).\n\n  <blockquote>\n    Ensure that when you commit your code, you use the HTTPS URL for your\n    project <b>NOT SSH</b>. The GOGS environment we've setup does not allow\n    connection via the SSH protocol.\n  </blockquote>\n\n  <app-other-tools></app-other-tools>\n  <hr />\n\n  <small>\n    If you need a Google account for your project work, also ensure that you use\n    a Google account that maps to your Alliance Data inbox.\n    <a\n      href=\"https://accounts.google.com/signup/v2/webcreateaccount?hl=en-AU&flowName=GlifWebSignIn&flowEntry=SignUp\"\n      target=\"_blank\"\n      >Follow this link to setup a Google Account (sans GMail)</a\n    >. At the link, be sure to select the\n    <b>Use my current email address instead</b> option.\n  </small>\n</div>\n"

/***/ }),

/***/ "./src/app/source-control/source-control.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/source-control/source-control.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gogs-screenshot {\n  max-width: 480px !important;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/source-control/source-control.component.ts":
/*!************************************************************!*\
  !*** ./src/app/source-control/source-control.component.ts ***!
  \************************************************************/
/*! exports provided: SourceControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceControlComponent", function() { return SourceControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SourceControlComponent = /** @class */ (function () {
    function SourceControlComponent() {
    }
    SourceControlComponent.prototype.ngOnInit = function () { };
    SourceControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-source-control",
            template: __webpack_require__(/*! ./source-control.component.html */ "./src/app/source-control/source-control.component.html"),
            styles: [__webpack_require__(/*! ./source-control.component.scss */ "./src/app/source-control/source-control.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SourceControlComponent);
    return SourceControlComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/a664743/Developer/openshift-dev-primers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map