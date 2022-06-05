import { Pipe, PipeTransform } from '@angular/core';
import { Stat } from 'src/app/models/get-pokemon-by-name.interface';

@Pipe({
  name: 'statTotal'
})
export class StatTotalPipe implements PipeTransform {

  transform(stats: Stat[]): unknown {
    const baseStats = stats.map((x) => x.base_stat);
    return baseStats.reduce((total, amount) => total + amount);
  }

}
