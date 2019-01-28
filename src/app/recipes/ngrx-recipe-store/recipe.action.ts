import {Action} from '@ngrx/store';
import {RecipeModel} from '../../models/recipe.model';

export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export class setRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: RecipeModel[]) {}
}

export class addRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: RecipeModel) {}
}

export class updateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: {index: number, updateRecipe: RecipeModel}) {}
}

export class deleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {}
}

export type recipeActions = setRecipes |
  addRecipe | updateRecipe | deleteRecipe;
