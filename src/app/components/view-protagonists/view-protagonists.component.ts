import { Component, OnInit } from '@angular/core';
import { Protagonists } from '../../classes/protagonists';

@Component({
  selector: 'app-view-protagonists',
  templateUrl: './view-protagonists.component.html',
  styleUrls: ['./view-protagonists.component.css']
})
export class ViewProtagonistsComponent implements OnInit {
  add_protagonists: boolean;
  edit_protagonists: boolean;

  protagonists_list: Protagonists[] = [];

  protagonists_to_add: Protagonists;
  protagonists_to_edit: Protagonists;
  header_list: string[] = [];

  constructor() {
    this.add_protagonists = false;
    this.edit_protagonists = false;

    this.protagonists_to_add = new Protagonists(0,"","");
    this.protagonists_to_edit = new Protagonists(1,"","");

    this.header_list = [ "Nombre","Apellido","",""];

    this.protagonists_list.push(new Protagonists(1, "Mario", "Cimarro"));
    this.protagonists_list.push(new Protagonists(2, "Ximena", "Duque"));
// this.protagonists_list.push(new Protagonists(3, "Mariluz Bermúdez"));

    console.log(this.protagonists_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.protagonists_to_add.id = this.protagonists_list.length;
    this.protagonists_list.push(this.protagonists_to_add);
    this.add_protagonists = false;
    this.protagonists_to_add = new Protagonists(0,"","");
  }

  onSubmitEdit() {
    for (let protagonists of this.protagonists_list) {
      if (protagonists.id === this.protagonists_to_edit.id) {
        protagonists = this.protagonists_to_edit;
      }
    }
    this.edit_protagonists = false;
  }

  show_add_protagonists() {
    this.add_protagonists = true;
  }

  show_edit_protagonists(id) {
    console.log("edit:", id);
    this.edit_protagonists = true;
    for (let protagonists of this.protagonists_list) {
      if (protagonists.id === id) {
        this.protagonists_to_edit = protagonists;
        break;
      }
    }
  }

  delete_protagonists(id) {
    console.log("delete", id);
    for (let i = 0; i < this.protagonists_list.length; i++) {
      if (this.protagonists_list[i].id == id) {
        console.log(this.protagonists_list[i]);
        this.protagonists_list.splice(i, 1);
        break;
      }
    }
  }

  }
