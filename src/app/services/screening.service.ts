import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Screening } from '../classes/screening';

@Injectable({
  providedIn: 'root'
})
export class ScreeningsService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"screening/";
    console.log("ScreeningService works");
  }
  getScreenings(){
    return this.httpClient.get<Screening[]>(this.baseurl);
  }
  getScreening(id:string){
    console.log("pidiendo a", this.baseurl+id);
    return this.httpClient.get<Screening>(this.baseurl+id);
  }
  updateScreening(client:Screening){
    return this.httpClient.put(this.baseurl+"update/", client);
  }

  createScreening(client:Screening){
    return this.httpClient.post(this.baseurl+"add/", client);
  }

  deleteScreening(id:number){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }
}
