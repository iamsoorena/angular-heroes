import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero-detail/hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  ngOnInit(): void {
    this.loadHeroes();
  }

  private loadHeroes() {
    this.heroService.getHeroes().then(result => this.heroes = result.slice(1, 5))
  }

  constructor(private heroService: HeroService) {
  }
}
