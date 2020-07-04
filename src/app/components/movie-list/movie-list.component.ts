import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddMovieComponent } from '../add-movie/add-movie.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService:MovieService, public dialog: MatDialog) {

  }

  next: string;
  previous: string;
  movieList: Array<Movie>;

 ngOnInit() { 
   this.fetchMovieList();
 }

 fetchMovieList(url?: string) { 
   this.movieService.getMovies(url).subscribe(response => { 
     this.next = response.next;
     this.previous  = response.previous;
     this.movieList  =  response.results;
   });
 }

 openAddMovie() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  this.dialog.open(AddMovieComponent, dialogConfig);
}
}
  