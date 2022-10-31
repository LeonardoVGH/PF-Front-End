import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelo/educacion.modelo';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  /*URL = 'http://localhost:8080/educacion/';*/
  URL = 'https://portolioargpro.herokuapp.com/educacion/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
    /*return this.httpClient.get<Experiencia>(this.URL + "detail"  + "/"  + id);*/
  }

  public save(experiencia: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
