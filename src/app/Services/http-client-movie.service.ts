import { Movies } from '../models/Movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientMovieService {
  private REST_API="http://localhost:8080";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  public getAllMovies(): Observable<Movies[]>{
    const url=`${this.REST_API}/api/movies`;
    return this.http.get<any>(url,this.httpOptions)
  }
}
