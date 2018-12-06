import { Component, OnInit } from '@angular/core';
import {AppService} from "../common/services/app/app.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    title = 'Demo';
    greeting = {};

    constructor(private app: AppService) {

    }

    authenticated() { return this.app.authenticated; }

}
