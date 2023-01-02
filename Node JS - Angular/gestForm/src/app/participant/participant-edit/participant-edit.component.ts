import { Component, OnInit } from '@angular/core';
import {Participant} from '../participant.model';
import {ActivatedRoute} from '@angular/router';
import {ParticipantService} from '../participant.service';

@Component({
  selector: 'app-participant-edit',
  template: `
    <h3 class="center">Modification Participant</h3>
    <app-participant-form *ngIf="participant" [participant]=participant></app-participant-form>
    <p *ngIf=!participant>Participant introuvable</p>
  `,
  styles: [
  ]
})
export class ParticipantEditComponent implements OnInit {

  participant : Participant|undefined;

  constructor(private participantService : ParticipantService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const participantId : number = Number(this.route.snapshot.paramMap.get('id'));
    if(participantId){
      this.participant= this.participantService.getParticipantById(participantId);
    }else{
      this.participant = undefined;
    }
  }

}
