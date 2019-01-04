import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PopupWindowComponent} from './shared/popup-window/popup-window.component';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('f', {read: NgForm}) f: NgForm;
  @ViewChild('popupWindow', {read: PopupWindowComponent}) popupWindow: PopupWindowComponent;

  constructor(private modalService: NgbModal) {}

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

 onSubmit(): void {
    console.log(this.f);
  }
}
