import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItemsByMenuIB(id:  number) {
    let URL = environment.BaseApi + 'menus/' + id ;
    return this.http.get<any>(URL);
}

getMenuRestaurantIB() {
  let URL = environment.BaseApi + `restaurants`
  return this.http.get<any>(URL);
}

}
