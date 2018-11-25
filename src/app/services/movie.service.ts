import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Movie } from '../classes/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"movie/";
    console.log("MovieService works");
  }
  getMovies(){
    return this.httpClient.get<Movie[]>(this.baseurl);
  }
  getMovie(id:string){
    console.log("pidiendo a", this.baseurl+id);
    return this.httpClient.get<Movie>(this.baseurl+id);
  }
  updateMovie(client:Movie){
    return this.httpClient.put(this.baseurl+"update/", client);
  }

  createMovie(client:Movie){
    return this.httpClient.post(this.baseurl+"add/", client);
  }

  deleteMovie(id:number){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }
}
