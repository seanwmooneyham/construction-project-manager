import { Component, OnInit } from '@angular/core';
import { TOOLS } from "../../common/mock-tools";

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  tools = TOOLS;

  constructor() { }

  ngOnInit() {
  }

}
