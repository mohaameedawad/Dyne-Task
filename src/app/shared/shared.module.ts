import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../standalone-components/header/header.component';
import { RestaurantMenuCardComponent } from '../standalone-components/restaurant-menu-card/restaurant-menu-card.component';
import { ItemCardComponent } from '../standalone-components/item-card/item-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    RestaurantMenuCardComponent,
    ItemCardComponent
    
  ],
  exports: [
    RouterModule,
    HeaderComponent, 
    RestaurantMenuCardComponent,
    ItemCardComponent

  ]
})
export class SharedModule { }
