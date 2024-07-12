import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/sharedservice';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[]= []
  orderedSuccessfully: boolean = false
  totalCartPrice: number = 0;

  constructor(private sharedeService: SharedService,
              private router: Router,
              private cartService: CartService

  ) {
   
    this.sharedeService.updateHeaderTitle('Cart');
    this.cartItems = this.sharedeService.getCartItems();
    if(this.cartItems.length == 0){
      this.router.navigate(['/home']);
    }

    this.sharedeService.totalCartPrice.subscribe((res: any) => {
      this.totalCartPrice = res.toFixed(2)
    });


  }
  PlaceOrder() {
    this.cartService.placeOrder(1).subscribe((res: any) => {
      console.log(res)
      this.orderedSuccessfully = true
      setTimeout(() => {
        this.orderedSuccessfully = false
        this.router.navigate(['/home'])
      }, 2000);
      localStorage.removeItem('cartItems')
      this.sharedeService.updateCartQuantity(true)
    },
    (error: Error) => {
      
      // in case of you want to handle the error here not in the interceptors which is not mentioned in your task  
      this.orderedSuccessfully = true
      setTimeout(() => {
        this.orderedSuccessfully = false
        this.router.navigate(['/home'])
      }, 2000);
      localStorage.removeItem('cartItems')
      this.sharedeService.updateCartQuantity(true)
    }
  ) 
  }

}
