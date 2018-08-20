import { Component, OnInit } from '@angular/core';
import { ToolsService} from "../../common/tools.service";


@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  tools: Array<any>;

  constructor(private toolService: ToolsService) { }

  ngOnInit() {
      this.toolService.getAll().subscribe(data => {
          this.tools = data;
      });
    //this.getTools();
  }

  getTools(): void {

  }

}
