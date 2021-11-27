import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list'
})

export class ListPipe implements PipeTransform {

  transform(array: any, args?: any): any {
    args = args.toLowerCase();
    if (args === '' || args == null) {
      return array;
    } else {
      // tslint:disable-next-line:only-arrow-functions
      return array.filter(function(item) {
          return JSON.stringify(item).toLowerCase().includes(args);
      });
    }

  }

}
