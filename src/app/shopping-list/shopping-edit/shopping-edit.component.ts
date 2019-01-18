import {
  Component, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ShoppingListService} from '../../services';
import {IngredientModel} from '../../models/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as shoppingListActions from '../ngrx-store/shopping-list.action';
import * as fromShoppingListReducer from '../ngrx-store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm', {read: NgForm}) shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IngredientModel;

  constructor(private slService: ShoppingListService,
              private store: Store<fromShoppingListReducer.AppState>,
              ) { }

  ngOnInit() {
   this.subscription = this.slService.startedEditing.subscribe((index: number) => {
     this.editedItemIndex = index;
     this.editMode = true;
     this.editedItem = this.slService.getIngredient(index);
     this.shoppingForm.setValue({
       name: this.editedItem.name,
       amount: this.editedItem.amount
     });
   });
  }

  onSubmit() {
    const value = this.shoppingForm.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new shoppingListActions.UpdateIngredient({index: this.editedItemIndex, ingredient: newIngredient}));
    } else {
      this.store.dispatch(new shoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    this.shoppingForm.reset();
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new shoppingListActions.DeleteIngredient(this.editedItemIndex));
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
