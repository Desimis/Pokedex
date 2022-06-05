import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonId',
  pure: true
})
export class PokemonIdPipe implements PipeTransform {

  transform(value: number): string {
    const id = value.toString().padStart(3, "0");
    return id;
  }

}
