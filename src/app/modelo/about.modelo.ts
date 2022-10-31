export class about{

  id?: number;
  nombre: string;
  titulo: string;
  descripcion: string;
  url_img: string;
  url_banner: string

  constructor(nombre:string, titulo:string, descripcion:string, url_img:string, url_banner:string) {
    this.nombre = nombre;
    this.titulo = titulo;
    this.descripcion=descripcion;
    this.url_img=url_img;
    this.url_banner=url_banner;
  }
}
