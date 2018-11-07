import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../common/services/app/app.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    title = 'Demo';
    greeting = {};

    constructor(private app: AppService, private http: HttpClient) {
        http.get('/api/resource').subscribe(data => this.greeting = data);
    }

    authenticated() { return this.app.authenticated; }

}
