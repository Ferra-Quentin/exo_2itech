import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  template: `
    <div class="row">
      <div class="col s12 m4 offset-m4">
        <div class="card hoverable">
          <p>{{errMessage}}</p>
          <form #logginForm='ngForm'>
            <div>
              <label for="username">Username</label>
              <input type="text" id="username" name="username" [(ngModel)]="username" required>
            </div>

            <div>
              <label for="password">Mot de passe</label>
              <input type="password" id="password" name="password" [(ngModel)]="password" required>
            </div>

            <div class="card-action center">
              <button [disabled]="!logginForm.form.valid" (click)="login()">Se connecter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  username:string;
  password:string;
  errMessage : string = 'Déconnecté';

  constructor(private authService : AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    const login = this.authService.login(this.username,this.password);
    if(login){
      this.router.navigate(['formations'])
    }
    else{
      this.errMessage="Utilisateur ou mot de passe incorrecte";
    }
  }

}
