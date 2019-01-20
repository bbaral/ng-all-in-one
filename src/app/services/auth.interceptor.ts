import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as FromAppReducer from '../ngrx-global-store/app.reducer';
import * as FromAuthReducer from '../auth/ngrx-auth-store/auth.reducer';
import {switchMap, take} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<FromAppReducer.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('******************Intercepted Request****************************');
    console.log(req);
    return this.store.select('auth').pipe(
      take(1),
      switchMap((authState: FromAuthReducer.AuthState) => {
        const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
        return next.handle(copiedReq);
      })
    );
  }

}
