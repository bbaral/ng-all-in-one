import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
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
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
