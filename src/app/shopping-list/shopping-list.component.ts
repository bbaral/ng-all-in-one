import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';
import * as Immutable from 'Immutable';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  iStyle: {[name: string]: string} = {};
  immutStyle: Immutable.Map<string, string> = Immutable.Map<string, string>();

  ingredientList: IngredientModel[] = [
    new IngredientModel('Apple', 10 ),
    new IngredientModel('Tomato', 10 , '40 second')
  ];

  constructor() { }

  ngOnInit() {
  }

}
