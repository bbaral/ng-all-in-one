import {Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new IngredientModel(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
