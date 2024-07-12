import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SharedService } from '../../shared/services/sharedservice';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   currentHeaderTitle: string = 'Restaurants';
   isHomePage: boolean = true;
   isItemsPage: boolean = false;
      
   
  constructor(private sharedService : SharedService,
              private router: Router) {}
  
  ngOnInit(): void {
    this.gettingHeaderTitle();
    this.sharedService.isItemsPageBrandSubject.subscribe((res: boolean) => {
      this.isItemsPage = res
    })
   }

  gettingHeaderTitle() {
    this.sharedService.navbarBrandSubject.subscribe((res: any) => {
      if(res.HeaderTitle)
         this.currentHeaderTitle = res.HeaderTitle
      
      this.isHomePage = res.isHomePage;
    })
  }

  navigateBack(): void {
      const currentUrl = this.router.url;
      switch (true) {
          case currentUrl.startsWith('/menu'):
            this.router.navigate(['/home']);
            this.currentHeaderTitle = 'Restaurants';
          break;
          case currentUrl.startsWith('/items'):
            var restaurant = this.sharedService.getRestaurantDataFromLocalStorage();
            this.router.navigate(['/menu', restaurant.id]);
            this.currentHeaderTitle = this.sharedService.getRestaurantDataFromLocalStorage().name;
          break;
        default:
          break;
      }
      this.sharedService.updateHeaderTitle(this.currentHeaderTitle, this.isHomePage);
  }

 



}
