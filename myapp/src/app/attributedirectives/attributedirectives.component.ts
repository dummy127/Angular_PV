import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-attributedirectives',
  imports: [NgClass,NgStyle],
  templateUrl: './attributedirectives.component.html',
  styleUrl: './attributedirectives.component.css'
})
export class AttributedirectivesComponent {

  darktheme:boolean = true;

  isHighlighted:boolean = true;
  // classes:any = {
  //   bg:"bg-warning",
  //   tc:"text-dangr",
  //   m:"m-2"
  // }

  toogle(){

    this.darktheme = !this.darktheme;
  }

  toogle2(){

    this.isHighlighted = !this.isHighlighted;
  }

  boxStyles(){

    return{
      "background-color":this.isHighlighted?"orange":"gray",
      "color":"red",
      "font-size":"40px"
    
    }
  }
}
