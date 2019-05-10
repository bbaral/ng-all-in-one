import {Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewRef} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];
  signUpForm: FormGroup;
  forbiddenUsername = ['mia', 'jim'];
  @ViewChild('email', {read: TemplateRef}) email: TemplateRef<any>;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formbuilder.group({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,
          [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
      }),
      'gender': new FormControl('Male', Validators.required),
      'hobbies': new FormArray([])
    });
    this.signUpForm
      .controls['username']
      .valueChanges.subscribe((value) => {
      console.log('Old username: ', this.signUpForm.value['username']);
      console.log('new username: ', value);
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

}
