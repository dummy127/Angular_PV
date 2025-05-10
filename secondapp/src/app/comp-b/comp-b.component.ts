import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css'
})
export class CompBComponent {

  receivedData:string = ""
  //constructor(private dataservice:DataService)
  // {

  // }
  // ngOnInit()
  // {
  //   this.dataService.eventEmitter.subscribe((value)=>{
  //     this.receivedData = value

  //   })
  // }
}
