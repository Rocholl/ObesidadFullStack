import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthsExtend } from '../Models/healthExtend';
const apiUrl = 'http://localhost:8080/api/healthextend/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class HealthsExtendService {

  constructor(private http: HttpClient) { }
  postHealth(heath: HealthsExtend): Observable<any> {

    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idHealths", "");
    bodyEncoded.append("fecha", heath.fecha.toString());
    bodyEncoded.append("peso", heath.peso.toString());

    bodyEncoded.append("percent_Grasa", heath.percent_Grasa.toString());

    bodyEncoded.append("percent_Hidratacion", heath.percent_Hidratacion.toString());

    bodyEncoded.append("peso_Muscular", heath.peso_Muscular.toString());

    bodyEncoded.append("masa_Muscular", heath.masa_Muscular.toString());

    bodyEncoded.append("peso_Oseo", heath.peso_Oseo.toString());

    bodyEncoded.append("kilocalorias", heath.kilocalorias.toString());

    bodyEncoded.append("edad_Metabolica", heath.edad_Metabolica.toString());

    bodyEncoded.append("altura", heath.altura.toString());

    bodyEncoded.append("masa_Viseral", heath.masa_Viseral.toString());

    bodyEncoded.append("perimetro_Abdominal", heath.perimetro_Abdominal.toString());

    bodyEncoded.append("actividad_Fisica", heath.actividad_Fisica.toString());

    bodyEncoded.append("idUsuario", heath.idUsuario.toString());





    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);

  }
  averages(any): Observable<any> {

    return    this.http.get(apiUrl+"avg");
  }
  centerAverage(idCentro): Observable<HealthsExtend> {
    return this.http.get<HealthsExtend>(apiUrl+"centeraverage/"+idCentro);
    }
}
