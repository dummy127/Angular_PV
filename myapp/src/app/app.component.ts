import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AdditionComponent } from './addition/addition.component';
import { PipeComponent } from './pipe/pipe.component';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [DirectivesComponent,RouterOutlet,PipeComponent,AboutComponent,AddressComponent,AdditionComponent,ProductComponent,CategoryComponent,DataBindingComponent],//imports for routing purpose
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = 'Aradhya';
  lastname:string = "ambole";
  pincode:number = 400025;
  
}
