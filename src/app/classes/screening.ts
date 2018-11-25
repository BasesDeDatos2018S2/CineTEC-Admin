import { Butaca } from './butaca'
export class Screening {
  constructor(
    public id: number,
    public hour: string,
    public date: string,
    public price: number,
    public Butacas_ocupadas: Butaca[],
    public id_movie: number,
    public id_movie_room: number,
  ) {  }
}
