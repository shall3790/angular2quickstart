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
var AppComponent = (function () {
    function AppComponent(_basicService) {
        this._basicService = _basicService;
        this.appName = 'Angular2 QuickStart';
        this.pageTitle = 'Home';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [basic_service_1.BasicService, http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [basic_service_1.BasicService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map