import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = '';
  is_editable = false;

  buttonClicked() {
    this.username = 'Yay I am clicked!';
  }

  isDisabled() {
    if (this.username.length > 10) {
     return this.is_editable = true;
    } else {
      return this.is_editable;
    }
  }
}
