import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/Planet';
import { PlanetService } from '../../services/planet.service';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddPlanetComponent } from '../add-planet/add-planet.component';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor(private planetService:PlanetService, public dialog: MatDialog) {
  }

  next: string;
  previous: string;
  planetList: Array<Planet>;

  ngOnInit() { 
    this.fetchPlanetList();
  }

  fetchPlanetList(url?: string) { 
    this.planetService.getPlanets(url).subscribe(response => { 
      this.next = response.next;
      this.previous  = response.previous;
      this.planetList  =  response.results;
    });
  }
 
  openAddPlanet() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(AddPlanetComponent, dialogConfig);
  }
}
