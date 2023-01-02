import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import {RouterModule, Routes} from '@angular/router';
import { ParticipantColorieDirective } from './participant-colorie.directive';
import {FormsModule} from '@angular/forms';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { ParticipantEditComponent } from './participant-edit/participant-edit.component';
import { ParticipantCreateComponent } from './participant-create/participant-create.component';
import {AuthGuard} from '../auth.guard';


const participantRoutes: Routes = [
  {path:'participants',component:ParticipantListComponent,canActivate:[AuthGuard]},
  {path:'participants/:id',component:ParticipantDetailComponent,canActivate:[AuthGuard]},
  {path:'newparticipant',component:ParticipantCreateComponent,canActivate:[AuthGuard]},
  {path:'editparticipant/:id',component:ParticipantEditComponent,canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    ParticipantListComponent,
    ParticipantDetailComponent,
    ParticipantListComponent,
    ParticipantDetailComponent,
    ParticipantColorieDirective,
    ParticipantFormComponent,
    ParticipantEditComponent,
    ParticipantCreateComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(participantRoutes)
  ]
})
export class ParticipantModule { }
