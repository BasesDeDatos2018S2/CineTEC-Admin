import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewClientsComponent } from './components/view-clients/view-clients.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewCinemasComponent } from './components/view-cinemas/view-cinemas.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewClientsComponent,
    NavBarComponent,
    ViewCinemasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
