import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean = false;

  constructor(private router:Router) { }

  login({ username, password }: { username: string; password: string; }): Observable<Subscription> {
    return observableOf(this.http.post<any>(baseUrl, utilisateur, httpOptions).subscribe(
        (utilisateurCo)=>{
          if(utilisateurCo){
            localStorage.setItem('ROLE', utilisateurCo.role)
            this.isLoggedIn.next(true);
            return observableOf(true)
          } else {
            return observableOf(false)
          }
        }
    ))
  }

  logOut(){
    this.isLoggedIn=false;
    this.router.navigate(['/login']);
  }
}
