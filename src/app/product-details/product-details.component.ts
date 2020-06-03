

//This section shows you how to use the Angular Router to combine the products data and route information to display the specific details for each product.

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';//Import cart service.

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product;

  constructor(
      private route: ActivatedRoute,//product property and inject the ActivatedRoute into the constructor
      //contains information about the route, its parameters, and additional data associated with the route.
      //injecting the ActivatedRoute,configuring the component to use a service.
        
         private cartService: CartService //inject cart service by adding into constructor
  ) { }
  
   addToCart(product) { // method adds the current product to the cart.
    this.cartService.addToCart(product);//add the product the cart.
    window.alert('Your product has been added to the cart!');//Displays a message
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];// productId to display the details for each  product.
  });
}

}