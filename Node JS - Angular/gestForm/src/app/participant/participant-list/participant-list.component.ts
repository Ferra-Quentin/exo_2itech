import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListParticipant} from '../participant.mock';
import {Participant} from '../participant.model';
import {ParticipantService} from '../participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styles: [
  ]
})
export class ParticipantListComponent implements OnInit {

  participants : Participant[]
  participantSelected : Participant | undefined;
  errMessage : string = '';

  constructor(private router:Router,private participantService:ParticipantService) { }

  ngOnInit(): void {
    this.participants = this.participantService.getParticipantList();
  }

  selectParticipant(participant:string){
    const index : number = Number(participant)
    this.participantSelected = this.participantService.getParticipantById(index)
    if(!this.participantSelected){
      this.errMessage = 'Formation non trouvée'
    }
    else{
      this.errMessage = '';
    }
  }

  goToParticipant(participant:Participant){
    this.router.navigate(['participants',participant.id])
  }

}
