import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notA'
})
export class NotAPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value=="")
      return "Text Not Available"
    else
      return value
  }

}



