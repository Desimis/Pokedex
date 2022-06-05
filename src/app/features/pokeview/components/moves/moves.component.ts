import { Component, Input, OnInit } from '@angular/core';
import { GetPokemonByNameResponse } from 'src/app/models/get-pokemon-by-name.interface';

export interface FlatMove {
  level_learned_at: number;
  name: string;
}

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {
  @Input() pokemonDetails?: GetPokemonByNameResponse;
  eggMoves?: FlatMove[] = [];
  machineMoves?: FlatMove[] = [];
  levelUpMoves?: FlatMove[] = [];
  constructor() { }

  ngOnInit(): void {
    if (this.pokemonDetails) {
      this.pokemonDetails?.moves.map((x) => {
        const latestVersion = x.version_group_details.find((y) => y.version_group.name === 'sword-shield');
        if (latestVersion) {
          switch (latestVersion.move_learn_method.name) {
            case 'egg': {
              this.eggMoves?.push({ name: x.move.name, level_learned_at: latestVersion.level_learned_at })
              break;
            }
            case 'machine': {
              this.machineMoves?.push({ name: x.move.name, level_learned_at: latestVersion.level_learned_at })
              break;
            }
            case 'level-up': {
              this.levelUpMoves?.push({ name: x.move.name, level_learned_at: latestVersion.level_learned_at})
              break;
            }
          }
          
        }
      });
      this.eggMoves?.sort((a, b) => {
        return a.level_learned_at - b.level_learned_at;
      });
      this.machineMoves?.sort((a, b) => {
        return a.level_learned_at - b.level_learned_at;
      });
      this.levelUpMoves?.sort((a, b) => {
        return a.level_learned_at - b.level_learned_at;
      });
    }
  }

}
