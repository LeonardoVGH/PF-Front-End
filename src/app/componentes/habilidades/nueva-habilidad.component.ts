import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades} from 'src/app/modelo/habilidades.modelo';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css', '../loguin/css/style.css']
})
export class NuevaHabilidadComponent implements OnInit {

  nombre: string = '';
  porcentaje: number = 0


  constructor(private sExperiencia: HabilidadesService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Habilidades(this. nombre, this.porcentaje);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("habilidad guardada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo cargar la nueva habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
