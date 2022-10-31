import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia.modelo';
import { SExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css', '../loguin/css/style.css']
})
export class EditarexperienciaComponent implements OnInit {

  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia1");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia2");
         this.router.navigate(['']);
      }
    )
  }

}
