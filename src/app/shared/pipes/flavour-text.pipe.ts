import { Pipe, PipeTransform } from '@angular/core';
import { FlavorText } from 'src/app/models/get-species.interface';

@Pipe({
  name: 'flavourText'
})
export class FlavourTextPipe implements PipeTransform {

  transform(value: FlavorText[]): string | undefined {
    return value.find((x) => x.language.name === 'en' && x.version.name === 'shield')?.flavor_text;
  }

}
