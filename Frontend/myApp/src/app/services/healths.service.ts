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
  postHealth(heath:Healths):Observable<any> {

    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idHealths", "");
    bodyEncoded.append("masa_Grasa", heath.masa_Grasa.toString());
    bodyEncoded.append("masa_Viseral", heath.masa_Viseral.toString());

    bodyEncoded.append("masa_Muscular", heath.masa_Muscular.toString());

    bodyEncoded.append("altura", heath.altura.toString());

    bodyEncoded.append("peso", heath.peso.toString());

    bodyEncoded.append("edad", heath.edad.toString());
    bodyEncoded.append("idCentros", heath.idCentros.toString());

    bodyEncoded.append("idCursos", heath.idCursos.toString());



    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);

  }
  getByMunicipio(id): Observable<Healths[]> {
    console.log(apiUrl, httpOptions);
    return this.http.get<Healths[]>(apiUrl+"municipio/"+id);

    // .pipe(
    //   tap(bicycle => console.log('fetched bicycles'))
    //   // ,
    //   // catchError(this.handleError('getBicycles', []))
    // );
  };

  getAll(): Observable<Healths[]> {

   
    return this.http.get<Healths[]>(apiUrl);

    // .pipe(
    //   tap(bicycle => console.log('fetched bicycles'))
    //   // ,
    //   // catchError(this.handleError('getBicycles', []))
    // );
  };
}
