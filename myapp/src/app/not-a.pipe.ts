import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notA'
})
export class NotAPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}



