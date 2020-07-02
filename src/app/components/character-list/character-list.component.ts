import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { CharacterService } from '../../services/character.service';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddCharacterComponent } from '../add-character/add-character.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor(private characterService:CharacterService, private dialog: MatDialog) {

   }

   next: string;
   previous: string;
   characterList: Array<Character>;

  ngOnInit() { 
    this.fetchCharactersList();
  }

  fetchCharactersList(url?: string) { 
    this.characterService.getCharacters(url).subscribe(response => { 
      this.next = response.next;
      this.previous  = response.previous;
      this.characterList  =  response.results;
    });
  }

  openAddCharacter() {
    const dialogConfig = new MatDialogConfig();



    this.dialog.open(AddCharacterComponent, dialogConfig);}
 }
