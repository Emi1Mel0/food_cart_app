import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: food[] = [];

  constructor(
    private _FoodService: FoodService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.filteredFoodList = this._FoodService.getAll();
    this.filteredFoodList = this.foods;
  }
  // this part to make a search in different way

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  filteredFoodList: food[] = [];

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this._FoodService.getAllFoodsBySearchTerm(params['searchTerm']);
     else if (params['tag'])
     this.foods = this._FoodService.getAllFoodsByTag(params['tag']);
          else this.foods = this._FoodService.getAll();
    });
  }
}
