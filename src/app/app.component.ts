import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filteredStatus: string = '';

  appStatus = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('stable');
   }, 0);
  });

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(10, 0, 2017)
    },
    {
      instanceType: 'large',
      name: 'User',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'DB Admin',
      status: 'critical',
      started: new Date(15, 1, 2010)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'Severe',
      name: 'System Analyst',
      status: 'critical',
      started: new Date(19, 12, 1995)
    },
    {
      instanceType: 'Large',
      name: 'DevOps Engineer',
      status: 'critical',
      started: new Date(30, 5, 2010)
    },
  ];

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(Date.now())
    });
  }
}
