import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import * as FromRecipeActions from './recipe.action';
import {RecipeModel} from '../../models/recipe.model';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../../services';

export class RecipeEffects {
  @Effect()
  recipeFetch = this.action$.pipe(
    ofType(FromRecipeActions.FETCH_RECIPES),
    switchMap((action: FromRecipeActions.fetchRecipes) => {
      return this.http.get<RecipeModel[]>('https://ng-recipe-book-60bd6.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
        .pipe(map((recipes) => {
          for (let recipe of recipes) {
            if (!recipes['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return {
            type: FromRecipeActions.SET_RECIPES,
            payload: recipes
          };
        }));
    }));
  constructor(private action$: Actions,
              private http: HttpClient,
              private recipeService: RecipeService) {}
}
