import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../data/users.service';

@Component({
  selector: 'app-a',
  imports: [FormsModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class CompAComponent {
  enteredData:string="";
  constructor(private userService:UsersService)
  {
     
  }

  onBtnClick()
  {
    this.userService.emitData(this.enteredData);
  }
}
