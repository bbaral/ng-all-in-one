import {Injectable} from '@angular/core';
import {RecipeModel} from '../models/recipe.model';
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

  constructor() { }

  getRecipes() {
    return this.recipeList.slice();
  }

  getRecipe(index: number) {
    return this.recipeList[index];
  }

  setRecipes(recipes: RecipeModel[]) {
    this.recipeList = recipes;
    this.recipesChanged.next(this.recipeList.slice());
  }
}
