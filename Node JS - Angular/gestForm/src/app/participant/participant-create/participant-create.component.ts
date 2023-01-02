import { Component, OnInit } from '@angular/core';
import {Participant} from '../participant.model';

@Component({
  selector: 'app-participant-create',
  template: `
    <h3 class="center">Nouvau Participant</h3>
    <app-participant-form [participant]=participant></app-participant-form>
  `,
  styles: [
  ]
})
export class ParticipantCreateComponent implements OnInit {

  participant:Participant = new Participant();

  constructor() { }

  ngOnInit(): void {
  }

}
