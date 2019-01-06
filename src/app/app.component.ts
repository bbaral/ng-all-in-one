import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('f', {read: NgForm}) f: NgForm;
  defaultQuestion: string = 'teacher';
  defaultUsername: string = 'bbaral';
  defaultEmail: string = 'test@test.com';
  answer: string = '';
  genders: any = ['Male', 'Female'];

  constructor() {}

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.f.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: 'Pre populating via SuggestedUserName Button',
      gender: 'Male'
    });
  }

  onSubmit(): void {
    console.log(this.f);
  }
}
