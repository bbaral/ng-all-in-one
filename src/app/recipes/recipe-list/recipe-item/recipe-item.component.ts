import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {UIComponent} from "../../../shared/ui/ui.component";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent extends UIComponent implements OnInit {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngOnInit() {
  }

}
