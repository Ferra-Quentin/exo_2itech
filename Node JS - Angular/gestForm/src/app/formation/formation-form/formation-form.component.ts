import {Component, Input, OnInit} from '@angular/core';
import {Formation} from '../formation.model';
import {FormationService} from '../formation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styles: [
  ]
})
export class FormationFormComponent{

  @Input() formation:Formation;
  langages: string[] = ['TypeScript','JavaScript','Html','Css','Php','Twig','JavaEE'];

  constructor( private formationService : FormationService, private router : Router) { }

  onSubmit(){
    if(this.formation.id===undefined){
      // this.formation.id = this.formationService.getFormationList().length+1;
      // this.formationService.getFormationList().push(this.formation);
      this.formationService.createFormation(this.formation).subscribe(resultat=>{
        this.router.navigate(['formations']);
      })
    }else{
      this.formationService.modifFormation(this.formation,this.formation.id).subscribe(resultat=>{
        this.router.navigate(['formations']);
      })
    }
  }

  hasLangage(langage:string):boolean{
    return this.formation.langages.includes(langage);
  }


  selectLangage(checkedElement:string,langage:string){
    const isCheked : boolean = Boolean(checkedElement);
    if(isCheked){
      if(!this.hasLangage(langage)){
        this.formation.langages.push(langage)
      }else{
        let index = this.formation.langages.indexOf(langage)
        this.formation.langages.splice(index,1)
      }
    }else{
      let index = this.formation.langages.indexOf(langage)
      this.formation.langages.splice(index,1)
    }
  }

}
