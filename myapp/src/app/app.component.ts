import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutComponent,AddressComponent,ProductComponent],//imports for routing purpose
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = 'Aradhya';
  lastname:string = "ambole";
  pincode:number = 400025;
  
}
