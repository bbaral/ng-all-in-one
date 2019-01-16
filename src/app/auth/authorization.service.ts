import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {EncryptionService} from '../shared/encryption.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthorizationService {
  token: string;
  userInfo: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  constructor(private ngFireAuth: AngularFireAuth,
              private encryption: EncryptionService,
              private router: Router) { }

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
      .then((response) => {
        this.router.navigate(['/']);
          this.ngFireAuth.auth.currentUser.getIdToken()
            .then((tokenReceived: string) => {
            this.token = tokenReceived;
          });
      }).catch((error) => {
        console.log(error);
    });
  }

  getToken() {
    return this.ngFireAuth.auth.currentUser.getIdToken()
      .then((tokenReceived: string) => {
      this.token = tokenReceived;
    });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    this.ngFireAuth.auth.signOut();
    this.token = null;
  }
}
