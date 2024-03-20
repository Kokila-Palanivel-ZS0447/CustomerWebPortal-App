import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farms-explore',
  templateUrl: './farms-explore.component.html',
  styleUrl: './farms-explore.component.css'
})
export class FarmsExploreComponent implements OnInit {
  farms: any = [];
  farmsContent :any=[];
  farmsImage :any =[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchFarms();
  }

  fetchFarms(): void {
    this.http.get<any>('assets/jsonfile/exploreFarms.json').subscribe(
      {
        next: (data) => {
          this.farms = data;
          console.log('Farms:', this.farms);
          this.farmsContent = data.explore_content.explore_heading;
          console.log('FarmsContent',this.farmsContent);
          this.farmsImage = data.explore_content.farmImage;
          console.log('Farmsimage',this.farmsImage);
        },
        error: (error) => {
          console.error('Error Fetching FeaturePromos:', error);
        }
      })
  }
}
