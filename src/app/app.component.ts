import {Component} from '@angular/core';
import {ServerService} from './services/server.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  servers = [
    {
      name: 'Bikram',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Baral',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe((response) => {
        console.log(response);
        console.log(error);
      });
  }
  onGet() {
    this.serverService.getServers()
      .subscribe((response) => {
        console.log(response);
        console.log(error);
      });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
