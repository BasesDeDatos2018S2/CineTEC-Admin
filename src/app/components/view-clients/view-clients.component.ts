import { Component, OnInit } from '@angular/core';
import { Clients } from '../../classes/clients';
import { ClientsService } from '../../services/clients.service';

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
    constructor(private clientsService: ClientsService) {
      this.add_client = false;
      this.edit_client = false;

      this.client_to_add = new Clients(0,"","", "", "","","",[]);
      this.client_to_edit = new Clients(0,"", "", "", "","","",[]);

      this.header_list = ["Cedula", "Nombre", "Primer Apellido", "Segundo Apellido","Teléfono","Correo", "",""];

      // this.client_list.push(new Clients(0,"609630745", "Pedro", 'Miranda', 'Picado',"87365433","nano@gmail.com",[]));
      // this.client_list.push(new Clients(1,"609630745", "Pedro", 'Miranda', 'Picado',"87365433","nano@gmail.com",[]));


      this.updateClientList();
      console.log(this.client_list);
    }

    ngOnInit() {
    }

    onSubmitAdd() {

      this.clientsService.createClient(this.client_to_add).subscribe(
          data => {
              console.log("POST Request is successful ", data);
              this.updateClientList();
          },
          error => {
              console.log("Error", error);
          }
      );
      this.add_client = false;

    }

    onSubmitEdit() {
    this.clientsService.updateClient(this.client_to_edit).subscribe(
          data => {
              console.log("PUT Request is successful ", data);
              this.updateClientList();
          },
          error => {
              console.log("Error", error);
          }
      );
    this.edit_client = false;

  }

    show_add_client() {
      this.add_client = true;
    }

    show_edit_client(identification) {
    console.log("edit:", identification);
    this.edit_client = true;
    for (let client of this.client_list) {
      if (client.identification === identification) {
        this.client_to_edit = Object.assign({}, client);
        break;
      }
    }
  }

    delete_client(identification) {
    console.log("delete", identification);
    this.clientsService.deleteClient(identification).subscribe(
          data => {
              console.log("DELETE Request is successful ", data);
              this.updateClientList();
          },
          error => {
              console.log("Error", error);
          }
      );

  }

  updateClientList(){
    console.log("updateClientList");
    this.clientsService.getClients().subscribe(data => {
      console.log("data:", data);
      this.client_list = data;
    });
  }


  //onSubmitAdd() {
  //   this.client_to_add.id = this.client_list.length;
  //   this.client_list.push(this.client_to_add);
  //   this.add_client = false;
  //   this.client_to_add = new Client(0,"", "",[]);
  // }
  //
  // onSubmitEdit() {
  //   for (let client of this.client_list) {
  //     if (client.id === this.client_to_edit.id) {
  //       cinema = this.client_to_edit;
  //     }
  //   }
  //   this.edit_client = false;
  // }
  //
  // show_add_client() {
  //   this.add_client = true;
  // }
  //
  // show_edit_client(id) {
  //   console.log("edit:", id);
  //   this.edit_client = true;
  //   for (let client of this.client_list) {
  //     if (client.id === id) {
  //       this.client_to_edit = client;
  //       break;
  //     }
  //   }
  // }
  //
  // delete_client(id) {
  //   console.log("delete", id);
  //   for (let i = 0; i < this.client_list.length; i++) {
  //     if (this.client_list[i].id == id) {
  //       console.log(this.client_list[i]);
  //       this.client_list.splice(i, 1);
  //       break;
  //     }
  //   }
  // }
  }
