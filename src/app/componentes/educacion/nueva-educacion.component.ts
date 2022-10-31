import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelo/educacion.modelo';
import { EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css', '../loguin/css/style.css']
})
export class NuevaEducacionComponent implements OnInit {

  grado: string = '';
  escuela: string = '';
  ingreso: string = '';
  egreso: string = '';
  descripcion: string = '';
  logo: string = '';

  constructor(private sExperiencia: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Educacion(this.grado, this.descripcion, this.ingreso, this.egreso, this.escuela, this.logo);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Educacion guardada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo cargar la nueva educacion");
        this.router.navigate(['']);
      }
    )
  }

}
