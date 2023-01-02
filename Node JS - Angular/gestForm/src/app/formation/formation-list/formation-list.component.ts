import { Component, OnInit } from '@angular/core';
import {Formation} from '../formation.model';
import {Router} from '@angular/router';
import {FormationService} from '../formation.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styles: [
  ]
})
export class FormationListComponent implements OnInit{
  formations: Formation[];
  formationSelected : Formation | undefined;
  errorMessage:string = '';

  constructor(private router:Router,private formationService:FormationService) {
  }

  ngOnInit(): void {
    this.formationService.getFormationList().subscribe((resultat)=>{
      this.formations = resultat;
    });
  }

  // selectFormation(formation:string){
  //   const index : number = Number(formation)
  //   this.formationSelected = this.formationService.getFormationById(index)
  //   if(!this.formationSelected){
  //     this.errorMessage = 'Formation non trouvée'
  //   }
  //   else{
  //     this.errorMessage = '';
  //   }
  //   // console.log(`Vous avez choisi la spécialité ${this.formations[index].nom}`)
  // }

  goToFormation(formation:Formation){
    this.router.navigate(['formations',formation.id])
  }

}
