import {Component, OnInit} from '@angular/core';
import {AnnouncementAlertComponent} from "./announcement/announcement-alert/announcement-alert.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
        this.onAlert();
    }


    toggleSideBar() {
        $('#sidebar').toggleClass('active');
    }



    onAlert() {
        const modalRef = this.modalService.open(AnnouncementAlertComponent);

        modalRef.result.then((result) => {
            console.log(result);

        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
            this.onAlert();
        });
    }

}



