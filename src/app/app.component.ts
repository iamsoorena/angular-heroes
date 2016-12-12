import { Component } from '@angular/core';
import {Hero} from "./hero-detail/hero";

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li 
          *ngFor="let hero of heroes" 
          (click)="onSelect(hero)" 
          [class.selected]="hero === hero"
         >
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <app-hero-detail [hero]="selectedHero"></app-hero-detail>
      

      
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];
