import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../services/recipe.service';
import {RecipeModel} from '../models/recipe.model';

@Injectable()
export class HttpService {


  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-60bd6.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }

  fetchRecipes() {
    return this.http.get('https://ng-recipe-book-60bd6.firebaseio.com/recipes.json')
      .subscribe((response) => {
        let recipes: RecipeModel[] = response;
        this.recipeService.setRecipes(recipes);
      });
  }
}
