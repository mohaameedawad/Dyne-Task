import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedService } from '../../shared/services/sharedservice';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   currentHeaderTitle: string = 'Restaurants';
   isHomePage: boolean = true;
   isItemsPage: boolean = false;
   cartItemCount!: number;
   updateNavBarBrand: any;
   
  constructor(private sharedService : SharedService,
              private router: Router) {}
  
  ngOnInit(): void {
     
    this.cartQuantity();
    this.sharedService.isItemsPageBrandSubject.subscribe((res: boolean) => {
      this.isItemsPage = res
    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.navigatingByBrowser()
      }
    });
   }

   cartQuantity() {
    this.sharedService.cartQuantity.subscribe((quantity: any) => {
      this.cartItemCount = quantity;
    });
   }

  //handling navigation when clicking on back arrow icon 
  navigateBack(): void {
      const currentUrl = this.router.url;
      switch (true) {
          case currentUrl.startsWith('/menu'):
              this.router.navigate(['/home']);
              this.currentHeaderTitle = 'Restaurants';
              this.isHomePage = false //showing bars icon
          break;
          case currentUrl.startsWith('/items'):
              var restaurant = this.sharedService.getRestaurantDataFromLocalStorage();
              this.router.navigate(['/menu', restaurant.id]);
              this.currentHeaderTitle = this.sharedService.getRestaurantDataFromLocalStorage().name;
              this.isHomePage = false
            break;
            case currentUrl.startsWith('/cart'):
              var menuId = this.sharedService.getItemstDataFromLocalStorage();
              this.router.navigate(['/items', menuId]);
              this.currentHeaderTitle = this.sharedService.getMenuDataFromLocalStorage().name;
              this.isHomePage = false
            break;
      }
      this.sharedService.updateHeaderTitle(this.currentHeaderTitle, this.isHomePage);
  }
  

  //handling navigation when clicking on browser backward button 
  navigatingByBrowser(): void {
      const currentUrl = this.router.url;
      switch (true) {
          case currentUrl.startsWith('/home'):
            this.currentHeaderTitle = 'Restaurants';
            this.isHomePage = true
          break;
          case currentUrl.startsWith('/menu'):
              this.currentHeaderTitle = this.sharedService.getRestaurantDataFromLocalStorage().name;
              console.log('restaurant', this.currentHeaderTitle)
              this.isHomePage = false
            break;
          case currentUrl.startsWith('/items'):
              this.currentHeaderTitle = this.sharedService.getMenuDataFromLocalStorage().name;
              this.isHomePage = false
            break;
            case currentUrl.startsWith('/cart'):
              this.currentHeaderTitle = 'Cart';
              this.isHomePage = false
            break;
      }
  }


 



}
