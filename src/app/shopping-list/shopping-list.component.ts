import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from './ngrx-shoppinglist-store/shopping-list.action';
import * as fromAppReducer from '../ngrx-global-store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: IngredientModel[]}>;

  constructor(private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
