import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promos-featured',
  templateUrl: './promos-featured.component.html',
  styleUrl: './promos-featured.component.css'
})
export class PromosFeaturedComponent implements OnInit {
  featurePromos :any = [];
  imageRows:any;
  ngOnInit(): void{
    this.fetchPromos();
  }

  constructor(private http:HttpClient){
  }

  fetchPromos():void{
    this.http.get<any>('assets/jsonfile/feature-promos.json').subscribe(
      {
        next:(data) => {
        this.featurePromos = data;
        console.log(this.featurePromos);
        this.imageRows = data.wrapper.container.row;
        console.log("Image rows ", this.imageRows);
      },
      error:(error) => {
        console.error('Error Fetching FeaturePromos:' , error);
      }});
  }
}
