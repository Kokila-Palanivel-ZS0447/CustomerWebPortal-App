import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-freshes',
  templateUrl: './freshes.component.html',
  styleUrl: './freshes.component.css'
})
export class FreshesComponent implements OnInit {
  fresh :any;
  image :any;

  constructor(private http:HttpClient){
    
  }

  ngOnInit(): void{
    this.freshImg();
  }
  

  freshImg():void{
    this.http.get<any>('assets/jsonfile/freshes.json').subscribe(
      {
      next:(data) => {
        this.fresh = data;
        console.log( "fetchdata:" ,this.fresh);
        this.image = data.freshbox[0].freshrow;
      },  
      error:(error) => {
        console.error('Error Fetching FreshImages:', error);
      }
    });
  }

}


