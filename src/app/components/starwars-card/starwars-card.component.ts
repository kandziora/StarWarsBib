import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    
    
    this.id = this.url.split("/").slice(-2)[0];
    console.log(this.url.split("/"));    
    console.log(this.id);
  }

}
