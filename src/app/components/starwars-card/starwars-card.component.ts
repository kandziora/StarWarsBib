import { Component, OnInit, Input } from '@angular/core';
import { GetIdService } from '../../services/get-id.service'

@Component({
  selector: 'app-starwars-card',
  templateUrl: './starwars-card.component.html',
  styleUrls: ['./starwars-card.component.css']
})
export class StarwarsCardComponent implements OnInit {

  id: string;
  @Input('title') title: string;
  @Input('url') url: string;
  @Input('line1') line1: string;
  @Input('line2') line2: string;
  @Input('line3') line3: string;
  @Input('path') path: string;

  constructor(private getidService:GetIdService) { }

  ngOnInit(): void {
    this.id = this.getidService.getId(this.url); 
  }

}
