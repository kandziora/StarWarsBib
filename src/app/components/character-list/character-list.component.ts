import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { CharacterService } from '../../services/character.service';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;


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
