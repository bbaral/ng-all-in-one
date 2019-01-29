import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import * as FromRecipeActions from './recipe.action';
import * as FromRecipeReducer from './recipe.reducer';
import {RecipeModel} from '../../models/recipe.model';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';

@Injectable()
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

  @Effect({dispatch: false})
  recipeStore = this.action$.pipe(
    ofType(FromRecipeActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([action, state]) => {
      const request = new HttpRequest('PUT',
        'https://ng-recipe-book-60bd6.firebaseio.com/recipes.json',
        state.recipes, { reportProgress: true});
      return this.http.request(request);
    })
  );

  constructor(private action$: Actions,
              private http: HttpClient,
              private store: Store<FromRecipeReducer.FeatureState>) {}
}
