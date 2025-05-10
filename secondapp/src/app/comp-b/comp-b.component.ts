import { Component } from '@angular/core';
import { UsersService } from '../data/users.service';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class CompBComponent {
  receivedData:string="XYZ";
  constructor(private userService:UsersService)
  {

  }
  ngOnInit()
  {
        this.userService.eventEmitter.subscribe((value)=>{
          this.receivedData=value;
        })
  }
}
