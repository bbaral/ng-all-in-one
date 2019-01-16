import {Component} from '@angular/core';
import {ServerService} from './services/server.service';
import {error} from '@angular/compiler/src/util';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName = this.serverService.getAppName();
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
    this.serverService.updateServers(this.servers)
      .subscribe((response) => {
        console.log(response);
        console.log(error);
      });
  }
  onGet() {
    this.serverService.getServers()
      .subscribe((servers: any[]) => {
        this.servers = servers;
      });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
