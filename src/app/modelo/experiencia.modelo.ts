export class Experiencia {
  id? : number;
  exptitulo : string;
  exp_empresa : string;
  exp_desde : string;
  exp_hasta : string;
  exp_descripcion : string;
  logo : string;

  constructor(exptitulo: string, exp_empresa: string, exp_desde: string, exp_hasta: string, exp_descripcion: string, logo: string){
      this.exptitulo = exptitulo;
      this.exp_empresa = exp_empresa;
      this.exp_desde = exp_desde;
      this.exp_hasta = exp_hasta;
      this.exp_descripcion = exp_descripcion;
      this.logo = logo;
  }
}
