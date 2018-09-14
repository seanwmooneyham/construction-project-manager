
/**
 * Bootstrap Widgets The Angular Way
 * ng-bootstrap.github.io
 */

import { Component, Input } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-announcement-alert',
  templateUrl: './announcement-alert.component.html',
  styleUrls: ['./announcement-alert.component.css']
})
export class AnnouncementAlertComponent {

    title = 'Announcement';
    message = 'Be sure to wear your PPE!';

    constructor(public activeModal: NgbActiveModal) { }


}
