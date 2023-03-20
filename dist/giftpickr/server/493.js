"use strict";
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 41402:
/*!*************************************************************!*\
  !*** ./src/app/pages/find-gift/find-gift-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindGiftRoutingModule": () => (/* binding */ FindGiftRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _find_gift_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-gift.component */ 11318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);

// Components



const routes = [{
  path: '',
  component: _find_gift_component__WEBPACK_IMPORTED_MODULE_0__.FindGiftComponent
}];
class FindGiftRoutingModule {}
FindGiftRoutingModule.ɵfac = function FindGiftRoutingModule_Factory(t) {
  return new (t || FindGiftRoutingModule)();
};
FindGiftRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FindGiftRoutingModule
});
FindGiftRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FindGiftRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 11318:
/*!********************************************************!*\
  !*** ./src/app/pages/find-gift/find-gift.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindGiftComponent": () => (/* binding */ FindGiftComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 97354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var src_app_shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/seo/seo.service */ 58513);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _shared_components_gift_form_gift_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/gift-form/gift-form.component */ 48894);
/* harmony import */ var _shared_components_layouts_layout_header_layout_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/layouts/layout-header/layout-header.component */ 97954);
/* harmony import */ var _layouts_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @layouts/layout-footer/layout-footer.component */ 35316);







class FindGiftComponent {
  constructor(seoService, router) {
    this.seoService = seoService;
    this.router = router;
  }
  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------
  ngOnInit() {
    this.seoService.update({
      title: 'Finding the Perfect gift for you',
      description: `Let our AI-powered gift recommendations take the hassle out of picking gifts, and help you find the perfect gift that will bring a smile to your loved one's face.`,
      url: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + this.router.url,
      imageUrl: 'https://giftpickr-web.s3.ap-south-1.amazonaws.com/assets/GiftPickr-cover.png'
    });
  }
}
FindGiftComponent.ɵfac = function FindGiftComponent_Factory(t) {
  return new (t || FindGiftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
FindGiftComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FindGiftComponent,
  selectors: [["app-find-gift"]],
  decls: 11,
  vars: 0,
  consts: [[1, "find-gift-page", "flex", "flex-col", "w-full", "h-auto", "min-h-screen", "bg-black-gradient"], [1, "header", "fixed", "top-0", "z-30", "w-full", "box-shadow", "overflow-x-hidden"], [1, "body", "relative", "z-20", "h-auto", "flex-1", "flex", "flex-col", "items-center", "justify-center", "w-full", "mt-16", "md:mt-20", "overflow-x-hidden"], [1, "banner-section", "w-full", "h-full", "px-8", "md:px-20", "py-10", "md:py-32", "flex-1"], [1, "bg-image-overlay", "w-full", "h-full", "absolute", "top-0", "left-0"], [1, "content", "relative", "z-30", "flex", "flex-col", "md:flex-row-reverse", "items-center", "md:justify-between"], [1, "description-section", "flex", "flex-col", "justify-center", "py-4", "text-white", "font-special", "w-full", "h-full"], [1, "footer", "py-4", "px-6", "md:px-20", "flex", "items-center", "justify-center", "bg-dark", "w-full"]],
  template: function FindGiftComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-layout-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-gift-form");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-layout-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_shared_components_gift_form_gift_form_component__WEBPACK_IMPORTED_MODULE_2__.GiftFormComponent, _shared_components_layouts_layout_header_layout_header_component__WEBPACK_IMPORTED_MODULE_3__.LayoutHeaderComponent, _layouts_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_4__.LayoutFooterComponent],
  styles: ["@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 500ms ease;\n  -webkit-animation: _ngcontent-%COMP%_fadeIn 500ms ease;\n  animation-fill-mode: both;\n}\n\n.home-page[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .home-page[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 1000ms ease;\n  -webkit-animation: _ngcontent-%COMP%_fadeIn 1000ms ease;\n  animation-delay: 1000ms;\n  animation-fill-mode: both;\n}\n.home-page[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  animation-delay: 0ms;\n}\n.home-page[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: #1EBDB0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9hbmltYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZmluZC1naWZ0L2ZpbmQtZ2lmdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSxVQUFBO0VDQ047RURFRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VDQU47QUFDRjtBRGtCQTtFQUNJO0lBQ0ksVUFBQTtFQ05OO0VEU0U7SUFDSSxlQUFBO0lBQ0EsVUFBQTtFQ1BOO0FBQ0Y7QURzQkE7RUFDSSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUNaSjs7QUFwQ0k7O0VBRUksNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUF1Q1I7QUFwQ0k7RUFDSSxvQkFBQTtBQXNDUjtBQW5DSTtFQUNJLGNDUUU7QUQ2QlYiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDUwMG1zIGVhc2U7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDUwMG1zIGVhc2U7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9hbmltYXRpb24uc2Nzcyc7XHJcblxyXG4uaG9tZS1wYWdlIHtcclxuXHJcbiAgICAud3JhcHBlcixcclxuICAgIC5sb2dvIHtcclxuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxMDAwbXMgZWFzZTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDEwMDBtcyBlYXNlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMTAwMG1zO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMG1zO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb3Qge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNFQ1RJT04gVmFyaWFibGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTk9URSBQcm9qZWN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBOT1RFIENvbG9ycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE5PVEUgQm9vdHN0cmFwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTk9URSBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4kdXRpbGl0aWVzOiAoXG4gIFwiY3Vyc29yXCI6IChwcm9wZXJ0eTogY3Vyc29yLFxuICAgIGNsYXNzOiBjdXJzb3IsXG4gICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgdmFsdWVzOiBwb2ludGVyLFxuICApXG4pO1xuXG4vLyBOT1RFIENvbG9yIHN5c3RlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiRwcmltYXJ5OiAjMUVCREIwO1xuJHNlY29uZGFyeTogIzE5MTgxNztcbiRzZWNvbmRhcnktaW52ZXJzZTogI2U2ZWJlYjtcblxuJHRleHQtbXV0ZWQ6ICNBQ0E3QUE7XG4kaW5mbzogIzM3NUY5QjsgLy8gIzNDNzhEQTtcbiRkYW5nZXI6ICNEMDAyMUI7XG4kc3VjY2VzczogIzEyYTM2NjtcbiRtaW4tY29udHJhc3QtcmF0aW86IDIuNTtcblxuLy8gTk9URSBCb2R5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBOT1RFIEdyaWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE5PVEUgQm9yZGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTk9URSBUeXBvZ3JhcGh5ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBOT1RFIExpbmtzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOT1RFIEJhZGdlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOT1RFIEJ1dHRvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiRidG4tY2xvc2UtY29sb3I6IHdoaXRlO1xuXG4vLyBOT1RFIE5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOT1RFIE5hdnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE5PVEUgTW9kYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTk9URSBEcm9wZG93bnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTk9URSBDYXJkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBOT1RFIExpc3QgZ3JvdXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOT1RFIFBhZ2luYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOT1RFIFBvcG92ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOT1RFIFR5cG9ncmFwaHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOT1RFIEZvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE5PVEUgVGFibGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gIVNFQ1RJT04gVmFyaWFibGVzIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 18493:
/*!*****************************************************!*\
  !*** ./src/app/pages/find-gift/find-gift.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindGiftModule": () => (/* binding */ FindGiftModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 85802);
/* harmony import */ var _find_gift_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-gift-routing.module */ 41402);
/* harmony import */ var _find_gift_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-gift.component */ 11318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
// Angular modules

// Internal modules


// Components


class FindGiftModule {}
FindGiftModule.ɵfac = function FindGiftModule_Factory(t) {
  return new (t || FindGiftModule)();
};
FindGiftModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: FindGiftModule
});
FindGiftModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _find_gift_routing_module__WEBPACK_IMPORTED_MODULE_1__.FindGiftRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FindGiftModule, {
    declarations: [_find_gift_component__WEBPACK_IMPORTED_MODULE_2__.FindGiftComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _find_gift_routing_module__WEBPACK_IMPORTED_MODULE_1__.FindGiftRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=493.js.map