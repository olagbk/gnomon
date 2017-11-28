webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sketches_sketches_component__ = __webpack_require__("../../../../../src/app/pages/sketches/sketches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_drawings_drawings_component__ = __webpack_require__("../../../../../src/app/pages/drawings/drawings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_photos_photos_component__ = __webpack_require__("../../../../../src/app/pages/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_photos_photo_album_component__ = __webpack_require__("../../../../../src/app/pages/photos/photo-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_blog_blog_component__ = __webpack_require__("../../../../../src/app/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_blog_blog_entry_component__ = __webpack_require__("../../../../../src/app/pages/blog/blog-entry.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'drawings',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_drawings_drawings_component__["a" /* DrawingsComponent */]
    },
    {
        path: 'sketches',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_sketches_sketches_component__["a" /* SketchesComponent */]
    },
    {
        path: 'photos',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_photos_photos_component__["a" /* PhotosComponent */]
    },
    {
        path: 'photos/:album',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_photos_photo_album_component__["a" /* PhotoAlbumComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_blog_blog_component__["a" /* BlogComponent */]
    },
    {
        path: 'blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__pages_blog_blog_entry_component__["a" /* BlogEntryComponent */]
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(ROUTES)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-wrapper\" [style.background-image]=\"'url(' + backgroundUrl + ')'\">\n  <img [src]=\"imgPreloadUrl\" (load)=\"backgroundUrl = imgPreloadUrl\" hidden>\n  <app-spinner *ngIf=\"!backgroundUrl\"></app-spinner>\n</div>\n<div *ngIf=\"backgroundUrl\" class=\"wrapper d-flex justify-content-center\">\n  <app-navbar></app-navbar>\n  <router-outlet (deactivate)=\"scrollToTop()\"></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-wrapper {\n  background-color: rgba(0, 0, 0, 0.95);\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: auto; }\n\n.wrapper {\n  background-color: rgba(0, 0, 0, 0.7);\n  padding-top: 5rem;\n  position: absolute;\n  min-height: 100%;\n  min-width: 100%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.imgPreloadUrl = '../assets/gnomon.png';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.setBackground = function () {
        this.backgroundUrl = this.imgPreloadUrl;
        this.backgroundReady = true;
    };
    AppComponent.prototype.scrollToTop = function () {
        window.scroll(0, 0);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export startupServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_popover__ = __webpack_require__("../../../../ngx-bootstrap/popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_typeahead__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_disqus__ = __webpack_require__("../../../../ngx-disqus/ngx-disqus.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_gallery__ = __webpack_require__("../../../../ng-gallery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_ellipsis__ = __webpack_require__("../../../../ngx-ellipsis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_ellipsis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_ellipsis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_recaptcha_forms__ = __webpack_require__("../../../../ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_photos_album_thumb_component__ = __webpack_require__("../../../../../src/app/pages/photos/album-thumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_blog_blog_component__ = __webpack_require__("../../../../../src/app/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_blog_blog_entry_component__ = __webpack_require__("../../../../../src/app/pages/blog/blog-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__widgets_contact_form_contact_form_component__ = __webpack_require__("../../../../../src/app/widgets/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_drawings_drawings_component__ = __webpack_require__("../../../../../src/app/pages/drawings/drawings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gallery_gallery_thumb_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-thumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__widgets_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/widgets/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__widgets_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/widgets/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_photos_photo_album_component__ = __webpack_require__("../../../../../src/app/pages/photos/photo-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_photos_photos_component__ = __webpack_require__("../../../../../src/app/pages/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_sketches_sketches_component__ = __webpack_require__("../../../../../src/app/pages/sketches/sketches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__widgets_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/widgets/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__widgets_scroll_scroll_component__ = __webpack_require__("../../../../../src/app/widgets/scroll/scroll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__widgets_tags_tags_component__ = __webpack_require__("../../../../../src/app/widgets/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_blog_blog_service__ = __webpack_require__("../../../../../src/app/pages/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__gallery_flickr_service__ = __webpack_require__("../../../../../src/app/gallery/flickr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__gallery_albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_times_pipe__ = __webpack_require__("../../../../../src/app/pipes/times.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__gallery_gallery_config__ = __webpack_require__("../../../../../src/app/gallery/gallery.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































function startupServiceFactory(albumsService) {
    return function () { return albumsService.loadAll(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_25__widgets_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_26__widgets_pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_30__widgets_spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_31__widgets_scroll_scroll_component__["a" /* ScrollComponent */],
            __WEBPACK_IMPORTED_MODULE_20__widgets_contact_form_contact_form_component__["a" /* ContactFormComponent */],
            __WEBPACK_IMPORTED_MODULE_32__widgets_tags_tags_component__["a" /* TagsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_blog_blog_entry_component__["a" /* BlogEntryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_29__pages_sketches_sketches_component__["a" /* SketchesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_drawings_drawings_component__["a" /* DrawingsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pages_photos_photos_component__["a" /* PhotosComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pages_photos_photo_album_component__["a" /* PhotoAlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_photos_album_thumb_component__["a" /* AlbumThumbComponent */],
            __WEBPACK_IMPORTED_MODULE_22__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_23__gallery_gallery_thumb_component__["a" /* GalleryThumbComponent */],
            __WEBPACK_IMPORTED_MODULE_36__pipes_times_pipe__["a" /* TimesPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_ellipsis__["EllipsisModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_disqus__["a" /* DisqusModule */].forRoot('gnomon'),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_popover__["a" /* PopoverModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ng_gallery__["b" /* GalleryModule */].forRoot(__WEBPACK_IMPORTED_MODULE_37__gallery_gallery_config__["a" /* galleryConfig */]),
            __WEBPACK_IMPORTED_MODULE_12_ng_recaptcha__["RecaptchaModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ng_recaptcha_forms__["RecaptchaFormsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_35__gallery_albums_service__["a" /* AlbumsService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"],
                useFactory: startupServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_35__gallery_albums_service__["a" /* AlbumsService */]],
                multi: true
            },
            __WEBPACK_IMPORTED_MODULE_33__pages_blog_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_34__gallery_flickr_service__["a" /* FlickrService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_12_ng_recaptcha__["RECAPTCHA_SETTINGS"],
                useValue: { siteKey: '6LfB2jkUAAAAAAM_uaJSpcoLZk3mEe1Sh17ShDcN' },
            },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/album.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=album.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/albums.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumsService = (function () {
    function AlbumsService(http) {
        this.http = http;
    }
    AlbumsService.prototype.loadAll = function () {
        var _this = this;
        return this.http.get('/api/albums')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) { return _this._albumData = data; })
            .catch(function (err) {
            console.log("Couldn't prefetch albums from the server.");
            Promise.resolve();
        });
    };
    AlbumsService.prototype.getPhotos = function () {
        return this.data.filter(function (a) { return a.type === 'photos'; });
    };
    AlbumsService.prototype.getAlbumByType = function (type) {
        return this.data.find(function (album) { return album.type === type; });
    };
    Object.defineProperty(AlbumsService.prototype, "data", {
        get: function () {
            return this._albumData;
        },
        enumerable: true,
        configurable: true
    });
    return AlbumsService;
}());
AlbumsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AlbumsService);

var _a;
//# sourceMappingURL=albums.service.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/flickr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlickrService = FlickrService_1 = (function () {
    function FlickrService(http, albums) {
        this.http = http;
        this.albums = albums;
    }
    FlickrService.handleError = function (error) {
        console.log("Gallery Service error: " + error);
        return Promise.reject(error.message || error);
    };
    FlickrService.prototype.getImages = function (options) {
        return this.http.get('/api/flickr', { params: options }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return FlickrService_1.handleError(err); });
    };
    return FlickrService;
}());
FlickrService = FlickrService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__albums_service__["a" /* AlbumsService */]) === "function" && _b || Object])
], FlickrService);

var FlickrService_1, _a, _b;
//# sourceMappingURL=flickr.service.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-thumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div #thumb\n     class=\"image-frame\"\n     (click)=\"openGallery()\">\n\n  <img [src]=\"image.thumbnail\" (load)=\"setBackground(thumb)\" hidden/>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-thumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  max-width: 320px;\n  margin: 0.5rem; }\n\n.image-frame {\n  opacity: 0.85;\n  height: 220px;\n  background: #fff center no-repeat;\n  background-size: cover;\n  border-radius: 1px;\n  box-shadow: inset 0 0 10px 2px #000; }\n  .image-frame:hover {\n    cursor: pointer;\n    opacity: .99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-thumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryThumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_gallery__ = __webpack_require__("../../../../ng-gallery/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryThumbComponent = (function () {
    function GalleryThumbComponent(gallery, renderer) {
        this.gallery = gallery;
        this.renderer = renderer;
        this.addBackground = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GalleryThumbComponent.prototype.ngOnInit = function () {
    };
    GalleryThumbComponent.prototype.openGallery = function () {
        this.gallery.set(this.index);
    };
    GalleryThumbComponent.prototype.setBackground = function (el) {
        this.renderer.setStyle(el, 'backgroundImage', "url(" + this.image.thumbnail + ")");
        this.addBackground.emit();
    };
    return GalleryThumbComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_gallery__["GalleryImage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_gallery__["GalleryImage"]) === "function" && _a || Object)
], GalleryThumbComponent.prototype, "image", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], GalleryThumbComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], GalleryThumbComponent.prototype, "addBackground", void 0);
GalleryThumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery-thumb',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-thumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-thumb.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ng_gallery__["c" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_gallery__["c" /* GalleryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _d || Object])
], GalleryThumbComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gallery-thumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-wrapper my-4 my-md-5 px-5\">\n\n  <div [ngSwitch]=\"true\" class=\"d-flex justify-content-center\">\n\n    <app-pagination *ngSwitchCase=\"galleryLoaded\" [pages]=\"pages\"></app-pagination>\n\n    <p *ngSwitchCase=\"galleryError\" class=\"error-message p-3\">Couldn't fetch images :(</p>\n\n    <app-spinner *ngSwitchDefault></app-spinner>\n\n  </div>\n\n  <div [style.visibility]=\"(galleryLoaded)? 'visible' : 'hidden'\">\n\n    <div class=\"row justify-content-center\">\n\n      <app-gallery-thumb *ngFor=\"let image of images; let i = index\"\n                         [image]=\"image\"\n                         [index]=\"i\"\n                         (addBackground)=\"addThumb()\">\n\n      </app-gallery-thumb>\n\n    </div>\n\n    <app-scroll></app-scroll>\n\n  </div>\n\n\n</div>\n\n<gallery-modal></gallery-modal>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-spinner {\n  position: absolute;\n  top: 0; }\n  @media (min-width: 768px) {\n    app-spinner {\n      top: 0.5rem; } }\n\n.error-message {\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_gallery__ = __webpack_require__("../../../../ng-gallery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flickr_service__ = __webpack_require__("../../../../../src/app/gallery/flickr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = (function () {
    function GalleryComponent(gallery, flickr, activatedRoute) {
        this.gallery = gallery;
        this.flickr = flickr;
        this.activatedRoute = activatedRoute;
        this.perPage = 24;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.thumbsLoaded = 0;
            _this.galleryLoaded = false;
            _this.galleryError = false;
            _this.currentPage = Number(params['page']) || 1;
            _this.getImages();
        });
    };
    GalleryComponent.prototype.getImages = function () {
        var _this = this;
        this.flickr.getImages({ page: this.currentPage, perPage: this.perPage, album: this.album })
            .then(function (data) {
            _this.pages = Math.ceil(data.count / _this.perPage);
            _this.images = data.images;
            _this.gallery.load(_this.images);
        })
            .catch(function (err) { return _this.galleryError = true; });
    };
    GalleryComponent.prototype.addThumb = function () {
        if (++this.thumbsLoaded === this.images.length) {
            this.galleryLoaded = true;
        }
    };
    return GalleryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GalleryComponent.prototype, "album", void 0);
GalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_gallery__["c" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_gallery__["c" /* GalleryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__flickr_service__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__flickr_service__["a" /* FlickrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], GalleryComponent);

var _a, _b, _c;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return galleryConfig; });
var galleryConfig = {
    'style': {
        'background': 'rgba(25,25,25,0.8)',
        'width': '100%',
        'height': '100%'
    },
    'description': {
        'text': true,
        'counter': true,
        'style': {
            'text-align': 'center',
            'font-size': '3vmin',
            'letter-spacing': '2px',
            'margin-bottom': '3px',
        },
        'prefixes': ['IMG', 'DSC']
    },
    'animation': 'fade',
    'thumbnails': {
        'position': 'top',
        'space': 20,
        'width': 180,
        'height': 135
    },
    'navigation': true,
    'gestures': true
};
//# sourceMappingURL=gallery.config.js.map

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5 mt-lg-5 px-4\">\n\n  <div #photoDiv\n       class=\"photo\">\n\n    <span #spinner class=\"spinner\">\n      <app-spinner></app-spinner>\n    </span>\n\n    <img src=\"../../../assets/about.jpg\"\n         (load)=\"photoDiv.style.backgroundColor = 'saddlebrown'; spinner.style.display = 'none'\"/>\n  </div>\n\n  <div class=\"desc pt-3 mb-4\">\n    <p>I am interior crocodile alligator</p>\n\n    <div class=\"desc-links mb-2\">\n      <a class=\"link desc-link\" href=\"https://www.facebook.com/BoguOs-Gnomon-689909394425813/\" target=\"_blank\">facebook</a> /\n      <a class=\"link desc-link\" href=\"https://www.flickr.com/photos/99486946@N05/\" target=\"_blank\">flickr</a>\n    </div>\n\n    <app-contact-form></app-contact-form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  background: radial-gradient(#000, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)); }\n\n.spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\napp-spinner {\n  position: absolute; }\n\n.row {\n  margin: auto;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n\n.photo {\n  border: 2px solid #343a40;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: inset 0 0 10px 2px #000;\n  opacity: 0.5; }\n  .photo img {\n    width: 100%;\n    opacity: 0.8; }\n\n.desc {\n  width: 100%;\n  text-align: center;\n  color: #adb5bd;\n  letter-spacing: 3px;\n  font-weight: 300; }\n\n.desc-link {\n  line-height: 2rem; }\n\n@media (min-width: 992px) {\n  .photo {\n    width: 30vw;\n    height: 30vw; }\n  .desc {\n    width: 40vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.formVisible = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.toggleForm = function () {
        this.formVisible = !this.formVisible;
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/pages/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"post-col col-12 col-md-9\">\n\n    <div class=\"dark-container post m-md-2 m-lg-3\">\n\n      <a class=\"back link\" routerLink=\"/blog\">&larr; back</a>\n\n      <h4 class=\"title text-light\">{{post?.title}}</h4>\n\n      <span class=\"created-at\">{{post?.createdAt | date:'longDate' }}</span>\n      <span class=\"updated-at mb-2\" *ngIf=\"post?.createdAt !== post?.updatedAt\">Last updated on {{post?.updatedAt | date:'longDate'}}</span>\n\n      <app-tags [tags]=\"post?.tags\" (tagSelected)=\"searchTag($event)\"></app-tags>\n\n      <p class=\"text mt-3\">{{post?.body}}</p>\n      <a class=\"back link\" routerLink=\"/blog\">&larr; back</a>\n    </div>\n    <disqus [identifier]=\"'/blog/' + post?.id\"></disqus>\n\n  </div>\n\n  <div class=\"recent-col col-12 col-md-3 p-4 justify-content-start text-center\">\n    <h5 class=\"dark-container recent-header mb-4 p-3\">Recent posts</h5>\n\n    <a class=\"recent-post dark-container p-3 my-3\"\n       *ngFor=\"let post of recentPosts | async\"\n       [routerLink]=\"'/blog/' + post.id\">\n\n      <div class=\"recent-post-header\">\n        <span class=\"recent-title\">{{post.title}}</span>\n        <span class=\"middle-dot\">&middot;</span>\n        <span class=\"recent-date\">{{post.createdAt | date}}</span>\n      </div>\n\n      <p class=\"recent-text pl-md-3 mt-2\"\n         ellipsis=\"(...)\"\n         [ellipsis-word-boundaries]=\"' \\n'\">{{post.body}}\n      </p>\n\n    </a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog-entry.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  padding: 1rem; }\n\n.post {\n  padding: 1rem 2rem; }\n\n.text, .updated-at, .back {\n  font-size: 14px; }\n\n.text {\n  overflow: hidden; }\n\n.created-at {\n  text-align: center;\n  color: #868e96; }\n\n.updated-at {\n  text-align: center;\n  color: #495057;\n  line-height: 1.5rem; }\n\n.back {\n  margin: 1rem 0;\n  text-decoration: underline; }\n\n.recent-header {\n  color: rgba(255, 255, 255, 0.6);\n  background: rgba(0, 0, 0, 0.3); }\n\n.recent-post {\n  color: rgba(255, 255, 255, 0.8) !important; }\n\n.recent-post:hover {\n  color: white !important;\n  text-decoration: none; }\n\n.recent-date {\n  color: #868e96; }\n\n.recent-date, .recent-text {\n  font-size: 14px; }\n\n.recent-text {\n  max-height: 100px; }\n\n.recent-title {\n  font-weight: 600; }\n\n@media (min-width: 768px) {\n  .post {\n    padding: 1rem 3rem;\n    line-height: 2.5rem; }\n  .text {\n    font-size: 18px; }\n  .title {\n    font-size: 2.5rem; }\n  .created-at {\n    font-size: 18px; }\n  .updated-at, .back {\n    font-size: 16px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/pages/blog/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogEntryComponent = (function () {
    function BlogEntryComponent(activatedRoute, router, blog) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.blog = blog;
    }
    BlogEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.blog.getPost(params.id).then(function (post) {
                if (!post) {
                    _this.router.navigate(['blog']);
                }
                _this.post = post;
                _this.recentPosts = _this.blog.getPosts({ params: { count: 10 } });
            });
        });
    };
    BlogEntryComponent.prototype.searchTag = function ($event) {
        this.router.navigate(['blog'], { queryParams: { tag: $event.name } });
    };
    return BlogEntryComponent;
}());
BlogEntryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/pages/blog/blog-entry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/blog/blog-entry.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */]) === "function" && _c || Object])
], BlogEntryComponent);

var _a, _b, _c;
//# sourceMappingURL=blog-entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container px-md-5\">\n\n  <div class=\"tags dark-container p-4 mt-1\">\n    <a class=\"small-link\" *ngIf=\"activeTags.length > 0\" (click)=\"deleteAllTags()\">[ reset ]</a>\n    <app-tags [tags]=\"activeTags\"\n              [count]=\"true\"\n              [selected]=\"true\"\n              (tagSelected)=\"deleteTag($event)\">\n\n    </app-tags>\n    <app-tags [tags]=\"inactiveTags\"\n              [count]=\"true\"\n              [abbr]=\"!tagsExpanded\"\n              (tagSelected)=\"addTag($event)\"\n              (tagsExpanded)=\"tagsExpanded = true\">\n    </app-tags>\n    <a class=\"small-link\" *ngIf=\"!tagsExpanded\" (click)=\"tagsExpanded = true\">more...</a>\n\n\n    <span class=\"tags-opts\" *ngIf=\"activeTags?.length > 1\">\n      <a class=\"link\"\n         [class.active]=\"!tagsAllMode\"\n         (click)=\"toggleTagMode()\">any\n      </a> /\n      <a class=\"link\"\n         [class.active]=\"tagsAllMode\"\n         (click)=\"toggleTagMode()\">all\n      </a>\n    </span>\n\n    <ng-container *ngIf=\"tagsExpanded\">\n\n      <input #search\n             [(ngModel)]=\"searchedTag\"\n             [typeahead]=\"inactiveTags\"\n             typeaheadOptionField=\"name\"\n             typeaheadScrollable = true\n             (typeaheadOnSelect)=\"addSearchedTag($event)\"\n             class=\"form-control tag-search\">\n\n      <a class=\"small-link\"\n         (click)=\"tagsExpanded = false\">[ hide ]\n      </a>\n\n    </ng-container>\n\n  </div>\n\n  <div class=\"dark-container post my-4\" *ngFor=\"let post of filteredPosts | async\">\n\n    <a class=\"link title mb-2\" [routerLink]=\"post.id\">{{ post.title }}</a>\n\n    <span class=\"created-at\">{{post.createdAt | date }}</span>\n\n    <app-tags [tags]=\"post.tags\"\n              (tagSelected)=\"addTag($event)\">\n    </app-tags>\n\n    <p class=\"text pl-md-3 mt-2\"\n       ellipsis=\"(...)\"\n       [ellipsis-word-boundaries]=\"' \\n'\"\n       (ellipsis-click-more)=\"goToPost(post.id)\">{{post.body}}\n    </p>\n\n    <div class=\"shadow-wrapper\"></div>\n  </div>\n</div>\n<app-scroll></app-scroll>\n"

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3); }\n\n.post {\n  position: relative;\n  padding: 2rem 2rem 1rem 2rem; }\n\n.text {\n  font-size: 14px;\n  max-height: 250px; }\n\n.title {\n  font-size: 1.5rem;\n  text-decoration: underline;\n  text-underline-position: under; }\n  .title:hover {\n    letter-spacing: 2.5px; }\n  .title:not(:hover) {\n    font-weight: 500; }\n\n.created-at {\n  text-align: center;\n  color: #868e96; }\n\n.shadow-wrapper {\n  position: absolute;\n  width: 90%;\n  height: 1px;\n  left: 5%;\n  bottom: 5px;\n  box-shadow: 0px -20px 10px 20px rgba(0, 0, 0, 0.5); }\n\n.tags {\n  text-align: center; }\n\n.tags-opts {\n  font-size: 14px; }\n\n.small-link {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: auto; }\n\n.tag-search {\n  width: 200px;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 0.25rem;\n  margin: .5rem auto; }\n\n@media (min-width: 768px) {\n  .text {\n    font-size: 16px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_service__ = __webpack_require__("../../../../../src/app/pages/blog/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = (function () {
    function BlogComponent(blog, router, activatedRoute) {
        this.blog = blog;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.selectedTags = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.activeTags = [];
        this.tagsAllMode = false;
        this.tagsExpanded = false;
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getTags();
        this.getPosts();
    };
    BlogComponent.prototype.ngOnDestroy = function () {
        this.selectedTags.unsubscribe();
        this.filteredPosts.unsubscribe();
    };
    BlogComponent.prototype.getPosts = function () {
        var _this = this;
        this.blog.getPosts({ tags: true }).then(function (posts) {
            _this.filteredPosts = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](posts);
            _this.selectedTags.subscribe(function (tags) {
                _this.filteredPosts.next(tags.length === 0
                    ? posts
                    : posts
                        .filter(function (post) {
                        if (_this.tagsAllMode) {
                            var _loop_1 = function (tag) {
                                if (!post.tags.some(function (postTag) { return postTag.name === tag.name; })) {
                                    return { value: false };
                                }
                            };
                            for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
                                var tag = tags_1[_i];
                                var state_1 = _loop_1(tag);
                                if (typeof state_1 === "object")
                                    return state_1.value;
                            }
                            return true;
                        }
                        else {
                            var _loop_2 = function (tag) {
                                if (post.tags.some(function (postTag) { return postTag.name === tag.name; })) {
                                    return { value: true };
                                }
                            };
                            for (var _a = 0, tags_2 = tags; _a < tags_2.length; _a++) {
                                var tag = tags_2[_a];
                                var state_2 = _loop_2(tag);
                                if (typeof state_2 === "object")
                                    return state_2.value;
                            }
                        }
                    }));
            });
        });
    };
    BlogComponent.prototype.getTags = function () {
        var _this = this;
        this.blog.getTags().then(function (tags) {
            _this.inactiveTags = tags;
            var queriedTagName = _this.activatedRoute.snapshot.queryParams.tag;
            if (queriedTagName) {
                var queriedTag = tags.find(function (t) { return t.name = queriedTagName; });
                if (!queriedTag) {
                    return;
                }
                _this.addTag(queriedTag);
            }
        });
    };
    BlogComponent.prototype.addSearchedTag = function ($event) {
        this.searchedTag = null;
        this.addTag($event.item);
    };
    BlogComponent.prototype.addTag = function ($event) {
        if (this.activeTags.some(function (tag) { return tag.name === $event.name; })) {
            return;
        }
        this.activeTags.push($event);
        this.inactiveTags = this.inactiveTags.filter(function (tag) { return tag.name !== $event.name; });
        this.selectedTags.next(this.activeTags);
    };
    BlogComponent.prototype.deleteTag = function ($event) {
        this.activeTags = this.activeTags.filter(function (tag) { return tag.name !== $event.name; });
        this.inactiveTags.push($event);
        this.selectedTags.next(this.activeTags);
    };
    BlogComponent.prototype.deleteAllTags = function () {
        this.inactiveTags = this.inactiveTags.concat(this.activeTags);
        this.activeTags = [];
        this.selectedTags.next(this.activeTags);
    };
    BlogComponent.prototype.toggleTagMode = function () {
        this.tagsAllMode = !this.tagsAllMode;
        this.selectedTags.next(this.activeTags);
    };
    BlogComponent.prototype.goToPost = function (id) {
        this.router.navigate(['blog', id]);
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/pages/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/blog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], BlogComponent);

var _a, _b, _c;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
    }
    BlogService.prototype.getPosts = function (params) {
        if (params === void 0) { params = {}; }
        return this.http.get('/api/posts', params).toPromise()
            .then(function (res) { return res.json(); });
    };
    BlogService.prototype.getPost = function (id) {
        return this.http.get("/api/posts/" + id).toPromise()
            .then(function (res) { return res.json(); });
    };
    BlogService.prototype.getTags = function () {
        return this.http.get('/api/tags').toPromise()
            .then(function (res) { return res.json(); });
    };
    return BlogService;
}());
BlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BlogService);

var _a;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/drawings/drawings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gallery [album]=\"album.album_id\"></app-gallery>\n"

/***/ }),

/***/ "../../../../../src/app/pages/drawings/drawings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/drawings/drawings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawingsComponent = (function () {
    function DrawingsComponent(albumsService) {
        this.albumsService = albumsService;
    }
    DrawingsComponent.prototype.ngOnInit = function () {
        this.album = this.albumsService.getAlbumByType('drawings');
    };
    return DrawingsComponent;
}());
DrawingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-drawings',
        template: __webpack_require__("../../../../../src/app/pages/drawings/drawings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/drawings/drawings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */]) === "function" && _a || Object])
], DrawingsComponent);

var _a;
//# sourceMappingURL=drawings.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <h1>BoguO's Gnomon</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  padding: 3rem; }\n\nh1 {\n  font-size: 3rem;\n  font-weight: 300;\n  letter-spacing: 2px;\n  text-shadow: 0.05em 0.025em 0.015em #f8f9fa;\n  text-align: center;\n  -webkit-animation: fadein 1.5s forwards;\n          animation: fadein 1.5s forwards; }\n\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.7; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.7; } }\n\n@media (min-width: 768px) {\n  h1 {\n    font-size: 6rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/photos/album-thumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album-thumb-container rounded\" #thumb>\n\n  <a class=\"album-thumb rounded p-2\"\n     [routerLink]=\"album.album_id\">\n    <p class=\"album-title\">{{album.name}}</p>\n  </a>\n\n  <img [src]=\"path\" (load)=\"setBackground(thumb)\" hidden>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/photos/album-thumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  max-width: 640px;\n  margin: 0.75rem; }\n\n.album-thumb-container {\n  background-size: cover;\n  height: 480px;\n  font-size: 72px;\n  letter-spacing: 0.075em; }\n\n.album-thumb {\n  background: rgba(33, 37, 41, 0.6);\n  color: rgba(250, 235, 215, 0.8);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 0 10px 2px #000;\n  transition: .5s ease;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 300; }\n  .album-thumb:hover {\n    background: transparent;\n    color: #fff; }\n\n@media (max-width: 991px) {\n  :host {\n    max-width: 480px; }\n  .album-thumb-container {\n    height: 360px;\n    font-size: 54px; } }\n\n@media (max-width: 575px) {\n  :host {\n    max-width: 320px; }\n  .album-thumb-container {\n    height: 240px;\n    font-size: 32px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/photos/album-thumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumThumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_album__ = __webpack_require__("../../../../../src/app/gallery/album.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_album___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gallery_album__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumThumbComponent = (function () {
    function AlbumThumbComponent(renderer) {
        this.renderer = renderer;
        this.addBackground = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AlbumThumbComponent.prototype.ngOnInit = function () {
        this.path = "../../assets/" + this.album.filename;
    };
    AlbumThumbComponent.prototype.setBackground = function (el) {
        this.renderer.setStyle(el, 'backgroundImage', "url(" + this.path + ")");
        this.addBackground.emit();
    };
    return AlbumThumbComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_album__["Album"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_album__["Album"]) === "function" && _a || Object)
], AlbumThumbComponent.prototype, "album", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], AlbumThumbComponent.prototype, "addBackground", void 0);
AlbumThumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-album-thumb',
        template: __webpack_require__("../../../../../src/app/pages/photos/album-thumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/photos/album-thumb.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object])
], AlbumThumbComponent);

var _a, _b, _c;
//# sourceMappingURL=album-thumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/photos/photo-album.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gallery *ngIf=\"album\" [album]=\"album\"></app-gallery>\n"

/***/ }),

/***/ "../../../../../src/app/pages/photos/photo-album.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/photos/photo-album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoAlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoAlbumComponent = (function () {
    function PhotoAlbumComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    PhotoAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { return _this.album = params.album; });
    };
    return PhotoAlbumComponent;
}());
PhotoAlbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photo-album',
        template: __webpack_require__("../../../../../src/app/pages/photos/photo-album.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/photos/photo-album.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], PhotoAlbumComponent);

var _a;
//# sourceMappingURL=photo-album.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"!albumsLoaded\"></app-spinner>\n\n<div [style.visibility]=\"(albumsLoaded)? 'visible' : 'hidden'\">\n\n  <div class=\"gallery-wrapper mt-4 mt-md-5 pt-4 px-5 d-flex justify-content-center\">\n\n    <div class=\"row justify-content-center\">\n\n      <app-album-thumb *ngFor=\"let album of albums; let i = index\" [album]=\"album\" (addBackground)=\"addThumb()\"></app-album-thumb>\n\n    </div>\n\n  </div>\n\n  <app-scroll></app-scroll>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/photos/photos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotosComponent = (function () {
    function PhotosComponent(albumsService) {
        this.albumsService = albumsService;
        this.backgroundsLoaded = 0;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.albums = this.albumsService.getPhotos();
    };
    PhotosComponent.prototype.addThumb = function () {
        if (++this.backgroundsLoaded === this.albums.length) {
            this.albumsLoaded = true;
        }
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photos',
        template: __webpack_require__("../../../../../src/app/pages/photos/photos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/photos/photos.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */]) === "function" && _a || Object])
], PhotosComponent);

var _a;
//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sketches/sketches.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gallery [album]=\"album.album_id\"></app-gallery>\n"

/***/ }),

/***/ "../../../../../src/app/pages/sketches/sketches.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sketches/sketches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SketchesComponent = (function () {
    function SketchesComponent(albumsService) {
        this.albumsService = albumsService;
    }
    SketchesComponent.prototype.ngOnInit = function () {
        this.album = this.albumsService.getAlbumByType('sketches');
    };
    return SketchesComponent;
}());
SketchesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sketches',
        template: __webpack_require__("../../../../../src/app/pages/sketches/sketches.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/sketches/sketches.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */]) === "function" && _a || Object])
], SketchesComponent);

var _a;
//# sourceMappingURL=sketches.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/times.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var TimesPipe = (function () {
    function TimesPipe() {
    }
    TimesPipe.prototype.transform = function (value) {
        var iterable = {};
        iterable[Symbol.iterator] = function () {
            var n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = 0;
                        _a.label = 1;
                    case 1:
                        if (!(n < value)) return [3 /*break*/, 3];
                        return [4 /*yield*/, ++n];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return iterable;
    };
    return TimesPipe;
}());
TimesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'times' })
], TimesPipe);

//# sourceMappingURL=times.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/contact-form/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"link form-link\" *ngIf=\"!submitted\"\n   [innerHTML]=\"(formVisible)? '[ hide ]' : '[ contact me ]'\"\n   (click)=\"toggleForm()\">\n</a>\n<p *ngIf=\"submitted\">Your message has been sent.</p>\n\n<div class=\"container mt-3\" *ngIf=\"!submitted\" [hidden]=\"!formVisible\">\n\n  <form #contactForm=\"ngForm\" (ngSubmit)=\"sendEmail()\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"model.name\" name=\"name\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"model.email\" name=\"email\" required email>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"message\">Message</label>\n      <textarea class=\"form-control\" id=\"message\" [(ngModel)]=\"model.message\" name=\"message\" required></textarea>\n    </div>\n\n    <div class=\"recaptcha d-flex justify-content-start justify-content-sm-center\">\n      <re-captcha [(ngModel)]=\"captcha\" name=\"captcha\" required></re-captcha>\n    </div>\n\n    <div class=\"button-wrapper\">\n\n      <button type=\"submit\"\n              class=\"btn btn-outline-secondary submit-button\"\n              [disabled]=\"!contactForm.form.valid\">Send\n      </button>\n\n      <div *ngIf=\"!contactForm.form.valid\"\n           class=\"popover-wrapper\"\n           popover=\"All fields are required.\"\n           triggers=\"mouseenter:mouseleave\"\n           placement=\"top\">\n      </div>\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/contact-form/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email__ = __webpack_require__("../../../../../src/app/widgets/contact-form/email.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactFormComponent = (function () {
    function ContactFormComponent() {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__email__["a" /* Email */]();
        this.submitted = false;
        this.formVisible = false;
    }
    ContactFormComponent.prototype.ngOnInit = function () { };
    ContactFormComponent.prototype.sendEmail = function () {
        this.submitted = true;
    };
    ContactFormComponent.prototype.toggleForm = function () {
        this.formVisible = !this.formVisible;
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-form',
        template: __webpack_require__("../../../../../src/app/widgets/contact-form/contact-form.component.html"),
        styles: ["\n    :host >>> .popover {\n      background-color: rgba(0,0,0,0.9);\n    }\n    :host >>> .popover > .arrow:after {\n      border-top-color: rgba(0,0,0,0.9);\n    }\n    :host >>> .popover > .popover-body {\n      color: #f8f9fa\n    }\n    .button-wrapper {\n      position: relative;\n      width: fit-content;\n      margin: auto;\n    }\n    .popover-wrapper {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .submit-button:hover {\n      background: transparent;\n      color: #f8f9fa;\n      border-color: #f8f9fa;\n      cursor: pointer;\n    }\n    #message {\n      height: 225px;\n    }\n    .ng-invalid.ng-touched[required]:not(re-captcha) {\n      border-left: 6px solid #91232d;\n    }\n    .recaptcha {\n      margin: 2rem 0;\n      overflow: hidden;\n    }\n    .form-link {\n      text-decoration: none;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], ContactFormComponent);

//# sourceMappingURL=contact-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/contact-form/email.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email; });
var Email = (function () {
    function Email(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    return Email;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top py-3\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navLinks\"\n          aria-controls=\"navLinks\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n          (click)=\"toggleCollapse()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" [collapse]=\"!isCollapsed\" id=\"navLinks\">\n    <ul class=\"navbar-nav m-auto p-4 p-lg-0\">\n      <li class=\"home-button align-self-center px-2 mb-3\"  (click)=\"toggleCollapse()\">\n        <a class=\"nav-link p-2\" routerLink=\"/home\" routerLinkActive=\"active\"> g </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/blog\" routerLinkActive=\"active\"> blog </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/drawings\" routerLinkActive=\"active\"> drawings </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/sketches\" routerLinkActive=\"active\"> sketches </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/photos\" routerLinkActive=\"active\"> photographs </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"about\" routerLinkActive=\"active\"> about </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  box-shadow: 0px 2px 2px #212529;\n  background-color: rgba(0, 0, 0, 0.75); }\n\n.nav-item {\n  padding: 0 0.5rem;\n  margin: auto;\n  opacity: 0.8; }\n\n.nav-link {\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-shadow: 0.5px 0.5px 1px #868e96;\n  letter-spacing: 1px; }\n  .nav-link:after {\n    height: 0;\n    content: '';\n    display: block;\n    position: relative;\n    background: rgba(255, 255, 255, 0.85);\n    top: -15px;\n    transition: 0.5s ease; }\n  .nav-link.active:after {\n    height: 1px; }\n  .nav-link:not(.active):after {\n    content: '';\n    display: block;\n    height: 1px;\n    width: 0;\n    top: 0;\n    background: transparent;\n    transition: width .25s ease, background-color .5s ease; }\n  .nav-link:not(.active):hover:after {\n    width: 100%;\n    background: rgba(255, 255, 255, 0.75); }\n\n.home-button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0.75rem;\n  border: 1px solid #212529;\n  border-radius: 0.3rem;\n  transition: 0.25s ease; }\n  .home-button:hover {\n    cursor: pointer;\n    border-color: rgba(255, 255, 255, 0.75); }\n    .home-button:hover .nav-link {\n      color: rgba(255, 255, 255, 0.75); }\n  .home-button .nav-link {\n    text-shadow: 1px 1px 1px white;\n    color: #343a40;\n    font-weight: 400; }\n    .home-button .nav-link:after {\n      height: 0;\n      width: 0; }\n\n@media (max-width: 991px) {\n  .navbar-nav {\n    max-height: 90vh;\n    max-height: -webkit-fill-available;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .home-button {\n    left: auto;\n    right: 0; }\n  .nav-item {\n    padding: 0.5rem 0; }\n  .nav-link {\n    font-size: 16px; }\n    .nav-link.active:after {\n      top: -12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isCollapsed = false;
    };
    NavbarComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/widgets/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 px-0 pt-3 pt-md-0\" aria-label=\"album pages\">\n    <pagination [totalItems]=\"pages\" [(ngModel)]=\"page\" [maxSize]=\"maxSize\"\n                [boundaryLinks]=\"true\" [rotate]=\"false\" [itemsPerPage]=\"1\" (pageChanged)=\"pageChanged($event)\"\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    function PaginationComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.maxSize = 5;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.page = Number(this.activatedRoute.snapshot.queryParams.page) || 1;
        this.goToPage(this.page);
    };
    PaginationComponent.prototype.pageChanged = function (event) {
        this.goToPage(event.page);
    };
    PaginationComponent.prototype.goToPage = function (page) {
        this.router.navigate(this.activatedRoute.snapshot.url.map(function (segment) { return segment.path; }), { queryParams: { page: page } });
    };
    return PaginationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pages", void 0);
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__("../../../../../src/app/widgets/pagination/pagination.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PaginationComponent);

var _a, _b;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/scroll/scroll.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"scroll-top\" (click)=\"scrollToTop()\">Scroll to top</a>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/scroll/scroll.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scroll-top:not([href]):not([tabindex]) {\n  background-color: rgba(0, 0, 0, 0.5);\n  border: 1.5px solid #212529;\n  border-radius: 0.25rem;\n  letter-spacing: 2px;\n  text-decoration: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: 2rem auto;\n  padding: 0.75rem;\n  color: #ced4da; }\n  .scroll-top:not([href]):not([tabindex]):hover {\n    color: #fff;\n    border-color: rgba(255, 255, 255, 0.75);\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/scroll/scroll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollComponent = (function () {
    function ScrollComponent() {
    }
    ScrollComponent.prototype.ngOnInit = function () { };
    ScrollComponent.prototype.scrollToTop = function () { scrollTo(0, 0); };
    return ScrollComponent;
}());
ScrollComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-scroll',
        template: __webpack_require__("../../../../../src/app/widgets/scroll/scroll.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/scroll/scroll.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ScrollComponent);

//# sourceMappingURL=scroll.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/spinner/spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  margin: 100px auto 0;\n  width: 70px;\n  text-align: center; }\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-spinner',
        template: __webpack_require__("../../../../../src/app/widgets/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/spinner/spinner.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tags text-center\">\n  <a class=\"badge badge-dark mx-1\"\n     *ngFor=\"let tag of tags; let i = index\"\n     [class.selected]=\"selected\"\n     [hidden]=\"abbr && i >= abbrNumTags\"\n     (click)=\"selectTag(tag)\">{{tag.name}}\n    <span *ngIf=\"count\" class=\"count\">({{tag.count}})</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/tags/tags.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  max-width: 450px;\n  margin: auto; }\n\n.badge.selected {\n  background: #868e96; }\n  .badge.selected:hover {\n    color: #868e96 !important;\n    text-decoration: line-through; }\n\n.badge:hover {\n  cursor: pointer;\n  background: #f8f9fa;\n  color: #212529 !important; }\n\n.count {\n  color: #ced4da;\n  font-size: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagsComponent = (function () {
    function TagsComponent() {
        this.abbrNumTags = 5;
        this.count = false;
        this.abbr = false;
        this.selected = false;
        this.tagSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    TagsComponent.prototype.selectTag = function (tag) {
        this.tagSelected.emit(tag);
    };
    return TagsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TagsComponent.prototype, "tags", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagsComponent.prototype, "count", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagsComponent.prototype, "abbr", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagsComponent.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TagsComponent.prototype, "tagSelected", void 0);
TagsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tags',
        template: __webpack_require__("../../../../../src/app/widgets/tags/tags.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/tags/tags.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TagsComponent);

var _a;
//# sourceMappingURL=tags.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);