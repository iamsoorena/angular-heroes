import {Injectable} from "@angular/core";
import {Hero} from "./hero-detail/hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(number: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === number))
  }
}
