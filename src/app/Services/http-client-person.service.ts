import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class HttpClientPersonService {
  private REST_API="http://localhost:8080";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  public getAllPersons(): Observable<Person[]>{
    const url=`${this.REST_API}/api/persons`;
    return this.http.get<any>(url,this.httpOptions)
  }
}
