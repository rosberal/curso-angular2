import { Directive,ElementRef,HostListener,HostBinding,Renderer,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter')onMouseOver(){
    this.backgroundColor=this.highlightColor;
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow');
  }

  @HostListener('mouseleave')onMouseLeave(){

    //  this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','white');
  this.backgroundColor=this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor:string;

@Input() defaultColor: string ='white';
@Input() highlightColor: string ='red';

  constructor(private _elementRef:ElementRef,
  private _renderer: Renderer) {
  }

ngOnInit()
{  this.backgroundColor=this.defaultColor;}



}
