import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {


  students_info = [

    {firstname:"Rugved ",lastname:"Chavan",marks:85},
    
    {firstname:"Pranay",lastname:"Borker",marks:98}
    
    ]


  constructor() { }
}
