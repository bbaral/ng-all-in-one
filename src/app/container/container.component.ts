import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Output() serverCreatedFromCockPit = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreatedFromCockPit = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('anotherServerNameInput') anotherServerNameInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServerFromCockpit(nameInput: HTMLInputElement) {
    this.serverCreatedFromCockPit.emit({
      serverName: nameInput.value,
      serverContent: this.anotherServerNameInput.nativeElement.value
    });
  }

  onAddBluePrintFromCockpit(nameInput: HTMLInputElement) {
    this.blueprintCreatedFromCockPit.emit({
      serverName: nameInput.value,
      serverContent: this.anotherServerNameInput.nativeElement.value
    });
  }

}
