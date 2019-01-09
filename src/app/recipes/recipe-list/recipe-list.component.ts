import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {RecipeModel} from '../../models/recipe.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
   this.recipeService.recipesChanged.subscribe((rm: RecipeModel[]) => {
      this.recipes = rm;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
