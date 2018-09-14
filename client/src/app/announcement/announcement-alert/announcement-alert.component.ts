
/**
 * Bootstrap Widgets The Angular Way
 * ng-bootstrap.github.io
 */

import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Announcement} from "../announcement";
import {AnnouncementsService} from "../../common/services/announcements/announcements.service";

@Component({
  selector: 'app-announcement-alert',
  templateUrl: './announcement-alert.component.html',
  styleUrls: ['./announcement-alert.component.css']
})
export class AnnouncementAlertComponent implements OnInit {

    title = 'Announcement';
    message = '';
    announcement: Announcement;


    constructor(
        public activeModal: NgbActiveModal,
        private announcementsService: AnnouncementsService,

    ) { }

    ngOnInit() {
        this.getAlertSplash();
    }

    getAlertSplash() {
        this.announcementsService.getAnnouncementSplash().subscribe(data => {
            this.announcement = data;
            this.message = this.announcement.text;
        })
    }


}
