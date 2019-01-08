import {
  Component, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ShoppingListService} from '../../services/shopping-list.service';
import {IngredientModel} from '../../models/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

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

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.slService.startedEditing.subscribe((index: number) => {
     this.editedItemIndex = index;
     this.editMode = true;
   });
  }

  onAddItem() {
    const value = this.shoppingForm.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
