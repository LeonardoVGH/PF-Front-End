export class Habilidades {
  id? : number;
  nombre : string;
  porcentual : number;

  constructor(nombre: string, porcentaje: number){
      this.nombre = nombre;
      this.porcentual = porcentaje;

  }

}
