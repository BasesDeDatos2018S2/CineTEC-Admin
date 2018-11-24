import { Component, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent implements OnInit {
  add_movie: boolean;
  edit_movie: boolean;

  movie_list: Movie[] = [];

  movie_to_add: Movie;
  movie_to_edit: Movie;
  header_list: string[] = [];

  constructor() {
    this.add_movie = false;
    this.edit_movie = false;

    this.movie_to_add = new Movie(0,"","", "", "","","","","");
    this.movie_to_edit = new Movie(1,"", "", "", "","","","","");

    this.header_list = ["Nombre Original", "Nombre", "Estado", "Director","Protagonistas","Duración", "Clasificación","Póster","",""];

    this.movie_list.push(new Movie(1,"Fast&Furious", "A Todo Gas", 'Activa', '140 minutos',"Guillermo del Toro", "Vin Diesel, Elsa Pataky","D13","http://static.pelisfox.tv/static/movie/cover/original/d45ff2ee9165a6488c5dffba1292c5cd.jpg"));
    this.movie_list.push(new Movie(2,"Baby", "Niño", 'Inactiva', '120 minutos',"Tarantino", "Vin Diesel, Marlene Favela","D13","https://cd.cinescape.com.pe/cinescape-327x457-189049.jpg"));

    console.log(this.movie_list);
  }

  ngOnInit() {
  }

  onSubmitAdd() {
    this.movie_to_add.id = this.movie_list.length;
    this.movie_list.push(this.movie_to_add);
    this.add_movie = false;
    this.movie_to_add = new Movie(0,"","", "", "","","","","");
  }

  onSubmitEdit() {
    for (let movie of this.movie_list) {
      if (movie.id === this.movie_to_edit.id) {
        movie = this.movie_to_edit;
      }
    }
    this.edit_movie = false;
  }

  show_add_movie() {
    this.add_movie = true;
  }

  show_edit_movie(id) {
    console.log("edit:", id);
    this.edit_movie = true;
    for (let movie of this.movie_list) {
      if (movie.id === id) {
        this.movie_to_edit = movie;
        break;
      }
    }
  }

  delete_movie(id) {
    console.log("delete", id);
    for (let i = 0; i < this.movie_list.length; i++) {
      if (this.movie_list[i].id == id) {
        console.log(this.movie_list[i]);
        this.movie_list.splice(i, 1);
        break;
      }
    }
  }

}
