import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as FromAuthAction from './auth.action';
import {map, switchMap, mergeMap, tap} from 'rxjs/operators';
import * as firebase from 'firebase';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable()
export class AuthEffects {
 //Effect for Sign Up
  @Effect()
  authSignup = this.actions$.pipe(
    ofType(FromAuthAction.TRY_SIGNUP),
    map((action: FromAuthAction.TrySignUp) => {
      return action.payload;
    }),
    switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    }),
    switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      return [
        {
          type: FromAuthAction.SIGNUP
        },
        {
          type: FromAuthAction.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  //Effect for Sign In
  @Effect()
  autSignin = this.actions$.pipe(
    ofType(FromAuthAction.TRY_SIGNIN),
    map((action: FromAuthAction.TrySignIn) => {
      return action.payload;
    }),
    switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    }),
    switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: FromAuthAction.SIGNIN
        },
        {
          type: FromAuthAction.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect({dispatch: false})
  authlogout = this.actions$.pipe(
    ofType(FromAuthAction.LOGOUT),
    tap(() => {
      this.router.navigate(['/signin']);
    })
  );

  constructor(private actions$: Actions, private router: Router) {}
}
