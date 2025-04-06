import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgFor],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
logged_in:boolean = false;

animals:string[] = ["cat","dog","tiger","lion","python","fox"]

subjects:string[] = ["maths","science","history","geography","IT","hindi"]

students = [

{firstname:"aradhya",lastname:"ambole",marks:98},

{firstname:"nirved",lastname:"chincholker",marks:98}

]
}