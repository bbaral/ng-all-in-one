import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingListService, RecipeService, AuthGuardService, HttpService, EncryptionService, AuthorizationService} from './services';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {RecipesModule} from './recipes/recipes.module';
import {RecipesRoutingModule} from './recipes/recipes-routing.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesRoutingModule,
    AuthModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
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
