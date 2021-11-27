import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cart = [];
  menus: any;


  constructor() { }

  getProducts() {
    // return this.menus;
  }


  addProduct(menu) {
    this.cart.push(menu);
    console.log(menu);
  }

}
