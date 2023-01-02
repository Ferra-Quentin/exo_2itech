import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFormationCard]'
})
export class FormationCardDirective {

  constructor(private el:ElementRef) {
    this.setHeight(300);
    this.setBorder('black');
    this.setBackground('grey')

  }

  @Input('appFormationCard') borderColor:string

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor?this.borderColor:'orange');
    this.setBackground('lightgreen');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('black');
    this.setBackground('grey');
  }

  setHeight(height:number){
    this.el.nativeElement.style.height =  `${height}px`;
  }

  setBorder(color:string){
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }

  setBackground(color:string){
    this.el.nativeElement.style.background = color;
  }
}
