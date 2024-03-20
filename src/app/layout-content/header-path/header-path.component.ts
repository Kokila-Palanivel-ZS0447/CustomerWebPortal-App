import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header-path',
  templateUrl: './header-path.component.html',
  styleUrl: './header-path.component.css'
})
export class HeaderPathComponent {

  headerData :any = [];
  showDropdown : boolean= false;
  categoriesData:any=[];
  viewtext:any=[];
  allCategory:any=[];


  ngOnInit(): void {
      this.fetchHeaders();
  }

  constructor(private http:HttpClient){
  }

  fetchHeaders(): void {
    this.http.get<any>('assets/jsonfile/headerData.json').subscribe(
      {
        next:(data) => {
        this.headerData = data;
        console.log('Data:',this.headerData);
        this.categoriesData = data.categories;
        // console.log('Categories',this.categoriesData);
        this.viewtext= data.viewtext;
       // console.log('View Text:', this.viewtext);
        this.allCategory = data.allCategories;
       // console.log('Allcategories:', this.allCategory)

      },
      error:(error) => {
        console.error('Error fetching Header:', error);
      }});
  }
  toggleDropdown() :void{
    this.showDropdown = !this.showDropdown;
  }
}
