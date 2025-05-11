import { Component } from '@angular/core';
import { ApiService } from '../data/api.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api-handle',
  imports: [CommonModule, HttpClientModule], //commonmodule to import all things at once like ngif, ngfor, ngswitch escetra
  templateUrl: './api-handle.component.html',
  styleUrl: './api-handle.component.css',
})
export class ApiHandleComponent {
  constructor(private apiService: ApiService) {}

  post = undefined;

  ngOnInit() {
    this.post = this.apiService.getPost();
    console.log(this.post);
  }

  addPost() {
    this.apiService.createPost({ title: 'this is being the original title ' }).subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }

  updatePost() {
    this.apiService
      .updatePost(
        {
          userId: 1,
          id: 1,
          title: 'this is not the original title',
          body: 'this is not the original body either',
        },
        10
      )
      .subscribe({
        next: (value) => {
          console.log(value);
        },
      });
  }

  getPostByid() {
    this.apiService.getPostbyid(99).subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }

  deletePostByid() {
    this.apiService.deletePost(99).subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }
}
