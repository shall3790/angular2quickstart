import { Directive, ElementRef, EventEmitter, Input, Output, OnChanges, SimpleChange } from '@angular/core';
@Directive({
  selector: '[sortColumn]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()'
  },
  outputs:['notify']
})
export class SortColumnDirective implements OnChanges {
    private el:HTMLElement;
    private iNode: HTMLPhraseElement;
    @Input('sortColumn') name: string;
    @Input('active') active: string;

    private asc: boolean = true;
    private sortChar: string = '';
    //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
    private notify: EventEmitter<any> = new EventEmitter<any>();

    constructor(el: ElementRef) {
        
        this.el = el.nativeElement;
        console.log('sort column: '+this.name);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        for (let propName in changes) {
            let prop = changes[propName];
            let cur = JSON.stringify(prop.currentValue)
            let prev = JSON.stringify(prop.previousValue);
            console.log('id: '+this.el.id);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
            if(this.el.id != changes[propName].currentValue) {
                if(this.iNode) {
                    this.iNode.className = null;
                }    
            }
        }
    }
    
    onMouseEnter() {
        //let n1 = this.el.ownerDocument.createElement('i');
        // n1.className = 'fa fa-sort-asc';
        // //n1.sty.style = 'font-size: 10px';
        // this.el.appendChild(n1);
        //this.highlight("yellow");
        //console.log('active: '+this.active);
    }
  
    onMouseLeave() { 
        //this.highlight(null); 
    }

    onClick(event: any) {
        //console.log('click event=' + event + '; column id='+this.el.id);
        this.asc = !this.asc;
        if(this.el.children.length > 0) { 
            //let iNode = this.el.children[0];
            if(this.asc) {
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
        } else {
            if(this.asc) {
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
        
        let columnName = this.el.id;
        let direction = this.asc? 'asc' : 'desc';
        this.notify.emit({sortField:columnName,sortDirection:direction});
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }

}
