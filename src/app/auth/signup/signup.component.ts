import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthorizationService} from '../../services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signUpForm', {read: NgForm}) signUpForm: NgForm;

  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }

  onSignUp() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    console.log(password);
    this.authService.signUpUser(email, password);
  }

}
