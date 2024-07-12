import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-menu-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-menu-card.component.html',
  styleUrl: './restaurant-menu-card.component.css'
})
export class RestaurantMenuCardComponent {
  @Input() restaurant: any;
  @Input() menu: any;
  @Input() isRestaurant: any;

  constructor(private router: Router) {}

  navigationToItems() {
    this.router.navigate(['/items', this.menu.id]);
  }

}
