import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {RecipeService} from './recipe.service';
import {RecipeModel} from '../models/recipe.model';
import {map} from 'rxjs/operators';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthorizationService) {
  }

  storeRecipes() {
    //const httpToken = this.authService.getToken;
    // return this.http.put('https://ng-recipe-book-60bd6.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(), {
    //     observe: 'body',
    //     params: new HttpParams()
    //   });
    const request = new HttpRequest('PUT',
      'https://ng-recipe-book-60bd6.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {responseType: 'json', reportProgress: true});
    return this.http.request(request);
  }

  fetchRecipes() {
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
        return recipes;
      }))
      .subscribe((recipes: RecipeModel[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
