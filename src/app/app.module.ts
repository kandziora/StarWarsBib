import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetComponent } from './components/planet/planet.component';
import { CharacterService } from './services/character.service';
import { StarwarsCardComponent } from './components/starwars-card/starwars-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    CharacterListComponent,
    CharacterComponent,
    StarwarsComponent,
    MovieListComponent,
    MovieComponent,
    PlanetListComponent,
    PlanetComponent,
    StarwarsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
