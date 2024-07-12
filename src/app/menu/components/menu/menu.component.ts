import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { SharedService } from '../../../shared/services/sharedservice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: any[] = [];

  constructor(private sharedService: SharedService,
              private menuService: MenuService,
              private router: ActivatedRoute,
              private route: Router
            ) { }

  ngOnInit(): void {
    this.getMenuRestaurantIB();
    this.sharedService.getHeaderFromLocalStorage();
  }

  getMenuRestaurantIB() {
    this.menuService.getMenuRestaurantIB().subscribe((res: any) => {
      this.router.params.subscribe((params: Params) => {
        const id = params['id'];
        const restaurant = res.find((r: any) => r.id == id);
        
        if (restaurant) {
          this.menus = restaurant.menus;
        } else {
          // this.route.navigate(['home']);
        }
      });
    });
  }

}
