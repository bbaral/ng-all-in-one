import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreatedFromCockPit = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreatedFromCockPit = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @ViewChild('anotherServerNameInput') anotherServerNameInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServerFromCockpit(serverInput: HTMLInputElement) {
    this.serverCreatedFromCockPit.emit({
      serverName: serverInput.value,
      serverContent: this.serverNameInput.nativeElement.value
    });
  }

  onAddBluePrintFromCockpit(bpInput: HTMLInputElement) {
    this.blueprintCreatedFromCockPit.emit({
      serverName: bpInput.value,
      serverContent: this.anotherServerNameInput.nativeElement.value
    });
  }

}
