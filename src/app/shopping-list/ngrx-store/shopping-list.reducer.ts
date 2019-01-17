import * as ShoppingListAction from './shopping-list.action';
import {IngredientModel} from '../../models/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
const initialState = {
  ingredients: [
    new IngredientModel('Apple', 10 ),
    new IngredientModel('Tomato', 15 )
  ]
};
export function shoppingListReducer(state = initialState, action: ShoppingListAction.ShoppingListAction) {
  switch (action.type) {
    case ShoppingListAction.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
  return state;
}
