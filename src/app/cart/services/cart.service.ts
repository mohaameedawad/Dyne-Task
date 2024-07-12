import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../shared/services/sharedservice';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
              private sharedService : SharedService
  ) { }

  placeOrder(restId: any) {
    var cartItems : {itemId: number, quantity: number}[] = 
        this.sharedService.getCartItems().map((x: any) => ({ itemId: x.id, quantity: x.quantity }))
    let URL = environment.BaseApi + `order/` + restId ;
    return this.http.post(URL, cartItems);
}

}
