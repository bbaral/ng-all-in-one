import { Component, OnInit } from '@angular/core';
import {ServersService} from '../services/servers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  reloadPage() {
    //this.router.navigate(['servers'], {relativeTo: this.activatedRoute});
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

}
