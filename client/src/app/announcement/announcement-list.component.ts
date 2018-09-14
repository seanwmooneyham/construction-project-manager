import {Component, OnInit} from '@angular/core';
import {Announcement} from "./announcement";
import {AnnouncementsService} from "../common/services/announcements/announcements.service";
import {ConfirmComponent} from "../common/modal/confirm/confirm.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: 'app-announcement',
    templateUrl: './announcement-list.component.html',
    styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {

    announcements: Array<Announcement>;

    announcement_splash: Announcement;

    announcementMessage = '';
    dropDownText = 'Choose Level';
    announcementLevel = 'info';

    constructor(
        private announcementsService: AnnouncementsService,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.getAlertSplash();
        this.getAnnouncements();
    }

    getAlertSplash() {
        this.announcementsService.getAnnouncementSplash().subscribe(data => {
            this.announcement_splash = data;
            console.log(this.announcement_splash.announcement_id)
        })
    }

    getAnnouncements() {
        this.announcementsService.getAllAnnouncements().subscribe(data => {
            this.announcements = data;
        })
    }

    isSelected(id) {
        return id == this.announcement_splash.announcement_id;
    }

    onAddAnnouncement() {
        if (this.announcementMessage != '') {
            let announcement = new Announcement;
            announcement.text = this.announcementMessage;
            announcement.announcement_level = this.announcementLevel;
            this.announcementsService.addAnnouncement(announcement).subscribe(() => {
                this.getAnnouncements();
            });
            this.announcementMessage = '';
        } else {
            console.error("User must enter message!");
        }
    }

    selectLevel(level) {
        this.dropDownText = level.charAt(0).toUpperCase() + level.slice(1);
        this.announcementLevel = level;
    }

    onDelete(announcement: Announcement) {
        const modalRef = this.modalService.open(ConfirmComponent);
        modalRef.componentInstance.title = 'Delete Announcement?';
        modalRef.componentInstance.message = 'Delete Announcement?';

        modalRef.result.then((result) => {
            this.announcementsService.deleteAnnouncement(announcement).subscribe(() => {
                this.getAnnouncements();
            }, error => console.error(error));
        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });
    }


    updateAlert(announcement) {
        this.announcementsService.changeAnnouncementSplash(announcement).subscribe(() => {
            console.log("alert updated");
        });
    }

    formatDate(date) {
        let formattedDate = new Date(date);
        return `${formattedDate.getMonth()}/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;
    };


}