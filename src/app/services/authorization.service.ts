import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as FromAppReducer from '../ngrx-global-store/app.reducer';
import * as FromAuthActions from '../auth/ngrx-auth-store/auth.action';

@Injectable()
export class AuthorizationService {
  constructor(private ngFireAuth: AngularFireAuth,
              private router: Router,
              private store: Store<FromAppReducer.AppState>) { }

  signUpUser(email: string, password: string, firstname?: string, lastname?: string) {
    this.ngFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((data) => {
        this.store.dispatch(new FromAuthActions.SignUp());
        this.ngFireAuth.auth.currentUser.getIdToken()
          .then((tokenReceived: string) => {
            this.store.dispatch(new FromAuthActions.SetToken(tokenReceived));
          });
      }).catch((error) => {
        console.log(error);
    });
  }

  signInUser(email: string, password?: string) {
    this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.store.dispatch(new FromAuthActions.SignIn());
        this.router.navigate(['/']);
          this.ngFireAuth.auth.currentUser.getIdToken()
            .then((tokenReceived: string) => {
              this.store.dispatch(new FromAuthActions.SetToken(tokenReceived));
          });
      }).catch((error) => {
        console.log(error);
    });
  }
  // getToken() {
  //   return this.ngFireAuth.auth.currentUser.getIdToken()
  //     .then((tokenReceived: string) => {
  //     this.token = tokenReceived;
  //   });
  //   return this.token;
  // }
  //
  // isAuthenticated() {
  //   return this.token != null;
  // }


  logout() {
    this.ngFireAuth.auth.signOut();
    this.store.dispatch(new FromAuthActions.LogOut());
  }
}
