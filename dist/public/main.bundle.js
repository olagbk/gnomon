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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_sketches_sketches_component__ = __webpack_require__("../../../../../src/app/gallery/sketches/sketches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gallery_drawings_drawings_component__ = __webpack_require__("../../../../../src/app/gallery/drawings/drawings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_photos_photos_component__ = __webpack_require__("../../../../../src/app/gallery/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_photos_photo_album_component__ = __webpack_require__("../../../../../src/app/gallery/photos/photo-album.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'drawings',
        component: __WEBPACK_IMPORTED_MODULE_4__gallery_drawings_drawings_component__["a" /* DrawingsComponent */]
    },
    {
        path: 'sketches',
        component: __WEBPACK_IMPORTED_MODULE_3__gallery_sketches_sketches_component__["a" /* SketchesComponent */]
    },
    {
        path: 'photos',
        component: __WEBPACK_IMPORTED_MODULE_5__gallery_photos_photos_component__["a" /* PhotosComponent */]
    },
    {
        path: 'photos/:album',
        component: __WEBPACK_IMPORTED_MODULE_6__gallery_photos_photo_album_component__["a" /* PhotoAlbumComponent */]
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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(ROUTES)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper d-flex p-5 justify-content-center\">\n  <app-nav></app-nav>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  min-height: -webkit-fill-available; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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


var AppComponent = (function () {
    function AppComponent(albums) {
        this.albums = albums;
        this.title = 'Gnomon';
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_albums_service__["a" /* AlbumsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export startupServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_gallery__ = __webpack_require__("../../../../ng-gallery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__posts_posts_component__ = __webpack_require__("../../../../../src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gallery_sketches_sketches_component__ = __webpack_require__("../../../../../src/app/gallery/sketches/sketches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gallery_drawings_drawings_component__ = __webpack_require__("../../../../../src/app/gallery/drawings/drawings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gallery_photos_photos_component__ = __webpack_require__("../../../../../src/app/gallery/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gallery_photos_photo_album_component__ = __webpack_require__("../../../../../src/app/gallery/photos/photo-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__posts_posts_service__ = __webpack_require__("../../../../../src/app/posts/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gallery_flickr_service__ = __webpack_require__("../../../../../src/app/gallery/flickr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__gallery_albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_times_pipe__ = __webpack_require__("../../../../../src/app/pipes/times.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__gallery_gallery_config__ = __webpack_require__("../../../../../src/app/gallery/gallery.config.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__gallery_sketches_sketches_component__["a" /* SketchesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__gallery_drawings_drawings_component__["a" /* DrawingsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__gallery_photos_photos_component__["a" /* PhotosComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__gallery_photos_photo_album_component__["a" /* PhotoAlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_times_pipe__["a" /* TimesPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng_gallery__["a" /* GalleryModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__gallery_gallery_config__["a" /* galleryConfig */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__posts_posts_service__["a" /* PostsService */],
            __WEBPACK_IMPORTED_MODULE_18__gallery_flickr_service__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_19__gallery_albums_service__["a" /* AlbumsService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* APP_INITIALIZER */],
                useFactory: startupServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_19__gallery_albums_service__["a" /* AlbumsService */]],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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

/***/ "../../../../../src/app/gallery/drawings/drawings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gallery [album]=\"album.album_id\"></app-gallery>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/drawings/drawings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/drawings/drawings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
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
        template: __webpack_require__("../../../../../src/app/gallery/drawings/drawings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/drawings/drawings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__albums_service__["a" /* AlbumsService */]) === "function" && _a || Object])
], DrawingsComponent);

var _a;
//# sourceMappingURL=drawings.component.js.map

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

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-wrapper my-4 my-md-5 py-4\">\n\n  <p *ngIf=\"loading\" class=\"loading text-white text-center\">{{message}}</p>\n\n  <div class=\"row justify-content-center\">\n    <div *ngFor=\"let image of images; let i = index\"\n    (click)=\"gallery.set(i)\"\n    class=\"image-holder m-2\"\n    [ngStyle]=\"{'background-image': 'url(' + image.thumbnail + ')'}\">\n    </div>\n  </div>\n\n</div>\n\n<app-pagination *ngIf=\"!loading\" [pages]=\"pages\"></app-pagination>\n\n<gallery-modal></gallery-modal>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery-wrapper {\n  margin: auto;\n  max-width: 1500px; }\n\n.loading {\n  opacity: .75;\n  letter-spacing: 1px; }\n\n.image-holder {\n  opacity: 0.85;\n  width: 100%;\n  max-width: 320px;\n  height: 220px;\n  background: #fff center no-repeat;\n  background-size: cover;\n  border-radius: 1px;\n  box-shadow: 4px 3px 4px 1.5px #343a40; }\n  .image-holder:hover {\n    cursor: pointer;\n    opacity: .99; }\n", ""]);

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
        this.loading = true;
        this.perPage = 24;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.currentPage = Number(params['page']);
            _this.message = 'Loading images...';
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
            _this.loading = false;
        })
            .catch(function (err) { return _this.message = "Couldn't fetch images :("; });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_gallery__["b" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_gallery__["b" /* GalleryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__flickr_service__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__flickr_service__["a" /* FlickrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
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

/***/ "../../../../../src/app/gallery/photos/photo-album.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gallery *ngIf=\"album\" [album]=\"album\"></app-gallery>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/photos/photo-album.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/photos/photo-album.component.ts":
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
        template: __webpack_require__("../../../../../src/app/gallery/photos/photo-album.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/photos/photo-album.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], PhotoAlbumComponent);

var _a;
//# sourceMappingURL=photo-album.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-wrapper my-4 my-md-5 py-4\">\n\n  <!--<p *ngIf=\"loading\" class=\"loading text-white text-center\">{{message}}</p>-->\n\n  <div class=\"row justify-content-center\">\n    <div *ngFor=\"let album of albums; let i = index\"\n         class=\"album-thumb-container rounded m-2\"\n         [ngStyle]=\"{'background-image': 'url(../../assets/' + album.filename + ')'}\">\n         <a class=\"album-thumb rounded p-2\"\n         [routerLink]=\"album.album_id\">\n      <p class=\"album-title\">{{album.name}}</p>\n         </a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/photos/photos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".album-thumb-container {\n  width: 640px;\n  height: 480px;\n  background-size: cover; }\n\n.album-thumb {\n  background: radial-gradient(#fff, #ced4da, #343a40) rgba(255, 255, 255, 0.6);\n  transition: .5s ease;\n  border: 1.5px solid black;\n  opacity: 0.6;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  text-decoration: none;\n  font-size: 4rem;\n  color: inherit; }\n  .album-thumb:hover {\n    cursor: pointer;\n    background: transparent;\n    opacity: .9;\n    text-shadow: -1px -1px 10px antiquewhite, 1px -1px 10px antiquewhite, -1px 1px 10px antiquewhite, 1px 1px 10px antiquewhite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
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
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.albums = this.albumsService.getPhotos();
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-photos',
        template: __webpack_require__("../../../../../src/app/gallery/photos/photos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/photos/photos.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__albums_service__["a" /* AlbumsService */]) === "function" && _a || Object])
], PhotosComponent);

var _a;
//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/sketches/sketches.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gallery [album]=\"album.album_id\"></app-gallery>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/sketches/sketches.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/sketches/sketches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albums_service__ = __webpack_require__("../../../../../src/app/gallery/albums.service.ts");
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
        template: __webpack_require__("../../../../../src/app/gallery/sketches/sketches.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/sketches/sketches.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__albums_service__["a" /* AlbumsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__albums_service__["a" /* AlbumsService */]) === "function" && _a || Object])
], SketchesComponent);

var _a;
//# sourceMappingURL=sketches.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home text-center mt-5 pt-5 mt-sm-0 pt-sm-0\">\n  <h1 class=\"text-light\">BoguO's Gnomon</h1>\n  <h4 class=\"text-muted\">I draw things</h4>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n.home {\n  opacity: 0.7; }\n\nh1, h4 {\n  font-weight: 400; }\n\nh1 {\n  -webkit-animation: fadein 1.5s forwards;\n          animation: fadein 1.5s forwards; }\n\nh4 {\n  -webkit-animation: fadein 2s forwards;\n          animation: fadein 2s forwards; }\n\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@media (min-width: 768px) {\n  h1 {\n    font-size: 3rem; }\n  h4 {\n    font-size: 1.8rem; } }\n\n@media (min-width: 992px) {\n  h1 {\n    font-size: 4rem; }\n  h4 {\n    font-size: 2.4rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
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
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav-route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavRoute; });
var NavRoute = (function () {
    function NavRoute(name, route, active) {
        if (active === void 0) { active = false; }
        this.name = name;
        this.route = route;
        this.active = active;
    }
    return NavRoute;
}());

//# sourceMappingURL=nav-route.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top py-3\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navLinks\"\n          aria-controls=\"navLinks\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n          (click)=\"toggleCollapse()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" [collapse]=\"!isCollapsed\" id=\"navLinks\">\n    <ul class=\"navbar-nav m-auto\">\n\n      <li *ngFor=\"let item of menu\"\n          class=\"nav-item px-1 px-lg-2\"\n          [class.active]=\"item.active\">\n        <a class=\"nav-link\"\n           [routerLink]=\"item.route\">{{item.name}}\n          <span *ngIf=\"item.active\"\n                class=\"sr-only\">(current)\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  box-shadow: 0px 2px 2px #212529;\n  background-color: rgba(0, 0, 0, 0.7);\n  text-align: center; }\n  nav .nav-link {\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    opacity: 0.8; }\n\n@media (min-width: 768px) {\n  .nav-link:after {\n    content: '';\n    display: block;\n    height: 1px;\n    width: 0px;\n    background: transparent;\n    transition: width .25s ease, background-color .5s ease; }\n  .nav-link:hover:after {\n    width: 100%;\n    background: rgba(255, 255, 255, 0.75); } }\n\n@media (min-width: 992px) {\n  .nav-link {\n    font-size: 1.25rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_route__ = __webpack_require__("../../../../../src/app/nav/nav-route.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        this.isCollapsed = false;
        this.menu = [
            new __WEBPACK_IMPORTED_MODULE_1__nav_route__["a" /* NavRoute */]('Blog', '/blog'),
            new __WEBPACK_IMPORTED_MODULE_1__nav_route__["a" /* NavRoute */]('Drawings', '/drawings'),
            new __WEBPACK_IMPORTED_MODULE_1__nav_route__["a" /* NavRoute */]('Sketches', '/sketches'),
            new __WEBPACK_IMPORTED_MODULE_1__nav_route__["a" /* NavRoute */]('Photographs', '/photos'),
            new __WEBPACK_IMPORTED_MODULE_1__nav_route__["a" /* NavRoute */]('About', '/about'),
        ];
    };
    NavComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Album pages\">\n  <ul class=\"pagination justify-content-center\">\n    <li\n      [class.disabled]=\"page === 1\"\n      class=\"page-item\">\n      <a class=\"page-link\"\n         routerLink=\"./\"\n         [queryParams]=\"{page: page - 1}\">Previous\n      </a>\n    </li><li\n      *ngFor=\"let p of pages | times\"\n      class=\"page-item\">\n      <a\n        [class.active]=\"p === page\"\n        class=\"page-link\"\n        routerLink=\"./\"\n        [queryParams]=\"{page: p}\">{{p}}\n      </a>\n    </li><li\n      [class.disabled]=\"page === pages\"\n      class=\"page-item\">\n      <a class=\"page-link\"\n         routerLink=\"./\"\n         [queryParams]=\"{page: page + 1}\">Next\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pagination {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.page-item.disabled .page-link {\n  color: #495057; }\n\n.page-item .page-link {\n  color: #adb5bd;\n  background: rgba(0, 0, 0, 0.5);\n  border: 2px solid #212529;\n  letter-spacing: 2px;\n  margin: 1px; }\n  .page-item .page-link:hover {\n    color: #fff; }\n  .page-item .page-link.active {\n    color: #dee2e6;\n    font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.ts":
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
    function PaginationComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.page = 1;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.page) {
                _this.page = Number(params['page']);
            }
        });
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
        template: __webpack_require__("../../../../../src/app/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pagination/pagination.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

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

/***/ "../../../../../src/app/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container invisible\">\n  <div class=\"row\" *ngFor=\"let post of posts\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ post.title }}</h4>\n      <p class=\"card-text\">{{post.body}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__("../../../../../src/app/posts/posts.service.ts");
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
        template: __webpack_require__("../../../../../src/app/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === "function" && _a || Object])
], PostsComponent);

var _a;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/posts/posts.service.ts":
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