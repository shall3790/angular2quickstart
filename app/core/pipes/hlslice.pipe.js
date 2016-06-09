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
var HlSlicePipe = (function () {
    function HlSlicePipe() {
    }
    HlSlicePipe.prototype.transform = function (value, start, end) {
        //let filter = args[0] ? args[0].toLocaleLowerCase() : null;
        //let filter = args[0] ? args[0] : null;
        //let filter: string[] = args ? args.split(':') : null;
        //let start: number = parseInt(args[0]);
        //let end: number = parseInt(args[1]);
        var results = [];
        results = value.slice(start, end);
        console.debug('calling hlslice pipe...');
        //if data is present
        //if (value) {
        //    if (this.searchType == 'AND') {
        //        results = value;
        //        for (var i = 0; i < filter.length; i++) {
        //            results = <RootObject[]>filterFilter(results, filter[i]);
        //        }
        //    }
        //}
        return results;
    };
    HlSlicePipe = __decorate([
        core_1.Pipe({
            name: 'hlslice'
        }), 
        __metadata('design:paramtypes', [])
    ], HlSlicePipe);
    return HlSlicePipe;
}());
exports.HlSlicePipe = HlSlicePipe;
//# sourceMappingURL=hlslice.pipe.js.map