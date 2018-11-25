import { Component, OnInit } from '@angular/core';
import { Protagonists } from '../../classes/protagonists';
import { ProtagonistsService } from '../../services/protagonists.service';

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

  constructor(private protagonistsService: ProtagonistsService) {
    this.add_protagonists = false;
    this.edit_protagonists = false;

    this.protagonists_to_add = new Protagonists(0,"","");
    this.protagonists_to_edit = new Protagonists(1,"","");

    this.header_list = [ "Nombre","Apellido","",""];

    // this.protagonists_list.push(new Protagonists(1, "Mario", "Cimarro"));
    // this.protagonists_list.push(new Protagonists(2, "Ximena", "Duque"));
// this.protagonists_list.push(new Protagonists(3, "Mariluz Bermúdez"));

    this.updateProtagonistsList();
    console.log(this.protagonists_list);
  }

  ngOnInit() {
  }


  onSubmitAdd() {

    this.protagonistsService.createProtagonist(this.protagonists_to_add).subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.updateProtagonistsList();
        },
        error => {
            console.log("Error", error);
        }
    );
    this.add_protagonists = false;

  }

  onSubmitEdit() {
  this.protagonistsService.updateProtagonist(this.protagonists_to_edit).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
            this.updateProtagonistsList();
        },
        error => {
            console.log("Error", error);
        }
    );
  this.edit_protagonists = false;

}


  show_edit_protagonists(id) {
  console.log("edit:", id);
  this.edit_protagonists = true;
  for (let protagonists of this.protagonists_list) {
    if (protagonists.id === id) {
      this.protagonists_to_edit = Object.assign({}, protagonists);
      break;
    }
  }
}

  delete_protagonists(id) {
  console.log("delete", id);
  this.protagonistsService.deleteProtagonist(id).subscribe(
        data => {
            console.log("DELETE Request is successful ", data);
            this.updateProtagonistsList();
        },
        error => {
            console.log("Error", error);
        }
    );

}

updateProtagonistsList(){
  console.log("updateClientList");
  this.protagonistsService.getProtagonists().subscribe(data => {
    console.log("data:", data);
    this.protagonists_list = data;
  });
}

  }
