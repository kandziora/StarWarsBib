import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponsePlanetList } from '../models/ApiResponse';
import { Observable } from 'rxjs';
import { Planet } from '../models/Planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  rootPlanetUrl:string = 'https://swapi.dev/api/planets/';

  constructor(private http:HttpClient) { }

  getPlanets(url:string = this.rootPlanetUrl):Observable<ApiResponsePlanetList> {
    return  this.http.get<ApiResponsePlanetList>(url);
  }
  getPlanet(id:string):Observable<Planet> {
    return this.http.get<Planet>(this.rootPlanetUrl + id);
  }  
}
