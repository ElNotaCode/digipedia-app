import { Pipe, PipeTransform } from '@angular/core';
import { Digimon } from '../models/digimon';

@Pipe({
  name: 'searchDigimon',
})
export class SearchDigimonPipe implements PipeTransform {
  transform(digimonArray: Digimon[], search: string) {
    //miramos si se ha insertado valor
    if (search) {
      return digimonArray.filter((digimon) => {
        return (
          digimon.name.toLowerCase().includes(search.toLowerCase()) ||
          digimon.level.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    return digimonArray;
  }
}
