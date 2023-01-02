import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appParticipantColorie]'
})
export class ParticipantColorieDirective implements OnInit{

  constructor(private el:ElementRef) {
  }

  @Input('appParticipantColorie') sexe:string

  ngOnInit() {
    if(this.sexe=='Femme'){
      this.setColor("red")
    }
    else{
      if(this.sexe=="Homme"){
        this.setColor("blue")
      }
      else{
        this.setColor("orange")
      }
    }
  }


    setColor(color:string){
    this.el.nativeElement.style.color=color;
  }

}
