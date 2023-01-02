import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ParticipantService} from '../participant.service';
import {Participant} from '../participant.model';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styles: [
  ]
})
export class ParticipantFormComponent implements OnInit {
  @Input() participant:Participant;

  constructor( private participantService : ParticipantService, private router : Router) { }

  onSubmit(){
    if(this.participant.id===undefined){
      this.participant.id = this.participantService.getParticipantList().length+1;
      this.participantService.getParticipantList().push(this.participant);
      this.router.navigate(['participants']);
    }else{
      this.router.navigate(['participants']);
    }
  }

  ngOnInit(): void {
  }

}
