import {EventEmitter, Injectable, Output} from '@angular/core';
import {RecipeModel} from '../models/recipe.model';
import {ShoppingListService} from './shopping-list.service';
import {IngredientModel} from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();

  private recipeList: RecipeModel[] = [
    new RecipeModel('Chicken Alfredo',
      'Chicken Alfredo Description',
      'https://hips.hearstapps.com/delish/assets/17/24/1497458683-delish-one-pot-chicken-alfredo-1-1024.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20)
      ]),
    new RecipeModel('Chicken Curry',
      'Chicken Curry',
      'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipeList.slice();
  }

  getRecipe(index: number) {
    return this.recipeList[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModel) {
    this.recipeList.push(recipe);
    this.recipesChanged.next(this.recipeList.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipeList[index] = newRecipe;
    this.recipesChanged.next(this.recipeList.slice());
  }

  deleteRecipe(index: number) {
    this.recipeList.splice(index, 1);
    this.recipesChanged.next(this.recipeList.slice());
  }
}
