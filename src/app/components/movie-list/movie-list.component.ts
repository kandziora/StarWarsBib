import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService:MovieService) {

  }

  next: string;
  previous: string;
  movieList: Array<Movie>;

 ngOnInit() { 
   this.fetchMovieList();
 }

 fetchMovieList(url?: string) { 
   this.movieService.getMovies(url).subscribe(response => { 
     console.log(response);
     this.next = response.next;
     this.previous  = response.previous;
     this.movieList  =  response.results;
   });
 }
}
  