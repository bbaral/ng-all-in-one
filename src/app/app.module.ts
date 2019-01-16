import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent, ShoppingEditComponent } from './shopping-list';
import {ShoppingListService, RecipeService, AuthGuardService, HttpService, EncryptionService, AuthorizationService} from './services';
import { DropdownDirective } from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import { SignupComponent, SigninComponent } from './auth';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {RecipesModule} from './recipes/recipes.module';
import {RecipesRoutingModule} from './recipes/recipes-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    RecipesRoutingModule
  ],
  providers: [ShoppingListService,
    RecipeService,
    HttpService,
    AuthorizationService,
    AuthGuardService,
    EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
