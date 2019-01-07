import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null,
        [Validators.required, Validators.email]),
      'gender': new FormControl('Male', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

}
