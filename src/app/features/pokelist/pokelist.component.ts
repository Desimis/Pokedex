
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { GetPokemonListResponse } from 'src/app/models/get-pokemon-list.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { GenericDetail } from 'src/app/shared/interfaces/generic-detail.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {
  pokemon: GetPokemonListResponse = { count: 0, next: '', previous: '', results: []};
  results: GenericDetail[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList(`${environment.pokeApiUrl}pokemon?limit=25&offset=0`);
  }

  getPokemonList(url: string) {
    this.pokemonService.getPokemonList(url).subscribe((data) => {
      this.pokemon = data;
      this.results = [...this.results, ...data.results];
    });
  }

  getSprite(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos === max )   {
      this.getPokemonList(this.pokemon.next);
    }
  }
}
