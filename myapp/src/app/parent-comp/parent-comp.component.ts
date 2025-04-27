import { Component } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent-comp',
  imports: [ChildCompComponent,NgIf],
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent {
datafromparent:string = ""
count = 0
  changeData(change_data:string)
  {
 
   this.datafromparent = change_data
   
  }

increase_count()

{
  this.count++
}

}
