import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from './recipe.service';
import {RecipeModel} from '../models/recipe.model';
import {map} from 'rxjs/operators';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class HttpService {


  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthorizationService) { }

  storeRecipes() {
    const httpToken = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-60bd6.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }

  fetchRecipes() {
    const httpToken = this.authService.getToken();
    this.authService.getToken();
    return this.http.get('https://ng-recipe-book-60bd6.firebaseio.com/recipes.json')
      .pipe(map((response) => {
        const recipes: any = response;
        for (let recipe of recipes) {
          if (!recipes['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe((recipes: RecipeModel[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
