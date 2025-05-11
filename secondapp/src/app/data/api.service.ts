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

 let post
 let response = this.httpClient.get("https://jsonplaceholder.typicode.com/posts")

  response.subscribe((value)=> post = value)

  return post

}

createPost(postData:any){

return this.httpClient.post("https://jsonplaceholder.typicode.com/posts",postData)

}

updatePost(updateData:any,id:any){

return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`,updateData)

}

deletePost(id:any){

return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)

}

getPostbyid(id:any){

return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

}

}
