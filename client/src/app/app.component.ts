import {Component, HostListener, OnInit} from '@angular/core';
import { environment } from '../environments/environment'
import {AnnouncementAlertComponent} from "./announcement/announcement-alert/announcement-alert.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AppService} from "./common/services/app/app.service";
import {HttpClient} from "@angular/common/http";
import { finalize } from 'rxjs/operators';
import {StateService} from '@uirouter/angular';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'app';
    public innerWidth: any;

    constructor(private modalService: NgbModal, private http: HttpClient, private appService: AppService, private stateService: StateService) {
        this.appService.authenticate(undefined, () => {

        });

    }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }

    //Updates App on screen resize

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.innerWidth = window.innerWidth;
    }


    authenticated() { return this.appService.authenticated; }

    toggleSideBar() {
        $('#sidebar').toggleClass('active');
    }

    shouldToggle() {
        if( this.innerWidth < 768) {
            this.toggleSideBar();
        }
    }


    logout() {
        this.http.post('api/logout', {}).pipe(finalize(() => {
            this.appService.authenticated = false;
            this.stateService.go('login');
        })).subscribe();
    }


}



