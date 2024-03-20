import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-top',
  templateUrl: './categories-top.component.html',
  styleUrl: './categories-top.component.css'
})
export class CategoriesTopComponent implements OnInit {
  categories:any=[];
  categoriesContent:any=[];
  categoriesImage:any=[];

  ngOnInit(): void{
    this.fetchCategories();
  }

  constructor(private http:HttpClient){
  }

  fetchCategories() : void{
    this.http.get<any>('assets/jsonfile/topCategories.json').subscribe(
      {
        next: (data) => {
          this.categories = data;
          console.log('Categories:', this.categories);
          this.categoriesContent = data.categories_container.categories_heading;
          console.log('CategoriesContent',this.categoriesContent);
          this.categoriesImage = data.categories_container.categoriesImage;
          console.log('CategoriesImage',this.categoriesImage);
        },
        error: (error) => {
          console.error('Error Fetching FeaturePromos:', error);
        }
      })
  }
}
