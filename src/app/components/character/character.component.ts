import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { CharacterService } from 'src/app/services/character.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  character: Character;

  constructor(private characterService:CharacterService, router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    this.characterService.getCharacter(id).subscribe(response => { 

      this.character  =  response;
    });
  }

}
