import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { PersonsComponent } from './component/persons/persons.component';
import { FdsaComponent } from './component/fdsa/fdsa.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    PersonsComponent,
    FdsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
