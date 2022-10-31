import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos.modelo';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css', '../loguin/css/style.css']
})
export class NuevoProyectoComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  logo: string = '';

  constructor(private sExperiencia: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyectos(this.nombre, this.descripcion, this.logo);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("proyecto guardada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo cargar el nuevo proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
