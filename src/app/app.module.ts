import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {AppReducers} from './ngrx-global-store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/ngrx-auth-store/auth.effects';
import * as firebase from 'firebase';

export const firebaseAPIKEY = {
  apiKey: "AIzaSyAGw-HyN0QYulY8TFTZc2QJoi3hMoDH0d0",
    authDomain: "ng-recipe-book-60bd6.firebaseapp.com",
    databaseURL: "https://ng-recipe-book-60bd6.firebaseio.com",
    projectId: "ng-recipe-book-60bd6",
    storageBucket: "ng-recipe-book-60bd6.appspot.com",
    messagingSenderId: "301933281491"
};
firebase.initializeApp(firebaseAPIKEY);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    ShoppingListModule,
    CoreModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot([AuthEffects]),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
