import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseCharacterList } from '../models/ApiResponse';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  rootCharactersUrl:string = 'https://swapi.dev/api/people/';
  constructor(private http:HttpClient) { }

  getCharacters(url:string = this.rootCharactersUrl):Observable<ApiResponseCharacterList> {
      return  this.http.get<ApiResponseCharacterList>(url);
  }
  getCharacter(id:string):Observable<Character> {
    return this.http.get<Character>(this.rootCharactersUrl + id);
  } 
}
