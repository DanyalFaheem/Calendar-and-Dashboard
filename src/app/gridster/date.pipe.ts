import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class DatePipe implements PipeTransform {

  transform(input: any, type: string): any {
    if (type == 'date') {
      input = new Date(input);
      return input;
    }
    else if (type == 'currency') {
      input = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input);
      return input;
    }
    else {
      return input;
    }
  }
}
