import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelo/habilidades.modelo';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  /*URL = 'http://localhost:8080/habilidades/';*/
  URL = 'https://portolioargpro.herokuapp.com/habilidades/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.URL + `detail/${id}`);
    /*return this.httpClient.get<Experiencia>(this.URL + "detail"  + "/"  + id);*/
  }

  public save(experiencia: Habilidades): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
