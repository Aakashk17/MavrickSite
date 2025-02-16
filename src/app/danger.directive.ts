import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDanger]'
})
export class DangerDirective {

  constructor(public eleref:ElementRef) { 
    console.log(eleref);
    this.eleref.nativeElement.style.color='red';
  }

}
