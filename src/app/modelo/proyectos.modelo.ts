export class Proyectos {

  id? : number;
  nombre : string;
  descripcion : string;
  logo : string;


  constructor(nombre: string, descripcion: string, logo: string, ){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.logo = logo;

  }

}
