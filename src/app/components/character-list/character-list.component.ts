import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characterList : any;

  constructor(private characterService:CharacterService) {

   }

  ngOnInit() {
    this.characterService.getCharacters().subscribe(characterList => {
      this.characterList = characterList;
      console.log(this.characterList);
    });
  }

}
