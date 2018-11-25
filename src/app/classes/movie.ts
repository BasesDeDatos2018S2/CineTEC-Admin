export class Movie {
  constructor(
    public id: number,
    public Nombre_Original: string,
    public Nombre: string,
    public Estado: string,
    public Duracion: string,
    public Director: string,
    public Protagonistas: string[],
    public Clasificacion: string,
    public Imagen: string,
  ) {  }
}
