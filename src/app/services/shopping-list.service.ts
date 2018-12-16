import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientList: IngredientModel[] = [
    new IngredientModel('Apple', 10 ),
    new IngredientModel('Tomato', 15 )
  ];
  ingredientsChanged = new EventEmitter<IngredientModel[]>();

  constructor() { }

  getIngredients() {
    return this.ingredientList.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredientList.push(ingredient);
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredientList.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredientList.slice());
  }
}
