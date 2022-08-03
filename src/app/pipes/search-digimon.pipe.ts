import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDigimon',
})
export class SearchDigimonPipe implements PipeTransform {
  transform(value: any, searchedName: String, digimonName: string): any {
    if (value.lenth == 0) {
      return value;
    }
    //declaramos el array de resultados
    const resultArray = [];
    //recorremos los digimon (value)
    for (const item of value) {
      if (item[digimonName] === searchedName) {
        //si el nombre buscado (searchedName) coincide con el nombre actual de item
        resultArray.push(item);
      }
      return resultArray;
    }
  }
}
