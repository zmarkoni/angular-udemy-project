import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Recepie Name', 'Some description', 'http://lorempixel.com/400/200/food/'),
      new Recipe('Recepie Name 1', 'Some description 1', 'http://lorempixel.com/400/200/food/'),
      new Recipe('Recepie Name 2', 'Some description 2', 'http://lorempixel.com/400/200/food/')
  ];

  constructor() { }

  ngOnInit() {
  }



}
