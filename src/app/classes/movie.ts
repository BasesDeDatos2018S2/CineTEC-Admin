export class Movie {
  constructor(
    public id: number,
    public original_name: string,
    public translate_name: string,
    public status: string,
    public duration: string,
    public director: string,
    public id_protagonists: string[],
    public classification: string,
    public imagen: string,
  ) {  }
}
