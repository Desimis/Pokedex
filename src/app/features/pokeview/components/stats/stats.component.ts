import { Component, Input, OnInit } from '@angular/core';
import { GetPokemonByNameResponse } from 'src/app/models/get-pokemon-by-name.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() pokemonDetails?: GetPokemonByNameResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
