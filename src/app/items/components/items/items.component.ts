import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/sharedservice';
import { ItemsService } from '../../services/items.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit, OnDestroy {
  items: any[] = [];
  id!: number;
  
  constructor( private sharedService: SharedService,
               private itemsService: ItemsService,
               private router: ActivatedRoute
  ) {
  }
  
  ngOnInit(): void {
    this.getItemsByMenuId();
    this.sharedService.isItemsPageBrandSubject.next(true);
  }
  
  
  
  getItemsByMenuId() {
    this.router.params.subscribe((param: Params) => {
      this.id = param['id'];
      
      this.itemsService.getItemsByMenuIB(this.id).subscribe((res: any) => {
        console.log(res)
        this.items = res
        
      })
    }) 
  }
  
  updateQuantity(item: any)  {
    var index = this.items.findIndex(i => i.name === item.name);
    if (index !== -1) {
      this.items[index].quantity = item.quantity;
    }
    console.log('Quantity updated:', item);
  }
  
  ngOnDestroy(): void {
    this.sharedService.isItemsPageBrandSubject.next(false);
    
  }
}


