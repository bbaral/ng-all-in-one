import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreatedFromCockPit = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreatedFromCockPit = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServerFromCockpit() {
    this.serverCreatedFromCockPit.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBluePrintFromCockpit() {
    this.blueprintCreatedFromCockPit.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
