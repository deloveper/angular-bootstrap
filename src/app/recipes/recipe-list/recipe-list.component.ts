import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList : Recipe[]=[
    new Recipe("Recipe1", "First recipe", 
    "https://previews.123rf.com/images/chelovector/chelovector1910/chelovector191000031/132652918-recipe-book-hand-drawn-cover-vector-illustration-.jpg"),
    new Recipe("Recipe2", "Delicious Recipe", 
    "https://previews.123rf.com/images/chelovector/chelovector1910/chelovector191000031/132652918-recipe-book-hand-drawn-cover-vector-illustration-.jpg")

  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
