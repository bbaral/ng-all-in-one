import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../services/recipe.service';
import {RecipeModel} from '../models/recipe.model';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpService {


  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-60bd6.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }

  fetchRecipes() {
    return this.http.get('https://ng-recipe-book-60bd6.firebaseio.com/recipes.json')
      .pipe(map((response) => {
        const recipes: RecipeModel[] = response;
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
