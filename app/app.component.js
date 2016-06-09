"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var basic_service_1 = require('./core/basic.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var Subject_1 = require('rxjs/Subject');
var window_service_1 = require('./core/window.service');
//import { ToolbarComponent } from './toolbar.component';
var column_sort_directive_1 = require('./column-sort.directive');
var AppComponent = (function () {
    function AppComponent(window, _basicService) {
        this.window = window;
        this._basicService = _basicService;
        this.appName = 'Angular2 QuickStart';
        this.pageTitle = 'Hello World';
        this.states = [];
        this.searchTermStream = new Subject_1.Subject();
    }
    AppComponent.prototype.sortAction = function () {
        console.log('sort action fired');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.loadStates();
        // this.searchTermStream
        //     .debounceTime(300)
        //     .distinctUntilChanged()
        //     .switchMap((term: string) => {} )
        //     .subscribe
        // .switchMap((term: string) => {
        //     if (term != null) {
        //         this.filterList(term);
        //         //update cache
        //         this._log.debug('search-grid.component: update cache, searchText = ' + term, this);
        //         this._returnedCheckApiService.getOffenderCache().searchText = term;
        //     }
        //     //this.wikipediaService.search(term);
        // });
    };
    AppComponent.prototype.login = function () {
        var urlBuilder = [];
        urlBuilder.push('response_type=code', 'client_id=99956547994-5v9f3r3om50pnp0o0o6m4o11sk7hagqc.apps.googleusercontent.com', 'redirect_uri=http://localhost:9000', 'scope=profile email');
        var url = 'https://accounts.google.com/o/oauth2/auth?' + urlBuilder.join('&');
        var options = 'width=500, height=500, left=' + (window.outerWidth - 500) / 2 +
            ', top=' + (window.outerHeight - 500) / 2;
        window.open(url, '', options).addEventListener('onload', function () {
            console.log('onload');
        });
        //this.oauthService.initImplicitFlow();
        //this.oAuthService.initImplicitFlow();
    };
    AppComponent.prototype.load = function () {
        console.log('load');
    };
    AppComponent.prototype.loadStates = function () {
        var _this = this;
        this._basicService.getStates()
            .subscribe(function (data) {
            _this.states = data;
        }, function (error) {
            var errorMessage = error;
            console.error(errorMessage);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [basic_service_1.BasicService, http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, window_service_1.WindowService],
            directives: [column_sort_directive_1.SortColumnDirective]
        }), 
        __metadata('design:paramtypes', [window_service_1.WindowService, basic_service_1.BasicService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map