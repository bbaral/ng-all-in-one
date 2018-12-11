import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

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
