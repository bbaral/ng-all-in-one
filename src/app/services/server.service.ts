import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

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

  updateServers(servers: any[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://http-request-demo.firebaseio.com/data.json',
      servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://http-request-demo.firebaseio.com/data.json').pipe(
      map((response: any[]) => {
        const data = response;
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      })).pipe(catchError((err) => {
        console.log(err);
        return throwError(err);
    }));
  }

  deleteServer(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`https://http-request-demo.firebaseio.com/data.json/`,
       {headers: headers});
  }

  getAppName() {
    return this.http.get('https://http-request-demo.firebaseio.com/appName.json').pipe(
      map((response) => {
        return response;
      }));
  }
}
