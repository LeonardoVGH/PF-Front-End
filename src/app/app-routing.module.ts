import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';

import { EditareducacionComponent } from './componentes/educacion/editareducacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarproyectosComponent } from './componentes/proyectos/editarproyectos.component';
import { NuevoProyectoComponent } from './componentes//proyectos/nuevo-proyecto.component';
import { EditarhabilidadesComponent } from './componentes/habilidades/editarhabilidades.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad.component';

import { EditaraboutComponent } from './componentes/about/editarabout.component';
import { LoguinComponent } from './componentes/loguin/loguin.component';
import { PrincipalComponent } from './componentes/principal/principal.component'

const routes: Routes = [

{path:'', component: PrincipalComponent},
{path:'log', component: LoguinComponent},
{path:'nuevaexp', component: NuevaExperienciaComponent},
{path:'editarexp/:id', component: EditarexperienciaComponent},
{path:'editarabout', component: EditaraboutComponent},
{path:'nuevahabilidad', component: NuevaHabilidadComponent},
{path:'nuevaeducacion', component: NuevaEducacionComponent},
{path:'nuevoproyecto', component: NuevoProyectoComponent},
{path:'editarproyecto/:id', component: EditarproyectosComponent},
{path:'editarhabilidad/:id', component: EditarhabilidadesComponent},
{path:'editareducacion/:id', component: EditareducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
