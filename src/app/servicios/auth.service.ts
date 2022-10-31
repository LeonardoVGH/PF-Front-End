import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtDto } from '../modelo/jwt-dto';
import { NuevoUsuario } from '../modelo/nuevousuario';
import { LoginUsuario } from '../modelo/loginusuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*authURL='http://localhost:8080/auth/'*/
  authURL='https://portolioargpro.herokuapp.com/auth/'


  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>{

    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario);
  }

}
