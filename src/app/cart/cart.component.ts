import { Component, OnInit } from '@angular/core';
import { cart } from '../shared/models/cart';
import { CartService } from '../services/cart/cart.service';
import { cartItem } from '../shared/models/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: cart;
  constructor(private _CartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {}

  setCart() {
    this.cart = this._CartService.getCart();
  }

  removeFromCart(cartitem: cartItem) {
    this._CartService.removeFromCart(cartitem.food.id);
    this.setCart();
  }

  changeQuantity(cartitem: cartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    // we make it const because we don't want to change it
    // after setting the value
    // parseInt is to change string intger to real jS integer
    this._CartService.changeQuantity(cartitem.food.id, quantity);
    this.setCart();
  }

  
}
