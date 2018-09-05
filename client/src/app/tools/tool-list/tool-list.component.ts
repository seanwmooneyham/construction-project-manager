import { Component, OnInit } from '@angular/core';
import { ToolsService } from "../../common/tools/tools.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditComponent} from "../../common/modal/edit/edit.component";
import {ConfirmComponent} from "../../common/modal/confirm/confirm.component";
import { StateService } from '@uirouter/core';


@Component({
    selector: 'app-tool-list',
    templateUrl: './tool-list.component.html',
    styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

    tools: Array<any>;

    constructor(
        private toolService: ToolsService,
        private modalService: NgbModal,
        private $state: StateService
    ) {}


    ngOnInit() {

        this.getTools();
    }

    getTools(): void {
        this.toolService.getAll().subscribe(data => {
            this.tools = data;
        });
    }

    onEdit(toolName) {
        const modalRef = this.modalService.open(EditComponent);
        modalRef.componentInstance.title = 'Edit ' + toolName + '?';
        modalRef.componentInstance.tool = toolName;

        modalRef.result.then((result) => {
            console.log(`${result}: REST call to edit tool info`);
        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });
    }

    onDelete(toolName, toolId) {

        const modalRef = this.modalService.open(ConfirmComponent);
        modalRef.componentInstance.title = 'Delete ' + toolName + '?';
        modalRef.componentInstance.message = `Delete ${toolName}?`;

        modalRef.result.then(() => {
            this.toolService.deleteTool(toolId).subscribe(() => {
                this.reloadToolList(toolName);
            }, error => console.error(error));

        }, (reason) => {
            console.log(`reason for dismissal: ${reason}`);
        });

    }

    reloadToolList(toolname) {
        this.$state.reload().then(() => {
            console.log(`${toolname} deleted from list`);
        }, (reason) => {
            console.error(reason);
        });
    }



}
