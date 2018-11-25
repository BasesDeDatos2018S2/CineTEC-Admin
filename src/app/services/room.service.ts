import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Room } from '../classes/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseurl:string;
  constructor(private httpClient:HttpClient) {
    this.baseurl = environment.apiUrl+"rooms/";
    console.log("RoomService works");
  }
  getRooms(){
    return this.httpClient.get<Room[]>(this.baseurl);
  }
  getRoom(id:string){
    console.log("pidiendo a", this.baseurl+id);
    return this.httpClient.get<Room>(this.baseurl+id);
  }
  updateRoom(client:Room){
    return this.httpClient.put(this.baseurl+"update/", client);
  }

  createRoom(client:Room){
    return this.httpClient.post(this.baseurl+"add/", client);
  }

  deleteRoom(id:number){
    return this.httpClient.delete(this.baseurl+"delete/"+id);
  }
}
