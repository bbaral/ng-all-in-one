import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from '../services';
import {IngredientModel} from '../models/ingredient.model';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ingredients: IngredientModel[]}>;
  private subscription: Subscription;

  constructor(private slService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: IngredientModel[]}}>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList')
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: IngredientModel[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
