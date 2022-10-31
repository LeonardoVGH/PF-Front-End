import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia.modelo';
import { SExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css', '../loguin/css/style.css']
})

export class NuevaExperienciaComponent implements OnInit {

  exptitulo: string = '';
  exp_empresa: string = '';
  exp_desde: string = '';
  exp_hasta: string = '';
  exp_descripcion: string = '';
  logo: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.exptitulo, this.exp_empresa, this.exp_desde, this.exp_hasta, this.exp_descripcion, this.logo);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia guardada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo cargar la nueva experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
