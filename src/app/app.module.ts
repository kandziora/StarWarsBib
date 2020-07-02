import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetComponent } from './components/planet/planet.component';
import { CharacterService } from './services/character.service';
import { StarwarsCardComponent } from './components/starwars-card/starwars-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterComponent,
    StarwarsComponent,
    MovieListComponent,
    MovieComponent,
    PlanetListComponent,
    PlanetComponent,
    StarwarsCardComponent,
    AddCharacterComponent,
    AddMovieComponent,
    AddPlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCharacterComponent,
    AddMovieComponent,
    AddPlanetComponent
  ]

  
})
export class AppModule { }
