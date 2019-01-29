import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {SigninComponent} from '../../auth';
import {Observable} from 'rxjs';
import * as FromAppReducer from '../../ngrx-global-store/app.reducer';
import * as FromAuthReducer from '../../auth/ngrx-auth-store/auth.reducer';
import * as FromAuthActions from '../../auth/ngrx-auth-store/auth.action';
import * as FromRecipeActions from '../../recipes/ngrx-recipe-store/recipe.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<FromAuthReducer.AuthState>;

  @ViewChild('signInComponent', {read: SigninComponent}) signInComponent: SigninComponent;

  constructor(private store: Store<FromAppReducer.AppState>) {}

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new FromRecipeActions.storeRecipes());
  }

  onFetchData() {
   this.store.dispatch(new FromRecipeActions.fetchRecipes());
  }

  LogOut() {
    this.store.dispatch(new FromAuthActions.LogOut());
  }

}
