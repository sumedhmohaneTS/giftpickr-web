"use strict";
(self["webpackChunkgiftpickr"] = self["webpackChunkgiftpickr"] || []).push([["src_app_pages_homeV2_homeV2_module_ts"],{

/***/ 6918:
/*!*************************************************************!*\
  !*** ./src/app/pages/homeV2/featured/featured.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedComponent": () => (/* binding */ FeaturedComponent)
/* harmony export */ });
/* harmony import */ var C_Users_sumed_OneDrive_Documents_GitHub_giftpickr_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4437);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _homeV2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../homeV2.service */ 714);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ 3284);

// Angular modules









const _c0 = ["cardList"];
function FeaturedComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeaturedComponent_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.scrollLeft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " chevron_left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-0", ctx_r0.isAtStart);
  }
}
function FeaturedComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeaturedComponent_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.scrollRight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " chevron_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-0", ctx_r1.isAtEnd);
  }
}
function FeaturedComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-product-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const last_r9 = ctx.last;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.isScrollable ? last_r9 ? "mr-0" : "mr-6 md:mr-10" : "mr-6 md:mr-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("productData", product_r8);
  }
}
class FeaturedComponent {
  constructor(_platformId, state, service, cdr) {
    this._platformId = _platformId;
    this.state = state;
    this.service = service;
    this.cdr = cdr;
    this.dataLoaded = false;
    this.isScrollable = false;
    this.isAtStart = true;
    this.isAtEnd = false;
  }
  ngOnInit() {
    // await this.getFeaturedProducts();
    this.waitFor(this.getFeaturedProducts());
  }
  waitFor(prom) {
    return (0,C_Users_sumed_OneDrive_Documents_GitHub_giftpickr_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.isObservable)(prom)) {
        prom = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(prom);
      }
      const macroTask = Zone.current.scheduleMacroTask(`WAITFOR-${Math.random()}`, () => {}, {}, () => {});
      return prom.then(p => {
        macroTask.invoke();
        return p;
      });
    })();
  }
  ngAfterViewInit() {
    this.checkScrollable();
    const cardList = this.cardListRef.nativeElement;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this._platformId)) {
      cardList.addEventListener('scroll', () => {
        this.checkIfAtStartOrEnd();
      });
    }
  }
  checkScrollable() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformServer)(this._platformId)) {
      return;
    }
    const cardList = this.cardListRef.nativeElement;
    const cardContainer = cardList.parentElement;
    const containerWidth = cardContainer.offsetWidth;
    const contentWidth = cardList.scrollWidth;
    this.isScrollable = this.dataLoaded && contentWidth > containerWidth;
  }
  ngOnDestroy() {
    const cardList = this.cardListRef.nativeElement;
    cardList.removeEventListener('scroll', () => {
      this.checkIfAtStartOrEnd();
    });
  }
  getFeaturedProducts() {
    var _this = this;
    return (0,C_Users_sumed_OneDrive_Documents_GitHub_giftpickr_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const KEY_NAME = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.makeStateKey)('getFeaturedProducts');
      const featuredProducts = _this.state.get(KEY_NAME, null);
      if (featuredProducts) {
        _this.featuredProducts = featuredProducts;
        _this.postFetchProducts();
        return;
      }
      const response = yield _this.service.getFeaturedProducts();
      _this.featuredProducts = response && response.data && response.data.data || [];
      _this.featuredProducts = response.data.data.slice(0, 6);
      _this.state.set(KEY_NAME, _this.featuredProducts);
      _this.postFetchProducts();
    })();
  }
  postFetchProducts() {
    this.dataLoaded = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this._platformId)) {
      setTimeout(() => this.checkScrollable(), 0);
    }
    this.checkScrollable();
  }
  scrollLeft() {
    const cardList = this.cardListRef.nativeElement;
    cardList.scrollTo({
      left: cardList.scrollLeft - 1500,
      behavior: 'smooth'
    });
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this._platformId)) {
      setTimeout(() => {
        this.checkIfAtStartOrEnd();
      }, 0);
    }
  }
  scrollRight() {
    const cardList = this.cardListRef.nativeElement;
    cardList.scroll({
      left: cardList.scrollLeft + 1500,
      behavior: 'smooth'
    });
    this.checkIfAtStartOrEnd();
  }
  checkIfAtStartOrEnd() {
    const cardList = this.cardListRef.nativeElement;
    const scrollLeft = cardList.scrollLeft;
    const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;
    this.isAtStart = scrollLeft === 0;
    this.isAtEnd = scrollLeft === maxScrollLeft;
    this.cdr.detectChanges();
  }
}
FeaturedComponent.ɵfac = function FeaturedComponent_Factory(t) {
  return new (t || FeaturedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.TransferState), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_homeV2_service__WEBPACK_IMPORTED_MODULE_1__.HomeV2Service), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
FeaturedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FeaturedComponent,
  selectors: [["app-featured"]],
  viewQuery: function FeaturedComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cardListRef = _t.first);
    }
  },
  decls: 9,
  vars: 4,
  consts: [[1, "featured-section", "py-4", "flex", "flex-col", "items-center", "justify-center"], [1, "text-secondary-inverse", "font-special", "text-2xl", "font-semibold", "mb-4"], [1, "content", "relative", "py-1", "w-full", "flex", "items-center", "justify-center", "overflow-hidden"], ["class", "left-arrow hidden md:flex items-center justify-center absolute left-0 z-30 fadeIn cursor-pointer", 3, "opacity-0", "click", 4, "ngIf"], ["class", "right-arrow hidden md:flex items-center justify-center absolute right-0 z-30 fadeIn  cursor-pointer", 3, "opacity-0", "click", 4, "ngIf"], [1, "card-list", "flex", "items-start", "w-full", "overflow-x-auto", "hide-scroll", 3, "ngClass"], ["cardList", ""], ["class", "card-container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "left-arrow", "hidden", "md:flex", "items-center", "justify-center", "absolute", "left-0", "z-30", "fadeIn", "cursor-pointer", 3, "click"], [1, "material-icons", "pulse", "text-secondary", "mx-1", "mb-1", "text-4xl", "text-secondary-inverse", "relative", "z-50", "mt-1"], [1, "right-arrow", "hidden", "md:flex", "items-center", "justify-center", "absolute", "right-0", "z-30", "fadeIn", "cursor-pointer", 3, "click"], [1, "card-container", 3, "ngClass"], [3, "productData"]],
  template: function FeaturedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Check out our favorite gifts for any occasion ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FeaturedComponent_div_4_Template, 3, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FeaturedComponent_div_5_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FeaturedComponent_div_8_Template, 2, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isScrollable);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isScrollable);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isScrollable ? "justify-start" : "justify-center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__.ProductCardComponent],
  styles: [".card-list[_ngcontent-%COMP%]   .card-container.last[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.left-arrow[_ngcontent-%COMP%], .right-arrow[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 100%;\n}\n.left-arrow[_ngcontent-%COMP%]::before, .right-arrow[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 50px;\n  \n  background: linear-gradient(to left, rgba(255, 255, 255, 0), #191414);\n  pointer-events: none;\n  \n}\n.left-arrow[_ngcontent-%COMP%]::after, .right-arrow[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  background-color: #333;\n  z-index: 10;\n  border-radius: 50%;\n}\n\n.left-arrow[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(255, 255, 255, 0), #191817);\n}\n\n.right-arrow[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), #191817);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZVYyL2ZlYXR1cmVkL2ZlYXR1cmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0kscUJBQUE7QUFEWjs7QUFNQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUk7O0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EscUVBQUE7RUFDQSxvQkFBQTtFQUNBLDZEQUFBO0FBSFI7QUFPSTs7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKUjs7QUFTSTtFQUNJLHFFQUFBO0FBTlI7O0FBV0k7RUFDSSxzRUFBQTtBQVJSIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbGlzdCB7XHJcbiAgICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICYubGFzdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWZ0LWFycm93LFxyXG4ucmlnaHQtYXJyb3cge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAvKiBBZGp1c3QgYXMgcGVyIHlvdXIgcmVxdWlyZW1lbnQgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgIzE5MTQxNCk7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgLyogVGhpcyBpcyBpbXBvcnRhbnQgdG8gZW5hYmxlIGNsaWNraW5nIG9uIHRoZSBhcnJvdyBidXR0b24gKi9cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGVmdC1hcnJvdyB7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAjMTkxODE3KTtcclxuICAgIH1cclxufVxyXG5cclxuLnJpZ2h0LWFycm93IHtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAjMTkxODE3KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 45:
/*!*******************************************************!*\
  !*** ./src/app/pages/homeV2/homeV2-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeV2RoutingModule": () => (/* binding */ HomeV2RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _homeV2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeV2.component */ 8333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

// Components



const routes = [{
  path: '',
  component: _homeV2_component__WEBPACK_IMPORTED_MODULE_0__.HomeV2Component
}];
class HomeV2RoutingModule {}
HomeV2RoutingModule.ɵfac = function HomeV2RoutingModule_Factory(t) {
  return new (t || HomeV2RoutingModule)();
};
HomeV2RoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HomeV2RoutingModule
});
HomeV2RoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeV2RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8333:
/*!**************************************************!*\
  !*** ./src/app/pages/homeV2/homeV2.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeV2Component": () => (/* binding */ HomeV2Component)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/seo/seo.service */ 5836);
/* harmony import */ var _shared_components_layouts_layout_header_layout_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/layouts/layout-header/layout-header.component */ 2758);
/* harmony import */ var _layouts_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @layouts/layout-footer/layout-footer.component */ 6291);
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featured/featured.component */ 6918);
// Angular modules










function HomeV2Component_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 19);
  }
}
function HomeV2Component_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 20);
  }
}
function HomeV2Component_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 21);
  }
}
function HomeV2Component_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 22);
  }
}
function HomeV2Component_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 23);
  }
}
class HomeV2Component {
  constructor(_platformId, router, seoService) {
    this._platformId = _platformId;
    this.router = router;
    this.seoService = seoService;
    this.fileNo = 1;
  }
  ngOnInit() {
    this.calculateFileNo();
    console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + this.router.url);
    this.seoService.update({
      title: 'GiftPickr - Lets pick a gift for your loved ones',
      description: 'Find the perfect gift for any occasion with GiftPickr.com. Our gift recommendation system makes gift-giving easy and stress-free. Start browsing today!',
      url: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + this.router.url,
      imageUrl: 'https://giftpickr-web.s3.ap-south-1.amazonaws.com/assets/GiftPickr-cover.png'
    });
  }
  calculateFileNo() {
    this.fileNo = Math.floor(Math.random() * 5) + 1;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this._platformId)) {
      this.interval = setInterval(() => {
        this.fileNo = this.fileNo % 5 + 1;
      }, 5000);
    }
  }
  ngOnDestroy() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this._platformId)) {
      clearInterval(this.interval);
    }
  }
}
HomeV2Component.ɵfac = function HomeV2Component_Factory(t) {
  return new (t || HomeV2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
};
HomeV2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HomeV2Component,
  selectors: [["app-homeV2"]],
  decls: 26,
  vars: 5,
  consts: [[1, "home-page", "w-full", "h-screen", "bg-black-gradient"], [1, "header", "fixed", "top-0", "z-30", "w-full", "box-shadow", "overflow-x-hidden"], [1, "body", "relative", "z-20", "flex", "flex-col", "items-center", "justify-center", "w-full", "mt-16", "md:mt-20", "overflow-x-hidden"], [1, "banner-section", "w-full", "h-full", "px-8", "md:px-20", "py-10", "md:py-32", "flex-1"], [1, "bg-image-overlay", "w-full", "h-full", "absolute", "top-0", "left-0"], [1, "content", "relative", "z-30", "flex", "flex-col", "md:flex-row-reverse", "items-center", "md:justify-between"], [1, "image-section", "flex", "items-center", "justify-center", "w-full", "md:w-3/5", "h-80", "md:h-80"], [1, "illustration", "overflow-hidden", "flex", "items-center", "justify-end", "w-full", "h-full"], ["class", "w-auto h-auto max-h-80 fadeIn", "src", "../../../assets/svg/illus1.svg", "alt", "", 4, "ngIf"], ["class", "w-auto h-auto max-h-80 fadeIn", "src", "../../../assets/svg/illus2.svg", "alt", "", 4, "ngIf"], ["class", "w-auto h-auto max-h-80 fadeIn", "src", "../../../assets/svg/illus3.svg", "alt", "", 4, "ngIf"], ["class", "w-auto h-auto max-h-80 fadeIn", "src", "../../../assets/svg/illus4.svg", "alt", "", 4, "ngIf"], ["class", "w-auto h-auto max-h-80 fadeIn", "src", "../../../assets/svg/illus5.svg", "alt", "", 4, "ngIf"], [1, "description-section", "flex", "flex-col", "justify-center", "py-4", "text-white", "font-special", "w-full", "md:w-2/5", "md:h-80"], [1, "text-2xl", "md:text-4xl", "font-semibold", "text-primary"], [1, "text-xl", "md:text-2xl", "font-semibold", "mb-2"], [1, "text-sm", "md:text-base", "text-secondary-inverse", "opacity-75"], [1, "featured-products", "relative", "z-30", "px-8", "md:px-20", "w-full", "h-full", "py-4", "bg-dark"], [1, "footer", "py-4", "px-6", "md:px-20", "flex", "items-center", "justify-center", "bg-dark", "w-full"], ["src", "../../../assets/svg/illus1.svg", "alt", "", 1, "w-auto", "h-auto", "max-h-80", "fadeIn"], ["src", "../../../assets/svg/illus2.svg", "alt", "", 1, "w-auto", "h-auto", "max-h-80", "fadeIn"], ["src", "../../../assets/svg/illus3.svg", "alt", "", 1, "w-auto", "h-auto", "max-h-80", "fadeIn"], ["src", "../../../assets/svg/illus4.svg", "alt", "", 1, "w-auto", "h-auto", "max-h-80", "fadeIn"], ["src", "../../../assets/svg/illus5.svg", "alt", "", 1, "w-auto", "h-auto", "max-h-80", "fadeIn"]],
  template: function HomeV2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-layout-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HomeV2Component_img_9_Template, 1, 0, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HomeV2Component_img_10_Template, 1, 0, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HomeV2Component_img_11_Template, 1, 0, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, HomeV2Component_img_12_Template, 1, 0, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, HomeV2Component_img_13_Template, 1, 0, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Looking for the perfect gift for someone special?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Let us help you pick it!");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Impress your loved ones with thoughtful and personalized gifts from our website, which offers recommendations based on the recipient's interests, age, occasion and relationship. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "app-featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "app-layout-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fileNo == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fileNo == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fileNo == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fileNo == 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fileNo == 5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_layouts_layout_header_layout_header_component__WEBPACK_IMPORTED_MODULE_2__.LayoutHeaderComponent, _layouts_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_3__.LayoutFooterComponent, _featured_featured_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedComponent],
  styles: ["@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 500ms ease;\n  -webkit-animation: _ngcontent-%COMP%_fadeIn 500ms ease;\n  animation-fill-mode: both;\n}\n\n@keyframes _ngcontent-%COMP%_gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  25% {\n    background-position: 50% 50%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  75% {\n    background-position: 50% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.home-page[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .bg-image-overlay[_ngcontent-%COMP%] {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(45deg, #191414, #111, #222, #131313);\n  background-size: 400% 400%;\n  animation: _ngcontent-%COMP%_gradient 20s ease-in-out infinite;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9hbmltYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZVYyL2hvbWVWMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSxVQUFBO0VDQ047RURFRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VDQU47QUFDRjtBRGtCQTtFQUNJO0lBQ0ksVUFBQTtFQ05OO0VEU0U7SUFDSSxlQUFBO0lBQ0EsVUFBQTtFQ1BOO0FBQ0Y7QURzQkE7RUFDSSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUNaSjs7QUFwQ0E7RUFDSTtJQUNJLDJCQUFBO0VBdUNOO0VBcENFO0lBQ0ksNEJBQUE7RUFzQ047RUFuQ0U7SUFDSSw4QkFBQTtFQXFDTjtFQWxDRTtJQUNJLDRCQUFBO0VBb0NOO0VBakNFO0lBQ0ksMkJBQUE7RUFtQ047QUFDRjtBQTdCUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdFQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBK0JaIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmZhZGVJbiB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiA1MDBtcyBlYXNlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA1MDBtcyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2FuaW1hdGlvbi5zY3NzJztcclxuXHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAyNSUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgNzUlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5ob21lLXBhZ2Uge1xyXG4gICAgLmJvZHkge1xyXG4gICAgICAgIC5iZy1pbWFnZS1vdmVybGF5IHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE5MTQxNCwgIzExMSwgIzIyMiwgIzEzMTMxMyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGdyYWRpZW50IDIwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1876:
/*!***********************************************!*\
  !*** ./src/app/pages/homeV2/homeV2.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeV2Module": () => (/* binding */ HomeV2Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured/featured.component */ 6918);
/* harmony import */ var _homeV2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeV2-routing.module */ 45);
/* harmony import */ var _homeV2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeV2.component */ 8333);
/* harmony import */ var _homeV2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeV2.service */ 714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
// Angular modules

// Internal modules



// Components



class HomeV2Module {}
HomeV2Module.ɵfac = function HomeV2Module_Factory(t) {
  return new (t || HomeV2Module)();
};
HomeV2Module.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: HomeV2Module
});
HomeV2Module.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_homeV2_service__WEBPACK_IMPORTED_MODULE_4__.HomeV2Service],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _homeV2_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeV2RoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomeV2Module, {
    declarations: [_homeV2_component__WEBPACK_IMPORTED_MODULE_3__.HomeV2Component, _featured_featured_component__WEBPACK_IMPORTED_MODULE_1__.FeaturedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _homeV2_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeV2RoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 714:
/*!************************************************!*\
  !*** ./src/app/pages/homeV2/homeV2.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeV2Service": () => (/* binding */ HomeV2Service)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 2340);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 2111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class HomeV2Service {
  constructor(http) {
    this.http = http;
    this.default = {
      withCredentials: true,
      timeout: 990000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    // NOTE Instances
    this.api = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
      baseURL: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl,
      ...this.default
    });
    this.domainUrl = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  getFeaturedProducts() {
    return this.api.get(`${this.domainUrl}external/products/featured`);
  }
}
HomeV2Service.ɵfac = function HomeV2Service_Factory(t) {
  return new (t || HomeV2Service)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
HomeV2Service.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: HomeV2Service,
  factory: HomeV2Service.ɵfac
});

/***/ }),

/***/ 4363:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstValueFrom": () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 4423);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 9904);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_homeV2_homeV2_module_ts.js.map