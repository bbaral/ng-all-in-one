import {
  Component,
  Input,
  OnInit,
  DoCheck,
  ViewEncapsulation,
  SimpleChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, EventEmitter, Output
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
  OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Output('RemoveItem') onRemove = new EventEmitter();

  constructor() {
    console.log(`constructor called!`);
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked called');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit Called');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
