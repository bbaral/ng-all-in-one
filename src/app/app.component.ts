import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAGw-HyN0QYulY8TFTZc2QJoi3hMoDH0d0",
      authDomain: "ng-recipe-book-60bd6.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-60bd6.firebaseio.com",
      projectId: "ng-recipe-book-60bd6",
      storageBucket: "ng-recipe-book-60bd6.appspot.com",
      messagingSenderId: "301933281491"
    });

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
