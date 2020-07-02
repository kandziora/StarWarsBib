import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { StarwarsComponent } from './components/starwars/starwars.component';


const routes: Routes = [
  {path: 'starwars', component: StarwarsComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'character/:id', component: CharacterComponent},
  {path: 'character-list', component: CharacterListComponent},
  {path: 'planet-list', component: PlanetListComponent},
  {path: 'planet', component: PlanetComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
