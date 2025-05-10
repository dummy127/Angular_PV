import { Component } from '@angular/core';
import { ApiService } from '../data/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-handle',
  imports: [CommonModule],//commonmodule to import all things at once like ngif, ngfor, ngswitch escetra
  templateUrl: './api-handle.component.html',
  styleUrl: './api-handle.component.css'
})
export class ApiHandleComponent {

  constructor(private apiService:ApiService)

  {

  }

  post = undefined

  
ngOnInit(){

  this.post = this.apiService.getPost()
  console.log(this.post)
  
}


}


