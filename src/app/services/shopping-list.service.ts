import {Injectable} from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientModel[]>();
  startedEditing = new Subject<number>();
  ingredientList: IngredientModel[] = [
    new IngredientModel('Apple', 10 ),
    new IngredientModel('Tomato', 15 )
  ];

  constructor() { }

  getIngredients() {
    return this.ingredientList.slice();
  }

  getIngredient(index: number) {
    return this.ingredientList[index];
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredientList.push(ingredient);
    this.ingredientsChanged.next(this.ingredientList.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredientList.push(...ingredients);
    this.ingredientsChanged.next(this.ingredientList.slice());
  }

  updateIngredient(index: number, newIngredient: IngredientModel) {
    this.ingredientList[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredientList.slice());
  }
}
