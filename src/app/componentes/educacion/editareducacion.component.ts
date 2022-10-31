import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion.modelo';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css', '../loguin/css/style.css']
})
export class EditareducacionComponent implements OnInit {

  expLab: Educacion = null;

  constructor(private sExperiencia: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error de tipo 1 al modificar educacion");
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
         alert("Error tipo 2 al modificar educacion");
         this.router.navigate(['']);
      }
    )
  }

}
