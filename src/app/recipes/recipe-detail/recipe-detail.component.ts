import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/ngrx-shoppinglist-store/shopping-list.action';
import * as fromRecipeReducer from '../ngrx-recipe-store/recipe.reducer';
import * as fromRecipeAction from '../ngrx-recipe-store/recipe.action';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipeReducer.RecipeState>;
  id: number;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromRecipeReducer.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeState = this.store.select('recipeStateArray');
    });
  }

  onAddToShoppingList() {
    this.store.select('recipeStateArray').pipe(
      take(1)
    ).subscribe((recipeState1: fromRecipeReducer.RecipeState) => {
      this.store.dispatch(new ShoppingListActions.AddIngredients(
        recipeState1.recipeStateArray[this.id].ingModel));
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new fromRecipeAction.deleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
