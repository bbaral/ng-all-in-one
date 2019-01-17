import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipesComponent, RecipeListComponent, RecipeDetailComponent,
  RecipeEditComponent, RecipeStartComponent, RecipeItemComponent} from './index';
import {RecipesRoutingModule} from './recipes-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthGuardService} from '../services';

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
    RecipesRoutingModule
  ],
  providers: [AuthGuardService]
})
export class RecipesModule {}