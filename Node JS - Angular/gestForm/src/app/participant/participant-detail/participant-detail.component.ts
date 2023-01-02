import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListParticipant} from '../participant.mock';
import {Participant} from '../participant.model';
import {ParticipantService} from '../participant.service';

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styles: [
  ]
})
export class ParticipantDetailComponent implements OnInit {

  participants = ListParticipant;
  participant : Participant | undefined;

  constructor(private router:Router, private route: ActivatedRoute,private participantService:ParticipantService) { }

  ngOnInit(): void {
    this.participants = this.participantService.getParticipantList();
    const participantId = Number(this.route.snapshot.paramMap.get('id'));
    this.participant = this.participantService.getParticipantById(participantId);
  }

  goToParticipantList(){
    this.router.navigate(['participants']);
  }
  gotToEditionparticipant(participant:Participant){
    this.router.navigate(['editparticipant',participant.id])
  }

}
