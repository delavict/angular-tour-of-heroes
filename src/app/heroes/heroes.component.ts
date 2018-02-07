import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];// expose the mock heroes  to the class

  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    //simple initialisation
    // constructor shouldn't do anything
   }

  getHeroes(): void {
     this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
   }

  ngOnInit() {
    this.getHeroes();
  }

  /**
   * 
   * @param hero 
   * DEPRECATED
   *
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */

  add(name: String): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
 