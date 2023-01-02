import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path:'',redirectTo: 'formations', pathMatch: 'full'},
  {path:'login',component:AuthComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
