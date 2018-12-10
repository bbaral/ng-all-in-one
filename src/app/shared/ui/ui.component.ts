import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UIComponent implements OnInit {

  /** @Input */ @Input() x_position: string;
  /** @Input */ @Input() y_position: string;
  /** @Input */ @Input() controlWidth: string;
  /** @Input */ @Input() controlHeight: string;
  /** @Input */ @Input() className: string;
  /** @Input */ @Input() disabled: boolean = false;
  /** @Input */ @Input() readOnly: boolean = false;

  styleObj: {[name: string]: string} = {};

  innerStyle: {[name: string]: string} = {};

  constructor(elementRef: ElementRef, renderer: Renderer2) { }

  ngOnInit() {
    if (this.controlHeight) {
      this.styleObj['height'] = this.getPixels(this.controlHeight);
    }
    if (this.controlWidth) {
      this.styleObj['width'] = this.getPixels(this.controlWidth);
    }
    if (this.x_position) {
      this.styleObj['left'] = this.getPixels(this.x_position);
    }
    if (this.y_position) {
      this.styleObj['top'] = this.getPixels(this.y_position);
    }
  }

  getPixels(value: string): string {
    return _.parseInt(value) + 'px';
  }

}
