import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsTypeService {

  constructor(private http: HttpClient) { }

  getMeals(): Observable<any[]> {
    return this.http.get<any>('https://www.oniva.com.tr/foodmania/meals.json');
  }

}
