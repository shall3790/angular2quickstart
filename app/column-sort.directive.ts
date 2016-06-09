import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
@Directive({
  selector: '[sortColumn]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()'
  },
  outputs:['notify']
})
export class SortColumnDirective {
    private el:HTMLElement;
    @Input('sortColumn') name: string;
    //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
    private notify: EventEmitter<any> = new EventEmitter<any>();

    constructor(el: ElementRef) { 
      this.el = el.nativeElement;
      console.log('sort column: '+this.name);
    }

    
  
    onMouseEnter() { 
        this.highlight("yellow");
    }
  
  onMouseLeave() { 
      this.highlight(null); 
  }
  
  onClick(event: any) {
      console.log('click event=' + event + '; column id='+this.el.id);
      this.notify.emit(this.name);
  }

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }

}
