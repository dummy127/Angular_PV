import { Component } from '@angular/core';
import { count } from 'console';
import {
  Observable,
  of,
  from,
  interval,
  pipe,
  take,
  map,
  filter,
  merge,
  mergeAll,
  delay,
  switchAll,
  switchMap,
  throwError,
  catchError,
  retry,
  
} from 'rxjs';

@Component({
  selector: 'app-observable-comp',
  imports: [],
  templateUrl: './observable-comp.component.html',
  styleUrl: './observable-comp.component.css',
})
export class ObservableCompComponent {
  observable1 = new Observable((aradhya) => {
    setTimeout(() => {
      aradhya.next('this is first setTimeout method'), 1000;
    });
    setTimeout(() => {
      aradhya.next('this is second setTimeout method'), 2000;
    });
    setTimeout(() => {
      aradhya.next('this is third setTimeout method'), 3000;
    });
    setTimeout(() => {
      aradhya.complete(), 5000;
    });
    // aradhya.next('is this is data == observer1');
    // aradhya.next('is this is data == observer2');
    // aradhya.next('is this is data == observer3');
    // aradhya.next('is this is data == observer4');
    //aradhya.error(new Error ("something went wrong"))
    aradhya.next(787);
    aradhya.next(123);
    aradhya.complete(); //after complete you cannot sent any data
  });

  data_get() {
    this.observable1.subscribe({
      next: (mydata) => console.log('Emitted value', mydata),
      error: (myerror) => console.log(myerror.message), //.message to show only message not the whole objects in console
      complete: () => console.log('data fetched successfully'),
    });
  }

  observable2 = of([564, 64, 56587, 9], 777, 'aradhya', 'ambole');

  data_get2() {
    this.observable2.subscribe({
      next: (myvalue) => console.log('Emitted value', myvalue),
      complete: () => console.log('data Fetched successfully'),
    });
  }

  data_get3() {
    from([546, 87984, 6, 97854, 688, 77]).subscribe({
      next: (myvalue) => console.log('Emitted value', myvalue),
      complete: () => console.log('data Fetched successfully'),
    });
  }

  data_get4() {
    interval(1000)
      .pipe(take(45))
      .subscribe({
        next: (myvalue) => console.log(myvalue),
      });
  }

  data_get5() {
    of(98, 7984, 849, 846, 4, 849, 49)
      .pipe(map((value) => value ** 2))
      .subscribe({
        next: (value) => console.log(value),
      });
  }

  data_get6() {
    of(98, 7984, 849, 846, 41, 849, 49)
      .pipe(filter((value) => value % 2 != 0))
      .subscribe({
        next: (value) => console.log(value),
      });
  }

  data_get7() {
    of(98, 7984, 849, 846, 41, 849, 49)
      .pipe(
        filter((value) => value % 2 != 0),
        map((value) => 'value given by the filter is ' + value)
      )
      .subscribe({ next: (value) => console.log(value) });
  }

  data_get8() {
    merge(
      from('this is obsrvable no.1 using from '),
      of('this is observable no.2 using of')
    ).subscribe({
      next: (value) => console.log(value),
    });
  }

  data_get9() {
    from('ARADHYA_AMBOLE')
      .pipe(
        map((value) => of(value)),
        mergeAll() //to get only values not observables use mapAll instead of map above
      )
      .subscribe({
        next: (value) => console.log(value),
      });
  }

  data_get10() {
    of(489846, 18, 84, 61, 8498, 684, 8)
      .pipe(delay(3000))
      .subscribe({
        next: (value) => console.log(value),
      });
  }

  data_get11() {
    of(554, 4654, 651, 61565, 1651, 6, 6156, 778, '444')
      .pipe(
        switchMap((values) => of(values).pipe(delay(2000)))
        // switchAll()
      )
      .subscribe({
        next: (value) => console.log(value),
      });
  }



  my_interval = interval(1000)
  interval_subscription:any

  data_get12(){
   this.interval_subscription =  this.my_interval.subscribe({
      next:(value)=>console.log(value)
    })
  }

  stop_subscription(){
    this.interval_subscription.unsubscribe()
  }

//copy from github 

  data_get13()
  {
    let count=0;
    of(100,200,300,400,500,600)
    .pipe(
      map(value=>{
        count++;
        if(value==300)
        {
          throw new Error("Something went wrong")
        }

        return value
        
      }),
      retry(4),
      catchError((error)=>{
        console.log(error.message);
        return of("A","B","C")
      })
    ).subscribe({
      next:(value)=>console.log(value)
    })

    console.log("Count:",count)
  }

  

}
