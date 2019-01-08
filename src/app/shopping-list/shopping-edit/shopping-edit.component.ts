import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {ShoppingListService} from '../../services/shopping-list.service';
import {IngredientModel} from '../../models/ingredient.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingForm', {read: NgForm}) shoppingForm: NgForm;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const value = this.shoppingForm.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

}
