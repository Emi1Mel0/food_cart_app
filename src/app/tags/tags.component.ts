
import { FoodService } from '../services/food/food.service';
import { tag } from './../shared/models/tag';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  constructor(private _FoodService: FoodService) {}
  tags: tag[] = [];

  ngOnInit(): void {
this.tags = this._FoodService.getAllTags();  }
}
