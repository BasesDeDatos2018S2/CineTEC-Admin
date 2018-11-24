import { Component, OnInit } from '@angular/core';
// import { Room } from '../../classes/room';
import { Screening } from '../../classes/screening';
// import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-view-sreening',
  templateUrl: './view-sreening.component.html',
  styleUrls: ['./view-sreening.component.css']
})
export class ViewSreeningComponent implements OnInit {
  edit_screening: boolean;
  screening_to_edit: Screening;
  add_screening: boolean;
  screening_list: Screening[] = [];
  screening_to_add: Screening;
  header_list: string[] = [];
  constructor() {
    this.add_screening = false;
    this.screening_to_add = new Screening(0,"","","","",0);
    this.header_list = [ "Cine","Sala","Película","Horario","Precio","",""];
    this.screening_list.push(new Screening(1,"Animales Fantásticos","Cinépolis","1-B","17:30",3000));
    this.screening_list.push(new Screening(2,"Venom","NovaCinemas","1-C","18:30",3500));
    console.log(this.screening_list);
  }

  ngOnInit() {
  }
  onSubmitAdd() {
    this.screening_to_add.id = this.screening_list.length;
    this.screening_list.push(this.screening_to_add);
    this.add_screening = false;
    this.screening_to_add = new Screening(0,"","","","",0);
  }

  onSubmitEdit() {
    for (let screening of this.screening_list) {
      if (screening.id === this.screening_to_edit.id) {
        screening = this.screening_to_edit;
      }
    }
    this.edit_screening = false;
  }

  show_add_screening() {
    this.add_screening = true;
  }

  show_edit_screening(id) {
    console.log("edit:", id);
    this.edit_screening = true;
    for (let screening of this.screening_list) {
      if (screening.id === id) {
        this.screening_to_edit = screening;
        break;
      }
    }
  }

  delete_screening(id) {
    console.log("delete", id);
    for (let i = 0; i < this.screening_list.length; i++) {
      if (this.screening_list[i].id == id) {
        console.log(this.screening_list[i]);
        this.screening_list.splice(i, 1);
        break;
      }
    }
  }

}
