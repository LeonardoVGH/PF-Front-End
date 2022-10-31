import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { about } from 'src/app/modelo/about.modelo';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-editarabout',
  templateUrl: './editarabout.component.html',
  styleUrls: ['./editarabout.component.css', '../loguin/css/style.css']
})
export class EditaraboutComponent implements OnInit {

  mabout: about = null;

  constructor(private sabout: AboutService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = 1;
    this.sabout.detail(id).subscribe(
      data =>{
        this.mabout = data;
      }, err =>{
        alert("Error de tipo 1 al modificar about");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sabout.update(1, this.mabout).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error de tipo 2 al modificar about");
         this.router.navigate(['']);
      }
    )
  }

}
