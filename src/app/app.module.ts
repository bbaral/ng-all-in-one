import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {ServerService} from './services/server.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment),
    AgGridModule.withComponents([]),
    MaterialModule
  ],
  providers: [ServerService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
