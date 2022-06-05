import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEvolutionChainResponse } from 'src/app/models/get-evolution-chain.interface';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.scss']
})
export class EvolutionsComponent implements OnInit {
  @Input() evolutions?: GetEvolutionChainResponse;
  evolutionMap: Map<number, string> = new Map();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.evolutions) {
      this.evolutionMap.set(this.getPokemonId(this.evolutions.chain.species.url), this.evolutions.chain.species.name);
      this.evolutions?.chain.evolves_to.forEach((x) => {
        this.evolutionMap.set(this.getPokemonId(x.species.url), x.species.name);
        x.evolves_to.forEach((y) => {
          this.evolutionMap.set(this.getPokemonId(y.species.url), y.species.name);
        });
      });
    }
  }

  getPokemonId(url: string): number {
    let removedLastSlash = url.substring(0, url.lastIndexOf('/'));
    return Number(removedLastSlash.substring(removedLastSlash.lastIndexOf('/') + 1));
  }

  getSprite(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  goToPokemon(name: string): void {
    this.router.navigate([`pokemon/${name}`]);
  }

}
