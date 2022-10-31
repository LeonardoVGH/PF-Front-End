import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../servicios/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.css']

})
export class HeaderComponent implements OnInit {

  estaLogueado=false

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()){

      this.estaLogueado=true;
    } else {

  this.estaLogueado=false;

}
    }

    onLogOut(): void {
      this.tokenService.logOut();
      window.location.reload();
    }

  loguear(){
    this.router.navigate(['/log'])
  }

}
