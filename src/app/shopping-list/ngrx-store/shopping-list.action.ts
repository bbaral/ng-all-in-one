import {Action} from '@ngrx/store';
import {IngredientModel} from '../../models/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENT_S = 'ADD_INGREDIENT_S';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  // payload: IngredientModel;
  constructor(public payload: IngredientModel) {}
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENT_S;
  constructor(public payload: IngredientModel[]) {}
}

export type ShoppingListAction = AddIngredient | AddIngredients;
