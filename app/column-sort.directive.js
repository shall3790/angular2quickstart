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
        this.asc = true;
        this.sortChar = '';
        //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
        this.notify = new core_1.EventEmitter();
        this.el = el.nativeElement;
        console.log('sort column: ' + this.name);
    }
    SortColumnDirective.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var prop = changes[propName];
            var cur = JSON.stringify(prop.currentValue);
            var prev = JSON.stringify(prop.previousValue);
            console.log('id: ' + this.el.id);
            console.log(propName + ": currentValue = " + cur + ", previousValue = " + prev);
            if (this.el.id != changes[propName].currentValue) {
                if (this.iNode) {
                    this.iNode.className = null;
                }
            }
        }
    };
    SortColumnDirective.prototype.onMouseEnter = function () {
        //let n1 = this.el.ownerDocument.createElement('i');
        // n1.className = 'fa fa-sort-asc';
        // //n1.sty.style = 'font-size: 10px';
        // this.el.appendChild(n1);
        //this.highlight("yellow");
        //console.log('active: '+this.active);
    };
    SortColumnDirective.prototype.onMouseLeave = function () {
        //this.highlight(null); 
    };
    SortColumnDirective.prototype.onClick = function (event) {
        //console.log('click event=' + event + '; column id='+this.el.id);
        this.asc = !this.asc;
        if (this.el.children.length > 0) {
            //let iNode = this.el.children[0];
            if (this.asc) {
                this.iNode.id = 'asc';
                this.iNode.style.fontSize = '10px';
                this.iNode.style.cursor = 'pointer';
                this.iNode.style.paddingLeft = '3px';
                this.iNode.className = 'fa fa-sort-asc';
            }
            else {
                this.iNode.id = 'desc';
                this.iNode.style.fontSize = '10px';
                this.iNode.style.cursor = 'pointer';
                this.iNode.style.paddingLeft = '3px';
                this.iNode.className = 'fa fa-sort-desc';
            }
        }
        else {
            if (this.asc) {
                this.iNode = this.el.ownerDocument.createElement('i');
                this.iNode.id = 'asc';
                this.iNode.style.fontSize = '10px';
                this.iNode.style.paddingLeft = '3px';
                this.iNode.className = 'fa fa-sort-asc';
                this.el.appendChild(this.iNode);
            }
            else {
                this.iNode = this.el.ownerDocument.createElement('i');
                this.iNode.id = 'desc';
                this.iNode.style.fontSize = '10px';
                this.iNode.style.paddingLeft = '3px';
                this.iNode.className = 'fa fa-sort-desc';
                this.el.appendChild(this.iNode);
            }
        }
        var columnName = this.el.id;
        var direction = this.asc ? 'asc' : 'desc';
        this.notify.emit({ sortField: columnName, sortDirection: direction });
    };
    SortColumnDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
    };
    __decorate([
        core_1.Input('sortColumn'), 
        __metadata('design:type', String)
    ], SortColumnDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input('active'), 
        __metadata('design:type', String)
    ], SortColumnDirective.prototype, "active", void 0);
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