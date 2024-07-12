import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/sharedservice';

@Component({
  selector: 'app-restaurant-menu-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-menu-card.component.html',
  styleUrl: './restaurant-menu-card.component.css'
})
export class RestaurantMenuCardComponent implements OnInit {
  @Input() restaurant: any;
  @Input() menu: any;
  @Input() isRestaurant: any;
  
  
  
  
  constructor(private router: Router,
    private sharedService: SharedService
  ) {}
  
  ngOnInit(): void {
  }
  
  navigationToItems() {
    this.sharedService.updateHeaderTitle(this.menu.name);
    this.sharedService.updateMenuData(this.menu);
    this.sharedService.updateItemsData(this.menu.id);
    this.router.navigate(['/items', this.menu.id]);
    
  }

}
