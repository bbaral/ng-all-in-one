import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, filterString?: any, propName?: any): any {
    const resultArray = [];
    if (value.length === 0 || filterString === '') {
      return value;
    } else {
      for (const item of value) {
        if (item[propName] === filterString) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
  }

}
