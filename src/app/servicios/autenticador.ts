import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {

  private logueado: boolean = true;

  constructor() {

    this.logueado = false

  }

  public login(){

  this.logueado=!this.logueado

  }

  public estalogueado(): boolean {
    return this.logueado;
}

}
