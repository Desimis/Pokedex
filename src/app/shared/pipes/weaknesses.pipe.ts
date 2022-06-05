import { Pipe, PipeTransform } from '@angular/core';
import { GetPokemonByNameResponse } from 'src/app/models/get-pokemon-by-name.interface';
import { getWeaknesses } from '../helpers/getWeaknesses';

@Pipe({
  name: 'weaknesses'
})
export class WeaknessesPipe implements PipeTransform {

  transform(value: GetPokemonByNameResponse): string[] {
    const abilities = value.abilities.map((x) => x.ability.name);
    const types = value.types.map((x) => x.type.name);
    return getWeaknesses(types, abilities);
  }

}
