(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/page-not-found-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/404/page-not-found-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function() { return PageNotFoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/404/page-not-found.component.ts");





const routes = [
    { path: "page-not-found", component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
class PageNotFoundRoutingModule {
}
PageNotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundRoutingModule });
PageNotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundRoutingModule_Factory(t) { return new (t || PageNotFoundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/404/page-not-found.component.ts":
/*!*************************************************!*\
  !*** ./src/app/404/page-not-found.component.ts ***!
  \*************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() {
    }
    ngOnInit() { }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 38, vars: 0, consts: [[1, "page-not-found-text"], [1, "container"], [1, "caveman"], [1, "leg"], [1, "foot"], [1, "fingers"], [1, "shape"], [1, "circle"], [1, "head"], [1, "eye"], [1, "nose"], [1, "mouth"], [1, "arm-right"], [1, "club"], ["href", "/"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Go back to Home Page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  margin-top: 12em;\n  background-color: #3a5f8e;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  padding: 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: #2a3c52;\n}\n\n.page-not-found-text[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  color: rgba(42, 60, 82, 0.1);\n  font-size: 30em;\n  text-align: center;\n  top: 40%;\n  height: 400px;\n}\n.page-not-found-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  height: 300px;\n  width: 500px;\n}\n.container[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  background-color: rgba(42, 60, 82, 0.1);\n  border-radius: 12px;\n  bottom: 40px;\n  height: 12px;\n  left: 80px;\n  width: 350px;\n  z-index: -1;\n  -webkit-animation: shadow-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: shadow-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n\n.caveman[_ngcontent-%COMP%] {\n  height: 300px;\n  position: absolute;\n  width: 250px;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1) {\n  right: 20px;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20px;\n  transform: rotateY(180deg);\n}\n.head[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #2a3c52;\n  border-radius: 50px;\n  height: 140px;\n  left: 60px;\n  top: 25px;\n  width: 65px;\n}\n.head[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 10px;\n  height: 20px;\n  width: 7px;\n}\n.head[_ngcontent-%COMP%]:after {\n  left: 35px;\n  top: -8px;\n  -ms-transform: rotate(20deg);\n      transform: rotate(20deg);\n}\n.head[_ngcontent-%COMP%]:before {\n  left: 30px;\n  top: -8px;\n  -ms-transform: rotate(-20deg);\n      transform: rotate(-20deg);\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n  background-color: #e2af90;\n  border-radius: 50px;\n  height: 16px;\n  left: 45%;\n  top: 40px;\n  width: 48px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 50%;\n  height: 5px;\n  width: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after {\n  left: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  right: 9px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]   .nose[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #d6a486;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 10px;\n  box-sizing: border-box;\n  height: 35px;\n  left: 45%;\n  top: 12px;\n  width: 15px;\n}\n.shape[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n  border-radius: 50%;\n  height: 140px;\n  overflow: hidden;\n  top: 70px;\n  width: 140px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after {\n  left: 50px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  left: 60px;\n  top: 45px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1) {\n  left: -12px;\n  top: 80px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2) {\n  right: 10px;\n  top: 0;\n  -ms-transform: rotate(90deg);\n      transform: rotate(90deg);\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):after {\n  left: 65px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):before {\n  display: none;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3a5f8e;\n}\n.arm-right[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #e2af90;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 50px;\n  box-sizing: border-box;\n  height: 180px;\n  left: 135px;\n  top: 80px;\n  -ms-transform-origin: 30px 30px;\n      transform-origin: 30px 30px;\n  width: 60px;\n  z-index: 1;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%] {\n  position: absolute;\n  border-bottom: 110px solid #601513;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  height: 0;\n  left: -60px;\n  top: 120px;\n  -ms-transform: rotate(70deg);\n      transform: rotate(70deg);\n  width: 20px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after, .arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #601513;\n  border-radius: 50%;\n  left: 0;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after {\n  height: 20px;\n  width: 20px;\n  top: -10px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  height: 40px;\n  width: 40px;\n  left: -10px;\n  top: 90px;\n}\n.leg[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10px;\n  height: 55px;\n  top: 200px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  height: 10px;\n  left: -5px;\n  top: 15px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 25px 25px 0 0;\n  height: 25px;\n  left: -38px;\n  top: 30px;\n  width: 50px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%], .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #e2af90;\n  border-radius: 50%;\n  bottom: 0;\n  height: 15px;\n  -ms-transform-origin: bottom;\n      transform-origin: bottom;\n  width: 15px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after {\n  left: -6px;\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before {\n  left: 8px;\n  -ms-transform: scale(0.6);\n      transform: scale(0.6);\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%] {\n  left: 15px;\n  -ms-transform: scale(0.6);\n      transform: scale(0.6);\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  left: 11px;\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #bf9176;\n  left: 95px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1):after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%] {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:before {\n  display: none;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #d6a486;\n  left: 115px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2):after {\n  background-color: #d6a486;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2)   .foot[_ngcontent-%COMP%] {\n  background-color: #d6a486;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .arm-right[_ngcontent-%COMP%] {\n  -webkit-animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .arm-right[_ngcontent-%COMP%] {\n  -webkit-animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes arm-anima {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes arm-anima {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .head[_ngcontent-%COMP%] {\n  -webkit-animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .head[_ngcontent-%COMP%] {\n  -webkit-animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes head-anima {\n  0% {\n    top: 25px;\n  }\n  42% {\n    top: 25px;\n  }\n  45% {\n    top: 50px;\n  }\n  100% {\n    top: 25px;\n  }\n}\n@keyframes head-anima {\n  0% {\n    top: 25px;\n  }\n  42% {\n    top: 25px;\n  }\n  45% {\n    top: 50px;\n  }\n  100% {\n    top: 25px;\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:before {\n  -webkit-animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:before {\n  -webkit-animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes eye-anima {\n  0% {\n    height: 5px;\n  }\n  42% {\n    height: 5px;\n  }\n  45% {\n    height: 1px;\n  }\n  100% {\n    height: 5px;\n  }\n}\n@keyframes eye-anima {\n  0% {\n    height: 5px;\n  }\n  42% {\n    height: 5px;\n  }\n  45% {\n    height: 1px;\n  }\n  100% {\n    height: 5px;\n  }\n}\n@-webkit-keyframes shadow-anima {\n  0% {\n    width: 350px;\n    left: 80px;\n  }\n  25% {\n    width: 450px;\n    left: 80px;\n  }\n  50% {\n    width: 350px;\n    left: 80px;\n  }\n  75% {\n    width: 450px;\n    left: 0;\n  }\n  100% {\n    width: 350px;\n    left: 80px;\n  }\n}\n@keyframes shadow-anima {\n  0% {\n    width: 350px;\n    left: 80px;\n  }\n  25% {\n    width: 450px;\n    left: 80px;\n  }\n  50% {\n    width: 350px;\n    left: 80px;\n  }\n  75% {\n    width: 450px;\n    left: 0;\n  }\n  100% {\n    width: 350px;\n    left: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC80MDQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwLzQwNC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QkE7RUFORSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7TUFBQSxnQ0FBQTtFQU1FLGdCQUFBO0VBQ0EseUJBaENXO0VBaUNYLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDM0JKO0FENkJJO0VBQ0kseUJBQUE7QUMzQlI7QUQrQkEsY0FBQTtBQUNBO0VBM0JFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtNQUFBLGdDQUFBO0VBMkJBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUMxQkY7QUQ0QkU7RUFDSSxTQUFBO0FDMUJOO0FEOEJBO0VBekNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtNQUFBLGdDQUFBO0VBeUNBLGFBQUE7RUFDQSxZQUFBO0FDekJGO0FEMEJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7VUFBQSwwRUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUN4Qko7QUQ0QkEsWUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3pCRjtBRDRCQTtFQUF3QixXQUFBO0FDeEJ4QjtBRHlCQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQ3RCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0EseUJBNUZXO0VBNkZYLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ3JCRjtBRHNCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQTVHVTtFQTZHVixtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDcEJKO0FEc0JFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtNQUFBLHdCQUFBO0FDcEJKO0FEc0JFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtNQUFBLHlCQUFBO0FDcEJKO0FEc0JFO0VBekdBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO01BQUEsMkJBQUE7RUEwR0UseUJBMUhXO0VBMkhYLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRG9CSTtFQXhIRixrQkFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtNQUFBLDJCQUFBO0VBeUhJLFdBQUE7RUFDQSx5QkF4SVE7RUF5SVIsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ2pCTjtBRG1CSTtFQUNFLFNBQUE7QUNqQk47QURtQkk7RUFDRSxVQUFBO0FDakJOO0FEbUJJO0VBM0hGLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtNQUFBLGdDQUFBO0VBMkhJLHlCQWpKUztFQWtKVCw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDZk47QURvQkE7RUFoSkUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7TUFBQSwyQkFBQTtFQWlKQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDaEJGO0FEaUJFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZko7QURnQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZE47QURnQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ2ROO0FEZ0JJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNkTjtBRGlCRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDZko7QURrQkU7RUFDRSxXQUFBO0VBQ0EsTUFBQTtFQUNBLDRCQUFBO01BQUEsd0JBQUE7QUNoQko7QURpQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ2ZOO0FEaUJJO0VBQ0UsYUFBQTtBQ2ZOO0FEb0JBO0VBQ0UseUJBak5hO0FDZ01mO0FEbUJFO0VBQ0UseUJBbk5XO0FDa01mO0FEa0JJO0VBQW9CLHlCQXBOVDtBQ3FNZjtBRG1CQTtFQUNFLHlCQXpOYTtBQ3lNZjtBRGlCRTtFQUNJLHlCQTVOUztBQzZNZjtBRGdCTTtFQUFvQix5QkE3Tlg7QUNnTmY7QURpQkE7RUFDRSxrQkFBQTtFQUNBLHlCQWpPYTtFQWtPYiw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtNQUFBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNkRjtBRGdCRTtFQUNFLGtCQUFBO0VBQ0Qsa0NBQUE7RUFDQyxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7TUFBQSx3QkFBQTtFQUNBLFdBQUE7QUNkSjtBRGdCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXRQUztFQXVQVCxrQkFBQTtFQUNBLE9BQUE7QUNkTjtBRGdCSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ2ROO0FEZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2ROO0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ2hCRjtBRGlCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2ZKO0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNoQko7QURpQkk7RUFDRSxrQkFBQTtFQUNBLHlCQXJTUztFQXNTVCxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7TUFBQSx3QkFBQTtFQUNBLFdBQUE7QUNmTjtBRGlCSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDZk47QURpQkk7RUFDRSxTQUFBO0VBQ0EseUJBQUE7TUFBQSxxQkFBQTtFQUNBLFdBQUE7QUNmTjtBRGtCSTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO0FDaEJOO0FEa0JJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNoQk47QURxQkE7RUFDRSx5QkFoVWE7RUFpVWIsVUFBQTtBQ2xCRjtBRG1CRTtFQUFVLHlCQWxVRztBQ2tUZjtBRGlCRTtFQUNFLHlCQXBVVztBQ3FUZjtBRGdCSTtFQUFVLHlCQXJVQztBQ3dUZjtBRGNJO0VBQVcsYUFBQTtBQ1hmO0FEZUE7RUFDRSx5QkE1VWE7RUE2VWIsV0FBQTtBQ1pGO0FEYUU7RUFBVSx5QkE5VUc7QUNvVWY7QURXRTtFQUFRLHlCQS9VSztBQ3VVZjtBRFdBLGNBQUE7QUFDQTtFQUNFLCtFQUFBO1VBQUEsdUVBQUE7QUNSRjtBRFdBO0VBQ0UsK0VBQUE7VUFBQSx1RUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNSRjtBRFdBO0VBQ0U7SUFBSyxvQkFBQTtFQ1BMO0VEUUE7SUFBTywwQkFBQTtFQ0xQO0FBQ0Y7QURFQTtFQUNFO0lBQUssb0JBQUE7RUNQTDtFRFFBO0lBQU8sMEJBQUE7RUNMUDtBQUNGO0FET0E7RUFDRSxnRkFBQTtVQUFBLHdFQUFBO0FDTEY7QURRQTtFQUNFLGdGQUFBO1VBQUEsd0VBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDTEY7QURRQTtFQUNFO0lBQUssU0FBQTtFQ0pMO0VES0E7SUFBTSxTQUFBO0VDRk47RURHQTtJQUFNLFNBQUE7RUNBTjtFRENBO0lBQU8sU0FBQTtFQ0VQO0FBQ0Y7QURQQTtFQUNFO0lBQUssU0FBQTtFQ0pMO0VES0E7SUFBTSxTQUFBO0VDRk47RURHQTtJQUFNLFNBQUE7RUNBTjtFRENBO0lBQU8sU0FBQTtFQ0VQO0FBQ0Y7QURBQTs7RUFFRSwrRUFBQTtVQUFBLHVFQUFBO0FDRUY7QURDQTs7RUFFRSwrRUFBQTtVQUFBLHVFQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ0VGO0FEQ0E7RUFDRTtJQUFLLFdBQUE7RUNHTDtFREZBO0lBQU0sV0FBQTtFQ0tOO0VESkE7SUFBTSxXQUFBO0VDT047RUROQTtJQUFPLFdBQUE7RUNTUDtBQUNGO0FEZEE7RUFDRTtJQUFLLFdBQUE7RUNHTDtFREZBO0lBQU0sV0FBQTtFQ0tOO0VESkE7SUFBTSxXQUFBO0VDT047RUROQTtJQUFPLFdBQUE7RUNTUDtBQUNGO0FEUEE7RUFDRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDU0Y7RURQQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDU0Y7RURQQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDU0Y7RURQQTtJQUNFLFlBQUE7SUFDQSxPQUFBO0VDU0Y7RURQQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDU0Y7QUFDRjtBRDdCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLE9BQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJsYWNrOiAjMmEzYzUyO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsdWUtMTogIzNhNWY4ZTtcbiRjb2xvci1ibHVlLTI6ICMzZjU1NzE7XG4kY29sb3Itc2tpbi0xOiAjZTJhZjkwO1xuJGNvbG9yLXNraW4tMjogI2Q2YTQ4NjtcbiRjb2xvci1za2luLTM6ICNiZjkxNzY7XG4kY29sb3ItaGFpcjogIzJhM2M1MjtcbiRjb2xvci13b29kLTE6ICM2MDE1MTM7XG4kY29sb3Itd29vZC0yOiAjNDEwYTA5O1xuXG5AbWl4aW4gdG9wNTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiBsZWZ0NTAge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5AbWl4aW4gY2VudGVyZWQge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5hIHtcbiAgICBAaW5jbHVkZSBjZW50ZXJlZDtcblxuICAgIG1hcmdpbi10b3A6IDEyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG4gICAgfVxufVxuXG4vKiBUaGUgc2NlbmUgKi9cbi5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgQGluY2x1ZGUgY2VudGVyZWQ7XG5cbiAgY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjEpO1xuICBmb250LXNpemU6IDMwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA0MCU7XG4gIGhlaWdodDogNDAwcHg7XG5cbiAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIEBpbmNsdWRlIGNlbnRlcmVkO1xuXG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3R0b206IDQwcHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGFuaW1hdGlvbjogc2hhZG93LWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgfVxufVxuXG4vKiBjYXZlbWFuICovXG4uY2F2ZW1hbiB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgeyByaWdodDogMjBweDsgfVxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMjBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhhaXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogMjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gICY6YWZ0ZXIsICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiA3cHg7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgbGVmdDogMzVweDtcbiAgICB0b3A6IC04cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogLThweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIC5leWUge1xuICAgIEBpbmNsdWRlIGxlZnQ1MDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbGVmdDogNDUlO1xuICAgIHRvcDogNDBweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSB0b3A1MDtcbiAgICAgIFxuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgd2lkdGg6IDVweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIHJpZ2h0OiA5cHg7XG4gICAgfVxuICAgIC5ub3NlIHtcbiAgICAgIEBpbmNsdWRlIGNlbnRlcmVkO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0yO1xuICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKCRjb2xvci1ibGFjaywgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgbGVmdDogNDUlO1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5zaGFwZSB7XG4gIEBpbmNsdWRlIGxlZnQ1MDsgXG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDcwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogMjBweDsgICAgICBcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICB0b3A6IDQ1cHg7XG4gICAgfVxuICB9XG4gIC5jaXJjbGU6bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiAtMTJweDtcbiAgICB0b3A6IDgwcHg7XG4gIH1cblxuICAuY2lyY2xlOm50aC1jaGlsZCgyKSB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDY1cHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuc2hhcGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xO1xuXG4gIC5jaXJjbGUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0yOyBcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTI7IH1cbiAgfVxufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMjtcbiAgLmNpcmNsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xOyBcbiAgICAgICY6YWZ0ZXIsICY6YmVmb3JlIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTsgfVxuICB9XG59XG5cbi5hcm0tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTgwcHg7XG4gIGxlZnQ6IDEzNXB4OyBcbiAgdG9wOiA4MHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAzMHB4IDMwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICB6LWluZGV4OiAxO1xuXG4gIC5jbHViIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgYm9yZGVyLWJvdHRvbTogMTEwcHggc29saWQgJGNvbG9yLXdvb2QtMTtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGxlZnQ6IC02MHB4O1xuICAgIHRvcDogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpO1xuICAgIHdpZHRoOiAyMHB4O1xuXG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13b29kLTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgdG9wOiAtMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBsZWZ0OiAtMTBweDtcbiAgICAgIHRvcDogOTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmxlZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA1NXB4OyAgXG4gIHRvcDogMjAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IC01cHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgLmZvb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiAtMzhweDtcbiAgICB0b3A6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgJjphZnRlciwgJjpiZWZvcmUsIC5maW5nZXJzLCAuZmluZ2VyczphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0xO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogLTZweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDhweDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuXG4gICAgLmZpbmdlcnMge1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICB9XG4gICAgLmZpbmdlcnM6YWZ0ZXIge1xuICAgICAgbGVmdDogMTFweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICB9XG59XG5cbi5sZWc6bnRoLWNoaWxkKDEpIHsgXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7XG4gIGxlZnQ6IDk1cHg7XG4gICY6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0zOyB9XG4gIC5mb290IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0zOyBcbiAgICAmOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMzsgfVxuICAgICY6YmVmb3JlIHsgZGlzcGxheTogbm9uZTsgfVxuICB9XG59XG5cbi5sZWc6bnRoLWNoaWxkKDIpIHsgXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7XG4gIGxlZnQ6IDExNXB4OyAgIFxuICAmOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMjsgfVxuICAuZm9vdCB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7IH1cbn1cblxuLyogYW5pbWF0aW9uICovXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmFybS1yaWdodCB7XG4gIGFuaW1hdGlvbjogYXJtLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLmFybS1yaWdodCB7XG4gIGFuaW1hdGlvbjogYXJtLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgYXJtLWFuaW1hIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7IH1cbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5oZWFkIHtcbiAgYW5pbWF0aW9uOiBoZWFkLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmhlYWQge1xuICBhbmltYXRpb246IGhlYWQtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBoZWFkLWFuaW1hIHtcbiAgMCUgeyB0b3A6IDI1cHg7IH1cbiAgNDIlIHsgdG9wOiAyNXB4OyB9XG4gIDQ1JSB7IHRvcDogNTBweDsgfVxuICAxMDAlIHsgdG9wOiAyNXB4OyB9XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmFmdGVyLCBcbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogZXllLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmV5ZTphZnRlciwgXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmV5ZTpiZWZvcmUge1xuICBhbmltYXRpb246IGV5ZS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGV5ZS1hbmltYSB7XG4gIDAlIHsgaGVpZ2h0OiA1cHg7IH1cbiAgNDIlIHsgaGVpZ2h0OiA1cHg7IH1cbiAgNDUlIHsgaGVpZ2h0OiAxcHg7IH1cbiAgMTAwJSB7IGhlaWdodDogNXB4OyB9XG59XG5cbkBrZXlmcmFtZXMgc2hhZG93LWFuaW1hIHtcbiAgMCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG4gIDI1JSB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxuICA3NSUge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG59IiwiYSB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1hcmdpbi10b3A6IDEyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTVmOGU7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEzYzUyO1xufVxuXG4vKiBUaGUgc2NlbmUgKi9cbi5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHJnYmEoNDIsIDYwLCA4MiwgMC4xKTtcbiAgZm9udC1zaXplOiAzMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogNDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLnBhZ2Utbm90LWZvdW5kLXRleHQgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbn1cbi5jb250YWluZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDYwLCA4MiwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm90dG9tOiA0MHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGxlZnQ6IDgwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgei1pbmRleDogLTE7XG4gIGFuaW1hdGlvbjogc2hhZG93LWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi8qIGNhdmVtYW4gKi9cbi5jYXZlbWFuIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSB7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmhlYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogMjVweDtcbiAgd2lkdGg6IDY1cHg7XG59XG4uaGVhZDphZnRlciwgLmhlYWQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEzYzUyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA3cHg7XG59XG4uaGVhZDphZnRlciB7XG4gIGxlZnQ6IDM1cHg7XG4gIHRvcDogLThweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xufVxuLmhlYWQ6YmVmb3JlIHtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiAtOHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xufVxuLmhlYWQgLmV5ZSB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmFmOTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgbGVmdDogNDUlO1xuICB0b3A6IDQwcHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuLmhlYWQgLmV5ZTphZnRlciwgLmhlYWQgLmV5ZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA1cHg7XG59XG4uaGVhZCAuZXllOmFmdGVyIHtcbiAgbGVmdDogNXB4O1xufVxuLmhlYWQgLmV5ZTpiZWZvcmUge1xuICByaWdodDogOXB4O1xufVxuLmhlYWQgLmV5ZSAubm9zZSB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmE0ODY7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSg0MiwgNjAsIDgyLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxlZnQ6IDQ1JTtcbiAgdG9wOiAxMnB4O1xuICB3aWR0aDogMTVweDtcbn1cblxuLnNoYXBlIHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDcwcHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cbi5zaGFwZSAuY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG4uc2hhcGUgLmNpcmNsZTphZnRlciwgLnNoYXBlIC5jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4uc2hhcGUgLmNpcmNsZTphZnRlciB7XG4gIGxlZnQ6IDUwcHg7XG4gIHRvcDogMTBweDtcbn1cbi5zaGFwZSAuY2lyY2xlOmJlZm9yZSB7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogNDVweDtcbn1cbi5zaGFwZSAuY2lyY2xlOm50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IC0xMnB4O1xuICB0b3A6IDgwcHg7XG59XG4uc2hhcGUgLmNpcmNsZTpudGgtY2hpbGQoMikge1xuICByaWdodDogMTBweDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uc2hhcGUgLmNpcmNsZTpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICBsZWZ0OiA2NXB4O1xuICB0b3A6IDEwcHg7XG59XG4uc2hhcGUgLmNpcmNsZTpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5zaGFwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTVmOGU7XG59XG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLnNoYXBlIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1NTcxO1xufVxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5zaGFwZSAuY2lyY2xlOmFmdGVyLCAuY2F2ZW1hbjpudGgtY2hpbGQoMSkgLnNoYXBlIC5jaXJjbGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTU3MTtcbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5zaGFwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjU1NzE7XG59XG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ZjhlO1xufVxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5zaGFwZSAuY2lyY2xlOmFmdGVyLCAuY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIC5jaXJjbGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNWY4ZTtcbn1cblxuLmFybS1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyYWY5MDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKDQyLCA2MCwgODIsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTgwcHg7XG4gIGxlZnQ6IDEzNXB4O1xuICB0b3A6IDgwcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDMwcHggMzBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uYXJtLXJpZ2h0IC5jbHViIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItYm90dG9tOiAxMTBweCBzb2xpZCAjNjAxNTEzO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IC02MHB4O1xuICB0b3A6IDEyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZyk7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmFybS1yaWdodCAuY2x1YjphZnRlciwgLmFybS1yaWdodCAuY2x1YjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDE1MTM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogMDtcbn1cbi5hcm0tcmlnaHQgLmNsdWI6YWZ0ZXIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0b3A6IC0xMHB4O1xufVxuLmFybS1yaWdodCAuY2x1YjpiZWZvcmUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiA5MHB4O1xufVxuXG4ubGVnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIHRvcDogMjAwcHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuLmxlZzphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGxlZnQ6IC01cHg7XG4gIHRvcDogMTVweDtcbiAgd2lkdGg6IDEwcHg7XG59XG4ubGVnIC5mb290IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IC0zOHB4O1xuICB0b3A6IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmxlZyAuZm9vdDphZnRlciwgLmxlZyAuZm9vdDpiZWZvcmUsIC5sZWcgLmZvb3QgLmZpbmdlcnMsIC5sZWcgLmZvb3QgLmZpbmdlcnM6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmFmOTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgd2lkdGg6IDE1cHg7XG59XG4ubGVnIC5mb290OmFmdGVyIHtcbiAgbGVmdDogLTZweDtcbiAgY29udGVudDogXCJcIjtcbn1cbi5sZWcgLmZvb3Q6YmVmb3JlIHtcbiAgbGVmdDogOHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4ubGVnIC5mb290IC5maW5nZXJzIHtcbiAgbGVmdDogMTVweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xufVxuLmxlZyAuZm9vdCAuZmluZ2VyczphZnRlciB7XG4gIGxlZnQ6IDExcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5sZWc6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmOTE3NjtcbiAgbGVmdDogOTVweDtcbn1cbi5sZWc6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmOTE3Njtcbn1cbi5sZWc6bnRoLWNoaWxkKDEpIC5mb290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmOTE3Njtcbn1cbi5sZWc6bnRoLWNoaWxkKDEpIC5mb290OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmOTE3Njtcbn1cbi5sZWc6bnRoLWNoaWxkKDEpIC5mb290OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZWc6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2YTQ4NjtcbiAgbGVmdDogMTE1cHg7XG59XG4ubGVnOm50aC1jaGlsZCgyKTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmE0ODY7XG59XG4ubGVnOm50aC1jaGlsZCgyKSAuZm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmE0ODY7XG59XG5cbi8qIGFuaW1hdGlvbiAqL1xuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5hcm0tcmlnaHQge1xuICBhbmltYXRpb246IGFybS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5hcm0tcmlnaHQge1xuICBhbmltYXRpb246IGFybS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGFybS1hbmltYSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5oZWFkIHtcbiAgYW5pbWF0aW9uOiBoZWFkLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmhlYWQge1xuICBhbmltYXRpb246IGhlYWQtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBoZWFkLWFuaW1hIHtcbiAgMCUge1xuICAgIHRvcDogMjVweDtcbiAgfVxuICA0MiUge1xuICAgIHRvcDogMjVweDtcbiAgfVxuICA0NSUge1xuICAgIHRvcDogNTBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDI1cHg7XG4gIH1cbn1cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmFmdGVyLFxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5leWU6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBleWUtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuZXllOmFmdGVyLFxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5leWU6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBleWUtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBleWUtYW5pbWEge1xuICAwJSB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gIH1cbiAgNDIlIHtcbiAgICBoZWlnaHQ6IDVweDtcbiAgfVxuICA0NSUge1xuICAgIGhlaWdodDogMXB4O1xuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogNXB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoYWRvdy1hbmltYSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxuICAyNSUge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbiAgNzUlIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxufSJdfQ== */", "@media screen and (max-width: 990px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 23em;\n  }\n}\n@media screen and (max-width: 790px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 20em;\n  }\n}\n@media screen and (max-width: 690px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 18em;\n  }\n}\n@media screen and (max-width: 600px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 14em;\n  }\n}\n@media screen and (max-width: 500px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC80MDQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic3JjL2FwcC80MDQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxlQUFBO0VDQU47QUFDRjtBREdBO0VBRUk7SUFDSSxlQUFBO0VDRk47QUFDRjtBREtBO0VBRUk7SUFDSSxlQUFBO0VDSk47QUFDRjtBRE9BO0VBRUk7SUFDSSxlQUFBO0VDTk47QUFDRjtBRFNBO0VBRUk7SUFDSSxlQUFBO0VDUk47QUFDRiIsImZpbGUiOiJzcmMvYXBwLzQwNC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDIzZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDIwZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE4ZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE0ZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEwZW07XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDIzZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XG4gIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDIwZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5MHB4KSB7XG4gIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDE4ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwZW07XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-page-not-found",
                templateUrl: "./page-not-found.html",
                styleUrls: ["./page-not-found.component.scss", "./page-not-found.component.responsivity.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/404/page-not-found.module.ts":
/*!**********************************************!*\
  !*** ./src/app/404/page-not-found.module.ts ***!
  \**********************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found-routing.module */ "./src/app/404/page-not-found-routing.module.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/404/page-not-found.component.ts");




class PageNotFoundModule {
}
PageNotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); }, imports: [[_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]], imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]], exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]],
                declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]],
                exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_aboutMe$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_1 = goog.getMsg("About me");
    I18N_0 = MSG_EXTERNAL_aboutMe$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_1;
}
else {
    I18N_0 = "About me";
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc about
     */ 
    const MSG_EXTERNAL_yearsOld$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_3 = goog.getMsg("years old");
    I18N_2 = MSG_EXTERNAL_yearsOld$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_3;
}
else {
    I18N_2 = "years old";
}
const _c4 = function (a1) { return ["fas", a1]; };
function AboutComponent_fa_icon_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 21);
} if (rf & 2) {
    const hobby_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", hobby_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, hobby_r3.icon));
} }
const _c5 = function (a1) { return ["fab", a1]; };
function AboutComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", media_r4.http, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", media_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c5, media_r4.icon));
} }
class AboutComponent {
    constructor(dataService, library) {
        this.dataService = dataService;
        this.library = library;
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fab"]);
    }
    ngOnInit() {
        this.name = "Susmith Rajendra Barigidad"; // Sets here, your full name
        this.yearsOld = this.calcAge("1995-06-20"); // Sets here, your date birthday
        // Fetches the About information from the Data Service (about.json file).
        this.subscription = this.dataService.getAbout()
            .subscribe((about) => this.aboutData = about);
    }
    ngOnDestroy() {
        // Only need to unsubscribe if its a multi event Observable
        this.subscription.unsubscribe();
    }
    calcAge(dateString) {
        const birthday = new Date(dateString);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getFullYear() - 1970);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 32, vars: 5, consts: [["id", "about", "itemscope", "", "itemtype", "https://schema.org/AboutPage"], ["itemscope", "", "itemtype", "https://schema.org/Person", 1, "about-container"], ["itemprop", "jobTitle", "content", "Graduate Student"], ["itemprop", "knowsLanguage", "content", "en"], ["itemprop", "knowsLanguage", "content", "pt"], ["itemprop", "nationality", "content", "India"], ["itemprop", "gender", "content", "Male"], ["itemprop", "email", "content", "susmithrb@gmail.com"], ["itemprop", "birthDate", "content", "1995-06-20"], ["itemprop", "url", "content", "https://www.guilhermeborgesbastos.com"], [1, "first-column"], ["itemprop", "name"], [1, "years-old"], ["itemprop", "yearsOld"], ["internationalization", "", "property", "description", "itemprop", "summary", 1, "text", 3, "data"], [1, "hobbies"], ["class", "icon", "itemprop", "hobby", 3, "icon", "title", 4, "ngFor", "ngForOf"], [1, "second-column"], [1, "profile-picture"], [1, "social-media"], ["target", "_blank", "itemprop", "sameAs", 3, "href", 4, "ngFor", "ngForOf"], ["itemprop", "hobby", 1, "icon", 3, "icon", "title"], ["target", "_blank", "itemprop", "sameAs", 3, "href"], [1, "icon", 3, "icon", "title"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "meta", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "meta", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](21, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AboutComponent_fa_icon_27_Template, 1, 4, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AboutComponent_a_31_Template, 2, 5, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.yearsOld);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.aboutData == null ? null : ctx.aboutData.internationalizations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutData == null ? null : ctx.aboutData.hobbies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutData == null ? null : ctx.aboutData.medias);
    } }, directives: [_core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__["InternationalizationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["#about[_ngcontent-%COMP%] {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  background-image: linear-gradient(0deg, #fff 44.44%, #d4e7fe 44.44%, #d4e7fe 0%, #fff 0%, #fff 94.44%, #d4e7fe 94.44%, #d4e7fe 100%);\n  background-size: 10px 1220px;\n}\n\n.about-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #fff;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  width: 85vw;\n  z-index: 2;\n  padding: 2em;\n  max-width: 1400px;\n}\n\n.about-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #7d7d7d;\n  font-size: 22px;\n  font-weight: normal;\n  text-transform: uppercase;\n  margin: 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  color: #222f5c;\n  margin: 5px 0 0 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #7d7d7d;\n  margin-bottom: 10px;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n  color: #b2b6c6;\n  font-size: 18px;\n  font-style: italic;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  margin-right: 2em;\n  text-align: left;\n  min-height: 220px;\n  line-height: 1.5em;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #555f81;\n  margin-right: 1em;\n  transition: 0.3s;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 450px;\n  height: 450px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('susmithB.jpg');\n  border: 3px solid #d4e7fe;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1em;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #414c73;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtNQUFBLHNCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLG9JQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ1I7O0FERUk7RUFDSSxvQkFBQTtNQUFBLFlBQUE7QUNBUjs7QURFUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUNBWjs7QURHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RaOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRlo7O0FET1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTGhCOztBRFFZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05oQjs7QURVUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1JaOztBRFVZO0VBQ0ksY0FBQTtBQ1JoQjs7QURhSTtFQUNJLG9CQUFBO01BQUEsWUFBQTtBQ1hSOztBRGFRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBR0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FDWFo7O0FEY1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNaWjs7QURjWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1poQjs7QURjZ0I7RUFDSSxjQUFBO0FDWnBCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmZiA0NC40NCUsICNkNGU3ZmUgNDQuNDQlLCAjZDRlN2ZlIDAlLCAjZmZmIDAlLCAjZmZmIDk0LjQ0JSwgI2Q0ZTdmZSA5NC40NCUsICNkNGU3ZmUgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEyMjBweDtcbn1cblxuLmFib3V0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICB3aWR0aDogODV2dztcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmZpcnN0LWNvbHVtbiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICBcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwIDAgMDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHAge1xuICAgIFxuICAgICAgICAgICAgJi55ZWFycy1vbGQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjJiNmM2O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYudGV4dCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU2Nzg4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1ZjgxO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MDg3YTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNlY29uZC1jb2x1bW4ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgXG4gICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OWVtO1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA5OWVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTllbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3RlbXBsYXRlL2Fib3V0L3N1c21pdGhCLmpwZycpO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2Q0ZTdmZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTRjNzM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODA4N2ExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIjYWJvdXQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmZiA0NC40NCUsICNkNGU3ZmUgNDQuNDQlLCAjZDRlN2ZlIDAlLCAjZmZmIDAlLCAjZmZmIDk0LjQ0JSwgI2Q0ZTdmZSA5NC40NCUsICNkNGU3ZmUgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMjIwcHg7XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgd2lkdGg6IDg1dnc7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG59XG4uYWJvdXQtY29udGFpbmVyIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4ge1xuICBmbGV4LWdyb3c6IDI7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDEge1xuICBjb2xvcjogIzdkN2Q3ZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDIge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBtYXJnaW46IDVweCAwIDAgMDtcbn1cbi5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM3ZDdkN2Q7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gcC55ZWFycy1vbGQge1xuICBjb2xvcjogI2IyYjZjNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gcC50ZXh0IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNWU2Nzg4O1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbi5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICM1NTVmODE7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICM4MDg3YTE7XG59XG4uYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0NTBweDtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OWVtO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDk5ZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5ZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZW1wbGF0ZS9hYm91dC9zdXNtaXRoQi5qcGdcIik7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkNGU3ZmU7XG59XG4uYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5zb2NpYWwtbWVkaWEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6ICM0MTRjNzM7XG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnNvY2lhbC1tZWRpYSAuaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjODA4N2ExO1xufSJdfQ== */", "@media screen and (max-width: 1280px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 380px;\n    height: 380px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 370px;\n    height: 370px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n\n  .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .first-column[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .second-column[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    margin-top: 2em;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 360px;\n    -ms-flex-item-align: center;\n        align-self: center;\n  }\n}\n@media screen and (max-width: 880px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1350px;\n  }\n\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-right: 0;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 340px;\n    height: 340px;\n  }\n}\n@media screen and (max-width: 600px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1600px;\n  }\n\n  .about-container[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 0.5em;\n  }\n}\n@media screen and (max-width: 460px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin: 10px;\n  }\n\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 370px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    padding: 15px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 240px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRO0lBQ0ksZUFBQTtFQ0RWO0VESU07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ0ZWO0FBQ0Y7QURNQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNMTjtBQUNGO0FEUUE7RUFFSTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtRQUFBLGVBQUE7RUNQTjs7RURZTTtJQUNJLGVBQUE7RUNUVjtFRFlNO0lBQ0ksZUFBQTtFQ1ZWO0VEYU07SUFDSSxlQUFBO0VDWFY7RURjTTtJQUNJLGtCQUFBO0VDWlY7O0VEZ0JFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsMEJBQUE7UUFBQSxzQkFBQTtJQUNBLGVBQUE7RUNiTjtFRGVNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtRQUFBLGtCQUFBO0VDYlY7QUFDRjtBRGlCQTtFQUVJO0lBQ0ksNEJBQUE7RUNoQk47O0VEdUJVO0lBQ0ksZUFBQTtFQ3BCZDtFRHVCVTtJQUNJLFlBQUE7RUNyQmQ7RUR3QlU7SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQ3RCZDtFRDBCTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDeEJWO0FBQ0Y7QUQ0QkE7RUFFSTtJQUNJLDRCQUFBO0VDM0JOOztFRDhCRTtJQUNJLFdBQUE7RUMzQk47RUQrQlU7SUFDSSxlQUFBO0VDN0JkO0VEZ0NVO0lBQ0ksYUFBQTtFQzlCZDtBQUNGO0FEbUNBO0VBTVk7SUFDSSxlQUFBO0VDdENkO0VEeUNVO0lBQ0ksZUFBQTtFQ3ZDZDtFRDRDYztJQUNJLGVBQUE7RUMxQ2xCO0VENkNjO0lBQ0ksZUFBQTtFQzNDbEI7RUQrQ1U7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQzdDZDs7RURvRE07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ2pEVjtFRG1EVTtJQUNJLGVBQUE7RUNqRGQ7QUFDRjtBRHNEQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNyRE47QUFDRjtBRHdEQTtFQUVJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUN2RE47RUQyRFU7SUFDSSxlQUFBO0VDekRkO0VEK0RVO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUM3RGQ7RURnRVU7SUFDSSxlQUFBO0VDOURkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcblxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICAuZmlyc3QtY29sdW1uIHAudGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzgwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIFxuICAgIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiAzNzBweDtcbiAgICAgICAgaGVpZ2h0OiAzNzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLmZpcnN0LWNvbHVtbiB7XG4gICAgICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICBwLnllYXJzLW9sZCB7ICAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvYmJpZXMge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlY29uZC1jb2x1bW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG5cbiAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuXG4gICAgI2Fib3V0IHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEzNTBweDtcbiAgICB9XG5cbiAgICAuYWJvdXQtY29udGFpbmVyIHtcblxuICAgICAgICAuZmlyc3QtY29sdW1uIHtcbiAgICBcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuaWNvbiB7IFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHAudGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzQwcHg7XG4gICAgICAgIH0gICAgXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgI2Fib3V0IHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDE2MDBweDtcbiAgICB9XG5cbiAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDc1dnc7XG4gICAgICAgIFxuICAgICAgICAuZmlyc3QtY29sdW1uIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgIFxuICAgIC5hYm91dC1jb250YWluZXIge1xuXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcblxuICAgICAgICAgICAgICAgICYueWVhcnMtb2xkIHsgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLnRleHQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWNvbmQtY29sdW1uIHtcblxuICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XG5cbiAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcblxuICAgIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG5cbiAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgLmZpcnN0LWNvbHVtbiB7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2Vjb25kLWNvbHVtbiB7XG4gICAgXG4gICAgICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBwLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgIHdpZHRoOiAzODBweDtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICB3aWR0aDogMzcwcHg7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmZpcnN0LWNvbHVtbiBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5maXJzdC1jb2x1bW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuZmlyc3QtY29sdW1uIHAueWVhcnMtb2xkIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmZpcnN0LWNvbHVtbiAuaG9iYmllcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNlY29uZC1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAjYWJvdXQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMzUwcHg7XG4gIH1cblxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gLmljb24ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gcC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGhlaWdodDogMzQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNhYm91dCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDE2MDBweDtcbiAgfVxuXG4gIC5hYm91dC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3NXZ3O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBoMiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiAuaWNvbiB7XG4gICAgbWFyZ2luOiAwLjVlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIGgxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHAueWVhcnMtb2xkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICB9XG4gIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogMjQwcHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-about",
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.scss", "./about.component.responsivity.scss"]
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");





// Any URL apart from the root domain is going to be rendered as "page-not-found".
const routes = [
    { path: "", component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"] },
    { path: "about", redirectTo: "/#about" },
    { path: "experience", redirectTo: "/#experience" },
    { path: "experiences", redirectTo: "/#experience" },
    // { path: "posts", redirectTo: "/#posts"},
    { path: "projects", redirectTo: "/#projects" },
    { path: "contact", redirectTo: "/#contact" },
    { path: "**", redirectTo: "/page-not-found" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                // In order to get anchor / fragment scrolling to work at all, we need to
                // enable it on the router.
                anchorScrolling: "enabled",
                // Once the above is enabled, the fragment link will only work on the
                // first click. This is because, by default, the Router ignores requests
                // to navigate to the SAME URL that is currently rendered. Unfortunately,
                // the fragment scrolling is powered by Navigation Events. As such, we
                // have to tell the Router to re-trigger the Navigation Events even if we
                // are navigating to the same URL.
                onSameUrlNavigation: "reload"
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        // In order to get anchor / fragment scrolling to work at all, we need to
                        // enable it on the router.
                        anchorScrolling: "enabled",
                        // Once the above is enabled, the fragment link will only work on the
                        // first click. This is because, by default, the Router ignores requests
                        // to navigate to the SAME URL that is currently rendered. Unfortunately,
                        // the fragment scrolling is powered by Navigation Events. As such, we
                        // have to tell the Router to re-trigger the Navigation Events even if we
                        // are navigating to the same URL.
                        onSameUrlNavigation: "reload"
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = "ePortfolio-Susmith Barigidad";
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        this.metaTagService.addTags([
            { name: "keywords", content: "Web Developer, Java Developer, Full-stack Java Developer, DevOps Engineer, Android Developer, Guilherme Borges Bastos Live Resume, Guilherme Borges Bastos Resume, Guilherme Borges Bastos CV, Curriculum Guilherme Borges Bastos, GBASTOS Resumo, gbastos live resume" },
            { name: "robots", content: "index, follow" },
            { name: "author", content: "Guilherme Borges Bastos" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
            { charset: "UTF-8" }
        ]);
        this.metaTagService.updateTag({ name: "description", content: "Hello, I'm a Full-stack Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!" });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.module */ "./src/app/resume/resume.module.ts");
/* harmony import */ var _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404/page-not-found-routing.module */ "./src/app/404/page-not-found-routing.module.ts");
/* harmony import */ var _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./404/page-not-found.module */ "./src/app/404/page-not-found.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/extra/pt */ "./node_modules/@angular/common/locales/extra/pt.js");
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);




















class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_16__["DIRECTION_ALL"] },
        };
    }
}
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default.a, "en");
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default.a, "pt-BR", _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
            _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
            _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__["AngularFireAnalyticsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
        _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
        _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__["AngularFireAnalyticsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                    _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
                    _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
                    _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__["AngularFireAnalyticsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                providers: [
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                        useClass: MyHammerConfig,
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_1 = goog.getMsg("Thank you for contacting me, I'll reply to you very soon.");
    I18N_0 = MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_1;
}
else {
    I18N_0 = "Thank you for contacting me, I'll reply to you very soon.";
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_3 = goog.getMsg("Sorry, there is an instability, try again later, or contact me via email or social media.");
    I18N_2 = MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_3;
}
else {
    I18N_2 = "Sorry, there is an instability, try again later, or contact me via email or social media.";
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_contact$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_5 = goog.getMsg("Contact");
    I18N_4 = MSG_EXTERNAL_contact$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_5;
}
else {
    I18N_4 = "Contact";
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_name$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_7 = goog.getMsg("Your name:");
    I18N_6 = MSG_EXTERNAL_name$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_7;
}
else {
    I18N_6 = "Your name:";
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_9 = goog.getMsg("John");
    I18N_8 = MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_9;
}
else {
    I18N_8 = "Mark";
}
const _c10 = ["placeholder", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_email$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_12 = goog.getMsg("Email:");
    I18N_11 = MSG_EXTERNAL_email$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_12;
}
else {
    I18N_11 = "Email:";
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_14 = goog.getMsg("john@gmail.com");
    I18N_13 = MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_14;
}
else {
    I18N_13 = "mark@gmail.com";
}
const _c15 = ["placeholder", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_message$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_17 = goog.getMsg("Your message:");
    I18N_16 = MSG_EXTERNAL_message$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_17;
}
else {
    I18N_16 = "Your Message:";
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_19 = goog.getMsg("Write here your message... I will reply to you soon.");
    I18N_18 = MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_19;
}
else {
    I18N_18 = "Write here your message... I will reply to you soon.";
}
const _c20 = ["placeholder", I18N_18];
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_send$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_22 = goog.getMsg("Send");
    I18N_21 = MSG_EXTERNAL_send$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_22;
}
else {
    I18N_21 = "Send";
}
const _c23 = ["value", I18N_21];
function ContactComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.name);
} }
function ContactComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faEnvelope);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r6.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.email);
} }
function ContactComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.phone);
} }
function ContactComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faMapMarkerAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.location);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___25 = goog.getMsg("The name is required.");
    I18N_24 = MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___25;
}
else {
    I18N_24 = "The name is required.";
}
function ContactComponent_div_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___27 = goog.getMsg("Please, provide a valid name.");
    I18N_26 = MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___27;
}
else {
    I18N_26 = "Please, provide a valid name.";
}
function ContactComponent_div_30_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_30_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_30_small_2_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.senderName.errors == null ? null : ctx_r10.senderName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.senderName.errors == null ? null : ctx_r10.senderName.errors.pattern);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___29 = goog.getMsg("The email is required.");
    I18N_28 = MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___29;
}
else {
    I18N_28 = "The email is required.";
}
function ContactComponent_div_36_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___31 = goog.getMsg("Please, provide a valid email address.");
    I18N_30 = MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___31;
}
else {
    I18N_30 = "Please, provide a valid email address.";
}
function ContactComponent_div_36_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_36_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_36_small_2_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.senderEmail.errors == null ? null : ctx_r11.senderEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.senderEmail.errors == null ? null : ctx_r11.senderEmail.errors.pattern);
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___33 = goog.getMsg("The message is required.");
    I18N_32 = MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___33;
}
else {
    I18N_32 = "The message is required.";
}
function ContactComponent_div_42_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_42_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.senderMessage.errors == null ? null : ctx_r12.senderMessage.errors.required);
} }
const _c34 = function (a0) { return { "fade": a0 }; };
const _c35 = function (a0) { return { "loading": a0 }; };
class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.isLoading = false;
        this.hasBeenSubmited = false;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-zÀ-ú ]*")
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    get senderEmail() {
        return this.contactForm.get("email");
    }
    get senderName() {
        return this.contactForm.get("name");
    }
    get senderMessage() {
        return this.contactForm.get("message");
    }
    get options() {
        return this.contactForm.get("options");
    }
    ngOnInit() {
        this.name = "Susmith Rajendra Barigidad";
        this.email = "susmithrb@gmail.com";
        this.phone = "+1 669-304-6821";
        this.location = "Santa Clara, California, USA";
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkerAlt"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
    }
    saveContact(contact) {
        this.contactService.createContact(contact).then(() => {
            this.displayUserInterfaceMessage(true);
        })
            .catch(error => {
            this.displayUserInterfaceMessage(false);
        });
    }
    displayUserInterfaceMessage(hasBeenSuccessfuly) {
        this.isLoading = false;
        this.hasBeenSubmited = true;
        this.feedbackStatus = hasBeenSuccessfuly ? "success" : "error";
        this.contactForm.reset();
    }
    closeFeedbackMessage() {
        this.hasBeenSubmited = false;
        this.feedbackStatus = "";
    }
    onSubmit(contactForm) {
        this.isLoading = true;
        const contactValues = {
            name: this.senderName.value,
            email: this.senderEmail.value,
            message: this.senderMessage.value,
            date: new Date()
        };
        this.saveContact(contactValues);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 47, vars: 23, consts: [["id", "contact", "itemscope", "", "itemtype", "https://schema.org/ContactPage"], [1, "feedback-container", 3, "ngClass"], [1, "success"], ["title", "Close", 1, "icon", 3, "icon", "click"], [1, "error"], [1, "container", 3, "ngClass"], [1, "left-side"], [1, "title"], [1, "top-container"], [1, "picture"], [1, "info"], ["class", "name", 4, "ngIf"], ["class", "email", 4, "ngIf"], ["class", "phone", 4, "ngIf"], ["class", "location", 4, "ngIf"], [1, "bottom-container"], [3, "formGroup", "ngClass", "ngSubmit"], ["contactNgForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "formControlName", "name", 6, "placeholder"], ["class", "warnings", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "formControlName", "email", "required", "", 6, "placeholder"], ["for", "message"], ["name", "message", "formControlName", "message", "required", "", 6, "placeholder"], ["type", "submit", 6, "value"], [1, "right-side"], [1, "half-circle"], [1, "name"], ["itemprop", "name"], [1, "email"], ["title", "Email", 1, "icon", 3, "icon"], ["itemprop", "email", 3, "href"], [1, "phone"], ["title", "Phone", 1, "icon", 3, "icon"], ["itemprop", "telephone"], [1, "location"], ["title", "City", 1, "icon", 3, "icon"], ["itemprop", "city"], [1, "warnings"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_fa_icon_click_5_listener() { return ctx.closeFeedbackMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_fa_icon_click_9_listener() { return ctx.closeFeedbackMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactComponent_p_18_Template, 3, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactComponent_p_19_Template, 4, 3, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactComponent_p_20_Template, 4, 2, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContactComponent_p_21_Template, 4, 2, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.onSubmit(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](27, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](29, _c10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContactComponent_div_30_Template, 3, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](33, I18N_11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](35, _c15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ContactComponent_div_36_Template, 3, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](39, I18N_16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](41, _c20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ContactComponent_div_42_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](44, _c23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.feedbackStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c34, ctx.hasBeenSubmited));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c35, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderName.invalid && ctx.senderName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderName.invalid && ctx.senderName.touched || ctx.senderName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderEmail.invalid && ctx.senderEmail.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderEmail.invalid && ctx.senderEmail.touched || ctx.senderEmail.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderMessage.invalid && ctx.senderMessage.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderMessage.invalid && ctx.senderMessage.touched || ctx.senderMessage.dirty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["#contact[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #d4e7fe;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  padding: 1em;\n  border-radius: 15px;\n  z-index: 3;\n  top: 50%;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  margin: 0 1em;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  font-size: 22px;\n  top: 2px;\n  position: relative;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #656565;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: none;\n  color: #77242c;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n  color: #373837;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #c4e4c6;\n  border: 1px solid #cecece;\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #e6adb2;\n  border: 1px solid #d49399;\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 105%;\n  bottom: -1em;\n  right: 0;\n  z-index: 1;\n}\n#contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 450px;\n  background-color: #c1d5ee;\n  border-top-left-radius: 100%;\n  border: 0;\n  border-right: 0;\n  border-bottom: 0;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: -1em;\n  right: 0;\n  z-index: 0;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  width: 85vw;\n  max-width: 1400px;\n  opacity: 1;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n  z-index: 2;\n  margin-bottom: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 110px;\n  height: 110px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('susmithB.jpg');\n  border: 1px solid #d4e7fe;\n  margin-right: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #646d8d;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #646d8d;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222f5c;\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n  margin-top: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 1em;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .warnings[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #222f5c;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background-color: #70c576;\n  font-size: 22px;\n  color: #fff;\n  padding: 1em;\n  border: 0;\n  border-radius: 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  color: #2c612f;\n  background-color: #68bd6e;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.ng-invalid[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  -ms-flex-positive: 6;\n      flex-grow: 6;\n}\n#contact[_ngcontent-%COMP%]   .container.fade[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-animation: fadeOut 1s;\n  animation: fadeOut 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtBQ0NSO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURDWTtFQUNJLGNBQUE7QUNDaEI7QURHUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0RaO0FESVE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0ZaO0FES1E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0haO0FETVE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNKWjtBRE1ZO0VBQ0ksZUFBQTtBQ0poQjtBRE9RO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FDTFo7QURPWTtFQUNJLGVBQUE7QUNMaEI7QURVSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1JSO0FEV0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBR0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1RSO0FEWUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ1ZSO0FEWVE7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNWWjtBRGNnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNacEI7QURnQlk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0FDZGhCO0FEZ0JnQjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDZHBCO0FEbUJvQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ2pCeEI7QURvQm9CO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDbEJ4QjtBRHFCb0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ25CeEI7QURzQm9CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDcEJ4QjtBRHlCWTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDdkJoQjtBRHlCZ0I7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtNQUFBLHNCQUFBO0FDdkJwQjtBRHlCb0I7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7QUN2QnhCO0FEMkI0QjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ3pCaEM7QUQ4Qm9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUM1QnhCO0FEK0JvQjtFQUNJLHFDQUFBO0FDN0J4QjtBRGdDb0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDOUJ4QjtBRGdDd0I7RUFDSSxxQkFBQTtBQzlCNUI7QURrQ29CO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hDeEI7QURrQ3dCO0VBQ0kscUJBQUE7QUNoQzVCO0FEbUN3QjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ2pDNUI7QURxQ29CO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FDbkN4QjtBRHNDb0I7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUNwQ3hCO0FEeUN3QjtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUN2QzVCO0FEOENRO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0FDNUNaO0FEK0NRO0VBQ0ksb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQzdDWjtBRGtEQTtFQUNJO0lBQU8sVUFBQTtFQzlDVDtFRCtDRTtJQUFLLFVBQUE7RUM1Q1A7QUFDRjtBRHlDQTtFQUNJO0lBQU8sVUFBQTtFQzlDVDtFRCtDRTtJQUFLLFVBQUE7RUM1Q1A7QUFDRjtBRDhDQTtFQUNJO0lBQU8sVUFBQTtFQzNDVDtFRDRDRTtJQUFLLFlBQUE7RUN6Q1A7QUFDRjtBRHNDQTtFQUNJO0lBQU8sVUFBQTtFQzNDVDtFRDRDRTtJQUFLLFlBQUE7RUN6Q1A7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0IHtcbiAgICB0b3A6IC00ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGU3ZmU7XG5cbiAgICAuZmVlZGJhY2stY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY1NjU2NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzc3MjQyYztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzM3MzgzNztcbiAgICAgICAgfVxuXG4gICAgICAgICYuc3VjY2VzcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGU0YzY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xuXG4gICAgICAgICAgICAuc3VjY2VzcyB7IFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmVycm9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2YWRiMjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNDkzOTk7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG5cbiAgICAgICAgICAgIC5lcnJvciB7IFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTA1JTtcbiAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuaGFsZi1jaXJjbGUge1xuICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWQ1ZWU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwOyAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTFlbTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiA4NXZ3O1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgIFxuICAgICAgICAgICAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTllbTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvdGVtcGxhdGUvYWJvdXQvc3VzbWl0aEIuanBnJyk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGU3ZmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NDZkOGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY0NmQ4ZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC53YXJuaW5ncyB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODQ4NDg0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBjNTc2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmM2MTJmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2OGJkNmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICYubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA2O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICYuZmFkZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0IDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XG4gICAgdG8geyBvcGFjaXR5OiAwLjM7IH1cbn0iLCIjY29udGFjdCB7XG4gIHRvcDogLTRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZTdmZTtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICBtYXJnaW46IDAgMWVtO1xufVxuI2NvbnRhY3QgLmZlZWRiYWNrLWNvbnRhaW5lciAuaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRvcDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIgLmljb246aG92ZXIge1xuICBjb2xvcjogIzY1NjU2NTtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI2NvbnRhY3QgLmZlZWRiYWNrLWNvbnRhaW5lciAuZXJyb3Ige1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogIzc3MjQyYztcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIgLnN1Y2Nlc3Mge1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogIzM3MzgzNztcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIuc3VjY2VzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlNGM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xuICBhbmltYXRpb246IGZhZGVJbiAxcztcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIuc3VjY2VzcyAuc3VjY2VzcyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIuZXJyb3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YWRiMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0OTM5OTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyLmVycm9yIC5lcnJvciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiNjb250YWN0IC5pbGx1c3RyYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTA1JTtcbiAgYm90dG9tOiAtMWVtO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbn1cbiNjb250YWN0IC5oYWxmLWNpcmNsZSB7XG4gIHdpZHRoOiA1NTBweDtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxZDVlZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFlbTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG4jY29udGFjdCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDg1dnc7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIHtcbiAgZmxleC1ncm93OiA0O1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICBwYWRkaW5nOiAxZW07XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLnBpY3R1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5OWVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVtcGxhdGUvYWJvdXQvc3VzbWl0aEIuanBnXCIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRlN2ZlO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyAuaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLmluZm8gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2NDZkOGQ7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLmluZm8gcCB7XG4gIG1hcmdpbjogMCAwIDhweCAwO1xuICBjb2xvcjogIzY0NmQ4ZDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSAuZm9ybS1ncm91cCAud2FybmluZ3Mgc21hbGwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6IHJlZDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1YztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1lbWFpbF0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgY29sb3I6ICM4NDg0ODQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9dGV4dF0uaXMtaW52YWxpZCwgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1lbWFpbF0uaXMtaW52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGM1NzY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0uaXMtaW52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGNvbG9yOiAjMmM2MTJmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhiZDZlO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gdGV4dGFyZWEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgY29sb3I6ICM4NDg0ODQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0ubG9hZGluZyB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjY7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybS5uZy1pbnZhbGlkIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLnJpZ2h0LXNpZGUge1xuICBmbGV4LWdyb3c6IDY7XG59XG4jY29udGFjdCAuY29udGFpbmVyLmZhZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMXM7XG4gIGFuaW1hdGlvbjogZmFkZU91dCAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59Il19 */", "@media screen and (max-width: 1400px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 3;\n        flex-grow: 3;\n  }\n}\n@media screen and (max-width: 1280px) {\n  #contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 0;\n        flex-grow: 0;\n  }\n}\n@media screen and (max-width: 600px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 0.7em;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 420px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 370px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVE7SUFDSSxvQkFBQTtRQUFBLFlBQUE7RUNGVjtFREtNO0lBQ0ksb0JBQUE7UUFBQSxZQUFBO0VDSFY7QUFDRjtBRE9BO0VBSVE7SUFDRyxhQUFBO0VDUlQ7RURXTTtJQUNJLGFBQUE7RUNUVjtFRGNVO0lBQ0ksb0JBQUE7UUFBQSxZQUFBO0VDWmQ7RURlVTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtFQ2JkO0FBQ0Y7QURtQkE7RUFNWTtJQUNJLGVBQUE7RUN0QmQ7RUR5QlU7SUFDSSxtQkFBQTtRQUFBLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7UUFBQSx1QkFBQTtFQ3ZCZDtFRHlCYztJQUNJLGFBQUE7RUN2QmxCO0VENEJrQjtJQUNJLGVBQUE7RUMxQnRCO0VENkJrQjtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtFQzNCdEI7RURnQ1U7SUFDSSxjQUFBO0VDOUJkO0VEa0NrQjtJQUNJLG9CQUFBO0VDaEN0QjtFRG1Da0I7SUFDSSxlQUFBO0VDakN0QjtFRG9Da0I7SUFDSSxlQUFBO0VDbEN0QjtFRG9Dc0I7SUFDSSxxQkFBQTtFQ2xDMUI7RURzQ2tCO0lBQ0ksZUFBQTtFQ3BDdEI7RURzQ3NCO0lBQ0kscUJBQUE7RUNwQzFCO0VEd0NrQjtJQUNJLGVBQUE7RUN0Q3RCO0FBQ0Y7QUQ4Q0E7RUFNWTtJQUNJLGNBQUE7RUNqRGQ7RURxRGtCO0lBQ0ksZUFBQTtFQ25EdEI7RURzRGtCO0lBQ0ksZUFBQTtFQ3BEdEI7RUR5RFU7SUFDSSxjQUFBO0VDdkRkO0VEMkRrQjtJQUNJLG9CQUFBO0VDekR0QjtFRDREa0I7SUFDSSxlQUFBO0VDMUR0QjtFRDZEa0I7SUFDSSxlQUFBO0VDM0R0QjtFRDhEa0I7SUFDSSxlQUFBO0VDNUR0QjtFRCtEa0I7SUFDSSxlQUFBO0VDN0R0QjtBQUNGO0FEb0VBO0VBVW9CO0lBQ0ksZUFBQTtFQzNFdEI7RUQ4RWtCO0lBQ0ksZUFBQTtFQzVFdEI7RURpRlU7SUFDSSxjQUFBO0VDL0VkO0VEa0ZrQjtJQUNJLGVBQUE7RUNoRnRCO0VEbUZrQjtJQUNJLGVBQUE7RUNqRnRCO0VEb0ZrQjtJQUNJLGVBQUE7RUNsRnRCO0VEcUZrQjtJQUNJLGVBQUE7RUNuRnRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG5cbiAgICAjY29udGFjdCAuY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcblxuICAgICNjb250YWN0IHtcbiAgICBcbiAgICAgICAgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmhhbGYtY2lyY2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgI2NvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRpdGxlIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW07XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgICAgICAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN2VtO1xuXG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJi5pcy1pbnZhbGlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG5cbiAgICAjY29udGFjdCAuY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgXG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcblxuICAgICNjb250YWN0IC5jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLnJpZ2h0LXNpZGUge1xuICAgIGZsZXgtZ3JvdzogMztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICNjb250YWN0IC5pbGx1c3RyYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2NvbnRhY3QgLmhhbGYtY2lyY2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLnJpZ2h0LXNpZGUge1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50aXRsZSBoMSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAucGljdHVyZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLmluZm8gcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyAubmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT10ZXh0XS5pcy1pbnZhbGlkLCAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXS5pcy1pbnZhbGlkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdLmlzLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-contact",
                templateUrl: "./contact.component.html",
                styleUrls: ["./contact.component.scss", "./contact.component.responsivity.scss"]
            }]
    }], function () { return [{ type: _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class ContactService {
    constructor(database) {
        this.database = database;
    }
    createContact(contact) {
        return this.database.collection("contacts").add(contact);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _sorter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sorter.service */ "./src/app/core/sorter.service.ts");
/* harmony import */ var _pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");
/* harmony import */ var _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/on-viewport.directive */ "./src/app/core/directive/on-viewport.directive.ts");
/* harmony import */ var _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/ellipsis.pipe */ "./src/app/core/pipe/ellipsis.pipe.ts");










class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]], imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                declarations: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]],
                exports: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "assets/data/";
    }
    getExperiences() {
        return this.http.get(this.baseUrl + "experiences.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getAbout() {
        return this.http.get(this.baseUrl + "about.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getProjects() {
        return this.http.get(this.baseUrl + "projects.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error("server error:", error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || "backend server error");
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || "Node.js server error");
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/directive/internationalization.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/directive/internationalization.directive.ts ***!
  \******************************************************************/
/*! exports provided: InternationalizationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalizationDirective", function() { return InternationalizationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipe/ellipsis.pipe */ "./src/app/core/pipe/ellipsis.pipe.ts");




class InternationalizationDirective {
    constructor(el, locale) {
        this.el = el;
        this.locale = locale;
        this._data = [];
    }
    get data() {
        return this._data;
    }
    set data(value) {
        if (value) {
            this._data = value;
            this.el.nativeElement.innerHTML = this.retrievePropertyValueByLocation();
        }
    }
    ngOnInit() { }
    retrievePropertyValueByLocation() {
        if (this._data) {
            const value = this._data
                .filter(element => element.language === (this.locale || "en"))
                .map(element => element[this.property]) || [""];
            return this.ellipsis > 0 ? new _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_1__["EllipsisPipe"]().transform(value[0], this.ellipsis) : value;
        }
    }
}
InternationalizationDirective.ɵfac = function InternationalizationDirective_Factory(t) { return new (t || InternationalizationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
InternationalizationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InternationalizationDirective, selectors: [["", "internationalization", ""]], inputs: { property: "property", data: "data", ellipsis: "ellipsis" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternationalizationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: "[internationalization]" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { property: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ellipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/directive/on-viewport.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/directive/on-viewport.directive.ts ***!
  \*********************************************************/
/*! exports provided: InViewportDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InViewportDirective", function() { return InViewportDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InViewportDirective {
    constructor(_el) {
        this._el = _el;
        this.inViewport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        this.check();
    }
    ngOnInit() { }
    check(partial = true) {
        const el = this._el.nativeElement;
        const elSize = (el.offsetWidth * el.offsetHeight);
        const rec = el.getBoundingClientRect();
        const vp = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const sectionMarging = 370;
        const tViz = rec.top >= 0 && rec.top < (vp.height - sectionMarging);
        const bViz = rec.bottom > 0 && rec.bottom <= (vp.height - sectionMarging);
        const vVisible = partial ? tViz || bViz : tViz && bViz;
        let event = {
            target: el,
            value: false
        };
        event["value"] = (elSize && vVisible);
        if (event["value"]) {
            this.inViewport.emit(event);
        }
    }
}
InViewportDirective.ɵfac = function InViewportDirective_Factory(t) { return new (t || InViewportDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
InViewportDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InViewportDirective, selectors: [["", "in-viewport", ""]], inputs: { pageYOffset: "pageYOffset" }, outputs: { inViewport: "inViewport" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InViewportDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[in-viewport]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { pageYOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["pageYOffset"]
        }], inViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["inViewport"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/pipe/ellipsis.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/core/pipe/ellipsis.pipe.ts ***!
  \********************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EllipsisPipe {
    transform(val, args = 60) {
        if (val.length > args) {
            return val.substring(0, args) + "...";
        }
        return val;
    }
}
EllipsisPipe.ɵfac = function EllipsisPipe_Factory(t) { return new (t || EllipsisPipe)(); };
EllipsisPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ellipsis", type: EllipsisPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EllipsisPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "ellipsis"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pipe/localized-date.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/core/pipe/localized-date.pipe.ts ***!
  \**************************************************/
/*! exports provided: LocalizedDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedDatePipe", function() { return LocalizedDatePipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class LocalizedDatePipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(value, pattern = "mediumDate") {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.locale);
        // For now, the translation will be manual, further on, the i18n service will be injected to provide such capability...
        return datePipe.transform(value, pattern) || (this.locale === "en" ? "Currently" : "Atualmente");
    }
}
LocalizedDatePipe.ɵfac = function LocalizedDatePipe_Factory(t) { return new (t || LocalizedDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
LocalizedDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "localizedDate", type: LocalizedDatePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalizedDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: "localizedDate",
                pure: false
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pipe/safari-date-formatter.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/pipe/safari-date-formatter.pipe.ts ***!
  \*********************************************************/
/*! exports provided: SafariDateFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafariDateFormatterPipe", function() { return SafariDateFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * In order to make the Safari and IE understand the date format to be used in the 'date' pipe it is
 * necessary to replace '-' by '/'.
*/


class SafariDateFormatterPipe {
    transform(value) {
        if (value) {
            return value.replace(/-/g, '/');
        }
        return value;
    }
}
SafariDateFormatterPipe.ɵfac = function SafariDateFormatterPipe_Factory(t) { return new (t || SafariDateFormatterPipe)(); };
SafariDateFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safariDateFormatter", type: SafariDateFormatterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafariDateFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: "safariDateFormatter" }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/shared/abstract.swipe.section.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/shared/abstract.swipe.section.ts ***!
  \*******************************************************/
/*! exports provided: AbstractSwipeSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSwipeSection", function() { return AbstractSwipeSection; });
var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["NOT_READABLE"] = 2] = "NOT_READABLE";
})(Direction || (Direction = {}));
class AbstractSwipeSection {
    constructor(horizontalSwipeRatio = 40) {
        this.horizontalStartPoint = 0;
        this.horizontalSwipeRatio = horizontalSwipeRatio;
    }
    onSwipe(event) {
        const direction = this.getEventSwipeDirection(event);
        if (!this.disablePreviousNavigation() && direction === Direction.RIGHT) {
            this.onClickPrevious();
        }
        else if (!this.disableNextNavigation() && direction === Direction.LEFT) {
            this.onClickNext();
        }
    }
    getEventSwipeDirection(event) {
        if (Math.abs(event.deltaX) > this.horizontalSwipeRatio) {
            return event.deltaX > this.horizontalStartPoint ? Direction.RIGHT : Direction.LEFT;
        }
        return Direction.NOT_READABLE;
    }
}


/***/ }),

/***/ "./src/app/core/sorter.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/sorter.service.ts ***!
  \****************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SorterService {
    constructor() {
        this.property = null;
        this.direction = 1;
    }
    sort(key, order = "asc") {
        return (a, b) => {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }
            const varA = (typeof a[key] === "string")
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === "string")
                ? b[key].toUpperCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            }
            else if (varA < varB) {
                comparison = -1;
            }
            return ((order === "desc") ? (comparison * -1) : comparison);
        };
    }
}
SorterService.ɵfac = function SorterService_Factory(t) { return new (t || SorterService)(); };
SorterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SorterService, factory: SorterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SorterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/utils.ts":
/*!*******************************!*\
  !*** ./src/app/core/utils.ts ***!
  \*******************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(delay = 300) {
    let interval;
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            clearTimeout(interval);
            interval = setTimeout(() => {
                interval = null;
                original.apply(this, args);
            }, delay);
        };
        return interval;
    };
}


/***/ }),

/***/ "./src/app/experience/experience-timeline/experience-timeline.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/experience/experience-timeline/experience-timeline.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ExperienceTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceTimelineComponent", function() { return ExperienceTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");




const _c0 = ["line"];
class ExperienceTimelineComponent {
    constructor(elRef, renderer, locale) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.locale = locale;
        this._experiences = [];
        this.onTimelineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get currentPosition() {
        return this._currentPosition;
    }
    set currentPosition(value) {
        if (value) {
            this._currentPosition = value;
            this.updateTimelineNavigation();
        }
    }
    get experiences() {
        return this._experiences;
    }
    set experiences(value) {
        if (value) {
            this._experiences = value;
            this.populateExperienceTimeline();
        }
    }
    ngOnInit() {
        this.offsetWidth = this.elRef.nativeElement.offsetWidth;
        this.removeEventListener = this.renderer.listen(this.elRef.nativeElement, "click", (event) => {
            if (event.target && event.target.getAttribute("id-position")) {
                const targetId = event.target.getAttribute("id-position");
                this.onTimelineChanged.emit(targetId);
            }
        });
    }
    // Cleanup by removing the event listener on destroy
    ngOnDestroy() {
        this.removeEventListener();
    }
    updateTimelineNavigation() {
        const activePreviousElem = this.line.nativeElement.querySelector(".milestone.active.current");
        this.renderer.removeClass(activePreviousElem, "current");
        const targetElem = this.line.nativeElement.querySelector(`div[id-position="${this.currentPosition}"]`);
        this.renderer.addClass(targetElem, "current");
    }
    daysBetween(startDate, endDate) {
        // The .replace() is necessary in order to avoid issues in the Firefox browser.
        const pointA = new Date(startDate.replace(/-/g, '/'));
        const pointB = new Date(endDate.replace(/-/g, '/'));
        return Math.round(Math.abs(+pointA - +pointB) / 8.64e7);
    }
    retrieveTodayDateAsString() {
        const today = new Date();
        return `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
    }
    populateExperienceTimeline() {
        let dates = this._experiences.map(experience => experience.startAt);
        // Adding the current day in order to complete the timeline.
        dates.push(this.retrieveTodayDateAsString());
        if (dates && dates.length < 2) {
            this.renderer.setStyle(this.elRef.nativeElement, "visibility", "hidden");
        }
        else if (dates.length >= 2) {
            const daysBetween = this.daysBetween(dates[0], dates[dates.length - 1]);
            const oneDayInPixels = this.offsetWidth / daysBetween;
            // Draw first date milestone      
            this.renderer.appendChild(this.line.nativeElement, this.createMilestone(1, 0, dates[0]));
            let i;
            const lastFrameLoop = dates.length - 1;
            // Draw the middle date milestones
            for (i = 1; i < lastFrameLoop; i++) {
                const periodInDays = this.daysBetween(dates[0], dates[i]);
                const periodWidth = periodInDays * oneDayInPixels;
                const milestoneElement = this.createMilestone((i + 1), periodWidth, dates[i]);
                if (i == lastFrameLoop - 1) {
                    this.renderer.addClass(milestoneElement, "current");
                }
                this.renderer.appendChild(this.line.nativeElement, milestoneElement);
            }
            // Draw last date milestone ( the current frame )
            const lastDataMilestone = this.createCurrentTriangle(i + 1);
            this.renderer.appendChild(this.line.nativeElement, lastDataMilestone);
        }
    }
    calculatePosition(leftPosition, offsetWidth) {
        return (leftPosition * 100) / offsetWidth;
    }
    createMilestone(index, left, date) {
        const milestoneElement = this.renderer.createElement("div");
        this.renderer.addClass(milestoneElement, "milestone");
        this.renderer.addClass(milestoneElement, "active");
        const leftPos = this.calculatePosition(left, this.offsetWidth);
        // Uses at most 95% instead of 100% in order to avoid collision to the arrow icon on the right side of the timeline.
        this.renderer.setStyle(milestoneElement, "left", `${Math.min(95, leftPos)}%`);
        this.renderer.setAttribute(milestoneElement, "id-position", index.toString());
        const labelElement = this.createLabelElement(date.toString());
        this.renderer.appendChild(milestoneElement, labelElement);
        return milestoneElement;
    }
    createCurrentTriangle(index) {
        const milestoneElement = this.renderer.createElement("div");
        this.renderer.addClass(milestoneElement, "milestone");
        this.renderer.addClass(milestoneElement, "active");
        this.renderer.addClass(milestoneElement, "future");
        this.renderer.setStyle(milestoneElement, "left", "100%");
        return milestoneElement;
    }
    // Update this function based on the desired date label formatting.
    createLabelElement(date) {
        const safariDateFormatterPipe = new _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_1__["SafariDateFormatterPipe"]();
        const safariDateFormatterPipeValue = safariDateFormatterPipe.transform(date);
        const localizedDatePipe = new _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_2__["LocalizedDatePipe"](this.locale);
        let month = localizedDatePipe.transform(safariDateFormatterPipeValue, "MMM");
        const labelElement = this.renderer.createElement("div");
        this.renderer.addClass(labelElement, "popupSpan");
        const monthSpan = this.renderer.createElement("span");
        this.renderer.addClass(monthSpan, "month");
        this.renderer.appendChild(monthSpan, this.renderer.createText(month));
        const year = localizedDatePipe.transform(safariDateFormatterPipeValue, "yyyy");
        const yearSpan = this.renderer.createElement("span");
        this.renderer.addClass(yearSpan, "year");
        this.renderer.appendChild(yearSpan, this.renderer.createText(year));
        this.renderer.appendChild(labelElement, monthSpan);
        this.renderer.appendChild(labelElement, yearSpan);
        return labelElement; // year, E.g: May. 2020
    }
}
ExperienceTimelineComponent.ɵfac = function ExperienceTimelineComponent_Factory(t) { return new (t || ExperienceTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
ExperienceTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceTimelineComponent, selectors: [["app-experience-timeline"]], viewQuery: function ExperienceTimelineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.line = _t.first);
    } }, inputs: { currentPosition: "currentPosition", experiences: "experiences" }, outputs: { onTimelineChanged: "onTimelineChanged" }, decls: 5, vars: 0, consts: [[1, "bottom-container"], [1, "lineCont"], [1, "line"], ["line", ""], [1, "mainCont"]], template: function ExperienceTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bottom-container[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -75px;\n}\n\n.mainCont[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  position: relative;\n  color: white;\n  font-size: 62px;\n  text-align: center;\n  transition: all 0.2s ease-out;\n}\n\n.lineCont[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n}\n\n.lineCont[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 5px;\n  margin: auto;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  position: relative;\n}\n\n.milestone[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  top: -6px;\n  border: 3px solid white;\n  cursor: pointer;\n  transition: text-shadow 0.3s linear;\n}\n\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 10px;\n  white-space: nowrap;\n  color: white;\n  position: absolute;\n  top: 20px;\n  left: -35px;\n  transition: all 0.1s ease-out;\n  pointer-events: none;\n  \n}\n\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  text-transform: capitalize;\n}\n\n.milestone.current[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background: #414c73;\n  top: -8px;\n  font-size: 22px;\n  text-shadow: 0 0 15px white;\n}\n\n.milestone.active[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  top: -40px;\n  display: block;\n}\n\n.milestone.active.future[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1px;\n  border-top: 7px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 13px solid white;\n  background: transparent;\n  border-radius: 0;\n  border-right: 0;\n  pointer-events: none;\n}\n\n.milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  left: -50px;\n  top: -50px;\n}\n\n@-webkit-keyframes grow {\n  0% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n  50% {\n    -ms-transform: scale(0.99);\n    transform: scale(0.99);\n  }\n  100% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n}\n\n@keyframes grow {\n  0% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n  50% {\n    -ms-transform: scale(0.99);\n    transform: scale(0.99);\n  }\n  100% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtdGltZWxpbmUvZXhwZXJpZW5jZS10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO01BQUEsMkJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQXNCLDZEQUFBO0FDQzFCOztBRENJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQ0NOOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQUo7O0FESUE7RUFDRTtJQUlFLDBCQUFBO0lBQ0Esc0JBQUE7RUNERjtFRElBO0lBSUMsMEJBQUE7SUFDQSxzQkFBQTtFQ0ZEO0VES0E7SUFJRywwQkFBQTtJQUNBLHNCQUFBO0VDSEg7QUFDRjs7QURwQkE7RUFDRTtJQUlFLDBCQUFBO0lBQ0Esc0JBQUE7RUNERjtFRElBO0lBSUMsMEJBQUE7SUFDQSxzQkFBQTtFQ0ZEO0VES0E7SUFJRywwQkFBQTtJQUNBLHNCQUFBO0VDSEg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS10aW1lbGluZS9leHBlcmllbmNlLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTc1cHg7XG59XG5cbi5tYWluQ29udCB7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLmxpbmVDb250IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xuXG4gIC5saW5lIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4ubWlsZXN0b25lIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuXG4gIC5wb3B1cFNwYW4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTM1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIE9ubHkgdGhlIENpcmNsZXMgaW4gdGhlIHRpbWVsaW5lIGFyZSBsaXN0ZW5lZCBieSBldmVudHMuICovXG5cbiAgICAubW9udGgge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gIH1cbiAgJi5jdXJyZW50IHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogIzQxNGM3MztcbiAgICB0b3A6IC04cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgfVxuICAmLmFjdGl2ZSAucG9wdXBTcGFuIHtcbiAgICB0b3A6IC00MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICYuYWN0aXZlLmZ1dHVyZSB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gICYuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgbGVmdDogLTUwcHg7XG4gICAgdG9wOiAtNTBweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdyb3cge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7ICAgIFxuICB9XG4gICBcbiAgNTAlIHtcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gIH1cbiAgIFxuICAxMDAlIHtcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICB9XG59IiwiLmJvdHRvbS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTc1cHg7XG59XG5cbi5tYWluQ29udCB7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLmxpbmVDb250IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xufVxuLmxpbmVDb250IC5saW5lIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWlsZXN0b25lIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xufVxuLm1pbGVzdG9uZSAucG9wdXBTcGFuIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTM1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogT25seSB0aGUgQ2lyY2xlcyBpbiB0aGUgdGltZWxpbmUgYXJlIGxpc3RlbmVkIGJ5IGV2ZW50cy4gKi9cbn1cbi5taWxlc3RvbmUgLnBvcHVwU3BhbiAubW9udGgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWlsZXN0b25lLmN1cnJlbnQge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjNDE0YzczO1xuICB0b3A6IC04cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xufVxuLm1pbGVzdG9uZS5hY3RpdmUgLnBvcHVwU3BhbiB7XG4gIHRvcDogLTQwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1pbGVzdG9uZS5hY3RpdmUuZnV0dXJlIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubWlsZXN0b25lLmFjdGl2ZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xuICBsZWZ0OiAtNTBweDtcbiAgdG9wOiAtNTBweDtcbn1cblxuQGtleWZyYW1lcyBncm93IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbn0iXX0= */", "@media screen and (max-width: 1024px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -90px;\n  }\n\n  .milestone[_ngcontent-%COMP%] {\n    width: 8px;\n    height: 8px;\n    top: -6px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -40px;\n    font-size: 15px;\n  }\n  .milestone.current[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    top: -8px;\n  }\n  .milestone.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    top: -45px;\n    left: -40px;\n  }\n}\n@media screen and (max-width: 880px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -60px;\n  }\n\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -20px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtdGltZWxpbmUvZXhwZXJpZW5jZS10aW1lbGluZS5jb21wb25lbnQucmVwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLGFBQUE7RUNBTjs7RURHRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQ0FOO0VERU07SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQ0FWO0VERU07SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUNBVjtFREVVO0lBQ0ksZUFBQTtFQ0FkO0VER007SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ0RWO0FBQ0Y7QURLQTtFQUVJO0lBQ0ksYUFBQTtFQ0pOOztFRFFNO0lBQ0ksV0FBQTtFQ0xWO0VET1U7SUFDSSxhQUFBO0VDTGQ7RURRTTtJQUNJLFdBQUE7RUNOVjtBQUNGO0FEVUE7RUFDSTtJQUNJLGFBQUE7RUNSTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgYm90dG9tOiAtOTBweDtcbiAgICB9XG4gICAgICBcbiAgICAubWlsZXN0b25lIHtcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgXG4gICAgICAgIC5wb3B1cFNwYW4ge1xuICAgICAgICAgICAgbGVmdDogLTQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5jdXJyZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgdG9wOiAtOHB4O1xuICAgIFxuICAgICAgICAgICAgLnBvcHVwU3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgICAgICAgICB0b3A6IC00NXB4O1xuICAgICAgICAgICAgbGVmdDogLTQwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG5cbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIGJvdHRvbTogLTYwcHg7XG4gICAgfVxuICAgIFxuICAgIC5taWxlc3RvbmUgeyAgICAgICAgXG4gICAgICAgIC5wb3B1cFNwYW4ge1xuICAgICAgICAgICAgbGVmdDogLTIwcHg7XG5cbiAgICAgICAgICAgIC5tb250aCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xuICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJvdHRvbS1jb250YWluZXIge1xuICAgIGJvdHRvbTogLTkwcHg7XG4gIH1cblxuICAubWlsZXN0b25lIHtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIHRvcDogLTZweDtcbiAgfVxuICAubWlsZXN0b25lIC5wb3B1cFNwYW4ge1xuICAgIGxlZnQ6IC00MHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAubWlsZXN0b25lLmN1cnJlbnQge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICB0b3A6IC04cHg7XG4gIH1cbiAgLm1pbGVzdG9uZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAubWlsZXN0b25lLmFjdGl2ZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xuICAgIHRvcDogLTQ1cHg7XG4gICAgbGVmdDogLTQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICBib3R0b206IC02MHB4O1xuICB9XG5cbiAgLm1pbGVzdG9uZSAucG9wdXBTcGFuIHtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICAubWlsZXN0b25lIC5wb3B1cFNwYW4gLm1vbnRoIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5taWxlc3RvbmUuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgbGVmdDogLTI1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-experience-timeline",
                templateUrl: "./experience-timeline.component.html",
                styleUrls: ["./experience-timeline.component.scss", "experience-timeline.component.reponsivity.scss"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { onTimelineChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], line: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["line"]
        }], currentPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], experiences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _core_shared_abstract_swipe_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shared/abstract.swipe.section */ "./src/app/core/shared/abstract.swipe.section.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/sorter.service */ "./src/app/core/sorter.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience-timeline/experience-timeline.component */ "./src/app/experience/experience-timeline/experience-timeline.component.ts");
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");













const _c0 = ["orderedList"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_experiences$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_2 = goog.getMsg("Experiences");
    I18N_1 = MSG_EXTERNAL_experiences$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_2;
}
else {
    I18N_1 = "Experiences";
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_4 = goog.getMsg("Previous");
    I18N_3 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_4;
}
else {
    I18N_3 = "Previous";
}
const _c5 = ["title", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_7 = goog.getMsg("Previous");
    I18N_6 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_7;
}
else {
    I18N_6 = "Previous";
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_9 = goog.getMsg("Next");
    I18N_8 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_9;
}
else {
    I18N_8 = "Next";
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_11 = goog.getMsg("Next");
    I18N_10 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_11;
}
else {
    I18N_10 = "Next";
}
const _c12 = ["title", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_14 = goog.getMsg("Previous");
    I18N_13 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_14;
}
else {
    I18N_13 = "Previous";
}
const _c15 = ["title", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_17 = goog.getMsg("Next");
    I18N_16 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_17;
}
else {
    I18N_16 = "Next";
}
const _c18 = ["title", I18N_16];
function ExperienceComponent_li_43_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technology_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r25);
} }
const _c19 = function (a1) { return ["fab", a1]; };
function ExperienceComponent_li_43_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", media_r26.http, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", media_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c19, media_r26.icon));
} }
const _c20 = function (a0) { return { "selected": a0 }; };
function ExperienceComponent_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ExperienceComponent_li_43_span_32_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ExperienceComponent_li_43_a_34_Template, 2, 5, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", exp_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c20, i_r22 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r21.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", exp_r21.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", exp_r21.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r21.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r21.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r21.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 18, exp_r21.startAt), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, exp_r21.endAt), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r21.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r21.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r21.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r21.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r21.medias);
} }
const _c21 = function (a0) { return { "disabled": a0 }; };
const _c22 = function () { return ["fas", "chevron-left"]; };
const _c23 = function () { return ["fas", "chevron-right"]; };
class ExperienceComponent extends _core_shared_abstract_swipe_section__WEBPACK_IMPORTED_MODULE_3__["AbstractSwipeSection"] {
    constructor(dataService, sortService, renderer, library) {
        super();
        this.dataService = dataService;
        this.sortService = sortService;
        this.renderer = renderer;
        this.library = library;
        this.SELECTED_CLASS = "selected";
        this.LEAVE_RIGHT_CLASS = "leave-right";
        this.ENTER_RIGHT_CLASS = "enter-right";
        this.LEAVE_LEFT_CLASS = "leave-left";
        this.ENTER_LEFT_CLASS = "enter-left";
        this.TRANSITION_TIME = 400;
        this.experiencesOrdered = [];
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fab"]);
    }
    ngOnInit() {
        // Fetch the Experiences from the Data Service
        this.dataService.getExperiences()
            .subscribe((experiences) => {
            this.currentPosition = experiences.length;
            this.experiences = experiences;
            this.experiencesOrdered = [...experiences];
            this.experiencesOrdered.sort(this.sortService.sort("position", "desc"));
            this.backgroundUrl = this.retrieveBackgroundUrl();
            this.updateMobileNavigationView();
            this.preloadBounderyImages(experiences.map(xp => xp.backgroundUrl));
        });
    }
    disablePreviousNavigation() {
        return this.currentPosition === 1;
    }
    disableNextNavigation() {
        var _a;
        return this.currentPosition === ((_a = this.experiencesOrdered) === null || _a === void 0 ? void 0 : _a.length);
    }
    // Preloads the boundaries images related to the current position in order to avoid the "blinking" of the background while navigating.
    preloadBounderyImages(images) {
        images.forEach(function (image, i) {
            const preloadImages = new Array();
            preloadImages[i] = new Image();
            preloadImages[i].src = image;
        });
    }
    createListSelector(position) {
        return `li[id="${position}"]`;
    }
    onClickPrevious(targetPos) {
        const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.removeClass(currElem, this.SELECTED_CLASS);
        this.renderer.addClass(currElem, this.LEAVE_RIGHT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(currElem, this.LEAVE_RIGHT_CLASS);
        }, this.TRANSITION_TIME);
        // Subtracts one to the current position in order to move backwards in the timeline.
        this.currentPosition = (targetPos ? +targetPos : this.currentPosition - 1);
        this.backgroundUrl = this.retrieveBackgroundUrl();
        const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.addClass(targetElem, this.SELECTED_CLASS);
        this.renderer.addClass(targetElem, this.ENTER_LEFT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(targetElem, this.ENTER_LEFT_CLASS);
        }, this.TRANSITION_TIME);
        this.updateMobileNavigationView();
    }
    onClickNext(targetPos) {
        const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.removeClass(currElem, this.SELECTED_CLASS);
        this.renderer.addClass(currElem, this.LEAVE_LEFT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(currElem, this.LEAVE_LEFT_CLASS);
        }, this.TRANSITION_TIME);
        // Sums one to the current position in order to move further in the timeline.
        this.currentPosition = (targetPos ? +targetPos : this.currentPosition + 1);
        this.backgroundUrl = this.retrieveBackgroundUrl();
        const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.addClass(targetElem, this.SELECTED_CLASS);
        this.renderer.addClass(targetElem, this.ENTER_RIGHT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(targetElem, this.ENTER_RIGHT_CLASS);
        }, this.TRANSITION_TIME);
        this.updateMobileNavigationView();
    }
    updateNavigation(targetPos) {
        // in case of == nothing to do here
        if (targetPos > this.currentPosition) {
            this.onClickNext(targetPos);
        }
        else if (targetPos < this.currentPosition) {
            this.onClickPrevious(targetPos);
        }
    }
    retrieveBackgroundUrl() {
        return this.experiences[this.currentPosition - 1].backgroundUrl;
    }
    updateMobileNavigationView() {
        var _a, _b;
        this.previousYear =
            ((_a = this.experiences[this.currentPosition - 2]) === null || _a === void 0 ? void 0 : _a.startAt) || this.experiences[this.currentPosition - 1].startAt;
        this.currentYear =
            this.experiences[this.currentPosition - 1].startAt;
        this.nextYear =
            ((_b = this.experiences[this.currentPosition]) === null || _b === void 0 ? void 0 : _b.startAt) || this.experiences[this.currentPosition - 1].startAt;
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_sorter_service__WEBPACK_IMPORTED_MODULE_5__["SorterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconLibrary"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], viewQuery: function ExperienceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.orderedList = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 45, vars: 43, consts: [["id", "experience", 1, "landscape"], [1, "overlay"], [1, "container"], [1, "top-container"], [1, "title"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "ngClass", "click"], [1, "icon", 3, "icon", 6, "title"], [1, "devider"], ["href", "javascript:void(0)", 1, "next", 3, "ngClass", "click"], [1, "navigation-mobile"], [1, "molding"], [3, "innerHtml"], [1, "current"], [1, "middle-container", 3, "swipe"], [1, "events-content"], ["orderedList", ""], [3, "ngClass", "id", 4, "ngFor", "ngForOf"], [3, "experiences", "currentPosition", "onTimelineChanged"], [3, "ngClass", "id"], [1, "header-block"], [1, "logo-block"], ["target", "_blank", 3, "href"], [3, "src", "alt"], [1, "info-block"], [1, "company-name"], ["internationalization", "", "property", "role", 1, "role", 3, "data"], [1, "period"], [1, "location"], ["internationalization", "", "property", "city", 1, "city", 3, "data"], ["internationalization", "", "property", "country", 1, "country", 3, "data"], ["internationalization", "", "property", "description", 1, "description", 3, "data"], [1, "technologies"], ["class", "hashtag", 4, "ngFor", "ngForOf"], [1, "social-media"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "hashtag"], [1, "icon", 3, "icon", "title"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_8_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_15_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](17, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](19, _c12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_21_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](27, _c15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_32_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](35, _c18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipe", function ExperienceComponent_Template_div_swipe_39_listener($event) { return ctx.onSwipe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ol", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ExperienceComponent_li_43_Template, 35, 27, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-experience-timeline", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTimelineChanged", function ExperienceComponent_Template_app_experience_timeline_onTimelineChanged_44_listener($event) { return ctx.updateNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.backgroundUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c21, ctx.disablePreviousNavigation()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c21, ctx.disableNextNavigation()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c21, ctx.disablePreviousNavigation()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 19, ctx.previousYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 24, ctx.currentYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c21, ctx.disableNextNavigation()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 29, ctx.nextYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiencesOrdered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experiences", ctx.experiences)("currentPosition", ctx.currentPosition);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceTimelineComponent"], _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_9__["InternationalizationDirective"]], pipes: [_core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_10__["LocalizedDatePipe"], _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_11__["SafariDateFormatterPipe"]], styles: [".overlay[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background: #020024;\n  background: linear-gradient(180deg, rgba(2, 0, 36, 0.6418942577) 0%, rgba(0, 0, 0, 0.7735469188) 25%, rgba(0, 0, 0, 0.9079726891) 75%, rgba(0, 0, 0, 0.9924264706) 100%);\n  width: 100%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  padding-top: 4em;\n  padding-bottom: 8em;\n}\n\n.landscape[_ngcontent-%COMP%] {\n  background-size: cover;\n  top: -4em;\n  position: relative;\n  background-position-x: center;\n  background-position-y: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  max-width: 1400px;\n  -ms-flex-item-align: center;\n      align-self: center;\n  width: 85vw;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n}\n\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n  transition: text-shadow 0.3s linear;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.middle-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-touch-action: pan-y !important;\n      touch-action: pan-y !important;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  text-align: right;\n  color: #fff;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  transition: height 0.4s;\n  min-height: 570px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: left;\n      justify-content: left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  line-height: 50px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 300;\n  line-height: 20px;\n  margin-bottom: 1em;\n  font-style: italic;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-transform: capitalize;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  line-height: 1.5em;\n  font-size: 20px;\n  font-weight: normal;\n  text-align: left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  -ms-transform: translateX(-100%);\n  transform: translateX(-100%);\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  opacity: 1;\n  -ms-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%] {\n  -webkit-animation-name: cd-enter-right;\n  animation-name: cd-enter-right;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-left[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  -webkit-animation-name: cd-enter-left;\n  animation-name: cd-enter-left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 1em;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n  padding: 2px 5px 2px 5px;\n  background-color: #414c73;\n  border-radius: 5px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%]:before {\n  content: \"#\";\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 1em;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #fff;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n\n@-webkit-keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -ms-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n@-webkit-keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -ms-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUxJLG9CQUFBO0VBRUEsYUFBQTtFQU1BLG1CQUFBO0VBQ0Esd0tBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLG9CQUFBO01BQUEsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFJSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBT0EsNkNBQUE7QUNOSjs7QURTQTtFQXhDSSxvQkFBQTtFQUVBLGFBQUE7RUF5Q0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7TUFBQSxrQkFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtNQUFBLGVBQUE7QUNISjs7QURLSTtFQUNJLG9CQUFBO01BQUEsWUFBQTtBQ0hSOztBREtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSFo7O0FEUUk7RUFDSSxhQUFBO0FDTlI7O0FEUVE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNOWjs7QURVSTtFQXpFQSxvQkFBQTtFQUVBLGFBQUE7RUEwRUksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDTFI7O0FET1E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNMWjs7QURRUTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUtBLG1DQUFBO0FDTlo7O0FEUVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDTmhCOztBRFNZO0VBQ0ksMkJBQUE7QUNQaEI7O0FEV1E7RUFDSSxZQUFBO0FDVFo7O0FEWVE7RUFDSSxvQkFBQTtNQUFBLFlBQUE7QUNWWjs7QURhUTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUtBLG1DQUFBO0FDWFo7O0FEYVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDWGhCOztBRGFZO0VBQ0ksMkJBQUE7QUNYaEI7O0FEaUJBO0VBMUlJLG9CQUFBO0VBRUEsYUFBQTtFQTJJQSxrQ0FBQTtNQUFBLDhCQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFHQSx1QkFBQTtFQUNBLGlCQUFBO0FDWFI7O0FEYVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtNQUFBLGVBQUE7QUNYWjs7QURhWTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxtQkFBQTtNQUFBLHFCQUFBO0FDWGhCOztBRGFnQjtFQUNJLFlBQUE7QUNYcEI7O0FEZVk7RUFDSSxvQkFBQTtNQUFBLFlBQUE7QUNiaEI7O0FEaUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNmWjs7QURpQlk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNmaEI7O0FEbUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDakJaOztBRG9CUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ2xCWjs7QURvQlk7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUNsQmhCOztBRHNCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ3BCWjs7QUR1QlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3JCWjs7QUR3QlE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdEJaOztBRHdCWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUdBLGdDQUFBO0VBRUEsNEJBQUE7RUFDQSxnQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsOENBQUE7RUFFQSxzQ0FBQTtBQ3RCaEI7O0FEeUJZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUdBLDRCQUFBO0VBRUEsd0JBQUE7QUN2QmhCOztBRDJCWTtFQUNJLHNDQUFBO0VBRUEsOEJBQUE7QUN6QmhCOztBRDRCWTtFQUNJLHFDQUFBO0VBRUEsNkJBQUE7QUMxQmhCOztBRDZCWTtFQUNJLG9DQUFBO0VBRUEsNEJBQUE7QUMzQmhCOztBRCtCUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7RUFDQSxtQkFBQTtNQUFBLGVBQUE7RUFDQSxlQUFBO0FDN0JaOztBRCtCWTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUM3QmhCOztBRCtCZ0I7RUFDSSxZQUFBO0FDN0JwQjs7QURrQ1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNoQ1o7O0FEa0NZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDaENoQjs7QURrQ2dCO0VBQ0ksZUFBQTtBQ2hDcEI7O0FEa0NnQjtFQUNJLGNBQUE7QUNoQ3BCOztBRHVDQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG1DQUFBO0VDcENOO0VEc0NFO0lBQ0ksVUFBQTtJQUNBLGlDQUFBO0VDcENOO0FBQ0Y7O0FENEJBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbUNBQUE7RUNwQ047RURzQ0U7SUFDSSxVQUFBO0lBQ0EsaUNBQUE7RUNwQ047QUFDRjs7QURrREE7RUFDSTtJQUNJLFVBQUE7SUFHQSwrQkFBQTtJQUVBLDJCQUFBO0VDdENOO0VEd0NFO0lBQ0ksVUFBQTtJQUdBLDZCQUFBO0lBRUEseUJBQUE7RUN0Q047QUFDRjs7QUR5Q0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtFQ3ZDTjtFRHlDRTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQ3ZDTjtBQUNGOztBRCtCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0VDdkNOO0VEeUNFO0lBQ0ksVUFBQTtJQUNBLGlDQUFBO0VDdkNOO0FBQ0Y7O0FEcURBO0VBQ0k7SUFDSSxVQUFBO0lBR0EsZ0NBQUE7SUFFQSw0QkFBQTtFQ3pDTjtFRDJDRTtJQUNJLFVBQUE7SUFHQSw2QkFBQTtJQUVBLHlCQUFBO0VDekNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm92ZXJsYXkge1xuICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcblxuICAgIGJhY2tncm91bmQ6IHJnYigyLCAwLCAzNik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyLCAwLCAzNiwgMC42NDE4OTQyNTc3MDMwODEzKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjc3MzU0NjkxODc2NzUwNykgMjUlLCByZ2JhKDAsIDAsIDAsIDAuOTA3OTcyNjg5MDc1NjMwMykgNzUlLCByZ2JhKDAsIDAsIDAsIDAuOTkyNDI2NDcwNTg4MjM1MykgMTAwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOGVtO1xufVxuXG4ubGFuZHNjYXBlIHtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0b3A6IC00ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICBcbiAgICAvLyBUaGlzIGlzIHN1cHBvcnRlZCBuYXRpdmVseSBieSBDaHJvbWUsIE9wZXJhIGFuZCBTYWZhcmkuIEZpcmVmb3ggYW5kIElFIGhhc24ndCBpbXBsZW1lbnRlZCBpdCB5ZXQgKGJ1Z3ppbC5sYSkuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogODV2dztcbn1cblxuLnRvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZmxleC1ncm93OiA0O1xuXG4gICAgICAgICYgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERpc2FibGVkIGZvciBkZXNrdG9wIHJlc29sdXRpb25zIG9yIGhpZ2hlci5cbiAgICAubmF2aWdhdGlvbi1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHJldmlvdXMge1xuICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICBcbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpZGVyIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1pZGRsZS1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcblxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXkgIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU3MHB4O1xuXG4gICAgICAgIC5oZWFkZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgLmxvZ28tYmxvY2sge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmluZm8tYmxvY2sge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucm9sZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cblxuICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBvbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRGVmaW5lcyB0aGUgYW5pbWF0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBvcmRlcmVkIGxpc3QuXG4gICAgICAgICAgICBsaS5lbnRlci1yaWdodCwgbGkubGVhdmUtcmlnaHQge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkuZW50ZXItbGVmdCwgbGkubGVhdmUtbGVmdCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaS5sZWF2ZS1yaWdodCwgbGkubGVhdmUtbGVmdCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRlY2hub2xvZ2llcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICAgICAgc3Bhbi5oYXNodGFnIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNGM3MztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcjJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODdhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBjZC1lbnRlci1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59IiwiLm92ZXJsYXkge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICMwMjAwMjQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMiwgMCwgMzYsIDAuNjQxODk0MjU3NykgMCUsIHJnYmEoMCwgMCwgMCwgMC43NzM1NDY5MTg4KSAyNSUsIHJnYmEoMCwgMCwgMCwgMC45MDc5NzI2ODkxKSA3NSUsIHJnYmEoMCwgMCwgMCwgMC45OTI0MjY0NzA2KSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDhlbTtcbn1cblxuLmxhbmRzY2FwZSB7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0b3A6IC00ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogODV2dztcbn1cblxuLnRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRvcC1jb250YWluZXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiA0O1xufVxuLnRvcC1jb250YWluZXIgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4udG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91cyB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91cy5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgb3BhY2l0eTogMC42O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91czpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG59XG4udG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAuZGV2aWRlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0IHtcbiAgZmxleC1ncm93OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0LmRpc2FibGVkIHtcbiAgY3Vyc29yOiBuby1kcm9wO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm5leHQ6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG59XG5cbi5taWRkbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuICBtaW4taGVpZ2h0OiA1NzBweDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuaGVhZGVyLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5oZWFkZXItYmxvY2sgLmxvZ28tYmxvY2sge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIGltZyB7XG4gIGhlaWdodDogOTBweDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuaGVhZGVyLWJsb2NrIC5pbmZvLWJsb2NrIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5jb21wYW55LW5hbWUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5jb21wYW55LW5hbWUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnJvbGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAucGVyaW9kIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5wZXJpb2Qgc3BhbiB7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAubG9jYXRpb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCBvbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCBvbCBsaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCBvbCAuc2VsZWN0ZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkuZW50ZXItcmlnaHQsIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCBvbCBsaS5sZWF2ZS1yaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IG9sIGxpLmVudGVyLWxlZnQsIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCBvbCBsaS5sZWF2ZS1sZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkubGVhdmUtcmlnaHQsIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCBvbCBsaS5sZWF2ZS1sZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnRlY2hub2xvZ2llcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC50ZWNobm9sb2dpZXMgc3Bhbi5oYXNodGFnIHtcbiAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0YzczO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAudGVjaG5vbG9naWVzIHNwYW4uaGFzaHRhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIiNcIjtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5zb2NpYWwtbWVkaWEgLmljb246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICM4MDg3YTE7XG59XG5cbkBrZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjZC1lbnRlci1sZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgY2QtZW50ZXItbGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjZC1lbnRlci1sZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufSJdfQ== */", "@media screen and (max-width: 1024px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  .landscape[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n  }\n}\n@media screen and (max-width: 880px) {\n  .top-container[_ngcontent-%COMP%] {\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 0 30px 0;\n    text-align: center;\n  }\n\n  .middle-container[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .overlay[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n    padding-top: 6em;\n  }\n\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    text-align: center;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #fff;\n    display: inline-block;\n    padding: 10px 1em 10px 1em;\n    border-radius: 10px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    -ms-flex-item-align: center;\n        align-self: center;\n    font-size: 35px;\n    font-weight: 600;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 2em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    padding: 10px 5px 10px 6px;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS1jb21wb25lbnQucmVwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUlRO0lBQ0ksZUFBQTtFQ1ZWO0VEYU07SUFDSSxlQUFBO0VDWFY7O0VEbUJVO0lBQ0ksZUFBQTtFQ2hCZDtFRG1CVTtJQUNJLGVBQUE7RUNqQmQ7RURvQlU7SUFDSSxlQUFBO0VDbEJkO0VEc0JNO0lBQ0ksZUFBQTtFQ3BCVjtFRHVCTTtJQUNJLGVBQUE7RUNyQlY7O0VEeUJFO0lBQ0ksNkJBQUE7RUN0Qk47QUFDRjtBRHlCQTtFQUVJO0lBQ0ksMEJBQUE7UUFBQSxzQkFBQTtFQ3hCTjtFRDBCTTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7RUN4QlY7O0VENEJFO0lBQ0ksZ0JBQUE7RUN6Qk47RUQyQk07SUFDSSxlQUFBO0VDekJWO0FBQ0Y7QUQ2QkE7RUFFSTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUM1Qk47O0VEaUNNO0lBOUVKLG9CQUFBO0lBRUEsYUFBQTtJQStFUSx1QkFBQTtRQUFBLG1CQUFBO0lBQ0EscUJBQUE7UUFBQSxpQkFBQTtJQUNBLGtCQUFBO0VDM0JWO0VENkJVO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtJQUNBLDBCQUFBO0lBQ0EsbUJBQUE7RUMzQmQ7RUQ2QmM7SUFDSSxXQUFBO0VDM0JsQjtFRCtCVTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtJQUNBLGVBQUE7RUM3QmQ7RUQrQmM7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDN0JsQjtFRGdDYztJQUNJLDJCQUFBO0VDOUJsQjtFRGtDVTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtJQUNBLDJCQUFBO1FBQUEsa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNoQ2Q7RURtQ1U7SUFDSSxvQkFBQTtRQUFBLFlBQUE7SUFDQSxlQUFBO0VDakNkO0VEbUNjO0lBQ0ksZUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQ2pDbEI7RURtQ2M7SUFDSSwyQkFBQTtFQ2pDbEI7RUR1Q007SUFDSSxhQUFBO0VDckNWOztFRDZDVTtJQUNJLGVBQUE7RUMxQ2Q7RUQ2Q1U7SUFDSSxxQkFBQTtRQUFBLHVCQUFBO0VDM0NkO0VEOENVO0lBQ0ksa0JBQUE7RUM1Q2Q7RUQrQ1U7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUM3Q2Q7RUQrQ2M7SUFDSSxlQUFBO0VDN0NsQjtBQUNGO0FEbURBO0VBSVE7SUFDSSxlQUFBO0VDcERWO0VEeURVO0lBQ0ksZUFBQTtFQ3ZEZDtFRDBEVTtJQUNJLDBCQUFBO0VDeERkOztFRGlFVTtJQUNJLFlBQUE7RUM5RGQ7RURpRVU7SUFDSSxlQUFBO0VDL0RkO0VEa0VVO0lBQ0ksZUFBQTtFQ2hFZDtFRG1FVTtJQUNJLGVBQUE7RUNqRWQ7RURtRWM7SUFDSSxlQUFBO0VDakVsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNvbXBvbmVudC5yZXBvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIFxuICAgIC50b3AtY29udGFpbmVyIHtcblxuICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuXG4gICAgICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJvbGUsIC5wZXJpb2QsIC5sb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZWNobm9sb2dpZXMgc3Bhbi5oYXNodGFnIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxhbmRzY2FwZSB7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcblxuICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgXG4gICAgLm92ZXJsYXkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogNmVtO1xuICAgIH1cbiAgICBcbiAgICAudG9wLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcblxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAubW9sZGluZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxZW0gMTBweCAxZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmV2aW91cyB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRGlzYWJsZWQgZm9yIG1vYmlsZSByZXNvbHV0aW9ucy5cbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb21wYW55LW5hbWUsIC5yb2xlLCAucGVyaW9kLCAubG9jYXRpb24ge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcblxuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcblxuICAgIC50b3AtY29udGFpbmVyIHtcblxuICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgICBcbiAgICAgICAgICAgIC5jdXJyZW50IHsgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDsgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLm1vbGRpbmcge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNnB4OyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICAgICAgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZWNobm9sb2dpZXMgc3Bhbi5oYXNodGFnIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnRvcC1jb250YWluZXIgLnRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuY29tcGFueS1uYW1lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5yb2xlLCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnBlcmlvZCwgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAudGVjaG5vbG9naWVzIHNwYW4uaGFzaHRhZyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuXG4gIC5sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAudG9wLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAudGl0bGUgaDEge1xuICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAub3ZlcmxheSB7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICBwYWRkaW5nLXRvcDogNmVtO1xuICB9XG5cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLm1vbGRpbmcge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMWVtIDEwcHggMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5tb2xkaW5nIHNwYW4ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAucHJldmlvdXMge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5wcmV2aW91cy5kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBuby1kcm9wO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLnByZXZpb3VzOmhvdmVyIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5jdXJyZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAubmV4dCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLm5leHQuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5uZXh0OmhvdmVyIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmNvbXBhbnktbmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmNvbXBhbnktbmFtZSwgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5yb2xlLCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnBlcmlvZCwgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5sb2NhdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC50b3AtY29udGFpbmVyIC50aXRsZSBoMSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAuY3VycmVudCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAubW9sZGluZyB7XG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA2cHg7XG4gIH1cblxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayBpbWcge1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC50ZWNobm9sb2dpZXMgc3Bhbi5oYXNodGFnIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5zb2NpYWwtbWVkaWEge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-experience",
                templateUrl: "./experience.component.html",
                styleUrls: ["./experience.component.scss", "experience-component.reponsivity.scss"]
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _core_sorter_service__WEBPACK_IMPORTED_MODULE_5__["SorterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconLibrary"] }]; }, { orderedList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["orderedList"]
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.module.ts":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience-timeline/experience-timeline.component */ "./src/app/experience/experience-timeline/experience-timeline.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");







class ExperienceModule {
}
ExperienceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExperienceModule });
ExperienceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExperienceModule_Factory(t) { return new (t || ExperienceModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExperienceModule, { declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceTimelineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]], exports: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]],
                declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceTimelineComponent"]],
                exports: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class FooterComponent {
    constructor() {
    }
    ngOnInit() {
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithubSquare"];
        this.year = new Date();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 5, consts: [["itemscope", "", "itemtype", "https://schema.org/WPFooter"], [1, "fork-github"], ["href", "https://github.com/SusmithBarigidad/SusmithBarigidad.github.io", "target", "_blank"], [1, "icon", 3, "icon"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fork on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithubSquare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 2, ctx.year, "yyyy"), " \u00A9 Copyright");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["footer[_ngcontent-%COMP%] {\n    background-color: #3a5f8e;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.fork-github[_ngcontent-%COMP%] {\n    text-align: left;\n    font-weight: 500;\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n}\n\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    text-decoration: none;\n}\n\n.fork-github[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 0.5em;\n}\n\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #fff;\n}\n\n.copyright[_ngcontent-%COMP%] {\n    text-align: right;\n    color: #fff;\n    font-weight: 600;\n}\n\np[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG1CQUFlO1FBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQVk7UUFBWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ZjhlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9yay1naXRodWIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5mb3JrLWdpdGh1YiBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JrLWdpdGh1YiBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5mb3JrLWdpdGh1YiBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbn0iXX0= */", "@media screen and (max-width: 500px) {\n\n    .copyright[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n}\n\n@media screen and (max-width: 370px) {\n\n    .fork-github[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    .copyright[_ngcontent-%COMP%] {\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksb0JBQVk7WUFBWixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuXG4gICAgLmZvcmstZ2l0aHViIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-footer",
                templateUrl: "./footer.component.html",
                styleUrls: ["./footer.component.css", "./footer.component.responsivity.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-navigator-share */ "./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






const _c0 = ["nav"];
const _c1 = ["shareBtn"];
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_aboutMe$$SRC_APP_HEADER_HEADER_COMPONENT_TS_3 = goog.getMsg("{$startTagSpan}About me{$closeTagSpan}", { "startTagSpan": "\uFFFD#12\uFFFD", "closeTagSpan": "\uFFFD/#12\uFFFD" });
    I18N_2 = MSG_EXTERNAL_aboutMe$$SRC_APP_HEADER_HEADER_COMPONENT_TS_3;
}
else {
    I18N_2 = "About me";
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_experiences$$SRC_APP_HEADER_HEADER_COMPONENT_TS_5 = goog.getMsg("{$startTagSpan}Experiences{$closeTagSpan}", { "startTagSpan": "\uFFFD#16\uFFFD", "closeTagSpan": "\uFFFD/#16\uFFFD" });
    I18N_4 = MSG_EXTERNAL_experiences$$SRC_APP_HEADER_HEADER_COMPONENT_TS_5;
}
else {
    I18N_4 = "Experiences";
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_projects$$SRC_APP_HEADER_HEADER_COMPONENT_TS_7 = goog.getMsg("{$startTagSpan}Projects{$closeTagSpan}", { "startTagSpan": "\uFFFD#20\uFFFD", "closeTagSpan": "\uFFFD/#20\uFFFD" });
    I18N_6 = MSG_EXTERNAL_projects$$SRC_APP_HEADER_HEADER_COMPONENT_TS_7;
}
else {
    I18N_6 = "Projects";
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_contact$$SRC_APP_HEADER_HEADER_COMPONENT_TS_9 = goog.getMsg("{$startTagSpan}Contact{$closeTagSpan}", { "startTagSpan": "\uFFFD#24\uFFFD", "closeTagSpan": "\uFFFD/#24\uFFFD" });
    I18N_8 = MSG_EXTERNAL_contact$$SRC_APP_HEADER_HEADER_COMPONENT_TS_9;
}
else {
    I18N_8 = "Contact";
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_open_as_pdf$$SRC_APP_HEADER_HEADER_COMPONENT_TS_11 = goog.getMsg("Open Resume as PDF");
    I18N_10 = MSG_EXTERNAL_open_as_pdf$$SRC_APP_HEADER_HEADER_COMPONENT_TS_11;
}
else {
    I18N_10 = "Open Resume as PDF";
}
const _c12 = ["title", I18N_10];
class HeaderComponent {
    constructor(locale, renderer, ngNavigatorShareService) {
        this.locale = locale;
        this.renderer = renderer;
        this.ngNavigatorShareService = ngNavigatorShareService;
    }
    // use getter setter to define the properties
    get activeSection() {
        return this._activeSection;
    }
    get pageXOffset() {
        return this._pageXOffset;
    }
    set pageXOffset(value) {
        this._pageXOffset = value;
        this.onDetectScreenSize();
    }
    set activeSection(value) {
        this._activeSection = value;
        this.updateNavigation();
    }
    ngAfterViewInit() {
        // Share button available only for browsers that do support it.
        if (this.ngNavigatorShareService.canShare()) {
            this.shareBtn.nativeElement.style.display = "block";
        }
    }
    ngOnInit() {
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.faShareAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShareAlt"];
        this.faCloudDownloadAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCloudDownloadAlt"];
    }
    updateNavigation() {
        if (this._activeSection && this.renderer) {
            // Remove any selected anchor
            const activePreviousElem = this.nav.nativeElement.querySelector("a.active");
            if (activePreviousElem) {
                this.renderer.removeClass(activePreviousElem, "active");
            }
            const targetElem = this.nav.nativeElement.querySelector(`a[href^="#${this._activeSection}"]`);
            if (targetElem) {
                this.renderer.addClass(targetElem, "active");
            }
        }
    }
    /*
     * For media types such as tablets and mobile devices, the nav-bar navigation should be
     * collapsed by default.
    */
    onDetectScreenSize() {
        this.hasMenuToggled = this.pageXOffset > 1024;
    }
    onToggleBar() {
        this.hasMenuToggled = !this.hasMenuToggled;
    }
    resetMenu() {
        this.hasMenuToggled = this.pageXOffset > 1024;
    }
    share() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.ngNavigatorShareService.share({
                    title: "Live Resume - Guilherme Borges Bastos",
                    text: "Hello, I'm a Full-stack Java Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!",
                    url: "https://guilhermeborgesbastos.com"
                });
            }
            catch (error) {
                console.log("You app is not shared, reason: ", error);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__["NgNavigatorShareService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.shareBtn = _t.first);
    } }, inputs: { pageXOffset: "pageXOffset", activeSection: "activeSection" }, decls: 29, vars: 3, consts: [["itemscope", "", "itemtype", "https://schema.org/WPHeader"], [1, "child", "navbar-toggle"], [1, "bar-icon", 3, "icon", "click"], ["itemprop", "brand", "itemscope", "", "itemtype", "https://schema.org/Brand", 1, "child", "logo-container"], ["href", "#", "itemprop", "name", "itemprop", "logo", 1, "logo", 3, "click"], ["itemscope", "", "itemtype", "https://schema.org/SiteNavigationElement", 1, "child", "nav-container", 3, "hidden"], ["nav", ""], ["href", "#about", "itemprop", "url", 3, "click"], ["itemprop", "name"], ["href", "#experience", "itemprop", "url", 3, "click"], ["href", "#projects", "itemprop", "url", 3, "click"], ["href", "#contact", "itemprop", "url", 3, "click"], ["href", "https://drive.google.com/file/d/17MbRiGiOsGIXGUcb5NlvZz_7ilu3wU3K/view?usp=sharing", "target", "_blank", 3, "click", 6, "title"], [1, "bar-icon", 3, "icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_2_listener() { return ctx.onToggleBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Susmith Barigidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](11, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](15, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](19, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](23, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](27, _c12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faBars);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.hasMenuToggled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faCloudDownloadAlt);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["@charset \"UTF-8\";\nheader[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background: transparent;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  max-width: 1400px;\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  text-align: left;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 125px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 35px;\n  font-weight: 700;\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n  -ms-flex-positive: 5;\n      flex-grow: 5;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-align: center;\n      align-items: center;\n  height: 52px;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 1em;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 600;\n  color: #222f5c;\n  padding: 14px;\n  border-radius: 15px;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #fff;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #222f5c;\n  color: #fff;\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 52px;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: inline-block;\n  height: 25px;\n  margin: 14px 0 0 0;\n  border-right: 2px solid #bfbfbf3b;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 15px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 600;\n  color: #222f5c59;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before {\n  content: \"\u202F\u202D\";\n}\nheader[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: none;\n  -ms-flex-pack: center;\n      justify-content: center;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 10px;\n  background-color: #fff;\n  padding: 11px;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #4e5562;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBREVKO0FDQUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBREVSO0FDQ0k7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxnQkFBQTtBRENSO0FDQ1E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURDWjtBQ0dJO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZ0JBQUE7QUREUjtBQ0dRO0VBQ0ksa0JBQUE7TUFBQSx5QkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxZQUFBO0FERFo7QUNHWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUREaEI7QUNHZ0I7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FERHBCO0FDR29CO0VBQ0ksc0JBQUE7RUFFQSwrQ0FBQTtBRER4QjtBQ0tnQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FESHBCO0FDV1E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSwrQ0FBQTtBRFRaO0FDV1k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QURUaEI7QUNXZ0I7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FEVHBCO0FDV29CO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURUeEI7QUNXd0I7RUFDSSxjQUFBO0FEVDVCO0FDYW9CO0VBQ0ksY0FBQTtBRFh4QjtBQ2NvQjtFQUNJLGtCQUFBO0FEWnhCO0FDZ0JnQjtFQUNJLGFBQUE7QURkcEI7QUNvQkk7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLGVBQUE7QURsQlI7QUNxQkk7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtBRHBCUjtBQ3NCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FEcEJaO0FDc0JZO0VBQ0ksY0FBQTtBRHBCaEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbmhlYWRlciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuaGVhZGVyIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmhlYWRlciAuY2hpbGQubG9nby1jb250YWluZXIgYSB7XG4gIHdpZHRoOiAxMjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjIyZjVjO1xufVxuaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHtcbiAgZmxleC1ncm93OiA1O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MnB4O1xufVxuaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbmhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1YztcbiAgcGFkZGluZzogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbmhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xufVxuaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZjVjO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG59XG5oZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwge1xuICBoZWlnaHQ6IDUycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMTRweCAwIDAgMDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjJmNWM1OTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbmhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG5oZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjIyZjVjO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbmhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAr+KArVwiO1xufVxuaGVhZGVyIC5jaGlsZC5uYXZiYXItdG9nZ2xlIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIC5pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzRlNTU2Mjtcbn1cbmhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMyMjJmNWM7XG59IiwiaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZ3JvdzogNTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTJweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAgICAgICAgICAgICAgICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xuXG4gICAgICAgIC5mcmFtZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpOyBcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG5cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM1OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXDIwMmZcXDIwMmRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICAgICAgLy8gdmlzaWJsZSBvbmx5IGZvciBtb2JpbGUgYnJvd3NlcnMgdGhhdCBhY2NlcHQgc2hhcmUgaW50ZW50LlxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzRlNTU2MjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbn0iXX0= */", "@charset \"UTF-8\";\n@media screen and (max-width: 1420px) {\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    margin-right: 1em;\n  }\n}\n@media screen and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 0 0 15px 15px;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n    padding: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    -ms-flex-positive: 4;\n        flex-grow: 4;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n    -ms-flex-order: 5;\n        order: 5;\n    border-top: 2px solid #bfbfbf1a;\n    padding-top: 1em;\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    -ms-flex-flow: column;\n        flex-flow: column;\n    height: inherit;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    line-height: 35px;\n    padding-left: 1em;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #5e81abbd;\n    padding-left: 25px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #222f5c;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n    content: \"\u2022\";\n    font-size: 50px;\n    position: absolute;\n    color: #5e81abbd;\n    margin-top: -4px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 0;\n    -ms-flex-positive: initial;\n        flex-grow: initial;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n    background-color: transparent;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media screen and (max-width: 500px) {\n  header[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 21px;\n    margin: 15px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n}\n@media screen and (max-width: 460px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n}\n@media screen and (max-width: 380px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 0;\n    border-radius: 0;\n    margin-right: 5px;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCIvbW50L2MvVXNlcnMvc3VzbWkvRGVza3RvcC9lUG9ydGZvbGlvL2xpdmUtcmVzdW1lL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBSVE7SUFDSSxrQkFBQTtFRERWO0VDSU07SUFDSSxrQkFBQTtFREZWO0VDS007SUFDSSxpQkFBQTtFREhWO0FBQ0Y7QUNPQTtFQUVJO0lBQ0ksZ0JBQUE7SUFDQSw0QkFBQTtJQUVBLCtDQUFBO0lBQ0EsYUFBQTtFRE5OO0VDUU07SUFDSSxvQkFBQTtRQUFBLFlBQUE7RUROVjtFQ1NNO0lBQ0ksaUJBQUE7UUFBQSxRQUFBO0lBQ0EsK0JBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO1FBQUEsZ0JBQUE7RURQVjtFQ1NVO0lBQ0kscUJBQUE7UUFBQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtRQUFBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFRFBkO0VDV2tCO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RURUdEI7RUNXc0I7SUFDSSxjQUFBO0lBR0EsZ0JBQUE7RURUMUI7RUNZc0I7SUFDSSxzQkFBQTtJQUNBLGNBQUE7RURWMUI7RUNhc0I7SUFDSSxnQkFBQTtFRFgxQjtFQ2VrQjtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VEYnRCO0VDZWtCO0lBQ0ksY0FBQTtFRGJ0QjtFQ21CTTtJQUNJLGVBQUE7SUFDQSwwQkFBQTtRQUFBLGtCQUFBO0VEakJWO0VDbUJVO0lBQ0ksNkJBQUE7SUFHQSxnQkFBQTtFRGpCZDtFQ3FCTTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHNCQUFBO1FBQUEsbUJBQUE7SUFDQSxxQkFBQTtRQUFBLHVCQUFBO0VEbkJWO0VDcUJVO0lBQ0ksZUFBQTtFRG5CZDtBQUNGO0FDd0JBO0VBRUk7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxzQkFBQTtRQUFBLG1CQUFBO0lBQ0EscUJBQUE7UUFBQSx1QkFBQTtFRHZCTjtFQ3lCTTtJQUNJLGVBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0VEdkJWO0VDNEJVO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUNBQUE7RUQxQmQ7RUM0QmM7SUFDSSxlQUFBO0lBQ0EsY0FBQTtFRDFCbEI7RUMrQk07SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUQ3QlY7RUMrQlU7SUFDSSxlQUFBO0VEN0JkO0FBQ0Y7QUNtQ0E7RUFJUTtJQUNJLGVBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0VEcENWO0VDdUNNO0lBQ0ksZUFBQTtFRHJDVjtFQ3dDTTtJQUNJLGVBQUE7RUR0Q1Y7RUN5Q007SUFDSSxZQUFBO0VEdkNWO0VDeUNVO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUNBQUE7RUR2Q2Q7RUN5Q2M7SUFDSSxlQUFBO0lBQ0EsYUFBQTtFRHZDbEI7QUFDRjtBQzhDQTtFQUlRO0lBQ0ksZUFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7RUQvQ1Y7RUNrRE07SUFDSSxlQUFBO0VEaERWO0VDbURNO0lBQ0ksZUFBQTtFRGpEVjtFQ29ETTtJQUNJLFlBQUE7RURsRFY7RUNvRFU7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQ0FBQTtFRGxEZDtFQ29EYztJQUNJLGVBQUE7SUFDQSxhQUFBO0VEbERsQjtFQ3VETTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RURyRFY7RUN1RFU7SUFDSSxlQUFBO0VEckRkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MjBweCkge1xuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubG9nby1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gICAgZmxleC1ncm93OiA0O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB7XG4gICAgb3JkZXI6IDU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNiZmJmYmYxYTtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzVlODFhYmJkO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICMyMjJmNWM7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzIyMmY1YztcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYTpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCLigKJcIjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjNWU4MWFiYmQ7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGk6aG92ZXI6OmJlZm9yZSB7XG4gICAgY29sb3I6ICMyMjJmNWM7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBmbGV4LWdyb3c6IGluaXRpYWw7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXZiYXItdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSB7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5zaGFyZS1jb250YWluZXIgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgaGVhZGVyIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I3YzYxZjtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxvZ28tY29udGFpbmVyIGEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDAgMCAwO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIGhlYWRlciAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiN2M2MWY7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sb2dvLWNvbnRhaW5lciBhIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwge1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDhweCAwIDAgMDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDAgOHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XG5cbiAgICBoZWFkZXIge1xuXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTsgXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBvcmRlcjogNTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYmZiZmJmMWE7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcblxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcblxuICAgICAgICAgICAgICAgIGxpIHtcblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU4MWFiYmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7ICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcMjAyMic7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVlODFhYmJkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogaW5pdGlhbDtcblxuICAgICAgICAgICAgLmZyYW1lIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAuYmFyLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIGhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiN2M2MWY7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xuXG4gICAgICAgICAgICAuZnJhbWUgdWwgbGkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMCAwIDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xuXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBcbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I3YzYxZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMCAwIDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xuICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgXG4gICAgICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiN2M2MWY7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcbiAgICBcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.scss", "./header.component.responsivity.scss"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__["NgNavigatorShareService"] }]; }, { nav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["nav"]
        }], shareBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["shareBtn"]
        }], pageXOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeSection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/projects/projects-carousel/projects-carousel.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projects/projects-carousel/projects-carousel.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsCarouselComponent", function() { return ProjectsCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc projects
     */ 
    const MSG_EXTERNAL_of$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS_1 = goog.getMsg("of");
    I18N_0 = MSG_EXTERNAL_of$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS_1;
}
else {
    I18N_0 = "of";
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_projects$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS_3 = goog.getMsg("projects");
    I18N_2 = MSG_EXTERNAL_projects$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS_3;
}
else {
    I18N_2 = "Projects";
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc projects
     */ 
    const MSG_EXTERNAL_readMore$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS__5 = goog.getMsg("Read more");
    I18N_4 = MSG_EXTERNAL_readMore$$SRC_APP_PROJECTS_PROJECTS_CAROUSEL_PROJECTS_CAROUSEL_COMPONENT_TS__5;
}
else {
    I18N_4 = "Read more";
}
function ProjectsCarouselComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "meta", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "meta", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "meta", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "meta", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r29.http, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + project_r29.thumbnail + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", project_r29.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", project_r29.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, project_r29.date), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", project_r29.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", project_r29.internationalizations);
} }
const _c6 = function (a0) { return { "partial": a0 }; };
class ProjectsCarouselComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this._projects = [];
        this._originalProjects = [];
        this.onResultsPerPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(value) {
        if (value) {
            this._currentPage = value;
            this.populateCarousel();
        }
    }
    get projects() {
        return this._projects;
    }
    set projects(value) {
        if (value) {
            this._originalProjects = value;
            this.onResizeElement();
        }
    }
    ngOnInit() { }
    onResize() {
        this.onResizeElement();
    }
    onResizeElement() {
        this.elWidth = this.elRef.nativeElement.clientWidth;
        this.resultsPerPage = Math.ceil(this.elWidth / 465);
        this.populateCarousel();
    }
    populateCarousel() {
        if (this._currentPage && this._projects) {
            this.start = (this._currentPage - 1) * this.resultsPerPage;
            this.end = this._currentPage * this.resultsPerPage;
            this._projects = this._originalProjects.slice(this.start, this.end);
            this._projects.sort((a, b) => +new Date(b.date) - +new Date(a.date));
            this.onResultsPerPageChanged.emit(this.resultsPerPage);
        }
    }
}
ProjectsCarouselComponent.ɵfac = function ProjectsCarouselComponent_Factory(t) { return new (t || ProjectsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ProjectsCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsCarouselComponent, selectors: [["app-projects-carousel"]], hostBindings: function ProjectsCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ProjectsCarouselComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { currentPage: "currentPage", projects: "projects" }, outputs: { onResultsPerPageChanged: "onResultsPerPageChanged" }, decls: 19, vars: 7, consts: [["itemscope", "", "itemtype", "https://schema.org/Article", 1, "events-content"], ["itemprop", "publisher", "content", "Guilherme Borges Bastos"], ["itemprop", "author", "content", "Guilherme Borges Bastos"], [3, "ngClass"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle", 4, "ngFor", "ngForOf"], [1, "paginator"], [1, "range"], [1, "start"], [1, "devider"], [1, "end"], [1, "label"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle"], ["itemprop", "item", 1, "card"], ["rel", "nofollow", "target", "_blank", "itemprop", "url", 3, "href"], [1, "thumbnail"], ["itemprop", "thumbnailUrl", 3, "content"], ["itemprop", "image", 3, "content"], ["itemprop", "datePublished", 1, "date"], [1, "content"], ["itemprop", "creator", "content", "Guilherme Borges Bastos"], ["internationalization", "", "property", "title", "itemprop", "name", "itemprop", "headline", 1, "title", 3, "data"], ["internationalization", "", "property", "description", "ellipsis", "275", "itemprop", "description", 1, "description", 3, "data"], [1, "read-more"]], template: function ProjectsCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsCarouselComponent_li_4_Template, 20, 14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](18, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c6, ctx._projects.length < 3 && ctx.currentPage >= ctx._originalProjects.length / ctx.resultsPerPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.start + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.end > (ctx._originalProjects == null ? null : ctx._originalProjects.length) ? ctx._originalProjects == null ? null : ctx._originalProjects.length : ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._originalProjects == null ? null : ctx._originalProjects.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_5__["InternationalizationDirective"]], pipes: [_core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocalizedDatePipe"], _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__["SafariDateFormatterPipe"]], styles: [".events-content[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n  position: relative;\n  width: 100%;\n  transition: height 0.4s;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  cursor: pointer;\n  background-color: #fff;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(240, 223, 223, 0.16);\n  border: 1px solid #c8cad547;\n  transition: all 0.2s ease-in-out;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 170px;\n  background-color: #c1c7dc;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  position: relative;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 5px 5px 0 5px;\n  border-radius: 10px 0 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1em;\n  min-height: 245px;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #222f5c;\n  font-weight: 600;\n  font-size: 18px;\n  text-align: left;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  line-height: 1.5em;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #3d4870;\n  cursor: pointer;\n  margin: 0 15px 15px 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%]:hover {\n  background-color: #ededef;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  -ms-transform: scale(1.025);\n      transform: scale(1.025);\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%] {\n  -ms-flex-pack: start;\n      justify-content: start;\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #222f5c;\n  font-style: italic;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 5px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy1jYXJvdXNlbC9wcm9qZWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMtY2Fyb3VzZWwvcHJvamVjdHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtNQUFBLDZCQUFBO0FDQ1I7QURDUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNDWjtBRENZO0VBQ0ksZUFBQTtBQ0NoQjtBREdRO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FDRFo7QURHWTtFQUNJLHFCQUFBO0FDRGhCO0FESVk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNGaEI7QURJZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZwQjtBRE1ZO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDSmhCO0FETWdCO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pwQjtBRE9nQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTHBCO0FEU1k7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDUGhCO0FEU2dCO0VBQ0kseUJBQUE7QUNQcEI7QURXWTtFQUNJLDJCQUFBO01BQUEsdUJBQUE7QUNUaEI7QURZUTtFQUNJLG9CQUFBO01BQUEsc0JBQUE7QUNWWjtBRFlZO0VBQ0ksZ0JBQUE7QUNWaEI7QURlSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDYlI7QURlUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ2JaO0FEZ0JRO0VBQ0ksZ0JBQUE7QUNkWjtBRGlCUTtFQUNJLHlCQUFBO0FDZloiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy1jYXJvdXNlbC9wcm9qZWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudHMtY29udGVudCB7XG4gICAgZmxleC1ncm93OiA0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcblxuICAgIG9sIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgyNDAsIDIyMywgMjIzLCAwLjE2KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGNhZDU0NztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzdkYztcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDAgNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNDVweDtcblxuICAgICAgICAgICAgICAgIGgyLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVlNjc4ODtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uLnJlYWQtbW9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNkNDg3MDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggMTVweCAwO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnBhcnRpYWwge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZXZlbnRzLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5ldmVudHMtY29udGVudCBvbCAuY2FyZCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgyNDAsIDIyMywgMjIzLCAwLjE2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4Y2FkNTQ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5ldmVudHMtY29udGVudCBvbCAuY2FyZCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2RjO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwgLmRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG4gIG1pbi1oZWlnaHQ6IDI0NXB4O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IGgyLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICMyMjJmNWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCBwLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzVlNjc4ODtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIGJ1dHRvbi5yZWFkLW1vcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzZDQ4NzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDE1cHggMTVweCAwO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIGJ1dHRvbi5yZWFkLW1vcmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVmO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wucGFydGlhbCB7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wucGFydGlhbCAuY2FyZCB7XG4gIG1heC13aWR0aDogMzYwcHg7XG59XG4uZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzIyMmY1YztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmV2ZW50cy1jb250ZW50IC5wYWdpbmF0b3Igc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIC5yYW5nZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciAubGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufSJdfQ== */", "@media screen and (max-width: 1024px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    min-height: initial;\n  }\n}\n@media screen and (max-width: 670px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 450px) {\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy1jYXJvdXNlbC9wcm9qZWN0cy1jYXJvdXNlbC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWNhcm91c2VsL3Byb2plY3RzLWNhcm91c2VsLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksbUJBQUE7RUNBTjtBQUNGO0FER0E7RUFRZ0I7SUFDSSxhQUFBO0VDUmxCO0VEV2M7SUFDSSxjQUFBO0VDVGxCO0VEV2tCO0lBQ0ksZUFBQTtFQ1R0QjtFRFlrQjtJQUNJLGVBQUE7RUNWdEI7RURha0I7SUFDSSxtQkFBQTtJQUNBLGVBQUE7RUNYdEI7QUFDRjtBRGtCQTtFQVFnQjtJQUNJLGFBQUE7RUN2QmxCO0VENEJrQjtJQUNJLGVBQUE7RUMxQnRCO0VENkJrQjtJQUNJLGVBQUE7RUMzQnRCO0VEb0NjO0lBQ0ksYUFBQTtFQ2xDbEI7QUFDRjtBRHdDQTtFQUlRO0lBQ0ksa0JBQUE7RUN6Q1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWNhcm91c2VsL3Byb2plY3RzLWNhcm91c2VsLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHtcbiAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XG5cbiAgICAuZXZlbnRzLWNvbnRlbnQge1xuICAgIFxuICAgICAgICBvbCB7XG4gICAgXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgXG4gICAgICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGgyLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBwLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVhZC1tb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG5cbiAgICAuZXZlbnRzLWNvbnRlbnQge1xuXG4gICAgICAgIG9sIHtcbiAgICBcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICBcbiAgICAgICAgICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBoMi50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgcC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucGFnaW5hdG9yIHtcblxuICAgICAgICAgICAgLnJhbmdlIHtcbiAgICAgICAgICAgICAgICAuc3RhcnQsIC5kZXZpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICAuZXZlbnRzLWNvbnRlbnQge1xuXG4gICAgICAgIC5wYWdpbmF0b3Ige1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAudGh1bWJuYWlsIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCB7XG4gICAgcGFkZGluZzogMC43ZW07XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IGgyLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgYnV0dG9uLnJlYWQtbW9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAudGh1bWJuYWlsIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCBoMi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCBwLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IC5wYWdpbmF0b3IgLnJhbmdlIC5zdGFydCwgLmV2ZW50cy1jb250ZW50IC5wYWdpbmF0b3IgLnJhbmdlIC5kZXZpZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)),
            ])
        ] } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["debounce"])(25)
], ProjectsCarouselComponent.prototype, "onResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-projects-carousel",
                templateUrl: "./projects-carousel.component.html",
                styleUrls: ["./projects-carousel.component.scss", "./projects-carousel.component.responsivity.scss"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { onResultsPerPageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], projects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:resize"]
        }] }); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_shared_abstract_swipe_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shared/abstract.swipe.section */ "./src/app/core/shared/abstract.swipe.section.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-carousel/projects-carousel.component */ "./src/app/projects/projects-carousel/projects-carousel.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_projects$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_1 = goog.getMsg("Projects");
    I18N_0 = MSG_EXTERNAL_projects$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_1;
}
else {
    I18N_0 = "Projects";
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_3 = goog.getMsg("Previous");
    I18N_2 = MSG_EXTERNAL_previous$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_3;
}
else {
    I18N_2 = "Previous";
}
const _c4 = ["title", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_6 = goog.getMsg("Previous");
    I18N_5 = MSG_EXTERNAL_previous$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_6;
}
else {
    I18N_5 = "Previous";
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_8 = goog.getMsg("Next");
    I18N_7 = MSG_EXTERNAL_next$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_8;
}
else {
    I18N_7 = "Next";
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_10 = goog.getMsg("Next");
    I18N_9 = MSG_EXTERNAL_next$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_10;
}
else {
    I18N_9 = "Next";
}
const _c11 = ["title", I18N_9];
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc projects
     */ 
    const MSG_EXTERNAL_synopsis$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_13 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sagittis velit, eget scelerisque arcu semper finibus.");
    I18N_12 = MSG_EXTERNAL_synopsis$$SRC_APP_PROJECTS_PROJECTS_COMPONENT_TS_13;
}
else {
    I18N_12 = "In countless times, an article or a simple piece of information saved me hours of research, so whenever is possible, I try to do my humble contributions:";
}
const _c14 = function (a0) { return { "disabled": a0 }; };
class ProjectsComponent extends _core_shared_abstract_swipe_section__WEBPACK_IMPORTED_MODULE_2__["AbstractSwipeSection"] {
    constructor(dataService) {
        super();
        this.dataService = dataService;
        this.currentPage = 1;
        this.projects = [];
    }
    ngOnInit() {
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronRight"];
        // Fetch the projects from the Data Service
        this.dataService.getProjects()
            .subscribe((projects) => {
            this.projects = projects;
        });
    }
    onClickPrevious() {
        this.currentPage--;
    }
    onClickNext() {
        this.currentPage++;
    }
    updateNavigation(resultsPerPage) {
        this.resultsPerPage = resultsPerPage;
    }
    disablePreviousNavigation() {
        return this.currentPage === 1;
    }
    disableNextNavigation() {
        var _a;
        return this.currentPage === Math.ceil(((_a = this.projects) === null || _a === void 0 ? void 0 : _a.length) / this.resultsPerPage);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 10, consts: [["id", "projects"], [1, "container"], [1, "top-container"], [1, "title"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "ngClass", "click"], [1, "molding"], [1, "icon", 3, "icon", 6, "title"], [1, "divider"], ["href", "javascript:void(0)", 1, "next", 3, "ngClass", "click"], [1, "synopsis"], [1, "middle-container", 3, "swipe"], [3, "projects", "currentPage", "onResultsPerPageChanged"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_7_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_15_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, I18N_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](20, _c11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, I18N_12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipe", function ProjectsComponent_Template_div_swipe_23_listener($event) { return ctx.onSwipe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-projects-carousel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onResultsPerPageChanged", function ProjectsComponent_Template_app_projects_carousel_onResultsPerPageChanged_24_listener($event) { return ctx.updateNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c14, ctx.disablePreviousNavigation()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c14, ctx.disableNextNavigation()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projects", ctx.projects)("currentPage", ctx.currentPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsCarouselComponent"]], styles: ["#projects[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #fbfafa;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 85vw;\n  max-width: 1400px;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  margin-top: 0;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%]   app-projects-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNBUjs7QURHSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtNQUFBLGVBQUE7QUNEUjs7QURHUTtFQUNJLG9CQUFBO01BQUEsWUFBQTtBQ0RaOztBRElRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBRElZO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDRmhCOztBREtZO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNIaEI7O0FES2dCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0hwQjs7QURPWTtFQUNJLG9CQUFBO01BQUEsWUFBQTtBQ0xoQjs7QURRWTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05oQjs7QURRZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDTnBCOztBRFFnQjtFQUNJLDJCQUFBO0FDTnBCOztBRFVZO0VBQ0ksWUFBQTtBQ1JoQjs7QURhSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDWFI7O0FEYVE7RUFDSSxXQUFBO0FDWFoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9qZWN0cyB7XG4gICAgdG9wOiAtNGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYWZhO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgfVxuXG4gICAgcC5zeW5vcHNpcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICM1ZTY3ODg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAgIFxuICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTsgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGFwcC1wcm9qZWN0cy1jYXJvdXNlbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIjcHJvamVjdHMge1xuICB0b3A6IC00ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZhZmE7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODV2dztcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG59XG4uY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbi5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1ZTY3ODg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiA0O1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIyZjVjO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLnByZXZpb3VzIHtcbiAgZmxleC1ncm93OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAucHJldmlvdXMuZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5kaXZpZGVyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAubmV4dCB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm5leHQuZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0OmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBzcGFuIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhaW5lciAubWlkZGxlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5taWRkbGUtY29udGFpbmVyIGFwcC1wcm9qZWN0cy1jYXJvdXNlbCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */", "@media screen and (max-width: 670px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n    -ms-touch-action: pan-y !important;\n        touch-action: pan-y !important;\n    padding-bottom: 1em;\n  }\n}\n@media screen and (max-width: 450px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0.65em 0;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #414c73;\n    display: inline-block;\n    padding: 0 5px 5px 5px;\n    border-radius: 10px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRO0lBQ0ksZUFBQTtFQ0ZWO0VES007SUFDSSxlQUFBO0VDSFY7RURRVTtJQUNJLGVBQUE7RUNOZDtBQUNGO0FEV0E7RUFJUTtJQUNJLGVBQUE7RUNaVjtFRGVNO0lBQ0ksZUFBQTtFQ2JWO0VEa0JVO0lBQ0ksZUFBQTtFQ2hCZDtFRGtCYztJQUNJLFdBQUE7RUNoQmxCO0VEcUJNO0lBQ0ksa0NBQUE7UUFBQSw4QkFBQTtJQUNBLG1CQUFBO0VDbkJWO0FBQ0Y7QUR1QkE7RUFJUTtJQUNJLGdCQUFBO0VDeEJWO0VEMkJNO0lBQ0ksZUFBQTtFQ3pCVjtFRDhCVTtJQUNJLGVBQUE7RUM1QmQ7RUQ4QmM7SUFDSSxXQUFBO0VDNUJsQjtFRCtCYztJQUNJLGFBQUE7RUM3QmxCO0VEZ0NjO0lBQ0kseUJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUM5QmxCO0VEZ0NrQjtJQUNJLGVBQUE7RUM5QnRCO0VEaUNrQjtJQUNJLFdBQUE7SUFDQSxlQUFBO0VDL0J0QjtBQUNGO0FEc0NBO0VBRUk7SUFDSSxhQUFBO0VDckNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xuXG4gICAgLmNvbnRhaW5lciB7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHAuc3lub3BzaXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgIFxuICAgICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwLnN5bm9wc2lzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC42NWVtIDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcC5zeW5vcHNpcyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgXG4gICAgICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm1vbGRpbmcge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNDE0YzczO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IDVweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcblxuICAgIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XG4gIC5jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuICAuY29udGFpbmVyIHAuc3lub3BzaXMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgfVxuICAuY29udGFpbmVyIHAuc3lub3BzaXMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBzcGFuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuY29udGFpbmVyIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lciBoMSB7XG4gICAgbWFyZ2luOiAwLjY1ZW0gMDtcbiAgfVxuICAuY29udGFpbmVyIHAuc3lub3BzaXMge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBzcGFuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm1vbGRpbmcge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MTRjNzM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5tb2xkaW5nIC5pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAubW9sZGluZyBzcGFuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-projects",
                templateUrl: "./projects.component.html",
                styleUrls: ["./projects.component.scss", "./projects.component.responsivity.scss"]
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.molule.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.molule.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-carousel/projects-carousel.component */ "./src/app/projects/projects-carousel/projects-carousel.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");








class ProjectsModule {
}
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsCarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]], exports: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
                declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _projects_carousel_projects_carousel_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsCarouselComponent"]],
                exports: [_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _core_directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/directive/on-viewport.directive */ "./src/app/core/directive/on-viewport.directive.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");













const _c0 = function (a0) { return { "sticky": a0 }; };
class ResumeComponent {
    constructor() {
        this.isSticky = false;
        this.pageYOffset = 0;
        this.checkResize();
    }
    checkScroll() {
        this.pageYOffset = window.pageYOffset;
        this.isSticky = pageYOffset >= 250;
    }
    checkResize() {
        this.pageXOffset = window.innerWidth;
    }
    ngOnInit() { }
    onViewport(isOnViewPort, element) {
        this.activeSection = element;
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], hostBindings: function ResumeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ResumeComponent_scroll_HostBindingHandler() { return ctx.checkScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("resize", function ResumeComponent_resize_HostBindingHandler() { return ctx.checkResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 10, consts: [[3, "activeSection", "pageXOffset", "ngClass"], ["in-viewport", "", 3, "pageYOffset", "inViewport"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-welcome", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_welcome_inViewport_1_listener($event) { return ctx.onViewport($event.value, "welcome"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-about", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_about_inViewport_2_listener($event) { return ctx.onViewport($event.value, "about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-experience", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_experience_inViewport_3_listener($event) { return ctx.onViewport($event.value, "experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-projects", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_projects_inViewport_4_listener($event) { return ctx.onViewport($event.value, "projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-contact", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_contact_inViewport_5_listener($event) { return ctx.onViewport($event.value, "contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeSection", ctx.activeSection)("pageXOffset", ctx.pageXOffset)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.isSticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"], _core_directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_6__["InViewportDirective"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: ["app-header[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    position: absolute;\n    z-index: 1001;\n    width: 100%;\n    padding: 1em 0;\n    transition: 0.3s;\n}\n\n.sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: #fff;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.43);\n}\n\napp-footer[_ngcontent-%COMP%] {\n    position: relative;\n    top: -3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXVCO1FBQXZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjQzKTtcbn1cblxuYXBwLWZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTNlbTtcbn0iXX0= */", "@media screen and (max-width: 1024px) {\n\n    app-header[_ngcontent-%COMP%] { padding: 0; }\n\n    .sticky[_ngcontent-%COMP%] {\n        background-color: transparent;\n        box-shadow: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhLFVBQVUsRUFBRTs7SUFFekI7UUFDSSw2QkFBNkI7UUFDN0IsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICBhcHAtaGVhZGVyIHsgcGFkZGluZzogMDsgfVxuXG4gICAgLnN0aWNreSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn0iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])()
], ResumeComponent.prototype, "checkScroll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(25)
], ResumeComponent.prototype, "checkResize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(150)
], ResumeComponent.prototype, "onViewport", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-resume",
                templateUrl: "./resume.component.html",
                styleUrls: ["./resume.component.css", "./resume.component.responsivity.css"]
            }]
    }], function () { return []; }, { checkScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:scroll"]
        }], checkResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:resize"]
        }], onViewport: [] }); })();


/***/ }),

/***/ "./src/app/resume/resume.module.ts":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/*! exports provided: ResumeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeModule", function() { return ResumeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../welcome/welcome.molule */ "./src/app/welcome/welcome.molule.ts");
/* harmony import */ var _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../experience/experience.module */ "./src/app/experience/experience.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _projects_projects_molule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../projects/projects.molule */ "./src/app/projects/projects.molule.ts");
/* harmony import */ var _contact_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contact/contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");















class ResumeModule {
}
ResumeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResumeModule });
ResumeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResumeModule_Factory(t) { return new (t || ResumeModule)(); }, providers: [_contact_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
            _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
            _projects_projects_molule__WEBPACK_IMPORTED_MODULE_11__["ProjectsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeModule, { declarations: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
        _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
        _projects_projects_molule__WEBPACK_IMPORTED_MODULE_11__["ProjectsModule"]], exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
                    _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
                    _projects_projects_molule__WEBPACK_IMPORTED_MODULE_11__["ProjectsModule"]
                ],
                declarations: [
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
                ],
                exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]],
                providers: [_contact_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-background/welcome-background.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/welcome/welcome-background/welcome-background.component.ts ***!
  \****************************************************************************/
/*! exports provided: WelcomeBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeBackgroundComponent", function() { return WelcomeBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WelcomeBackgroundComponent {
    constructor() {
    }
    ngOnInit() { }
}
WelcomeBackgroundComponent.ɵfac = function WelcomeBackgroundComponent_Factory(t) { return new (t || WelcomeBackgroundComponent)(); };
WelcomeBackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeBackgroundComponent, selectors: [["app-welcome-background"]], decls: 11, vars: 0, consts: [[1, "skills"], ["loading", "lazy", "src", "/assets/template/welcome/illustration-back.png", "alt", "Background circle", 1, "background"], ["loading", "lazy", "src", "/assets/template/welcome/icons/docker.svg", "alt", "Docker", 1, "skill-icon", "first"], ["loading", "lazy", "src", "/assets/template/welcome/icons/pythonP.png", "alt", "Python", 1, "skill-icon", "second"], ["loading", "lazy", "src", "/assets/template/welcome/icons/git.svg", "alt", "Git", 1, "skill-icon", "third"], ["loading", "lazy", "src", "/assets/template/welcome/icons/R.png", "alt", "R", 1, "skill-icon", "fourth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/sql.svg", "alt", "SQL", 1, "skill-icon", "fifth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/mongo.png", "alt", "MongoDB", 1, "skill-icon", "sixth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/keras.png", "alt", "Keras", 1, "skill-icon", "seventh"], ["loading", "lazy", "src", "/assets/template/welcome/icons/tensorflow.png", "alt", "Tensorflow", 1, "skill-icon", "eighth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/java.svg", "alt", "Java", 1, "skill-icon", "ninth"]], template: function WelcomeBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".skills[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 120px;\n  z-index: 0;\n}\n.skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n  width: 535px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  animation-name: floating-icons;\n  -webkit-animation-name: floating-icons;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%]:nth-child(2n+3) {\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n  top: 385px;\n  left: -35px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n  top: 300px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n  top: 205px;\n  left: -85px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n  top: 120px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n  top: 40px;\n  left: -20px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n  top: -20px;\n  left: 50px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n  top: -20px;\n  right: 50px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n  bottom: 110px;\n  right: -30px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n  bottom: 40px;\n  right: 10px;\n}\n@-webkit-keyframes floating-icons {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(5%, 15%);\n  }\n  50% {\n    transform: translate(10%, 5%);\n  }\n  75% {\n    transform: translate(0%, 15%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n@keyframes floating-icons {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(5%, 15%);\n  }\n  50% {\n    transform: translate(10%, 5%);\n  }\n  75% {\n    transform: translate(0%, 15%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvd2VsY29tZS1iYWNrZ3JvdW5kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0gsVUFBQTtBQ0NEO0FEQ0M7RUFDQyxZQUFBO0FDQ0Y7QURFQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUdBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNGRjtBREtFO0VBQ0MsOEJBQUE7VUFBQSxzQkFBQTtBQ0hIO0FET0U7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQ0xIO0FEUUU7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQ05IO0FEU0U7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQ1BIO0FEVUU7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQ1JIO0FEV0U7RUFDQyxTQUFBO0VBQ0EsV0FBQTtBQ1RIO0FEWUU7RUFDQyxVQUFBO0VBQ0EsVUFBQTtBQ1ZIO0FEYUU7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQ1hIO0FEY0U7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQ1pIO0FEZUU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ2JIO0FEa0JBO0VBQ0M7SUFBSyw0QkFBQTtFQ2RKO0VEZUQ7SUFBTSw2QkFBQTtFQ1pMO0VEYUQ7SUFBTSw2QkFBQTtFQ1ZMO0VEV0Q7SUFBTSw2QkFBQTtFQ1JMO0VEU0Q7SUFBTyw0QkFBQTtFQ05OO0FBQ0Y7QURBQTtFQUNDO0lBQUssNEJBQUE7RUNkSjtFRGVEO0lBQU0sNkJBQUE7RUNaTDtFRGFEO0lBQU0sNkJBQUE7RUNWTDtFRFdEO0lBQU0sNkJBQUE7RUNSTDtFRFNEO0lBQU8sNEJBQUE7RUNOTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvd2VsY29tZS1iYWNrZ3JvdW5kLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTBweDtcbiAgICBsZWZ0OiAxMjBweDtcblx0ei1pbmRleDogMDtcblx0XG5cdGltZy5iYWNrZ3JvdW5kIHtcblx0XHR3aWR0aDogNTM1cHg7XG5cdH1cblxuXHQuc2tpbGwtaWNvbiB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHdpZHRoOiA1MHB4O1xuXG5cdFx0Ly8gRGVmaW5lIHRoZSBhbmltYXRpb25zIGZvciB0aGUgaWNvbnNcblx0XHRhbmltYXRpb24tbmFtZTogZmxvYXRpbmctaWNvbnM7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxvYXRpbmctaWNvbnM7XG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG5cblx0XHQvLyBPZGQgaWNvbnMgaGF2ZSBkaWZmZXJlbnQgYW5pbWF0aW9uIGZyYW1lLlxuXHRcdCY6bnRoLWNoaWxkKDJuKzMpIHtcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG5cdFx0fVxuXG5cdFx0Ly8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZ1xuXHRcdCYuZmlyc3Qge1xuXHRcdFx0dG9wOiAzODVweDtcblx0XHRcdGxlZnQ6IC0zNXB4O1xuXHRcdH1cblxuXHRcdCYuc2Vjb25kIHtcblx0XHRcdHRvcDogMzAwcHg7XG5cdFx0XHRsZWZ0OiAtNjVweDtcblx0XHR9XG5cblx0XHQmLnRoaXJkIHtcblx0XHRcdHRvcDogMjA1cHg7XG5cdFx0XHRsZWZ0OiAtODVweDtcblx0XHR9XG5cblx0XHQmLmZvdXJ0aCB7XG5cdFx0XHR0b3A6IDEyMHB4O1xuXHRcdFx0bGVmdDogLTY1cHg7XG5cdFx0fVxuXG5cdFx0Ji5maWZ0aCB7XG5cdFx0XHR0b3A6IDQwcHg7XG5cdFx0XHRsZWZ0OiAtMjBweDtcblx0XHR9XG5cblx0XHQmLnNpeHRoIHtcblx0XHRcdHRvcDogLTIwcHg7XG5cdFx0XHRsZWZ0OiA1MHB4O1xuXHRcdH1cblxuXHRcdCYuc2V2ZW50aCB7XG5cdFx0XHR0b3A6IC0yMHB4O1xuXHRcdFx0cmlnaHQ6IDUwcHg7XG5cdFx0fVxuXG5cdFx0Ji5laWdodGgge1xuXHRcdFx0Ym90dG9tOiAxMTBweDtcblx0XHRcdHJpZ2h0OiAtMzBweDtcblx0XHR9XG5cblx0XHQmLm5pbnRoIHtcblx0XHRcdGJvdHRvbTogNDBweDtcblx0XHRcdHJpZ2h0OiAxMHB4O1xuXHRcdH1cblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nLWljb25zIHtcblx0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpOyB9XG5cdDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxNSUpOyB9XHRcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAlLCA1JSk7IH1cdFxuXHQ3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTUlKTsgfVx0XG5cdDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpOyB9XHRcdFx0XG59IiwiLnNraWxscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMTIwcHg7XG4gIHotaW5kZXg6IDA7XG59XG4uc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDUzNXB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZy1pY29ucztcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxvYXRpbmctaWNvbnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbn1cbi5za2lsbHMgLnNraWxsLWljb246bnRoLWNoaWxkKDJuKzMpIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbn1cbi5za2lsbHMgLnNraWxsLWljb24uZmlyc3Qge1xuICB0b3A6IDM4NXB4O1xuICBsZWZ0OiAtMzVweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24uc2Vjb25kIHtcbiAgdG9wOiAzMDBweDtcbiAgbGVmdDogLTY1cHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgdG9wOiAyMDVweDtcbiAgbGVmdDogLTg1cHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0aCB7XG4gIHRvcDogMTIwcHg7XG4gIGxlZnQ6IC02NXB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbi5maWZ0aCB7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogLTIwcHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogNTBweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24uc2V2ZW50aCB7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiA1MHB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbi5laWdodGgge1xuICBib3R0b206IDExMHB4O1xuICByaWdodDogLTMwcHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBmbG9hdGluZy1pY29ucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDE1JSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsIDUlKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNSUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIH1cbn0iXX0= */", "@media screen and (max-width: 1024px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 150px;\n    left: 120px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 390px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 310px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 250px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 175px;\n    left: -60px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 100px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -10px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -20px;\n    right: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 80px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 70px;\n    right: -20px;\n  }\n}\n@media screen and (max-width: 880px) {\n  .skills[_ngcontent-%COMP%] {\n    left: -30x;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 220px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 170px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 60px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -30px;\n    left: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -30px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 45px;\n    right: -15px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .skills[_ngcontent-%COMP%] {\n    left: -30x;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 165px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 130px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 90px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 50px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: -5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 50px;\n    right: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 100px;\n    left: 70x;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 22px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 135px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 105px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 70px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 35px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: -3px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 70px;\n    right: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 40px;\n    right: -20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 70px;\n    left: 40x;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 18px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -10px;\n    right: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 55px;\n    right: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: -10px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 50px;\n    left: 20x;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 16px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 110px;\n    left: -13px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 35px;\n    right: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9zdXNtaS9EZXNrdG9wL2VQb3J0Zm9saW8vbGl2ZS1yZXN1bWUvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQucmVwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvd2VsY29tZS1iYWNrZ3JvdW5kLnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSTtJQUNJLFVBQUE7SUFDTixXQUFBO0VDREE7RURHTTtJQUNJLFlBQUE7RUNEVjtFRElNO0lBQ0ksV0FBQTtFQ0ZWO0VES1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ0hkO0VETVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ0pkO0VET1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ0xkO0VEUVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ05kO0VEU1U7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ1BkO0VEVVU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ1JkO0VEV1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ1RkO0VEWVU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ1ZkO0VEYVU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ1hkO0FBQ0Y7QURnQkE7RUFFSTtJQUNELFVBQUE7RUNmRDtFRGdCTTtJQUNJLFlBQUE7RUNkVjtFRGlCTTtJQUNJLFdBQUE7RUNmVjtFRGtCVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDaEJkO0VEbUJVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNqQmQ7RURvQlU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ2xCZDtFRHFCVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDbkJkO0VEc0JVO0lBQ0ksU0FBQTtJQUNBLE9BQUE7RUNwQmQ7RUR1QlU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ3JCZDtFRHdCVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDdEJkO0VEeUJVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUN2QmQ7RUQwQlU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ3hCZDtBQUNGO0FENkJBO0VBRUk7SUFDRixVQUFBO0VDNUJBO0VEOEJNO0lBQ0ksWUFBQTtFQzVCVjtFRCtCTTtJQUNJLFdBQUE7RUM3QlY7RURnQ1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQzlCZDtFRGlDVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDL0JkO0VEa0NVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNoQ2Q7RURtQ1U7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ2pDZDtFRG9DVTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VDbENkO0VEcUNVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUNuQ2Q7RURzQ1U7SUFDSSxNQUFBO0lBQ0EsUUFBQTtFQ3BDZDtFRHVDVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDckNkO0VEd0NVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUN0Q2Q7QUFDRjtBRDJDQTtFQUVJO0lBQ0ksVUFBQTtJQUNOLFNBQUE7RUMxQ0E7RUQyQ007SUFDSSxZQUFBO0VDekNWO0VENENNO0lBQ0ksV0FBQTtFQzFDVjtFRDZDVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDM0NkO0VEOENVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUM1Q2Q7RUQrQ1U7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQzdDZDtFRGdEVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDOUNkO0VEaURVO0lBQ0ksUUFBQTtJQUNBLFVBQUE7RUMvQ2Q7RURrRFU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ2hEZDtFRG1EVTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VDakRkO0VEb0RVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUNsRGQ7RURxRFU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ25EZDtBQUNGO0FEd0RBO0VBRUk7SUFDSSxTQUFBO0lBQ04sU0FBQTtFQ3ZEQTtFRHdETTtJQUNJLFlBQUE7RUN0RFY7RUR5RE07SUFDSSxXQUFBO0VDdkRWO0VEMERVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUN4RGQ7RUQyRFU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ3pEZDtFRDREVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDMURkO0VENkRVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUMzRGQ7RUQ4RFU7SUFDSSxRQUFBO0lBQ0EsT0FBQTtFQzVEZDtFRCtEVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDN0RkO0VEZ0VVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUM5RGQ7RURpRVU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQy9EZDtFRGtFVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDaEVkO0FBQ0Y7QURxRUE7RUFFSTtJQUNJLFNBQUE7SUFDTixTQUFBO0VDcEVBO0VEc0VNO0lBQ0ksWUFBQTtFQ3BFVjtFRHVFTTtJQUNJLFdBQUE7RUNyRVY7RUR3RVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ3RFZDtFRHlFVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDdkVkO0VEMEVVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUN4RWQ7RUQyRVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ3pFZDtFRDRFVTtJQUNJLFFBQUE7SUFDQSxPQUFBO0VDMUVkO0VENkVVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUMzRWQ7RUQ4RVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQzVFZDtFRCtFVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDN0VkO0VEZ0ZVO0lBQ0ksWUFBQTtJQUNBLFFBQUE7RUM5RWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS1iYWNrZ3JvdW5kL3dlbGNvbWUtYmFja2dyb3VuZC5yZXBvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIC5za2lsbHMge1xuICAgICAgICB0b3A6IDE1MHB4O1xuXHRcdGxlZnQ6IDEyMHB4O1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAzOTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogMjUwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogMTc1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZm91cnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC00NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA4MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA3MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcblxuICAgIC5za2lsbHMge1xuXHRcdFx0bGVmdDogLTMweDtcbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDIyMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxNzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA4NXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcblxuICAgIC5za2lsbHMge1xuXHRcdGxlZnQ6IC0zMHg7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDI3cHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDE2NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA5MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogODVweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcbiAgICAgICAgdG9wOiAxMDBweDtcblx0XHRsZWZ0OiA3MHg7XG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA3MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIC5za2lsbHMge1xuICAgICAgICB0b3A6IDcwcHg7XG5cdFx0bGVmdDogNDB4O1xuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMTE1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDg1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDU1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuIFxuICAgIC5za2lsbHMge1xuICAgICAgICB0b3A6IDUwcHg7XG5cdFx0bGVmdDogMjB4O1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA4NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuc2V2ZW50aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDM1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNraWxscyB7XG4gICAgdG9wOiAxNTBweDtcbiAgICBsZWZ0OiAxMjBweDtcbiAgfVxuICAuc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMzkwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maXJzdCB7XG4gICAgdG9wOiAzMTBweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNlY29uZCB7XG4gICAgdG9wOiAyNTBweDtcbiAgICBsZWZ0OiAtNTBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgICB0b3A6IDE3NXB4O1xuICAgIGxlZnQ6IC02MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZm91cnRoIHtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IC00NXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlmdGgge1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgICB0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZXZlbnRoIHtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZWlnaHRoIHtcbiAgICBib3R0b206IDgwcHg7XG4gICAgcmlnaHQ6IC00MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ubmludGgge1xuICAgIGJvdHRvbTogNzBweDtcbiAgICByaWdodDogLTIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gIC5za2lsbHMge1xuICAgIGxlZnQ6IC0zMHg7XG4gIH1cbiAgLnNraWxscyBpbWcuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ge1xuICAgIHdpZHRoOiAzNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlyc3Qge1xuICAgIHRvcDogMjIwcHg7XG4gICAgbGVmdDogLTI1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZWNvbmQge1xuICAgIHRvcDogMTcwcHg7XG4gICAgbGVmdDogLTQ1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi50aGlyZCB7XG4gICAgdG9wOiAxMTVweDtcbiAgICBsZWZ0OiAtNTBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0aCB7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IC0zNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlmdGgge1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2l4dGgge1xuICAgIHRvcDogLTMwcHg7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNldmVudGgge1xuICAgIHRvcDogLTMwcHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5laWdodGgge1xuICAgIGJvdHRvbTogODVweDtcbiAgICByaWdodDogLTQwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5uaW50aCB7XG4gICAgYm90dG9tOiA0NXB4O1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNraWxscyB7XG4gICAgbGVmdDogLTMweDtcbiAgfVxuICAuc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gICAgd2lkdGg6IDI3cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maXJzdCB7XG4gICAgdG9wOiAxNjVweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNlY29uZCB7XG4gICAgdG9wOiAxMzBweDtcbiAgICBsZWZ0OiAtMzVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgICB0b3A6IDkwcHg7XG4gICAgbGVmdDogLTM1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5mb3VydGgge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAtMzBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpZnRoIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgICB0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZXZlbnRoIHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5laWdodGgge1xuICAgIGJvdHRvbTogODVweDtcbiAgICByaWdodDogLTM1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5uaW50aCB7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIHJpZ2h0OiAtMjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNraWxscyB7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiA3MHg7XG4gIH1cbiAgLnNraWxscyBpbWcuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ge1xuICAgIHdpZHRoOiAyMnB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlyc3Qge1xuICAgIHRvcDogMTM1cHg7XG4gICAgbGVmdDogLTE1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZWNvbmQge1xuICAgIHRvcDogMTA1cHg7XG4gICAgbGVmdDogLTI1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi50aGlyZCB7XG4gICAgdG9wOiA3MHB4O1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZm91cnRoIHtcbiAgICB0b3A6IDM1cHg7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maWZ0aCB7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogLTNweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgICB0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZXZlbnRoIHtcbiAgICB0b3A6IC01cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmVpZ2h0aCB7XG4gICAgYm90dG9tOiA3MHB4O1xuICAgIHJpZ2h0OiAtMzBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgICBib3R0b206IDQwcHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuc2tpbGxzIHtcbiAgICB0b3A6IDcwcHg7XG4gICAgbGVmdDogNDB4O1xuICB9XG4gIC5za2lsbHMgaW1nLmJhY2tncm91bmQge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uIHtcbiAgICB3aWR0aDogMThweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpcnN0IHtcbiAgICB0b3A6IDExNXB4O1xuICAgIGxlZnQ6IC0xNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2Vjb25kIHtcbiAgICB0b3A6IDg1cHg7XG4gICAgbGVmdDogLTI1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi50aGlyZCB7XG4gICAgdG9wOiA1NXB4O1xuICAgIGxlZnQ6IC0yNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZm91cnRoIHtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogLTE1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maWZ0aCB7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgICB0b3A6IC0xMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZXZlbnRoIHtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZWlnaHRoIHtcbiAgICBib3R0b206IDU1cHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ubmludGgge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogLTEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5za2lsbHMge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAyMHg7XG4gIH1cbiAgLnNraWxscyBpbWcuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ge1xuICAgIHdpZHRoOiAxNnB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlyc3Qge1xuICAgIHRvcDogMTEwcHg7XG4gICAgbGVmdDogLTEzcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZWNvbmQge1xuICAgIHRvcDogODVweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgICB0b3A6IDU1cHg7XG4gICAgbGVmdDogLTI1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5mb3VydGgge1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpZnRoIHtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2l4dGgge1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNldmVudGgge1xuICAgIHRvcDogLTVweDtcbiAgICByaWdodDogMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmVpZ2h0aCB7XG4gICAgYm90dG9tOiAzNXB4O1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeBackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-welcome-background",
                templateUrl: "./welcome-background.component.html",
                styleUrls: ["./welcome-background.scss", "./welcome-background.reponsivity.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts":
/*!***********************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts ***!
  \***********************************************************************/
/*! exports provided: Typed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typed", function() { return Typed; });
class Typed {
    constructor(element, options, phrases) {
        const defaults = {
            typeSpeed: 250,
            startDelay: 2000,
            phrasePeriod: 200
        };
        this.text = "";
        this.isDeleting = false;
        this.loopNum = 0;
        this.element = element;
        this.options = Object.assign(Object.assign({}, defaults), options);
        this.phrases = phrases;
        this.appendAnimationCss();
    }
    begin() {
        this.timeout = setTimeout(() => {
            this.typewrite();
        }, this.options.startDelay);
    }
    insertSpan(text) {
        this.element.innerHTML = `<span class="wrap">${text}</span>`;
    }
    typewrite() {
        let i = this.loopNum % this.phrases.length;
        let fullTxt = this.phrases[i];
        if (this.isDeleting) {
            this.text = fullTxt.substring(0, this.text.length - 1);
        }
        else {
            this.text = fullTxt.substring(0, this.text.length + 1);
        }
        this.insertSpan(this.text);
        let that = this;
        let delta = this.options.typeSpeed - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.text === fullTxt) {
            delta = this.options.phrasePeriod;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.text === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.typewrite();
        }, delta);
    }
    appendAnimationCss() {
        let css = document.createElement("style");
        css.type = "text/css";
        css.id = "typing";
        const innerCss = `
            .txt-rotate > .wrap::after {
                content: "|";
                opacity: 1;
                animation: typedBlink 0.7s infinite;
                -webkit-animation: typedBlink 0.7s infinite;
                animation: typedBlink 0.7s infinite;
            }
            @keyframes typedBlink{
                50% { opacity: 0.0; }
            }
            @-webkit-keyframes typedBlink{
                0% { opacity: 1; }
                50% { opacity: 0.0; }
                100% { opacity: 1; }
            }
        `;
        css.innerHTML = innerCss;
        document.head.appendChild(css);
    }
}


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts ***!
  \********************************************************************************************/
/*! exports provided: TypingAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingAnimationDirective", function() { return TypingAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typed */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts");



class TypingAnimationDirective {
    constructor(elRef, locale) {
        this.elRef = elRef;
        this.locale = locale;
        this.phrases = [];
        this._flatMap = (f, xs) => xs.reduce((acc, x) => acc.concat(f(x)), []);
    }
    ngOnInit() {
        const nestedArr = this.data.filter(el => el.language === (this.locale || "en"));
        this.phrases = this._flatMap(el => el.phrases, nestedArr);
        if (this.checkContent()) {
            this.createTyped();
        }
    }
    checkContent() {
        return this.phrases.length > 0;
    }
    createTyped() {
        this.typed = new _typed__WEBPACK_IMPORTED_MODULE_1__["Typed"](this.elRef.nativeElement, {
            typeSpeed: this.typeSpeed,
            startDelay: this.startDelay,
            phrasePeriod: this.phrasePeriod
        }, this.phrases);
        this.typed.begin();
    }
}
TypingAnimationDirective.ɵfac = function TypingAnimationDirective_Factory(t) { return new (t || TypingAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
TypingAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TypingAnimationDirective, selectors: [["", "typingAnimation", ""]], inputs: { phrasePeriod: "phrasePeriod", typeSpeed: "typeSpeed", startDelay: "startDelay", data: "data" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingAnimationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[typingAnimation]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { phrasePeriod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["phrasePeriod"]
        }], typeSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["typeSpeed"]
        }], startDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["startDelay"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["data"]
        }] }); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TypingAnimationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingAnimationModule", function() { return TypingAnimationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typing-animation.directive */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts");



class TypingAnimationModule {
}
TypingAnimationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TypingAnimationModule });
TypingAnimationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TypingAnimationModule_Factory(t) { return new (t || TypingAnimationModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypingAnimationModule, { declarations: [_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]], exports: [_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingAnimationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]
                ],
                exports: [
                    _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: WelcomeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDialogComponent", function() { return WelcomeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_dialog_typing_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-dialog-typing/typing-animation.directive */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts");



var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc dialog
     */ 
    const MSG_EXTERNAL_hello$$SRC_APP_WELCOME_WELCOME_DIALOG_WELCOME_DIALOG_COMPONENT_TS_1 = goog.getMsg("Hello!");
    I18N_0 = MSG_EXTERNAL_hello$$SRC_APP_WELCOME_WELCOME_DIALOG_WELCOME_DIALOG_COMPONENT_TS_1;
}
else {
    I18N_0 = "Hello!";
}
const _c2 = function () { return ["Meu nome \u00E9 Guilherme.", "Seja bem-vindo(a) ao meu resumo online.", "Abaixo, voc\u00EA me conhecer\u00E1 melhor... :)"]; };
const _c3 = function (a1) { return { "language": "pt", "phrases": a1 }; };
const _c4 = function () { return ["My name is Susmith.", "A curious, passionate and driven about technology ", " Want to know more about me... :)"]; };
const _c5 = function (a1) { return { "language": "en", "phrases": a1 }; };
const _c6 = function (a0, a1) { return [a0, a1]; };
class WelcomeDialogComponent {
    constructor() {
    }
    ngOnInit() { }
}
WelcomeDialogComponent.ɵfac = function WelcomeDialogComponent_Factory(t) { return new (t || WelcomeDialogComponent)(); };
WelcomeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeDialogComponent, selectors: [["app-welcome-dialog"]], decls: 6, vars: 13, consts: [[1, "dialog-container"], ["loading", "lazy", "src", "./assets/template/welcome/bubble-frame.png", "alt", "Welcome Speech Bobble"], [1, "console"], [1, "hello"], ["typingAnimation", "", 1, "txt-rotate", 3, "phrasePeriod", "startDelay", "typeSpeed", "data"]], template: function WelcomeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phrasePeriod", 2000)("startDelay", 1500)("typeSpeed", 200)("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4))));
    } }, directives: [_welcome_dialog_typing_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n\tz-index: 2;\n\tmargin-top: 5em;\n\t-webkit-animation: float-dialog 6s ease-in-out infinite;\n\t        animation: float-dialog 6s ease-in-out infinite;\n}\n.dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 580px;\n    margin-left: -7em;\n}\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n\tposition: absolute;\n    top: 7em;\n    left: -5px;\n    width: 380px;\n\ttext-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tmargin: 0;\n    padding: 0;\n    text-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n\tfont-size: 60px;\n    font-weight: 600;\n    color: #222f5c;\n}\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n\tfont-size: 40px;\n    color: #576183;\n\tfont-weight: 600;\n\tmargin-top: 10px;\n}\n\n@-webkit-keyframes float-dialog {\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(-20px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n}\n@keyframes float-dialog {\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(-20px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFxQjtBQUNyQjtDQUNDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsdURBQStDO1NBQS9DLCtDQUErQztBQUNoRDtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxTQUFTO0lBQ04sVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUVBO0NBQ0MsZUFBZTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7Q0FDQyxlQUFlO0lBQ1osY0FBYztDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCO0FBRUEsK0JBQStCO0FBQy9CO0NBQ0M7RUFDQywwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0FBQ0Q7QUFWQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIERpYWxvZyBjb250YWluZXIgKi9cbi5kaWFsb2ctY29udGFpbmVyIHtcblx0ei1pbmRleDogMjtcblx0bWFyZ2luLXRvcDogNWVtO1xuXHRhbmltYXRpb246IGZsb2F0LWRpYWxvZyA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogNTgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03ZW07XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogN2VtO1xuICAgIGxlZnQ6IC01cHg7XG4gICAgd2lkdGg6IDM4MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHAge1xuXHRtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG5cdGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMjIyZjVjO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG5cdGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogIzU3NjE4Mztcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cblxuLyogRGlhbG9nIGNvbnRhaW5lciBhbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgZmxvYXQtZGlhbG9nIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xuXHR9XG5cdDUwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0yMHB4KTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcblx0fVxufSJdfQ== */", "@media screen and (max-width: 1024px) {\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 435px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 6em;\n        width: 280px;\n        left: -2em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 40px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 25px;\n    }\n\n}\n\n@media screen and (max-width: 880px) {\n    \n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 325px;\n        margin-left: -5em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 4em;\n        width: 210px;\n        left: -1em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (max-width: 720px) {\n        \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 2em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 310px;\n        margin-left: -4em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 4em;\n        width: 210px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n        \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 2em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 220px;\n        margin-left: -3em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 40px;\n        width: 130px;\n        left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n         \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 3em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 160px;\n        margin-left: -45px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 30px;\n        width: 120px;\n        left: -25px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 11px;\n        line-height: 15px;\n        display: inline-block;\n        margin-top: 5px;\n    }\n}\n\n@media screen and (max-width: 320px) {\n       \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 3em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 160px;\n        margin-left: -45px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 30px;\n        width: 120px;\n        left: -25px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 12px;\n        line-height: 15px;\n        display: inline-block;\n        margin-top: 5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogNDM1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDZlbTtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICBsZWZ0OiAtMmVtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogMzI1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiA0ZW07XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgbGVmdDogLTFlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTRlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG4gICAgICAgIHRvcDogNGVtO1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zZW07XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00NXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-welcome-dialog",
                templateUrl: "./welcome-dialog.component.html",
                styleUrls: ["./welcome-dialog.css", "./welcome-dialog.responsivity.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-background/welcome-background.component */ "./src/app/welcome/welcome-background/welcome-background.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts");




class WelcomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 6, vars: 0, consts: [["id", "welcome"], [1, "layer_one"], [1, "avatar-container"], ["loading", "lazy", "src", "../../../assets/template/welcome/pic2.png", "alt", "Susmith Barigidad", 1, "illustration"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-welcome-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-welcome-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeDialogComponent"]], styles: ["#welcome[_ngcontent-%COMP%] {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: 780px;\n    padding-top: 5em;\n}\n\n.layer_one[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    position: relative;\n\t\n}\n\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    height: 785px;\n    z-index: 1;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBc0I7UUFBdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix1QkFBbUI7UUFBbkIsbUJBQW1CO0lBQ25CLHFCQUFpQjtRQUFqQixpQkFBaUI7SUFDakIscUJBQXVCO1FBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dlbGNvbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA3ODBweDtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xufVxuXG4ubGF5ZXJfb25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XG59XG5cbi5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XG4gICAgaGVpZ2h0OiA3ODVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */", "@media screen and (max-width: 1080px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 595px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 595px;\n    }\n}\n\n@media screen and (max-width: 1024px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 585px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 585px;\n    }\n}\n\n@media screen and (max-width: 880px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 465px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 465px;\n    }\n}\n\n@media screen and (max-width: 720px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 385px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 385px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 290px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 290px;\n    } \n}\n\n@media screen and (max-width: 500px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 250px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 250px;\n    } \n}\n\n@media screen and (max-width: 320px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 220px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 220px;\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS1jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDU5NXB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDU5NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgICAjd2VsY29tZSB7XG4gICAgICAgIGhlaWdodDogNDY1cHg7XG4gICAgfVxuICAgIFxuICAgIC5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgIGhlaWdodDogNDY1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICN3ZWxjb21lIHtcbiAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICB9XG4gICAgXG4gICAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH0gXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH0gXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH0gXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-welcome",
                templateUrl: "./welcome.component.html",
                styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.molule.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.molule.ts ***!
  \*******************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-background/welcome-background.component */ "./src/app/welcome/welcome-background/welcome-background.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog-typing/typing-animation.module */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts");






class WelcomeModule {
}
WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); }, imports: [[_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeDialogComponent"]], imports: [_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]], exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]],
                declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeDialogComponent"]],
                exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"]]
            }]
    }], null, null); })();


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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC2frVRAAltsVTmdwgFnATGHoVUzNHfzsM",
        authDomain: "live-resume-a575a.firebaseapp.com",
        databaseURL: "https://live-resume-a575a.firebaseio.com",
        projectId: "live-resume-a575a",
        storageBucket: "live-resume-a575a.appspot.com",
        messagingSenderId: "681076751855",
        appId: "1:681076751855:web:18bae3866ebfcc4fcd8a1a",
        measurementId: "G-00VXD77WNG"
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/susmi/Desktop/ePortfolio/live-resume/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map