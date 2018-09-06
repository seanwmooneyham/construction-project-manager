import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent {

  @Input() material;
  @Input() title;
  newMaterialName: '';

  constructor( public activeModal: NgbActiveModal ) { }

  onEdit() {
    this.material.name = this.newMaterialName;
    this.activeModal.close(this.material);
  }

}
