import { Pipe, PipeTransform } from '@angular/core';
import { GenericDetail } from '../interfaces/generic-detail.interface';

@Pipe({
  name: 'eggGroup'
})
export class EggGroupPipe implements PipeTransform {

  transform(value?: GenericDetail[]): string {
    let concatenatedString = '';
    if (!value) {
      return concatenatedString;
    }
    value.forEach((x, i) => {
      concatenatedString+= x.name + (i !== (value.length - 1) ? ' and ' : '')
    });
    return concatenatedString;
  }

}
