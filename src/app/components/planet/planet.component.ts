import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/models/Planet';
import { PlanetService } from 'src/app/services/planet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetIdService } from 'src/app/services/get-id.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/Movie';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  id_films = [];
  id_characters = [];
  movie_title = [];
  character_name = [];
  planet: Planet;
  filmUrl: string;
  peopleUrl: string
  @Input('url') url: string;
  movie: Movie;
  character: Character;

  constructor(
    private planetService:PlanetService, 
    router: Router, 
    private route: ActivatedRoute, 
    private getidService:GetIdService, 
    private movieService: MovieService,
    private characterService: CharacterService) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.planetService.getPlanet(id).subscribe(response => { 
      this.planet  =  response;

      // For getting the ID and name of the films to link them
      for ( let entry of this.planet.films) {
        let filmId = this.getidService.getId(entry);
        this.id_films.push(filmId);
        this.movieService.getMovie(filmId).subscribe(response => { 
          this.movie  =  response;
          this.movie_title.push(this.movie.title);
        });
      }

      // For getting the ID and name of the characters to link them
      for ( let entry of this.planet.residents) {
        let characterId = this.getidService.getId(entry);
        this.id_characters.push(characterId);
        console.log(this.id_characters);
        this.characterService.getCharacter(characterId).subscribe(response => { 
          this.character  =  response;
          this.character_name.push(this.character.name);
        });
      }
    });
  }

}
