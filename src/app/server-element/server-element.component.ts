import {
  Component,
  Input,
  OnInit,
  DoCheck,
  ViewEncapsulation,
  SimpleChanges
} from '@angular/core';
import {OnChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements
  OnInit,
  DoCheck,
  OnChanges {

  @Input('srvElement') element: {type: string, name: string, content: string};

  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngOnInit() {
    console.log(`ngOnInit called`);
  }
  constructor() {
    console.log(`constructor called!`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  toggleEdit(event) {
    this.element.name = 'Replace Me';
  }


}
