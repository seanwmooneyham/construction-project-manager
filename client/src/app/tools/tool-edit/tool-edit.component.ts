import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-tool-edit',
    templateUrl: './tool-edit.component.html',
    styleUrls: ['./tool-edit.component.css']
})
export class ToolEditComponent {

    @Input() tool;
    @Input() title;
    newToolName: '';


    constructor( public activeModal: NgbActiveModal ) { }

    onEdit() {
        this.tool.name = this.newToolName;
        this.activeModal.close(this.tool);
    }


}
