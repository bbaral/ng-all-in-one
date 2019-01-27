import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as FromAuthAction from './auth.action';
import {map, switchMap, mergeMap} from 'rxjs/operators';
import * as firebase from 'firebase';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable()
export class AuthEffects {

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

  constructor(private actions$: Actions) {}
}
