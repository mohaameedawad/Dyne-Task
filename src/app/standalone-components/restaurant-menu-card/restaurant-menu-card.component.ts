import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-menu-card.component.html',
  styleUrl: './restaurant-menu-card.component.css'
})
export class RestaurantMenuCardComponent {
  @Input() restaurant: any;

}
