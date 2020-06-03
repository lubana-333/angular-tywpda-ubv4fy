
//cart component, which displays the items in the cart.
// shows you how to use the cart service to display the products in the cart.

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;// define property to store the products in the cart
   checkoutForm;
  constructor(
     private cartService: CartService,
      private formBuilder: FormBuilder,
  ) { 
     this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
      this.items = this.cartService.getItems();//Set the items using cart service getItems() method
  }
    onSubmit(customerData) { // method to process the form
    // Process checkout data here

    this.items = this.cartService.clearCart();// method to empty the cart items and reset the form
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}