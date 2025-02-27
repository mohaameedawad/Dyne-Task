import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { SharedService } from '../../../shared/services/sharedservice';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  restaurants: any[] = [];

  constructor(private homeservice: HomeService,
              private sharedService: SharedService,
  ) { 
    console.log('home page')
    this.updateNavBarBrand("Restaurants" , true)
  }

  ngOnInit(): void {
    this.getRestaurantsList();

  }
  
  getRestaurantsList() {
    this.homeservice.getRestaurantsList().subscribe((res: any) => {
      this.restaurants = res
    })
  }
  
  updateNavBarBrand(restaurant: any, isHomePage: boolean): void {
    if (typeof restaurant !== 'string') {
      this.sharedService.updateRestaurantData(restaurant)
    }
    this.sharedService.updateHeaderTitle(restaurant.name, isHomePage);
  }

}
