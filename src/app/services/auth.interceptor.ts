import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthorizationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('******************Intercepted Request****************************');
    console.log(req);
    const copiedReq = req.clone({params: req.params.append('', '')});
    return next.handle(copiedReq);
  }

}
