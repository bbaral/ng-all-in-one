import * as ShoppingListAction from './shopping-list.action';
import {IngredientModel} from '../../models/ingredient.model';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: IngredientModel[];
  editedIngredient: IngredientModel;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [
    new IngredientModel('Apple', 10 ),
    new IngredientModel('Tomato', 15 )
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
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
    case ShoppingListAction.DELETE_INGREDIENT:
      const deleteIngredients = [...state.ingredients];
      deleteIngredients.splice(action.payload, 1);
      return {
        ...state,
        ingredients: deleteIngredients
      };
    default:
      return state;
  }
}
