import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthorizationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated();
  }
}
