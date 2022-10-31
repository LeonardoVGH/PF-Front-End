export class Educacion {
  id? : number;
  grado : string;
  escuela : string;
  ingreso : string;
  egreso : string;
  descripcion : string;
  logo : string;

  constructor(grado: string, escuela: string, ingreso: string, egreso: string, descripcion: string, logo: string){
      this.grado = grado;
      this.escuela = escuela;
      this.ingreso = ingreso;
      this.egreso = egreso;
      this.descripcion = descripcion;
      this.logo = logo;
  }
}
