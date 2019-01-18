import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../services';
import {IngredientModel} from '../models/ingredient.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromShoppingListReducer from './ngrx-store/shopping-list.reducer';
import * as ShoppingListActions from './ngrx-store/shopping-list.action'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: IngredientModel[]}>;

  constructor(private slService: ShoppingListService,
              private store: Store<fromShoppingListReducer.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
