import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetailInput: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetailInput.ingModel);
  }

}
