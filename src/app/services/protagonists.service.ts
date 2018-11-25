import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Protagonists } from '../classes/protagonists';

@Injectable({
  providedIn: 'root'
})
export class ProtagonistsService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"actors/";
    console.log("ProtagonistService works");
  }
  getProtagonists(){
    return this.httpClient.get<Protagonists[]>(this.baseurl);
  }
  getProtagonist(id:string){
    console.log("pidiendo a", this.baseurl+id);
    return this.httpClient.get<Protagonists>(this.baseurl+id);
  }
  updateProtagonist(client:Protagonists){
    return this.httpClient.put(this.baseurl+"update/", client);
  }

  createProtagonist(client:Protagonists){
    return this.httpClient.post(this.baseurl+"add/", client);
  }

  deleteProtagonist(id:number){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }
}
