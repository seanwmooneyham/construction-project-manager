/**
 * Bootstrap Widgets The Angular Way
 * ng-bootstrap.github.io
 */

import {Component, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  @Input() title;
  @Input() tool;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }


}
