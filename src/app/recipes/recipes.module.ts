import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {RecipesComponent, RecipeListComponent, RecipeDetailComponent,
  RecipeEditComponent, RecipeStartComponent, RecipeItemComponent} from './index';
import {RecipesRoutingModule} from './recipes-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthGuardService} from '../services';
import {recipeReducer} from './ngrx-recipe-store/recipe.reducer';
import {EffectsModule} from '@ngrx/effects';
import {RecipeEffects} from './ngrx-recipe-store/recipe.effects';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RecipesRoutingModule,
    StoreModule.forFeature('recipeStateArray', recipeReducer),
    EffectsModule.forFeature([RecipeEffects])
  ],
  providers: [AuthGuardService]
})
export class RecipesModule {}
