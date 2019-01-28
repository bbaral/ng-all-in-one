import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as FromAppReducer from '../ngrx-global-store/app.reducer';
import * as FromAuthReducer from '../auth/ngrx-auth-store/auth.reducer';
import {map, take} from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<FromAppReducer.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('auth').pipe(
      take(1),
      map((authState: FromAuthReducer.AuthState) => {
        return authState.authenticated;
      })
    );
  }
}
