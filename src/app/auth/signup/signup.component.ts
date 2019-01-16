import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EncryptionService} from '../../shared/encryption.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private encryption: EncryptionService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
  }

}
