import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character } from '../models/Character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  charactersUrl:string = 'https://swapi.dev/api/people/';
  constructor(private http:HttpClient) { }




  getCharacters():Observable<Character[]> {
    console.log(this.charactersUrl);
      return this.http.get<Character[]>(this.charactersUrl);
  }
  // makeArray = (object) => {
  //    let objectKeys = Object.keys(object);
  //     let newArray = [];
  //     for (let prop of objectKeys){
  //       newArray.push(objectKeys[prop])
  //     }
  //     return objectKeys;
  // }

}
