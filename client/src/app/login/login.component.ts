import { Component, OnInit } from '@angular/core';
import {AppService} from "../common/services/app/app.service";
import {HttpClient} from "@angular/common/http";
import {StateService} from "@uirouter/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    credentials = {username: '', password: ''};

    constructor(private app: AppService, private http: HttpClient, private stateService: StateService) {
    }

    login() {
        this.app.authenticate(this.credentials, () => {
            this.stateService.go('home');
        });
        return false;
    }

}