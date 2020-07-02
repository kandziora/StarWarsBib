import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsCardComponent } from './starwars-card.component';

describe('StarwarsCardComponent', () => {
  let component: StarwarsCardComponent;
  let fixture: ComponentFixture<StarwarsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
