import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { StarwarsComponent } from './components/starwars/starwars.component';


const routes: Routes = [
  {path: 'starwars', component: StarwarsComponent},
  {path: 'character', component: CharacterComponent},
  {path: 'character-list', component: CharacterListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
