import { Component, OnInit } from '@angular/core';
import { ESTUDIOS } from '../../interfaces/sim-educacion';

import { Educacion } from 'src/app/modelo/educacion.modelo';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']


})

export class EducacionComponent implements OnInit {

  expe: Educacion[] = [];

  constructor(private sExperiencia: EducacionService, private tokenService: TokenService) { }

  estaLogueado = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.estaLogueado = true;
    } else {
      this.estaLogueado = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }










  estudios = ESTUDIOS;

}



