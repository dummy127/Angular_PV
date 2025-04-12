import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-swiexe',
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './swiexe.component.html',
  styleUrl: './swiexe.component.css'
})
export class SwiexeComponent {

  requestStatus:string = "approved"

  change_status(newstat:string){

    this.requestStatus = newstat

  }



  prolang:string = "python"

  change_prolang(newlang:string){

    this.prolang = newlang

  }
}








