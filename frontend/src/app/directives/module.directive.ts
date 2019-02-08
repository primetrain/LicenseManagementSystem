import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appModule]'
})
export class ModuleDirective {

  constructor(private ele: ElementRef) {
    ele.nativeElement.style.margin = "5px"
  }

  shadow: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgba(0, 0, 0, 0.45) 0px 1px 3px 0px','rgba(0,0,0,0.04)', 'pointer');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.shadow, '#fff',null);
  }
  
  private highlight(boxShadow: string, background:string, cursor: string) {
    this.shadow = this.ele.nativeElement.style.boxShadow
    this.ele.nativeElement.style.boxShadow = boxShadow;
    this.ele.nativeElement.style.cursor = cursor;
    this.ele.nativeElement.style.background = background;
  }

}
