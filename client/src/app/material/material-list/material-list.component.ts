import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../../common/material/material.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Material} from "../material";
import {MaterialEditComponent} from "../material-edit/material-edit.component";
import {ConfirmComponent} from "../../common/modal/confirm/confirm.component";

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

    materialList: Array<any>;

    constructor(
        private materialService: MaterialService,
        private modalService: NgbModal
    ) {
    }

    ngOnInit() {

        this.getMaterial();
    }

    getMaterial(): void {
        this.materialService.getAllMaterial().subscribe(data => {
            this.materialList = data;
        });
    }

    onAddMaterial() {
        let material = new Material;
        const modalRef = this.modalService.open(MaterialEditComponent);
        modalRef.componentInstance.material = material;
        modalRef.componentInstance.title = 'Add New Material';

        modalRef.result.then((result) => {
            this.materialService.addMaterial(result).subscribe(() => {
                this.getMaterial();
            }, error => console.error(error));
        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });
    }

    onEdit(material: Material) {
        const modalRef = this.modalService.open(MaterialEditComponent);
        modalRef.componentInstance.material = material;

        modalRef.result.then((result) => {
            this.materialService.editMaterial(result).subscribe(() => {
                this.getMaterial();
            }, error => console.error(error));
        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });
    }

    onDelete(material: Material) {

        const modalRef = this.modalService.open(ConfirmComponent);
        modalRef.componentInstance.title = 'Delete ' + material.name + '?';
        modalRef.componentInstance.message = `Delete ${material.name}?`;

        modalRef.result.then((result) => {
            console.log(result);
            this.materialService.deleteMaterial(material).subscribe(() => {
                this.getMaterial();
            }, error => console.error(error));

        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });

    }

}
