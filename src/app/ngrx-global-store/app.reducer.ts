import * as fromShoppingList from '../shopping-list/ngrx-shoppinglist-store/shopping-list.reducer';
import * as fromAuth from '../auth/ngrx-auth-store/auth.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.AuthState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer
};
