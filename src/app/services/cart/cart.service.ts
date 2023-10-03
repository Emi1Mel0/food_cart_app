import { Injectable } from '@angular/core';
import { cart } from 'src/app/shared/models/cart';
import { cartItem } from 'src/app/shared/models/cartitem';
import { food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart: cart = new cart();
  constructor() {}
  addToCart(food: food): void {
    let foundedCartItem = this._cart.items.find(
      (iterm) => iterm.food.id === food.id
    );
    if (foundedCartItem) {
      this.changeQuantity(food.id, foundedCartItem.quantity + 1);
    }
    // if there is no cartitem at all from the begaining
    else {
      this._cart.items.push(new cartItem(food));
    }
  }

  removeFromCart(foodId: number): void {
    this._cart.items = this._cart.items.filter(
      (item) => item.food.id != foodId
    );
  }

  // this function will keep everything except the foodId

  changeQuantity(foodId: number, quantity: number) {
    let foundedCartItem = this._cart.items.find(
      (iterm) => iterm.food.id === foodId
    );
    if (!foundedCartItem) {
      return;
      // here we to change the foundedCartItem becuase it is not found
      // and push the number that should be shown
    } else {
      foundedCartItem.quantity = quantity;
    }
  }
  getCart(): cart {
    return this._cart;
  }
  // this is just an encapsulating the cart not nothing else
}
