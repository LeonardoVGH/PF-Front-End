import { Component, OnInit } from '@angular/core';
import { about } from 'src/app/modelo/about.modelo';
import { AboutService } from 'src/app/service/about.service';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: about = new about("nombre","titulo","descripcion","urlimg","urlbanner");

  constructor(public aboutService: AboutService, private tokenService: TokenService) { }
  estaLogueado = false;

  ngOnInit(): void {

this.aboutService.getAbout().subscribe(data => {this.about = data} );

/* estaLogueado lo tendria que cambiar de lugar para no repetirlo entre tantos modulos? */
if (this.tokenService.getToken()) {
  this.estaLogueado = true;
} else {
  this.estaLogueado = false;
}

  }

}
