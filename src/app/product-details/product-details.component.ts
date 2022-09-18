import { Component, OnInit } from '@angular/core';

/*  ActivatedRoute is specific to each component that the Angular Router loads. It contains
    information about the route and the route parameters
*/
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  
  constructor(
      private route: ActivatedRoute,      /* By injecting ActivatedRoute here, we are configuring component to use a service */
      private cartService: CartService    /* Injecting Cart Service */
      ) {}

  ngOnInit() {
    // First get the product Id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find prouct
    this.product = products.find(product => product.id === productIdFromRoute);

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }  
}
