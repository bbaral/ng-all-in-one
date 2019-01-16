import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {EncryptionService} from '../shared/encryption.service';

@Injectable()
export class AuthorizationService {

  userInfo: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  constructor(private ngFireAuth: AngularFireAuth, private encryption: EncryptionService) { }

  signUpUser(email: string, password: string, firstname?: string, lastname?: string) {
    this.ngFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
        console.log(password);
      }).catch((error) => {
        console.log(error);
    });
  }

  signInUser(email: string, password: string) {
    this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((data) => {
          console.log(data);
      }).catch((error) => {
        console.log(error);
    });
  }
}
