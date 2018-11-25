import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewClientsComponent } from './components/view-clients/view-clients.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewCinemasComponent } from './components/view-cinemas/view-cinemas.component';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { ViewMoviesComponent } from './components/view-movies/view-movies.component';
import { ViewSreeningComponent } from './components/view-sreening/view-sreening.component';
import { ViewProtagonistsComponent } from './components/view-protagonists/view-protagonists.component';


const routes: Route[] =[
  {path: '', component: ViewCinemasComponent},
  // {path: 'components/view-cinemas', component: ViewCinemasComponent},
  {path: 'view-rooms', component: ViewRoomsComponent},
  {path: 'view-movies', component: ViewMoviesComponent},
  {path: 'view-sreening', component: ViewSreeningComponent},
  {path: 'view-protagonists', component: ViewProtagonistsComponent}
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
    ViewProtagonistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
