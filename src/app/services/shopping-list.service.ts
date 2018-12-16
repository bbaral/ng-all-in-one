import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  ingredientList: IngredientModel[] = [
    new IngredientModel('Apple', 10 ),
    new IngredientModel('Tomato', 15 )
  ];

  constructor() { }

  getIngredients() {
    return this.ingredientList.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredientList.push(ingredient);
    this.ingredientsChanged.emit(this.ingredientList.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredientList.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredientList.slice());
  }
}
