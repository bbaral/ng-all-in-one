import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) { }

  storeServers(servers: any[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://http-request-demo.firebaseio.com/data.json',
      servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://http-request-demo.firebaseio.com/data.json');
  }
}
