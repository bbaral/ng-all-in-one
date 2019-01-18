import * as ShoppingListAction from './shopping-list.action';
import {IngredientModel} from '../../models/ingredient.model';

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
    case ShoppingListAction.ADD_INGREDIENT_S:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListAction.UPDATE_INGREDIENT:
      const ing = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ing, ...action.payload.ingredient
      };
      const oldIngredients = [...state.ingredients];
      oldIngredients[action.payload.index] = updatedIngredient;
      return {
        ...state,
        ingredients: oldIngredients
      };
    default:
      return state;
  }
}
