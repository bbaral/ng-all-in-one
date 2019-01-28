import * as ShoppingListAction from './shopping-list.action';
import {IngredientModel} from '../../models/ingredient.model';

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
      const ing = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ing, ...action.payload.ingredient
      };
      const oldIngredients = [...state.ingredients];
      oldIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: oldIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };

    case ShoppingListAction.DELETE_INGREDIENT:
      const previousIngredients = [...state.ingredients];
      previousIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: previousIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };

    case ShoppingListAction.START_EDIT:
      const eIngredient = {...state.ingredients[action.payload]};
      return {
        ...state,
        editedIngredient: eIngredient,
        editedIngredientIndex: action.payload
      };

    case ShoppingListAction.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };

    default:
      return state;
  }
}
