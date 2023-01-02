import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormationModule} from './formation/formation.module';
import {ParticipantModule} from './participant/participant.module';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormationModule,
    ParticipantModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
