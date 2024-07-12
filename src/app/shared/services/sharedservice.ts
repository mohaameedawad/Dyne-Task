import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
   cartItems: any[] = [];

  navbarBrandSubject: BehaviorSubject<object> = new BehaviorSubject<object>({
    HeaderTitle: 'Restaurants',
    isHomePage: true
  });
  
  // this bhaviour subject show the cart icon in header only if we are in items page => ( its value = true ) 
  isItemsPageBrandSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  cartQuantity: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalCartPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  constructor( private router: Router) {
    // Initialize from local storage if available
    this.getHeaderFromLocalStorage();

    // Load cart items from local storage if they exist
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.updateCartQuantity();
      this.calculateTotalPrice();
    }
  }

  updateHeaderTitle(title: string, isHomePage: boolean = false): void {
    const headerData = { HeaderTitle: title, isHomePage: isHomePage };
    this.navbarBrandSubject.next(headerData);
    localStorage.setItem('headerTitle', JSON.stringify(headerData));
  }
  
  getHeaderFromLocalStorage() {
    const savedHeader = JSON.parse(localStorage.getItem('headerTitle')!);
    savedHeader ? this.updateHeaderTitle(savedHeader.HeaderTitle, savedHeader.isHomePage) : this.updateHeaderTitle('Restaurants', true )
  }
  
  updateMenuData(menu: any) {
    localStorage.setItem('Menu', JSON.stringify(menu));
  }
  
  getMenuDataFromLocalStorage() {
    return  JSON.parse(localStorage.getItem('Menu')!);
  }

  updateRestaurantData(Restaurant: any) {
    localStorage.setItem('Restaurant', JSON.stringify(Restaurant));
  }
  
  getRestaurantDataFromLocalStorage() {
    return  JSON.parse(localStorage.getItem('Restaurant')!);
  }
  updateItemsData(menuID: any) {
    localStorage.setItem('ItemsPage', JSON.stringify(menuID));
  }
  
  getItemstDataFromLocalStorage() {
    return  JSON.parse(localStorage.getItem('ItemsPage')!);
  }

  addToCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      alert('Item already in cart');
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
      this.calculateTotalPrice();
      this.saveCartItems();
    }
  }

  increaseQuantity(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
      this.saveCartItems();
      this.calculateTotalPrice();
    }
  }

  decreaseQuantity(item: any) {
    
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        const index = this.cartItems.indexOf(existingItem);
        if (index !== -1) {
          this.cartItems.splice(index, 1);
        }
      }
      this.calculateTotalPrice();
      this.saveCartItems();
      
      if(this.cartItems.length == 0) {
          this.router.navigate(['/home']);
          this.updateHeaderTitle('Restaurants')
      }
    }
  }
  

  getCartItems() {
    return this.cartItems;
  }

   saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.updateCartQuantity();
  }

   updateCartQuantity(_emptycart?: boolean) {
    let totalQuantity = 0;
    for (let item of this.cartItems) {
      totalQuantity += item.quantity;
    }
    if(_emptycart) // to reset the cartQuantity
    this.cartQuantity.next(0);
    else
    this.cartQuantity.next(totalQuantity);
  }

  calculateTotalPrice(): void {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price * item.quantity;
    }
    this.totalCartPrice.next(total);
  }
}




