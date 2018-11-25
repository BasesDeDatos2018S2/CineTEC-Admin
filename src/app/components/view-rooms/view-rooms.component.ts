import { Component, OnInit } from '@angular/core';
import { Room } from '../../classes/room';
import { RoomsService } from '../../services/room.service';

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
  constructor(private roomsService: RoomsService) {
    this.add_room = false;
    this.room_to_add = new Room(0,"",0,0);
    this.header_list = [ "Cine","Sala", "Tamaño","",""];
    // this.room_list.push(new Room(1,"1-B",4,40));
    // this.room_list.push(new Room(2, "3-R",2,60));
    this.updateRoomsList();
    console.log(this.room_list);
  }

  ngOnInit() {
  }


  onSubmitAdd() {

    this.roomsService.createRoom(this.room_to_add).subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.updateRoomsList();
        },
        error => {
            console.log("Error", error);
        }
    );
    this.add_room = false;

  }

  onSubmitEdit() {
  this.roomsService.updateRoom(this.room_to_edit).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
            this.updateRoomsList();
        },
        error => {
            console.log("Error", error);
        }
    );
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
      this.room_to_edit = Object.assign({}, room);
      break;
    }
  }
}

  delete_room(id) {
  console.log("delete", id);
  this.roomsService.deleteRoom(id).subscribe(
        data => {
            console.log("DELETE Request is successful ", data);
            this.updateRoomsList();
        },
        error => {
            console.log("Error", error);
        }
    );

}


  updateRoomsList(){
    console.log("updateClientList");
    this.roomsService.getRooms().subscribe(data => {
      console.log("data:", data);
      this.room_list = data;
    });
  }

  // onSubmitAdd() {
  //   this.room_to_add.id = this.room_list.length;
  //   this.room_list.push(this.room_to_add);
  //   this.add_room = false;
  //   this.room_to_add = new Room(0,"",0,0);
  // }
  //
  // onSubmitEdit() {
  //   for (let room of this.room_list) {
  //     if (room.id === this.room_to_edit.id) {
  //       room = this.room_to_edit;
  //     }
  //   }
  //   this.edit_room = false;
  // }
  //
  // show_add_room() {
  //   this.add_room = true;
  // }
  //
  // show_edit_room(id) {
  //   console.log("edit:", id);
  //   this.edit_room = true;
  //   for (let room of this.room_list) {
  //     if (room.id === id) {
  //       this.room_to_edit = room;
  //       break;
  //     }
  //   }
  // }
  //
  // delete_room(id) {
  //   console.log("delete", id);
  //   for (let i = 0; i < this.room_list.length; i++) {
  //     if (this.room_list[i].id == id) {
  //       console.log(this.room_list[i]);
  //       this.room_list.splice(i, 1);
  //       break;
  //     }
  //   }
  // }

}
