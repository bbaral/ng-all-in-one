import {EventEmitter, Injectable, Output} from '@angular/core';
import {RecipeModel} from '../models/recipe.model';

@Injectable()
export class RecipeService {

  @Output() recipeSelected = new EventEmitter<RecipeModel>();
  private recipeList: RecipeModel[] = [
    new RecipeModel('Chicken Alfredo', 'Chicken Alfredo Description', 'https://hips.hearstapps.com/delish/assets/17/24/1497458683-delish-one-pot-chicken-alfredo-1-1024.jpg'),
    new RecipeModel('Chicken Alfredo', 'Chicken Alfredo Description', 'https://hips.hearstapps.com/delish/assets/17/24/1497458683-delish-one-pot-chicken-alfredo-1-1024.jpg')
  ];
  constructor() { }

  getRecipes() {
    return this.recipeList.slice();
  }
}
