import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { CharacterService } from '../../services/character.service';
import { MovieService } from '../../services/movie.service';
import { ApiResponseCharacterList } from 'src/app/models/ApiResponse';
//import { SwapiService } from 'ng2-swapi';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {


  constructor(private characterService:CharacterService) {

   }

   next: string;
   previous: string;
   characterList: Array<Character>;

  ngOnInit() { 
    this.fetchCharactersList();
  }

  fetchCharactersList(url?: string) { 
      console.log(url);
    this.characterService.getCharacters(url).subscribe(response => { 
      console.log(response);
      this.next = response.next;
      this.previous  = response.previous;
      this.characterList  =  response.results;
    });
  }
 }
