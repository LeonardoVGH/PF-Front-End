import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos.modelo';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  expe: Proyectos[] = [];

  constructor(private sExperiencia: ProyectosService, private tokenService: TokenService) { }

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
          alert("No se pudo borrar el proyecto");
        }
      )
    }


  }
}
