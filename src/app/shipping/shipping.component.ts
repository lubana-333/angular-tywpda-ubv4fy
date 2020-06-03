import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts; //define shiipimg cost
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
      this.shippingCosts = this.cartService. getShippingPrices();//property using the getShippingPrices() method from the cart service.
  }

}