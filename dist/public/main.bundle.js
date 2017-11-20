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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
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

module.exports = "<div class=\"background-wrapper\" [style.background-image]=\"'url(' + backgroundUrl + ')'\">\n  <img [src]=\"imgPreloadUrl\" (load)=\"setBackground()\" hidden>\n</div>\n<app-spinner *ngIf=\"!backgroundReady\"></app-spinner>\n<div *ngIf=\"backgroundReady\" class=\"wrapper d-flex pt-5 justify-content-center\">\n  <app-navbar></app-navbar>\n  <router-outlet (deactivate)=\"scrollToTop()\"></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-wrapper {\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: auto; }\n\n.wrapper {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  min-height: -webkit-fill-available; }\n", ""]);

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_gallery__ = __webpack_require__("../../../../ng-gallery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about_component__ = __webpack_require__("../../../../../src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_photos_album_thumb_component__ = __webpack_require__("../../../../../src/app/pages/photos/album-thumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_drawings_drawings_component__ = __webpack_require__("../../../../../src/app/pages/drawings/drawings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gallery_gallery_thumb_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-thumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__widgets_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/widgets/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__widgets_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/widgets/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_photos_photo_album_component__ = __webpack_require__("../../../../../src/app/pages/photos/photo-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_photos_photos_component__ = __webpack_require__("../../../../../src/app/pages/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_posts_posts_component__ = __webpack_require__("../../../../../src/app/pages/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sketches_sketches_component__ = __webpack_require__("../../../../../src/app/pages/sketches/sketches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__widgets_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/widgets/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__widgets_scroll_scroll_component__ = __webpack_require__("../../../../../src/app/widgets/scroll/scroll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_posts_posts_service__ = __webpack_require__("../../../../../src/app/pages/posts/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__gallery_flickr_service__ = __webpack_require__("../../../../../src/app/gallery/flickr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__gallery_albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_times_pipe__ = __webpack_require__("../../../../../src/app/pipes/times.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__gallery_gallery_config__ = __webpack_require__("../../../../../src/app/gallery/gallery.config.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__widgets_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__widgets_pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_22__widgets_spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_23__widgets_scroll_scroll_component__["a" /* ScrollComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_sketches_sketches_component__["a" /* SketchesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_drawings_drawings_component__["a" /* DrawingsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_photos_photos_component__["a" /* PhotosComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_photos_photo_album_component__["a" /* PhotoAlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_photos_album_thumb_component__["a" /* AlbumThumbComponent */],
            __WEBPACK_IMPORTED_MODULE_13__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_14__gallery_gallery_thumb_component__["a" /* GalleryThumbComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_times_pipe__["a" /* TimesPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ng_gallery__["b" /* GalleryModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__gallery_gallery_config__["a" /* galleryConfig */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__gallery_albums_service__["a" /* AlbumsService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */],
                useFactory: startupServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_26__gallery_albums_service__["a" /* AlbumsService */]],
                multi: true
            },
            __WEBPACK_IMPORTED_MODULE_25__gallery_flickr_service__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_24__pages_posts_posts_service__["a" /* PostsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__albums_service__["a" /* AlbumsService */]) === "function" && _b || Object])
], FlickrService);

var FlickrService_1, _a, _b;
//# sourceMappingURL=flickr.service.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-thumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div #thumb\n     class=\"image-frame\"\n     (click)=\"openGallery()\">\n\n  <img [src]=\"image.thumbnail\" (load)=\"thumb.style.backgroundImage = 'url(' + image.thumbnail + ')'\" hidden/>\n\n</div>\n"

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
    function GalleryThumbComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryThumbComponent.prototype.ngOnInit = function () {
    };
    GalleryThumbComponent.prototype.openGallery = function () {
        this.gallery.set(this.index);
    };
    return GalleryThumbComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_gallery__["GalleryImage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_gallery__["GalleryImage"]) === "function" && _a || Object)
], GalleryThumbComponent.prototype, "image", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], GalleryThumbComponent.prototype, "index", void 0);
GalleryThumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gallery-thumb',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-thumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-thumb.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng_gallery__["c" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_gallery__["c" /* GalleryService */]) === "function" && _b || Object])
], GalleryThumbComponent);

var _a, _b;
//# sourceMappingURL=gallery-thumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-wrapper my-4 my-md-5 px-5\">\n\n  <ng-container [ngSwitch]=\"true\">\n\n    <ng-container *ngSwitchCase=\"galleryLoaded\">\n\n      <app-pagination [pages]=\"pages\"></app-pagination>\n\n      <div class=\"row justify-content-center\">\n\n        <app-gallery-thumb *ngFor=\"let image of images; let i = index\" [image]=\"image\" [index]=\"i\"></app-gallery-thumb>\n\n      </div>\n\n      <app-scroll></app-scroll>\n\n    </ng-container>\n\n    <div class=\"d-flex justify-content-center\">\n\n      <p class=\"error-message p-3\" *ngSwitchCase=\"galleryError\">Couldn't fetch images :(</p>\n\n      <app-spinner *ngSwitchDefault></app-spinner>\n\n    </div>\n\n  </ng-container>\n\n</div>\n\n<gallery-modal></gallery-modal>\n"

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
            _this.galleryLoaded = true;
        })
            .catch(function (err) { return _this.galleryError = true; });
    };
    return GalleryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], GalleryComponent.prototype, "album", void 0);
GalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
        }
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

module.exports = "<div class=\"row pt-5 px-4\">\n\n  <div #photoDiv\n       class=\"photo\"\n       [style.visibility]=\"'hidden'\">\n    <img src=\"../../../assets/about.jpg\" (load)=\"photoDiv.style.visibility = 'visible'\"/>\n  </div>\n\n  <div class=\"desc pt-3\">\n\n    <p>I am interior crocodile alligator</p>\n\n    <div class=\"desc-links\">\n      <a class=\"desc-link\" href=\"https://www.facebook.com/BoguOs-Gnomon-689909394425813/\" target=\"_blank\">facebook</a> /\n      <a class=\"desc-link\" href=\"https://www.flickr.com/photos/99486946@N05/\" target=\"_blank\">flickr</a><br>\n      <a class=\"desc-link contact-link\">contact me</a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  background: radial-gradient(#000, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)); }\n\n.row {\n  margin: auto;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n\n.photo {\n  border: 2px solid #343a40;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: inset 0 0 10px 2px #000;\n  background: saddlebrown;\n  opacity: 0.5; }\n  .photo img {\n    width: 100%;\n    opacity: 0.8; }\n\n.desc {\n  text-align: center;\n  color: #adb5bd;\n  letter-spacing: 3px;\n  font-weight: 300; }\n\n.desc-link {\n  color: #fff !important;\n  cursor: pointer;\n  line-height: 2rem; }\n  .desc-link:hover {\n    text-shadow: 1px 1px 1px;\n    text-decoration: none; }\n\n@media (min-width: 992px) {\n  .row {\n    margin-top: 6rem;\n    min-height: 700px; }\n  .photo {\n    width: 30vw;\n    height: 30vw; } }\n", ""]);

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
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/pages/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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

module.exports = "<div class=\"album-thumb-container rounded\" #thumb>\n\n  <a class=\"album-thumb rounded p-2\"\n     [routerLink]=\"album.album_id\">\n    <p class=\"album-title\">{{album.name}}</p>\n  </a>\n\n  <img [src]=\"path\" (load)=\"thumb.style.backgroundImage = 'url(' + path + ')'\" hidden>\n\n</div>\n"

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
    function AlbumThumbComponent() {
    }
    AlbumThumbComponent.prototype.ngOnInit = function () {
        this.path = "../../assets/" + this.album.filename;
    };
    return AlbumThumbComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_album__["Album"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_album__["Album"]) === "function" && _a || Object)
], AlbumThumbComponent.prototype, "album", void 0);
AlbumThumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-album-thumb',
        template: __webpack_require__("../../../../../src/app/pages/photos/album-thumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/photos/album-thumb.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AlbumThumbComponent);

var _a;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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

module.exports = "<app-spinner *ngIf=\"!albumsLoaded\"></app-spinner>\n\n<ng-container *ngIf=\"albumsLoaded\">\n\n  <div class=\"gallery-wrapper mt-4 mt-md-5 pt-4 px-5 d-flex justify-content-center\">\n\n    <div class=\"row justify-content-center\">\n\n      <app-album-thumb *ngFor=\"let album of albums; let i = index\" [album]=\"album\"></app-album-thumb>\n\n    </div>\n\n  </div>\n\n  <app-scroll></app-scroll>\n\n</ng-container>\n\n\n"

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
    function PhotosComponent(albumsService, cd) {
        this.albumsService = albumsService;
        this.cd = cd;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.albums = this.albumsService.getPhotos();
    };
    PhotosComponent.prototype.ngAfterViewInit = function () {
        this.albumsLoaded = true;
        this.cd.detectChanges();
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-photos',
        template: __webpack_require__("../../../../../src/app/pages/photos/photos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/photos/photos.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object])
], PhotosComponent);

var _a, _b;
//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container invisible\">\n  <div class=\"row\" *ngFor=\"let post of posts\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ post.title }}</h4>\n      <p class=\"card-text\">{{post.body}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__("../../../../../src/app/pages/posts/posts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
        // instantiate posts to an empty array
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/pages/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === "function" && _a || Object])
], PostsComponent);

var _a;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/posts/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
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



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    // Get all posts from the API
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('/api/posts')
            .map(function (res) { return res.json(); });
    };
    return PostsService;
}());
PostsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PostsService);

var _a;
//# sourceMappingURL=posts.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'times' })
], TimesPipe);

//# sourceMappingURL=times.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top py-3\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navLinks\"\n          aria-controls=\"navLinks\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n          (click)=\"toggleCollapse()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" [collapse]=\"!isCollapsed\" id=\"navLinks\">\n    <ul class=\"navbar-nav m-auto\">\n      <li class=\"home-button align-self-center px-2 mb-3\"  (click)=\"toggleCollapse()\">\n        <a class=\"nav-link p-2\" routerLink=\"/home\" routerLinkActive=\"active\"> g </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/blog\" routerLinkActive=\"active\"> blog </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/drawings\" routerLinkActive=\"active\"> drawings </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/sketches\" routerLinkActive=\"active\"> sketches </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/photos\" routerLinkActive=\"active\"> photographs </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"about\" routerLinkActive=\"active\"> about </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/widgets/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  box-shadow: 0px 2px 2px #212529;\n  background-color: rgba(0, 0, 0, 0.75); }\n\n.nav-item {\n  padding: 0.5rem 0;\n  margin: auto;\n  opacity: 0.8; }\n  @media (min-width: 768px) {\n    .nav-item {\n      padding: 0 0.5rem; } }\n\n.nav-link {\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-shadow: 0.5px 0.5px 1px #868e96;\n  letter-spacing: 1px; }\n  .nav-link:after {\n    height: 0;\n    content: '';\n    display: block;\n    position: relative;\n    background: rgba(255, 255, 255, 0.85);\n    top: -15px;\n    transition: 0.5s ease; }\n  .nav-link.active:after {\n    height: 1px; }\n  .nav-link:not(.active):after {\n    content: '';\n    display: block;\n    height: 1px;\n    width: 0;\n    top: 0;\n    background: transparent;\n    transition: width .25s ease, background-color .5s ease; }\n  .nav-link:not(.active):hover:after {\n    width: 100%;\n    background: rgba(255, 255, 255, 0.75); }\n\n.home-button {\n  border: 1px solid #212529;\n  border-radius: 0.3rem;\n  transition: 0.25s ease; }\n  @media (min-width: 768px) {\n    .home-button {\n      position: absolute;\n      left: 1rem; } }\n  .home-button:hover {\n    cursor: pointer;\n    border-color: rgba(255, 255, 255, 0.75); }\n    .home-button:hover .nav-link {\n      color: rgba(255, 255, 255, 0.75); }\n  .home-button .nav-link {\n    text-shadow: 1px 1px 1px white;\n    color: #343a40;\n    font-weight: 400; }\n    .home-button .nav-link:after {\n      height: 0;\n      width: 0; }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .nav-link {\n    font-size: 16px; }\n    .nav-link.active:after {\n      top: -12px; } }\n", ""]);

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pages", void 0);
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-spinner',
        template: __webpack_require__("../../../../../src/app/widgets/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/spinner/spinner.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);