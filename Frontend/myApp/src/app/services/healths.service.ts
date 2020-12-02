import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Healths } from '../Models/Healths';
const apiUrl = 'http://localhost:8080/api/health/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class HealthsService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Healths[]> {

    console.log(apiUrl, httpOptions);
    return this.http.get<Healths[]>(apiUrl);

    // .pipe(
    //   tap(bicycle => console.log('fetched bicycles'))
    //   // ,
    //   // catchError(this.handleError('getBicycles', []))
    // );
  };
}
