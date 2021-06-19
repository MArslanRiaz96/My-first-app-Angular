import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('A Test 1 Recipe', 'this is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AwrioPiE8sxPtzDIsFy11-ASdU9e7mPfAg&usqp=CAU'),
    new Recipe('A Test 2 Recipe', 'this is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZQDc8sHWY20Nv3m154Y1XvVNJ_7s3UBOlQ&usqp=CAU'),
    new Recipe('A Test 3 Recipe', 'this is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61vRe0bFuvVCHVOrWyhP1UisMVmQMyxjuPg&usqp=CAU')
  ];
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
