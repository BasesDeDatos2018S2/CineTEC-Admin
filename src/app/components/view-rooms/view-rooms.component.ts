import { Component, OnInit } from '@angular/core';
import { Room } from '../../classes/room';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  edit_room: boolean;
  room_to_edit: Room;

  add_room: boolean;
  room_list: Room[] = [];
  room_to_add: Room;
  header_list: string[] = [];
  constructor() {
    this.add_room = false;
    this.room_to_add = new Room(0,"","","");
    this.header_list = [ "Cine","Sala", "Tamaño","",""];
    this.room_list.push(new Room(1,"1-B","Cinépolis","Pequeña (40 espacios)"));
    this.room_list.push(new Room(2, "3-R","NovaCinemas","Grande (60 espacios)"));
    console.log(this.room_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.room_to_add.id = this.room_list.length;
    this.room_list.push(this.room_to_add);
    this.add_room = false;
    this.room_to_add = new Room(0,"","","");
  }

  onSubmitEdit() {
    for (let room of this.room_list) {
      if (room.id === this.room_to_edit.id) {
        room = this.room_to_edit;
      }
    }
    this.edit_room = false;
  }

  show_add_room() {
    this.add_room = true;
  }

  show_edit_room(id) {
    console.log("edit:", id);
    this.edit_room = true;
    for (let room of this.room_list) {
      if (room.id === id) {
        this.room_to_edit = room;
        break;
      }
    }
  }

  delete_room(id) {
    console.log("delete", id);
    for (let i = 0; i < this.room_list.length; i++) {
      if (this.room_list[i].id == id) {
        console.log(this.room_list[i]);
        this.room_list.splice(i, 1);
        break;
      }
    }
  }

}
