import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/sharedservice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private sharedService: SharedService
) { }

ngOnInit(): void {
}

getHeaderTitle() {
  this.sharedService.getHeaderFromLocalStorage();
}

updateNavBarBrand(title: string, isHomePage: boolean): void {
  this.sharedService.updateHeaderTitle(title, isHomePage);
}

}
