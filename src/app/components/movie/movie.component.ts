import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { GetIdService } from 'src/app/services/get-id.service';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/models/Planet';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;
  planet: Planet;
  character: Character;
  id_planets = [];
  id_characters = [];
  planet_name = [];
  character_name = [];

  constructor(
    private movieService:MovieService, 
    router: Router, 
    private route: ActivatedRoute,    
    private getidService:GetIdService, 
    private characterService: CharacterService,
    private planetService: PlanetService
    ) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(response => { 
      this.movie  =  response;

      // For getting the ID and name of the planets to link them
      for ( let entry of this.movie.planets) {
        let planetId = this.getidService.getId(entry);
        this.id_planets.push(planetId);
        this.planetService.getPlanet(planetId).subscribe(response => { 
          this.planet  =  response;
          this.planet_name.push(this.planet.name);
        });
      }

      // For getting the ID and name of the characters to link them
      for ( let entry of this.movie.characters) {
        let characterId = this.getidService.getId(entry);
        this.id_characters.push(characterId);
        this.characterService.getCharacter(characterId).subscribe(response => { 
          this.character  =  response;
          this.character_name.push(this.character.name);
        });
      }
    });
  }

}
