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

  constructor() {
    // Initialize from local storage if available
    this.getHeaderFromLocalStorage();
  }

  updateHeaderTitle(title: string, isHomePage: boolean): void {
    const headerData = { HeaderTitle: title, isHomePage: isHomePage };
    this.navbarBrandSubject.next(headerData);
    localStorage.setItem('headerTitle', JSON.stringify(headerData));
  }

  getHeaderFromLocalStorage() {
    const savedHeader = JSON.parse(localStorage.getItem('headerTitle')!);
     savedHeader ? this.updateHeaderTitle(savedHeader.HeaderTitle, savedHeader.isHomePage) : this.updateHeaderTitle('Restaurants', true )
  }

  }

