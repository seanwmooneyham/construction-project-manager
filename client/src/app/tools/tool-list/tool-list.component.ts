import {Component, OnInit} from '@angular/core';
import {ToolsService} from "../../common/tools/tools.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmComponent} from "../../common/modal/confirm/confirm.component";
import {ToolEditComponent} from "../tool-edit/tool-edit.component";
import {Tool} from "../tool";


@Component({
    selector: 'app-tool-list',
    templateUrl: './tool-list.component.html',
    styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

    tools: Array<Tool>;

    constructor(
        private toolService: ToolsService,
        private modalService: NgbModal
    ) {
    }


    ngOnInit() {

        this.getTools();
    }

    getTools(): void {
        this.toolService.getAllTools().subscribe(data => {
            this.tools = data;
        });
    }

    onAddTool() {
        let tool = new Tool;
        const modalRef = this.modalService.open(ToolEditComponent);
        modalRef.componentInstance.tool = tool;
        modalRef.componentInstance.title = 'Add New Tool';

        modalRef.result.then((result) => {
            this.toolService.addTool(result).subscribe(() => {
                this.getTools();
            }, error => console.error(error));
        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });
    }

    onEdit(tool: Tool) {
        const modalRef = this.modalService.open(ToolEditComponent);
        modalRef.componentInstance.tool = tool;

        modalRef.result.then((result) => {
            this.toolService.editTool(result).subscribe(() => {
                this.getTools();
            }, error => console.error(error));
        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });
    }

    onDelete(tool: Tool) {

        const modalRef = this.modalService.open(ConfirmComponent);
        modalRef.componentInstance.title = 'Delete ' + tool.name + '?';
        modalRef.componentInstance.message = `Delete ${tool.name}?`;

        modalRef.result.then((result) => {
            console.log(result);
            this.toolService.deleteTool(tool).subscribe(() => {
                this.getTools();
            }, error => console.error(error));

        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });

    }

}
