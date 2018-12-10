import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {RecipeModel} from "../../models/recipe.model";
import {UIComponent} from "../../shared/ui/ui.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent extends UIComponent implements OnInit {

  recipeList: RecipeModel[] = [
    new RecipeModel('Chicken Alfredo', 'Chicken Alfredo Description', 'https://hips.hearstapps.com/delish/assets/17/24/1497458683-delish-one-pot-chicken-alfredo-1-1024.jpg'),
    new RecipeModel('Chicken Alfredo', 'Chicken Alfredo Description', 'https://hips.hearstapps.com/delish/assets/17/24/1497458683-delish-one-pot-chicken-alfredo-1-1024.jpg')
  ];
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngOnInit() {
  }

}
