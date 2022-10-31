import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades.modelo';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  expe: Habilidades[] = [];

  constructor(private sExperiencia: HabilidadesService, private tokenService: TokenService) { }

  estaLogueado = false;
  percentValue: string;
  prueba: number;

  ngOnInit(): void {

    this.percentValue = "hola"
    this.prueba = 70

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
          alert("No se pudo borrar la habilidad");
        }
      )
    }


  }

}



