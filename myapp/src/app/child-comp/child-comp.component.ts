import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent {

  @Input() data = ""


 constructor()
 {
console.log("Child component from constructor",this.data)

 }
 ngOnInit()
 {
  console.log("Child component from ngOnInit",this.data)

 }

 ngOnChanges(change_now:SimpleChanges)
 {

  console.log("child compoment ngOnChanges invoked",change_now["data"]["previousValue"])

 }

ngDoCheck()
{
  console.log("child component ngDocheck")
}

ngOnDestroy()
{

  console.log("child component is destroyed")

}

}
