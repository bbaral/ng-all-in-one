import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {UIComponent} from "../shared/ui/ui.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends UIComponent implements OnInit {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngOnInit() {
  }

}
