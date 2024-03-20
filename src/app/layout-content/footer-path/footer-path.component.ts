import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer-path',
  templateUrl: './footer-path.component.html',
  styleUrl: './footer-path.component.css'
})
export class FooterPathComponent implements OnInit{
  posts :any = [];
  ngOnInit(): void {
      this.fetchPosts();
  }

  constructor(private http:HttpClient){
  }

  fetchPosts(): void {
    this.http.get<any>('assets/jsonfile/footerData.json').subscribe(
      {
        next:(data) => {
        this.posts = data;
        console.log(this.posts);
      },
      error:(error) => {
        console.error('Error fetching posts:', error);
      }});
  }
}


