import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetEvolutionChainResponse } from '../models/get-evolution-chain.interface';
import { GetPokemonByNameResponse } from '../models/get-pokemon-by-name.interface';
import { GetPokemonListResponse } from '../models/get-pokemon-list.interface';
import { GetPokemonSpeciesResponse } from '../models/get-species.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonSearchText: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<string> {
    return new Observable(f => {this.pokemonSearchText.subscribe(f);});
  } 

  setPokemon(name: string) {
    this.pokemonSearchText.next(name);
  }

  getPokemonByName(name: string): Observable<GetPokemonByNameResponse> {
    return this.http.get<GetPokemonByNameResponse>(`${environment.pokeApiUrl}pokemon/${name.toLowerCase()}`);
  }

  getPokemonList(url: string): Observable<GetPokemonListResponse> {
    return this.http.get<GetPokemonListResponse>(url)
  }

  getPokemonSpecies(url: string): Observable<GetPokemonSpeciesResponse> {
    return this.http.get<GetPokemonSpeciesResponse>(url)
  }

  getEvolutionChain(url: string): Observable<GetEvolutionChainResponse> {
    return this.http.get<GetEvolutionChainResponse>(url)
  }

  getMove(url: string): Observable<any> {
    return this.http.get<any>(url)
  }
}
