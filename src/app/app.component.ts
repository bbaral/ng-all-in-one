import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('f', {read: NgForm}) f: NgForm;

  constructor() {}

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(): void {
    console.log(this.f);
  }
}
