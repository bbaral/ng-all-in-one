import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailComponent,
  RecipeEditComponent,
  RecipesComponent,
  RecipeStartComponent} from './index';
import {AuthGuardService} from '../services';

const recipeRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})

export class RecipesRoutingModule {}
