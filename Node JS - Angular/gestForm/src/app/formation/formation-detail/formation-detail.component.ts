import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListFormation} from '../formation.mock';
import {Formation} from '../formation.model';
import {FormationService} from '../formation.service';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styles: [
  ]
})
export class FormationDetailComponent implements OnInit {

  formations : Formation[];
  formation : Formation|undefined;

  constructor(private router:Router, private route: ActivatedRoute, private formationService:FormationService) {  }

  ngOnInit(): void {
    this.formationService.getFormationList().subscribe((resultat)=>{
      this.formations = resultat;
    });
    const formationId = Number(this.route.snapshot.paramMap.get('id'));
    this.formationService.getFormationById(formationId).subscribe(resultat=>{
      this.formation=resultat
    });
  }

  goToFormationList(){
    this.router.navigate(['formations']);
  }

  gotToEditionFormation(formation:Formation){
    this.router.navigate(['editformation',formation.id])
  }

  gotToDeleteFormation(id:number){
    this.formationService.deleteFormation(id).subscribe(resultat=>{
      this.router.navigate(['formations']);
    })
  }


}
