import { yellow } from '@angular-devkit/core/src';
import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef:ElementRef,
  private _renderer:Renderer) {
//console.log(this._elementRef)
//this._elementRef.nativeElement.style.backgroundColor='yellow';
this._renderer.setElementStyle(this._elementRef.nativeElement,
'background-color','yellow');
//.nativeElement.style.backgroundColor
  }

}
