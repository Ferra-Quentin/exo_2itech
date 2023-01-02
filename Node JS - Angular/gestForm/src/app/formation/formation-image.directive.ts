import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFormationImage]'
})
export class FormationImageDirective {

  private initialHeight: string ='90%';
  private initialeWidth: string = "90%";
  private initialMargin :string = "5px";

  constructor(private el : ElementRef) {
    this.setHeight(this.initialHeight);
    this.setWidth(this.initialeWidth);
    this.setMargin(this.initialMargin);
  }

  setWidth(width:string){
    this.el.nativeElement.style.width = width;
  }

  setHeight(height:string){
    this.el.nativeElement.style.height = height;
  }

  setMargin(margin:string){
    this.el.nativeElement.style.margin = margin;
  }

}
