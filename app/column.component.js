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
var SortColumnComponent = (function () {
    function SortColumnComponent() {
        this.notify = new core_1.EventEmitter();
        console.log('constructor: columnName=' + this.columnName);
    }
    SortColumnComponent.prototype.changeSort = function () {
        console.log('changeSort; columnName=' + this.columnName);
        if (this.sortDirection == 'asc') {
            this.sortDirection = 'desc';
        }
        else {
            this.sortDirection = 'asc';
        }
        console.log('sort direction: ' + this.sortDirection);
        this.notify.emit({ sortField: this.columnName, sortDirection: this.sortDirection });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SortColumnComponent.prototype, "columnName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SortColumnComponent.prototype, "sortDirection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SortColumnComponent.prototype, "notify", void 0);
    SortColumnComponent = __decorate([
        core_1.Component({
            selector: 'column',
            template: "\n    <a style=\"cursor:pointer;color:black;\" (click)=\"changeSort()\">\n        {{columnName}}\n        <i *ngIf=\"sortDirection == 'asc'\" class=\"fa fa-sort-asc\" style=\"font-size: 10px\"></i>\n        <i *ngIf=\"sortDirection == 'desc'\" class=\"fa fa-sort-desc\" style=\"cursor:pointer;font-size: 10px\"></i>\n    </a>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SortColumnComponent);
    return SortColumnComponent;
}());
exports.SortColumnComponent = SortColumnComponent;
//# sourceMappingURL=column.component.js.map