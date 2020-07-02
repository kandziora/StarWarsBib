import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/Planet';
import { PlanetService } from 'src/app/services/planet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet: Planet;

  constructor(private planetService:PlanetService, router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    this.planetService.getPlanet(id).subscribe(response => { 

      this.planet  =  response;
    });
  }

}
