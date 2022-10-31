import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AboutComponent } from './componentes/about/about.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { LoguinComponent } from './componentes/loguin/loguin.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia.component';
import { EditaraboutComponent } from './componentes/about/editarabout.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditareducacionComponent } from './componentes/educacion/editareducacion.component';
import { EditarproyectosComponent } from './componentes/proyectos/editarproyectos.component';
import { EditarhabilidadesComponent } from './componentes/habilidades/editarhabilidades.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    AboutComponent,
    LoguinComponent,
    PrincipalComponent,
    NuevaExperienciaComponent,
    EditarexperienciaComponent,
    EditaraboutComponent,
    NuevaHabilidadComponent,
    NuevoProyectoComponent,
     NuevaEducacionComponent,
     EditareducacionComponent,
     EditarproyectosComponent,
     EditarhabilidadesComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



