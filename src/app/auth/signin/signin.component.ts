import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthorizationService, EncryptionService} from '../../services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthorizationService,
              private encryption: EncryptionService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signInUser(email, password);
    console.log(password);
  }

}
