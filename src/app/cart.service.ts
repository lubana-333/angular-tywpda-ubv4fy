 //cart component, which displays the items in the cart.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
  providedIn: 'root'
}
)
export class CartService {
 items = [];//items property to store the array of the current products in the cart.

 addToCart(product) {// addToCart() method appends a product to an array of item
    this.items.push(product);
  }

  getItems() {// method collects the items users add to the cart and returns each item with its associated quantity
    return this.items;
  }

  clearCart() {//method returns an empty array of items
    this.items = [];
    return this.items;
  }
   getShippingPrices() {
    return this.http.get('/assets/shipping.json');// method that uses the HttpClient get() method to retrieve the shipping data.
  }
  constructor(
      private http: HttpClient
  ) { }

}