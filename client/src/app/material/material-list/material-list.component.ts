import { Component, OnInit } from '@angular/core';
import { MATERIAL_LIST} from "../../common/mock-material";

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materialList = MATERIAL_LIST;

  constructor() { }

  ngOnInit() {
  }

}
