import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addition',
  imports: [FormsModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {

  firstnum:number = 0;
  secondnum:number = 0;

  sum(){

    return this.firstnum+this.secondnum;
  }

  
}
