import { Component, OnInit } from '@angular/core';
// import { Room } from '../../classes/room';
import { Screening } from '../../classes/screening';
// import { Movie } from '../../classes/movie';
import { ScreeningsService } from '../../services/screening.service';

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
  constructor(private screeningsService: ScreeningsService) {
    this.add_screening = false;
    this.screening_to_add = new Screening(0,"","",0,[],0,0);
    this.header_list = ["ID Sala","Id Película","Horario","Precio","",""];

    // this.screening_list.push(new Screening(0,"17:30","24/08/2018",3000,[],3,4));
    // this.screening_list.push(new Screening(1,"17:30","24/08/2018",3000,[],1,2));
    this.updateScreeningList();
    console.log(this.screening_list);
  }

  ngOnInit() {

    this.screeningsService.createScreening(this.screening_to_add).subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.updateScreeningList();
        },
        error => {
            console.log("Error", error);
        }
    );
    this.add_screening = false;

  }

  onSubmitEdit() {
  this.screeningsService.updateScreening(this.screening_to_edit).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
            this.updateScreeningList();
        },
        error => {
            console.log("Error", error);
        }
    );
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
      this.screening_to_edit = Object.assign({}, screening);
      break;
    }
  }
}

  delete_screening(id) {
  console.log("delete", id);
  this.screeningsService.deleteScreening(id).subscribe(
        data => {
            console.log("DELETE Request is successful ", data);
            this.updateScreeningList();
        },
        error => {
            console.log("Error", error);
        }
    );

}

updateScreeningList(){
  console.log("updateClientList");
  this.screeningsService.getScreenings().subscribe(data => {
    console.log("data:", data);
    this.screening_list = data;
  });
}


  // onSubmitAdd() {
  //   this.screening_to_add.id = this.screening_list.length;
  //   this.screening_list.push(this.screening_to_add);
  //   this.add_screening = false;
  //   this.screening_to_add = new Screening(0,"","",0,[],0,0);
  // }
  //
  // onSubmitEdit() {
  //   for (let screening of this.screening_list) {
  //     if (screening.id === this.screening_to_edit.id) {
  //       screening = this.screening_to_edit;
  //     }
  //   }
  //   this.edit_screening = false;
  // }
  //
  // show_add_screening() {
  //   this.add_screening = true;
  // }
  //
  // show_edit_screening(id) {
  //   console.log("edit:", id);
  //   this.edit_screening = true;
  //   for (let screening of this.screening_list) {
  //     if (screening.id === id) {
  //       this.screening_to_edit = screening;
  //       break;
  //     }
  //   }
  // }
  //
  // delete_screening(id) {
  //   console.log("delete", id);
  //   for (let i = 0; i < this.screening_list.length; i++) {
  //     if (this.screening_list[i].id == id) {
  //       console.log(this.screening_list[i]);
  //       this.screening_list.splice(i, 1);
  //       break;
  //     }
  //   }
  // }

}
