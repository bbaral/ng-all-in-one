import {Component, ElementRef, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';

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
  @ViewChild('AddServerButton') AddServerButton: TemplateRef<string>;

  constructor() { }

  ngOnInit() {
  }

  onAddServerFromCockpit(nameInput: HTMLInputElement) {
    const serverInputValue = this.serverNameInput.nativeElement.value;
    const anotherInputValue = this.anotherServerNameInput.nativeElement.value;

    if (serverInputValue.length < 1 && anotherInputValue.length < 1) {
      alert('Server Name and Server Content cannot be empty');
    } else {
      this.serverCreatedFromCockPit.emit({
        serverName: nameInput.value,
        serverContent: this.anotherServerNameInput.nativeElement.value
      });
    }

    console.log(this.anotherServerNameInput);
    console.log(this.AddServerButton);
  }

  onAddBluePrintFromCockpit(nameInput: HTMLInputElement) {
    this.blueprintCreatedFromCockPit.emit({
      serverName: nameInput.value,
      serverContent: this.anotherServerNameInput.nativeElement.value
    });
  }

}
