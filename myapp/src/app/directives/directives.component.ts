import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgFor],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
  providers:[StudentService]
})
export class DirectivesComponent {

logged_in:boolean = false;
status:boolean = true;

animals:string[] = ["cat","dog","tiger","lion","python","fox"]

subjects:string[] = ["maths","science","history","geography","IT","hindi"]


student_service_object:any = inject(StudentService)
students:any[] = []



constructor() {

  this.students = this.student_service_object.students_info;


}

}