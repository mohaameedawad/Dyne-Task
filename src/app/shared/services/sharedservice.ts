import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  navbarBrandSubject: BehaviorSubject<object> = new BehaviorSubject<object>({
    HeaderTitle: 'Restaurants',
    isHomePage: true
  });
  
  // this bhaviour subject show the cart icon in header only if we are in items page => ( its value = true ) 
  isItemsPageBrandSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    // Initialize from local storage if available
    this.getHeaderFromLocalStorage();
  }

  updateHeaderTitle(title: string, isHomePage: boolean = false): void {
    const headerData = { HeaderTitle: title, isHomePage: isHomePage };
    this.navbarBrandSubject.next(headerData);
    localStorage.setItem('headerTitle', JSON.stringify(headerData));
  }
  
  getHeaderFromLocalStorage() {
    const savedHeader = JSON.parse(localStorage.getItem('headerTitle')!);
    console.log(savedHeader)
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

  }

