import {
  Component, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
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
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingForm', {read: NgForm}) shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: IngredientModel;

  constructor(private store: Store<fromShoppingListReducer.AppState>) { }

  ngOnInit() {
   this.store.select('shoppingList').subscribe(
     data => {
       if (data.editedIngredientIndex > -1) {
         this.editedItem = data.editedIngredient;
         this.editMode = true;
         this.shoppingForm.setValue({
           name: this.editedItem.name,
           amount: this.editedItem.amount
         });
       } else {
         this.editMode = false;
       }
     }
   );
  }

  onSubmit() {
    const value = this.shoppingForm.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new shoppingListActions.UpdateIngredient({ingredient: newIngredient}));
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
    this.store.dispatch(new shoppingListActions.DeleteIngredient());
    this.onClear();
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
