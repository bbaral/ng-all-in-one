import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  pure: false
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > args) {
      return value.substr(0, args) + '...';
    } else {
      return value;
    }
  }

}
