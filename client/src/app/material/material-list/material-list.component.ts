import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../../common/material/material.service";

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

    materialList: Array<any>;

    constructor(private materialService: MaterialService) {
    }

    ngOnInit() {

        this.getMaterial();
    }

    getMaterial(): void {
        this.materialService.getAll().subscribe(data => {
            this.materialList = data;
        });
    }

}
