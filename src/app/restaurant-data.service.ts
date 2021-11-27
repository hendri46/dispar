import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {

  restaurantData: any;
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('https://www.oniva.com.tr/foodmania/restaurants.json');
  }

}
