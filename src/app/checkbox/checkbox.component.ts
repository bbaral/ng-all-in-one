import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @ViewChild('checkboxInput') checkboxInput: ElementRef;
  marked = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(e){
    this.marked = e.target.checked;
  }
}
