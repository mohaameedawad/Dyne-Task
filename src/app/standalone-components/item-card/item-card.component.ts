import { Component,  Input} from '@angular/core';
import { SharedService } from '../../shared/services/sharedservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() item: any;
  @Input() isCartPage: boolean = false;

  constructor (private sharedService: SharedService) {}

  addToCart() {
    this.sharedService.addToCart(this.item);
  }

  increaseQuantity() {
    this.sharedService.increaseQuantity(this.item);
  }

  decreaseQuantity() {
    this.sharedService.decreaseQuantity(this.item);
}

  
}

