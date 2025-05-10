import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-comp-a',
  imports: [FormsModule],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent {

  enteredData:string = ""

  // constructor (private dataService:DataService)
  // {

  // }

  onBtnClick()
  {
    //this.dataService.emitData(this.enteredData)
  }
}
