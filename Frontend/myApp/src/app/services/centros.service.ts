import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Centro } from '../Models/Centro';
const apiUrl = 'http://localhost:8080/api/centro/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};
@Injectable({
  providedIn: 'root'
})

export class CentrosService {

  constructor(private http: HttpClient) { }

  getCentros(): Observable<Centro[]> {
 
    return this.http.get<Centro[]>(apiUrl);
    
      // .pipe(
      //   tap(bicycle => console.log('fetched bicycles'))
      //   // ,
      //   // catchError(this.handleError('getBicycles', []))
      // );
  };
}
