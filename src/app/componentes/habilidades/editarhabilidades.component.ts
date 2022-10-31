import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades.modelo';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-editarhabilidades',
  templateUrl: './editarhabilidades.component.html',
  styleUrls: ['./editarhabilidades.component.css', '../loguin/css/style.css']
})
export class EditarhabilidadesComponent implements OnInit {

  expLab: Habilidades = null;

  constructor(private sExperiencia: HabilidadesService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error nro 1 al modificar habilidad");
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
         alert("Error nro 2 al modificar habilidad");
         this.router.navigate(['']);
      }
    )
  }
}
