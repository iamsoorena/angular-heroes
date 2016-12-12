import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero-detail/hero";
import {HeroService} from "./hero.service";

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
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  private getHeroes(): void {
    this.heroService.getHeroes().then(heroe_list => this.heroes = heroe_list)
  }
}


