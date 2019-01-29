import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRecipeReducer from '../ngrx-recipe-store/recipe.reducer';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesState: Observable<fromRecipeReducer.RecipeState>;
  subscription: Subscription;

  constructor(
    private store: Store<fromRecipeReducer.FeatureState>,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipesState = this.store.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
