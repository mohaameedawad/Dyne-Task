import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() item: any;
  @Output() updateQuantityEvent = new EventEmitter<any>();

  addToCart(item: any) {
    if (!item.quantity) {
      item.quantity = 1;
    }
    this.updateQuantityEvent.emit(item);
  }

  increaseQuantity(item: any) {
    if (item.quantity >= 0) {
      item.quantity++;
      this.updateQuantityEvent.emit(item);
    }
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      this.updateQuantityEvent.emit(item);
    }
  }

  
}

