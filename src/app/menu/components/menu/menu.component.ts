import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/sharedservice';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  menus: any[] = [];

  constructor(private sharedService: SharedService,
              private menuservice: MenuService,
              private router: ActivatedRoute,
              private route: Router
) { }

ngOnInit(): void {
  this.getMenuRestaurantIB()
}

getMenuRestaurantIB() {
  this.menuservice.getMenuRestaurantIB().subscribe((res: any) => {
     this.router.params.subscribe((param: Params) => {
      const id = param['id'];
      const restaurant = res.find((r: any) => r.id == id)
      
      if(restaurant)
        this.menus = restaurant.menus
      else
        this.route.navigate(['home'])
    }) 
  })
}
getHeaderTitle() {
  this.sharedService.getHeaderFromLocalStorage();
}

updateNavBarBrand(title: string, isHomePage: boolean): void {
  this.sharedService.updateHeaderTitle(title, isHomePage);
}

}
