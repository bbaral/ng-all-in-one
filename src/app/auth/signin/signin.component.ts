import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as FromAppReducer from '../../ngrx-global-store/app.reducer';
import * as FromAuthActions from '../ngrx-auth-store/auth.action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @ViewChild('signIn', {read: NgForm}) signIn: NgForm;
  // constructor(private authService: AuthorizationService) { } -- no longer need since it is going to hook from from auth.effect.ts
  constructor(private store: Store<FromAppReducer.AppState>, private router: Router) { }

  ngOnInit() {
  }

  onSignIn() {
    const email = this.signIn.value.email;
    const password = this.signIn.value.password;
    this.store.dispatch(new FromAuthActions.TrySignIn({username: email, password: password}));
    this.router.navigate(['/']);
    console.log(password);
  }

}
