import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as FromAppReducer from '../../ngrx-global-store/app.reducer';
import * as FromAuthActions from '../ngrx-auth-store/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signUpForm', {read: NgForm}) signUpForm: NgForm;

  constructor(private store: Store<FromAppReducer.AppState>) { }

  ngOnInit() {
  }

  onSignUp() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    console.log(password);
    this.store.dispatch(new FromAuthActions.TrySignUp({username: email, password: password}));
  }

}
