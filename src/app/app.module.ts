import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { ViewClientsComponent } from './components/view-clients/view-clients.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewCinemasComponent } from './components/view-cinemas/view-cinemas.component';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { ViewMoviesComponent } from './components/view-movies/view-movies.component';
import { ViewSreeningComponent } from './components/view-sreening/view-sreening.component';
import { ViewProtagonistsComponent } from './components/view-protagonists/view-protagonists.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';


import { ClientsService } from './services/clients.service';
import { CinemasService } from './services/cinemas.service';


const routes: Route[] =[
  {path: '', component: ViewCinemasComponent},
  {path: 'viewclients', component: ViewClientsComponent},
  {path: 'viewrooms', component: ViewRoomsComponent},
  {path: 'viewmovies', component: ViewMoviesComponent},
  {path: 'viewsreening', component: ViewSreeningComponent},
  {path: 'viewprotagonists', component: ViewProtagonistsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewClientsComponent,
    NavBarComponent,
    ViewCinemasComponent,
    ViewRoomsComponent,
    ViewMoviesComponent,
    ViewSreeningComponent,
    ViewProtagonistsComponent,
    Navbar2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClientsService,
    CinemasService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
