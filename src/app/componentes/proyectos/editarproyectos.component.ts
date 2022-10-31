import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos.modelo';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editarproyectos',
  templateUrl: './editarproyectos.component.html',
  styleUrls: ['./editarproyectos.component.css', '../loguin/css/style.css']
})
export class EditarproyectosComponent implements OnInit {

  expLab: Proyectos = null;

  constructor(private sExperiencia: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error nro 1 al modificar proyectos");
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
         alert("Error nro 2 al modificar proyectos");
         this.router.navigate(['']);
      }
    )
  }

}
