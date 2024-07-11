import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  restaurants: any[] = [];

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getRestaurantsList();
  }
  
  getRestaurantsList() {
    this.service.getRestaurantsList().subscribe((res: any) => {
      console.log(res)
      this.restaurants = res
    })
  }

}
