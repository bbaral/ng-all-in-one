import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';
import * as Immutable from 'Immutable';
import {ShoppingListService} from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[];
  iStyle: {[name: string]: string} = {};
  immutStyle: Immutable.Map<string, string> = Immutable.Map<string, string>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }

}
