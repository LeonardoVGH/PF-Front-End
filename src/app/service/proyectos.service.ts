import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelo/proyectos.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  /*URL = 'http://localhost:8080/proyectos/';*/
  URL = 'https://portolioargpro.herokuapp.com/proyectos/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
    /*return this.httpClient.get<Experiencia>(this.URL + "detail"  + "/"  + id);*/
  }

  public save(experiencia: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
