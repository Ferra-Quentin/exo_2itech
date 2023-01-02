import { Injectable } from '@angular/core';
import {Formation} from './formation.model';
import {ListFormation} from './formation.mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';

const baseUrl = `${environment.endpoint}/formations`;
const httpOption = {
  headers:new HttpHeaders({
    'Content-type':'application/json',
    'Authorization':'Basic '+btoa('quentin:quentin'),
    'Access-Control-Allow-Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FormationService {

  constructor(private http: HttpClient) {}

  //get all
  getFormationList(): Observable<Formation[]>{
    return this.http.get<Formation[]>(baseUrl,httpOption);
  }

  //Get id
  getFormationById(formationId : number):Observable<Formation|undefined> {
    return this.http.get<Formation>(`${baseUrl}/${formationId}`,httpOption)
  }

  //Creation
  createFormation(formation:Formation):Observable<Formation>{
    return this.http.post<Formation>(`${baseUrl}`,formation,httpOption)
  }

  //Modification
  modifFormation(formation:Formation,id:number):Observable<Formation>{
    return this.http.put<Formation>(`${baseUrl}/${id}`,formation,httpOption)
  }

  deleteFormation(id:number):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`,httpOption)
  }


}
