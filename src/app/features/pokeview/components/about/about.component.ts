import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetPokemonByNameResponse } from 'src/app/models/get-pokemon-by-name.interface';
import { GetPokemonSpeciesResponse } from 'src/app/models/get-species.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() pokemonDetails?: GetPokemonByNameResponse;
  @Input() species?: GetPokemonSpeciesResponse;
  @Output() navigateToAbility: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
