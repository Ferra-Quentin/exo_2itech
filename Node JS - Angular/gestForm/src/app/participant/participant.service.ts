import { Injectable } from '@angular/core';
import {ListParticipant} from './participant.mock';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() { }

  getParticipantList(){
    return ListParticipant;
  }

  getParticipantById(ParticipantId:number){
    return ListParticipant.find(participant=>participant.id===ParticipantId);
  }
}
