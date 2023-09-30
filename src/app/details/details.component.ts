
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { food } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute, private _FoodService:FoodService) {

    _ActivatedRoute.params.subscribe((params) => {
      if(params['id'])
      {
        this.food = this._FoodService.getFoodById(params['id']);
      }
    })

  }
  ngOnInit(): void {}

  food!: food;
}
