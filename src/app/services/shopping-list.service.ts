import {Injectable} from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';
import {Subject} from 'rxjs';

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

  addIngredient(ingredient: IngredientModel) {
    this.ingredientList.push(ingredient);
    this.ingredientsChanged.next(this.ingredientList.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredientList.push(...ingredients);
    this.ingredientsChanged.next(this.ingredientList.slice());
  }
}
