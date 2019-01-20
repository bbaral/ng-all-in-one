import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as FromAuthAction from './auth.action';
@Injectable()
export class AuthEffects {
  @Effect()
  authSignup$ = this.actions$.pipe(ofType(FromAuthAction.TRY_SIGNUP));

  constructor(private actions$: Actions) {}
}
