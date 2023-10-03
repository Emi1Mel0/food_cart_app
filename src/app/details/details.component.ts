import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { food } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _FoodService: FoodService,
    private _CartService: CartService,
    private _router: Router
  ) {
    _ActivatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this._FoodService.getFoodById(params['id']);
      }
    });
  }
  ngOnInit(): void {}

  food!: food;

  addToCart() {
    this._CartService.addToCart(this.food);
    this._router.navigateByUrl('cart');
  }
}
