import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { CharacterService } from 'src/app/services/character.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/models/Planet';
import { Movie } from 'src/app/models/Movie';
import { GetIdService } from 'src/app/services/get-id.service';
import { PlanetService } from 'src/app/services/planet.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  character: Character;
  planet: Planet;
  movie: Movie;
  id_films = [];
  movie_title = [];
  planetId: string;
  planetName: string;

  constructor(
    private characterService:CharacterService, 
    router: Router, 
    private route: ActivatedRoute,
    private getidService:GetIdService, 
    private planetService: PlanetService,
    private movieService: MovieService
    ) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    this.characterService.getCharacter(id).subscribe(response => { 

    this.character  =  response;

    this.planetId = this.getidService.getId(this.character.homeworld); 

    // For getting the ID and name of the Homeplanet
    this.planetService.getPlanet(this.planetId).subscribe(response => { 
      this.planet = response;
      this.planetName = this.planet.name;
    });


    // For getting the ID and name of the films to link them
    for ( let entry of this.character.films) {
      let filmId = this.getidService.getId(entry);
      this.id_films.push(filmId);
      this.movieService.getMovie(filmId).subscribe(response => { 
        this.movie  =  response;
        this.movie_title.push(this.movie.title);
      });
    }

    });
  }

}
