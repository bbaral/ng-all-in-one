import {RecipeModel} from '../../models/recipe.model';
import {IngredientModel} from '../../models/ingredient.model';
import * as fromRecipeAction from './recipe.action';

export interface FeatureState {
  recipeStateArray: RecipeState;
}
export interface RecipeState {
  recipeStateArray: RecipeModel[];
}

const RecipeInitialState: RecipeState = {
  recipeStateArray: [
    new RecipeModel('Chicken Alfredo',
      'Chicken Alfredo Description',
      'https://hips.hearstapps.com/delish/assets/17/24/1497458683-delish-one-pot-chicken-alfredo-1-1024.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20)
      ]),
    new RecipeModel('Chicken Curry',
      'Chicken Curry',
      'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1)
      ])
  ]
};
export function recipeReducer(state = RecipeInitialState, action: fromRecipeAction.recipeActions) {
  switch (action.type) {
    case (fromRecipeAction.SET_RECIPES):
      return {
        ...state,
        recipeStateArray: [...action.payload]
      };
    case (fromRecipeAction.ADD_RECIPE):
      return {
        ...state,
        recipeStateArray: [...state.recipeStateArray, action.payload]
      };
    case (fromRecipeAction.UPDATE_RECIPE):
      const temp_recipe = state.recipeStateArray[action.payload.index];
      const updated_Recipe = {
        ...temp_recipe,
        ...action.payload.updateRecipe
      };
      const recipe_copy = [...state.recipeStateArray];
      recipe_copy[action.payload.index] = updated_Recipe;
      return {
        ...state,
        recipeStateArray: [...state.recipeStateArray, action.payload]
      };
    case (fromRecipeAction.DELETE_RECIPE):
      const deleted_recipe = [...state.recipeStateArray];
      deleted_recipe.splice(action.payload, 1);
      return {
        ...state,
        recipeStateArray: deleted_recipe
      };
    default:
      return state;
  }
}
