import {Component, ElementRef, EventEmitter, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
