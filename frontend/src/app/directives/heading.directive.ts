import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeading]'
})
export class HeadingDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.textAlign = "center"
  }

}
