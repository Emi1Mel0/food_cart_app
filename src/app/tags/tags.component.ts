import { FoodService } from '../services/food/food.service';
import { tag } from './../shared/models/tag';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  constructor(private _FoodService: FoodService) {}
  @Input()
  foodDetailsTags?: string[];
  // and we don't need numbers
  // we just need the tag

@Input()
justifyContent:string = 'center';
// because it set as it in the css file by default but we need to change it at the details page


  tags?: tag[];
  // it was just array but we change it because
  // we will not always use it as its builds so sometimes shown
  // at details page we just need the tags of its specific food
  // not all foods

  ngOnInit(): void {
    if (!this.foodDetailsTags) {
      this.tags = this._FoodService.getAllTags();
    }
  }
}
