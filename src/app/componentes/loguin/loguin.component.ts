import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelo/loginusuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({

  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css', './css/style.css', './css/owl.carousel.min.css', './css/bootstrap.min.css', './fonts/icomoon/style.css']
})
export class LoguinComponent implements OnInit {

  isLogged=false;
  islogginFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!:string;



  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {

this.isLogged=true;
this.islogginFail=false;
this.roles=this.tokenService.getAuthorities();

    }

  }

  onLogin():void {

    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);

    this.authService.login(this.loginUsuario).subscribe(data => {

        this.isLogged = true;
        this.islogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;
        this.router.navigate([''])
      }, err => {
        this.isLogged = false;
        this.islogginFail = true;
        console.log ("error");
        alert("Nombre o contraseña incorrecta, por favor intente nuevamente");

         /** this.errMsj = err.error.mensaje;
        console.log (this.errMsj);  **/


      })

  }
}
