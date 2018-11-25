import { Component, OnInit } from '@angular/core';
import { Clients } from '../../classes/clients';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {

    add_client: boolean;
    edit_client: boolean;

    client_list: Clients[] = [];

    client_to_add: Clients;
    client_to_edit: Clients;
    header_list: string[] = [];
    constructor() {
      this.add_client = false;
      this.edit_client = false;

      this.client_to_add = new Clients(0,"","", "", "","","",[]);
      this.client_to_edit = new Clients(0,"", "", "", "","","",[]);

      this.header_list = ["Cedula", "Nombre", "Primer Apellido", "Segundo Apellido","Teléfono","Correo", "",""];

      this.client_list.push(new Clients(0,"609630745", "Pedro", 'Miranda', 'Picado',"87365433","nano@gmail.com",[]));
      this.client_list.push(new Clients(1,"609630745", "Pedro", 'Miranda', 'Picado',"87365433","nano@gmail.com",[]));

      console.log(this.client_list);
    }

    ngOnInit() {
    }

    onSubmitAdd() {
      this.client_to_add.id = this.client_list.length;
      this.client_list.push(this.client_to_add);
      this.add_client = false;
      this.client_to_add = new Clients(0,"","", "", "","","",[]);
    }

    onSubmitEdit() {
      for (let client of this.client_list) {
        if (client.id === this.client_to_edit.id) {
          client = this.client_to_edit;
        }
      }
      this.edit_client = false;
    }

    show_add_client() {
      this.add_client = true;
    }

    show_edit_client(id) {
      console.log("edit:", id);
      this.edit_client = true;
      for (let client of this.client_list) {
        if (client.id === id) {
          this.client_to_edit = client;
          break;
        }
      }
    }

    delete_client(id) {
      console.log("delete", id);
      for (let i = 0; i < this.client_list.length; i++) {
        if (this.client_list[i].id == id) {
          console.log(this.client_list[i]);
          this.client_list.splice(i, 1);
          break;
        }
      }
    }

  }
