import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports:[FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstname:string = "Aradhya"
  lastname:string = "Ambole"
  location:string = "Prabhadevi"
  age:number = 21
  mycolor:string = "orange"
  myfont:string = "50px"
  mymargin:string = "10px"


  showAlert(){
    alert("Event-Binding this is alert function")
  }

}











