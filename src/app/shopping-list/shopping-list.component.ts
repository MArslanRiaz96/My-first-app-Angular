import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediants: Ingredient[] = [
  new Ingredient('Apples',5),
  new Ingredient('Tomatoes',10)
];


  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient: Ingredient){
    this.ingrediants.push(ingredient);

  }

}
