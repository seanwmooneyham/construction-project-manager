import {Component, HostListener, OnInit} from '@angular/core';
import { environment } from '../environments/environment'
import {AnnouncementAlertComponent} from "./announcement/announcement-alert/announcement-alert.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    public innerWidth: any;

    constructor(
        private modalService: NgbModal
    ) {
        console.log(environment.production);
    }

    ngOnInit() {
        setTimeout(() => { this.onAlert() });
        this.innerWidth = window.innerWidth;
    }

    //Updates App on screen resize

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.innerWidth = window.innerWidth;
    }



    toggleSideBar() {
        $('#sidebar').toggleClass('active');
    }

    shouldToggle() {
        if( this.innerWidth < 768) {
            this.toggleSideBar();
        }
    }



    onAlert() {
        let modalRef = this.modalService.open(AnnouncementAlertComponent);

        modalRef.result.then((result) => {
            console.log(result);

        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
            this.onAlert();
        });
    }

}



