import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SharedService } from '../../shared/services/sharedservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  restaurants: any[] = [];

  constructor(private homeservice: HomeService,
              private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getRestaurantsList();
    this.updateNavBarBrand("Restaurants" , true)
  }
  
  getRestaurantsList() {
    this.homeservice.getRestaurantsList().subscribe((res: any) => {
      this.restaurants = res
    })
  }
  
  updateNavBarBrand(title: string, isHomePage: boolean): void {
    this.sharedService.updateHeaderTitle(title, isHomePage);
  }

}
