import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Cinema } from '../classes/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"cinema/";
    console.log("CinemaService works");
  }
  getCinemas(){
    return this.httpClient.get<Cinema[]>(this.baseurl);
  }
  getCinema(id:string){
    console.log("pidiendo a", this.baseurl+id);
    return this.httpClient.get<Cinema>(this.baseurl+id);
  }
  updateCinema(client:Cinema){
    return this.httpClient.put(this.baseurl+"update/", client);
  }

  createCinema(client:Cinema){
    return this.httpClient.post(this.baseurl+"add/", client);
  }

  deleteCinema(id:number){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }
}
