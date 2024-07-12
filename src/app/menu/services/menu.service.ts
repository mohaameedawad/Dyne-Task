import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuRestaurantIB() {
    let URL = environment.BaseApi + `restaurants`
    return this.http.get<any>(URL);
}

}
