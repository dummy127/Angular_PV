import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-serviceexample',
  imports: [NgFor],
  templateUrl: './serviceexample.component.html',
  styleUrl: './serviceexample.component.css'
})

export class ServiceexampleComponent {

  username:string = ""
  user_array:any[] = []
  constructor(myService:UserService){

    this.username = myService.myName;
    this.user_array = myService.getUsers();

  }
}
