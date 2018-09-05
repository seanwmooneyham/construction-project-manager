
/**
 * Bootstrap Widgets The Angular Way
 * ng-bootstrap.github.io
 */

import {Component, Input} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-confirm-content',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})

export class ConfirmComponent  {

    @Input() title;
    @Input() message;


    constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {
    }


}
