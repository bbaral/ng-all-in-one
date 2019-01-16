import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) { }

  storeServers(servers: any[]): Observable<any> {
    return this.http.post('https://http-request-demo.firebaseio.com/', servers);
  }
}
