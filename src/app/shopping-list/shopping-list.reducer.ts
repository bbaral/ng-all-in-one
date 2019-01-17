import {Action} from '@ngrx/store';
import {IngredientModel} from '../models/ingredient.model';

const initialState = {
  ingredients: [
    new IngredientModel('Apple', 10 ),
    new IngredientModel('Tomato', 15 )
  ]
};
export function shoppingListReducer(state = initialState, action: Action) {
  return state;
}
