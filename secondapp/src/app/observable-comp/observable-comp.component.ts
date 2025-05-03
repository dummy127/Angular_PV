import { Component } from '@angular/core';
import { Observable, of,from, interval,pipe, take} from 'rxjs';

@Component({
  selector: 'app-observable-comp',
  imports: [],
  templateUrl: './observable-comp.component.html',
  styleUrl: './observable-comp.component.css',
})
export class ObservableCompComponent {
  observable1 = new Observable((aradhya) => {

    setTimeout(()=>{aradhya.next("this is first setTimeout method"),1000})
    setTimeout(()=>{aradhya.next("this is second setTimeout method"),2000})
    setTimeout(()=>{aradhya.next("this is third setTimeout method"),3000})
    setTimeout(()=>{aradhya.complete(),5000})
    // aradhya.next('is this is data == observer1');
    // aradhya.next('is this is data == observer2');
    // aradhya.next('is this is data == observer3');
    // aradhya.next('is this is data == observer4');
    //aradhya.error(new Error ("something went wrong"))
    aradhya.next(787)
    aradhya.next(123)
    aradhya.complete();//after complete you cannot sent any data
  });

  data_get() {
    this.observable1.subscribe({
      next: (mydata) => console.log("Emitted value",mydata),
      error: (myerror) => console.log(myerror.message),//.message to show only message not the whole objects in console
      complete: () => console.log('data fetched successfully'),
    });
  }


  observable2 = of ([564,64,56587,9],777,"aradhya","ambole")

  data_get2(){

    this.observable2.subscribe({

      next:(myvalue)=>console.log("Emitted value",myvalue),
      complete: () => console.log("data Fetched successfully")
    })


    

  }


  data_get3(){

       from ([546,87984,6,97854,688,77]).subscribe({

        next:(myvalue)=>console.log("Emitted value",myvalue),
        complete: () => console.log("data Fetched successfully")
      })

    
  }



  data_get4(){

    interval(1000).pipe(take(45)).subscribe({

      next:(myvalue)=>console.log(myvalue)
    })

  }


}
