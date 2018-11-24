import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../classes/cinema';

@Component({
  selector: 'app-view-cinemas',
  templateUrl: './view-cinemas.component.html',
  styleUrls: ['./view-cinemas.component.css']
})
export class ViewCinemasComponent implements OnInit {

  add_cinema: boolean;
  edit_cinema: boolean;

  cinema_list: Cinema[] = [];

  cinema_to_add: Cinema;
  cinema_to_edit: Cinema;
  header_list: string[] = [];
  constructor() {
    this.add_cinema = false;
    this.edit_cinema = false;

    this.cinema_to_add = new Cinema(0,"", "");
    this.cinema_to_edit = new Cinema(1,"", "");

    this.header_list = [ "Nombre", "Ubicación","","",];

    this.cinema_list.push(new Cinema(1, "Cinépolis","Paseo Metropoli, Cartago"));
    this.cinema_list.push(new Cinema(2, "NovaCinemas", "Ciudad del Este, Tres ríos"));

    console.log(this.cinema_list);
  }

  ngOnInit() {
  }

  onSubmitAdd() {
    this.cinema_to_add.id = this.cinema_list.length;
    this.cinema_list.push(this.cinema_to_add);
    this.add_cinema = false;
    this.cinema_to_add = new Cinema(0,"", "");
  }

  onSubmitEdit() {
    for (let cinema of this.cinema_list) {
      if (cinema.id === this.cinema_to_edit.id) {
        cinema = this.cinema_to_edit;
      }
    }
    this.edit_cinema = false;
  }

  show_add_cinema() {
    this.add_cinema = true;
  }

  show_edit_cinema(id) {
    console.log("edit:", id);
    this.edit_cinema = true;
    for (let cinema of this.cinema_list) {
      if (cinema.id === id) {
        this.cinema_to_edit = cinema;
        break;
      }
    }
  }

  delete_cinema(id) {
    console.log("delete", id);
    for (let i = 0; i < this.cinema_list.length; i++) {
      if (this.cinema_list[i].id == id) {
        console.log(this.cinema_list[i]);
        this.cinema_list.splice(i, 1);
        break;
      }
    }
  }

}
