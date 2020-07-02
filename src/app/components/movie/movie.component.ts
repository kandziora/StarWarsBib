import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;

  constructor(private movieService:MovieService, router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    this.movieService.getMovie(id).subscribe(response => { 

      this.movie  =  response;
    });
  }

}
