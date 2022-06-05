import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEvolutionChainResponse } from 'src/app/models/get-evolution-chain.interface';
import { Ability, GetPokemonByNameResponse } from 'src/app/models/get-pokemon-by-name.interface';
import { GetPokemonSpeciesResponse } from 'src/app/models/get-species.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokeview',
  templateUrl: './pokeview.component.html',
  styleUrls: ['./pokeview.component.scss']
})
export class PokeviewComponent implements OnInit {
  pokemonDetails?: GetPokemonByNameResponse;
  species?: GetPokemonSpeciesResponse;
  evolutionChain?: GetEvolutionChainResponse;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.species = undefined;
      this.evolutionChain = undefined;
      this.pokemonDetails = undefined;
      this.getPokemon(data['id']);
    });
    
  }

  getPokemon(name: string): void {
    this.pokemonService.getPokemonByName(name).subscribe((data) => {
      this.pokemonDetails = data;
      this.getPokemonSpecies(data.species.url);
    });
  }

  getPokemonSpecies(url: string): void {
    this.pokemonService.getPokemonSpecies(url).subscribe((data) => {
      this.species = {...data};
      this.getEvolutionChain(data.evolution_chain.url);
    });
  }

  getEvolutionChain(url: string): void {
    this.pokemonService.getEvolutionChain(url).subscribe((data) => {
      this.evolutionChain = {...data};
    });
  }

  navigateToAbility(abilityItem: Ability): void {
    this.router.navigate([`ability/${abilityItem.ability.name}`]);
  }

}
