import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString?: any, propName?: any): any {
    if (value.length === 0) {
      return value;
    } else {
      for (const item of value) {
        const resultArray = [];
        if (item[propName] === filterString) {
          resultArray.push(item);
        }
        return resultArray;
      }
    }
  }

}
