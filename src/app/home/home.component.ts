import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _FoodService: FoodService) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  foods: String[] = [];

  ngOnInit(): void {
    this.foods = this._FoodService.getAll();
  }
}
