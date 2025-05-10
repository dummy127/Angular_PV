import { Component } from '@angular/core';
import { UsersService } from '../data/users.service';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css'
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
