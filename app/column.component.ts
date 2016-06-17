import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'column',
  template: `
    <a style="cursor:pointer;color:black;" (click)="changeSort()">
        {{columnName}}
        <i *ngIf="sortDirection == 'asc'" class="fa fa-sort-asc" style="font-size: 10px"></i>
        <i *ngIf="sortDirection == 'desc'" class="fa fa-sort-desc" style="cursor:pointer;font-size: 10px"></i>
    </a>
  `
})
export class SortColumnComponent {
    @Input() columnName: string;
    @Input() sortDirection: string;
    @Output() notify: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        console.log('constructor: columnName='+this.columnName);

    }
    private changeSort(): void {
        console.log('changeSort; columnName='+this.columnName);
        if(this.sortDirection == 'asc') {
            this.sortDirection = 'desc';
        }
        else {
            this.sortDirection = 'asc';
        }
        console.log('sort direction: '+this.sortDirection);
        this.notify.emit({sortField:this.columnName,sortDirection:this.sortDirection});
    }
}