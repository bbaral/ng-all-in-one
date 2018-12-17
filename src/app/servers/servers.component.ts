import { Component, OnInit } from '@angular/core';
import {ServersService} from '../services/servers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  reloadUsers() {
    this.router.navigate(['/users']);
  }

}
