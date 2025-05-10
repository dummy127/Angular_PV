import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  // imports :[HttpClientModule]
})
export class ApiService {

  constructor(private httpClient:HttpClient){

      }

getPost():any{

 //let post:any[] = []
 let response = this.httpClient.get("https://jsonplaceholder.typicode.com/posts")

  response.subscribe((value)=> console.log(value))

  //return post

}


}
