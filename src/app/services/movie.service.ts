import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseMovieList } from '../models/ApiResponse';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    rootMovieUrl:string = 'https://swapi.dev/api/films/';
    constructor(private http:HttpClient) { }
  
    getMovies(url:string = this.rootMovieUrl):Observable<ApiResponseMovieList> {
        return  this.http.get<ApiResponseMovieList>(url);
    } 
    getMovie(id:string):Observable<Movie> {
      return this.http.get<Movie>(this.rootMovieUrl + id);
    } 
  }
