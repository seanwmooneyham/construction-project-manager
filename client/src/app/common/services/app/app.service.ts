import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

    public API = '/api';

    authenticated = false;

    constructor(private http: HttpClient) { }

    authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('/api/user', {headers: headers}).subscribe(response => {
            console.log(response);
            if (response['name']) {
                console.log("authenticated = true");
                this.authenticated = true;
            } else {
                console.log("authenticated = false");
                this.authenticated = false;
            }
            return callback && callback();
        });
    }
}
