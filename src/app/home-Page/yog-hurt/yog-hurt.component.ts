import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yog-hurt',
  templateUrl: './yog-hurt.component.html',
  styleUrl: './yog-hurt.component.css'
})
export class YogHurtComponent implements OnInit {
  yoghut : any ;

  constructor (private http:HttpClient){

  }

  ngOnInit(): void{
    this.yoghutImg();
  }

  yoghutImg():void{
    this.http.get<any>('assets/jsonfile/yoghut.json').subscribe(
      {
        next:(data) => {
        this.yoghut = data.box.row;
        console.log( "YoghutImages:" ,this.yoghut);
      },  
      error:(error) => {
        console.error('Error Fetching FreshImages:', error);
      }}
    );
  }




}
