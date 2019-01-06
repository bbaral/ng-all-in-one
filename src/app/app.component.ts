import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('f', {read: NgForm}) signUpForm: NgForm;
  defaultQuestion: string = 'teacher';
  defaultUsername: string = 'bbaral';
  defaultEmail: string = 'test@test.com';
  answer: string = '';
  genders: any = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;

  constructor() {}

  suggestUserName() {
    const suggestedName = 'Superuser';
    //Another way of setValue in form in through patch.
    //which is available only in form
    /**this.f.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: 'Pre populating via SuggestedUserName Button',
      gender: 'Male'
    });
     */

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
