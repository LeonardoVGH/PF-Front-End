import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { about } from '../modelo/about.modelo';



@Injectable({
  providedIn: 'root'
})
export class AboutService {

  /*URL = 'http://localhost:8080/about/';*/
  URL = ' https://portolioargpro.herokuapp.com/about/';



  constructor(private http: HttpClient) { }

  public getAbout(): Observable<about>{

  return this.http.get<about>(this.URL+'traer/perfil');

  }

  public lista(): Observable<about[]>{
    return this.http.get<about[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<about>{
    return this.http.get<about>(this.URL + `traer/perfil`);
    /*return this.httpClient.get<Experiencia>(this.URL + "detail"  + "/"  + id);*/
  }

  public save(experiencia: about): Observable<any>{
    return this.http.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: about): Observable<any>{
    return this.http.put<any>(this.URL + `modificar`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }



}
