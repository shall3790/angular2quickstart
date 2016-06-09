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
var SortColumnDirective = (function () {
    function SortColumnDirective(el) {
        //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
        this.notify = new core_1.EventEmitter();
        this.el = el.nativeElement;
        console.log('sort column: ' + this.name);
    }
    SortColumnDirective.prototype.onMouseEnter = function () {
        this.highlight("yellow");
    };
    SortColumnDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    SortColumnDirective.prototype.onClick = function (event) {
        console.log('click event=' + event + '; column id=' + this.el.id);
        this.notify.emit(this.name);
    };
    SortColumnDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
    };
    __decorate([
        core_1.Input('sortColumn'), 
        __metadata('design:type', String)
    ], SortColumnDirective.prototype, "name", void 0);
    SortColumnDirective = __decorate([
        core_1.Directive({
            selector: '[sortColumn]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()',
                '(click)': 'onClick()'
            },
            outputs: ['notify']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SortColumnDirective);
    return SortColumnDirective;
}());
exports.SortColumnDirective = SortColumnDirective;
//# sourceMappingURL=column-sort.directive.js.map