"use strict";
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 78422:
/*!*************************************************************!*\
  !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundRoutingModule": () => (/* binding */ NotFoundRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ 15350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);

// Components



const routes = [{
  path: '',
  component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
}];
class NotFoundRoutingModule {}
NotFoundRoutingModule.ɵfac = function NotFoundRoutingModule_Factory(t) {
  return new (t || NotFoundRoutingModule)();
};
NotFoundRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NotFoundRoutingModule
});
NotFoundRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotFoundRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 15350:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var src_app_shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/seo/seo.service */ 58513);
/* harmony import */ var _shared_components_layouts_layout_header_layout_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/layouts/layout-header/layout-header.component */ 97954);
/* harmony import */ var _layouts_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/layout-footer/layout-footer.component */ 35316);




class NotFoundComponent {
  constructor(seoService) {
    this.seoService = seoService;
  }
  ngOnInit() {
    this.seoService.update({
      title: 'Page Not Found | GiftPickr',
      imageUrl: 'https://giftpickr-web.s3.ap-south-1.amazonaws.com/assets/GiftPickr-cover.png'
    });
  }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService));
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 15,
  vars: 0,
  consts: [[1, "not-found-page", "w-full", "h-auto", "min-h-screen", "bg-black-gradient", "flex", "flex-col"], [1, "header", "fixed", "top-0", "z-30", "w-full", "box-shadow", "overflow-x-hidden"], [1, "body", "flex-1", "relative", "z-20", "py-8", "mt-20", "flex", "flex-col", "items-center", "justify-center", "w-full", "mt-16", "md:mt-20", "overflow-hidden"], ["src", "../../../assets/svg/404.svg", "alt", "404 Page", 1, "w-1/2", "md:w-1/4", "h-auto", "max-w-full", "max-h-full", "my-8"], [1, "content", "py-4", "flex", "flex-col", "items-center", "justify-center"], [1, "text-2xl", "text-primary", "mb-2"], [1, "mb-8", "text-secondary-inverse"], ["href", "https://youtu.be/dQw4w9WgXcQ", 1, "mb-8"], [1, "bg-primary", "text-white", "rounded", "px-6", "py-2", "rounded", "tracking-wide"], [1, "footer", "py-4", "px-6", "md:px-20", "flex", "items-center", "justify-center", "bg-dark", "w-full"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-layout-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Oops! Looks like you've stumbled upon a non-existent page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Don't worry, we've got a surprise for you! Click the button below to be taken to a special page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7)(11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Surprise Me!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-layout-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_shared_components_layouts_layout_header_layout_header_component__WEBPACK_IMPORTED_MODULE_1__.LayoutHeaderComponent, _layouts_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__.LayoutFooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5180:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 85802);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found-routing.module */ 78422);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ 15350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
// Angular modules

// Internal modules


// Components


class NotFoundModule {}
NotFoundModule.ɵfac = function NotFoundModule_Factory(t) {
  return new (t || NotFoundModule)();
};
NotFoundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: NotFoundModule
});
NotFoundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__.NotFoundRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NotFoundModule, {
    declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__.NotFoundRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=180.js.map