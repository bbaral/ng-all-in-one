import {Component,
  ElementRef,
  EventEmitter,
  OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Output() editTextOnClick = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() serverCreatedFromCockPit = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('checkboxInput') checkboxInput: ElementRef;
  marked = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(e){
    this.marked = e.target.checked;
  }
}
